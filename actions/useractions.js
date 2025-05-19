"use server"

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDb from "@/db/connectDb"
import User from "@/models/User"

// 1. Initiate Razorpay payment
export const initiate = async (amount, to_username, paymentform) => {
    await connectDb()

    const user = await User.findOne({ username: to_username })
    const secret = user?.razorpaysecret

    const instance = new Razorpay({
        key_id: user?.razorpayid,
        key_secret: secret,
    })

    const options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    const x = await instance.orders.create(options)

    // Save pending payment in DB
    await Payment.create({
        oid: x.id,
        amount: amount / 100,
        to_user: to_username,
        name: paymentform.name,
        message: paymentform.message,
    })

    return x
}

// 2. Fetch user details
export const fetchuser = async (username) => {
    await connectDb()
    const u = await User.findOne({ username })
    return u?.toObject({ flattenObjectIds: true })
}

// 3. Fetch successful payments
export const fetchpayments = async (username) => {
    await connectDb()
    const p = await Payment.find({ to_user: username, done: true })
        .sort({ amount: -1 })
        .limit(10)
        .lean()
    // Convert _id and date fields to strings for serialization
    return p.map(payment => ({
        ...payment,
        _id: payment._id?.toString?.(),
        createdAt: payment.createdAt?.toISOString?.(),
        updatedAt: payment.updatedAt?.toISOString?.(),
    }))
}

// 4. Update user profile
export const updateProfile = async (data, oldusername) => {
    await connectDb()

    const ndata = data // ✅ Fixed: no Object.fromEntries here

    // If username is changed, check if new one exists
    if (oldusername !== ndata.username) {
        const existingUser = await User.findOne({ username: ndata.username })
        if (existingUser) {
            return { error: "Username already exists" }
        }

        // Update user
        await User.updateOne({ email: ndata.email }, ndata)

        // Update all payment records with the new username
        await Payment.updateMany({ to_user: oldusername }, { to_user: ndata.username })
    } else {
        await User.updateOne({ email: ndata.email }, ndata)
    }

    return { success: true }
}
