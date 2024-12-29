import { Play } from 'lucide-react';
import home from '../assets/home.png';
import hero from "../assets/hero.png";
import google from '../assets/google.png';
import apple from '../assets/apple.png';
import antaira from '../assets/antaira.png';
import chanel from "../assets/chanel.png";
import homes from "../assets/homes.png";
import realhomes from "../assets/realhomes.png";
import daniel from '../assets/daniel.png'

const Hero = () => {
  return (
    <section className="">
      <div className="bg-[#dbdddf] md:flex md:flex-row pb-5">
        <div className=" flex flex-col items-center ml-4 mr-4 md:ml-20 md:flex-row">
          <img
            src={hero}
            alt="real-homes"
            className="absolute top-14 left-20 h-72 lg:left-96 lg:top-24  md:top-20 "
          />
          <div className="">
            <div className="mt-9 lg:mt-28 w-fit">
              <h1 className="text-2xl text-center w-auto font-medium mt-16 md:text-4xl md:text-left lg:mt-1 lg:text-6xl lg:w-auto">
                The <span className="text-orange-300">Best</span> Apartments In
                And Out Of Your City
              </h1>

              <p className=" w-fit text-center mt-5 text-base md:text-lg">
                Here at Homes, we have the most sought after apartments in any
                location of your choice. we make your priority our priority.
              </p>
            </div>

            <div className="flex flex-col items-center mt-10 md:flex-row md:mt-12 lg:mt-14 lg:mb-14 ">
              <button
                className="text-base text-white w-32 bg-black border-none rounded-md pl-3 pr-3 pt-2 pb-2 lg:text-2xl lg:w-auto lg:px-4 lg:py-3
                    hover:bg-gray-800  hover:text-white hover:transition-all transform duration-300 ease-in-out hover:scale-105">
                Get Started
              </button>

              <button
                className="flex gap-2 text-base w-auto border-none rounded-md px-3 py-3 lg:text-2xl lg:w-auto lg:px-4 lg:py-3 hover:bg-gray-800 hover:text-white
                        hover:transition-all transform duration-300 ease-in-out">
                Learn More
                <span className="mt-1 md:mt-2 lg:w-auto">
                  <Play size={20} fill="currentColor" />
                </span>
              </button>
            </div>

            <div className="hidden md:flex flex-col mb-0">
              <div className="flex gap-5 ">
                <div className="mb-10">
                  <h3 className="font-semibold text-2xl text-orange-300">
                    5000+
                  </h3>
                  <p className="text-gray-500">Satisfied Clients</p>
                </div>

                <div>
                  <h3 className="font-semibold text-2xl text-orange-300">
                    5000+
                  </h3>
                  <p className="text-gray-500">Downloads</p>
                </div>

                <div>
                  <h3 className="font-semibold text-2xl text-orange-300">
                    5000+
                  </h3>
                  <p className="text-gray-500">Countries</p>
                </div>
              </div>

              <div className="flex gap-3">
                <img src={google} alt="google play" className="" />
                <img src={apple} alt="app store" />
              </div>
            </div>
          </div>
        </div>

        {/* Second Grid */}
        <div className="flex flex-col ml-4 mr-4">
          <img
            src={home}
            alt="real-home"
            className="w-auto mb-5 rounded-lg lg:h-auto lg:pt-20"
          />
          <div className="flex gap-7 md:hidden lg:hidden ">
            <div className="mb-5">
              <h3 className="font-semibold text-lg text-orange-300">5000+</h3>
              <p className="text-gray-500">Satisfied Clients</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-orange-300">5000+</h3>
              <p className="text-gray-500">Downloads</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-orange-300">5000+</h3>
              <p className="text-gray-500 text-base">Countries</p>
            </div>
          </div>

          <div className="flex gap-3 md:hidden lg:hidden">
            <img src={google} alt="google play" className="w-28" />
            <img src={apple} alt="app store" className="w-28" />
          </div>
        </div>
      </div>

      <div className="ml-7 mt- bg-none p-3 mr-3 md:ml-20 md:pb-5">
        <div>
          <p className="text-base text-left text-gray-600 md:text-lg">
            Trusted by over 50,000 brands
          </p>
        </div>
        <div className="flex flex-row gap-4  mt-7 md:gap-14 lg:gap-20  lg:ml-10 lg:mr-5">
          <img src={chanel} alt="chanel" className="w-14 md:20 lg:w-28" />
          <img
            src={realhomes}
            alt="real homes"
            className="w-14 md:w-24 lg:w-28"
          />
          <img src={homes} alt="homes" className="w-14 md:w-24 lg:w-28" />
          <img src={antaira} alt="antaira" className="w-14 md:w-24 lg:w-28" />
          <img src={daniel} alt="daniel" className="w-14 md:w-24 lg:w-28" />
        </div>
      </div>
    </section>
  );
}

export default Hero