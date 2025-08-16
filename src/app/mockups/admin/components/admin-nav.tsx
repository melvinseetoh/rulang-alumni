"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar } from "../../components/ui/avatar"
import { adminUser } from "../lib/admin-mock-data"
import {
  LayoutDashboard,
  Users,
  Calendar,
  Building,
  Settings,
  Shield,
  Bell,
  LogOut,
  Menu,
  X,
  Home,
  FileText,
  ShoppingBag
} from "lucide-react"

interface AdminNavProps {
  currentPage?: string
}

export function AdminNav({ currentPage }: AdminNavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const navItems = [
    { 
      key: "dashboard", 
      label: "Dashboard", 
      href: "/mockups/admin/dashboard", 
      icon: LayoutDashboard 
    },
    { 
      key: "members", 
      label: "Members", 
      href: "/mockups/admin/members", 
      icon: Users 
    },
    { 
      key: "events", 
      label: "Events", 
      href: "/mockups/admin/events", 
      icon: Calendar 
    },
    { 
      key: "blog", 
      label: "Blog", 
      href: "/mockups/admin/blog", 
      icon: FileText 
    },
    { 
      key: "partners", 
      label: "Partners", 
      href: "/mockups/admin/partners", 
      icon: Building 
    },
    { 
      key: "merchandise", 
      label: "Merchandise", 
      href: "/mockups/admin/merchandise", 
      icon: ShoppingBag 
    },
    { 
      key: "users", 
      label: "Admin Users", 
      href: "/mockups/admin/users", 
      icon: Shield 
    }
  ]

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64 bg-white border-r border-gray-200">
          {/* Logo/Brand */}
          <div className="flex items-center h-16 px-6 border-b border-gray-200">
            <Link href="/mockups/admin/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">RA</span>
              </div>
              <div>
                <div className="font-montserrat font-semibold text-gray-900">Rulang Alumni</div>
                <div className="text-xs text-gray-500">Admin Panel</div>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = currentPage === item.key
              
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-3 mb-3">
              <Avatar
                src={adminUser.profilePhoto}
                name={adminUser.name}
                size={40}
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {adminUser.name}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {adminUser.role}
                </p>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <Link href="/mockups">
                <Button variant="outline" size="sm" className="flex-1">
                  <Home className="h-4 w-4 mr-2" />
                  Public Site
                </Button>
              </Link>
              <Button variant="ghost" size="sm">
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">RA</span>
            </div>
            <div className="font-montserrat font-semibold text-gray-900">Admin</div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <Bell className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-xl">
            <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
              <span className="font-montserrat font-semibold">Menu</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <nav className="p-6 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = currentPage === item.key
                
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="mr-3 h-5 w-5" />
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
              <div className="flex items-center space-x-3 mb-4">
                <Avatar
                  src={adminUser.profilePhoto}
                  name={adminUser.name}
                  size={40}
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">{adminUser.name}</p>
                  <p className="text-xs text-gray-500">{adminUser.role}</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}