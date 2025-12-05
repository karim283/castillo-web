import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 font-serif">
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4 sm:gap-8 lg:gap-20">
        {/* Contact */}
        <div className="text-center">
          <h2 className="text-sm sm:text-lg lg:text-xl font-harmond text-white mb-2 sm:mb-4">
            Contact Us
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            24 Thomas st, El-Amir Gameel
            <br />
            Alexandria, Egypt
          </p>
          <p className="mt-2 sm:mt-4 text-xs sm:text-sm text-gray-300">
            01009481991
          </p>
          {/* <p className="text-xs sm:text-sm text-gray-300">info@caferegina.be</p> */}
        </div>

        {/* Center Logo & Description */}
        <div className="text-center">
          <h1 className="text-lg sm:text-2xl lg:text-3xl mb-2 sm:mb-4 text-[#C3A46D] font-harmond">
            CAFE CASTILLO
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed px-1 sm:px-2">
            Preserving a Century of Flavor
          </p>
          <hr className="border-[#C3A46D] my-3 sm:my-6 w-16 sm:w-28 mx-auto" />

          {/* Social icons */}
          <div className="flex justify-center gap-3 sm:gap-4 mt-3 sm:mt-6">
            <a
              href="https://www.facebook.com/share/1FL5g1hSCb/"
              className="text-gray-300 hover:text-[#C3A46D] transition text-sm sm:text-lg lg:text-xl"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/castillo_espresso_coffe?igsh=MWk0emhoOTRncHdibg=="
              className="text-gray-300 hover:text-[#C3A46D] transition text-sm sm:text-lg lg:text-xl"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://wa.me/message/VD5BFN3TYXEOG1"
              className="text-gray-300 hover:text-[#C3A46D] transition text-sm sm:text-lg lg:text-xl"
              aria-label="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="text-center">
          <h2 className="text-sm sm:text-lg lg:text-xl font-harmond mb-2 sm:mb-4">
            Opening Hours
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Monday–Friday:
            <br />
            08:00 am – 12:00 am
          </p>
          <p className="mt-2 sm:mt-4 text-xs sm:text-sm text-gray-300 leading-relaxed">
            Saturday–Sunday:
            <br />
            07:00 am – 11:00 pm
          </p>
        </div>
      </div>

      <p className="text-center text-gray-500 text-xs mt-6 sm:mt-10 px-4">
        © 2025 Cafe Castillo. All Rights Reserved.
      </p>
    </footer>
  );
}
