import React from "react";
import classes from "./Header.module.css";
import Heading1 from "./components/Heading1";
import Heading2 from "./components/Heading2";
const Header = ({blogList}) => {

  return (
    <div className="flex justify-center py-6">
      <div className={classes.header}>
        <Heading1 data={arr[0]} blogList={blogList}/>
        <div className="flex flex-col gap-2 ">
          <Heading2 data={arr[1]} blogList={blogList}/>
          <Heading2 data={arr[2]} blogList={blogList}/>
        </div>
      </div>
    </div>
  );
};

export default Header;

const arr = [
  {
    image: "/images/bike.jpg",
    heading: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Sports",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea facere repudiandae eius delectus quidem illo illum sit ratione possimus dolore vel ullam ad praesentium, quis error assumenda a eligendi?",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea facere repudiandae eius delectus quidem illo illum sit ratione possimus dolore vel ullam ad praesentium, quis error assumenda a eligendi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea facere repudiandae eius delectus quidem illo illum sit ratione possimus dolore vel ullam ad praesentium, quis error assumenda a eligendi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea facere repudiandae eius delectus quidem illo illum sit ratione possimus dolore vel ullam ad praesentium, quis error assumenda a eligendi?",
    tags: "",
    color: "#f0f0ff",
    tagColor: "#c6f5f0",
  },
  {
    image: "/images/code.jpg",
    heading: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "sport",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea facere repudiandae eius delectus quidem illo illum sit ratione possimus dolore vel ullam ad praesentium, quis error assumenda a eligendi?",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea facere repudiandae eius delectus quidem illo illum sit ratione possimus dolore vel ullam ad praesentium, quis error assumenda a eligendi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea facere repudiandae eius delectus quidem illo illum sit ratione possimus dolore vel ullam ad praesentium, quis error assumenda a eligendi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea facere repudiandae eius delectus quidem illo illum sit ratione possimus dolore vel ullam ad praesentium, quis error assumenda a eligendi?",
    tags: "",
    color: "#c6f5f0",
    tagColor: "#e0fada",
  },
  {
    image: "/images/drone.jpg",
    heading: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "sport",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea facere repudiandae eius delectus quidem illo illum sit ratione possimus dolore vel ullam ad praesentium, quis error assumenda a eligendi?",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea facere repudiandae eius delectus quidem illo illum sit ratione possimus dolore vel ullam ad praesentium, quis error assumenda a eligendi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea facere repudiandae eius delectus quidem illo illum sit ratione possimus dolore vel ullam ad praesentium, quis error assumenda a eligendi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea facere repudiandae eius delectus quidem illo illum sit ratione possimus dolore vel ullam ad praesentium, quis error assumenda a eligendi?",
    tags: "",
    color: "#e0fada",
    tagColor: "#1dd7c2",
  },
];
