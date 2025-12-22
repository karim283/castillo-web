import React from "react";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="bg-black text-white font-serif">
      {/* About Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Image */}
        <div className="w-full">
          <img
            // src="https://scontent.fcai19-9.fna.fbcdn.net/v/t39.30808-6/476832083_638409735383212_3838694660693275378_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3nzrbcW6qgcQ7kNvwFSYKVc&_nc_oc=Adkm2ebGEKKSAqwLfkShHYCm8zhDeQIcpvz51UgRVJDZbXL1r_OFsumiYjlUU-Ur7cg&_nc_zt=23&_nc_ht=scontent.fcai19-9.fna&_nc_gid=j4AuPilTo8NhEbDR20OwaA&oh=00_AfnDV6Ma6-bDsnuv4A1sTW3wwbLP01Zvm6G6hklI3Wq6mA&oe=6938FDCE"
            src="src/assets/images/1.jpg"
            alt="Cafe"
            className="rounded-xl  md:rounded-t-full  w-full h-64 sm:h-80 md:h-[65vh] lg:h-full lg:object-fill object-cover shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="pt-4 md:pt-0">
          <p className="text-xs sm:text-sm  tracking-widest text-[#C3A46D]">
            16 APR 2021
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 mb-4 font-harmond leading-tight">
            The Heart of Alexandria's Coffee Culture
          </h1>

          <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
            <p>
              Founded in the early 1900s in the heart of Alexandria, Egypt,
              Castillo Coffee began as a small family-run shop committed to
              bringing the finest coffee beans to the local community. Over the
              decades, Castillo became one of Alexandria’s earliest and most
              trusted coffee destinations, known for its dedication to quality,
              craftsmanship, and authenticity.
            </p>

            <p>
              Our philosophy has always been built on three pillars: Quality,
              Consistency, and Craft. We carefully source premium coffee beans
              from the world’s best growers, roast them with precision, and
              deliver unmatched freshness in every batch.
            </p>

            <p>
              Whether you're a long-time visitor or discovering Castillo for the
              first time, we promise one thing: Your coffee will always be
              exceptional. From our classic blends to our specialty roasts,
              every product is made with passion, expertise, and a century of
              experience.
            </p>

            <p>
              Even with more than 100 years behind us, our story is still
              unfolding. Castillo is expanding, innovating, and reaching new
              generations of coffee lovers—while staying true to the values that
              built our reputation.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
