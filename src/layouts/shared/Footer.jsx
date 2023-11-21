import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="text-white text-center">
      <div className="flex md:flex-row flex-col justify-center">
        <div className="bg-slate-600 w-full flex-1 p-6 md:p-16">
          <div className="md:w-2/5 w-full ml-auto">
            <h6 className="text-3xl font-semibold mb-6">CONTACT US</h6>
            <p>Lakshmipur, Bangladesh</p>
            <p>
              <a href="tel:+8801324202198">+8801 3242 02198</a>
            </p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
        <div className="bg-slate-700 w-full flex-1 p-6 md:p-16">
          <div className="md:w-2/5 w-full mr-auto">
            <h6 className="text-3xl font-semibold mb-6">FOLLOW US</h6>
            <p>Join us on social media</p>
            <div className="flex gap-4 items-center justify-center mt-6">
              <Link
                to="https://www.facebook.com/Saiful.Islam.Rafi.89"
                target="_blank"
              >
                <FaFacebookF size={25} />
              </Link>
              <Link
                to="https://www.linkedin.com/in/saiful-islam-0471b924b"
                target="_blank"
              >
                <FaLinkedinIn size={25} />
              </Link>
              <Link to="https://twitter.com/SaifulI87764986" target="_blank">
                <BsTwitterX size={25} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 p-2">
        Copyright © Bistro boss restaurant. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
