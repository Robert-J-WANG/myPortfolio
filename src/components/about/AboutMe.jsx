import React from "react";
import { infoData } from "../../server/data";
import aboutMe from "@/assets/aboutMe.png"; // 动态加载图片

export default function AboutMe() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-4 md:gap-12 md:flex-row">
      {/* left part */}
      <div className="flex items-center justify-center w-full h-full md:justify-end basis-1/2">
        <div className="relative flex items-center justify-center w-[340px] h-[240px] lg:w-[408px] lg:h-[288px] overflow-hidden rounded-xl">
          <span className="absolute w-[700px] h-[700px] bg-gradient-to-br from-mainColor to-black animate-spin-slow"></span>

          {/* 使用 require() 动态加载图片 */}
          <div
            className="z-10 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-lg bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${aboutMe})` }}
          ></div>
        </div>
      </div>

      {/* right part */}
      <div className="flex flex-col items-center justify-center w-full gap-4 md:gap-6 lg:gap-8 xl:gap-10 basis-1/2 md:items-start">
        {/* top title*/}
        <div className="hidden md:text-xl lg:text-2xl xl:text-3xl md:block">
          <span className="inline-block">Hi, I am&nbsp;</span>
          <span className="inline-block text-mainColor"> Robert</span>
        </div>
        {/* middle list */}
        <ul className="flex flex-col justify-center w-2/3 gap-2 md:w-full ">
          {infoData.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-start gap-2 md:text-base lg:text-lg xl:text-xl text-ellipsis"
            >
              {/* dots */}
              <span className="inline-block w-2 h-2 rounded-full bg-mainColor"></span>
              {/* text */}
              <span className="inline-block font-medium text-subColor">
                {item.title}
              </span>
              <span className="inline-block text-subColor2">{item.value}</span>
            </li>
          ))}
        </ul>
        {/* bottom link */}
        <a
          href="/resume.pdf"
          target="_blank"
          className="flex items-center justify-center duration-500 border rounded text-mainColor bg-mainColor20 border-mainColor hover:bg-mainColor hover:text-bgColor "
        >
          <span className="px-2 py-1 md:text-base lg:text-lg xl:text-xl">
            Download Resume
          </span>
        </a>
      </div>
    </div>
  );
}
