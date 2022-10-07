import { TvIcon } from "@heroicons/react/20/solid";
import { FaHeadphones } from "@react-icons/all-files/fa/FaHeadphones";

export const Banner: React.FC = () => (
  <div className="aspect-w-16 aspect-h-16 sm:aspect-h-10 md:aspect-h-9 custom-img bg-cover">
    <div className="container flex flex-col items-center justify-center gap-y-5 md:gap-y-10 mt-9 sm:mt-0">
      <div className="flex flex-col gap-y-2 sm:gap-y-5 md:gap-y-8">
        <p className="sm:mt-11 text-white text-center line-clamp-1 font-bold text-xs sm:text-sm md:text-base lg:text-2xl">
          TOTAL COCKFIGHTING SOLUTIONS AND SERVICES FOR
        </p>
        <p className="text-white text-center font-bold text-lg sm:text-2xl md:text-4xl lg:text-6xl">
          INTELLIGENT ENTERPRISES
        </p>
        <p className="text-white line-clamp-2 text-center px-16 sm:text-sm lg:text-base xl:text-lg">
          We specialize in providing end-to-end technology and content solutions
          and related services to both online and land-based channels either
          locally or international markets.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:space-y-0 space-y-2 md:space-x-8 spect-x-0">
        <button className="bg-white hover:bg-gray-200 border-red-500 sm:px-3 sm:py-3 px-1 py-1 text-black font-semibold rounded-md sm:text-md text-sm flex gap-x-3 items-center justify-center">
          <FaHeadphones className="h-3 sm:h-5" />
          CONTACT US
        </button>

        <button className="bg-red-600/70 border-red-500 hover:bg-red-500 sm:px-3 sm:py-3 px-1 py-1 text-white font-semibold rounded-md border sm:text-md text-sm flex gap-x-3 items-center">
          <TvIcon className="h-3 sm:h-5" />
          REQUEST FOR A DEMO
        </button>
      </div>
    </div>
  </div>
);
