"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AdminNav } from "../components/admin-nav"
import { mockEvents } from "../../lib/mock-data"
import { eventRegistrations } from "../lib/admin-mock-data"
import {
  Calendar,
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Users,
  MapPin,
  Clock,
  DollarSign,
  Eye,
  Download,
  Send,
  Settings,
  BarChart3,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  X
} from "lucide-react"

export default function AdminEventsPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedStatus, setSelectedStatus] = React.useState<string>("all")
  const [showCreateForm, setShowCreateForm] = React.useState(false)
  const [selectedEvent, setSelectedEvent] = React.useState<any>(null)
  const [showEventDetails, setShowEventDetails] = React.useState(false)

  // Enhanced event data with admin fields
  const allEvents = React.useMemo(() => {
    return mockEvents.map((event, index) => ({
      ...event,
      createdBy: "Alice Chen",
      createdAt: "2024-12-15T10:00:00Z",
      lastModified: "2024-12-20T14:30:00Z",
      registrationDeadline: new Date(event.date).toISOString(),
      capacity: event.maxCapacity,
      revenue: event.registrations * event.ticketPrice,
      waitingList: Math.max(0, event.registrations - event.maxCapacity),
      confirmed: Math.min(event.registrations, event.maxCapacity),
      emailsSent: 156,
      clickRate: 68.5,
      attendanceRate: 87.3
    }))
  }, [])

  const filteredEvents = React.useMemo(() => {
    let filtered = allEvents

    if (searchQuery) {
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    if (selectedStatus !== "all") {
      filtered = filtered.filter(event => event.status === selectedStatus)
    }

    return filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  }, [allEvents, searchQuery, selectedStatus])

  const eventStats = React.useMemo(() => {
    return {
      total: allEvents.length,
      upcoming: allEvents.filter(e => new Date(e.date) > new Date()).length,
      past: allEvents.filter(e => new Date(e.date) < new Date()).length,
      totalRegistrations: allEvents.reduce((sum, e) => sum + e.registrations, 0),
      totalRevenue: allEvents.reduce((sum, e) => sum + e.revenue, 0)
    }
  }, [allEvents])

  const getStatusBadge = (status: string, date: string) => {
    const isUpcoming = new Date(date) > new Date()
    const isPast = new Date(date) < new Date()
    
    if (isPast) {
      return <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">Past</span>
    } else if (isUpcoming) {
      return <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Upcoming</span>
    }
    
    const statusConfig = {
      open: { label: "Open", className: "bg-green-100 text-green-800" },
      closed: { label: "Closed", className: "bg-red-100 text-red-800" },
      draft: { label: "Draft", className: "bg-gray-100 text-gray-800" }
    }
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.open
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${config.className}`}>
        {config.label}
      </span>
    )
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    })
  }

  const formatCurrency = (amount: number) => {
    return `$${amount.toLocaleString()}`
  }

  const handleViewEvent = (event: any) => {
    setSelectedEvent(event)
    setShowEventDetails(true)
  }

  const handleDeleteEvent = (eventId: string) => {
    if (confirm("Are you sure you want to delete this event?")) {
      alert(`Event ${eventId} deleted! (This is a mockup)`)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminNav currentPage="events" />
      
      <div className="flex-1 lg:ml-0">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-montserrat font-semibold text-gray-900">
                  Event Management
                </h1>
                <p className="text-sm text-gray-600">
                  Create and manage alumni events and registrations
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export Data
                </Button>
                <Button onClick={() => setShowCreateForm(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Event
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="p-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-2xl font-bold text-blue-600">{eventStats.total}</div>
              <div className="text-sm text-gray-600">Total Events</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-2xl font-bold text-green-600">{eventStats.upcoming}</div>
              <div className="text-sm text-gray-600">Upcoming</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-2xl font-bold text-gray-600">{eventStats.past}</div>
              <div className="text-sm text-gray-600">Past Events</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-2xl font-bold text-purple-600">{eventStats.totalRegistrations}</div>
              <div className="text-sm text-gray-600">Total Registrations</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-2xl font-bold text-green-600">{formatCurrency(eventStats.totalRevenue)}</div>
              <div className="text-sm text-gray-600">Total Revenue</div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search events..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="all">All Status</option>
                <option value="open">Open</option>
                <option value="closed">Closed</option>
                <option value="draft">Draft</option>
              </select>

              <Button variant="outline" className="justify-center">
                <Filter className="h-4 w-4 mr-2" />
                Date Range
              </Button>

              <Button variant="outline" className="justify-center">
                <BarChart3 className="h-4 w-4 mr-2" />
                Analytics
              </Button>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-3 right-3">
                    {getStatusBadge(event.status, event.date)}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-montserrat font-semibold text-lg mb-2 line-clamp-2">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {formatDate(event.date)} at {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {event.registrations}/{event.maxCapacity} registered
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-2" />
                      {formatCurrency(event.revenue)} revenue
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Registration Progress</span>
                      <span>{Math.round((event.registrations / event.maxCapacity) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${Math.min((event.registrations / event.maxCapacity) * 100, 100)}%` }}
                      />
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleViewEvent(event)}
                      className="flex-1"
                    >
                      <Eye className="h-3 w-3 mr-2" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteEvent(event.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Event Details Modal */}
      {showEventDetails && selectedEvent && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-montserrat font-semibold">Event Details</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowEventDetails(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Event Header */}
              <div className="flex items-start space-x-4">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-32 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="text-xl font-montserrat font-semibold mb-2">{selectedEvent.title}</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {formatDate(selectedEvent.date)} at {selectedEvent.time}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {selectedEvent.location}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <DollarSign className="h-4 w-4 mr-2" />
                      {formatCurrency(selectedEvent.ticketPrice)} per ticket
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      {selectedEvent.capacity} max capacity
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h5 className="font-medium text-gray-900 mb-2">Description</h5>
                <p className="text-gray-600">{selectedEvent.description}</p>
              </div>

              {/* Registration Stats */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600">{selectedEvent.registrations}</div>
                  <div className="text-sm text-blue-800">Total Registrations</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-600">{selectedEvent.confirmed}</div>
                  <div className="text-sm text-green-800">Confirmed Attendees</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-600">{formatCurrency(selectedEvent.revenue)}</div>
                  <div className="text-sm text-purple-800">Revenue Generated</div>
                </div>
              </div>

              {/* Email Campaign Stats */}
              <div>
                <h5 className="font-medium text-gray-900 mb-3">Email Campaign Performance</h5>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-600">Emails Sent</span>
                    <span className="font-medium">{selectedEvent.emailsSent}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-600">Click Rate</span>
                    <span className="font-medium">{selectedEvent.clickRate}%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-600">Attendance Rate</span>
                    <span className="font-medium">{selectedEvent.attendanceRate}%</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3 pt-4 border-t border-gray-200">
                <Button>
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Event
                </Button>
                <Button variant="outline">
                  <Send className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export Attendees
                </Button>
                <Button variant="outline">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View Analytics
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create Event Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-montserrat font-semibold">Create New Event</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowCreateForm(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="p-6">
              <div className="text-center py-8 text-gray-500">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <p>Event creation form would go here</p>
                <p className="text-sm mt-2">(This is a mockup)</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}