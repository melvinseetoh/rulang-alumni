// Mock data for all member features and blog content

export const mockUser = {
  id: "user-001",
  email: "john.tan@email.com",
  name: "John Tan",
  graduationYear: 1995,
  classes: ["6A (1995)", "5B (1994)"],
  profession: "Software Engineer",
  company: "Tech Solutions Pte Ltd",
  interests: ["Technology", "Sports", "Photography"],
  expertise: ["JavaScript", "React", "Node.js"],
  contactInfo: {
    phone: "+65 9123 4567",
    email: "john.tan@email.com",
    linkedIn: "https://linkedin.com/in/johntan"
  },
  location: "Singapore",
  bio: "Passionate software engineer with 15+ years of experience. Love connecting with fellow Rulang alumni and sharing tech knowledge.",
  profilePhoto: "/api/placeholder/150/150",
  memberSince: "2020-03-15",
  privacy: {
    phone: "members-only",
    email: "public",
    linkedIn: "public",
    bio: "public",
    location: "members-only",
    profession: "public"
  }
};

export const mockMembers = [
  {
    id: "member-001",
    name: "Sarah Lim",
    graduationYear: 1993,
    profession: "Marketing Director",
    company: "Global Marketing Inc",
    location: "Singapore",
    profilePhoto: "/api/placeholder/100/100",
    connectionStatus: "connected",
    mutualConnections: 5,
    commonInterests: ["Photography", "Travel"]
  },
  {
    id: "member-002",
    name: "David Wong",
    graduationYear: 1997,
    profession: "Doctor",
    company: "Singapore General Hospital",
    location: "Singapore",
    profilePhoto: "", // No profile photo - will show placeholder
    connectionStatus: "pending",
    mutualConnections: 3,
    commonInterests: ["Sports", "Reading"]
  },
  {
    id: "member-003",
    name: "Michelle Chen",
    graduationYear: 1995,
    profession: "Teacher",
    company: "Ministry of Education",
    location: "Singapore",
    profilePhoto: "/api/placeholder/100/100",
    connectionStatus: "not-connected",
    mutualConnections: 8,
    commonInterests: ["Education", "Arts"]
  },
  {
    id: "member-004",
    name: "Alex Kumar",
    graduationYear: 1994,
    profession: "Financial Analyst",
    company: "DBS Bank",
    location: "Singapore",
    profilePhoto: "", // No profile photo - will show placeholder
    connectionStatus: "connected",
    mutualConnections: 2,
    commonInterests: ["Finance", "Technology"]
  },
  {
    id: "member-005",
    name: "Jennifer Tan Wei Ming",
    graduationYear: 1996,
    profession: "Software Engineer",
    company: "Tech Innovations Pte Ltd",
    location: "Singapore",
    profilePhoto: "", // No profile photo - will show placeholder
    connectionStatus: "request-received",
    mutualConnections: 4,
    commonInterests: ["Technology", "Gaming", "Photography"]
  },
  {
    id: "member-006",
    name: "Robert Lee",
    graduationYear: 1992,
    profession: "Architect",
    company: "Urban Design Studio",
    location: "Singapore",
    profilePhoto: "/api/placeholder/100/100",
    connectionStatus: "not-connected",
    mutualConnections: 1,
    commonInterests: ["Design", "Arts", "Travel"]
  }
];

export const mockEvents = [
  {
    id: "event-001",
    title: "Dragon Boat Festival 2025",
    description: "Join the RPS Alumni Youth Wing for an exciting Dragon Boat Festival celebration with traditional activities and community bonding.",
    date: "2025-06-10",
    time: "10:00 AM",
    location: "Marina Bay",
    image: "/api/placeholder/400/200",
    registrations: 45,
    maxCapacity: 100,
    ticketPrice: 25,
    status: "open"
  },
  {
    id: "event-002",
    title: "RPS Alumni Youth Wing Bowling",
    description: "A friendly bowling competition for alumni to reconnect, compete, and enjoy quality time together.",
    date: "2025-07-15",
    time: "7:00 PM",
    location: "Bowling Alley TBA",
    image: "/api/placeholder/400/200",
    registrations: 20,
    maxCapacity: 50,
    ticketPrice: 15,
    status: "open"
  },
  {
    id: "event-003",
    title: "Rulang Community Carnival",
    description: "A grand community carnival celebrating our heritage with games, food, and performances for all ages.",
    date: "2025-09-20",
    time: "2:00 PM",
    location: "Rulang Primary School",
    image: "/api/placeholder/400/200",
    registrations: 150,
    maxCapacity: 500,
    ticketPrice: 0,
    status: "open"
  }
];

