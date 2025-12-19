"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SplitAbout from '@/components/sections/about/SplitAbout';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Sparkles, Award, Binoculars, Heart, Leaf, BookOpen, Users, TrendingUp, Calendar, Star, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="small"
      sizing="medium"
      background="fluid"
      cardStyle="noise-gradient"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Zoo Madrid"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766139811510-n9knt0v0.jpg"
          logoAlt="Zoo Madrid Logo"
          navItems={[
            { name: "Home", id: "home" },
            { name: "Experiences", id: "experiences" },
            { name: "About", id: "about" },
            { name: "Visitor Info", id: "visitor-info" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Get Tickets",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Discover Madrid's Wildlife Wonder"
          description="Explore over 6,000 animals from across the globe in one of Europe's most iconic zoos. Experience nature like never before."
          tag="Welcome to Zoo Madrid"
          tagIcon={Sparkles}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=fk6711"
          imageAlt="Zoo Madrid entrance with visitors"
          buttons={[
            { text: "Get Tickets Now", href: "contact" },
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>

      <div id="experiences" data-section="experiences">
        <FeatureCardSixteen
          title="Why Choose Zoo Madrid"
          description="Experience the difference between a standard visit and an unforgettable wildlife adventure"
          tag="Experience the Difference"
          tagIcon={Award}
          negativeCard={{
            title: "Without Zoo Madrid",
            items: [
              "Limited wildlife interaction",
              "No educational programs",
              "Basic visitor facilities",
              "Crowded attractions",
              "No special experiences"
            ]
          }}
          positiveCard={{
            title: "With Zoo Madrid",
            items: [
              "Immersive animal encounters",
              "Expert-led educational tours",
              "World-class facilities",
              "Exclusive experiences",
              "Conservation programs"
            ]
          }}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="attractions" data-section="attractions">
        <ProductCardTwo
          title="Main Attractions"
          description="Visit our most popular animal zones and interactive experiences"
          tag="Explore More"
          tagIcon={Binoculars}
          products={[
            {
              id: "lions",
              brand: "African Savanna",
              name: "King's Kingdom - Lions & Big Cats",
              price: "Included",
              rating: 5,
              reviewCount: "2.4k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766155709105-ogatv45j.jpg",
              imageAlt: "Lions in African savanna zone"
            },
            {
              id: "elephants",
              brand: "Asian Wilderness",
              name: "Elephant Sanctuary",
              price: "Included",
              rating: 5,
              reviewCount: "1.9k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766155708478-ce3eoox3.jpg",
              imageAlt: "Majestic elephants in habitat"
            },
            {
              id: "primates",
              brand: "Jungle World",
              name: "Primate Adventure - Monkeys & Apes",
              price: "Included",
              rating: 5,
              reviewCount: "1.7k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766155709618-jhl9182r.jpg",
              imageAlt: "Various primates interacting"
            },
            {
              id: "birds",
              brand: "Sky Kingdom",
              name: "Exotic Birds Paradise",
              price: "Included",
              rating: 5,
              reviewCount: "1.3k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766155710079-64q1uj68.jpg",
              imageAlt: "Colorful exotic birds"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About Zoo Madrid"
          description="Since 1972, Zoo Madrid has been a leader in conservation, education, and family entertainment. We're dedicated to protecting wildlife and inspiring the next generation of conservationists."
          tag="Our Mission"
          tagIcon={Heart}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          bulletPoints={[
            {
              title: "Conservation First",
              description: "Active participation in global conservation programs protecting endangered species",
              icon: Leaf
            },
            {
              title: "Education & Learning",
              description: "Expert-led programs and interactive exhibits for all ages to learn about wildlife",
              icon: BookOpen
            },
            {
              title: "Family Experience",
              description: "Safe, engaging environment for families to create unforgettable memories together",
              icon: Users
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=howk7u"
          imageAlt="Aerial view of Zoo Madrid grounds"
          imagePosition="right"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="By The Numbers"
          description="Our impact on wildlife conservation and visitor education"
          tag="Our Achievement"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "50+",
              title: "Years",
              description: "Serving Madrid families with world-class wildlife experiences",
              icon: Calendar
            },
            {
              id: "2",
              value: "6000",
              title: "Animals",
              description: "From over 700 different species around the world",
              icon: Users
            },
            {
              id: "3",
              value: "1.2M",
              title: "Visitors",
              description: "Annual visitors enjoying and learning about wildlife",
              icon: Users
            },
            {
              id: "4",
              value: "45+",
              title: "Programs",
              description: "Conservation and education initiatives worldwide",
              icon: Leaf
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Visitor Stories"
          description="Hear from families and wildlife enthusiasts who visited Zoo Madrid"
          tag="Guest Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "María García",
              role: "Mom of Two",
              testimonial: "An amazing day with the kids! The animals are so well cared for and the educational guides made it incredibly engaging. We'll definitely come back.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140581190-ft9jvi9y.jpg",
              imageAlt: "Portrait of María García"
            },
            {
              id: "2",
              name: "Carlos López",
              role: "Wildlife Enthusiast",
              testimonial: "The most impressive zoo I've visited. The habitats are spacious, the conservation work is visible everywhere, and staff knowledge is exceptional.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140581190-ft9jvi9y.jpg",
              imageAlt: "Portrait of Carlos López"
            },
            {
              id: "3",
              name: "Ana Martínez",
              role: "Teacher",
              testimonial: "Brought my entire class here for an educational trip. The special programs designed for students were outstanding. Highly recommend for school groups.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140581190-ft9jvi9y.jpg",
              imageAlt: "Portrait of Ana Martínez"
            },
            {
              id: "4",
              name: "David Rodríguez",
              role: "Travel Guide",
              testimonial: "I recommend Zoo Madrid to all my tourist groups. It's one of Madrid's top attractions with excellent facilities and genuine conservation efforts.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140581190-ft9jvi9y.jpg",
              imageAlt: "Portrait of David Rodríguez"
            },
            {
              id: "5",
              name: "Isabel Sánchez",
              role: "Parent",
              testimonial: "Perfect for a weekend outing. Our kids learned so much about animals while having fun. Great value for money and beautiful facilities.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766137145255-i5mln4iu.jpg",
              imageAlt: "Portrait of Isabel Sánchez"
            },
            {
              id: "6",
              name: "Miguel Torres",
              role: "Local Resident",
              testimonial: "Been coming here since childhood. Zoo Madrid continues to impress with new experiences and genuine commitment to animal welfare.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140581190-ft9jvi9y.jpg",
              imageAlt: "Portrait of Miguel Torres"
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Plan Your Visit"
          description="Get your tickets, check hours, and learn more about special experiences at Zoo Madrid. Book online for the best rates."
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766072264557-nwn1qdme.jpg"
          imageAlt="Happy family visiting the zoo"
          mediaPosition="right"
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true },
            { name: "visitDate", type: "date", placeholder: "Planned Visit Date", required: true },
            { name: "visitors", type: "number", placeholder: "Number of Visitors", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Questions or special requests?",
            rows: 4,
            required: false
          }}
          buttonText="Request Tickets"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Zoo Madrid"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766139811510-n9knt0v0.jpg"
          columns={[
            {
              title: "Visitor Info",
              items: [
                { label: "Hours & Admission", href: "#" },
                { label: "Getting Here", href: "#" },
                { label: "Group Visits", href: "#" },
                { label: "Accessibility", href: "#" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Mission", href: "about" },
                { label: "Conservation", href: "#" },
                { label: "Education", href: "#" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "FAQ", href: "#" },
                { label: "Membership", href: "#" },
                { label: "Donations", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Use", href: "#" },
                { label: "Cookie Policy", href: "#" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Facebook, href: "https://facebook.com/zoomadrid", ariaLabel: "Zoo Madrid Facebook" },
            { icon: Instagram, href: "https://instagram.com/zoomadrid", ariaLabel: "Zoo Madrid Instagram" },
            { icon: Twitter, href: "https://twitter.com/zoomadrid", ariaLabel: "Zoo Madrid Twitter" },
            { icon: Youtube, href: "https://youtube.com/zoomadrid", ariaLabel: "Zoo Madrid YouTube" }
          ]}
          copyrightText="© Zoo Madrid 2025. All rights reserved."
          backgroundColor="yellow"
        />
      </div>
    </ThemeProvider>
  );
}