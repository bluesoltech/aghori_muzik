import React from "react";
import image1 from "../assets/images/shop/water.jpg";
import image2 from "../assets/images/shop/coffee.jpg";
import image3 from "../assets/images/shop/dabeli.jpg";
import image4 from "../assets/images/shop/bakery.jpg";
import image5 from "../assets/images/shop/south_indian.jpg";
import image6 from "../assets/images/shop/cold_drinks.jpg";
import image7 from "../assets/images/shop/burger.jpg";
import image8 from "../assets/images/shop/popcorn.jpg";
import image9 from "../assets/images/shop/gola.jpg";
import image10 from "../assets/images/shop/pakodi.jpg";

const products = [
  {
    id: 1,
    image: image1,
    name: "Water Stall",
  },
  { id: 2, image: image2, name: "Tea-Coffee Stall" },
  {
    id: 3,
    image: image3,
    name: "Snacks (Dabeli & Vadalav)",
  },
  { id: 4, image: image4, name: "Bakery" },
  { id: 5, image: image5, name: "South Indian Food" },
  {
    id: 6,
    image: image6,
    name: "Colddrinks & Energy Drink",
  },
  {
    id: 7,
    image: image7,
    name: "Burger & Pizza Stall",
  },
  {
    id: 8,
    image: image8,
    name: "Popcorn Stall",
  },
  {
    id: 9,
    image: image9,
    name: "Gola Stall",
  },
  {
    id: 10,
    image: image10,
    name: "Golgappa & Chart Corner",
  },
];

const Gallery = () => {
  return (
    <>
      <div className="p-4 grid lg:grid-rows-2 lg:grid-cols-5 sm:grid-rows-5 sm:grid-cols-2  m-auto w-full lg:gap-x-4 lg:gap-y-4 xl:gap-x-6 xl:gap-y-6 my-10">
        {products.map((item, index) => (
          <div className="!text-center">
            <img
              className="flex items-center rounded-lg p-4 h-[300px] w-[292px] !m-auto overflow-hidden object-cover"
              key={index}
              src={item.image}
            />
            <div className="flex-auto my-4">
              <p className="block font-semibold text-gray-900 text-[20px]">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
