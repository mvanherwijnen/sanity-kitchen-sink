import { Link } from "gatsby";
import React from "react";

const Footer = ({ siteTitle }) => (
  <footer className="bg-white">
    <div className="container mx-auto  px-8">
      <div className="w-full flex flex-col md:flex-row py-6">
        <div className="flex-1">
          <p className="uppercase text-gray-500 md:mb-6">In de Media</p>
          <ul className="list-reset mb-6">
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a href="https://nu.nl">
                <span className="hover:underline text-gray-800 hover:text-orange-500">
                  nu.nl
                </span>
              </a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://rtlnieuws.nl"
                className="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                rtlnieuws.nl
              </a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://telegraaf.nl"
                className="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                telegraaf.nl
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <p className="uppercase text-gray-500 md:mb-6">Voorwaarden</p>
          <ul className="list-reset mb-6">
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <span className="no-underline hover:underline text-gray-800 hover:text-orange-500">
                Algemene voorwaarden
              </span>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <span className="no-underline hover:underline text-gray-800 hover:text-orange-500">
                Privacybeleid
              </span>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <p className="uppercase text-gray-500 md:mb-6">Social</p>
          <ul className="list-reset mb-6">
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://facebook.com"
                className="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                Facebook
              </a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://twitter.com"
                className="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <p className="uppercase text-gray-500 md:mb-6">Help center</p>
          <ul className="list-reset mb-6">
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <Link
                to="/blog"
                className="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                Blog
              </Link>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <Link
                to="/veelgestelde-vragen"
                className="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                Veelgestelde vragen
              </Link>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <Link
                to="/contact"
                className="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
