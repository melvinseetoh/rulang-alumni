import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import { 
  User, 
  Users, 
  Shield, 
  BookOpen,
  LogIn,
  UserPlus,
  Key,
  Layout,
  CreditCard,
  Network,
  Search,
  Gift,
  Settings,
  Calendar,
  Building,
  FileText,
  Edit3
} from "lucide-react"

export default function MockupsIndex() {
  const mockupSections = [
    {
      title: "Authentication Flow",
      description: "Login, registration, and password recovery mockups",
      icon: LogIn,
      color: "bg-blue-50 text-blue-600",
      links: [
        { name: "Login Page", href: "/mockups/auth/login", icon: LogIn },
        { name: "Registration (Invitation Only)", href: "/mockups/auth/register", icon: UserPlus },
        { name: "Forgot Password", href: "/mockups/auth/forgot-password", icon: Key },
      ]
    },
    {
      title: "Member Dashboard & Profile",
      description: "Member homepage, profile editing, and membership card",
      icon: User,
      color: "bg-green-50 text-green-600", 
      links: [
        { name: "Member Dashboard", href: "/mockups/member/dashboard", icon: Layout },
        { name: "Profile Management", href: "/mockups/member/profile", icon: User },
        { name: "Membership Card", href: "/mockups/member/membership", icon: CreditCard },
      ]
    },
    {
      title: "Member Networking",
      description: "Network connections and member discovery",
      icon: Users,
      color: "bg-purple-50 text-purple-600",
      links: [
        { name: "My Network", href: "/mockups/member/network", icon: Network },
        { name: "Discover Members", href: "/mockups/member/discover", icon: Search },
        { name: "Member Benefits", href: "/mockups/member/benefits", icon: Gift },
      ]
    },
    {
      title: "Admin Management",
      description: "Content management and administration",
      icon: Shield,
      color: "bg-orange-50 text-orange-600",
      links: [
        { name: "Admin Dashboard", href: "/mockups/admin/dashboard", icon: Layout },
        { name: "Member Management", href: "/mockups/admin/members", icon: Users },
        { name: "Events Management", href: "/mockups/admin/events", icon: Calendar },
        { name: "Partners Management", href: "/mockups/admin/partners", icon: Building },
        { name: "Admin Users", href: "/mockups/admin/users", icon: Shield },
      ]
    },
    {
      title: "Blog Platform",
      description: "Alumni stories, experiences, and community content",
      icon: BookOpen,
      color: "bg-red-50 text-red-600",
      links: [
        { name: "Blog Stories Listing", href: "/mockups/blog/list", icon: FileText },
        { name: "Individual Story View", href: "/mockups/blog/post/blog-001", icon: BookOpen },
        { name: "Story Editor", href: "/mockups/blog/editor", icon: Edit3 },
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <Logo size={40} className="rounded-full" />
                <span className="font-montserrat font-semibold text-xl text-primary">
                  Rulang Alumni
                </span>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <div>
                <h1 className="text-2xl font-montserrat font-semibold text-gray-900">
                  Phase 1 Mockups
                </h1>
                <p className="text-sm text-gray-600">
                  Interactive prototypes of the alumni webapp features
                </p>
              </div>
            </div>
            <Link href="/">
              <Button variant="outline">
                Back to Main Site
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <h2 className="text-xl font-montserrat font-semibold mb-4">Welcome to the Mockups</h2>
            <p className="text-gray-600 mb-4">
              These are interactive static mockups showcasing the design and functionality of the new 
              member-only features for the Rulang Primary School Alumni Association webapp. Click on 
              any link below to explore the different sections.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                ✅ Completed
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                ⏳ Planned
              </span>
            </div>
          </div>

          {/* Mockup Sections */}
          <div className="grid lg:grid-cols-2 gap-6">
            {mockupSections.map((section) => {
              const Icon = section.icon
              return (
                <div key={section.title} className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`p-3 rounded-full ${section.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-montserrat font-semibold text-gray-900">
                        {section.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {section.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {section.links.map((link) => {
                      const LinkIcon = link.icon
                      return (
                        <div key={link.name}>
                          {link.disabled ? (
                            <div className="flex items-center space-x-3 px-3 py-2 text-gray-400 cursor-not-allowed">
                              <LinkIcon className="h-4 w-4" />
                              <span className="text-sm">{link.name}</span>
                              <span className="text-xs bg-gray-100 px-2 py-1 rounded">Coming Soon</span>
                            </div>
                          ) : (
                            <Link
                              href={link.href}
                              className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md transition-colors group"
                            >
                              <LinkIcon className="h-4 w-4 group-hover:text-primary" />
                              <span className="text-sm group-hover:text-primary">{link.name}</span>
                            </Link>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>

          {/* QR Code Demo */}
          <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-montserrat font-semibold text-green-900 mb-3">🎯 New: QR Code Contact Generation</h3>
            <p className="text-sm text-green-800 mb-4">
              Membership cards now generate real QR codes that create contacts with member info when scanned!
            </p>
            <Link href="/mockups/qr-test">
              <Button className="bg-green-600 hover:bg-green-700">
                Test QR Code Generation →
              </Button>
            </Link>
          </div>

          {/* Development Notes */}
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-montserrat font-semibold text-blue-900 mb-3">Development Notes</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>• All mockups use the existing design system and components</li>
              <li>• Responsive layouts work across mobile, tablet, and desktop</li>
              <li>• Interactive elements show loading states and form validation</li>
              <li>• Privacy controls demonstrate field-level visibility settings</li>
              <li>• Mock data provides realistic content for all features</li>
              <li>• <strong>QR codes generate vCard contacts with member details</strong></li>
              <li>• <strong>Blog platform includes rich editor, comments, and sharing features</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}