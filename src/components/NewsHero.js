import React from "react";
import NewsHeroImg from "../assets/evn-hero-news.jpg";
import hiNews1 from "../assets/araratbank.jpg";
import ucom from "../assets/ucome.jpg";
import azatmard from "../assets/azatmard.jpg";
import { TERipple } from "tw-elements-react";
import { LuExternalLink } from "react-icons/lu";

function NewsHero() {
  return (
    <div>
      <img
        src={NewsHeroImg}
        alt="/"
        className="w-full h-full object-cover mb-[220px] lg:mb-[260px] sm:mb-[180px]"
      />

      <div className="absolute lg:top-[40%] md:top-[15%] sm:top-[10%] top-[15%] left-0 right-0 sm:pl-10 sm:pr-10 pl-5 pr-5">
        <div className="flex justify-between">
          {/* conteiner for marketing 1 */}
          <div className="lg:w-[300px]  md:w-[250px]  sm:w-[200px] w-[120px] sm:h-auto  block rounded-lg bg-gray-100 border border-gray-500 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 hover:scale-[1.04] hover:[transition:.3s_ease-in-out] hover:cursor-pointer ">
            <TERipple>
              <div className="relative overflow-hidden bg-cover bg-no-repeat ">
                <img
                  src={hiNews1}
                  alt="/"
                  className="rounded-t-lg w-auto h-auto"
                />
                <a href="#!">
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-1/2 w-1/2 overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 "></div>
                </a>
              </div>
            </TERipple>
            <div className="p-2">
              <h5 className="mb-1  font-medium leading-tight text-neutral-800 dark:text-neutral-50 text-[16px] lg:text-lg md:text-xl sm:text-[22px]">
                Ararat Bank
              </h5>
              <p className="mb-4 text-[8px] sm:text-xs md:text-xs lg:text-sm text-neutral-600 dark:text-neutral-200">
                2023 թվականի սեպտեմբերի 18-ից մինչև դեկտեմբերի 18-ը ԱՐԱՐԱՏԲԱՆԿ
                ԲԲԸ սկսում է պարտատոմսերի տեղաբաշխման գործընթացը ստորև նշված
                պայմաններով․
              </p>
              <TERipple className="hover:cursor-pointer">
                <LuExternalLink />
              </TERipple>
            </div>
          </div>
          {/* conteiner for marketing 1 */}

          {/* conteiner for marketing 2 */}
          <div className="lg:w-[300px]  md:w-[250px]  sm:w-[200px] w-[120px] sm:h-auto  block rounded-lg bg-gray-100 border border-gray-500 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 hover:scale-[1.04] hover:[transition:.3s_ease-in-out] hover:cursor-pointer ">
            <TERipple>
              <div className="relative overflow-hidden bg-cover bg-no-repeat cursor-pointer ">
                <img
                  src={ucom}
                  alt="/"
                  className="rounded-t-lg w-auto h-auto "
                />
                <a href="#!">
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-1/2 w-1/2 overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 "></div>
                </a>
              </div>
            </TERipple>
            <div className="p-2">
              <h5 className="mb-1  font-medium leading-tight text-neutral-800 dark:text-neutral-50 text-[16px] lg:text-lg md:text-xl sm:text-[22px]">
                Ucom
              </h5>
              <p className="mb-4 text-[8px] sm:text-xs md:text-xs lg:text-sm text-neutral-600 dark:text-neutral-200">
                iPhone 15 Pro-ն արդեն վաճառքում Ucom-ում:Տիտանե կորպուս
                Անհավանական A17 Pro չիպ Նոր Action կոճակ Ավելի Pro տեսախցիկ
              </p>
              <TERipple className="hover:cursor-pointer">
                <LuExternalLink />
              </TERipple>
            </div>
          </div>
          {/* conteiner for marketing 2 */}

          {/* conteiner for marketing 3 */}
          <div className="lg:w-[300px]  md:w-[250px]  sm:w-[200px] w-[120px] sm:h-auto  block rounded-lg bg-gray-100 border border-gray-500 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 hover:scale-[1.04] hover:[transition:.3s_ease-in-out] hover:cursor-pointer ">
            <TERipple>
              <div className="relative overflow-hidden bg-cover bg-no-repeat cursor-pointer ">
                <img
                  src={azatmard}
                  alt="/"
                  className="rounded-t-lg w-auto h-auto "
                />
                <a href="#!">
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-1/2 w-1/2 overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 "></div>
                </a>
              </div>
            </TERipple>
            <div className="p-2">
              <h5 className="mb-1  font-medium leading-tight text-neutral-800 dark:text-neutral-50 text-[16px] lg:text-lg md:text-xl sm:text-[22px]">
                Azat Mard
              </h5>
              <p className="mb-4 text-[8px] sm:text-xs md:text-xs lg:text-sm text-neutral-600 dark:text-neutral-200">
                Our upcoming Racing Graphic is inspired by the legendary F1
                driver Alain Prost conquering the streets of Yerevan. 🏎️
              </p>
              <TERipple className="hover:cursor-pointer">
                <LuExternalLink />
              </TERipple>
            </div>
          </div>
          {/* conteiner for marketing 3*/}
        </div>
      </div>
    </div>
  );
}

export default NewsHero;
