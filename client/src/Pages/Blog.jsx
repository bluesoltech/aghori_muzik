import React from "react";

const Blog = () => {
  return <div className="flex flex-col items-center justify-center overflow-hidden mx-auto my-4 text-white p-10 h-[400px]">
  <div className="flex flex-col items-center justify-center gap-4 text-center h-[150px] w-[20rem]">
  <img src={comingsoon} alt="" />
  </div>
  <Hero title={title} description={description} />
</div>
};

export default Blog;


