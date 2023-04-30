import React from "react";
import classes from "../Blog.module.css";
import { BsFillHexagonFill } from "react-icons/bs";
const MainSection = () => {
  console.log(classes);
  return (
    <div className="flex justify-center">
      <div className="bg-[#f0f0ff] rounded-xl px-5 py-4 mx-3 max-w-[1000px]">
        <div className="md:grid grid-cols-[1fr_1fr] gap-3">
          <img
            src="/images/drone.jpg"
            alt=""
            className=" rounded-lg object-contain"
          />
          <div className="px-2 md:px-6">
            <p className="mt-10  text-2xl font-bold">Heading asd asdasd</p>
            <div className="flex justify-start items-center">
              <p className="py-3 font-semibold ">Don Jones </p>
              <BsFillHexagonFill className="w-2 h-2 mx-3" />
              <p className="py-3 font-semibold ">Dec 12, 2023</p>
            </div>
            <div className="w-fit bg-white flex items-center rounded-3xl  px-2 border border-gray-700">
              <div className="w-2 h-2 mr-2 rounded-full bg-black"></div>
              <p>Games</p>
            </div>
            <p className="text-gray-700 mt-5  text-justify ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident voluptatem iste impedit numquam, incidunt commodi fuga,
              ducimus maxime officiis qui minus voluptates at? Animi error vitae
              excepturi nesciunt pariatur tenetur.
            </p>
          </div>
        </div>
        <div>
          <p className="text-gray-800 text-lg text-justify mt-5 px-2 md:px-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            voluptatem iste impedit numquam, incidunt commodi fuga, ducimus
            maxime officiis qui minus voluptates at? Animi error vitae excepturi
            nesciunt pariatur tenetur. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Provident voluptatem iste impedit numquam,
            incidunt commodi fuga, ducimus maxime officiis qui minus voluptates
            at? Animi error vitae excepturi nesciunt pariatur tenetur. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Provident
            voluptatem iste impedit numquam, incidunt commodi fuga, ducimus
            maxime officiis qui minus voluptates at? Animi error vitae excepturi
            nesciunt pariatur tenetur. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Provident voluptatem iste impedit numquam,
            incidunt commodi fuga, ducimus maxime officiis qui minus voluptates
            at? Animi error vitae excepturi nesciunt pariatur tenetur. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Provident
            voluptatem iste impedit numquam, incidunt commodi fuga, ducimus
            maxime officiis qui minus voluptates at? Animi error vitae excepturi
            nesciunt pariatur tenetur. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Provident voluptatem iste impedit numquam,
            incidunt commodi fuga, ducimus maxime officiis qui minus voluptates
            at? Animi error vitae excepturi nesciunt pariatur tenetur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
