import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2, BookOpen } from "lucide-react";
import { sanitizeHtml } from "@/utils/sanitize";

// This would typically come from a CMS or database
const blogPosts = {
  'future-library-technology-australian-libraries': {
    id: 1,
    slug: 'future-library-technology-australian-libraries',
    title: 'The Future of Library Technology: What Australian Libraries Need to Know',
    excerpt: 'Explore emerging trends in library technology and how they can benefit Australian public libraries. From AI-powered search to enhanced accessibility features.',
    content: `
      <p class="lead">The image of a library as a hushed sanctuary of dusty tomes is rapidly becoming a relic of the past. Australian libraries are at the forefront of a profound digital evolution, transforming into cutting-edge innovation hubs that leverage advanced technologies to enhance services and reshape how communities interact with knowledge. This isn't just about adding new gadgets; it's about a crucial adaptation that underscores the enduring role libraries have played for millennia, from ancient clay tablets to modern digital networks.</p>

      <p>As the Australian Library and Information Association (ALIA) actively participates in global discussions about the role of libraries in the 2030 Agenda for Sustainable Development, the focus is on improving access to information and helping people transform knowledge into life-enhancing opportunities. Libraries have always been a force for good, acting as a "great leveler" and addressing factors of disadvantage faced by various groups, including Indigenous Australians, homeless people, those with mental illness, and people with disabilities. This commitment to equity and inclusion is deeply embedded in the adoption of emerging technologies.</p>

      <h2>AI-Powered Search and Personalised Support: Your 24/7 Librarian for All</h2>
      <p>Imagine needing to find a specific resource or answer a quick question at 3 AM. Artificial intelligence (AI) chatbots are stepping in to provide instant, personalised support around the clock. These applications are designed to imitate human interaction, handling a high volume of routine reference questions like library hours, locations, policies, or even finding specific materials.</p>
      
      <p>This automation frees up human librarians to focus on more complex, human-centric tasks requiring empathy and in-depth assistance. Through Natural Language Processing (NLP), chatbots offer personalised user experiences, allowing patrons to ask questions as they would to another human, simplifying navigation and overcoming library jargon barriers. This is particularly beneficial for newcomers, individuals from culturally and linguistically diverse (CALD) communities, or those with limited English proficiency, who might otherwise find traditional search methods or library terminology daunting. By offering 24/7 access and simplifying information retrieval, AI chatbots significantly contribute to closing gaps in access to information and advancing digital inclusion for everyone, transforming the library into a continuous, always-on resource that levels the playing field.</p>

      <h2>Augmented Reality (AR) for Dynamic Navigation and Intellectual Exploration</h2>
      <p>Have you ever felt "geographically challenged" in a large library, navigating an endless maze of books? Augmented Reality (AR) is poised to solve this "spatial unawareness" by merging virtual guidance with physical surroundings directly on your mobile device. This provides real-time navigation to specific books or areas within the library, displaying bookshelf locations and dynamic direction indicators.</p>
      
      <p>Beyond physical navigation, AR can guide "intellectual exploration" and address "learning domain unawareness"—when you're new to a topic and don't know where to start. Systems like the NODE (NO Donkey E-learning) system integrate AR with data mining algorithms to provide "reading paths" and "learning paths". These paths, derived from collective reading records, suggest a progressive sequence of books and resources related to a chosen topic, complete with introductions and user comments. Mobile AR systems enhance this by integrating physical and virtual resources, allowing learners to quickly find book locations, information, and reviews on their handheld devices, thus enriching the learning experience. For CALD communities and new learners, this visual and interactive guidance can be transformative. It helps overcome barriers created by unfamiliarity with Western library classification systems or large, complex physical spaces, fostering self-regulated learning and ensuring everyone can engage in intellectual exploration regardless of their prior experience or background.</p>

      <h2>Makerspaces and Collaborative Creation: From Consumption to Production</h2>
      <p>Public libraries are increasingly becoming places for "creation, not just consumption". Makerspaces provide tools and environments for patrons to engage in hands-on learning, experimentation, and innovation. Australian public and school libraries are already introducing digital literacy programs, coding and robotics classes, and advanced technological equipment like 3D printers. Examples include Port Macquarie-Hastings Imaginarium and Tech Room, which features a recording studio and virtual reality equipment, and Code Club at Leichhardt Library, teaching children to code with Scratch and Trinket. Other initiatives include City of Perth Knowledge Week featuring pop-up sessions on coding, VR, and AR, City of Ryde's science-based activities and LEGO building workshops, and Geelong Regional Library offering 3D printing, virtual reality, and Raspberry Pi meet-ups. Cumberland Libraries introduce Arduino microcontrollers and robotic balls like SPRK+ to engage students in programming and robotics. The State Library of Queensland's "The Edge" project empowers creative experimentation and even provides ICT self-sufficiency programs to marginalized communities using reclaimed hardware.</p>
      
      <p>These spaces promote STEM skills, demystify technology, and encourage entrepreneurship. For CALD communities and societal equality, makerspaces are crucial for digital inclusion by providing access to equipment and training that might otherwise be unaffordable. Programs like "Deadly Digital," a digital skills program for Indigenous children, exemplify how libraries are targeting these initiatives to specific communities. Makerspaces foster peer-to-peer learning and community-driven innovation, empowering users from all backgrounds to be co-producers and co-creators of knowledge, helping to break down social hierarchies and promote equitable opportunities. This directly supports Goal 9 (Industry, innovation and infrastructure) and Goal 10 (Reduced inequalities) of the Sustainable Development Goals. Libraries are also offering specific language support in these spaces, such as storytimes in Korean and Chinese.</p>

      <h2>Data-Driven Decisions and Data Literacy: Informing an Equitable Future</h2>
      <p>In an era of rapid information growth, capturing, analysing, and reporting data are essential for libraries to make informed strategic decisions, justify resource allocation, and demonstrate their value to stakeholders. Libraries are becoming key players in data management and curation, applying skills honed over decades of handling print data to today's "Big Data" challenges.</p>
      
      <p>Librarians are increasingly recognised as experts in data management, information science, and the Semantic Web, expanding their role to include data curation and providing informal, ongoing training to improve data literacy within their communities. Critically, libraries can leverage "Big Data" at a macro level to understand patterns of use for materials and programs without compromising individual patron privacy. This allows them to identify where services are most needed, addressing digital divides and inequalities affecting regional Australians, low-income households, and Indigenous communities. The Australian Digital Inclusion Index, which measures digital inclusion across Australia and identifies geographic locations where services are most needed, is a practical example of how data guides these efforts. By using data-driven approaches, libraries can ensure their services are responsive, equitable, and provide significant economic, research, and social value to all segments of the population. This empowers business leaders, government executives, and scientists to make better decisions, reinforcing the library's role in building informed and equitable communities.</p>

      <h2>Enhanced Accessibility and Inclusivity for All</h2>
      <p>Crucially, these technological advancements, coupled with ongoing library initiatives, significantly enhance accessibility and inclusivity for all Australians. ALIA's commitment to the Sustainable Development Goals includes reducing inequalities. Libraries actively address factors of disadvantage faced by Indigenous Australians, homeless people, those with mental illness, and people with disabilities.</p>
      
      <p>Libraries provide national digital infrastructure, offering public access computers and free Wi-Fi in over 70% of locations, which is vital for digital inclusion. This is particularly important for regional and remote Australians, low-income households, and Indigenous communities, who may lack home internet access or digital devices. Libraries host digital literacy programs like "Deadly Digital" for Indigenous children and "Tech Savvy Seniors," which has reached communities with significant proportions of older people and those from non-English speaking backgrounds, such as Chinese residents, helping them use technology for socialising, government services, and personal business. Initiatives like the ACT Digital Hub, often located in public libraries, provided one-on-one and group sessions on digital literacy, including virtual classroom experiences for the Adult Migrant English Program. The provision of bilingual baby board books in Indigenous communities supports family literacy and preserves Indigenous languages.</p>
      
      <p>Libraries also serve as welcoming, safe, and neutral places where people can confidently engage with technology and access vital services. They help individuals navigate complex online forms for e-government services and provide cybersafety training to protect against scams and cyberbullying, acting as a trusted source of digital advice for all ages and socioeconomic groups. This comprehensive approach ensures that the digital revolution truly benefits every member of the community, helping to overcome significant barriers to participation in the modern economy and society.</p>

      <h2>Conclusion</h2>
      <p>Australian libraries are embracing this new wave of technology with a clear vision: to remain dynamic community resources and vibrant centres for knowledge creation and collaborative learning. By thoughtfully adopting AI, AR, makerspaces, and data-driven strategies, libraries are reinforcing their timeless role in promoting an informed, connected, and equitable citizenry, actively involving users in participatory design, and fostering trust in how knowledge is created and shared. The future of library technology in Australia is not just about adapting; it's about leading the way to a more inclusive and innovative society for all.</p>
    `,
    category: 'Technology Trends',
    readTime: '8 min read',
    date: '2024-01-15',
    featured: true,
    author: 'URL IRL',
    tags: ['AI', 'Cloud Computing', 'Accessibility', 'Mobile Design', 'Digital Transformation']
  }
};


export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | URL IRL',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: `${post.title} | URL IRL`,
    description: post.excerpt,
    keywords: [
      'library technology',
      'Australian libraries',
      'library software',
      'digital transformation',
      'library innovation',
      ...post.tags
    ],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://urlirl.com.au/insights/${post.slug}`,
      siteName: 'URL IRL',
      locale: 'en_AU',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `/insights/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <main className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Blog Post Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The requested blog post could not be found.</p>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>
        </div>
      </main>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-AU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-50 to-indigo-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>
          
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl">
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-purple max-w-none">
            <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content) }} />
          </article>
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Share Section */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
            <button className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>
      </section>

      {/* Related Articles CTA */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Explore More Insights
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Discover more articles about library technology, digital transformation, and software solutions.
          </p>

        </div>
      </section>
    </main>
  );
}