export const mockPartners = [
  {
    id: "partner-001",
    name: "Tech Solutions Pte Ltd",
    category: "Technology",
    offer: "20% discount on IT consultation services",
    description: "Leading IT solutions provider offering comprehensive technology services for businesses.",
    website: "https://techsolutions.sg",
    logo: "/api/placeholder/120/80",
    validUntil: "2025-12-31"
  },
  {
    id: "partner-002",
    name: "Wellness Spa & Clinic",
    category: "Health & Wellness",
    offer: "15% discount on all spa treatments",
    description: "Premium wellness center offering relaxation and rejuvenation services.",
    website: "https://wellnessspa.sg",
    logo: "/api/placeholder/120/80",
    validUntil: "2025-06-30"
  },
  {
    id: "partner-003",
    name: "Golden Dragon Restaurant",
    category: "Food & Dining",
    offer: "10% discount on dining (minimum $50 spend)",
    description: "Authentic Chinese cuisine restaurant with traditional flavors.",
    website: "https://goldendragon.sg",
    logo: "/api/placeholder/120/80",
    validUntil: "2025-08-31"
  }
];

export const mockBlogPosts = [
  {
    id: "blog-001",
    title: "Memories from the 90s: A Walk Down Rulang Lane",
    excerpt: "Reflecting on the golden days of Rulang Primary School and the friendships that lasted a lifetime.",
    content: `Looking back at the 1990s at Rulang Primary School brings a flood of wonderful memories. The corridors that once echoed with our laughter, the classrooms where we learned our first lessons, and the playground where lifelong friendships were forged.

I remember the morning assemblies where we would sing the national anthem with such pride, and how Mrs. Lee would always remind us to "study hard and be good citizens." The canteen aunties who knew our names and our favorite foods, and how we would rush to get the best seats during recess.

The friendships we made during those formative years have truly stood the test of time. Many of us are still in touch today, and it's amazing to see how far we've all come. From the shy kid who sat at the back of the class to becoming a successful doctor, or the class clown who now runs his own comedy club - we've all grown in our own unique ways.

What strikes me most is how the values instilled in us at Rulang continue to guide us today. The emphasis on respect, hard work, and community service has shaped not just our careers, but our character.

As we gather for alumni events, those same bonds from decades ago are still there. We may look older, have different responsibilities, and live in different parts of the world, but when we meet, it's like no time has passed at all.`,
    author: "Sarah Lim",
    authorId: "member-001",
    authorPhoto: "/api/placeholder/50/50",
    authorBio: "Class of 1993, Marketing Director at Global Marketing Inc",
    publishedAt: "2025-01-05T10:30:00Z",
    updatedAt: "2025-01-05T10:30:00Z",
    category: "Memories",
    tags: ["nostalgia", "school life", "friendships", "1990s"],
    visibility: "public",
    featuredImage: "/api/placeholder/600/300",
    views: 234,
    likes: 45,
    comments: 12,
    status: "published",
    readTime: 4
  },
  {
    id: "blog-002", 
    title: "Career Transitions: From Classroom to Boardroom",
    excerpt: "A former teacher shares insights on transitioning from education to corporate leadership.",
    content: `Making the leap from education to corporate leadership wasn't something I had planned, but sometimes the best opportunities come when you least expect them.

After 15 years as a teacher at various schools, I found myself at a crossroads. While I loved working with students and seeing their growth, I felt called to impact education from a different angle - through policy and organizational leadership.

The transition wasn't easy. Moving from a classroom environment where relationships and nurturing were paramount, to a boardroom where numbers and strategic thinking dominated, required a complete mindset shift. However, the skills I had developed as an educator proved more valuable than I initially realized.

**Key Skills That Transferred:**
- Communication: Years of explaining complex concepts to students made presenting to executives feel natural
- Problem-solving: Every day in the classroom presents unique challenges that require creative solutions
- Leadership: Managing a classroom of 30+ students develops incredible leadership and crisis management skills
- Empathy: Understanding different learning styles translated well to managing diverse teams

**Challenges I Faced:**
- Learning business terminology and processes
- Adapting to a more hierarchical structure
- Balancing relationship-building with results-driven expectations
- Overcoming imposter syndrome in a new field

For fellow educators considering a similar transition, my advice is to recognize the transferable value of your skills. Don't undersell your experience - teaching is one of the most demanding and skill-intensive professions there is.

The corporate world needs people who understand human development, can communicate effectively, and genuinely care about growth and improvement. These are skills every great teacher possesses.`,
    author: "David Wong",
    authorId: "member-002",
    authorPhoto: "",
    authorBio: "Class of 1997, Former educator turned corporate executive",
    publishedAt: "2025-01-03T14:15:00Z",
    updatedAt: "2025-01-03T14:15:00Z",
    category: "Career",
    tags: ["career change", "leadership", "growth", "education"],
    visibility: "members-only",
    featuredImage: "/api/placeholder/600/300",
    views: 156,
    likes: 28,
    comments: 8,
    status: "published",
    readTime: 6
  },
  {
    id: "blog-003",
    title: "Alumni Spotlight: Building a Tech Startup",
    excerpt: "Meet John Tan, who turned his passion for technology into a successful startup venture.",
    content: `John Tan's journey from Rulang Primary School student to tech entrepreneur is nothing short of inspiring. In this exclusive interview, we dive deep into his path to building TechFlow Solutions, now a leading automation software company.

**The Early Days**
"I remember being fascinated by the computer lab at Rulang," John recalls. "We only had a few computers, and getting to use them felt like a privilege. That's where my love for technology began."

After graduating from Rulang in 1995, John pursued computer science and worked at several tech companies before taking the entrepreneurial leap in 2018.

**The Startup Journey**
Starting TechFlow wasn't easy. "The first two years were brutal," John admits. "I was working 16-hour days, learning everything from product development to customer acquisition. There were moments I questioned whether I had made the right decision."

The breakthrough came when they pivoted from generic software to specialized automation tools for small businesses. "We realized we were trying to be everything to everyone. Once we focused on solving one specific problem really well, everything changed."

**Key Lessons for Aspiring Entrepreneurs:**
1. **Start small and focus** - Don't try to solve every problem at once
2. **Listen to customers** - They'll tell you what they actually need
3. **Build a strong team** - You can't do everything yourself
4. **Prepare for failure** - It's part of the learning process
5. **Stay connected to your roots** - The Rulang alumni network has been invaluable for advice and connections

Today, TechFlow employs 45 people and serves over 1,000 businesses across Southeast Asia. John credits much of his success to the foundational values learned at Rulang: perseverance, integrity, and community support.`,
    author: "Michelle Chen",
    authorId: "member-003",
    authorPhoto: "/api/placeholder/50/50",
    authorBio: "Class of 1995, Education Specialist and Content Writer",
    publishedAt: "2025-01-01T09:00:00Z",
    updatedAt: "2025-01-01T09:00:00Z",
    category: "Success Stories",
    tags: ["entrepreneurship", "technology", "startup", "interview"],
    visibility: "preview",
    featuredImage: "/api/placeholder/600/300",
    views: 189,
    likes: 32,
    comments: 15,
    status: "published",
    readTime: 8
  },
  {
    id: "blog-004",
    title: "Reconnecting Through Alumni Events: Why They Matter",
    excerpt: "Exploring the importance of staying connected with our school community and the lasting impact of alumni relationships.",
    content: `In our busy adult lives, it's easy to lose touch with the people and places that shaped our early years. Alumni events provide a unique opportunity to reconnect with our roots and the community that helped form who we are today.

**More Than Just Nostalgia**
While reminiscing about the "good old days" is certainly part of the appeal, alumni events serve a much deeper purpose. They're about:

- **Professional Networking**: Your former classmates are now professionals in diverse fields
- **Mentorship Opportunities**: Both giving and receiving guidance across different career stages
- **Personal Growth**: Seeing how everyone has evolved provides perspective on your own journey
- **Community Support**: Building a network that extends beyond professional benefits

**The Ripple Effect**
When alumni stay engaged, it benefits current students too. Our experiences, achievements, and even our struggles provide valuable lessons for the next generation. Many of our members now serve as mentors, scholarship providers, and career guidance counselors.

**Making the Most of Alumni Events**
1. **Come with an open mind** - People change, and you might be surprised by new connections
2. **Share your story** - Your journey might inspire someone else
3. **Listen actively** - Everyone has lessons to share
4. **Follow up** - The real value comes from relationships maintained after the event
5. **Give back** - Consider how you can contribute to the community

**Looking Forward**
As we plan future events, we're always looking for new ways to create meaningful connections. Whether it's career networking sessions, family-friendly gatherings, or skills-sharing workshops, there's something for everyone.

The bonds formed at Rulang don't have to end at graduation. They can continue to enrich our lives and the lives of others for years to come.`,
    author: "Jennifer Tan Wei Ming",
    authorId: "member-005",
    authorPhoto: "",
    authorBio: "Class of 1996, Alumni Association Committee Member",
    publishedAt: "2024-12-28T16:20:00Z",
    updatedAt: "2024-12-28T16:20:00Z",
    category: "Community",
    tags: ["alumni events", "networking", "community", "relationships"],
    visibility: "public",
    featuredImage: "/api/placeholder/600/300",
    views: 312,
    likes: 67,
    comments: 23,
    status: "published",
    readTime: 5
  },
  {
    id: "blog-005",
    title: "The Evolution of Education: Then vs Now",
    excerpt: "A reflection on how education has changed since our school days and what it means for future generations.",
    content: `As alumni who experienced education in the 80s, 90s, and early 2000s, we have a unique perspective on how dramatically the educational landscape has transformed. Let's explore these changes and their implications.

**Technology Integration**
The most obvious change is technology. Where we had one computer lab with a handful of machines, today's students carry more computing power in their pockets than entire schools had during our time. This shift has revolutionized:

- **Access to Information**: Instant access to global knowledge vs. relying on library books
- **Learning Methods**: Interactive digital lessons vs. traditional chalk-and-talk
- **Communication**: Global collaboration vs. local classroom interactions
- **Assessment**: Real-time feedback vs. periodic exams

**Teaching Methodologies** 
Educational approaches have evolved from teacher-centered to student-centered learning:

- **From Memorization to Critical Thinking**: Less rote learning, more problem-solving
- **Collaborative Learning**: Group projects and peer-to-peer learning emphasized
- **Personalized Education**: Adaptive learning paths vs. one-size-fits-all approach
- **Skill-Based Focus**: 21st-century skills like creativity and digital literacy

**Challenges and Opportunities**
While these changes bring exciting opportunities, they also present new challenges:

**Opportunities:**
- Global connectivity and cultural exchange
- Personalized learning experiences
- Enhanced creativity and innovation
- Better preparation for modern careers

**Challenges:**
- Digital divide and access inequality
- Information overload and credibility issues
- Reduced face-to-face social skills
- Technology dependence

**Our Role as Alumni**
As graduates who bridged the traditional and digital education eras, we can:

1. **Mentor current students** on balancing digital and traditional skills
2. **Share career insights** that bridge generational gaps
3. **Support educational initiatives** that combine the best of both worlds
4. **Advocate for balanced approaches** to education reform

**Looking Ahead**
Education will continue evolving. The key is ensuring that while we embrace innovation, we don't lose the fundamental values that made our education meaningful: critical thinking, character development, and community connection.

The future of education isn't just about technology - it's about preparing students to be thoughtful, capable, and connected human beings in an increasingly complex world.`,
    author: "Alex Kumar",
    authorId: "member-004",
    authorPhoto: "",
    authorBio: "Class of 1994, Educational Technology Consultant",
    publishedAt: "2024-12-20T11:45:00Z",
    updatedAt: "2024-12-20T11:45:00Z",
    category: "Education",
    tags: ["education reform", "technology", "teaching", "future"],
    visibility: "members-only",
    featuredImage: "/api/placeholder/600/300",
    views: 198,
    likes: 41,
    comments: 19,
    status: "published",
    readTime: 7
  },
  {
    id: "blog-006",
    title: "Alumni Achievements Roundup: Q4 2024",
    excerpt: "Celebrating the remarkable achievements of our fellow alumni across various fields and industries.",
    content: `Every quarter, we love highlighting the amazing accomplishments of our alumni community. Here are some of the standout achievements from Q4 2024:

**Professional Milestones**

**Dr. Lisa Ng (Class of 1992)** was promoted to Chief of Pediatrics at Singapore General Hospital. Dr. Ng has been instrumental in developing new treatment protocols for childhood diabetes and has published extensively in international medical journals.

**Marcus Tan (Class of 1988)** launched his third restaurant in the award-winning "Heritage Flavors" chain, bringing traditional Singaporean cuisine to international markets. His latest venture in London has already earned a Michelin recommendation.

**Priya Sharma (Class of 1999)** was appointed as Regional Director for Southeast Asia at Green Energy Solutions, leading the company's expansion into renewable energy projects across six countries.

**Community Impact**

**Robert Chen (Class of 1994)** was recognized with the Community Service Excellence Award for his volunteer work with underprivileged youth. His mentorship program has helped over 200 young people access higher education opportunities.

**Amanda Lim (Class of 1990)** published her first children's book, "The Magic Playground," with all proceeds going to school library development in rural areas.

**Creative Arts**

**James Wong (Class of 1995)** had his photography exhibition "Urban Landscapes" featured at the National Gallery, showcasing the transformation of Singapore's cityscape over the past decade.

**Sophia Lee (Class of 1997)** won the Best Original Screenplay award at the Singapore International Film Festival for her debut film "Coming Home."

**Academic Excellence**

**Dr. Kevin Teo (Class of 1985)** was granted tenure at MIT and received the Excellence in Research Award for his groundbreaking work in artificial intelligence and machine learning.

**Innovation and Entrepreneurship**

**Rachel Poh (Class of 1996)** successfully raised $2M in Series A funding for her EdTech startup, "LearnSmart," which uses AI to personalize learning experiences for students with learning difficulties.

**Daniel Koh (Class of 1991)** was named "Entrepreneur of the Year" by the Singapore Business Association for his sustainable packaging company that has revolutionized eco-friendly alternatives in Southeast Asia.

**Looking Forward**
These achievements remind us of the incredible potential within our alumni community. Each success story inspires others and demonstrates the lasting impact of the values instilled during our time at Rulang.

We encourage all alumni to share their milestones, no matter how big or small. Every achievement contributes to our collective legacy and inspires the next generation of students.

*Do you have an achievement to share? Contact us at alumni@rulang.edu.sg*`,
    author: "Alumni Association Editorial Team",
    authorId: "admin-001",
    authorPhoto: "/api/placeholder/50/50",
    authorBio: "Rulang Alumni Association",
    publishedAt: "2024-12-15T14:00:00Z",
    updatedAt: "2024-12-15T14:00:00Z",
    category: "Alumni News",
    tags: ["achievements", "alumni spotlight", "community", "success"],
    visibility: "public",
    featuredImage: "/api/placeholder/600/300",
    views: 445,
    likes: 89,
    comments: 34,
    status: "published",
    readTime: 6
  }
];

