"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { mockEvents } from "@/app/mockups/lib/mock-data"
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  DollarSign,
  Share2,
  Heart,
  ArrowLeft,
  CheckCircle,
  Star,
  ChevronRight
} from "lucide-react"

export default function RulangCommunityCarnivalPage() {
  const event = mockEvents.find(e => e.id === "event-003")
  const [isRegistered, setIsRegistered] = React.useState(false)
  const [registrationCount, setRegistrationCount] = React.useState(event?.registrations || 150)

  if (!event) {
    return <div>Event not found</div>
  }

  const handleRegister = () => {
    setIsRegistered(true)
    setRegistrationCount(prev => prev + 1)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    })
  }

  const progressPercentage = Math.round((registrationCount / event.maxCapacity) * 100)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/events">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Events
                </Button>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-xl font-montserrat font-semibold text-gray-900">
                Event Details
              </h1>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Image */}
          <div className="relative w-full h-96 rounded-lg overflow-hidden mb-8">
            <img
              src="/images/community-carnival.jpg"
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-3 py-1 bg-primary rounded-full text-sm font-medium">
                  Upcoming Event
                </span>
                <span className="px-3 py-1 bg-green-600 rounded-full text-sm font-medium">
                  Free Entry
                </span>
              </div>
              <h1 className="text-4xl font-montserrat font-bold mb-2">
                {event.title}
              </h1>
              <p className="text-xl text-gray-200">
                A grand community carnival celebrating our heritage with fun for everyone
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Event Details */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-2xl font-montserrat font-semibold mb-6">Event Details</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Date & Time</div>
                      <div className="text-gray-600">{formatDate(event.date)}</div>
                      <div className="text-gray-600">{event.time}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Location</div>
                      <div className="text-gray-600">{event.location}</div>
                      <div className="text-sm text-primary hover:underline cursor-pointer">
                        View on Map
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <DollarSign className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Entry Fee</div>
                      <div className="text-gray-600">Free admission for all</div>
                      <div className="text-sm text-green-600">Family-friendly event</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Attendance</div>
                      <div className="text-gray-600">{registrationCount}/{event.maxCapacity} registered</div>
                      <div className="text-sm text-orange-600">{event.maxCapacity - registrationCount} spots left</div>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Registration Progress</span>
                    <span>{progressPercentage}% filled</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-primary h-3 rounded-full transition-all duration-300"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-2xl font-montserrat font-semibold mb-4">About This Event</h2>
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {event.description}
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Join us for a spectacular community carnival that brings together alumni, families, and friends 
                    for a day of celebration, entertainment, and nostalgia. This exciting event will feature carnival 
                    games, local food vendors, live performances, and activities for all ages.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What to Expect</h3>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Classic carnival games and prize booths</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Local food vendors with traditional and modern treats</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Live performances by local artists and school groups</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Heritage exhibits showcasing Rulang's history</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Kids' zone with face painting and bouncy castles</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Alumni photo booth and memory wall</span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Activities & Attractions</h3>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start space-x-2">
                      <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>Ring toss, duck pond, and basketball shootout</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>Traditional snacks: satay, ice kacang, and rojak</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>Student performances and cultural demonstrations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>Silent auction fundraiser for school programs</span>
                    </li>
                  </ul>

                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-blue-800">
                      <strong>Note:</strong> This is a rain-or-shine event. In case of inclement weather, 
                      activities will be moved to the school's indoor facilities including the hall and gymnasium.
                    </p>
                  </div>
                </div>
              </div>

              {/* Organizer Info */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-2xl font-montserrat font-semibold mb-4">Event Organizer</h2>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    RPS
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">RPS Alumni Association</h3>
                    <p className="text-gray-600 mb-3">
                      The Rulang Primary School Alumni Association organizes community events to strengthen 
                      bonds between current and past students while supporting the school's ongoing programs.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>📧 events@rulang-alumni.org</span>
                      <span>📱 +65 6123 4567</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Registration Card */}
              <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    FREE
                  </div>
                  <div className="text-gray-600">admission</div>
                </div>

                {!isRegistered ? (
                  <Button 
                    onClick={handleRegister}
                    className="w-full py-3 text-lg mb-4"
                  >
                    Register Now
                  </Button>
                ) : (
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <div className="text-lg font-semibold text-green-600 mb-2">
                      Registration Confirmed!
                    </div>
                    <div className="text-sm text-gray-600">
                      You'll receive a confirmation email shortly
                    </div>
                  </div>
                )}

                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Registration deadline:</span>
                    <span className="font-medium">September 18, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-medium">2:00 PM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Age requirement:</span>
                    <span className="font-medium">All ages welcome</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-600 text-center">
                    Questions about this event?
                  </div>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full mt-2">
                      Contact Organizer
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-between">
                    Add to Calendar
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between">
                    View Location
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between">
                    Share with Friends
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Other Events */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Other Upcoming Events</h3>
                <div className="space-y-4">
                  {mockEvents.filter(e => e.id !== event.id).slice(0, 2).map((otherEvent) => (
                    <Link 
                      key={otherEvent.id} 
                      href={`/events/${otherEvent.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block p-3 border border-gray-200 rounded-lg hover:border-primary transition-colors"
                    >
                      <div className="font-medium text-gray-900 text-sm line-clamp-2">
                        {otherEvent.title}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {formatDate(otherEvent.date)} • {otherEvent.location}
                      </div>
                    </Link>
                  ))}
                </div>
                <Link href="/events">
                  <Button variant="outline" className="w-full mt-4">
                    View All Events
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}