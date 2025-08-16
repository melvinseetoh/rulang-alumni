"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft,
  BookOpen,
  Lock,
  Star,
  Users
} from "lucide-react"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: {
    firstParagraph: string
    fullContent: string
  }
  author: string
  authorRole: string
  publishDate: string
  readTime: string
  category: string
  featured: boolean
  image: string
  tags: string[]
}

const blogPosts: Record<string, BlogPost> = {
  "from-classroom-to-boardroom": {
    id: "from-classroom-to-boardroom",
    title: "From Classroom to Boardroom: My Journey After Rulang",
    excerpt: "How my time at Rulang Primary shaped my leadership philosophy and helped me navigate the corporate world. A reflection on the values that still guide me today.",
    content: {
      firstParagraph: "Walking into my first board meeting as a newly appointed CEO, I felt a familiar flutter of nerves—the same feeling I had when presenting my project during Primary 6 at Rulang Primary School. It was then that I realized how much my alma mater had shaped not just my academic foundation, but my entire approach to leadership and life. The values instilled in those formative years at Rulang continue to guide my decisions in the corporate world today.",
      fullContent: `Walking into my first board meeting as a newly appointed CEO, I felt a familiar flutter of nerves—the same feeling I had when presenting my project during Primary 6 at Rulang Primary School. It was then that I realized how much my alma mater had shaped not just my academic foundation, but my entire approach to leadership and life. The values instilled in those formative years at Rulang continue to guide my decisions in the corporate world today.

The foundation of integrity that was emphasized at Rulang has been my North Star throughout my career. I remember Mrs. Lim, our form teacher, who always said, "Your character is what you do when no one is watching." This lesson became invaluable when I had to make tough ethical decisions in the corporate world, sometimes at the cost of short-term profits but always for long-term sustainability.

Collaboration was another key lesson from Rulang. The group projects, sports day preparations, and even the simple act of cleaning our classroom together taught me that great achievements come from collective effort. Today, as I lead a team of 200+ employees, I draw from those early experiences of working together towards common goals.

The resilience I developed at Rulang has been tested many times in my entrepreneurial journey. From the failed startup in my twenties to the near-bankruptcy of my current company during the pandemic, the "never give up" spirit that our teachers fostered has seen me through the darkest moments.

Looking back, I realize that Rulang didn't just prepare me for secondary school or university—it prepared me for life. The friendships I made, the lessons I learned, and the values I absorbed have been the invisible force behind every success I've achieved.

To current students and recent graduates: embrace the Rulang spirit. The foundation you're building now will serve you in ways you cannot yet imagine. And to my fellow alumni: let's continue to carry forward the values that made us who we are today.`
    },
    author: "Sarah Lim",
    authorRole: "Class of 1995, CEO of TechStart Singapore",
    publishDate: "2024-12-15",
    readTime: "8 min read",
    category: "Career Stories",
    featured: true,
    image: "/images/blog/christina-wocintechchat-com-ftCWdZOFZqo-unsplash.jpg",
    tags: ["Leadership", "Career", "Technology"]
  },
  "teachers-who-changed-my-life": {
    id: "teachers-who-changed-my-life", 
    title: "The Teachers Who Changed My Life",
    excerpt: "A heartfelt tribute to the educators who went beyond textbooks to teach life lessons that lasted a lifetime. Their impact continues to inspire me decades later.",
    content: {
      firstParagraph: "Thirty-six years have passed since I last sat in a Rulang Primary School classroom, yet the faces and voices of my teachers remain crystal clear in my memory. As a medical doctor who has spent decades caring for patients, I often reflect on how my calling to heal others was first nurtured by the compassionate educators who saw potential in a shy, introverted boy from Hougang.",
      fullContent: `Thirty-six years have passed since I last sat in a Rulang Primary School classroom, yet the faces and voices of my teachers remain crystal clear in my memory. As a medical doctor who has spent decades caring for patients, I often reflect on how my calling to heal others was first nurtured by the compassionate educators who saw potential in a shy, introverted boy from Hougang.

Mrs. Chen, my Primary 3 teacher, was the first person outside my family to believe in me. I was struggling with English, being more comfortable in Mandarin at home. Instead of giving up on me, she stayed after school twice a week to help me read English storybooks. "Every child has a story worth telling," she would say, "but first, you must be able to read other people's stories." Her patience and dedication not only improved my English but taught me the value of perseverance—a quality that would prove essential during the grueling years of medical school.

Mr. Rajesh, our Science teacher in Primary 5 and 6, ignited my passion for understanding how things work. His enthusiastic demonstrations—from simple experiments with magnets to dissecting flowers—made science come alive. But it was his response to my endless questions that made the real difference. "A good question is worth more than ten good answers," he would tell me. This mindset of curiosity has driven my medical career, leading me to specialize in rare diseases where asking the right questions can save lives.

The most profound impact came from Mrs. Siti, who taught us Moral Education. In an era before formal character education programs, she wove life lessons into every discussion. When I was bullied for being different, she didn't just stop the bullying—she helped me understand the pain behind the bully's actions. "Hurt people hurt people," she explained, "but healed people heal people." This wisdom has guided my interactions with difficult patients and their families throughout my medical career.

These teachers didn't just teach subjects—they taught life. They showed me that education is not about memorizing facts but about developing empathy, curiosity, and resilience. Every patient I've treated, every life I've helped save, carries a trace of their influence.

To the teachers reading this: never underestimate the power of your words and actions. You're not just teaching children—you're shaping future doctors, engineers, artists, and leaders. And to my fellow alumni: take a moment to thank a teacher who made a difference in your life. They deserve to know that their impact continues to ripple through time.`
    },
    author: "Michael Chen",
    authorRole: "Class of 1988, Medical Doctor",
    publishDate: "2024-12-10",
    readTime: "6 min read",
    category: "Gratitude",
    featured: false,
    image: "/images/blog/teacher-classroom-national-cancer-institute-unsplash.jpg",
    tags: ["Education", "Inspiration", "Gratitude"]
  },
  "memories-of-school-carnival-1985": {
    id: "memories-of-school-carnival-1985",
    title: "Memories of School Carnival 1985",
    excerpt: "A nostalgic journey back to one of the most memorable school carnivals in Rulang's history. Cotton candy, game stalls, and friendships that lasted forever.",
    content: {
      firstParagraph: "The morning air was thick with anticipation and the sweet aroma of cotton candy as hundreds of families streamed through the gates of Rulang Primary School on that unforgettable Saturday in March 1985. As a Primary 4 student then, I had no idea I was witnessing what would become one of the most legendary school carnivals in our history—an event so magical that alumni still talk about it nearly four decades later.",
      fullContent: `The morning air was thick with anticipation and the sweet aroma of cotton candy as hundreds of families streamed through the gates of Rulang Primary School on that unforgettable Saturday in March 1985. As a Primary 4 student then, I had no idea I was witnessing what would become one of the most legendary school carnivals in our history—an event so magical that alumni still talk about it nearly four decades later.

The preparation had taken months. Every class was assigned a booth, and the competition was fierce—not for prizes, but for the pride of creating something spectacular. Our class, 4 Integrity, decided on a "Fishing for Prizes" game, complete with a makeshift pond filled with floating numbered ducks. We spent weeks after school painting those yellow rubber ducks, each one carefully numbered and sealed with clear nail polish borrowed from our teacher's handbag.

The carnival officially opened at 9 AM, but families had been queuing since 7:30. Principal Mrs. Wee, dressed in her best batik kebaya, cut the ceremonial ribbon while our school band played an enthusiastic (if slightly off-key) rendition of our school song. The cheer that erupted from the crowd was deafening, and suddenly, the carefully planned layout descended into joyful chaos.

What made this carnival special wasn't just the games or food—it was the sense of community. Parents who rarely spoke to each other were suddenly laughing together over the impossible challenge of the "Ring Toss" game. Teachers abandoned their usual stern demeanor and joined in the fun, with Mr. Kumar famously winning three stuffed animals at the basketball shooting booth. 

The highlight of the day was the impromptu talent show that emerged when the scheduled puppet performance was cancelled due to equipment failure. Students spontaneously took to the makeshift stage—singing, dancing, reciting poems, and even performing magic tricks. The crowd cheered loudest for Siti from Primary 6, who sang Teresa Teng songs in three different languages.

But perhaps my most treasured memory is of the friendships forged that day. While helping to clean up after the carnival, a group of us from different classes bonded over shared cotton candy and the satisfaction of having organized something truly special. Those friendships, born in that moment of collective achievement, have lasted to this day. We still meet annually for dinner, and every year, someone inevitably brings up that magical carnival of 1985.

As the sun set that evening and families began to leave, our school compound was transformed back into its usual quiet state. But something had changed—we weren't just students at a school anymore; we were part of a community that had created something beautiful together.

Nearly forty years later, as I flip through the faded photographs from that day (yes, we used actual film cameras back then!), I'm struck by how that single event captured everything wonderful about our Rulang experience: the joy of working together, the pride in our school, and the bonds that would last a lifetime.

To the current students reading this: create your own memories. Participate in every event, volunteer for every project, and cherish every moment. You never know which seemingly ordinary school day will become the memory you treasure most.`
    },
    author: "David Tan",
    authorRole: "Class of 1987, Photographer",
    publishDate: "2024-12-05",
    readTime: "7 min read",
    category: "Nostalgia",
    featured: true,
    image: "/images/blog/vintage-classroom-nationaal-archief-unsplash.jpg",
    tags: ["Memories", "School Events", "Nostalgia"]
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Story Not Found</h1>
          <p className="text-gray-600 mb-6">The story you're looking for doesn't exist or has been moved.</p>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Stories
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/blog" className="inline-flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Stories
          </Link>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Article Header */}
        <header className="mb-12">
          <div className="mb-6">
            <div className="flex items-center text-sm text-gray-600 mb-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                {post.category}
              </span>
              <span className="mx-3">•</span>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime}
              </div>
              <span className="mx-3">•</span>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {formatDate(post.publishDate)}
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-montserrat font-bold text-gray-900 leading-tight mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                <User className="h-6 w-6 text-gray-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-lg">{post.author}</p>
                <p className="text-gray-600">{post.authorRole}</p>
              </div>
            </div>
          </div>

          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        {/* Article Content */}
        <div className="relative">
          {/* First Paragraph - Visible */}
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-xl leading-relaxed text-gray-700 font-pt-sans">
              {post.content.firstParagraph}
            </p>
          </div>

          {/* Gated Content with Gradient Overlay */}
          <div className="relative">
            {/* Faded preview of more content */}
            <div className="prose prose-lg max-w-none text-gray-400 select-none pointer-events-none">
              <div className="space-y-4">
                <p>The foundation of integrity that was emphasized at Rulang has been my North Star throughout my career. I remember Mrs. Lim, our form teacher, who always said, "Your character is what you do when no one is watching." This lesson became invaluable when I had to make tough ethical decisions...</p>
                <p>Collaboration was another key lesson from Rulang. The group projects, sports day preparations, and even the simple act of cleaning our classroom together taught me that great achievements come from collective effort...</p>
                <p>The resilience I developed at Rulang has been tested many times in my entrepreneurial journey. From the failed startup in my twenties to the near-bankruptcy of my current company during the pandemic...</p>
              </div>
            </div>

            {/* White gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white"></div>
            
            {/* Membership Gate */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 max-w-md mx-4 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-3">
                  Members Only Story
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  This inspiring story is exclusive to our alumni community. Join thousands of fellow Rulang graduates and unlock access to:
                </p>
                
                <div className="text-left mb-6 space-y-2">
                  <div className="flex items-center text-sm text-gray-700">
                    <BookOpen className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    Full access to all alumni stories
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <Users className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    Connect with classmates and alumni network
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <Calendar className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    Exclusive events and reunions
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <Star className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    Member benefits and privileges
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Link href="/membership">
                    <Button size="lg" className="w-full">
                      Become a Member
                    </Button>
                  </Link>
                  <Link href="/mockups/auth/login">
                    <Button variant="outline" size="lg" className="w-full">
                      Already a Member? Sign In
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Stories CTA */}
        <div className="mt-12 bg-primary/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-montserrat font-semibold text-gray-900 mb-4">
            Discover More Alumni Stories
          </h3>
          <p className="text-gray-600 mb-6">
            Read inspiring stories from your fellow Rulang graduates and share your own experiences.
          </p>
          <Link href="/blog">
            <Button variant="outline" size="lg">
              <BookOpen className="h-4 w-4 mr-2" />
              Browse All Stories
            </Button>
          </Link>
        </div>
      </article>
    </div>
  )
}