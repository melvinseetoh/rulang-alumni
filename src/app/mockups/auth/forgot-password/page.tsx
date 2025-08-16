"use client"

import * as React from "react"
import Link from "next/link"
import { Logo } from "@/components/ui/logo"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, CheckCircle, Loader2 } from "lucide-react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)
  const [error, setError] = React.useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (!email) {
      setError("Email is required")
      setIsLoading(false)
      return
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address")
      setIsLoading(false)
      return
    }

    // Mock API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSuccess(true)
    }, 2000)
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex flex-col items-center">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Logo size={48} className="rounded-full" />
              <span className="font-montserrat font-semibold text-xl text-primary">
                Rulang Alumni
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-sm rounded-lg sm:px-10 border border-gray-200">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              
              <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-2">
                Check Your Email
              </h2>
              
              <p className="text-sm text-gray-600 mb-6">
                We've sent a password reset link to:
              </p>
              
              <p className="text-sm font-medium text-gray-900 bg-gray-50 px-4 py-2 rounded-md mb-6">
                {email}
              </p>
              
              <p className="text-sm text-gray-600 mb-8">
                Click the link in the email to reset your password. The link will expire in 24 hours.
              </p>

              <div className="space-y-4">
                <Button asChild className="w-full">
                  <Link href="/mockups/auth/login">
                    Back to Sign In
                  </Link>
                </Button>
                
                <p className="text-xs text-gray-500">
                  Didn't receive the email? Check your spam folder or{" "}
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-primary hover:text-primary/80 font-medium"
                  >
                    try again
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            &copy; 2024 Rulang Primary School Alumni Association. All rights reserved.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Logo and Header */}
        <div className="flex flex-col items-center">
          <Link href="/" className="flex items-center space-x-2 mb-6">
            <Logo size={48} className="rounded-full" />
            <span className="font-montserrat font-semibold text-xl text-primary">
              Rulang Alumni
            </span>
          </Link>
          <h2 className="text-center text-3xl font-montserrat font-semibold text-gray-900">
            Reset Your Password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 font-pt-sans">
            Enter your email address and we'll send you a link to reset your password
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-sm rounded-lg sm:px-10 border border-gray-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-3 rounded-md text-sm">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full pl-10 pr-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary ${
                    error ? "border-destructive" : "border-gray-300"
                  }`}
                  placeholder="Enter your email address"
                  disabled={isLoading}
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isLoading ? "Sending..." : "Send Reset Link"}
            </Button>
          </form>

          <div className="mt-6">
            <div className="flex items-center justify-center">
              <Link
                href="/mockups/auth/login"
                className="flex items-center text-sm text-primary hover:text-primary/80 font-medium"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="text-sm font-medium text-blue-800 mb-2">Need Help?</h4>
          <p className="text-xs text-blue-700 mb-2">
            If you're having trouble accessing your account, please contact our support team.
          </p>
          <Link href="/contact" className="text-xs text-blue-800 hover:text-blue-900 font-medium">
            Contact Support →
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-xs text-gray-500">
          &copy; 2024 Rulang Primary School Alumni Association. All rights reserved.
        </p>
        <div className="mt-2 space-x-4">
          <Link href="/about" className="text-xs text-gray-500 hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="text-xs text-gray-500 hover:text-primary">
            Contact
          </Link>
          <Link href="/" className="text-xs text-gray-500 hover:text-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}