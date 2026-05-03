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

      {/* JSON-LD Schema Markup */}
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
                "url": "https://webikdigital.com",
                "logo": "https://webikdigital.com/logo.png",
                "description": "SEC-registered digital agency based in Cebu, Philippines. Premium digital presence, accessible to all.",
                "foundingDate": "2025",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Suite 110 Centro Maximo Bldg., Dionisio Jakosalem St.",
                  "addressLocality": "Cebu City",
                  "addressRegion": "Cebu",
                  "addressCountry": "PH"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+63-927-353-2498",
                  "contactType": "sales",
                  "email": "pryce@webikdigital.com"
                },
                "sameAs": [
                  "https://facebook.com/webikdigital",
                  "https://instagram.com/webikdigital",
                  "https://linkedin.com/company/webikdigital",
                  "https://tiktok.com/@webikdigital",
                  "https://youtube.com/@webikdigital"
                ]
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://webikdigital.com/#localbusiness",
                "name": "Webik Corp",
                "image": "https://webikdigital.com/logo.png",
                "url": "https://webikdigital.com",
                "telephone": "+63-927-353-2498",
                "email": "pryce@webikdigital.com",
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
                "priceRange": "₱₱",
                "openingHours": "Mo-Fr 09:00-18:00"
              },
              {
                "@type": "Service",
                "name": "The Launchpad - Premium One-Page Website",
                "provider": { "@id": "https://webikdigital.com/#organization" },
                "description": "Custom one-page website design for SMEs, built on enterprise-grade tech with AEO baked in. Live in 48 hours.",
                "areaServed": ["Cebu City", "Philippines", "United Kingdom"],
                "offers": {
                  "@type": "Offer",
                  "price": "5000",
                  "priceCurrency": "PHP"
                }
              },
              {
                "@type": "Service",
                "name": "The Guardian - Mandatory Care Plan",
                "provider": { "@id": "https://webikdigital.com/#organization" },
                "description": "Monthly website care plan including premium hosting, domain management, security patches, and content updates."
              },
              {
                "@type": "Service",
                "name": "Answer Engine Optimization (AEO)",
                "provider": { "@id": "https://webikdigital.com/#organization" },
                "description": "Schema Markup optimization for AI assistants like ChatGPT, Siri, Google Gemini, and Perplexity to recommend your business."
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How long does a Webik website take to build?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our Launchpad sites go live in as little as 48 hours from project kickoff. More complex multi-page or e-commerce sites take 5–14 days depending on scope."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is Answer Engine Optimization (AEO)?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "AEO is the next evolution of SEO. We structure your site with Schema Markup so AI assistants like ChatGPT, Siri, Google Gemini, and Perplexity can understand and recommend your business."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do I own my website and domain?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, completely. The domain is registered in your name from day one. Your website code, design, and content belong to you."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Why is your setup fee so much lower than other agencies?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We use AI to accelerate development and our business model is partnership-based: a low setup fee plus a monthly Guardian plan."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is the monthly Care Plan really mandatory?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The Guardian Care Plan protects you from the freelancer ghosting problem. Without ongoing care, websites break."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Are you actually using AI to build my website?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes — we use AI tools to accelerate design exploration, code scaffolding, and content drafting. But every site is reviewed and maintained by real human specialists."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I cancel my Care Plan?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "After the initial 12-month commitment, you can cancel anytime with 30 days' notice. We'll provide a full export of your site files."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you work with clients outside Cebu or the Philippines?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We've built sites for clients in the UK, the United States, and across the Philippines. Our process is fully remote-friendly."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />
    </div>
  );
}