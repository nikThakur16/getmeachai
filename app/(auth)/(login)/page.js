'use client';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import './login.css';
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';
import { PageTransition } from '../../../components/loaders/PageTransition';
export default function LoginPage() {
  const [rightPanelActive, setRightPanelActive] = useState(false);
  const { data: session , status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const [showTransition, setShowTransition] = useState(false);


  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const isPaymentRedirect = queryParams.get('paymentdone') === 'true';
  
    if (status === "authenticated" && pathname === "/" && !isPaymentRedirect) {
      setShowTransition(true);
      setTimeout(() => {
        router.push("/admin");
      }, 1000);
    }
  }, [status, router, pathname]);
  

  if (showTransition) {
    return <PageTransition />;
  }

  return (
    <div className="login-bg">
      <Head>
        <title>Login | Signup</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={rightPanelActive ? 'container right-panel-active' : 'container'}>
        {/* SIGN UP */}
        <div className="form-container signup-container">
          <form onSubmit={(e) => { e.preventDefault(); }}>
            <h1>Create Account</h1>
            <div className="social-container">
              <Link href="#" className="social"><FaFacebookF /></Link>
              <Link href="#" className="social"><FaGooglePlusG /></Link>
              <Link href="#" className="social"><FaLinkedinIn /></Link>
              <button onClick={() => signIn('github')} className="social"><FaGithub /></button>
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
          <form onSubmit={(e) => { e.preventDefault(); }}>
            <h1>Login</h1>
            <div className="social-container">
              <Link href="#" className="social"><FaFacebookF /></Link>
              <Link href="#" className="social"><FaGooglePlusG /></Link>
              <Link href="#" className="social"><FaLinkedinIn /></Link>
              <button onClick={() => signIn('github')} className="social"><FaGithub /></button>
            </div>
            <span>or use your account</span>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <Link href="#">Forgot your password?</Link>
            <button>Login</button>
          </form>
        </div>

        {/* OVERLAY PANELS */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" onClick={() => setRightPanelActive(false)}>Login</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello Friend</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" onClick={() => setRightPanelActive(true)}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
