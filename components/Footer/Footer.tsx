import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

// Mapping of social platform names to FontAwesome icons
const socialIcons = {
  linkedin: faLinkedin,
  youtube: faYoutube,
  // Add more mappings as needed
};

// Define the shape of the footer data (make fields optional)
interface FooterData {
  description?: string;
  quickLinks?: { label: string; url: string }[];
  aboutUs?: { label: string; url: string }[];
  importantLinks?: { label: string; url: string }[];
  socials?: { name: string; url: string }[];
  copyrightText?: string;
  madeByPrefix?: string;
  agency?: { name: string; url: string };
}
console.log('Footer data:', data.footer);
const Footer: React.FC<{ footerData?: FooterData }> = ({ footerData }) => {
  // Fallback if footerData is undefined
  if (!footerData) {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="mt-8 border-t border-gray-700 pt-4 flex justify-between items-center">
            <p>Fenor © 2025. All rights reserved.</p>
            <p>Made by Agency10169</p> {/* Default agency name */}
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Main content area */}
        <div className="flex flex-wrap justify-between">
          {/* Left side: Logo, Brand, Description, Socials */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="FENOR Logo" className="h-8 mr-2" />
              <h2 className="text-xl font-bold">FENOR</h2>
            </div>
            <p className="mb-4 text-start">{footerData.description || ''}</p>
            <div className="flex space-x-4">
              {(footerData.socials || []).map((social, index) => {
                const icon = socialIcons[social.name.toLowerCase()];
                if (icon) {
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-300"
                    >
                      <FontAwesomeIcon icon={icon} className="h-6 w-6" />
                    </a>
                  );
                }
                return null;
              })}
            </div>
          </div>
          {/* Right side: Link Columns */}
          <div className="w-full md:w-2/3 flex flex-wrap">
            {/* Quick Links */}
            <div className="w-1/3 mb-6">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul>
                {(footerData.quickLinks || []).map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* About Us */}
            <div className="w-1/3 mb-6">
              <h3 className="text-lg font-semibold mb-2">About Us</h3>
              <ul>
                {(footerData.aboutUs || []).map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Important Links */}
            <div className="w-1/3 mb-6">
              <h3 className="text-lg font-semibold mb-2">Important Links</h3>
              <ul>
                {(footerData.importantLinks || []).map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom Section: Copyright and Agency */}
        <div className="mt-8 border-t border-gray-700 pt-4 flex justify-between items-center">
          <p>{footerData.copyrightText || 'Fenor © 2025. All rights reserved.'}</p>
          <p>
            {footerData.madeByPrefix || 'Made by'}{' '}
            {footerData.agency ? (
              <a href={footerData.agency.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {footerData.agency.name} <FontAwesomeIcon icon={faLinkedin} className="h-4 w-4 inline" />
              </a>
            ) : 'Agency10169'} {/* Default agency name */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;