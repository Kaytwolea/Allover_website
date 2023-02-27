import React from "react";
import Eventscard from "../../Cards/Eventscard";

const Events = () => {
  return (
    <div>
      <div className="w-full py-8 bg-[#cfdad0]">
        <div className="w-5/6 mx-auto mt-8">
          <h4 className="text-center font-bold text-4xl text-[#171717] capitalize">
            upcoming events
          </h4>
          <p className="text-base font-normal text-[#0b0d0f] text-center pt-4">
            Stories about education, technology, people, research, and
            innovation across the Globe
          </p>
          <div className="mt-6 grid lg:grid-cols-4 gap-6">
            <Eventscard bg="eventcard-bg1" />
            <Eventscard bg="eventcard-bg2" />
            <Eventscard bg="eventcard-bg3" />
            <Eventscard bg="eventcard-bg4" />
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <button className="h-12 w-40 bg-[#002147] text-white font-bold text-base uppercase rounded-2xl">
            more events
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;
