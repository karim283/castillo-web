// import React from "react";
// import backg from "../assets/images/Group 8723.png";
// export default function CoffeeMenu() {
//   const beans = [
//     {
//       name: "brazilian coffee",
//       origin: "CUP | 400 ml",
//       price: "60 EG",
//       description: "Espresso poured over ice — crisp, bold and refreshing.",
//     },
//     {
//       name: "Iced Latte",
//       origin: "CUP | 400 ml",
//       price: "65 EG",
//       description: "Smooth espresso with cold milk for a creamy, mild taste.",
//     },
//     {
//       name: "Iced Cappuccino",
//       origin: "CUP | 350 ml",
//       price: "60 EG",
//       description:
//         "Chilled espresso topped with airy milk foam — light and frothy.",
//     },
//     {
//       name: "Iced Mocha",
//       origin: "CUP | 450 ml",
//       price: "70 EG",
//       description:
//         "Espresso blended with chocolate and milk — rich and dessert-like.",
//     },
//     {
//       name: "Iced Caramel Macchiato",
//       origin: "CUP | 450 ml",
//       price: "80 EG",
//       description:
//         "Layered espresso, milk and caramel drizzle — sweet and decadent.",
//     },
//     {
//       name: "Cold Brew",
//       origin: "CUP | 350 ml",
//       price: "50 EG",
//       description:
//         "Slow-steeped cold coffee — smooth, low-acid and deeply flavorful.",
//     },
//     {
//       name: "Frappé ",
//       origin: "CUP | 350 ml",
//       price: "70 EG",
//       description:
//         "Shaken iced instant coffee, frothy and optionally sweetened.",
//     },
//   ];
//   const hot = [
//     {
//       name: "Americano",
//       origin: "CUP | 400 ml",
//       price: "60 EG",
//       description: "Espresso poured over ice — crisp, bold and refreshing.",
//     },
//     {
//       name: "Latte",
//       origin: "CUP | 400 ml",
//       price: "65 EG",
//       description: "Smooth espresso with cold milk for a creamy, mild taste.",
//     },
//     {
//       name: "Cappuccino",
//       origin: "CUP | 350 ml",
//       price: "60 EG",
//       description:
//         "Chilled espresso topped with airy milk foam — light and frothy.",
//     },
//     {
//       name: " Mocha",
//       origin: "CUP | 450 ml",
//       price: "70 EG",
//       description:
//         "Espresso blended with chocolate and milk — rich and dessert-like.",
//     },
//     {
//       name: "Caramel Macchiato",
//       origin: "CUP | 450 ml",
//       price: "80 EG",
//       description:
//         "Layered espresso, milk and caramel drizzle — sweet and decadent.",
//     },
//     {
//       name: "Tea",
//       origin: "CUP | 350 ml",
//       price: "30 EG",
//       description: "Hot brewed tea — aromatic, soothing and served piping hot.",
//     },
//     {
//       name: "Nescafe",
//       origin: "CUP | 350 ml",
//       price: "40 EG",
//       description:
//         "Classic instant coffee — robust, comforting and quick to prepare.",
//     },
//   ];
//   // ...existing code...
//   return (
//     <section className="w-full bg-[#0b0b0b] text-white pt-20 md:pt-32 pb-20 md:pb-40 px-4 sm:px-8 md:px-20">
//       {/* WEEKEND SUGGESTION */}
//       <div className="max-w-4xl mx-auto text-center px-2">
//         <h2 className="font-harmond text-3xl md:text-4xl">
//           Weekend Suggestion
//         </h2>
//         <p className="font-inter text-sm md:text-base text-gray-300 mt-4">
//           During the weekend at Café Regina you can treat yourself to a
//           delicious hot meal prepared with a lot of care and love.
//         </p>
//       </div>

//       {/* MENU SECTION */}
//       <div className="max-w-7xl mx-auto mt-10 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-20 px-2">
//         {/* LEFT COLUMN – ICED BEVERAGES */}
//         <div>
//           <h3 className="font-harmond text-lg md:text-xl tracking-wide mb-6 md:mb-10">
//             COFFEE BEANS
//           </h3>

