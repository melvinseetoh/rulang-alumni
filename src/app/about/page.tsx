"use client"

import { Button } from "@/components/ui/button"
import { Heart, Target, Users, Award, Mail } from "lucide-react"

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tertiary to-tertiary/60 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-montserrat font-semibold mb-6 text-gray-900">
            About Us
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-pt-sans max-w-3xl mx-auto text-gray-700">
            To Guide, To Bridge, and To Serve
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 font-pt-sans text-gray-700 leading-relaxed">
              <p className="text-lg">
                The Rulang Primary School Alumni Association (RPSAA) was founded in 1998 by a group of passionate alumni who wanted to give back to the school that shaped them. What began as a heartfelt initiative has since grown into a vibrant, intergenerational network of Rulangnites dedicated to staying connected and contributing meaningfully to their alma mater.
              </p>
              
              <div className="mt-8 mb-8">
                <p className="font-semibold text-lg mb-4">"At the heart of our mission lie several core objectives:"</p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-primary mb-2">1. Fostering Fellowship</h3>
                    <p>We are committed to nurturing strong bonds and camaraderie among Rulangnites, building a supportive network that extends well beyond graduation.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-primary mb-2">2. Honouring Our Alma Mater</h3>
                    <p>We show our loyalty and support by preserving Rulang's legacy and actively contributing to its continued growth and success.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-primary mb-2">3. Advancing Education</h3>
                    <p>We deepen appreciation for the school's ethos by engaging in initiatives that enrich the learning journey of current students.</p>
                  </div>
                </div>
              </div>
              
              <p className="text-lg">
                Over the years, the RPSAA has played a pivotal role in Rulang's transformation—from a humble village school to a school of excellence. Through financial contributions and expert support, we have backed a wide range of programmes that uplift and empower students.
              </p>
              
              <p className="text-lg">
                Over the years, the association has provided consistent support for the school's development—from talent programmes and student leadership initiatives to scholarships and awards.
              </p>
              
              <p className="text-lg">
                We continue to stand as a bridge between generations of Rulangnites, helping shape a legacy of excellence, service, and community spirit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Image Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center">
              <div className="text-center text-blue-800">
                <div className="text-6xl mb-4">🏫</div>
                <p className="text-lg font-semibold">School Heritage Image</p>
                <p className="text-sm mt-2 max-w-md">
                  PLACEHOLDER: Historical photos showing the evolution of Rulang Primary School 
                  from its humble beginnings as a village school to the modern institution it is today, 
                  featuring the school building, students, and community events through the decades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet The Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-semibold text-gray-900 mb-6">
              Meet The Team
            </h2>
            <div className="max-w-3xl mx-auto space-y-4 font-pt-sans text-gray-700">
              <p className="text-lg">Leadership & Committee Members</p>
              <p>The association is led by committed alumni who guide our efforts and represent our shared vision of giving back to Rulang.</p>
            </div>
          </div>

          {/* Presidents Through the Years */}
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-montserrat font-semibold text-center mb-8">"Presidents through the years:"</h3>
            <div className="space-y-3 font-pt-sans text-gray-700">
              <p>• Mr Chew Chin Seng (1998–2002) – Founding President</p>
              <p>• Mr Tan Teck Yoke, PBM (2002–2016) – Longest-serving President</p>
              <p>• Mr Wee Hang Yong (2016–2023)</p>
              <p>• Mr Tan Poh Kok (2023–2025)</p>
              <p>• Mr Aaron Tan (2025–present) – Current President</p>
            </div>
          </div>

          {/* Team Photo Placeholder */}
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <div className="text-center text-purple-700">
                  <div className="text-6xl mb-4">👥</div>
                  <p className="text-lg font-semibold">Leadership Team Photo</p>
                  <p className="text-sm mt-2 max-w-md">
                    PLACEHOLDER: Professional group photo of RPSAA leadership team and committee members, 
                    showing the current president Aaron Tan and other key committee members in formal attire, 
                    representing the dedicated volunteers who lead the alumni community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Causes & Our Patrons - Side by Side */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Our Causes */}
            <div>
              <h2 className="text-3xl md:text-4xl font-montserrat font-semibold text-gray-900 mb-6">
                Our Causes
              </h2>
              
              <div className="space-y-4 font-pt-sans text-gray-700">
                <p>
                  As a non-profit association, we channel all membership fees and donations toward initiatives that benefit Rulang Primary School and its students.
                </p>
                
                <p className="font-semibold">"Your support helps us sustain:"</p>
                <ul className="space-y-2 ml-4">
                  <li>• Student awards and scholarships</li>
                  <li>• Educational and leadership development programmes</li>
                  <li>• School community events and publications</li>
                </ul>
                
                <p>
                  Every dollar counts in nurturing the next generation of Rulangnites.
                </p>
                
                <p>
                  To donate, please contact us at <a href="mailto:secretary@rulangalumni.org" className="text-primary hover:underline">secretary@rulangalumni.org</a> or visit our [Contact Us] page.
                </p>
                
                <p>
                  You may also donate directly via PayNow using the QR code below.
                </p>
              </div>

              {/* PayNow QR Code Placeholder */}
              <div className="mt-6">
                <div className="w-48 h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-green-700">
                    <div className="text-4xl mb-2">📱</div>
                    <p className="text-sm font-semibold">PayNow QR Code</p>
                    <p className="text-xs mt-1 px-2">
                      PLACEHOLDER: QR code for direct PayNow donations to RPSAA
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Button 
                  onClick={() => window.open('mailto:secretary@rulangalumni.org?subject=Donation Inquiry', '_blank')}
                  className="w-full sm:w-auto"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us to Donate
                </Button>
              </div>
            </div>

            {/* Our Patrons */}
            <div>
              <h2 className="text-3xl md:text-4xl font-montserrat font-semibold text-gray-900 mb-6">
                Our Patrons
              </h2>
              
              <div className="space-y-4 font-pt-sans text-gray-700">
                <p>
                  Central to the RPSAA's efforts are esteemed patrons, individuals whose unwavering dedication and support have been instrumental in shaping the association's journey.
                </p>
                
                <p>
                  The RPSAA expresses heartfelt gratitude to <span className="font-semibold">Mr. Tan Fuh Gih, Mr. Tan Teck Yoke, Mdm. Low Chew Yun, Mr. Ng Poh Wah,</span> and <span className="font-semibold">Mr. Chew Chin Seng</span> for their invaluable contributions and commitment to the cause.
                </p>
                
                <p>
                  As the RPSAA continues to progress alongside their Alma Mater, they remain steadfast in their mission to inspire and nurture the next generation of Rulangnites, instilling within them the values of graciousness and altruism.
                </p>
              </div>

              {/* Patrons Photo Placeholder */}
              <div className="mt-8">
                <div className="w-full h-64 bg-gradient-to-br from-gold-100 to-yellow-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-yellow-800">
                    <div className="text-5xl mb-3">🏆</div>
                    <p className="text-lg font-semibold">Honored Patrons</p>
                    <p className="text-sm mt-2 max-w-md">
                      PLACEHOLDER: Formal portraits or group photo of RPSAA patrons including 
                      Mr. Tan Fuh Gih, Mr. Tan Teck Yoke, Mdm. Low Chew Yun, Mr. Ng Poh Wah, 
                      and Mr. Chew Chin Seng, representing their distinguished contributions to the association.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-semibold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 font-pt-sans max-w-2xl mx-auto">
              These values guide everything we do as an alumni community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3">Fellowship</h3>
              <p className="text-gray-600 font-pt-sans">
                Nurturing strong bonds and camaraderie among Rulangnites, building a supportive network that extends well beyond graduation.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600 font-pt-sans">
                Preserving Rulang's legacy and actively contributing to its continued growth and success while maintaining high standards.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-tertiary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3">Service</h3>
              <p className="text-gray-600 font-pt-sans">
                Engaging in initiatives that enrich the learning journey of current students and benefit the broader community.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3">Bridge Building</h3>
              <p className="text-gray-600 font-pt-sans">
                Standing as a bridge between generations of Rulangnites, helping shape a legacy of excellence and community spirit.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3">Graciousness</h3>
              <p className="text-gray-600 font-pt-sans">
                Inspiring and nurturing the next generation of Rulangnites, instilling values of graciousness and altruism.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3">Community</h3>
              <p className="text-gray-600 font-pt-sans">
                Building a vibrant, intergenerational network dedicated to staying connected and contributing meaningfully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-semibold mb-4">
            Ready to Be Part of Our Legacy?
          </h2>
          <p className="text-xl font-pt-sans mb-8 max-w-2xl mx-auto">
            Join our alumni community and help us continue building on the rich heritage of Rulang Primary School.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8"
              onClick={() => window.location.href = '/membership'}
            >
              Become a Member
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 border-white bg-transparent text-white hover:bg-white hover:text-primary"
              onClick={() => window.open('mailto:secretary@rulangalumni.org?subject=General Inquiry', '_blank')}
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}