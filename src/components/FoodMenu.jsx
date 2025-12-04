import React from "react";
import backg from "../assets/images/Group 8723.png";

export default function FoodMenu() {
  const pizza = [
    {
      name: "Margherita",
      origin: "Small | 10 inch",
      price: "120 EG",
      description:
        "Fresh mozzarella, basil, and tomato sauce — classic and simple.",
    },
    {
      name: "Pepperoni",
      origin: "Medium | 12 inch",
      price: "150 EG",
      description:
        "Crispy pepperoni slices with melted cheese — savory and satisfying.",
    },
    {
      name: "Four Cheese",
      origin: "Large | 14 inch",
      price: "180 EG",
      description:
        "Blend of mozzarella, cheddar, feta, and parmesan — rich and creamy.",
    },
    {
      name: "Veggie Supreme",
      origin: "Medium | 12 inch",
      price: "140 EG",
      description:
        "Bell peppers, mushrooms, olives, onions — fresh and colorful.",
    },
    {
      name: "Meat Lovers",
      origin: "Large | 14 inch",
      price: "200 EG",
      description:
        "Pepperoni, sausage, ham, and bacon — hearty and protein-packed.",
    },
    {
      name: "BBQ Chicken",
      origin: "Medium | 12 inch",
      price: "160 EG",
      description:
        "Grilled chicken, BBQ sauce, red onions — smoky and delicious.",
    },
    {
      name: "Hawaiian",
      origin: "Small | 10 inch",
      price: "130 EG",
      description:
        "Ham and pineapple with melted cheese — sweet and savory blend.",
    },
  ];

  const pasta = [
    {
      name: "Spaghetti Carbonara",
      origin: "Regular | 400g",
      price: "95 EG",
      description:
        "Creamy egg sauce with bacon and parmesan — classic Italian.",
    },
    {
      name: "Fettuccine Alfredo",
      origin: "Regular | 400g",
      price: "100 EG",
      description:
        "Rich cream sauce with garlic and parmesan — smooth and indulgent.",
    },
    {
      name: "Penne Arrabbiata",
      origin: "Regular | 400g",
      price: "85 EG",
      description: "Spicy tomato sauce with garlic — bold and fiery.",
    },
    {
      name: "Lasagna Bolognese",
      origin: "Large | 500g",
      price: "120 EG",
      description:
        "Layered pasta with meat sauce and cheese — hearty and filling.",
    },
    {
      name: "Ravioli Spinach",
      origin: "Regular | 350g",
      price: "110 EG",
      description:
        "Spinach-filled ravioli in butter sage sauce — light and flavorful.",
    },
    {
      name: "Linguine Seafood",
      origin: "Regular | 400g",
      price: "140 EG",
      description:
        "Fresh shrimp and clams with white wine sauce — elegant and fresh.",
    },
    {
      name: "Mac and Cheese",
      origin: "Regular | 350g",
      price: "75 EG",
      description:
        "Creamy cheese sauce coating tender pasta — comfort food classic.",
    },
  ];

  const sandwiches = [
    {
      name: "Club Sandwich",
      origin: "Regular | Wheat Bread",
      price: "65 EG",
      description:
        "Turkey, bacon, lettuce, tomato — triple-layered and filling.",
    },
    {
      name: "Grilled Chicken",
      origin: "Regular | White Bread",
      price: "55 EG",
      description: "Marinated chicken breast with herbs — juicy and tender.",
    },
    {
      name: "Tuna Melt",
      origin: "Regular | Rye Bread",
      price: "60 EG",
      description: "Tuna salad with melted cheddar — flaky and rich.",
    },
    {
      name: "Beef Burger",
      origin: "Large | Brioche Bun",
      price: "75 EG",
      description: "Juicy beef patty with fresh toppings — classic burger.",
    },
    {
      name: "Veggie Delight",
      origin: "Regular | Whole Wheat",
      price: "50 EG",
      description:
        "Hummus, avocado, sprouts, and fresh veggies — healthy and tasty.",
    },
    {
      name: "Philly Cheesesteak",
      origin: "Large | Italian Bread",
      price: "80 EG",
      description:
        "Sliced steak with peppers, onions, and melted cheese — savory.",
    },
    {
      name: "Falafel Wrap",
      origin: "Regular | Pita Bread",
      price: "45 EG",
      description:
        "Crispy falafel with tahini sauce and veggies — Middle Eastern.",
    },
  ];

  const desserts = [
    {
      name: "Tiramisu",
      origin: "Slice | 150g",
      price: "50 EG",
      description: "Layered mascarpone and coffee — rich and sophisticated.",
    },
    {
      name: "Chocolate Cake",
      origin: "Slice | 120g",
      price: "45 EG",
      description: "Moist chocolate layers with ganache — decadent.",
    },
    {
      name: "Cheesecake",
      origin: "Slice | 150g",
      price: "55 EG",
      description: "Creamy filling on graham cracker crust — smooth and tangy.",
    },
    {
      name: "Baklava",
      origin: "3 pieces | 100g",
      price: "40 EG",
      description: "Flaky pastry with nuts and honey syrup — sweet and crispy.",
    },
    {
      name: "Brownie",
      origin: "1 piece | 80g",
      price: "35 EG",
      description: "Fudgy chocolate brownie — dense and satisfying.",
    },
    {
      name: "Fruit Tart",
      origin: "Slice | 140g",
      price: "48 EG",
      description: "Fresh seasonal fruits with custard — light and vibrant.",
    },
    {
      name: "Panna Cotta",
      origin: "Cup | 120g",
      price: "42 EG",
      description: "Silky Italian cream with berry sauce — elegant and smooth.",
    },
  ];

  const MenuItem = ({ item }) => (
    <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
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
      {/* WEEKEND SUGGESTION */}
      <div className="max-w-4xl mx-auto text-center px-2">
        <h2 className="font-harmond text-3xl md:text-4xl">Brew & Bite </h2>
        <p className="font-inter text-sm md:text-base text-gray-300 mt-4">
          During the weekend at Café castillo you can treat yourself to a
          delicious meal prepared with a lot of care and love.
        </p>
      </div>

      {/* PIZZA & PASTA SECTION */}
      <div className="max-w-7xl mx-auto mt-10 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-20 px-2">
        {/* PIZZA */}
        <div>
          <h3 className="font-harmond text-lg md:text-xl tracking-wide mb-6 md:mb-10">
            PIZZA
          </h3>
          <ul className="space-y-6 sm:space-y-8">
            {pizza.map((item, i) => (
              <MenuItem key={i} item={item} />
            ))}
          </ul>
        </div>

        {/* PASTA */}
        <div>
          <h3 className="font-harmond text-lg md:text-xl tracking-wide mb-6 md:mb-10">
            PASTA
          </h3>
          <ul className="space-y-6 sm:space-y-8">
            {pasta.map((item, i) => (
              <MenuItem key={i} item={item} />
            ))}
          </ul>
        </div>
      </div>

      {/* SANDWICHES & DESSERTS SECTION */}
      <div className="max-w-7xl mx-auto mt-10 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-20 px-2">
        {/* SANDWICHES */}
        <div>
          <h3 className="font-harmond text-lg md:text-xl tracking-wide mb-6 md:mb-10">
            SANDWICHES
          </h3>
          <ul className="space-y-6 sm:space-y-8">
            {sandwiches.map((item, i) => (
              <MenuItem key={i} item={item} />
            ))}
          </ul>
        </div>

        {/* DESSERTS */}
        <div>
          <h3 className="font-harmond text-lg md:text-xl tracking-wide mb-6 md:mb-10">
            DESSERTS
          </h3>
          <ul className="space-y-6 sm:space-y-8">
            {desserts.map((item, i) => (
              <MenuItem key={i} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
