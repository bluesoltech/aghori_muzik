import React from "react";
import image1 from "../assets/images/gallery/01.jpg";
import image2 from "../assets/images/gallery/02.jpg";
import image3 from "../assets/images/gallery/03.jpg";
import image4 from "../assets/images/gallery/04.jpg";
import image5 from "../assets/images/gallery/05.jpg";
import image6 from "../assets/images/gallery/06.jpg";
import image7 from "../assets/images/gallery/07.jpg";
import image8 from "../assets/images/gallery/08.jpg";

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
];

const Gallery = () => {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)",
        }}
      >
        <div className="p-4 grid lg:grid-rows-2 lg:grid-cols-4 sm:grid-rows-5 sm:grid-cols-2 md:grid-rows-4 md:grid-cols-3 m-auto lg:w-5/6 lg:gap-x-2 lg:gap-y-2 xl:gap-x-4 xl:gap-y-4 sm:gap-x-2 sm:gap-y-2 gap-y-4 w-full md:gap-x-2 md:gap-y-2">
          {products.map((item, index) => (
            <>
              <div className="flex justify-around items-center flex-col bg-transparent reltive">
                <img
                  className="rounded-lg h-[300px] w-[292px] overflow-hidden object-cover border-2 border-indigo-900"
                  key={index}
                  src={item.image}
                />
                <div className="flex-auto my-4">
                  <p className="block font-semibold text-gray-900 text-[20px] absolute top-5">
                    {item.text}
                  </p>
                </div>
                <button
                  className="image-text px-4 py-2 rounded-lg absolute text-[12px] bottom-2 left-2 mr-2 text-black bg-gradient-to-r from-[#FFE07A] to-[#7A5103] font-semibold font-mono"
                  style={{
                    position: "absolute",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  {" "}
                  {item.text}
                </button>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
