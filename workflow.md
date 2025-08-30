The Ideal Workflow: PRD to Website with Cursor
The core principle is to use Cursor as an active collaborator. You provide the direction and context from the PRD, and Cursor generates the boilerplate, components, and logic, which you then refine.

Phase 1: Project Setup and Scaffolding (1-2 Hours)
Your goal here is to create a structured, working project from scratch with minimal manual setup.

Initialise the Project with a Prompt:
Open Cursor and start a new project. Instead of manually running create-next-app in the terminal, use the chat feature.

Prompt for Cursor Chat:
"Generate a new project in this workspace. Use the Next.js App Router with TypeScript and Tailwind CSS. Name the project librarian-coder-portfolio."

Define the Project Structure:
Once the boilerplate is ready, you need to create the folders that will hold your components and content. Let the AI do this for you.

Prompt for Cursor Chat:
"Based on the PRD for a portfolio website, create a logical folder structure inside the src directory. I'll need folders for components (with subfolders for ui, layout, and sections), app for routing, lib for utilities, and public for assets like images and my CV."

Set Up Global Styles and Fonts:
Your website needs a consistent look and feel. Use Cursor to set up the foundational styles. Open src/app/layout.tsx and src/app/globals.css.

Prompt for Cursor Chat:
"Based on the PRD's professional and accessible tone, recommend a font pairing from Google Fonts. Provide the import code for my layout.tsx file and the necessary configuration to add these fonts to my tailwind.config.ts file."

Phase 2: Building the Core Layout & Reusable Components (2-3 Hours)
Focus on the elements that appear on every page: the header and footer.

Generate the Header Component:
Create a new file: src/components/layout/Header.tsx.

Prompt for Cursor Chat (or Cmd+K / Ctrl+K inline):
"Create a responsive React component for a website header using Next.js Link components and Tailwind CSS. It needs a logo placeholder on the left. On the right, it should have navigation links for 'My Story', 'Services', 'Case Studies', and 'Insights'. To the far right, include a primary call-to-action button that says 'Book a Consultation'."

Generate the Footer Component:
Create a new file: src/components/layout/Footer.tsx.

Prompt for Cursor Chat (or Cmd+K / Ctrl+K inline):
"Create a React component for a website footer using Tailwind CSS. It should include three columns: 1) My contact email and a link to my LinkedIn profile. 2) A short sentence about my mission to help libraries. 3) My ABN and a link to a Privacy Policy page. Ensure it's styled cleanly and professionally."

Integrate into the Main Layout:
Open src/app/layout.tsx. Manually import your new Header and Footer components and place them correctly around the {children} prop. If you're unsure, highlight the code and ask Cursor.

Prompt for Cursor Chat:
"I've created Header and Footer components. Can you show me how to correctly integrate them into this root layout file so they appear on every page?"

Phase 3: Building Page by Page, Section by Section (4-6 Hours)
This is the bulk of the work. Tackle one page at a time, breaking it down into the sections defined in the PRD. We'll use the Homepage as the example.

Scaffold the Homepage Sections:
Open src/app/page.tsx. Delete the boilerplate content. For each section on the homepage (Hero, UVP Section, Services Overview, etc.), create a new component file in src/components/sections/.

Generate the Hero Section:
In src/components/sections/HeroSection.tsx, use a detailed prompt based on the PRD.

Prompt for Cursor Chat:
"Generate a React component for a hero section. The main headline is 'Bespoke Technology for Australian Libraries, Built by a Librarian Who Codes.' Include a subheading that elaborates on this value proposition. Add a primary 'Book a Free Consultation' button and a secondary, less prominent button for 'View My Work'. Use Tailwind CSS for a modern, clean, and responsive layout."

Generate the "Unique Value Proposition" Section:
In src/components/sections/UVPSection.tsx, instruct Cursor to create the three-column layout.

Prompt for Cursor Chat:
"Create a React component for a 'Why Me?' section. It should have a heading and then a responsive 3-column grid. Each column needs an icon, a title ('Insider Knowledge', 'Bespoke Solutions', 'Cost-Effective Partnership'), and a short descriptive sentence as detailed in the PRD."

Pro-Tip: You can ask Cursor to suggest icons from a library like lucide-react. Just add "...suggest and import suitable icons from the lucide-react library" to your prompt.

Assemble and Refine:
Import the components you've built into src/app/page.tsx. View the result in your browser. Now, use Cursor's inline editing (Cmd+K / Ctrl+K) for quick refinements.

Highlight the Hero section's headline and prompt: "Make this text larger and bolder."

Select a button and prompt: "Change the background colour of this button on hover."

Highlight a grid and prompt: "Add more vertical padding between these sections on mobile."

Repeat for All Pages:
Follow this same Generate -> Assemble -> Refine pattern for the "My Story", "Services", and "Case Studies" pages, creating dedicated components for each distinct section.

Phase 4: Final Touches and Deployment (2-3 Hours)
Add Analytics:

Prompt for Cursor Chat:
"What is the best-practice way to add Google Analytics (GA4) to a Next.js App Router project? Please provide the code for a component and show me where to place it."

SEO and Metadata:
Open src/app/layout.tsx and src/app/page.tsx.

Prompt for Cursor Chat:
"Generate the Next.js metadata object for my root layout and homepage based on the PRD. The title should be 'The Librarian Who Codes | Custom Software for Australian Libraries' and the description should be optimised for search engines to attract library managers."

Final Checks and Deployment:
Use Cursor to check your work before deploying.

Prompt for Cursor Chat:
"Scan my project for common accessibility issues. Check for missing alt tags on images, proper heading structure, and sufficient color contrast."

When you're ready, Cursor can guide you through deployment. The PRD specifies Australian hosting. You can use Vercel (which has Sydney servers) for easy deployment.

Prompt for Cursor Chat:
"Provide me with a step-by-step guide to deploy this Next.js project from my GitHub repository to Vercel. Ensure I configure the production domain correctly."