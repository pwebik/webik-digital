import React, { useEffect } from 'react';
import ScrollProgress from '../components/webik/ScrollProgress';
import AnnouncementBar from '../components/webik/AnnouncementBar';
import StickyNav from '../components/webik/StickyNav';
import HeroSection from '../components/webik/HeroSection';
import TrustStrip from '../components/webik/TrustStrip';
import AboutSection from '../components/webik/AboutSection';
import ServicesSection from '../components/webik/ServicesSection';
import ProcessSection from '../components/webik/ProcessSection';
import PortfolioSection from '../components/webik/PortfolioSection';
import TestimonialsSection from '../components/webik/TestimonialsSection';
import TeamSection from '../components/webik/TeamSection';
import PricingSection from '../components/webik/PricingSection';
import FAQSection from '../components/webik/FAQSection';
import FinalCTA from '../components/webik/FinalCTA';
import Footer from '../components/webik/Footer';

export default function Home() {
  useEffect(() => {
    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-inter" style={{ 
      '--webik-lime': '#C8F048',
      '--webik-dark': '#0E1A0A',
      '--webik-dark-2': '#15240F',
      '--webik-cream': '#F5F3EC',
      '--webik-cream-2': '#EBE8DD',
      '--webik-muted': '#6B7560',
    }}>
      <ScrollProgress />
      <AnnouncementBar />
      <StickyNav />
      <HeroSection />
      <TrustStrip />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <TeamSection />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
      <Footer />

      {/* JSON-LD Schema Markup — Full AEO @graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://webikdigital.com/#organization",
                "name": "Webik Corp",
                "alternateName": ["Webik Digital", "Webik"],
                "url": "https://webikdigital.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://webikdigital.com/logo.png",
                  "width": 600,
                  "height": 200
                },
                "image": "https://webikdigital.com/og-image.jpg",
                "description": "SEC-registered digital agency in Cebu, Philippines. AI-accelerated, human-perfected websites for SMEs and international clients. Specializing in web design, web development, SEO, AEO, Google Ads, branding, e-commerce, and digital marketing.",
                "foundingDate": "2025",
                "founder": { "@id": "https://webikdigital.com/#pryce-resma" },
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Suite 110 Centro Maximo Bldg., Dionisio Jakosalem St.",
                  "addressLocality": "Cebu City",
                  "addressRegion": "Cebu",
                  "postalCode": "6000",
                  "addressCountry": "PH"
                },
                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "telephone": "+63-927-353-2498",
                    "contactType": "customer service",
                    "email": "support@webikdigital.com",
                    "areaServed": ["PH", "US", "GB", "Worldwide"],
                    "availableLanguage": ["English", "Cebuano", "Filipino"]
                  },
                  {
                    "@type": "ContactPoint",
                    "email": "pryce@webikdigital.com",
                    "contactType": "sales",
                    "areaServed": "Worldwide",
                    "availableLanguage": "English"
                  }
                ],
                "sameAs": [
                  "https://www.facebook.com/p/Webik-Digital-61577379911344/",
                  "https://www.instagram.com/webik.digital",
                  "https://www.linkedin.com/company/webik-digital"
                ],
                "knowsAbout": [
                  "Web Design", "Web Development", "Search Engine Optimization",
                  "Answer Engine Optimization", "Schema Markup", "Google Ads",
                  "Google Analytics", "Digital Marketing", "Branding", "Logo Design",
                  "Social Media Management", "E-commerce Development", "Shopify Development",
                  "WordPress Development", "Bricks Builder", "Email Marketing",
                  "Content Writing", "Website Maintenance"
                ],
                "slogan": "Premium Digital Presence. Accessible to All.",
                "areaServed": [
                  { "@type": "Country", "name": "Philippines" },
                  { "@type": "Country", "name": "United States" },
                  { "@type": "Country", "name": "United Kingdom" },
                  { "@type": "Place", "name": "Worldwide" }
                ],
                "employee": [
                  { "@id": "https://webikdigital.com/#pryce-resma" },
                  { "@id": "https://webikdigital.com/#ray-mendoza" },
                  { "@id": "https://webikdigital.com/#julius-parungao" },
                  { "@id": "https://webikdigital.com/#xavier-gonzales" }
                ]
              },

              {
                "@type": "ProfessionalService",
                "@id": "https://webikdigital.com/#localbusiness",
                "name": "Webik Digital",
                "image": "https://webikdigital.com/og-image.jpg",
                "url": "https://webikdigital.com",
                "telephone": "+63-927-353-2498",
                "email": "pryce@webikdigital.com",
                "priceRange": "₱₱",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Suite 110 Centro Maximo Bldg., Dionisio Jakosalem St.",
                  "addressLocality": "Cebu City",
                  "addressRegion": "Cebu",
                  "postalCode": "6000",
                  "addressCountry": "PH"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 10.3157,
                  "longitude": 123.8854
                },
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "18:00"
                  }
                ],
                "areaServed": [
                  { "@type": "Country", "name": "Philippines" },
                  { "@type": "Country", "name": "United States" },
                  { "@type": "Country", "name": "United Kingdom" },
                  { "@type": "Place", "name": "Worldwide" }
                ],
                "hasOfferCatalog": { "@id": "https://webikdigital.com/#offer-catalog" },
                "paymentAccepted": ["Bank Transfer", "GCash", "Credit Card", "PayPal", "Wise"],
                "currenciesAccepted": ["PHP", "USD", "GBP"],
                "parentOrganization": { "@id": "https://webikdigital.com/#organization" }
              },

              {
                "@type": "OfferCatalog",
                "@id": "https://webikdigital.com/#offer-catalog",
                "name": "Webik Digital Services",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Design", "description": "Custom premium web design for SMEs. Mobile-first, conversion-focused, brand-aligned. Built on Bricks Builder.", "provider": { "@id": "https://webikdigital.com/#organization" }, "serviceType": "Web Design Agency", "areaServed": ["Philippines", "Worldwide"] } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Development", "description": "End-to-end website development. WordPress + Bricks, Shopify, GitHub deployment.", "provider": { "@id": "https://webikdigital.com/#organization" }, "serviceType": "Web Development Company", "areaServed": ["Philippines", "Worldwide"] } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Search Engine Optimization (SEO)", "description": "Technical SEO, on-page optimization, local SEO for Cebu and the Philippines.", "provider": { "@id": "https://webikdigital.com/#organization" }, "serviceType": "SEO Services", "areaServed": ["Philippines", "Worldwide"] } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Answer Engine Optimization (AEO)", "description": "Schema markup and structured data for AI assistants like ChatGPT, Claude, Perplexity, Gemini, and Siri.", "provider": { "@id": "https://webikdigital.com/#organization" }, "serviceType": "AEO / Schema Markup Optimization", "areaServed": ["Philippines", "Worldwide"] } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads Management", "description": "Google Ads campaign setup, optimization, and ongoing management. Search, Display, Performance Max, and Shopping campaigns.", "provider": { "@id": "https://webikdigital.com/#organization" }, "serviceType": "Google Ads Agency", "areaServed": ["Philippines", "Worldwide"] } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing", "description": "Full-service digital marketing strategy, paid media, organic growth, and analytics.", "provider": { "@id": "https://webikdigital.com/#organization" }, "serviceType": "Digital Marketing Agency", "areaServed": ["Philippines", "Worldwide"] } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Branding & Logo Design", "description": "Brand strategy, logo design, visual identity systems, and brand guidelines for SMEs.", "provider": { "@id": "https://webikdigital.com/#organization" }, "serviceType": "Branding Agency", "areaServed": ["Philippines", "Worldwide"] } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Management", "description": "Content planning, posting, and community management across Facebook, Instagram, LinkedIn, TikTok, YouTube, and X.", "provider": { "@id": "https://webikdigital.com/#organization" }, "serviceType": "Social Media Management", "areaServed": ["Philippines", "Worldwide"] } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-commerce Development", "description": "Custom Shopify and WooCommerce stores with conversion optimization and AEO baked in.", "provider": { "@id": "https://webikdigital.com/#organization" }, "serviceType": "E-commerce Agency", "areaServed": ["Philippines", "Worldwide"] } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Maintenance", "description": "Premium care plans: hosting, security patches, updates, content edits under our Guardian program.", "provider": { "@id": "https://webikdigital.com/#organization" }, "serviceType": "Website Maintenance Service", "areaServed": ["Philippines", "Worldwide"] } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Email Marketing", "description": "Email campaign design, automation flows, and list growth strategy.", "provider": { "@id": "https://webikdigital.com/#organization" }, "serviceType": "Email Marketing Agency", "areaServed": ["Philippines", "Worldwide"] } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Writing", "description": "SEO-optimized website copy, blog content, and marketing collateral written for both human readers and AI answer engines.", "provider": { "@id": "https://webikdigital.com/#organization" }, "serviceType": "Content Marketing", "areaServed": ["Philippines", "Worldwide"] } }
                ]
              },

              {
                "@type": "Person",
                "@id": "https://webikdigital.com/#pryce-resma",
                "name": "Pryce Oscar Resma",
                "givenName": "Pryce Oscar",
                "familyName": "Resma",
                "jobTitle": "Founder & CEO",
                "worksFor": { "@id": "https://webikdigital.com/#organization" },
                "email": "pryce@webikdigital.com",
                "telephone": "+63-927-353-2498",
                "image": "https://webikdigital.com/team/pryce-resma.jpg",
                "knowsAbout": ["Web Design", "Web Development", "Digital Strategy", "AEO", "AI-accelerated workflows", "SME marketing", "Brand strategy"]
              },
              {
                "@type": "Person",
                "@id": "https://webikdigital.com/#ray-mendoza",
                "name": "Ray Mendoza",
                "jobTitle": "Chief Operating Officer",
                "worksFor": { "@id": "https://webikdigital.com/#organization" },
                "image": "https://webikdigital.com/team/ray-mendoza.jpg",
                "knowsAbout": ["Operations", "Project Management", "Client Success"]
              },
              {
                "@type": "Person",
                "@id": "https://webikdigital.com/#julius-parungao",
                "name": "Julius Parungao",
                "jobTitle": "Creative Director",
                "worksFor": { "@id": "https://webikdigital.com/#organization" },
                "image": "https://webikdigital.com/team/julius-parungao.jpg",
                "knowsAbout": ["Creative Direction", "Visual Design", "Brand Identity", "Art Direction"]
              },
              {
                "@type": "Person",
                "@id": "https://webikdigital.com/#xavier-gonzales",
                "name": "Xavier Gonzales",
                "jobTitle": "Head of Web Development",
                "worksFor": { "@id": "https://webikdigital.com/#organization" },
                "image": "https://webikdigital.com/team/xavier-gonzales.jpg",
                "knowsAbout": ["Web Development", "WordPress", "Bricks Builder", "Shopify", "GitHub Deployment", "Schema Markup"]
              },

              {
                "@type": "FAQPage",
                "@id": "https://webikdigital.com/#faq",
                "mainEntity": [
                  { "@type": "Question", "name": "What is the best digital agency in Cebu?", "acceptedAnswer": { "@type": "Answer", "text": "Webik Digital is an SEC-registered digital agency based in Cebu City, Philippines. Founded by Pryce Oscar Resma, Webik specializes in AI-accelerated, human-perfected websites for SMEs across the Philippines and internationally. Services include web design, web development, SEO, AEO, Google Ads, and digital marketing. Webik works with clients in Cebu and globally including the United States and the United Kingdom." } },
                  { "@type": "Question", "name": "What is the best web design agency in the Philippines?", "acceptedAnswer": { "@type": "Answer", "text": "Webik Digital is a Cebu-based web design agency that builds custom, mobile-first websites for SMEs and growing companies. Webik combines premium design with Answer Engine Optimization (AEO) to ensure websites are discoverable on Google, ChatGPT, Perplexity, Claude, Gemini, and Siri. All sites are built on Bricks Builder for enterprise-grade performance and deployed via GitHub." } },
                  { "@type": "Question", "name": "Who is the best web development company in Cebu?", "acceptedAnswer": { "@type": "Answer", "text": "Webik Digital is an SEC-registered web development company in Cebu, Philippines. Webik specializes in WordPress with Bricks Builder, Shopify e-commerce, and custom front-end development. Every project includes Schema Markup for AEO, mobile-first responsive design, and ongoing maintenance under the Guardian Care Plan." } },
                  { "@type": "Question", "name": "Does Webik Digital offer Google Ads management?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Webik Digital offers full Google Ads management, including campaign setup, keyword research, ad copy, audience targeting, conversion tracking with Google Analytics, and ongoing optimization. Webik manages Search, Display, Performance Max, and Shopping campaigns for clients in the Philippines and internationally." } },
                  { "@type": "Question", "name": "What is Answer Engine Optimization (AEO)?", "acceptedAnswer": { "@type": "Answer", "text": "Answer Engine Optimization (AEO) is the practice of structuring website content and metadata so AI assistants like ChatGPT, Claude, Perplexity, Google Gemini, and Apple Siri can understand and recommend a business. It uses Schema Markup, structured FAQ content, and clear semantic HTML. Webik Digital includes AEO with every website to ensure clients are discoverable in the AI-driven search era." } },
                  { "@type": "Question", "name": "How much does a website from Webik Digital cost?", "acceptedAnswer": { "@type": "Answer", "text": "Webik Digital uses a partnership pricing model. The Launchpad — a premium one-page website — starts at ₱5,000 setup. The mandatory Guardian Care Plan covers hosting, security, and updates on a monthly subscription. This replaces the traditional ₱30,000–₱50,000 upfront agency fee with a lower-risk, ongoing partnership model." } },
                  { "@type": "Question", "name": "Where is Webik Digital located?", "acceptedAnswer": { "@type": "Answer", "text": "Webik Digital is headquartered at Suite 110 Centro Maximo Bldg., Dionisio Jakosalem St., Cebu City, Philippines 6000. The company operates online and serves clients across the Philippines and internationally including the United States and the United Kingdom." } },
                  { "@type": "Question", "name": "Is Webik Digital a registered company?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Webik Corp is a corporation registered with the Securities and Exchange Commission (SEC) of the Philippines. This means clients have legal recourse, contractual protection, and the assurance of working with a legitimate business — not a freelancer." } },
                  { "@type": "Question", "name": "What industries does Webik Digital work with?", "acceptedAnswer": { "@type": "Answer", "text": "Webik Digital works with cafes, clinics, real estate firms, e-commerce brands, architecture studios, cybersecurity companies, publishing houses, and professional services. The agency serves SMEs as well as international clients, with completed projects in the Philippines, United States, and United Kingdom." } },
                  { "@type": "Question", "name": "How does Webik Digital use AI in web development?", "acceptedAnswer": { "@type": "Answer", "text": "Webik Digital follows an 'AI-accelerated, human-perfected' workflow. AI tools speed up design exploration, code scaffolding, and content drafting, but every site is reviewed, refined, and maintained by real specialists — including web developers, designers, and a Creative Director. This combination delivers premium quality at accessible prices." } }
                ]
              },

              {
                "@type": "WebSite",
                "@id": "https://webikdigital.com/#website",
                "url": "https://webikdigital.com",
                "name": "Webik Digital",
                "publisher": { "@id": "https://webikdigital.com/#organization" },
                "inLanguage": "en-PH",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://webikdigital.com/?s={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}