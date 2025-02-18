// components/Footer.tsx
import Link from 'next/link';
import { FC } from 'react';

// Define interfaces for our navigation items
interface NavItem {
  label: string;
  href: string;
}

interface FooterSection {
  title?: string;
  items: NavItem[];
}

// Navigation data structure
const footerNavigation: FooterSection[] = [
  {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Features', href: '/features' },
      { label: 'Our Testimonials', href: '/testimonials' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  {
    title: 'About Us',
    items: [
      { label: 'Our Mission', href: '/mission' },
      { label: 'Our Vision', href: '/vision' },
      { label: 'Awards and Recognitions', href: '/awards' },
      { label: 'History', href: '/history' },
      { label: 'Teachers', href: '/teachers' },
    ],
  },
  {
    title: 'Academics',
    items: [
      { label: 'Special Features', href: '/special-features' },
      { label: 'Gallery', href: '/gallery' },
    ],
  },
  {
    title: 'Contact Us',
    items: [
      { label: 'Information', href: '/information' },
      { label: 'Map & Direction', href: '/map' },
    ],
  },
];

const Footer: FC = () => {
  return (
    <footer className="bg-[#1e2756] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* School Information */}
          <div className="lg:col-span-3">
            <h2 className="text-[#ff4d8d] text-xl font-bold mb-4">
              PATH GLOBAL PUBLIC SCHOOL
            </h2>
            <p className="text-sm mb-6">
              We believe in the power of play to foster creativity,
              problem-solving skills, and imagination.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="bg-[#ff4d8d] p-2 rounded">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <a
                  href="mailto:hello@thepathschool.com"
                  className="text-sm hover:text-[#ff4d8d] transition-colors"
                >
                  hello@thepathschool.com
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-[#ff4d8d] p-2 rounded">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <a
                  href="tel:+919876543210"
                  className="text-sm hover:text-[#ff4d8d] transition-colors"
                >
                  +91 09876 54321
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-[#ff4d8d] p-2 rounded">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm">Somewhere in the World</span>
              </div>
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {footerNavigation.map((section, index) => (
              <div key={index}>
                {section.title && (
                  <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
                )}
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        href={item.href}
                        className="text-sm hover:text-[#ff4d8d] transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;