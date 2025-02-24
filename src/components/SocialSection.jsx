import whatsapp from "../assets/whatsapp.png";
import Twitter from "../assets/Twitter.png";
import instagram from "../assets/Instagram.png";
import facebook from "../assets/facebook.png";

function SocialSection() {
  return (
    <div className="h-full bg-[#28388A] pt-15">
      <div className="text-center">
        <span className="font-[Poppins] text-sm text-[14px] font-semibold text-white uppercase">
          Social media
        </span>
        <h2 className="mt-5 font-[Poppins] text-2xl font-bold tracking-wide text-white lg:text-4xl">
          Follow Us on Social Media
        </h2>
      </div>
      <div className="mt-10 flex items-center justify-center space-x-6 pb-25">
        <span>
          <img
            className="h-14 w-14 cursor-pointer lg:h-17 lg:w-17"
            src={facebook}
            alt="Facebook"
          />
        </span>
        <span>
          <img
            className="h-14 w-14 cursor-pointer lg:h-17 lg:w-17"
            src={instagram}
            alt="Instagram"
          />
        </span>
        <span>
          <img
            className="h-14 w-14 cursor-pointer lg:h-17 lg:w-17"
            src={Twitter}
            alt="Twitter"
          />
        </span>
        <span>
          <img
            className="h-14 w-14 cursor-pointer lg:h-17 lg:w-17"
            src={whatsapp}
            alt="WhatsApp"
          />
        </span>
      </div>
    </div>
  );
}

export default SocialSection;
