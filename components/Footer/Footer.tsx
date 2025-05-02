import { useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";
import Image from "next/image";
import Link from "next/link";

export default function Footer({ data, query, variables }) {
  const { data: footerData } = useTina({
    query,
    variables,
    data,
  });

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8 font-poppins">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Left Section */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Fenor Logo" width={54} height={54} />
              <span className="text-2xl font-bold">FENOR</span>
            </div>
            <p className="text-xs mt-2 max-w-xs">
              {footerData.footer.description}
            </p>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-[19px] font-bold mb-2">QUICK LINKS</h3>
              <ul className="space-y-1">
                {footerData.footer.quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.url} className="text-[19px]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Us */}
            <div>
              <h3 className="text-[19px] font-bold mb-2">About Us</h3>
              <ul className="space-y-1">
                {footerData.footer.aboutUs.map((link, index) => (
                  <li key={index}>
                    <Link href={link.url} className="text-[19px]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Links */}
            <div>
              <h3 className="text-[19px] font-bold mb-2">Important Links</h3>
              <ul className="space-y-1">
                {footerData.footer.importantLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.url} className="text-[19px]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            {footerData.footer.socials.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={`/icons/${social.name}.svg`}
                  alt={social.name}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright and Agency */}
        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-[16px] font-medium">
          <p>Fenor © {currentYear}, ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-2">
            <span>Made by AGENCY10169</span>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/linkedin.svg" alt="LinkedIn" width={16} height={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export async function getStaticProps() {
  const { data, query, variables } = await client.queries.footer({
    relativePath: "footer.json",
  });

  return {
    props: {
      data,
      query,
      variables,
    },
  };
}