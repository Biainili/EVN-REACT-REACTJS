import React, { useState } from "react";
import initialNews from "./content/contentNews";
import Navbar from "./Navbar";
import NewsHero from "./NewsHero";
import Footer from "./Footer";
import { AiOutlineCloseCircle } from "react-icons/ai";

function News() {
  const [news, setNews] = useState(initialNews); // Assuming initialNews is defined elsewhere.

  const toggleMoreNews = (index) => {
    setNews((prevNews) => {
      return prevNews.map((el, i) => {
        if (i === index) {
          return { ...el, moreNews: !el.moreNews };
        }
        return el;
      });
    });
  };

  return (
    <div className="">
      {/* navBar Start */}
      <div className="flex absolute z-10 bg-gray-700/80 w-full h-[65px] ">
        <Navbar className="" />
      </div>
      {/* navBar Start */}

      {/* hero start */}
      <NewsHero />
      {/* hero end */}

      {/* Main start */}
      <div className="max-w-[1000px] mx-auto py-4 px-4  text-center gap-2 md:gap-4">
        <h1 className="text 4xl">News ToDay</h1>
        <hr class="w-auto h-1 mx-auto my-2 bg-gray-900 border-0 rounded md:my-10 dark:bg-gray-100 "></hr>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {news.map((el, index) => (
            <div
              className={
                el.moreNews
                  ? "bg-gray-900 my-4 w-full p-4 border rounded-md shadow-md"
                  : "bg-gray-950 my-4 w-full p-4 border rounded-md shadow-md"
              }
              style={{
                maxHeight: "600px", // Set a maximum height for the div
                overflow: "auto", // Add a vertical scrollbar when content exceeds the height
              }}
              key={index}
            >
              <h2 className="text-[15px] font-semibold mb-6 text-white font-sans">
                {el.title}
              </h2>
              <img
                src={el.img}
                alt="/"
                className="w-full h-auto mb-8  rounded-lg"
              />
              <p className=" text-white text-base mb-8 font-sans ">
                {el.moreNews ? el.text : el.des}
              </p>

              <div
                onClick={() => toggleMoreNews(index)}
                className="flex justify-center text-white cursor-pointer"
              >
                {!el.moreNews ? (
                  <span className=" text-blue-500 hover:underline bg-gray-800 md:bg-transparent p-2 rounded ">
                    read more...
                  </span>
                ) : (
                  <AiOutlineCloseCircle
                    size={35}
                    className="hover:text-red-500"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Main end */}
      <Footer />
    </div>
  );
}

export default News;
