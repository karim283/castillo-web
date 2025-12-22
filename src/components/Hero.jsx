import SliderDots from "./SliderDots";
import bg from "../assets/images/bg.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/3.jpg";

export default function Hero() {
  return (
    <div>
      <section
        className="pt-20 px-4 sm:px-6 md:px-10 w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* add small scoped CSS for the title animation */}
        <style>{`
        .hero-title {
          /* entrance then subtle float */
          animation: fadeUp 700ms cubic-bezier(.2,.9,.2,1) both,
                     floatY 6s ease-in-out 1200ms infinite alternate;
          will-change: transform, opacity;
        }
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(18px) scale(0.995); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes floatY {
          0% { transform: translateY(0); }
          100% { transform: translateY(-8px); }
        }
        /* reduce motion preference */
        @media (prefers-reduced-motion: reduce) {
          .hero-title { animation: none; }
        }
      `}</style>

        {/* TOP LEFT LOGO BLOCK */}
        <div className="mt-10 mb-10 md:mb-0">
          <div>
            <h1 className="text-4xl leading-none font-harmond">
              CAFE <br /> Castillo
            </h1>
            <p className="text-sm opacity-80 mt-2">
              24 Thomas st, <br />
              El-Amir Gameel, Alexandria
            </p>
          </div>
        </div>

        {/* IMAGES ROW - side by side on mobile, wrap on desktop */}
        <div className="flex justify-center gap-2 sm:gap-4 md:gap-8 lg:gap-16 w-full flex-nowrap md:flex-wrap overflow-x-scroll md:overflow-visible items-end md:items-start">
          {/* LEFT DRINK IMAGE - pushed higher */}
          <div className="w-40 sm:w-48 md:w-60 h-48 sm:h-64 md:h-80 rounded-t-[150px] sm:rounded-t-[200px] md:rounded-t-[230px] overflow-hidden bg-neutral-800 self-start md:self-end flex-shrink-0 md:flex-shrink -translate-y-6 sm:-translate-y-8 md:-translate-y-12 lg:-translate-y-16">
            <img
              src={img1}
              alt="coffee drink"
              className="w-full h-full object-cover"
            />
          </div>

          {/* CENTER IMAGE */}
          <div className="w-40 sm:w-80 md:w-96 lg:w-[600px] h-48 sm:h-96 md:h-[500px] lg:h-[680px] rounded-t-[150px] sm:rounded-t-[260px] md:rounded-t-[280px] lg:rounded-t-[300px] overflow-hidden bg-neutral-700 flex-shrink-0 md:flex-shrink">
            <img
              src="https://www.yaycork.ie/wp-content/uploads/2023/08/soma.jpg"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT IMAGE - pushed lower */}
          <div className="w-40 sm:w-48 md:w-64 lg:w-[280px] h-48 sm:h-64 md:h-96 lg:h-[420px] rounded-t-[150px] sm:rounded-t-[220px] md:rounded-t-[240px] lg:rounded-t-[230px] overflow-hidden bg-neutral-800 self-end md:self-start flex-shrink-0 md:flex-shrink translate-y-6 sm:translate-y-8 md:translate-y-12 lg:translate-y-16">
            <img
              src={img2}
              alt="coffee drink"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* BIG TITLE ABOVE EVERYTHING */}
        <div className="mt-[-150px] sm:mt-[-300px] md:mt-[-350px] lg:mt-[-450px] mb-20 text-center pointer-events-none px-4">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[80px] leading-tight md:leading-[50px] lg:leading-[74px] font-harmond mix-blend-screen hero-title">
            Geniet Van Een <br />
            Gezellige Tijd Bij <br />
            Café Castillo
          </h2>
        </div>

        {/* RIGHT-SIDE BLOCK */}
        <div className="flex justify-center md:justify-end w-full mt-10     pb-10">
          <div className="w-64 px-4 md:ml-20 md:w-48 md:px-0 lg:w-64 ">
            <p className="text-sm leading-relaxed opacity-80 mb-4 font-inter ">
              Café Regina is not only the oldest, but also the nicest café in
              Alexandria and the surrounding area.
            </p>

            <Link
              to="/drinks"
              className="border border-white rounded-full px-6 py-2 text-sm tracking-wider hover:bg-white hover:text-black transition"
            >
              Menu →
            </Link>
          </div>
        </div>

        {/* SLIDER DOTS */}
        <div className="mt-10 md:mt-32 lg:mt-20 pb-10">
          <SliderDots />
        </div>
      </section>
      <Footer />
    </div>
  );
}
