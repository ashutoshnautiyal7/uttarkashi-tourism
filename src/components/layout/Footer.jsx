import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#1D3827] text-white">
        {/* Main Footer Section */}
        <section className="py-12 w-full max-w-[1440px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* FULFIL DREAMS Column */}
            <div className="text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-wider">
                Fulfil Dreams
              </h2>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                At The Searching Souls, we intend to encourage people to take
                time from their busy lives and join us on a journey of
                self-exploration in the Himalayas.
              </p>
            </div>

           {/* CONTACT US Column */}
<div className="text-center md:text-left">
  <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-wider">
    Contact Us
  </h2>
  <div className="text-gray-200 text-sm md:text-base">
    <p className="font-semibold">Address</p>
    <p className="mb-3">
    PMGSY colony joshiyara uttarkashi 249193
    </p>
    <p className="mb-3">
      Daily Business Hours:{" "}
      <span className="text-[#e1ed00] font-semibold">9 AM to 9 PM</span>
    </p>
    <p className="mb-2">
      Call / WhatsApp:{" "}
      <a
        href="tel:+916396476118"
        className="text-[#e1ed00] hover:underline"
      >
        +91-6396476118
      </a>{" "}
      (<a
        href="https://wa.me/916396476118"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#e1ed00] hover:underline"
      >
        WhatsApp
      </a>)
    </p>
    <p>
      Email:{" "}
      <a
        href="mailto:aashishnegi979@gmail.com"
        className="text-[#e1ed00] hover:underline"
      >
        aashishnegi979@gmail.com
      </a>
    </p>
  </div>
</div>


            {/* IN A NUTSHELL Column */}
            <div className="text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-wider">
                In a Nutshell
              </h2>
              <p className="text-gray-200 text-sm md:text-base mb-6 leading-relaxed">
                Certified by StartUpIndia, MSME, and Uttarakhand Tourism, we are
                a 5 Star Rated Company with a 95% Customer Satisfaction Score.
                We deal in Trekking in the Himalayas, Customized group tours.
              </p>

              {/* Social Icons */}
              <div className="flex justify-center md:justify-start space-x-4">

                <a
                  href="https://www.instagram.com/untamed.routes?igsh=cGRwY3hud2QzY3Bn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2a4b38]/80 h-10 w-10 rounded-full flex items-center justify-center hover:bg-[#e1ed00] hover:text-[#1D3827] transition-colors duration-300 backdrop-blur-sm"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>
                
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Copyright and Links Section */}
      <footer className="bg-[#153022] text-white py-6 w-full mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-200 text-sm md:text-base">
              Untamed Routes © {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-end">
            <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-[#e1ed00] text-sm md:text-base transition-colors flex items-center"
                >
                  <svg
                    className="h-4 w-4 mr-1 text-[#e1ed00]"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
                  </svg>
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-[#e1ed00] text-sm md:text-base transition-colors flex items-center"
                >
                  <svg
                    className="h-4 w-4 mr-1 text-[#e1ed00]"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
                  </svg>
                  Terms & Condition
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-[#e1ed00] text-sm md:text-base transition-colors flex items-center"
                >
                  <svg
                    className="h-4 w-4 mr-1 text-[#e1ed00]"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
                  </svg>
                  Cancellation Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-[#e1ed00] text-sm md:text-base transition-colors flex items-center"
                >
                  <svg
                    className="h-4 w-4 mr-1 text-[#e1ed00]"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
                  </svg>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
