import { Button } from "@/components/ui/button"
import { Calendar, Users, Award, MapPin } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-semibold mb-6 leading-tight">
            Rulang Primary School Alumni Association
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 font-pt-sans max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Reconnecting with your school—it's about giving back, staying involved, 
            and being part of a community that continues to grow and thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
            <Button size="lg" variant="secondary" className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto min-h-[44px]">
              Become a Member
            </Button>
            <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto min-h-[44px] border-white bg-transparent text-white hover:bg-white hover:text-primary">
              View Upcoming Events
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-semibold text-primary">1930</div>
              <div className="text-sm sm:text-base text-gray-600 font-pt-sans">Founding Year</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-semibold text-primary">1986</div>
              <div className="text-sm sm:text-base text-gray-600 font-pt-sans">Current Campus Opened</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-semibold text-primary">846+</div>
              <div className="text-sm sm:text-base text-gray-600 font-pt-sans">Facebook Community</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-semibold text-gray-900 mb-4 leading-tight">
              Connecting Generations of Rulang Students
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-pt-sans max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              From networking opportunities to nostalgic reunions, we're here to keep the Rulang spirit alive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3">Alumni Network</h3>
              <p className="text-gray-600 font-pt-sans">
                Connect with classmates and expand your professional network across generations and industries.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3">Events & Reunions</h3>
              <p className="text-gray-600 font-pt-sans">
                Join regular gatherings, annual reunions, and special celebrations that bring our community together.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3">Achievement Gallery</h3>
              <p className="text-gray-600 font-pt-sans">
                Celebrate the success stories and achievements of our distinguished alumni community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-tertiary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-semibold text-gray-900 mb-4 leading-tight">
              Upcoming Events
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-pt-sans leading-relaxed px-4 sm:px-0">
              Don't miss out on these exciting opportunities to reconnect
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center text-accent mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm font-pt-sans">2025 Dragon Boat Festival</span>
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-2">Dragon Boat Festival 2025</h3>
                <p className="text-gray-600 font-pt-sans mb-4">
                  Join the RPS Alumni Youth Wing for an exciting Dragon Boat Festival celebration with traditional activities and community bonding.
                </p>
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm font-pt-sans">To be announced</span>
                </div>
                <Button className="w-full min-h-[44px] text-sm sm:text-base">Register Interest</Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center text-accent mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm font-pt-sans">Coming Soon</span>
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-2">RPS Alumni Youth Wing Bowling</h3>
                <p className="text-gray-600 font-pt-sans mb-4">
                  A friendly bowling competition for alumni to reconnect, compete, and enjoy quality time together.
                </p>
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm font-pt-sans">Bowling Alley TBA</span>
                </div>
                <Button className="w-full min-h-[44px] text-sm sm:text-base">Learn More</Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center text-accent mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm font-pt-sans">2025</span>
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-2">Rulang Community Carnival</h3>
                <p className="text-gray-600 font-pt-sans mb-4">
                  A grand community carnival celebrating our heritage with games, food, and performances for all ages.
                </p>
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm font-pt-sans">Rulang Primary School</span>
                </div>
                <Button className="w-full min-h-[44px] text-sm sm:text-base">More Details</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-semibold mb-4 leading-tight">
            Ready to Reconnect?
          </h2>
          <p className="text-lg sm:text-xl font-pt-sans mb-8 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Join thousands of alumni who have already reconnected with their Rulang family. 
            Your journey back home starts here.
          </p>
          <Button size="lg" variant="secondary" className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto max-w-sm mx-auto min-h-[44px]">
            Become a Member Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="sm:col-span-2 md:col-span-1">
              <h3 className="font-montserrat font-semibold text-lg mb-4">Rulang Primary Alumni</h3>
              <p className="text-gray-300 font-pt-sans text-sm sm:text-base leading-relaxed">
                Connecting generations of Rulang students worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4 text-base">Quick Links</h4>
              <ul className="space-y-2 font-pt-sans text-sm">
                <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="/membership" className="text-gray-300 hover:text-white transition-colors">Membership</a></li>
                <li><a href="/events" className="text-gray-300 hover:text-white transition-colors">Events</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4 text-base">Contact Info</h4>
              <div className="text-gray-300 font-pt-sans space-y-2 text-sm">
                <p>123 Rulang Road</p>
                <p>Singapore 123456</p>
                <p className="break-all">info@rulangalumni.sg</p>
                <p>+65 6123 4567</p>
              </div>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4 text-base">Follow Us</h4>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Facebook</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Instagram</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 font-pt-sans">
            <p className="text-xs sm:text-sm">&copy; 2024 Rulang Primary School Alumni Association. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}