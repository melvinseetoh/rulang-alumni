import Link from "next/link"
import { Logo } from "@/components/ui/logo"
import { Button } from "@/components/ui/button"
import { CheckCircle, Mail, Shield, Users } from "lucide-react"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
        {/* Logo and Header */}
        <div className="flex flex-col items-center mb-8">
          <Link href="/" className="flex items-center space-x-2 mb-6">
            <Logo size={48} className="rounded-full" />
            <span className="font-montserrat font-semibold text-xl text-primary">
              Rulang Alumni
            </span>
          </Link>
          <h2 className="text-center text-3xl font-montserrat font-semibold text-gray-900">
            Membership by Invitation Only
          </h2>
          <p className="mt-2 text-center text-lg text-gray-600 font-pt-sans max-w-xl">
            We maintain an exclusive community of verified Rulang Primary School alumni
          </p>
        </div>

        <div className="bg-white py-8 px-4 shadow-sm rounded-lg sm:px-10 border border-gray-200">
          {/* Invitation Process */}
          <div className="mb-8">
            <h3 className="text-lg font-montserrat font-semibold text-gray-900 mb-6 text-center">
              How to Join Our Alumni Community
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900">1. Request an Invitation</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Contact our admin team with your graduation details and class information
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900">2. Verification Process</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Our team will verify your alumni status using school records and references
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900">3. Welcome to the Community</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Once verified, you'll receive an invitation email to complete your registration
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-8 p-6 bg-gray-50 rounded-lg">
            <h4 className="font-montserrat font-semibold text-gray-900 mb-4 flex items-center">
              <Users className="h-5 w-5 mr-2 text-primary" />
              Member Benefits
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                Connect with verified alumni from your graduating class
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                Access to exclusive events and reunions
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                Professional networking opportunities
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                Partner discounts and exclusive offers
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                Digital membership card and directory access
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="font-montserrat font-semibold text-gray-900">Ready to Join?</h4>
            <p className="text-sm text-gray-600">
              Contact our membership team to begin the invitation process. Please include:
            </p>
            <ul className="text-sm text-gray-600 ml-4 space-y-1">
              <li>• Your full name and graduation year</li>
              <li>• Class/classes you were in</li>
              <li>• Names of teachers or classmates who can verify</li>
              <li>• Current contact information</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button asChild className="flex-1">
                <Link href="/contact">
                  Contact Admin Team
                </Link>
              </Button>
              <Button variant="outline" asChild className="flex-1">
                <a href="mailto:membership@rulangalumni.sg">
                  Email Membership Team
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Already have an invitation */}
        <div className="mt-6 bg-white py-6 px-4 shadow-sm rounded-lg sm:px-10 border border-gray-200">
          <div className="text-center">
            <h4 className="font-medium text-gray-900 mb-2">Already received an invitation?</h4>
            <p className="text-sm text-gray-600 mb-4">
              Check your email for the invitation link to complete your registration
            </p>
            <Button variant="outline" asChild>
              <Link href="/mockups/auth/login">
                Sign In Instead
              </Link>
            </Button>
          </div>
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