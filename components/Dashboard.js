"use client"
import React, { useEffect, useState, useRef } from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { fetchuser, updateProfile } from '@/actions/useractions'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Bounce } from 'react-toastify'

const Dashboard = () => {
    const { data: session, status } = useSession()
    const router = useRouter()

    const [form, setForm] = useState({
        name: '',
        email: '',
        username: '',
        profilepic: '',
        coverpic: '',
        razorpayid: '',
        razorpaysecret: ''
    })

    const hasFetched = useRef(false);

    useEffect(() => {
      if (status === "authenticated" && !hasFetched.current) {
        hasFetched.current = true;
        getData();
      } else if (status !== "loading" && !session) {
        router.push('/');
      }
    }, [status]);
    

    const getData = async () => {
        try {
            const userData = await fetchuser(session?.user?.name)

            if (userData) {
                setForm({
                    name: userData.name || '',
                    email: userData.email || '',
                    username: userData.username || '',
                    profilepic: userData.profilepic || '',
                    coverpic: userData.coverpic || '',
                    razorpayid: userData.razorpayid || '',
                    razorpaysecret: userData.razorpaysecret || ''
                })
            } else {
                toast.error("User not found!", {
                    position: "top-right",
                    transition: Bounce
                })
            }
        } catch (err) {
            console.error("Error fetching user data:", err)
            toast.error("Something went wrong while loading data 😢")
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await updateProfile(form, session?.user?.name)
            toast.success('Profile Updated', {
                position: "top-right",
                autoClose: 5000,
                transition: Bounce,
            })
        } catch (err) {
            console.error("Update error:", err)
            toast.error("Failed to update profile.")
        }
    }

    return (
        <>
            <ToastContainer />
            <div className="container mx-auto py-5 px-6">
                <h1 className="text-center text-white my-5 text-3xl font-bold">Welcome to your Dashboard</h1>

                <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>
                    {[
                        { label: "Name", name: "name", type: "text" },
                        { label: "Email", name: "email", type: "email" },
                        { label: "Username", name: "username", type: "text" },
                        { label: "Profile Picture", name: "profilepic", type: "text" },
                        { label: "Cover Picture", name: "coverpic", type: "text" },
                        { label: "Razorpay ID", name: "razorpayid", type: "text" },
                        { label: "Razorpay Secret", name: "razorpaysecret", type: "text" }
                    ].map(({ label, name, type }) => (
                        <div className="my-2" key={name}>
                            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                {label}
                            </label>
                            <input
                                type={type}
                                id={name}
                                name={name}
                                value={form[name] ?? ''}
                                onChange={handleChange}
                                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                    ))}

                    <div className="my-6">
                        <button
                            type="submit"
                            className="block w-full p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800 font-medium text-sm"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Dashboard
