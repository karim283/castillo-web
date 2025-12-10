import React from "react";
import backg from "../assets/images/Group 8723.png";

export default function DrinksMenu() {
  const colddrink = [
    {
      name: "Iced Americano",
      origin: "CUP | 400 ml",
      price: "60 EG",
      description: "Espresso poured over ice — crisp, bold and refreshing.",
    },
    {
      name: "Iced Latte",
      origin: "CUP | 400 ml",
      price: "65 EG",
      description: "Smooth espresso with cold milk for a creamy, mild taste.",
    },
    {
      name: "Iced Cappuccino",
      origin: "CUP | 350 ml",
      price: "60 EG",
      description:
        "Chilled espresso topped with airy milk foam — light and frothy.",
    },
    {
      name: "Iced Mocha",
      origin: "CUP | 450 ml",
      price: "70 EG",
      description:
        "Espresso blended with chocolate and milk — rich and dessert-like.",
    },
    {
      name: "Frappé",
      origin: "CUP | 350 ml",
      price: "70 EG",
      description:
        "Shaken instant coffee with ice — frothy, chilled and optionally sweet.",
    },
    {
      name: "Cold Brew",
      origin: "CUP | 350 ml",
      price: "90 EG",
      description:
        "Slow-steeped cold coffee — smooth, low-acid and deeply flavorful.",
    },
    {
      name: "Nitro Cold Brew",
      origin: "CUP | 350 ml",
      price: "120 EG",
      description:
        "Cold brew infused with nitrogen — silky texture and creamy head.",
    },
  ];

  const hot = [
    {
      name: "Americano",
      origin: "CUP | 250 ml",
      price: "50 EG",
      description: "Espresso diluted with hot water — simple and bold.",
    },
    {
      name: "Latte",
      origin: "CUP | 300 ml",
      price: "65 EG",
      description: "Espresso with steamed milk — smooth and milky.",
    },
    {
      name: "Cappuccino",
      origin: "CUP | 250 ml",
      price: "60 EG",
      description: "Espresso with a thicker milk foam — balanced and airy.",
    },
    {
      name: "Mocha",
      origin: "CUP | 300 ml",
      price: "70 EG",
      description: "Espresso with chocolate and steamed milk — dessert-like.",
    },
    {
      name: "Caramel Macchiato",
      origin: "CUP | 300 ml",
      price: "80 EG",
      description:
        "Layered milk and espresso with caramel drizzle — sweet and smooth.",
    },
    {
      name: "Tea",
      origin: "CUP | 300 ml",
      price: "30 EG",
      description:
        "Hot brewed tea — aromatic, comforting and served piping hot.",
    },
    {
      name: "Nescafe",
      origin: "CUP | 250 ml",
      price: "40 EG",
      description:
        "Classic instant coffee — robust, comforting and quick to prepare.",
    },
  ];

  const mojito = [
    {
      name: "Classic Mojito",
      origin: "GLASS | 350 ml",
      price: "80 EG",
      description: "White rum, lime, mint and soda — fresh and zesty.",
    },
    {
      name: "Strawberry Mojito",
      origin: "GLASS | 350 ml",
      price: "90 EG",
      description:
        "Fresh strawberries with mint and lime — fruity twist on the classic.",
    },
    {
      name: "Mango Mojito",
      origin: "GLASS | 350 ml",
      price: "95 EG",
      description: "Ripe mango puree, mint and lime — tropical and refreshing.",
    },
    {
      name: "Virgin Mojito",
      origin: "GLASS | 350 ml",
      price: "60 EG",
      description:
        "Non-alcoholic mojito with lime, mint and soda — light and crisp.",
    },
    {
      name: "Pineapple Mojito",
      origin: "GLASS | 350 ml",
      price: "95 EG",
      description: "Sweet pineapple with mint and lime — bright and tropical.",
    },
  ];

  const juices = [
    {
      name: "Fresh Orange",
      origin: "GLASS | 300 ml",
      price: "45 EG",
      description: "Squeezed fresh oranges — bright and vitamin-rich.",
    },
    {
      name: "Fresh Mango",
      origin: "GLASS | 300 ml",
      price: "55 EG",
      description: "Ripe mango blended to a smooth, sweet juice.",
    },
    {
      name: "Watermelon",
      origin: "GLASS | 300 ml",
      price: "40 EG",
      description: "Chilled watermelon juice — light and hydrating.",
    },
    {
      name: "Mixed Fruit",
      origin: "GLASS | 300 ml",
      price: "60 EG",
      description: "Seasonal fruits blended together — balanced and fruity.",
    },
    {
      name: "Carrot & Ginger",
      origin: "GLASS | 300 ml",
      price: "50 EG",
      description: "Fresh carrot with a touch of ginger — earthy and zesty.",
    },
  ];

  const milkshake = [
    {
      name: "Chocolate Milkshake",
      origin: "CUP | 400 ml",
      price: "75 EG",
      description:
        "Creamy chocolate shake with vanilla ice cream — rich and smooth.",
    },
    {
      name: "Vanilla Milkshake",
      origin: "CUP | 400 ml",
      price: "70 EG",
      description: "Classic vanilla shake — light, creamy and satisfying.",
    },
    {
      name: "Strawberry Milkshake",
      origin: "CUP | 400 ml",
      price: "80 EG",
      description: "Fresh strawberry puree with ice cream — fruity and creamy.",
    },
    {
      name: "Oreo Milkshake",
      origin: "CUP | 400 ml",
      price: "85 EG",
      description: "Oreo cookies blended with vanilla ice cream — indulgent.",
    },
    {
      name: "Banana Milkshake",
      origin: "CUP | 400 ml",
      price: "75 EG",
      description:
        "Ripe banana blended with milk and ice cream — naturally sweet.",
    },
  ];

  const extra = [
    {
      name: "Extra Espresso Shot",
      origin: "ADD-ON",
      price: "15 EG",
      description: "Single shot of espresso to boost strength.",
    },
    {
      name: "Syrup (Vanilla / Caramel)",
      origin: "ADD-ON",
      price: "10 EG",
      description: "Flavoured syrup to sweeten and aromatize your drink.",
    },
    {
      name: "Whipped Cream",
      origin: "ADD-ON",
      price: "12 EG",
      description: "Creamy whipped topping for coffees and milkshakes.",
    },
    {
      name: "Alternative Milk (Oat / Almond)",
      origin: "ADD-ON",
      price: "20 EG",
      description: "Swap regular milk for a plant-based option.",
    },
    {
      name: "Ice Cream Scoop",
      origin: "ADD-ON",
      price: "25 EG",
      description: "Single scoop to add to affogato or milkshakes.",
    },
  ];

  const smoothies = [
    {
      name: "Strawberry Banana",
      origin: "CUP | 350 ml",
      price: "85 EG",
      description:
        "Strawberries and banana blended with yogurt — creamy and fruity.",
    },
    {
      name: "Mango Passion",
      origin: "CUP | 350 ml",
      price: "90 EG",
      description:
        "Ripe mango and passion fruit with ice — tropical and sweet.",
    },
    {
      name: "Green Detox",
      origin: "CUP | 350 ml",
      price: "80 EG",
      description: "Spinach, apple, banana and ginger — fresh and cleansing.",
    },
    {
      name: "Berry Blast",
      origin: "CUP | 350 ml",
      price: "95 EG",
      description: "Mixed berries with yogurt and honey — antioxidant-rich.",
    },
    {
      name: "Peanut Butter Banana",
      origin: "CUP | 350 ml",
      price: "95 EG",
      description: "Banana, peanut butter and milk — rich and satisfying.",
    },
  ];

  const softDrinks = [
    {
      name: "Freez",
      origin: "CAN | 330 ml",
      price: "40 EG",
      description: "Classic carbonated cola — refreshing and bubbly.",
    },
    {
      name: "Redbull",
      origin: "CAN | 330 ml",
      price: "85 EG",
      description: "Low-calorie cola option with same crisp taste.",
    },
    // {
    //   name: "Sprite",
    //   origin: "CAN | 330 ml",
    //   price: "30 EG",
    //   description: "Lemon-lime soda — light and fizzy.",
    // },
    // {
    //   name: "Fanta",
    //   origin: "CAN | 330 ml",
    //   price: "30 EG",
    //   description: "Orange soda — sweet and citrusy.",
    // },
    {
      name: "Water",
      origin: "BOTTLE | 200 ml",
      price: "8 EG",
      description: "Pure water for a refreshing and hydrating drink.",
    },
  ];

  const renderItem = (item, i) => (
    <li
      key={i}
      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0"
    >
      <div className="min-w-0">
        <p className="font-harmond text-base md:text-lg text-[#C3A46D] truncate">
          {item.name}
        </p>
        <p className="font-inter text-xs md:text-sm text-gray-400">
          {item.origin}
        </p>
        <p className="font-inter text-xs md:text-sm text-gray-400 mt-1 break-words">
          {item.description}
        </p>
      </div>
      <span className="font-harmond text-base md:text-lg mt-2 sm:mt-0">
        {item.price}
      </span>
    </li>
  );

  return (
    <section className="w-full bg-[#0b0b0b] text-white pt-20 md:pt-32 pb-20 md:pb-40 px-4 sm:px-8 md:px-20">
      <div className="max-w-4xl mx-auto text-center px-2">
        <h2 className="font-harmond text-3xl md:text-4xl">
          A Taste of Love at Café Castillo{" "}
        </h2>
        <p className="font-inter text-sm md:text-base text-gray-300 mt-4">
          Pair your perfect meal with an equally delightful experience and
          indulge in a comforting coffee or artisanal tea brewed just for you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto mt-10 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-20 px-2">
        <div>
          <h3 className="font-harmond text-lg md:text-xl tracking-wide mb-6 md:mb-10">
            ICED BEVERAGES
          </h3>
          <ul className="space-y-6 sm:space-y-8">
            {colddrink.map(renderItem)}
          </ul>
        </div>

        <div>
          <h3 className="font-harmond text-lg md:text-xl tracking-wide mb-6 md:mb-10">
            HOT BEVERAGES
          </h3>
          <ul className="space-y-6 sm:space-y-8">{hot.map(renderItem)}</ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-20 px-2">
        <div>
          <h3 className="font-harmond text-lg md:text-xl tracking-wide mb-6 md:mb-10">
            MOJITO
          </h3>
          <ul className="space-y-6 sm:space-y-8">{mojito.map(renderItem)}</ul>
        </div>

        <div>
          <h3 className="font-harmond text-lg md:text-xl tracking-wide mb-6 md:mb-10">
            MILKSHAKES
          </h3>
          <ul className="space-y-6 sm:space-y-8">
            {milkshake.map(renderItem)}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-20 px-2">
        <div>
          <h3 className="font-harmond text-lg md:text-xl tracking-wide mb-6 md:mb-10">
            JUICES
          </h3>
          <ul className="space-y-6 sm:space-y-8">{juices.map(renderItem)}</ul>
        </div>
        <div>
          <h3 className="font-harmond text-lg md:text-xl tracking-wide mb-6 md:mb-10">
            SMOOTHIES
          </h3>
          <ul className="space-y-6 sm:space-y-8">
            {smoothies.map(renderItem)}
          </ul>
        </div>
      </div>

      {/* SMOOTHIES & SOFT DRINKS */}
      <div className="max-w-7xl mx-auto mt-10 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-20 px-2">
        <div>
          <h3 className="font-harmond text-lg md:text-xl tracking-wide mb-6 md:mb-10">
            SOFT DRINKS
          </h3>
          <ul className="space-y-6 sm:space-y-8">
            {softDrinks.map(renderItem)}
          </ul>
        </div>
        <div>
          <h3 className="font-harmond text-lg md:text-xl tracking-wide mb-6 md:mb-10">
            EXTRA
          </h3>
          <ul className="space-y-6 sm:space-y-8">{extra.map(renderItem)}</ul>
        </div>
      </div>
    </section>
  );
}
