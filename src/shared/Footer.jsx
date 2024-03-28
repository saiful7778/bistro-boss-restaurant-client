import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="text-gray-50">
      <div className="flex flex-col sm:flex-row">
        <div className="flex-1 bg-[#1F2937] p-10">
          <div className="w-full max-w-xs text-center sm:ml-auto">
            <h6 className="mb-4 text-lg font-medium">CONTACT US</h6>
            <div className="space-y-2 text-sm">
              <div>123 ABS Street, Uni 21, Bangladesh</div>
              <div>
                <a
                  className="hover:text-blue-500 hover:underline"
                  href="tel:+8801324202198"
                >
                  +880 1324 202198
                </a>
              </div>
              <div>Mon - Fri: 08:00 - 22:00</div>
              <div>Sat - Sun: 10:00 - 23:00</div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-[#111827] p-10">
          <div className="w-full max-w-xs text-center sm:mr-auto">
            <h6 className="mb-4 text-lg font-medium">Follow US</h6>
            <div className="text-sm">Join us on social media</div>
            <div className="mt-2 flex items-center justify-center gap-4">
              <a
                href="https://www.facebook.com/Saiful.Islam.Rafi.89"
                target="_blank"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/saiful-islam-0471b924b"
                target="_blank"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark-01 p-4 text-center font-medium">
        <div className="container">
          Copyright © {date.getFullYear()}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
