import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ImgForNews from "../assets/newsPhoto.jpg";
import ImgForFinance from "../assets/financePhoto.jpg";
import ImgForServices from "../assets/businessPhoto.jpg";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const onNewsPage = () => {
    navigate("/news");
  };
  const onFinance = () => {
    navigate("/finance");
  };
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="max-w-[1240px] mx-auto py-16 px-4 text-center gap-2 md:gap-4">
        <h1 className="text 4xl">Here's what you'll find with us</h1>
        <br />
        <hr className="w-auto h-1 mx-auto my-4 bg-gray-900 border-0 rounded md:my-10 dark:bg-gray-100"></hr>
        <br />
        <div className="relative p-4">
          <h3 className="absolute z-10 top-[15%] left-[75%] translate-x-[-50%] translate-y-[-50%] text-black sm:top-[50%] sm:left-[25%] sm:text-white text-3xl md:text-5xl lg:text-8xl sm:text-12xl font-bold">
            NEWS
          </h3>
          <div className="relative block sm:flex">
            <img
              src={ImgForNews}
              alt="/"
              className="w-1/2 h-auto object-cover relative border-4 border-gray-900/60 shadow-lg"
            />
            <div>
              <p className="ml-1 sm:mt-5 sm:ml-12 text-start text-sm py-4 sm:text-center sm:text-[16px] font-sans text-gray-700 dark:text-gray-600 leading-relaxed">
                Welcome to our "News" section, where the world's pulse converges
                with a touch of Armenian business excellence. Dive into the
                latest happenings in the realm of global business, world
                affairs, and the thriving Armenian entrepreneurial spirit.
                Immerse yourself in a beautifully curated collection of news, a
                window into the dynamic world of commerce, innovation, and
                global connectivity. Stay informed, stay inspired, and stay
                connected with the world's ever-evolving narratives.
              </p>
              <button
                onClick={onNewsPage}
                className="mt-0 sm:mt-6 h-[50px] w-full sm:ml-5 sm:w-2/3 hover:bg-none hover:text-gray-700 hover:underline hover:font-bold hover:text-[18px] transition duration-300 hover:shadow-md"
              >
                Go to the NEWS
              </button>
            </div>
          </div>
        </div>
        <br />
        <div className="relative p-4">
          <h3 className="absolute z-10 top-[15%] left-[75%] translate-x-[-50%] translate-y-[-50%] text-black sm:top-[50%] sm:left-[25%] sm:text-white text-3xl md:text-5xl lg:text-8xl sm:text-12xl font-bold">
            FINANCE
          </h3>
          <div className="relative block sm:flex">
            <img
              src={ImgForFinance}
              alt="/"
              className="w-1/2 h-auto object-cover relative border-4 border-gray-900/60 shadow-lg"
            />
            <div>
              <p className="ml-1 sm:mt-5 sm:ml-12 text-start text-sm py-4 sm:text-center sm:text-[16px] font-sans text-gray-700 dark:text-gray-600 leading-relaxed">
                Welcome to our "Finance" section, your gateway to the intricate
                world of fiscal dynamics within Armenia. Explore a treasure
                trove of valuable information, from real-time exchange rates
                offered by leading banks and currency exchange services, to the
                thrilling fluctuations in cryptocurrency rates. Stay abreast of
                the latest financial news, market trends, and investment
                insights, all tailored to the Armenian financial landscape.
                Whether you're an investor, a trader, or simply someone curious
                about the economic pulse of Armenia, our Finance section is your
                trusted resource. Stay informed, make informed decisions, and
                navigate the financial terrain with confidence.
              </p>
              <button
                onClick={onFinance}
                className="mt-0 sm:mt-6 h-[50px] w-full sm:ml-5 sm:w-2/3 hover:bg-none hover:text-gray-700 hover:underline hover:font-bold hover:text-[18px] transition duration-300 hover:shadow-md"
              >
                Go to the FINANCE
              </button>
            </div>
          </div>
        </div>
        <br />
        <div className="relative p-4">
          <h3 className="absolute z-10 top-[15%] left-[75%] translate-x-[-50%] translate-y-[-50%] text-black sm:top-[50%] sm:left-[25%] sm:text-white text-3xl md:text-5xl lg:text-8xl sm:text-12xl font-bold">
            SERVICES
          </h3>
          <div className="relative block sm:flex">
            <img
              src={ImgForServices}
              alt="/"
              className="w-1/2 h-auto object-cover relative border-4 border-gray-900/60 shadow-lg"
            />
            <div>
              <p className="ml-1 sm:mt-5 sm:ml-12 text-start text-sm py-4 sm:text-center sm:text-[16px] font-sans text-gray-700 dark:text-gray-600 leading-relaxed">
                Welcome to our "Services" section, the ultimate resource for
                comprehensive business solutions. Business Consulting: Uncover
                strategic insights to navigate the dynamic business landscape.
                Marketing and SMM: Elevate your brand with cutting-edge
                marketing strategies and expert social media management. Firm
                Accounting: Ensure financial clarity and efficiency with
                customized accounting services vital for business success. Legal
                Counsel: Access seasoned legal advice and representation to
                safeguard your interests in a complex legal environment. Web App
                Development: Transform your online presence with bespoke web
                applications, optimizing user experiences and digital
                engagement. Brokering: Facilitate transactions, investments, and
                negotiations with our professional brokering services, ensuring
                successful deals.
              </p>
              <button
                onClick={onFinance}
                className="mt-0 sm:mt-6 h-[50px] w-full sm:ml-5 sm:w-2/3 hover:bg-none hover:text-gray-700 hover:underline hover:font-bold hover:text-[18px] transition duration-300 hover:shadow-md"
              >
                Go to the SERVICES
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
