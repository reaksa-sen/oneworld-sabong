import { FiCheckCircle } from "react-icons/fi";

const gameSetup = [
  "Betting Website",
  "Betting Console",
  "Back-Office System",
  "Agents System",
  "Agents Platform",
  "Bonus & Marketing Tool",
  "Affiliate System",
  "Payment Gateway",
  "Website Development",
  "Managed Technical Services",
  "Operation Services",
  "Marketing Services",
];
const studioStream = [
  "Production and Crew",
  "Live Video Streaming Platform",
  "Cloud Servers",
  "Totalizator (Algorithm)",
  "Match Controller System",
];

export const ProductService: React.FC = () => {
  return (
    <div className="containers px-5 md:px-10">
      <h3 className="text-gray-900 font-semibold md:text-4xl sm:text-2xl text-xl">
        Product & Services
      </h3>
      <div>
        <div className="flex md:flex-row flex-col-reverse">
          <div>
            <span>
              <p className="mt-8 md:mt-12 w-4/5">
                A host of complete business services designed to guide clients
                in meeting their needs.
              </p>
              <p className="mt-8 w-3/4">
                By establishing a partnership with us, clients can expect
                complete cockfighting-focused services and support aimed
                atenhancing lifetime player value, promoting a secure gaming
                environment, and ensuring cost-effective acquisition.
              </p>
            </span>
            <div className="grid md:grid-cols-2 grid-cols-1 mt-6">
              <div>
                <p className="text-gray-900 font-semibold md:text-xl text-base">
                  Game Setups:
                </p>
                {gameSetup.map((a) => (
                  <div
                    key={a}
                    className="flex items-center gap-x-2 mt-3 text-sm md:text-base"
                  >
                    <FiCheckCircle className="h-5 text-red-600" />
                    {a}
                  </div>
                ))}
              </div>
              <div className="md:mt-0 mt-5">
                <p className="text-gray-900 font-semibold md:text-xl text-base">
                  Studio & Streaming Setups:
                </p>
                {studioStream.map((d) => (
                  <div
                    key={d}
                    className="flex items-center gap-x-2 mt-3 text-sm md:text-base"
                  >
                    <FiCheckCircle className="h-5 text-red-600" />
                    {d}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:mt-0 mt-5">
            <img src="./image/mockup.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
