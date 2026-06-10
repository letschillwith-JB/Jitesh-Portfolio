import { Project } from "../types/project";

export const projects: Project[] = [
  {
    slug: "space-booker",
    number: "01",
    name: "Space-Booker",
    category: "Booking Platform · Mobile App · Admin Dashboard",
    tagline: "Complete coworking management and booking platform",
    description:
      "A complete end-to-end coworking management platform. Mobile app for guests and corporate members, with meeting room reservations, a credit wallet, hybrid payment (credits + PayU), and a real-time admin command centre.",
    problem:
      "Distinct Co-working in Bhopal had no digital booking system. Customers called or walked in. Corporate clients had no way to manage their monthly credit allocations. The owner had no visibility into daily revenue, pending payments, or space occupancy in real time. The challenge was building a system that handled two completely different user types — pay-per-booking guests and monthly credit-allocation corporate members — on a single platform, with a hybrid payment flow that could split a bill between credits and online payment in one transaction.",
    solution:
      "Built a complete three-component system: a React Native mobile app (iOS + Android), a Node.js/PostgreSQL backend, and a web-based admin command centre. The mobile app handles passwordless OTP auth, space discovery, multi-date booking with time slot selection, the credit economy, hybrid PayU + credit payments with SHA-512 hash verification, and a full booking history. The admin dashboard provides live today-view with 30-second auto-refresh, booking management, member approval workflow, credit ledger adjustments with audit trail, and a manual booking wizard with VIP override.",
    features: [
      {
        icon: "Wallet",
        title: "Credit Economy Engine",
        description:
          "Corporate members receive monthly credit allocations. The system auto-deducts, handles partial coverage (hybrid pay), allows next-month overdraft borrowing, and resets using SQL formula.",
      },
      {
        icon: "CreditCard",
        title: "Hybrid Payment Flow",
        description:
          "A single booking can be split: credits cover what they can, PayU collects the remainder. One transaction, one receipt.",
      },
      {
        icon: "Monitor",
        title: "Real-time Admin Dashboard",
        description:
          "Live space occupancy grid, today's bookings, revenue counter, and pending alerts — auto-refreshes every 30 seconds.",
      },
      {
        icon: "Layout",
        title: "Smart Conference Room Logic",
        description:
          "A 4-seater and 6-seater joined by a removable wall form a 10-seater. Booking the 10-seater automatically blocks both smaller rooms.",
      },
      {
        icon: "Clock",
        title: "Ghost Booking Cleanup",
        description:
          "Incomplete bookings auto-expire (10 min for app, 24 hrs for admin) via node-cron, keeping inventory clean without manual intervention.",
      },
      {
        icon: "ShieldCheck",
        title: "App Store Compliant",
        description:
          "Includes account deletion, in-app legal pages (T&C, Privacy, Refund), and a static-OTP reviewer bypass account for App Store/Play Store review teams.",
      },
    ],
    stack: [
      {
        category: "Mobile",
        items: ["React Native", "Expo", "Expo Router", "TypeScript"],
      },
      { category: "Admin Dashboard", items: ["React", "Vite", "Vanilla CSS"] },
      { category: "Backend", items: ["Node.js", "Express.js", "Drizzle ORM"] },
      { category: "Database", items: ["PostgreSQL", "NeonDB"] },
      {
        category: "Payments",
        items: [
          "PayU India",
          "SHA-512 Hash Verification",
          "18% GST Auto-calculation",
        ],
      },
      {
        category: "Auth",
        items: [
          "Passwordless Email OTP",
          "Nodemailer / Gmail SMTP",
          "JWT Sessions",
        ],
      },
      { category: "Infrastructure", items: ["Railway", "Vercel", "node-cron"] },
    ],
    chips: [
      "React Native · iOS & Android",
      "PayU · GST · 18% Auto-calc",
      "Credit Economy Engine",
    ],
    status: "Delivered",
    featured: true,
    order: 1,
    image: "/Coworking1.png",
    gallery: ["/Coworking3.png" , "/Coworking2.png", "/Coworking1.png"],
    results: [
      "Delivered end-to-end as a solo developer",
      "Four workspaces in a pnpm monorepo",
      "Production-ready for App Store + Google Play submission",
      "Complete product documentation for non-technical client handover",
    ],
    lessonsLearned:
      "The credit economy was the most architecturally complex piece — specifically the overdraft logic that lets members borrow against next month's allocation. Getting the SQL reset formula right required careful thought about edge cases. Building for two completely different user types in one codebase also taught me the importance of separating role logic early — it's much harder to retrofit RBAC than to architect it upfront. The manual booking wizard in the admin dashboard was a feature that had no specification — I had to design the UX and the credit calculation flow from scratch while maintaining parity with the mobile app logic.",
  },
  {
    slug: "tradelink",
    number: "02",
    name: "TradeLink",
    category: "Analytics Platform · Trading Journal",
    tagline: "Trade smarter with a journal that does the math",
    description:
      "A trading journal and portfolio analytics platform for active traders. P&L tracking, win-rate analytics, performance charts, and trade history management.",
    problem:
      "Active traders track trades in spreadsheets or basic notes. They have no quick way to see their win rate, average P&L per trade, best performing setups, or performance over time. Without structured data, improving trading discipline is guesswork.",
    solution:
      "Built a full-stack trading journal platform where traders log every trade — entry, exit, instrument, position size, and setup notes. The platform auto-calculates P&L, win rate, drawdown, and performance trends and presents them in a data-rich, clean dashboard.",
    features: [
      {
        icon: "PenLine",
        title: "Trade Logging",
        description:
          "Quick entry form for logging trades with entry/exit prices, instrument, quantity, and notes.",
      },
      {
        icon: "TrendingUp",
        title: "P&L Analytics",
        description:
          "Automatic profit/loss calculation per trade and aggregated over time periods.",
      },
      {
        icon: "BarChart2",
        title: "Performance Dashboard",
        description:
          "Win rate, average trade, best/worst trades, and equity curve visualization.",
      },
      {
        icon: "LineChart",
        title: "Data Visualization",
        description:
          "Charts showing cumulative P&L, trade frequency, and performance by setup type.",
      },
    ],
    stack: [
      { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
      { category: "Charts", items: ["Recharts", "Chart.js"] },
      { category: "Backend", items: ["Node.js", "Express.js"] },
      { category: "Database", items: ["PostgreSQL"] },
    ],
    chips: ["React · Recharts", "P&L Analytics", "Dashboard"],
    status: "Delivered",
    featured: true,
    order: 2,
    image: "/Tradelink1.png",
    gallery: ["/Tradelink2.png", "/Tradelink3.png", "/Tradelink4.png"],
    results: [
      "Delivered as a solo developer",
      "Handles complex financial calculations client-side",
      "Clean, data-dense interface for power users",
    ],
    lessonsLearned:
      "Building a financial analytics product taught me that calculation accuracy is non-negotiable — a rounding error in a P&L calculation destroys user trust immediately. The challenge was designing charts that communicate trading performance at a glance without overwhelming the user with data.",
  },
  {
    slug: "autominder",
    number: "03",
    name: "AutoMinder",
    category: "Business Automation · Service Reminder Tool",
    tagline: "Turn one-time customers into repeat visitors",
    description:
      "Smart service reminder system for auto repair shops. Automatically calculates next oil change dates based on oil type, vehicle type, and daily driving patterns.",
    problem:
      "Auto repair shops lose repeat business because there's no easy way to track when each customer's car is due for its next oil change. The shop owner relies on memory or paper records, and customers only return when something breaks — not proactively. The problem wasn't just reminders. It was intelligent reminders — ones that account for the fact that a 2-wheeler with mineral oil running 40km/day has a different service window than a 4-wheeler with synthetic oil doing 20km/day.",
    solution:
      "Built a service management platform that tracks customers, their vehicles, and complete service history. The core is a smart calculation engine that determines the next service date from oil type (Mineral / Semi-Synthetic / Synthetic), vehicle type (2-Wheeler / 4-Wheeler), current odometer reading, and daily km usage — derived automatically from previous service records.",
    features: [
      {
        icon: "Brain",
        title: "Smart Due-Date Engine",
        description:
          "Calculates next oil change date using oil type lifespan standards × the customer's actual daily km usage derived from odometer deltas between services.",
      },
      {
        icon: "Gauge",
        title: "Daily KM Auto-Calculation",
        description:
          "Compares current odometer to previous service odometer, divides by days elapsed. Manual override available.",
      },
      {
        icon: "Car",
        title: "Multi-vehicle per Customer",
        description:
          "One customer can own multiple vehicles (2W and 4W). Each vehicle gets its own independent service history and reminder timeline.",
      },
      {
        icon: "LayoutDashboard",
        title: "Priority Dashboard",
        description:
          "Overdue count, this-week count, and total active customers shown upfront.",
      },
      {
        icon: "Zap",
        title: "Quick Service Wizard",
        description:
          "3-step workflow to log a new service from the dashboard in under 30 seconds.",
      },
      {
        icon: "History",
        title: "Complete Service History",
        description:
          "Every vehicle has a full chronological service log. Status (Pending / Overdue / Completed) visible at a glance.",
      },
    ],
    stack: [
      { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
      { category: "Backend", items: ["Node.js", "Express.js"] },
      { category: "Database", items: ["PostgreSQL"] },
      {
        category: "Planned Features",
        items: ["WhatsApp Reminder API", "Digital Invoice PDF"],
      },
    ],
    chips: ["Node.js", "Smart Calculations", "WhatsApp Reminders"],
    status: "Delivered",
    featured: true,
    order: 3,
    image: "/Autominder1.jpg",
    gallery: ["/Autominder2.jpg", "/Autominder3.png"],
    results: [
      "Delivered end-to-end as a solo developer",
      "Handles complex vehicle + oil type calculation matrix",
      "Production-ready for auto repair shops across India",
    ],
    lessonsLearned:
      "The calculation engine was the heart of this project. The tricky part was designing a formula that gracefully handles edge cases: what if this is the vehicle's first service (no previous odometer to compare)? What if someone inputs an odometer lower than the last reading? Building in manual override while keeping the auto-calculation as the default took iteration to get right. It also reinforced that real business software needs to respect the operator's knowledge.",
  },
  {
    slug: "distinct-website",
    number: "04",
    name: "Distinct Co-working — Website",
    image: "/Distinct-web1.png",
    gallery: ["/Distinct-web2.png", "/Distinct-web3.png"],
    category: "Business Website · Branding · Lead Generation",
    tagline: "Online presence for Bhopal's coworking company",
    description:
      "Business website for a Bhopal coworking company. Responsive design with brand-first aesthetics, space listings, membership plan showcases, and lead generation focus.",
    problem:
      "Distinct Co-working had no professional online presence. Potential members Googled coworking in Bhopal and found nothing. The business needed a website that explained the space, showcased membership plans, and turned visitors into enquiries.",
    solution:
      "Designed and built a modern, responsive business website with a mobile-first approach. The site showcases the space, explains membership tiers, and has a clear lead-generation focus — every section flows toward a contact/enquiry action.",
    features: [
      {
        icon: "Smartphone",
        title: "Responsive Design",
        description:
          "Pixel-perfect on mobile, tablet, and desktop. India's internet is mobile-first.",
      },
      {
        icon: "Image",
        title: "Space Showcase",
        description:
          "Visual listings of hot desks, premium desks, dedicated cabins, and meeting rooms.",
      },
      {
        icon: "DollarSign",
        title: "Membership Plans",
        description:
          "Clear pricing and features for Guest, Corporate, and Dedicated membership tiers.",
      },
      {
        icon: "Target",
        title: "Lead Generation",
        description:
          "Contact forms and CTA buttons at strategic points throughout the page.",
      },
    ],
    stack: [
      { category: "Frontend", items: ["React", "Tailwind CSS"] },
      {
        category: "Design",
        items: ["Responsive Design", "Mobile-first", "Brand-aligned UI"],
      },
    ],
    chips: ["Responsive Design", "Business Branding", "Modern UI"],
    status: "Delivered",
    featured: false,
    order: 4,
    results: [
      "Delivered as a solo developer",
      "Mobile-first, high-performance design",
      "Clear conversion-focused layout",
    ],
    lessonsLearned:
      "Building for a non-technical client taught me that clear handover documentation is as important as the code. The client needed to be able to update content themselves. This shaped my approach to content architecture — keeping copy in one place, easy to update.",
  },
];
