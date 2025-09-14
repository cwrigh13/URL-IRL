import { CaseStudy } from '@/types/case-studies';

export const caseStudies: CaseStudy[] = [
  {
    id: 'digital-tool-library-feedback',
    title: 'Closing the Loop: A Multilingual Feedback Platform for the Digital Tool Library',
    library: 'Georges River Libraries',
    location: 'Sydney, NSW',
    category: 'Patron Engagement',
    description: 'A lightweight, multilingual web application that creates a direct channel for community feedback, enabling data-driven collection management and faster maintenance for a high-value library collection.',
    challenge: 'A "Library of Things" or Digital Tool Library presents unique management challenges - complex items require regular maintenance and their potential constantly evolves. Feedback from patrons was often delivered verbally and ad-hoc, making it difficult to track, prioritize, and act upon. There was no formal channel for patrons, especially those from non-English speaking backgrounds, to share ideas or report issues.',
    solution: 'Built a clean, single-page web application with three core functions: problem reporting, new item suggestions, and creation sharing. The design philosophy was "frictionless feedback" with a multilingual interface ensuring language would not be a barrier to communication.',
    results: [
      'Improved collection maintenance through structured problem-reporting',
      'Enabled data-driven collection development with community suggestions',
      'Created a positive feedback loop strengthening community connections',
      'Provided actionable data for library staff decision-making'
    ],
    technologies: ['Web Application', 'Multilingual Support', 'Responsive Design', 'Data Collection', 'Form Processing'],
    duration: '3 months',
    image: '/URL-IRL/case-studies/closing-the-loop.jpg?v=1',
    featured: true,
    fullDescription: `The Digital Tool Library Feedback platform is a lightweight, responsive, and multilingual web application that serves as the central point for all community input regarding the collection. It transforms what was once scattered, verbal feedback into structured, actionable data that library staff can use to improve services and make informed decisions.

The platform addresses the unique challenges of managing a "Library of Things" - collections that include 3D printers, podcasting equipment, Cricut machines, and other creative tools. Unlike traditional book collections, these items have complex parts, require regular maintenance, and their potential is constantly evolving based on community needs and technological advances.

The solution was built with a "frictionless feedback" philosophy, creating a tool that feels less like a bureaucratic form and more like a helpful, direct conversation with the library.`,
    technicalDetails: `The solution includes:

- Single-page web application with clean, intuitive interface
- Three core feedback functions: Report a Problem, Suggest a New Item, Share Your Creation
- Multilingual interface supporting key community languages
- Responsive design optimized for mobile and desktop use
- Structured data collection for easy analysis and action
- Simple form processing with clear user pathways
- Accessibility features ensuring equal access for all patrons`,
    implementation: `The project was implemented using a community-centered approach:

Phase 1: Community research and user needs analysis (2 weeks)
Phase 2: Interface design and user experience planning (2 weeks)
Phase 3: Web application development and testing (4 weeks)
Phase 4: Multilingual content creation and localization (2 weeks)
Phase 5: Staff training and pilot deployment (1 week)
Phase 6: Full launch and ongoing feedback integration (ongoing)

Throughout development, we maintained focus on creating the simplest possible user experience while ensuring the collected data would be valuable and actionable for library staff.`,
    outcomes: `The feedback platform has created a powerful, positive feedback loop that benefits all stakeholders:

For Patrons:
- Easy, accessible way to report issues and suggest improvements
- Direct channel for sharing creative achievements and project outcomes
- Multilingual support ensuring equal access regardless of language background
- Sense of partnership in collection development and maintenance

For Library Staff:
- Structured, actionable data for collection management decisions
- Faster response to maintenance issues and equipment problems
- Community-driven insights for budget allocation and purchasing decisions
- Reduced time spent on informal feedback collection and follow-up

For the Library:
- Improved collection quality and maintenance through proactive issue reporting
- Data-driven approach to collection development aligned with community needs
- Enhanced community engagement and sense of ownership
- Better resource allocation based on documented patron feedback`,
    lessonsLearned: `Key insights from this project include:

1. Simplicity Drives Engagement: A single-page form with three clear choices eliminated confusion and increased participation rates.

2. Multilingual as Core Requirement: Making language support fundamental from the start ensured equal access for the entire community.

3. Structured Data Enables Action: Converting verbal feedback into structured data transformed community input into actionable intelligence.

4. Community Ownership Drives Quality: When patrons feel they have a direct role in collection development, they become more invested in the library's success.

5. Feedback Loops Create Value: The platform didn't just collect feedback - it created a system where feedback leads to improvements, which leads to more engagement.`,
    nextSteps: `Future enhancements planned include:

- Integration with library management systems for automated issue tracking
- Advanced analytics dashboard for staff to analyze feedback patterns
- Automated notifications for staff when critical issues are reported
- Integration with social media for showcasing community creations
- Mobile app companion for on-the-go feedback submission
- AI-powered categorization and prioritization of feedback
- Integration with maintenance scheduling systems for proactive collection care`
  },
  {
    id: 'georges-river-reads',
    title: 'Fostering Literacy & Connection: The Georges River Reads Multicultural Reading App',
    library: 'Georges River Libraries',
    location: 'Sydney, NSW',
    category: 'Mobile Apps',
    description: 'A bespoke, gamified reading platform that increases literacy engagement and strengthens community bonds across the diverse Georges River area.',
    challenge: 'Generic, off-the-shelf reading apps failed to resonate within a deeply multicultural community, lacking program accessibility in native languages, culturally relevant recommendations, and connection to physical library services.',
    solution: 'Built a purpose-built platform with fully multilingual interface, advanced gamification, community features, and powerful analytics dashboard, designed specifically for the Georges River community.',
    results: [
      'Increased program participation through fun, gamified engagement',
      'Bridged language barriers with full translation support',
      'Provided data-driven insights for strategic planning',
      'Strengthened community connections and cultural celebration'
    ],
    technologies: ['Native iOS', 'Native Android', 'Web Dashboard', 'Multilingual Support', 'Gamification', 'Analytics', 'WCAG 2.1 AA'],
    duration: '6 months',
    image: '/URL-IRL/case-studies/Fostering-Literacy-Connection.jpg',
    featured: true,
    fullDescription: `Georges River Reads is a comprehensive, native mobile application for iOS and Android that transforms reading into a fun, gamified, and social experience. It provides a rich feature set for patrons and a powerful analytics backend for library staff.

The platform was built with a "community-first" philosophy, prioritizing a fully multilingual interface not as an afterthought, but as a core requirement for the MVP. Features were designed to do more than just track minutes; they were designed to encourage real-world library visits, celebrate diverse authors, and connect families through shared activities.`,
    technicalDetails: `The solution includes:

- Native mobile applications for iOS and Android ensuring smooth, responsive user experience
- Fully multilingual interface supporting English, Mandarin, Arabic, Cantonese, and Nepali
- Advanced gamification system with dynamic challenges and virtual badges
- Community portal with integrated events calendar and cultural book recommendations
- Secure web-based admin dashboard with real-time analytics and anonymized data
- WCAG 2.1 AA compliance for full accessibility
- Australian Privacy Act 1988 compliance for data security`,
    implementation: `The project was implemented using a community-centered approach:

Phase 1: Community research and user persona development (2 weeks)
Phase 2: Comprehensive PRD development with stakeholder input (2 weeks)
Phase 3: Native app development for iOS and Android (8 weeks)
Phase 4: Web dashboard development and integration (4 weeks)
Phase 5: Testing, accessibility compliance, and privacy review (2 weeks)
Phase 6: Pilot launch and community feedback integration (ongoing)

Throughout development, we maintained focus on the specific needs of Georges River residents, ensuring the platform felt like a digital extension of their local library branch.`,
    outcomes: `Georges River Reads has created a vibrant digital ecosystem that brings the library's mission of literacy and community connection into the hands of thousands of residents:

For Patrons:
- Increased engagement in reading challenges through gamification
- Access to library services in their native language
- Discovery of culturally relevant books and authors
- Stronger connection to the library and community

For Library Staff:
- Real-time insights into community reading habits
- Data-driven approach to programming and collection development
- Reduced language barriers in patron communication
- Enhanced ability to serve diverse community needs

For the Community:
- Strengthened cultural connections and celebration
- Improved literacy engagement across all age groups
- Better integration between digital and physical library services
- Enhanced community inclusion and social cohesion`,
    lessonsLearned: `Key insights from this project include:

1. Community-First Design: Building for the community, with the community, creates solutions that truly resonate and drive engagement.

2. Multilingual as Core, Not Add-On: Making language support a fundamental requirement rather than a feature addition ensures equal access from day one.

3. Gamification Beyond Tracking: Reading challenges that encourage real-world library visits and community participation create deeper engagement than simple time logging.

4. Cultural Relevance Drives Discovery: Curated recommendations that reflect the community's diversity increase both engagement and cultural celebration.

5. Privacy-First Analytics: Building analytics with privacy compliance from the start enables valuable insights while maintaining user trust.`,
    nextSteps: `Future enhancements planned include:

- Web application expansion for desktop users
- Integration with library management systems for seamless user experience
- Advanced AI-powered reading recommendations
- Social features for family and community reading groups
- Integration with educational institutions and community organizations
- Enhanced accessibility features for users with specific disabilities
- Expansion to additional community languages based on user feedback`
  },
  {
    id: 'library-kiosk-interface',
    title: 'Simplifying Self-Service: An Accessible Kiosk Interface for Library Printing, Copying & Scanning',
    library: 'Georges River Libraries',
    location: 'Sydney, NSW',
    category: 'Patron Engagement',
    description: 'A custom-built kiosk interface that replaces complex manufacturer menus with an intuitive, multilingual, step-by-step guide for library multifunction devices.',
    challenge: 'Standard manufacturer interfaces on multifunction devices were confusing, text-heavy, and monolingual, creating barriers for patrons with low digital literacy, seniors, and non-English speakers. This led to frustration, errors, and staff spending significant time providing tech support.',
    solution: 'Built a custom kiosk interface that sits on top of existing hardware, providing a simple, visual, multilingual guide that breaks down each task into clear, linear steps with large icons and minimal text.',
    results: [
      'Reduced need for staff intervention in MFD operations',
      'Fewer printing errors and less waste',
      'Empowered patrons to use library technology independently',
      'Improved accessibility for seniors and non-English speakers'
    ],
    technologies: ['Web-based Interface', 'Multilingual Support', 'Touch-Screen Optimization', 'Visual Design', 'Accessibility Features'],
    duration: '2 months',
    image: '/URL-IRL/case-studies/Simplifying-Self-Service.jpg',
    featured: true,
    fullDescription: `Georges River Libraries serves a diverse community where many patrons rely on multifunction devices (MFDs) for essential services like printing job applications, copying identification documents, and scanning important papers. However, the standard manufacturer interfaces on these machines were designed for technical users, not the general public.

The challenge was that these interfaces were often confusing, text-heavy, and monolingual, creating significant barriers for patrons with low digital literacy, seniors, and those from non-English speaking backgrounds. This led to daily frustration, printing errors, wasted resources, and staff spending considerable time providing one-on-one tech support instead of focusing on high-value reference and programming duties.

The library needed a user-friendly interface that could empower patrons to complete these tasks independently and confidently, while reducing the burden on frontline staff.`,
    technicalDetails: `The solution was built as a custom web-based interface with the following technical features:

- Web application that runs on the existing kiosk hardware
- Multilingual interface supporting key community languages
- Touch-screen optimized design with large, clear buttons
- Step-by-step visual guidance with minimal text
- Clear error messaging and help instructions
- Responsive design for various screen sizes
- Accessibility features for users with different needs`,
    implementation: `The project was implemented using a user-centered design approach:

Phase 1: User research and interface analysis (1 week)
Phase 2: Interface design and prototyping (2 weeks)
Phase 3: Development and testing (3 weeks)
Phase 4: Staff training and pilot deployment (1 week)
Phase 5: Full deployment and ongoing support (ongoing)

Throughout development, we observed how patrons interacted with the existing system and incorporated their feedback to create the most intuitive experience possible.`,
    outcomes: `The new kiosk interface has dramatically improved the usability of library self-service machines:

For Patrons:
- Increased confidence in using library technology independently
- Reduced frustration and anxiety when using MFDs
- Better understanding of available options and processes
- Improved experience for non-English speakers

For Staff:
- Significantly reduced time spent on MFD tech support
- More time available for high-value reference and programming duties
- Reduced stress from dealing with frustrated patrons
- Improved ability to serve the community effectively

For the Library:
- Better resource utilization and reduced waste
- Improved patron satisfaction and retention
- Enhanced reputation as an accessible, user-friendly space
- More efficient operational workflows`,
    lessonsLearned: `Key insights from this project include:

1. User Experience is Everything: The interface needed to be designed for the most anxious, least technical user, not the average user.

2. Visual Design Trumps Text: Large, clear icons and minimal text were more effective than detailed instructions.

3. Multilingual Support is Essential: Offering language choice from the start created a more welcoming experience.

4. Error Prevention is Better Than Error Recovery: Clear, guided processes prevented most common mistakes.

5. Staff Input is Invaluable: Frontline staff provided crucial insights into common pain points and user needs.`,
    nextSteps: `Future enhancements planned include:

- Additional language support for more community languages
- Integration with library management systems for user authentication
- Advanced analytics on usage patterns and common issues
- Mobile app companion for remote preparation
- Integration with cloud printing services
- Enhanced accessibility features for users with disabilities`
  },
  {
    id: 'georges-river-resource-finder',
    title: 'Connecting Communities: A Multilingual, Accessible Resource Finder for Georges River',
    library: 'Georges River Libraries',
    location: 'Sydney, NSW',
    category: 'Multilingual Services',
    description: 'A high-performance, WCAG-compliant Progressive Web App that makes vital community services accessible to all residents, regardless of language or internet connectivity.',
    challenge: 'Public libraries needed a centralised, digital tool to democratise community service information, making it easily discoverable for every member of the community, especially those from non-English speaking backgrounds or with accessibility needs.',
    solution: 'Built a lightweight yet powerful PWA with multilingual support, interactive mapping, offline functionality, and rigorous accessibility standards, ensuring equitable access for all patrons.',
    results: [
      'Bridged the information gap with 24/7 self-service access',
      'Enhanced digital inclusion through offline PWA functionality',
      'Strengthened community connections and library partnerships'
    ],
    technologies: ['Vanilla JavaScript (ES6+)', 'PWA (Service Worker)', 'Leaflet.js', 'Content Security Policy', 'WCAG Compliance'],
    duration: '3 months',
    image: '/URL-IRL/case-studies/Connecting-Communities.jpg',
    featured: true
  },
  {
    id: 'babel-fish-translation',
    title: 'Breaking Down Language Barriers: The Babel Fish Translation App',
    library: 'Georges River Libraries',
    location: 'Sydney, NSW',
    category: 'Multilingual Services',
    description: 'A full-stack translation app that empowers library staff to communicate effectively with patrons from diverse linguistic backgrounds, fostering inclusivity and better service.',
    challenge: 'Language barriers in a multicultural community were creating unintended barriers to accessing library services, with staff struggling to communicate basic information in multiple languages.',
    solution: 'Built a purpose-built "digital phrasebook" with dual-mode interface, context-aware communication, audio playback, AI-powered suggestions, and hyper-local community assistance features.',
    results: [
      'Eliminated language barriers for staff and patrons',
      'Improved patron service speed and cultural sensitivity',
      'Enhanced community inclusivity and strengthened connections'
    ],
    technologies: ['Vanilla JavaScript (ES6+)', 'Tailwind CSS', 'Node.js & Express', 'Firebase Firestore', 'Google Gemini API'],
    duration: '3 months',
    image: '/URL-IRL/case-studies/Breaking-Down-Language-Barriers.jpg',
    featured: true
  },
  {
    id: 'georges-river-creates',
    title: 'Streamlining Operations: A Unified Resource Management Platform for Georges River Libraries',
    library: 'Georges River Libraries',
    location: 'Sydney, NSW',
    category: 'Resource Management',
    description: 'An internal library resource management tool providing quick access to information about loanable items, creative spaces, and digital tools.',
    challenge: 'Operational information for diverse collections (musical instruments, 3D printers, Digital Tool Library) was fragmented across shared drives, printed manuals, and intranet sections, causing daily bottlenecks and inconsistent service.',
    solution: 'Built a single-page web application with unified search functionality, providing instant access to consolidated knowledge about all creative collections and equipment.',
    results: [
      'Reduced information search time from 3-5 minutes to under 10 seconds',
      'Improved service consistency and accuracy across all staff',
      'Centralized access to digital tools, musical instruments, and creative spaces'
    ],
    technologies: ['Vite', 'Tailwind CSS', 'Vanilla JavaScript', 'PostCSS', 'Alpine.js'],
    duration: '4 months',
    image: '/URL-IRL/case-studies/Creates.jpg',
    featured: false
  }
];

export const getCaseStudyById = (id: string): CaseStudy | undefined => {
  return caseStudies.find(study => study.id === id);
};

export const getFeaturedCaseStudies = (): CaseStudy[] => {
  return caseStudies.filter(study => study.featured);
};

export const getCaseStudiesByCategory = (category: string): CaseStudy[] => {
  if (category === 'All') return caseStudies;
  return caseStudies.filter(study => study.category === category);
};
