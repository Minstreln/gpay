import { featuresLinks, transparencyLinks } from "../constants/index";
import google from "../assets/appleapp.png";
import apple from "../assets/googleapp.png";
import footerLogo from "../assets/FooterLogo.png";
import facebook from "../assets/facebook.png";
import Twitter from "../assets/Twitter.png";
import footerinsta from "../assets/footerinsta.png";

function Footer() {
  <span>
    <img src={footerLogo} alt="Footer Logo" />
  </span>;
  return (
    <footer className="bg-[#031025] py-10 lg:px-18">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="pl-5">
          <img className="cursor-pointer" src={footerLogo} alt="Footer Logo" />
          <ul className="space-y-2">
            <li className="mt-5 mb-5 font-[Poppins] text-[15px] text-white">
              <p>Save, spend, send and invest moneyacross borders.</p>
            </li>
            <div className="mb-6 flex items-center gap-3">
              <li>
                <img
                  className="h-10 w-10 cursor-pointer"
                  src={facebook}
                  alt="Facebook"
                />
              </li>
              <li>
                <img
                  className="h-10 w-10 cursor-pointer"
                  src={footerinsta}
                  alt="instagram"
                />
              </li>
              <li>
                <img
                  className="h-10 w-10 cursor-pointer"
                  src={Twitter}
                  alt="Twitter"
                />
              </li>
            </div>
          </ul>
        </div>

        <div className="mb-3 pl-5">
          <h3 className="text-md mb-4 font-semibold text-white">Features</h3>
          <ul className="space-y-2">
            {featuresLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-3 pl-5">
          <h3 className="text-md mb-4 font-semibold text-white">
            Transparency
          </h3>
          <ul className="space-y-2">
            {transparencyLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-3 pl-5">
          <h3 className="text-md mb-4 font-semibold text-white">
            Download App
          </h3>
          <ul className="space-y-2">
            <li>
              <a className="text-neutral-300 hover:text-white" href="#">
                <img className="mb-5" src={google} alt="Google" />
              </a>
              <a className="text-neutral-300 hover:text-white" href="#">
                <img src={apple} alt="Apple" />
              </a>
            </li>
          </ul>
        </div>

        <h2 className="pl-6 font-[Poppins] text-[13px] text-white">
          &copy;2025 <span className="text-[#90ABEF]">gpay.com</span> all right
          reserved
        </h2>
      </div>
    </footer>
  );
}

export default Footer;
