// pages/login.js
'use client'
import { useState } from 'react'
import Head from 'next/head'
import "./login.css"     // your CSS file
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa'

export default function LoginPage() {
  const [rightPanelActive, setRightPanelActive] = useState(false)

  return (
    <>
      <Head>
        <title>Login | Signup</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
      </Head>

      <div
        className={
          rightPanelActive
            ? 'container right-panel-active'
            : 'container'
        }
      >
        {/* SIGN UP */}
        <div className="form-container signup-container">
          <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social"><FaFacebookF /></a>
              <a href="#" className="social"><FaGooglePlusG /></a>
              <a href="#" className="social"><FaLinkedinIn /></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>

        {/* LOGIN */}
        <div className="form-container login-container">
          <form action="#">
            <h1>Login</h1>
            <div className="social-container">
              <a href="#" className="social"><FaFacebookF /></a>
              <a href="#" className="social"><FaGooglePlusG /></a>
              <a href="#" className="social"><FaLinkedinIn /></a>
            </div>
            <span>or use your account</span>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Login</button>
          </form>
        </div>

        {/* OVERLAY PANELS */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button
                className="ghost"
                onClick={() => setRightPanelActive(false)}
              >
                Login
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello Friend</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost"
                onClick={() => setRightPanelActive(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
