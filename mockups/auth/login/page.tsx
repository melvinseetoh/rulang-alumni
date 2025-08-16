import Link from "next/link"
import { LoginForm } from "../../components/auth/login-form"
import { Logo } from "@/components/ui/logo"

export default function LoginPage() {
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
            Welcome Back
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 font-pt-sans">
            Sign in to access your alumni account
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-sm rounded-lg sm:px-10 border border-gray-200">
          <LoginForm />
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