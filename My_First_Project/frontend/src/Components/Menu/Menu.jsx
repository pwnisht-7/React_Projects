// import React from 'react'
import scan from "./Scan.png";
import B1 from "./BRUSHES.png";
import B2 from "./BRUSHES(1).png";
import momo2 from './chilli-momo.png'
import momo3 from './pngegg 1.png'
import { FaMobileAlt } from "react-icons/fa";
import momo1 from "./pngwing 2.png";
import ru from "./Vector.png";

const Menu = () => {
  return (
    <>
      <section className="w-[1440px] h-[743px] py-10 px-36 flex items-center flex-col gap-10">
        <div className="flex items-center justify-center">
          <h1 className="font-[allura] text-6xl text-[#0C6967] font-bold">
            Our Menu
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <h1 className="text-3xl font-bold text-center flex items-center flex-col">
            <span className="text-orange-600">
              Our menu is more than just momos,
            </span>{" "}
            <span>
              with a variety of dishes to cater to all tastes and preferences.
            </span>
          </h1>
        </div>
        <div className="bg-gray-50 p-10 w-full flex flex-col gap-10">
          <div className="flex justify-center text-center flex-col">
            <h1 className="text-3xl font-bold text-[#0C6967]">
              Scan the QR code
            </h1>
            <p className="text-slate-600 text-xl">
              You can also check the allergy advices using your phone as well
            </p>
          </div>
          <div className="flex items-center justify-center flex-col gap-4">
            <div className="flex items-center justify-center">
              <img src={scan} alt="Qr Code" />
            </div>
            <div className="flex items-center justify-center">
              <h1 className="text-3xl flex items-end justify-items-end gap-1 font-bold">
                <span className="text-orange-600">SCAN</span>
                <span>ME!</span>
                <span>
                  <FaMobileAlt />
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[1440px] h-[1172px] flex flex-col items-center justify-center gap-10 px-36">
        <div className="flex items-center justify-center gap-10 p-10 w-full">
          <img src={B1} alt="Brushes" />
          <h1 className="text-4xl font-bold font-[chela-one]"><span className="text-orange-600">BUFF</span> MOMO's</h1>
          <img src={B2} alt="Brushes 2" />
        </div>
        <div className="flex flex-col gap-20">
          <div className="flex items-center justify-center gap-32">
            <div className="w-[436px] h-[398px] flex flex-col gap-4">
              <div className="flex items-center justify-center relative">
                <div className="absolute -bottom-2 left-[44%] py-2 px-4 bg-orange-600 rounded-tl-2xl rounded-br-2xl text-white">
                  New
                </div>
                <img src={momo1} alt="" />
              </div>
              <div className="flex items-center flex-col justify-center gap-4">
                <div className="flex flex-col items-center justify-center px-10">
                  <div>
                    <h1 className="text-2xl font-bold">Buff Steam Momo</h1>
                  </div>
                  <div className="flex items-center justify-items-end">
                    <img src={ru} alt="" />
                    <h1 className="text-2xl font-bold text-orange-600">200</h1>
                  </div>
                </div>
                <div className="flex items-center justify-center px-8">
                  <p className="text-center leading-8 text-lg text-slate-600">
                    (Freshly Steamed Buff Momos made from whole wheat and
                    kneaded with beta Carotene Rich Vegetable Juice)
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[436px] h-[398px] flex flex-col gap-4">
              <div className="flex items-center justify-center relative">
                <div className="absolute -bottom-2 left-[41%] py-2 px-4 bg-red-600 rounded-tl-2xl rounded-br-2xl text-white">
                  Popular
                </div>
                <img src={momo2} alt="" />
              </div>
              <div className="flex items-center flex-col justify-center gap-4">
                <div className="flex flex-col items-center justify-center px-10">
                  <div>
                    <h1 className="text-2xl font-bold">Buff Steam Momo</h1>
                  </div>
                  <div className="flex items-center justify-items-end">
                    <img src={ru} alt="" />
                    <h1 className="text-2xl font-bold text-orange-600">200</h1>
                  </div>
                </div>
                <div className="flex items-center justify-center px-8">
                  <p className="text-center leading-8 text-lg text-slate-600">
                    (Freshly Steamed Buff Momos made from whole wheat and
                    kneaded with beta Carotene Rich Vegetable Juice)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-32">
            <div className="w-[436px] h-[398px] flex flex-col gap-4">
              <div className="flex items-center justify-center relative">
                {/* <div className="absolute -bottom-2 left-[44%] py-2 px-4 bg-red-600 rounded-tl-2xl rounded-br-2xl text-white">
                  New
                </div> */}
                <img src={momo1} alt="" />
              </div>
              <div className="flex items-center flex-col justify-center gap-4">
                <div className="flex flex-col items-center justify-center px-10">
                  <div>
                    <h1 className="text-2xl font-bold">Buff Steam Momo</h1>
                  </div>
                  <div className="flex items-center justify-items-end">
                    <img src={ru} alt="" />
                    <h1 className="text-2xl font-bold text-orange-600">200</h1>
                  </div>
                </div>
                <div className="flex items-center justify-center px-8">
                  <p className="text-center leading-8 text-lg text-slate-600">
                    (Freshly Steamed Buff Momos made from whole wheat and
                    kneaded with beta Carotene Rich Vegetable Juice)
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[436px] h-[398px] flex flex-col gap-4">
              <div className="flex items-center justify-center relative">
                <div className="absolute -bottom-2 left-[35%] py-2 px-4 bg-sky-600 rounded-tl-2xl rounded-br-2xl text-white">
                  Recommended
                </div>
                <img src={momo3} alt="" />
              </div>
              <div className="flex items-center flex-col justify-center gap-4">
                <div className="flex flex-col items-center justify-center px-10">
                  <div>
                    <h1 className="text-2xl font-bold">Buff Steam Momo</h1>
                  </div>
                  <div className="flex items-center justify-items-end">
                    <img src={ru} alt="" />
                    <h1 className="text-2xl font-bold text-orange-600">200</h1>
                  </div>
                </div>
                <div className="flex items-center justify-center px-8">
                  <p className="text-center leading-8 text-lg text-slate-600">
                    (Freshly Steamed Buff Momos made from whole wheat and
                    kneaded with beta Carotene Rich Vegetable Juice)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[1440px] h-[1172px] flex flex-col items-center justify-center gap-10 px-36">
        <div className="flex items-center justify-center gap-10 p-10 w-full">
          <img src={B1} alt="Brushes" />
          <h1 className="text-4xl font-bold font-[chela-one]"><span className="text-orange-600">CHICKEN</span> MOMO's</h1>
          <img src={B2} alt="Brushes 2" />
        </div>
        <div className="flex flex-col gap-20">
          <div className="flex items-center justify-center gap-32">
            <div className="w-[436px] h-[398px] flex flex-col gap-4">
              <div className="flex items-center justify-center relative">
                <div className="absolute -bottom-2 left-[44%] py-2 px-4 bg-orange-600 rounded-tl-2xl rounded-br-2xl text-white">
                  New
                </div>
                <img src={momo1} alt="" />
              </div>
              <div className="flex items-center flex-col justify-center gap-4">
                <div className="flex flex-col items-center justify-center px-10">
                  <div>
                    <h1 className="text-2xl font-bold">Buff Steam Momo</h1>
                  </div>
                  <div className="flex items-center justify-items-end">
                    <img src={ru} alt="" />
                    <h1 className="text-2xl font-bold text-orange-600">200</h1>
                  </div>
                </div>
                <div className="flex items-center justify-center px-8">
                  <p className="text-center leading-8 text-lg text-slate-600">
                    (Freshly Steamed Buff Momos made from whole wheat and
                    kneaded with beta Carotene Rich Vegetable Juice)
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[436px] h-[398px] flex flex-col gap-4">
              <div className="flex items-center justify-center relative">
                <div className="absolute -bottom-2 left-[40%] py-2 px-4 bg-red-600 rounded-tl-2xl rounded-br-2xl text-white">
                  Popular
                </div>
                <img src={momo2} alt="" />
              </div>
              <div className="flex items-center flex-col justify-center gap-4">
                <div className="flex flex-col items-center justify-center px-10">
                  <div>
                    <h1 className="text-2xl font-bold">Buff C.Momo</h1>
                  </div>
                  <div className="flex items-center justify-items-end">
                    <img src={ru} alt="" />
                    <h1 className="text-2xl font-bold text-orange-600">200</h1>
                  </div>
                </div>
                <div className="flex items-center justify-center px-8">
                  <p className="text-center leading-8 text-lg text-slate-600">
                    (Freshly Steamed Buff Momos made from whole wheat and
                    kneaded with beta Carotene Rich Vegetable Juice)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-32">
            <div className="w-[436px] h-[398px] flex flex-col gap-4">
              <div className="flex items-center justify-center relative">
                {/* <div className="absolute -bottom-2 left-[40%] py-2 px-4 bg-red-600 rounded-tl-2xl rounded-br-2xl text-white">
                  Popular
                </div> */}
                <img src={momo3} alt="" />
              </div>
              <div className="flex items-center flex-col justify-center gap-4">
                <div className="flex flex-col items-center justify-center px-10">
                  <div>
                    <h1 className="text-2xl font-bold">Buff Steam Momo</h1>
                  </div>
                  <div className="flex items-center justify-items-end">
                    <img src={ru} alt="" />
                    <h1 className="text-2xl font-bold text-orange-600">200</h1>
                  </div>
                </div>
                <div className="flex items-center justify-center px-8">
                  <p className="text-center leading-8 text-lg text-slate-600">
                    (Freshly Steamed Buff Momos made from whole wheat and
                    kneaded with beta Carotene Rich Vegetable Juice)
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[436px] h-[398px] flex flex-col gap-4">
              <div className="flex items-center justify-center relative">
                <div className="absolute -bottom-2 left-[35%] py-2 px-4 bg-sky-600 rounded-tl-2xl rounded-br-2xl text-white">
                  Recommended
                </div>
                <img src={momo1} alt="" />
              </div>
              <div className="flex items-center flex-col justify-center gap-4">
                <div className="flex flex-col items-center justify-center px-10">
                  <div>
                    <h1 className="text-2xl font-bold">Buff Steam Momo</h1>
                  </div>
                  <div className="flex items-center justify-items-end">
                    <img src={ru} alt="" />
                    <h1 className="text-2xl font-bold text-orange-600">200</h1>
                  </div>
                </div>
                <div className="flex items-center justify-center px-8">
                  <p className="text-center leading-8 text-lg text-slate-600">
                    (Freshly Steamed Buff Momos made from whole wheat and
                    kneaded with beta Carotene Rich Vegetable Juice)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
