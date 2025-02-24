import hand_icon from "../assets/Hand_icon.png";
import frame from "../assets/Frame.png";
import frame1 from "../assets/Frame1.png";
import heroImg from "../assets/img.png";

function HeroSection() {
  return (
    <div className="mt-8 flex flex-col items-center justify-between lg:mt-0 lg:flex-row">
      <div className="container">
        <div className="flex items-center">
          <span className="pr-2">
            <img className="h-6 w-6" src={hand_icon} alt="hand_icon" />
          </span>
          <h2 className="font-[Poppins]">GPAY</h2>
        </div>
        <h1 className="mt-5 font-[Poppins] text-[30px] font-semibold text-[1E293B] lg:text-6xl">
          Tuition Fee Around The World
        </h1>
        <p className="mt-5 mb-10 w-auto font-[Poppins] font-light text-[3E4E60] lg:mr-15">
          We can help you to pay for all kind of foreign conference fee,
          consular fee and admission fee at moderate rate.
        </p>
        <div className="flex items-center">
          <span className="mr-5">
            <img src={frame} alt="Google play app" />
          </span>
          <span>
            <img src={frame1} alt="Apple pay" />
          </span>
        </div>
      </div>
      <div className="mt-8 w-full max-w-[450px] lg:ml-10">
        <img className="lg:h-140 lg:w-200" src={heroImg} alt="Hero" />
      </div>
    </div>
  );
}

export default HeroSection;