export const blogCategories = [
  { name: "All", count: 6 },
  { name: "Memories", count: 1 },
  { name: "Career", count: 1 },
  { name: "Success Stories", count: 1 },
  { name: "Community", count: 1 },
  { name: "Education", count: 1 },
  { name: "Alumni News", count: 1 }
];

export const blogComments = [
  {
    id: "comment-001",
    postId: "blog-001",
    author: "Michelle Chen",
    authorId: "member-003",
    authorPhoto: "/api/placeholder/40/40",
    content: "This brings back so many memories! I still remember the canteen auntie who would save the last curry puff for me every Friday.",
    publishedAt: "2025-01-05T12:15:00Z",
    likes: 8,
    replies: [
      {
        id: "reply-001",
        author: "Sarah Lim",
        authorId: "member-001",
        authorPhoto: "/api/placeholder/40/40",
        content: "Auntie Mary! She was the sweetest. I wonder if she's still around.",
        publishedAt: "2025-01-05T13:20:00Z",
        likes: 3
      }
    ]
  },
  {
    id: "comment-002", 
    postId: "blog-001",
    author: "David Wong",
    authorId: "member-002",
    authorPhoto: "",
    content: "Beautiful piece, Sarah. It's amazing how those foundational years continue to shape us decades later.",
    publishedAt: "2025-01-05T15:30:00Z",
    likes: 12,
    replies: []
  },
  {
    id: "comment-003",
    postId: "blog-003",
    author: "Jennifer Tan Wei Ming", 
    authorId: "member-005",
    authorPhoto: "",
    content: "What an inspiring journey! The part about staying connected to your roots really resonates. The Rulang network is truly special.",
    publishedAt: "2025-01-01T10:45:00Z",
    likes: 15,
    replies: [
      {
        id: "reply-002",
        author: "Alex Kumar",
        authorId: "member-004",
        authorPhoto: "",
        content: "Completely agree. The alumni network has been invaluable in my own career journey.",
        publishedAt: "2025-01-01T11:15:00Z",
        likes: 7
      }
    ]
  }
];

