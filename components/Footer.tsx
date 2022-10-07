import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi";

export const Icon: React.FC = () => {
  return (
    <div className="md:flex items-center justify-center md:m-0 m-3 space-x-1 md:space-x-2 ">
      <p className="text-xs md:text-sm">info@sabongnetwork.com</p>
      <div className="flex items-center justify-center space-x-1 md:mt-0 mt-3">
        <FiInstagram className="md:h-5 h-4 w-auto cursor-pointer" />
        <FiFacebook className="md:h-5 h-4 w-auto cursor-pointer" />
        <FiLinkedin className="md:h-5 h-4 w-auto cursor-pointer" />
        <FiYoutube className="md:h-5 h-4 w-auto cursor-pointer" />
      </div>
    </div>
  );
};

export const Copy: React.FC = () => {
  return <p className="text-xs md:text-sm">Copyright © 2022</p>;
};

export const Footer: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <div className="container md:flex items-center text-center justify-between p-5 text-sm mt-16">
        <p className="text-xs md:text-sm flex justify-center">
          Sabong Network Philippines.
          <div className="md:block hidden ">
            <Copy />
          </div>
        </p>

        <Icon />
        <div className="md:hidden block">
          <Copy />
        </div>
      </div>
    </div>
  );
};
