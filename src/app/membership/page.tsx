"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Membership() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-montserrat font-semibold mb-6">
            Alumni Association
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-pt-sans max-w-3xl mx-auto">
            Welcome to Rulang Primary's Alumni Association!
          </p>
          <p className="text-lg md:text-xl mb-8 font-pt-sans max-w-4xl mx-auto">
            Join us for a day of reconnecting with old friends and making new connections. This event is a great opportunity to network, share experiences, and learn from successful alumni in various industries.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Event Details */}
            <div>
              <h2 className="text-3xl md:text-4xl font-montserrat font-semibold text-gray-900 mb-6">
                Event Details
              </h2>
              <div className="space-y-4 font-pt-sans text-gray-700">
                <p>
                  Get ready for an exciting day filled with insightful discussions, interactive workshops, and fun activities. Our Alumni Networking Event provides a platform for alumni to engage with current students, offer mentorship, and explore potential collaboration opportunities. Join us to celebrate the spirit of Rulang Primary's community.
                </p>
                
                <p className="font-semibold">
                  Enjoy the full benefits of being a
                </p>
                <p className="font-semibold text-primary">
                  "Rulang Alumni:"
                </p>
                
                <div className="space-y-2 ml-4">
                  <p>1. Voting rights on alumni policy and direction</p>
                  <p>2. Participation in alumni-organised events and initiatives</p>
                  <p>3. Timely updates on school happenings</p>
                  <p>4. Exclusive discounts for you and your immediate family</p>
                </div>
              </div>
            </div>

            {/* Right Column - Full Membership */}
            <div className="bg-primary text-white p-8 rounded-lg">
              <h2 className="text-3xl md:text-4xl font-montserrat font-semibold mb-6">
                Full Membership
              </h2>
              
              <div className="space-y-4 font-pt-sans">
                <p className="font-semibold">
                  "You are eligible for Full Membership if you:"
                </p>
                
                <ul className="space-y-2 ml-4">
                  <li>• Graduated from Rulang Primary School, or its former names Joo Long School and Joo Long Public School</li>
                  <li>• Are 18 years old and above</li>
                </ul>
                
                <p className="font-semibold text-xl">
                  Full Membership ($350 one-time payment)
                </p>
                
                <p>
                  The membership fees contribute to the operation of the association.
                </p>
                
                <p>
                  All funds raised are used to support various awards, sponsorships, and scholarships provided to the school and its students.
                </p>
                
                <p>
                  Whether you graduated recently or decades ago, we welcome you to be a part of this enriching experience.
                </p>
                
                <div className="pt-4">
                  <Button 
                    className="bg-white text-primary hover:bg-gray-100"
                    onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfn4NumPhcdNJXELCntXWb3tV5PRaHg_SCgjc-4eg1Y5PXfag/viewform', '_blank')}
                  >
                    Join Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Group Photo Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden">
            {/* Placeholder for alumni group photo */}
            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <div className="text-center text-blue-700">
                <div className="text-6xl mb-4">👥</div>
                <p className="text-lg font-semibold">Alumni Group Photo</p>
                <p className="text-sm mt-2 max-w-md">
                  PLACEHOLDER: Group photo of Rulang Primary School alumni wearing red shirts, 
                  smiling and posing together in a school gymnasium or classroom setting. 
                  Shows diversity of ages from recent graduates to older alumni, 
                  capturing the spirit of community and connection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Youth Membership Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Youth Membership Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-montserrat font-semibold text-gray-900 mb-6">
                Youth Membership
              </h2>
              
              <div className="space-y-4 font-pt-sans text-gray-700">
                <p>
                  Youth membership is available to current graduates and former students of Rulang Primary School who are under 21 years old.
                </p>
                
                <p>
                  Once a youth member turns 21, they must transition to Full membership in order to continue enjoying the benefits and activities of the association.
                </p>
                
                <p>
                  All funds collected will be directed towards organizing activities for the Youth Wing, as well as providing sponsorships as mentioned above.
                </p>
              </div>
            </div>

            {/* Right Column - Join Rulang Youth Alumni */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-montserrat font-semibold text-gray-900 mb-6">
                Join the Rulang Youth Alumni
              </h2>
              
              <div className="space-y-4 font-pt-sans text-gray-700">
                <p>
                  The Rulang Youth Alumni (RYA) is specially designed for younger Rulang graduates who want to stay connected and contribute to the Rulang community before becoming eligible for full membership.
                </p>
                
                <p className="font-semibold text-primary text-lg">
                  "Membership Fee: $10 (one-time payment)"
                </p>
                
                <ul className="space-y-2">
                  <li>• Stay in touch with your friends and school community</li>
                  <li>• Be part of youth-focused events and initiatives</li>
                  <li>• Receive updates and opportunities to contribute</li>
                  <li>• Enjoy a $50 discount when you convert to Full Membership at age 21</li>
                </ul>
                
                <p>
                  <span>[Learn more about the Rulang Youth Alumni </span>
                  <a 
                    href="https://docs.google.com/forms/d/18tP6Jz-s0c5yLe1BWNX97y0Ce1QGDQ_tT9hAL3YcLow/viewform?edit_requested=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-semibold"
                  >
                    here
                  </a>
                  <span>]</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Visual Elements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Alumni Networking Image */}
            <div className="text-center">
              <div className="relative w-full h-64 rounded-lg overflow-hidden mb-4">
                <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <div className="text-center text-green-700">
                    <div className="text-4xl mb-2">🤝</div>
                    <p className="text-sm font-semibold">Alumni Networking</p>
                    <p className="text-xs mt-1 px-2">
                      PLACEHOLDER: Professional alumni in business attire shaking hands 
                      and exchanging business cards at a networking event
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3">Professional Networking</h3>
              <p className="text-gray-600 font-pt-sans">
                Connect with alumni across various industries and career levels.
              </p>
            </div>

            {/* School Heritage Image */}
            <div className="text-center">
              <div className="relative w-full h-64 rounded-lg overflow-hidden mb-4">
                <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                  <div className="text-center text-red-700">
                    <div className="text-4xl mb-2">🏫</div>
                    <p className="text-sm font-semibold">Rulang Primary School</p>
                    <p className="text-xs mt-1 px-2">
                      PLACEHOLDER: Exterior view of Rulang Primary School building 
                      showing the school sign and entrance, representing heritage and tradition
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3">School Heritage</h3>
              <p className="text-gray-600 font-pt-sans">
                Stay connected to your alma mater and its continued growth.
              </p>
            </div>

            {/* Community Events Image */}
            <div className="text-center">
              <div className="relative w-full h-64 rounded-lg overflow-hidden mb-4">
                <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                  <div className="text-center text-purple-700">
                    <div className="text-4xl mb-2">🎉</div>
                    <p className="text-sm font-semibold">Alumni Events</p>
                    <p className="text-xs mt-1 px-2">
                      PLACEHOLDER: Alumni gathered at a festive event or celebration, 
                      showing people of different ages enjoying activities together
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3">Community Events</h3>
              <p className="text-gray-600 font-pt-sans">
                Participate in exclusive alumni events and celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-semibold mb-6">
            Ready to Join Our Alumni Family?
          </h2>
          <p className="text-xl mb-8 font-pt-sans max-w-2xl mx-auto">
            Whether you're interested in Full Membership or Youth Membership, 
            we welcome you to be part of this enriching experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-primary hover:bg-gray-100"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfn4NumPhcdNJXELCntXWb3tV5PRaHg_SCgjc-4eg1Y5PXfag/viewform', '_blank')}
            >
              Join as Full Member ($350)
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => window.open('https://docs.google.com/forms/d/18tP6Jz-s0c5yLe1BWNX97y0Ce1QGDQ_tT9hAL3YcLow/viewform?edit_requested=true', '_blank')}
            >
              Join Youth Alumni ($10)
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}