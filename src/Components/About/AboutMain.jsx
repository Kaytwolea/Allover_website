import React from "react";
import "./About.css";

const AboutMain = () => {
  return (
    <div className="lg:w-5/6 bg-white mx-auto lg:-mt-20 py-10">
      <div className="w-5/6 mx-auto">
        <h1 className="lg:text-5xl text-2xl font-bold text-[#0b0d0f] text-center capitalize">
          about all-over central polytechnic
        </h1>
        <p className="text-base font-normal text-center text-[#254a2a] pt-8">
          <span className="text-[#254A2A]">AllOver Central Polytechnic</span> is
          a place of discovery, creativity and innovation located in the Ogun
          State Area on the south-western of Nigeria. .We take pride in our long
          history of academic excellence, and we are constantly looking ahead to
          shape the future of higher education
        </p>
      </div>
      <div className="w-11/12 mx-auto mt-8 py-8 lg:text-right text-left">
        <h2 className="text-[#0B0D0F] text-2xl font-bold">
          The colleges and halls
        </h2>
        <p className="text-base font-normal text-[#1B1B1B]  pt-8">
          The 36 colleges and three societies are a core element of the
          University, to which they are related via a federal system
        </p>
        <p className="text-base font-normal text-[#1B1B1B]  pt-4">
          Each college is independent and self-governing, having a charter
          approved by the Privy Council, under which it is governed by a Head of
          House, elected and appointed by the governing body directly. The
          governing body comprises a number of Fellows, most of whom also hold
          University posts.
        </p>
        <p className="text-base font-normal text-[#1B1B1B] pt-4">
          There are also five permanent private halls, which were founded by
          different Christian denominations, and still retain their religious
          character today.
        </p>
        <p className="text-base font-normal text-[#1B1B1B]  pt-4">
          Undergraduates are admitted to 32 of the colleges and permanent
          private halls. All colleges accept applications from mature students,
          while Harris Manchester College is solely for mature students.
        </p>
        <p className="text-base font-normal text-[#1B1B1B]  pt-4">
          Campion Hall and Green Templeton, Kellogg, Linacre, Nuffield, Reuben,
          St Antony’s, St Cross and Wolfson Colleges admit only postgraduate
          students. All Souls is unique among Oxford colleges because it has no
          student members; all are Fellows, except the Warden.
        </p>
        <p className="text-base font-normal text-[#1B1B1B] pt-4">
          University, Balliol, and Merton Colleges are the oldest and were
          established by the 13th century..
        </p>
        <div className="flex flex-col lg:flex-row gap-16 w-full mt-8">
          <div className="h-64 lg:w-80 about-container relative">
            <div className="h-6 bg-[#002147] absolute bottom-0 w-full">
              <p className="text-[13px] font-normal text-white text-center">
                Students walking at the front of Morris Hall
              </p>
            </div>
          </div>
          <div className="lg:h-64 lg:w-[65%]">
            <p className="text-base font-normal text-right text-[#1b1b1b]">
              Lorem ipsum dolor sit amet consectetur. Lectus arcu tellus id
              phasellus eget euismod. Potenti eros sagittis senectus commodo.
              Nibh aliquam urna non erat. Id sed ornare at vitae malesuada
              viverra diam. Sem nulla purus mattis sed dolor varius faucibus.
              Vestibulum sit eu aliquet malesuada pellentesque. Turpis a eu
              sapien cras. Cursus lobortis amet sit etiam amet placerat. Ipsum
              varius id id nulla{" "}
            </p>
            <p className="text-base font-normal text-right text-[#1b1b1b] pt-4">
              Lorem ipsum dolor sit amet consectetur. Lectus arcu tellus id
              phasellus eget euismod. Potenti eros sagittis senectus commodo.
              Nibh aliquam urna non erat. Id sed ornare at vitae malesuada
              viverra diam. Sem nulla purus mattis sed dolor varius faucibus.
              Vestibulum sit eu aliquet malesuada pellentesque. Turpis a eu
              sapien cras. Cursus lobortis amet sit etiam amet placerat. Ipsum
              varius id id nulla{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
