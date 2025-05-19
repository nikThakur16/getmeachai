"use client"

import React, { useEffect, useState, useRef } from 'react'
import Script from 'next/script'
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'
import { useSearchParams, useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Bounce } from 'react-toastify'
import Image from 'next/image'
import avatar from "@/public/gifs/icons8-user.gif"

const Collections = ({ data }) => {
  const [paymentForm, setPaymentForm] = useState({ name: "", message: "", amount: "" })
  const [currentUser, setCurrentUser] = useState(null)
  const [payments, setPayments] = useState([])
  const searchParams = useSearchParams()
  const router = useRouter()
  const hasShownToast = useRef(false)

  useEffect(() => {
    const getData = async () => {
      const user = await fetchuser(data)
      const userPlain = {
        ...user,
        _id: user._id?.toString(),
        createdAt: user.createdAt?.toString(),
        updatedAt: user.updatedAt?.toString()
      }
      setCurrentUser(userPlain)

      const dbPayments = await fetchpayments(data)
      const plainPayments = dbPayments.map(p => ({
        ...p,
        _id: p._id?.toString(),
        createdAt: p.createdAt?.toString(),
        updatedAt: p.updatedAt?.toString()
      }))
      setPayments(Array.isArray(plainPayments) ? plainPayments : [])
    }

    getData()
  }, [data])

  useEffect(() => {
    const isDone = searchParams.get("paymentdone") === "true"
    if (typeof window !== "undefined" && isDone && !hasShownToast.current) {
      toast.success("Thanks for your donation!", {
        position: "top-right",
        autoClose: 5000,
        theme: "light",
        transition: Bounce,
      })
      hasShownToast.current = true

      setTimeout(() => {
        router.push(`/admin/profile/${data}`)
      }, 2000)
    }
  }, [searchParams])

  const handleChange = (e) => {
    setPaymentForm({ ...paymentForm, [e.target.name]: e.target.value })
  }

  const pay = async (amount) => {
    if (!currentUser) {
      toast.error("User info not loaded yet.")
      return
    }

    if (typeof window === "undefined" || !window.Razorpay) {
      toast.error("Payment gateway not loaded yet.")
      return
    }

    const order = await initiate(amount, data, paymentForm)
    const orderId = order.id

    const options = {
      key: currentUser.razorpayid,
      amount,
      currency: "INR",
      name: "Get Me A Chai",
      description: "Support the creator",
      image: "https://example.com/your_logo",
      order_id: orderId,
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      prefill: {
        name: paymentForm.name,
        email: "example@email.com",
        contact: "9000090000"
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        color: "#3399cc"
      }
    }

    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  const totalAmount = payments.reduce((a, b) => a + Number(b.amount || 0), 0)

  return (
    <>
      <ToastContainer />
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />

      <div className='text-slate-400 mt-5 text-center w-full'>
        {payments.length} Payments • ₹{totalAmount} raised
      </div>

      <div className="payment flex flex-col md:flex-row gap-3 xl:w-[80%] w-full mt-11 mx-auto">
        {/* Supporters */}
        <div className="supporters w-full md:w-1/2 bg-slate-900 rounded-lg text-white px-2 md:p-10 text-center md:text-left">
          <h2 className='text-2xl font-bold my-5'>Top 10 Supporters</h2>
          <ul className='mx-5 text-lg'>
            {payments.length === 0 && <li>No payments yet</li>}
            {payments.map((p) => (
              <li key={p._id} className='my-4 flex gap-2 items-center'>
                <Image width={33} height={33} src={avatar} alt="user avatar"  className='rounded-full'/>
                <span className='  text-sm md:text-lg'>
                  {p.name} donated <span className='font-bold'>₹{p.amount}</span> with a message “{p.message}”
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Make a Payment */}
        <div className="makePayment w-full md:w-1/2 bg-slate-900 rounded-lg text-white px-2 md:p-10">
          <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
          <div className='flex flex-col gap-3'>
            <input
              name="name"
              value={paymentForm.name}
              onChange={handleChange}
              className='w-full p-3 rounded-lg bg-slate-800'
              placeholder='Enter Name'
            />
            <input
              name="message"
              value={paymentForm.message}
              onChange={handleChange}
              className='w-full p-3 rounded-lg bg-slate-800'
              placeholder='Enter Message'
            />
            <input
              name="amount"
              value={paymentForm.amount}
              onChange={handleChange}
              className='w-full p-3 rounded-lg bg-slate-800'
              placeholder='Enter Amount'
              type="number"
            />
            <button
              onClick={() => pay(Number(paymentForm.amount) * 100)}
              className="text-white bg-gradient-to-br from-purple-900 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 disabled:bg-slate-600"
              disabled={
                paymentForm.name.trim().length < 3 ||
                paymentForm.message.trim().length < 4 ||
                !paymentForm.amount ||
                Number(paymentForm.amount) <= 0
              }
            >
              Pay
            </button>
          </div>

          {/* Quick Pay Buttons */}
          <div className='flex flex-col md:flex-row gap-2 mt-5'>
            {[10, 20, 30].map((amt) => (
              <button
                key={amt}
                className='bg-slate-800 p-3 rounded-lg'
                onClick={() => pay(amt * 100)}
              >
                Pay ₹{amt}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Collections
