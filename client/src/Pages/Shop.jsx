import React from "react";
import image1 from "../assets/images/shop/water/water-2.jpg";
import image2 from "../assets/images/shop/coffee.jpg";
import image3 from "../assets/images/shop/dabeli.jpg";
import image4 from "../assets/images/shop/bakery.jpg";
import image5 from "../assets/images/shop/south_indian.jpg";
import image6 from "../assets/images/shop/coldDrink.jpg";
import image7 from "../assets/images/shop/burger.jpg";
import image8 from "../assets/images/shop/popcorn.jpg";
import image9 from "../assets/images/shop/gola.jpg";
import image10 from "../assets/images/shop/pakodi.jpg";

const products = [
  {
    id: 1,
    image: image1,
    text: "Water Stall",
  },
  { id: 2, image: image2, text: "Tea-Coffee Stall" },
  {
    id: 3,
    image: image3,
    text: "Snacks (Dabeli & Vadapav)",
  },
  { id: 4, image: image4, text: "Bakery" },
  { id: 5, image: image5, text: "South Indian Food" },
  {
    id: 6,
    image: image6,
    text: "Cold Drinks & Energy Drink",
  },
  {
    id: 7,
    image: image7,
    text: "Burger & Pizza Stall",
  },
  {
    id: 8,
    image: image8,
    text: "Popcorn Stall",
  },
  {
    id: 9,
    image: image9,
    text: "Gola Stall",
  },
  {
    id: 10,
    image: image10,
    text: "Golgappa & Chart Corner",
  },
];

const Shop = () => {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)",
        }}
      >
        <div className="p-4 grid lg:grid-rows-2 lg:grid-cols-5 sm:grid-rows-5 sm:grid-cols-2 md:grid-rows-4 md:grid-cols-3 m-auto lg:w-5/6 lg:gap-x-4 lg:gap-y-4 xl:gap-x-4 xl:gap-y-4 sm:gap-x-2 sm:gap-y-2 gap-y-4 w-full !md:gap-x-2">
          {products.map((item, index) => (
            <>
              <div className="flex justify-around items-center flex-col bg-transparent reltive">
                {/* <img
                className="rounded-lg h-[300px] w-[292px] overflow-hidden object-cover border-2 border-indigo-900"
                key={index}
                src={item.image}
              />
              <div className="flex-auto my-4">
                <p className="block font-semibold text-gray-900 text-[20px] absolute top-5">
                  {item.text}
                </p>
              </div> */}

                <div
                  key={index}
                  className="image-container flex justify-center items-end"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <img
                    key={index}
                    src={item.image}
                    // alt={`Gallery item ${index + 1}`}
                    className="h-[300px] w-[292px] object-cover"
                    // style={{ width: "100%", height: "auto" }}
                  />
                  <p
                    className="image-text px-4 py-2 rounded-lg absolute text-[12px] bottom-2 left-2 mr-2 text-black bg-gradient-to-r from-[#FFE07A] to-[#7A5103] font-semibold font-mono"
                    style={{
                      position: "absolute",
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    {" "}
                    {item.text}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
