import SliderDots from "./SliderDots";
import bg from "../assets/images/bg.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

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
              src="src\assets\images\1.jpg"
              // src="https://scontent.fcai19-9.fna.fbcdn.net/v/t39.30808-6/476832083_638409735383212_3838694660693275378_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3nzrbcW6qgcQ7kNvwFSYKVc&_nc_oc=Adkm2ebGEKKSAqwLfkShHYCm8zhDeQIcpvz51UgRVJDZbXL1r_OFsumiYjlUU-Ur7cg&_nc_zt=23&_nc_ht=scontent.fcai19-9.fna&_nc_gid=3V3Hs5wvZHLhdt74VNyo1w&oh=00_AflBvpqPzkwsRptT8t4SzdfjrPEVrUJyHsJygPJ6q7ZKlw&oe=6936CB4E"
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
              // src="https://images.unsplash.com/photo-1546171753-97d7676e4602?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              src="https://scontent.fcai19-9.fna.fbcdn.net/v/t39.30808-6/474464265_624767213414131_2155799028519602657_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6roSJ0RojIAQ7kNvwHDwG-D&_nc_oc=AdmxS7KUh6aioU8u3cxT8RIW1OWy8Wy7CEZYd9nga6C9HJkPkYHaaTGaOYUAY4sqYTM&_nc_zt=23&_nc_ht=scontent.fcai19-9.fna&_nc_gid=h4a1vUF3iC5rMQjzSSXeyw&oh=00_AflViZhSKpPhYYkh6P08ODsRoqqobspw2OloImv7uIyX2Q&oe=6936B911"
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
