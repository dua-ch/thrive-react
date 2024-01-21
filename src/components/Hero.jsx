import { useEffect, useState } from "react";

const Hero = () => {
  // const [timeLeft, settimeLeft] = useState(86400); for One day
  const [timeLeft, settimeLeft] = useState(172800); // for two days

  useEffect(() => {
    const countdown = setInterval(() => {
      settimeLeft((prevtime) => prevtime - 1);
    }, 1000);

    return () => {
      clearInterval(countdown);
    };
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      console.log("sales end");
    }
  }, [timeLeft]);

  const days = Math.floor(timeLeft / 86400);
  const hours = Math.floor((timeLeft % 86400) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = Math.floor(timeLeft % 60);

  return (
    <section>
      <div className="md:grid md:grid-cols-2 gap-4 md:pt-12 lg:pt-16">
        {/* left side  */}
        <div className="flex items-center justify-center lg:block flex-col text-center mb-8 lg:mb-0 md:text-left">
          <div>
            <h1 className="font-fira text-3xl  sm:text-4xl  md:text-5xl lg:text-6xl lg:leading-[4.125rem] 2xl:leading-[4.75rem] 2xl:text-7xl text-[#DFDFDF]">
              THE PREMIUM
            </h1>
            <h1 className="font-fira text-3xl  sm:text-4xl  md:text-5xl lg:text-6xl lg:leading-[4.125rem] 2xl:leading-[4.75rem] 2xl:text-7xl text-[#2FAFB2]">
              DECENTRALIZED
            </h1>
            <h1 className="font-fira text-3xl  sm:text-4xl  md:text-5xl lg:text-6xl lg:leading-[4.125rem] 2xl:leading-[4.75rem] 2xl:text-7xl text-[#DFDFDF]">
              AD MARKETPLACE
            </h1>
          </div>
          {/* Social icons  */}
          <div className="flex items-center space-x-1 mt-4">
            <a
              href="/"
              className="bg-[#302E2F] transition-all ease-in-out duration-300 w-10 h-10 p-2 flex items-center justify-center"
            >
              <img src="/facebook.png" alt="facebook" />
            </a>
            <a
              href="/"
              className="bg-[#302E2F] transition-all ease-in-out duration-300  w-10 h-10 p-2 flex items-center justify-center"
            >
              <img src="/twitter.png" alt="twitter" />
            </a>
            <a
              href="/"
              className="bg-[#302E2F] transition-all ease-in-out duration-300 w-10 h-10 p-2 flex items-center justify-center"
            >
              <img src="/linkedin.png" alt="linkedin" />
            </a>
            <a
              href="/"
              className="bg-[#302E2F] transition-all ease-in-out duration-300  w-10 h-10 p-2 flex items-center justify-center"
            >
              <img src="/GitHub.png" alt="GitHub" />
            </a>
          </div>
        </div>
        {/* end left side  */}
        {/* Right side  */}
        <div>
          <div>
            <h3 className="font-fira text-3xl  sm:text-4xl  md:text-5xl lg:text-6xl lg:leading-[4.125rem] 2xl:leading-[4.75rem] 2xl:text-7xl text-[#DFDFDF] text-center">
              PUBLIC SALE <span className="text-shadow text-[#2FAFB2]">IS LIVE</span>
            </h3>
            <p className="text-[#DFDFDF] font-fira text-center mt-2">
              TIME REMAINING TO BENEFIT FROM <span className="text-[#2FAFB2]">20% BONUS</span>
            </p>
            <div className="flex items-center justify-center space-x-2 sm:space-x-6 font-fira py-4">
              <div className="border border-[#2FAFB2] h-16 md:h-20 lg:h-[75px] 2xl:h-24 w-16 md:w-20 lg:w-[75px] 2xl:w-24 rounded-full flex items-center justify-center">
                <div className="text-[#dfdfdf] text-center">
                  <p className="text-base md:text-lg lg:text-xl 2xl:text-2xl">{days}</p>
                  <p className="text-xs 2xl:text-base">Days</p>
                </div>
              </div>
              <div className="border border-[#2FAFB2] h-16 md:h-20 lg:h-[75px] 2xl:h-24 w-16 md:w-20 lg:w-[75px] 2xl:w-24 rounded-full flex items-center justify-center">
                <div className="text-[#dfdfdf] text-center">
                  <p className="text-base md:text-lg lg:text-xl 2xl:text-2xl">{hours}</p>
                  <p className="text-xs 2xl:text-base">Hours</p>
                </div>
              </div>
              <div className="border border-[#2FAFB2] h-16 md:h-20 lg:h-[75px] 2xl:h-24 w-16 md:w-20 lg:w-[75px] 2xl:w-24 rounded-full flex items-center justify-center">
                <div className="text-[#dfdfdf] text-center">
                  <p className="text-base md:text-lg lg:text-xl 2xl:text-2xl">{minutes}</p>
                  <p className="text-xs 2xl:text-base">Minutes</p>
                </div>
              </div>
              <div className="border border-[#2FAFB2] h-16 md:h-20 lg:h-[75px] 2xl:h-24 w-16 md:w-20 lg:w-[75px] 2xl:w-24 rounded-full flex items-center justify-center">
                <div className="text-[#dfdfdf] text-center">
                  <p className="text-base md:text-lg lg:text-xl 2xl:text-2xl">{seconds}</p>
                  <p className="text-xs 2xl:text-base">Seconds</p>
                </div>
              </div>
            </div>
            <p className="text-[#DFDFDF] font-fira text-center">
              NEXT STEP <span className="text-[#2FAFB2]">15% BONUS</span>
            </p>
            <button className="text-center transition-all ease-in-out duration-300 hover:scale-105 w-[70%] mx-auto block p-1 mt-4 text-lg border-2 border-[#FFFFFF] rounded-md font-fira text-shadow-btn text-white">
              CONTRIBUTE NOW
            </button>
          </div>
        </div>
        {/* End Right side */}
      </div>
      <div className="relative max-w-4xl 2xl:max-w-5xl mx-auto mt-20 md:mt-32 2xl:mt-40">
        <div className="border border-[#77777] rounded-md flex justify-between font-fira">
          <div
            className="absolute h-full bg-progress progress-path rounded-l-md rounded-bl-md"
            style={{ width: "25%" }}
          ></div>
          <div className="flex items-center justify-center text-white absolute -top-8 sm:-top-12 md:-top-14 lg:-top-16 left-[25%] z-10 h-10 sm:h-14 w-10 sm:w-14 md:h-16 lg:h-20 md:w-16 lg:w-20 bg-progress rounded-full">
            <p className="text-xs sm:text-base md:text-xl lg:text-2xl">31%</p>
          </div>
          <div className="relative lg:pl-8 pl-4 pr-6 md:pl-6 md:pr-8 lg:pr-10 py-[2px]">
            <h3 className="text-xs sm:text-base md:text-xl lg:text-2xl text-white font-normal">SOFT</h3>
            <div className="h-full w-[2px] bg-white absolute right-0 top-0 rotate-[24deg]"></div>
          </div>
          <div className="flex items-center">
            <div className="relative pr-5 py-[2px]">
              <h3 className="text-xs sm:text-base md:text-xl lg:text-2xl text-white font-normal">DYNAMIC </h3>
              <div className="h-full w-[2px] bg-white absolute right-0 top-0 rotate-[24deg]"></div>
            </div>
            <div className="relative  pl-6 md:pl-8 lg:pl-10  pr-6 sm:pr-6 md:pr-8 lg:pr-10 py-[2px]">
              <h3 className="text-xs sm:text-base md:text-xl lg:text-2xl text-white font-normal">HARD</h3>
            </div>
          </div>
        </div>
      </div>
      {/* Progress End  */}
      <div className="pt-6 pb-1">
        <p className="font-fira text-2xl  sm:text-3xl  md:text-4xl lg:text-5xl lg:leading-[4.125rem] text-[#DFDFDF] text-center">
          HURRY UP <span className="text-shadow text-[#2FAFB2]">20% BONUS</span> HURRY UP
        </p>
        <p className="font-fira text-[#dfdfdf] text-center mt-6">- Payments Methods -</p>
      </div>
      <div className="grid sm:grid-cols-3 sm:gap-8 max-w-4xl 2xl:max-w-5xl mx-auto pb-10">
        <div className="col-span-1">
          <button className="text-center transition-all ease-in-out duration-300 hover:scale-105 w-full mx-auto block p-1 mt-4 text-lg border-2 border-[#FFFFFF] rounded-md font-fira text-shadow-btn text-white">
            ETH
          </button>
        </div>
        <div className="col-span-1">
          <button className="text-center transition-all ease-in-out duration-300 hover:scale-105 w-full mx-auto block p-1 mt-4 text-lg border-2 border-[#FFFFFF] rounded-md font-fira text-shadow-btn text-white">
            BTC
          </button>
        </div>
        <div className="col-span-1">
          <button className="text-center transition-all ease-in-out duration-300 hover:scale-105 w-full mx-auto block p-1 mt-4 text-lg border-2 border-[#FFFFFF] rounded-md font-fira text-shadow-btn text-white">
            LTC
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
