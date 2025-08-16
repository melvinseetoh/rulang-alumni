// Enhanced mock data for admin features

export const adminUser = {
  id: "admin-001",
  name: "Alice Chen",
  email: "alice.chen@rulang.edu.sg",
  role: "Super Admin",
  profilePhoto: "/api/placeholder/150/150",
  permissions: [
    "manage_members",
    "manage_events", 
    "manage_partners",
    "manage_admins",
    "view_analytics",
    "manage_content"
  ]
}

export const adminStats = {
  totalMembers: 2847,
  newMembersThisMonth: 45,
  pendingApprovals: 12,
  totalEvents: 156,
  upcomingEvents: 8,
  totalPartners: 23,
  totalRevenue: 125750,
  monthlyGrowth: 8.5
}

export const pendingMembers = [
  {
    id: "pending-001",
    name: "James Liu",
    email: "james.liu@email.com",
    graduationYear: 1998,
    profession: "Software Engineer",
    submittedAt: "2025-01-08T10:30:00Z",
    status: "pending_review",
    verificationDocuments: ["diploma.pdf", "id_card.jpg"],
    referredBy: "Sarah Lim"
  },
  {
    id: "pending-002", 
    name: "Maria Santos",
    email: "maria.santos@email.com",
    graduationYear: 2001,
    profession: "Marketing Manager",
    submittedAt: "2025-01-07T14:15:00Z",
    status: "pending_verification",
    verificationDocuments: ["diploma.pdf"],
    referredBy: null
  },
  {
    id: "pending-003",
    name: "Kumar Raj",
    email: "kumar.raj@email.com", 
    graduationYear: 1995,
    profession: "Doctor",
    submittedAt: "2025-01-06T09:45:00Z",
    status: "pending_review",
    verificationDocuments: ["diploma.pdf", "employment_letter.pdf"],
    referredBy: "David Wong"
  }
]

export const recentActivities = [
  {
    id: "activity-001",
    type: "member_approval",
    description: "Approved membership for Jennifer Tan",
    timestamp: "2025-01-10T15:30:00Z",
    adminName: "Alice Chen",
    details: { memberId: "member-005", memberName: "Jennifer Tan" }
  },
  {
    id: "activity-002",
    type: "event_created",
    description: "Created new event: Alumni Networking Night",
    timestamp: "2025-01-10T11:20:00Z",
    adminName: "Bob Wilson",
    details: { eventId: "event-004", eventName: "Alumni Networking Night" }
  },
  {
    id: "activity-003",
    type: "partner_added",
    description: "Added new partner: Premium Spa & Wellness",
    timestamp: "2025-01-09T16:45:00Z",
    adminName: "Alice Chen",
    details: { partnerId: "partner-010", partnerName: "Premium Spa & Wellness" }
  },
  {
    id: "activity-004",
    type: "member_suspended",
    description: "Suspended membership for John Smith (policy violation)",
    timestamp: "2025-01-09T10:15:00Z",
    adminName: "Carol Lee",
    details: { memberId: "member-103", memberName: "John Smith", reason: "policy_violation" }
  }
]

export const adminUsers = [
  {
    id: "admin-001",
    name: "Alice Chen",
    email: "alice.chen@rulang.edu.sg",
    role: "Super Admin",
    profilePhoto: "/api/placeholder/100/100",
    lastLogin: "2025-01-10T16:30:00Z",
    status: "active",
    permissions: ["manage_members", "manage_events", "manage_partners", "manage_admins", "view_analytics", "manage_content"]
  },
  {
    id: "admin-002", 
    name: "Bob Wilson",
    email: "bob.wilson@rulang.edu.sg",
    role: "Event Manager",
    profilePhoto: "/api/placeholder/100/100",
    lastLogin: "2025-01-10T11:20:00Z",
    status: "active",
    permissions: ["manage_events", "view_analytics"]
  },
  {
    id: "admin-003",
    name: "Carol Lee",
    email: "carol.lee@rulang.edu.sg", 
    role: "Member Manager",
    profilePhoto: "",
    lastLogin: "2025-01-09T14:45:00Z",
    status: "active",
    permissions: ["manage_members", "view_analytics"]
  },
  {
    id: "admin-004",
    name: "David Zhang",
    email: "david.zhang@rulang.edu.sg",
    role: "Content Manager",
    profilePhoto: "/api/placeholder/100/100",
    lastLogin: "2025-01-08T09:30:00Z", 
    status: "inactive",
    permissions: ["manage_content", "manage_partners"]
  }
]

export const eventRegistrations = [
  {
    eventId: "event-001",
    eventName: "Dragon Boat Festival 2025",
    totalRegistrations: 45,
    confirmedAttendees: 42,
    waitingList: 3,
    revenue: 1125,
    registrationTrend: [
      { date: "2025-01-01", count: 5 },
      { date: "2025-01-02", count: 12 },
      { date: "2025-01-03", count: 18 },
      { date: "2025-01-04", count: 25 },
      { date: "2025-01-05", count: 32 },
      { date: "2025-01-06", count: 38 },
      { date: "2025-01-07", count: 42 },
      { date: "2025-01-08", count: 45 }
    ]
  }
]

export const membershipStats = {
  byGraduationYear: [
    { year: 1995, count: 245 },
    { year: 1996, count: 198 },
    { year: 1997, count: 267 },
    { year: 1998, count: 289 },
    { year: 1999, count: 321 },
    { year: 2000, count: 298 },
    { year: 2001, count: 276 },
    { year: 2002, count: 254 }
  ],
  byProfession: [
    { profession: "Technology", count: 485 },
    { profession: "Healthcare", count: 342 },
    { profession: "Education", count: 298 },
    { profession: "Finance", count: 267 },
    { profession: "Engineering", count: 234 },
    { profession: "Other", count: 521 }
  ],
  growthTrend: [
    { month: "Jul 2024", members: 2654 },
    { month: "Aug 2024", members: 2689 },
    { month: "Sep 2024", members: 2712 },
    { month: "Oct 2024", members: 2745 },
    { month: "Nov 2024", members: 2778 },
    { month: "Dec 2024", members: 2802 },
    { month: "Jan 2025", members: 2847 }
  ]
}

export const adminRoles = [
  {
    name: "Super Admin",
    description: "Full access to all system features and settings",
    permissions: ["manage_members", "manage_events", "manage_partners", "manage_admins", "view_analytics", "manage_content", "system_settings"]
  },
  {
    name: "Event Manager", 
    description: "Manage events, registrations, and event-related content",
    permissions: ["manage_events", "view_analytics", "manage_content"]
  },
  {
    name: "Member Manager",
    description: "Manage member applications, profiles, and member-related activities", 
    permissions: ["manage_members", "view_analytics"]
  },
  {
    name: "Content Manager",
    description: "Manage website content, blog posts, and partner information",
    permissions: ["manage_content", "manage_partners", "view_analytics"]
  }
]