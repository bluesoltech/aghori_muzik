import React from "react";
import comingsoon from "../assets/red-comingsoon.webp";

const Ticket = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden mx-auto my-4 text-white h-screen">
      <iframe
        src="https://allevents.in/manage/tickets/book.php?event_id=80007982388315&auto_fill=1&platform=iframe&hide_details=1&aff=u0"
        className="w-full h-full "
      ></iframe>
    </div>
  );
};

export default Ticket;