//           <ul className="space-y-6 sm:space-y-8">
//             {beans.map((drink, i) => (
//               <li
//                 key={i}
//                 className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0"
//               >
//                 <div className="min-w-0">
//                   <p className="font-harmond text-base md:text-lg text-[#C3A46D] truncate">
//                     {drink.name}
//                   </p>
//                   <p className="font-inter text-xs md:text-sm text-gray-400">
//                     {drink.origin}
//                   </p>
//                   <p className="font-inter text-xs md:text-sm text-gray-400 mt-1 break-words">
//                     {drink.description}
//                   </p>
//                 </div>
//                 <span className="font-harmond text-base md:text-lg mt-2 sm:mt-0">
//                   {drink.price}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* RIGHT COLUMN – HOT BEVERAGES */}
//         <div>
//           <h3 className="font-harmond text-lg md:text-xl tracking-wide mb-6 md:mb-10">
//             CASTILLO MIX
//           </h3>

//           <ul className="space-y-6 sm:space-y-8">
//             {hot.map((drink, i) => (
//               <li
//                 key={i}
//                 className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0"
//               >
//                 <div className="min-w-0">
//                   <p className="font-harmond text-base md:text-lg text-[#C3A46D] truncate">
//                     {drink.name}
//                   </p>
//                   <p className="font-inter text-xs md:text-sm text-gray-400">
//                     {drink.origin}
//                   </p>
//                   <p className="font-inter text-xs md:text-sm text-gray-400 mt-1 break-words">
//                     {drink.description}
//                   </p>
//                 </div>
//                 <span className="font-harmond text-base md:text-lg mt-2 sm:mt-0">
//                   {drink.price}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
//   // ...existing code...
// }
// ...existing code...
import React from "react";
import backg from "../assets/images/Group 8723.png";

