import React from "react";
import Testimonialscard from "../../Cards/Testimonialscard";

const Testimonials = () => {
  return (
    <div className="w-full bg-[#fafafa] py-8">
      <div className="w-5/6 mx-auto">
        <div className="text-right">
          <p className="text-[#6ebd55] font-bold">__</p>
          <h4 className="text-lg text-[#002147] font-light">Testimonials</h4>
          <h4 className="text-[#0b0d0f] text-3xl lg:text-5xl font-bold capitalize">
            students speak
          </h4>
          <div className="mt-8 grid lg:grid-cols-3 gap-6">
            <Testimonialscard
              text="“All thanks to ALOP, I could pursue this national diploma course in correspondence with my career! I now have a national diploma degree and an advantage while applying for higher national diploma. I highly recommend ALOP!”"
              student="Olawumi Adeolu | ND 2022"
            />
            <Testimonialscard
              text="I secured a good job with a top company soon after I graduated from ALOP. There is absolutely no other place to attain great deal of excellence besides AllOver Central Polytechnic"
              student="Archie Brown | Diploma 2020"
            />
            <Testimonialscard
              text="“All thanks to ALOP, I could pursue this national diploma course in correspondence with my career! I now have a national diploma degree and an advantage while applying for higher national diploma. I highly recommend ALOP!”"
              student="Rita Adaeze | HND 2023"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
