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
    profilePhoto: "/api/placeholder/100/100",
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
    profilePhoto: "/api/placeholder/100/100",
    connectionStatus: "connected",
    mutualConnections: 2,
    commonInterests: ["Finance", "Technology"]
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
    title: "95th Anniversary Community Carnival",
    description: "Celebrating 95 years of Rulang Primary School with a grand community carnival featuring games, food, and performances.",
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
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Sarah Lim",
    authorPhoto: "/api/placeholder/50/50",
    publishedAt: "2025-01-05",
    category: "Memories",
    tags: ["nostalgia", "school life", "friendships"],
    visibility: "public",
    featuredImage: "/api/placeholder/600/300",
    views: 234,
    likes: 45
  },
  {
    id: "blog-002",
    title: "Career Transitions: From Classroom to Boardroom",
    excerpt: "A former teacher shares insights on transitioning from education to corporate leadership.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "David Wong",
    authorPhoto: "/api/placeholder/50/50",
    publishedAt: "2025-01-03",
    category: "Career",
    tags: ["career change", "leadership", "growth"],
    visibility: "members-only",
    featuredImage: "/api/placeholder/600/300",
    views: 156,
    likes: 28
  },
  {
    id: "blog-003",
    title: "Alumni Spotlight: Building a Tech Startup",
    excerpt: "Meet John Tan, who turned his passion for technology into a successful startup venture.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Michelle Chen",
    authorPhoto: "/api/placeholder/50/50",
    publishedAt: "2025-01-01",
    category: "Success Stories",
    tags: ["entrepreneurship", "technology", "startup"],
    visibility: "preview",
    featuredImage: "/api/placeholder/600/300",
    views: 89,
    likes: 12
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