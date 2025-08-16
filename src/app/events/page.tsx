import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Clock } from "lucide-react"

export default function Events() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent to-accent/80 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-montserrat font-semibold mb-6">
            Alumni Events
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-pt-sans max-w-3xl mx-auto">
            Join us for memorable gatherings, networking opportunities, and celebrations that bring our community together.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-semibold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600 font-pt-sans">
              Mark your calendars for these exciting upcoming events
            </p>
          </div>

          <div className="space-y-8">
            {/* Event 1 */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1 mb-6 lg:mb-0">
                    <div className="flex items-center text-accent mb-2">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span className="font-pt-sans font-semibold">2025 • Date TBA</span>
                    </div>
                    <h3 className="text-2xl font-montserrat font-semibold mb-3">Rulang Community Carnival</h3>
                    <p className="text-gray-600 font-pt-sans mb-4 max-w-2xl">
                      Join us for a grand celebration of our Rulang Primary School heritage. 
                      This special carnival will feature community activities, cultural performances, food stalls, and games for the whole family.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-500 mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm font-pt-sans">Rulang Primary School</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="text-sm font-pt-sans">Open to all alumni and families</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:ml-8">
                    <Button size="lg" className="w-full lg:w-auto">Register Interest</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Event 2 */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1 mb-6 lg:mb-0">
                    <div className="flex items-center text-accent mb-2">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span className="font-pt-sans font-semibold">2025 Dragon Boat Festival</span>
                    </div>
                    <h3 className="text-2xl font-montserrat font-semibold mb-3">Dragon Boat Festival 2025</h3>
                    <p className="text-gray-600 font-pt-sans mb-4 max-w-2xl">
                      Join the RPS Alumni Youth Wing for an exciting Dragon Boat Festival celebration featuring 
                      traditional cultural activities, dragon boat races, and community bonding experiences.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-500 mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm font-pt-sans">Venue to be announced</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="text-sm font-pt-sans">Youth Wing members and families</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:ml-8">
                    <Button size="lg" variant="outline" className="w-full lg:w-auto">Learn More</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Event 3 */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1 mb-6 lg:mb-0">
                    <div className="flex items-center text-accent mb-2">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span className="font-pt-sans font-semibold">Coming Soon</span>
                    </div>
                    <h3 className="text-2xl font-montserrat font-semibold mb-3">RPS Alumni Youth Wing Bowling Competition</h3>
                    <p className="text-gray-600 font-pt-sans mb-4 max-w-2xl">
                      A friendly bowling competition organized by the Alumni Youth Wing to bring together younger 
                      alumni for recreation, networking, and building lasting friendships in a fun, relaxed environment.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-500 mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm font-pt-sans">Bowling venue TBA</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="text-sm font-pt-sans">Open to all Youth Wing members</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:ml-8">
                    <Button size="lg" className="w-full lg:w-auto">Register Interest</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-semibold text-gray-900 mb-4">
              Past Events Highlights
            </h2>
            <p className="text-lg text-gray-600 font-pt-sans">
              Take a look at some memorable moments from our recent gatherings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary to-primary/80"></div>
              <div className="p-6">
                <h3 className="text-xl font-montserrat font-semibold mb-2">50th Anniversary Celebration</h3>
                <p className="text-gray-600 font-pt-sans mb-3">December 2023</p>
                <p className="text-gray-600 font-pt-sans text-sm">
                  A grand celebration marking 50 years of Rulang Primary School with over 500 alumni in attendance.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-accent to-accent/80"></div>
              <div className="p-6">
                <h3 className="text-xl font-montserrat font-semibold mb-2">Networking Night 2023</h3>
                <p className="text-gray-600 font-pt-sans mb-3">October 2023</p>
                <p className="text-gray-600 font-pt-sans text-sm">
                  Professional networking event connecting alumni across different industries and career stages.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-tertiary to-primary/60"></div>
              <div className="p-6">
                <h3 className="text-xl font-montserrat font-semibold mb-2">Family Fun Day</h3>
                <p className="text-gray-600 font-pt-sans mb-3">August 2023</p>
                <p className="text-gray-600 font-pt-sans text-sm">
                  A wonderful day of family activities, bringing together alumni with their children and spouses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-semibold text-gray-900 mb-4">
              Types of Events We Host
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3">Networking Events</h3>
              <p className="text-gray-600 font-pt-sans">
                Professional networking opportunities to expand your career connections.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3">Annual Reunions</h3>
              <p className="text-gray-600 font-pt-sans">
                Celebrate milestones and reconnect with classmates from your graduating year.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-tertiary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3">Workshop Series</h3>
              <p className="text-gray-600 font-pt-sans">
                Educational workshops covering various topics from career development to personal growth.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3">Social Gatherings</h3>
              <p className="text-gray-600 font-pt-sans">
                Casual meetups, family events, and recreational activities for the whole community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}