import { NextResponse } from "next/server";
import Payment from "@/models/Payment";
import connectDb from "@/components/db/connectDb";
import User from "@/models/User";
import crypto from "crypto";

function isPaymentValid({ order_id, payment_id, signature }, secret) {
  const generatedSignature = crypto
    .createHmac("sha256", secret)
    .update(`${order_id}|${payment_id}`)
    .digest("hex");

  return generatedSignature === signature;
}

export const POST = async (req) => {
  await connectDb();
  let body = await req.formData();
  body = Object.fromEntries(body);

  const payment = await Payment.findOne({ oid: body.razorpay_order_id });
  if (!payment) {
    return NextResponse.json({ success: false, message: "Order Id not found" });
  }

  const user = await User.findOne({ username: payment.to_user });
  if (!user) {
    return NextResponse.json({ success: false, message: "User not found" });
  }

  const isValid = isPaymentValid({
    order_id: body.razorpay_order_id,
    payment_id: body.razorpay_payment_id,
    signature: body.razorpay_signature
  }, user.razorpaysecret);

  if (isValid) {
    const updatedPayment = await Payment.findOneAndUpdate(
      { oid: body.razorpay_order_id },
      { done: true },
      { new: true }
    );

    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/admin/profile/${updatedPayment.to_user}?paymentdone=true`);
  } else {
    return NextResponse.json({ success: false, message: "Payment Verification Failed" });
  }
};
