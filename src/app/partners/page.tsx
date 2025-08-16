"use client"

import { Button } from "@/components/ui/button"
import { Users, Star, Mail, ExternalLink } from "lucide-react"

export default function Partners() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent to-accent/80 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-montserrat font-semibold mb-6">
            Our Alumni Collaborators
          </h1>
          <p className="text-xl md:text-2xl mb-6 font-pt-sans max-w-4xl mx-auto">
            Rulang Primary is excited to welcome you to our Alumni Association, held in collaboration with our esteemed alumni partners.
          </p>
          <p className="text-lg md:text-xl mb-8 font-pt-sans max-w-4xl mx-auto">
            Come reconnect with old friends and beloved teachers, share your journeys, and discover new possibilities together.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6 font-pt-sans text-gray-700">
            <p className="text-lg">
              Our alumni is proud to have built a strong ecosystem of collaborators dedicated to supporting our alumni community.
            </p>
            <p className="text-lg">
              We work with a growing list of partners who offer exclusive discounts and benefits to our alumni members.
            </p>
            <p className="text-lg">
              These partnerships are our way of bringing added value to the Rulang alumni community—while supporting local businesses who believe in our cause.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Thow Kwang Pottery Workshop */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-64">
                <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <div className="text-center text-orange-700">
                    <div className="text-5xl mb-3">🏺</div>
                    <p className="text-sm font-semibold">Pottery Workshop</p>
                    <p className="text-xs mt-1 px-4">
                      PLACEHOLDER: Hands working clay on pottery wheel, 
                      finished pottery pieces, pottery workshop setting
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-montserrat font-semibold mb-3">Thow Kwang Pottery Workshop</h3>
                <p className="text-gray-600 font-pt-sans mb-4">
                  Thow Kwang Pottery Jungle offers Rulang Primary School Alumni Association members and their immediate families a 10% discount on pottery workshops.
                </p>
                <Button 
                  className="w-full"
                  onClick={() => window.open('https://www.potteryjungle.com/pottery-workshop?category=c7e1f75e-1bcd-4a92-84d9-f7bc48cdc824', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Register Now
                </Button>
              </div>
            </div>

            {/* J Dance Atelier Belly Dance Class */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-64">
                <div className="w-full h-full bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
                  <div className="text-center text-pink-700">
                    <div className="text-5xl mb-3">💃</div>
                    <p className="text-sm font-semibold">Belly Dance Class</p>
                    <p className="text-xs mt-1 px-4">
                      PLACEHOLDER: Woman in belly dance costume performing, 
                      dance studio with mirrors, graceful dance movements
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-montserrat font-semibold mb-3">J Dance Atelier Belly Dance Class</h3>
                <p className="text-gray-600 font-pt-sans mb-4">
                  J Dance Atelier offers Rulang Primary School Alumni Association female members and their immediate family a $10 discount on the first-term fee for belly dancing courses.
                </p>
                <Button variant="outline" className="w-full">
                  Contact for Details
                </Button>
              </div>
            </div>

            {/* Graceland Student Care Centre */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-64">
                <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <div className="text-center text-green-700">
                    <div className="text-5xl mb-3">🏫</div>
                    <p className="text-sm font-semibold">Student Care Centre</p>
                    <p className="text-xs mt-1 px-4">
                      PLACEHOLDER: Children in after-school care setting, 
                      homework help, supervised activities, safe environment
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-montserrat font-semibold mb-3">Graceland Student Care Centre</h3>
                <p className="text-gray-600 font-pt-sans mb-4">
                  Graceland Student Care Centre, conveniently located across from the school, offers professional care for children before and after school. Association members enjoy a $15 waiver on the $50 registration fee and a $10 monthly discount on the $420 fee (2023 rates).
                </p>
                <Button 
                  className="w-full"
                  onClick={() => window.open('https://graceland.sg/contact-us/', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Enquire
                </Button>
              </div>
            </div>

            {/* TOTS N TOYS */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-64">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="text-center text-blue-700">
                    <div className="text-5xl mb-3">🧸</div>
                    <p className="text-sm font-semibold">Preschool</p>
                    <p className="text-xs mt-1 px-4">
                      PLACEHOLDER: Toddlers playing with educational toys, 
                      colorful preschool classroom, early childhood learning
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-montserrat font-semibold mb-3">TOTS N TOYS</h3>
                <p className="text-gray-600 font-pt-sans mb-4">
                  Tots N Toys Infant and Toddler Preschool at Tradehub 21 offers a 20% discount to Rulang Primary School Alumni Association members and their immediate families.
                </p>
                <Button 
                  className="w-full"
                  onClick={() => window.open('https://www.totsntoys.com.sg/contact-us', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Schedule Tour
                </Button>
              </div>
            </div>

            {/* Prince Education Centre */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-64">
                <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                  <div className="text-center text-purple-700">
                    <div className="text-5xl mb-3">📚</div>
                    <p className="text-sm font-semibold">Education Centre</p>
                    <p className="text-xs mt-1 px-4">
                      PLACEHOLDER: Students in tutoring session, 
                      educational materials, learning environment
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-montserrat font-semibold mb-3">Prince Education Centre</h3>
                <p className="text-gray-600 font-pt-sans mb-4">
                  "Prince Education Centre at Jurong West offers Rulang Primary School Alumni Association members a 10% discount on school fees (2021 fees: $280/month)."
                </p>
                <Button variant="outline" className="w-full">
                  Contact for Details
                </Button>
              </div>
            </div>

            {/* Promisedland Community Services */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-64">
                <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                  <div className="text-center text-red-700">
                    <div className="text-5xl mb-3">⚽</div>
                    <p className="text-sm font-semibold">Community Services</p>
                    <p className="text-xs mt-1 px-4">
                      PLACEHOLDER: Children playing football, 
                      community care activities, sports programs
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-montserrat font-semibold mb-3">Promisedland Community Services</h3>
                <div className="text-gray-600 font-pt-sans mb-4 space-y-2">
                  <p>"Promisedland Community Services at Bukit Batok offers Rulang Primary School Alumni Association members:"</p>
                  <p>"ARK Student Care Centre: 50% waiver on the $50 registration fee and $10 off the $380 monthly fee."</p>
                  <p>"Promisedland Football Team: $30 waiver on the $70 registration fee, which includes a jersey top and football."</p>
                </div>
                <Button variant="outline" className="w-full">
                  Contact for Details
                </Button>
              </div>
            </div>

            {/* PlayFACTO */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-64">
                <div className="w-full h-full bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                  <div className="text-center text-yellow-700">
                    <div className="text-5xl mb-3">🎓</div>
                    <p className="text-sm font-semibold">STEAM Education</p>
                    <p className="text-xs mt-1 px-4">
                      PLACEHOLDER: Children engaged in STEAM activities, 
                      hands-on learning, science experiments, robotics
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-montserrat font-semibold mb-3">PlayFACTO</h3>
                <div className="text-gray-600 font-pt-sans mb-4">
                  <p className="mb-2">PlayFACTO School @ Jurong West, located at Jurong Spring CC, offers benefits to the Rulang Primary School Alumni Association members</p>
                  <p className="font-semibold mb-2">"Member Perks:"</p>
                  <ul className="space-y-1 text-sm">
                    <li>• 50% off registration</li>
                    <li>• $25 off monthly care (6 months)</li>
                    <li>• $25 off transport (1 year)</li>
                    <li>• $100 off STEAM with care</li>
                    <li>• $150 off STEAM (non-care)</li>
                  </ul>
                </div>
                <Button 
                  className="w-full"
                  onClick={() => window.open('https://drive.google.com/file/d/18Hg8IxmAEp1FHLj96X3x_Z7iTeSqGc9H/view', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Enquire
                </Button>
              </div>
            </div>

            {/* Isplash Swim School */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-64">
                <div className="w-full h-full bg-gradient-to-br from-cyan-100 to-cyan-200 flex items-center justify-center">
                  <div className="text-center text-cyan-700">
                    <div className="text-5xl mb-3">🏊</div>
                    <p className="text-sm font-semibold">Swim School</p>
                    <p className="text-xs mt-1 px-4">
                      PLACEHOLDER: Children learning to swim, 
                      swimming pool, swimming lessons, water safety
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-montserrat font-semibold mb-3">Isplash Swim School</h3>
                <p className="text-gray-600 font-pt-sans mb-4">
                  Isplash Swim School offers weekly classes at Jurong West Swimming Complex, providing a convenient option for RPSAA members living in western Singapore.
                </p>
                <Button 
                  className="w-full"
                  onClick={() => window.open('https://www.rulangalumni.org/_files/ugd/e87893_b20871a7fc014bce879699e95f14088c.pdf', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Enquire
                </Button>
              </div>
            </div>

            {/* D'Learners Education Centre */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-64">
                <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center">
                  <div className="text-center text-indigo-700">
                    <div className="text-5xl mb-3">🎒</div>
                    <p className="text-sm font-semibold">Education Centre</p>
                    <p className="text-xs mt-1 px-4">
                      PLACEHOLDER: Students at education centre, 
                      learning activities, homework assistance
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-montserrat font-semibold mb-3">D'Learners Education Centre</h3>
                <p className="text-gray-600 font-pt-sans mb-4">
                  D'Learners Education Centre near the school offers convenient care. Alumni members get free registration and a T-shirt at the Jurong West branch from 1 July 2024 with membership verification.
                </p>
                <Button 
                  className="w-full"
                  onClick={() => window.open('https://drive.google.com/file/d/1EC4GGc_ya0DK8zag3wp-M3mJU4RHrsmh/view', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Join the Reception
                </Button>
              </div>
            </div>

            {/* Eliza */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-64">
                <div className="w-full h-full bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center">
                  <div className="text-center text-rose-700">
                    <div className="text-5xl mb-3">✂️</div>
                    <p className="text-sm font-semibold">Hair Salon</p>
                    <p className="text-xs mt-1 px-4">
                      PLACEHOLDER: Hair salon interior, 
                      hairstylist cutting hair, salon chairs and mirrors
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-montserrat font-semibold mb-3">Eliza</h3>
                <p className="text-gray-600 font-pt-sans mb-4">
                  Rulang students in uniform can enjoy $5 haircuts. Alumni members receive 10% off all hair services and $5 haircuts for kids by presenting their alumni card.
                </p>
                <Button variant="outline" className="w-full">
                  Contact for Details
                </Button>
              </div>
            </div>

            {/* Little Cocoon Student Care */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-64">
                <div className="w-full h-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                  <div className="text-center text-teal-700">
                    <div className="text-5xl mb-3">🐛</div>
                    <p className="text-sm font-semibold">Student Care</p>
                    <p className="text-xs mt-1 px-4">
                      PLACEHOLDER: Children in student care setting, 
                      homework supervision, safe learning environment
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-montserrat font-semibold mb-3">Little Cocoon Student Care</h3>
                <div className="text-gray-600 font-pt-sans mb-4 space-y-2">
                  <p className="font-semibold">Enrolment 2026:</p>
                  <ul className="text-sm space-y-1">
                    <li>• 50% off Registration fee</li>
                    <li>• 2.5% off SC monthly fee (revised $460*)</li>
                    <li>• 1 free Tshirt when 3 pcs purchase</li>
                    <li>• $10 off for siblings</li>
                  </ul>
                  <p className="text-xs">*revised fees from 2026 onward, was to revise in 2025 but held back for another year</p>
                  <p className="font-semibold">Existing Students:</p>
                  <ul className="text-sm space-y-1">
                    <li>• 2.5% off SC monthly fee</li>
                    <li>• 1 free Tshirt when 3 pcs purchase</li>
                    <li>• $10 off for siblings (sibling discount will be revised from $20 to $10 immediately)</li>
                  </ul>
                </div>
                <Button 
                  className="w-full"
                  onClick={() => window.open('https://www.instagram.com/littlecocoon_sc/', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Enquire
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Want to Partner Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-semibold mb-6">
            Want to Partner with Us?
          </h2>
          <p className="text-xl font-pt-sans mb-6 max-w-3xl mx-auto">
            If you're a business owner or merchant keen to support the Rulang Alumni community while gaining brand exposure, we'd love to explore a collaboration with you.
          </p>
          <p className="text-lg font-pt-sans mb-8">
            Email us to start the conversation.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="text-lg px-8"
            onClick={() => window.open('mailto:secretary@rulangalumni.org', '_blank')}
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Us to Partner
          </Button>
        </div>
      </section>

      {/* Alumni Member Partnership Application */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-montserrat font-semibold text-gray-900 mb-6">
              Are You an Alumni Member with a Business?
            </h2>
            <p className="text-xl font-pt-sans text-gray-600 mb-8">
              We encourage our alumni members to become partners and offer exclusive deals to fellow alumni. 
              This is a great way to support the community while growing your business network.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-3">Expand Your Network</h3>
                <p className="text-gray-600 font-pt-sans text-sm">
                  Connect with hundreds of fellow alumni who can become loyal customers and advocates for your business.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-3">Gain Visibility</h3>
                <p className="text-gray-600 font-pt-sans text-sm">
                  Get featured on our website, newsletters, and social media channels to reach our entire alumni community.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-3">Give Back</h3>
                <p className="text-gray-600 font-pt-sans text-sm">
                  Support your alma mater and fellow alumni while building meaningful business relationships.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-montserrat font-semibold mb-4">How to Apply as an Alumni Partner</h3>
              <div className="space-y-4 text-left max-w-2xl mx-auto">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold text-sm mr-4 mt-1">1</div>
                  <div>
                    <h4 className="font-semibold">Verify Your Alumni Status</h4>
                    <p className="text-gray-600 text-sm">Ensure you're a current member of the Rulang Primary School Alumni Association</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold text-sm mr-4 mt-1">2</div>
                  <div>
                    <h4 className="font-semibold">Prepare Your Business Information</h4>
                    <p className="text-gray-600 text-sm">Include business license, description of services/products, and proposed alumni discount</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold text-sm mr-4 mt-1">3</div>
                  <div>
                    <h4 className="font-semibold">Submit Partnership Proposal</h4>
                    <p className="text-gray-600 text-sm">Email us with your business details and how you'd like to support fellow alumni</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold text-sm mr-4 mt-1">4</div>
                  <div>
                    <h4 className="font-semibold">Review and Approval</h4>
                    <p className="text-gray-600 text-sm">Our committee will review your application and get back to you within 2 weeks</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={() => window.open('mailto:secretary@rulangalumni.org?subject=Alumni Partnership Application&body=Hello, I am an alumni member interested in becoming a partner. Please find my business details below:', '_blank')}
              >
                <Mail className="w-5 h-5 mr-2" />
                Apply to Become an Alumni Partner
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}