export default function CoffeeMenu() {
  const beans = [
    {
      name: "Brazil Santos",
      origin: "BAG | 250 g",
      price: "120 EG",
      description:
        "Smooth, nutty body with mild acidity — great all-day coffee.",
    },
    {
      name: "Colombian Supremo",
      origin: "BAG | 250 g",
      price: "140 EG",
      description: "Balanced citrus notes and caramel sweetness, medium roast.",
    },
    {
      name: "Ethiopian Yirgacheffe",
      origin: "BAG | 250 g",
      price: "150 EG",
      description:
        "Floral aroma with bright lemon and tea-like finish — single origin.",
    },
    {
      name: "Kenyan AA",
      origin: "BAG | 250 g",
      price: "155 EG",
      description:
        "Vibrant acidity with blackberry and winey notes — bold and fruity.",
    },
    {
      name: "Sumatra Mandheling",
      origin: "BAG | 250 g",
      price: "145 EG",
      description:
        "Heavy body, earthy & chocolate notes — low acidity, rich finish.",
    },
    {
      name: "House Blend (medium)",
      origin: "BAG | 250 g",
      price: "130 EG",
      description:
        "Balanced blend for filter and espresso — smooth and versatile.",
    },
  ];

  const specialMixes = [
    {
      name: "Castillo Espresso Blend",
      origin: "BAG | 250 g",
      price: "140 EG",
      description:
        "Dark-roast espresso blend — concentrated crema and chocolate notes.",
    },
    {
      name: "Cold Brew Blend",
      origin: "BAG | 250 g",
      price: "135 EG",
      description:
        "Roast profile optimized for cold extraction — sweet, low-acid cup.",
    },
    {
      name: "Filter Single Origin",
      origin: "BAG | 250 g",
      price: "150 EG",
      description:
        "Single-origin roasts selected weekly for pour-over and filter brews.",
    },
    {
      name: "Decaf Blend",
      origin: "BAG | 250 g",
      price: "125 EG",
      description:
        "Swiss water processed decaf — clean, mellow and chocolatey.",
    },
    {
      name: "Seasonal Flavored Mix",
      origin: "BAG | 250 g",
      price: "160 EG",
      description:
        "Lightly infused beans with seasonal notes (vanilla/citrus/spice).",
    },
  ];

  const hot = [
    {
      name: "Americano",
      origin: "CUP | 400 ml",
      price: "60 EG",
      description: "Espresso diluted with hot water — simple and bold.",
    },
    {
      name: "Latte",
      origin: "CUP | 400 ml",
      price: "65 EG",
      description: "Espresso with steamed milk — smooth and milky.",
    },
    {
      name: "Cappuccino",
      origin: "CUP | 350 ml",
      price: "60 EG",
      description: "Espresso with a thicker milk foam — balanced and airy.",
    },
    {
      name: "Mocha",
      origin: "CUP | 450 ml",
      price: "70 EG",
      description: "Espresso with chocolate and steamed milk — dessert-like.",
    },
    {
      name: "Caramel Macchiato",
      origin: "CUP | 450 ml",
      price: "80 EG",
      description:
        "Layered espresso, milk and caramel drizzle — sweet and decadent.",
    },
    {
      name: "Tea",
      origin: "CUP | 350 ml",
      price: "30 EG",
      description: "Hot brewed tea — aromatic, soothing and served piping hot.",
    },
    {
      name: "Nescafe",
      origin: "CUP | 350 ml",
      price: "40 EG",
      description:
        "Classic instant coffee — robust, comforting and quick to prepare.",
    },
  ];

  return (
    <section className="w-full bg-[#0b0b0b] text-white pt-20 md:pt-32 pb-20 md:pb-40 px-4 sm:px-8 md:px-20">
      {/* WEEKEND SUGGESTION */}
      <div className="max-w-4xl mx-auto text-center px-2">
        <h2 className="font-harmond text-3xl md:text-4xl">Love in a Cup</h2>
        <p className="font-inter text-sm md:text-base text-gray-300 mt-4">
          The magic doesn't stop there, as every cup is brewed from ethically
          sourced coffee beans, chosen with passion and roasted for a rich,
          aromatic flavor.
        </p>
      </div>

      {/* COFFEE BEANS & SPECIAL MIXES */}
      <div className="max-w-7xl mx-auto mt-10 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-20 px-2">
        {/* COFFEE BEANS */}
        <div>
          <h3 className="font-harmond text-lg md:text-xl tracking-wide mb-6 md:mb-10">
            COFFEE BEANS
          </h3>

          <ul className="space-y-6 sm:space-y-8">
            {beans.map((b, i) => (
              <li
                key={i}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0"
              >
                <div className="min-w-0">
                  <p className="font-harmond text-base md:text-lg text-[#C3A46D] truncate">
                    {b.name}
                  </p>
                  <p className="font-inter text-xs md:text-sm text-gray-400">
                    {b.origin}
                  </p>
                  <p className="font-inter text-xs md:text-sm text-gray-400 mt-1 break-words">
                    {b.description}
                  </p>
                </div>
                <span className="font-harmond text-base md:text-lg mt-2 sm:mt-0">
                  {b.price}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* SPECIAL MIXES */}
        <div>
          <h3 className="font-harmond text-lg md:text-xl tracking-wide mb-6 md:mb-10">
            CASTILLO MIXES
          </h3>

          <ul className="space-y-6 sm:space-y-8">
            {specialMixes.map((m, i) => (
              <li
                key={i}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0"
              >
                <div className="min-w-0">
                  <p className="font-harmond text-base md:text-lg text-[#C3A46D] truncate">
                    {m.name}
                  </p>
                  <p className="font-inter text-xs md:text-sm text-gray-400">
                    {m.origin}
                  </p>
                  <p className="font-inter text-xs md:text-sm text-gray-400 mt-1 break-words">
                    {m.description}
                  </p>
                </div>
                <span className="font-harmond text-base md:text-lg mt-2 sm:mt-0">
                  {m.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* HOT DRINKS (kept) */}
    </section>
  );
}
// ...existing code...