export const mockNotifications = [
  {
    id: "notif-001",
    type: "connection_request",
    title: "New connection request",
    message: "David Wong wants to connect with you",
    timestamp: "2025-01-10T14:30:00Z",
    read: false,
    actionUrl: "/member/network"
  },
  {
    id: "notif-002",
    type: "event_reminder",
    title: "Event reminder",
    message: "Dragon Boat Festival 2025 is coming up in 3 days",
    timestamp: "2025-01-09T09:00:00Z",
    read: true,
    actionUrl: "/events"
  },
  {
    id: "notif-003",
    type: "blog_mention",
    title: "You were mentioned in a blog post",
    message: "Sarah Lim mentioned you in 'Memories from the 90s'",
    timestamp: "2025-01-08T16:45:00Z",
    read: false,
    actionUrl: "/blog/memories-from-the-90s"
  }
];

export const privacyOptions = [
  { value: "public", label: "Public - Visible to everyone" },
  { value: "members-only", label: "Members Only - Visible to registered members" },
  { value: "admins-only", label: "Admins Only - Visible to admins only" },
  { value: "private", label: "Private - Visible only to you" }
];

export const graduationYears = Array.from({ length: 50 }, (_, i) => 2024 - i);

export const professionCategories = [
  "Technology",
  "Healthcare",
  "Education",
  "Finance",
  "Marketing",
  "Engineering",
  "Legal",
  "Government",
  "Non-Profit",
  "Entrepreneurship",
  "Arts & Entertainment",
  "Other"
];

export const interestTags = [
  "Technology", "Sports", "Photography", "Travel", "Reading", "Music", 
  "Arts", "Cooking", "Gardening", "Fitness", "Gaming", "Volunteering",
  "Finance", "Education", "Health", "Environment", "Fashion", "Food"
];