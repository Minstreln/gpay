import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";

function BrandSection() {
  return (
    <div className="overflow-hidden py-4 opacity-80 grayscale">
      <div className="relative flex w-full">
        <div
          className="flex min-w-max space-x-5"
          style={{
            animation: "scroll 20s linear infinite",
            display: "flex",
            whiteSpace: "nowrap",
          }}
        >
          {[logo1, logo2, logo3, logo4, logo5, logo6].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Brand ${index + 1}`}
              className="h-10 w-auto brightness-75 grayscale filter"
            />
          ))}
          {[logo1, logo2, logo3, logo4, logo5, logo6].map((logo, index) => (
            <img
              key={index + 6}
              src={logo}
              alt={`Brand ${index + 7}`}
              className="h-10 w-auto brightness-75 grayscale filter"
            />
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
}

export default BrandSection;
