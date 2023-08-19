import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-block-1">
          <div className="logo">
            <Image
              src={"/assets/img/rms-logo.png"}
              width={340}
              height={178}
              alt="Logo"
            />
          </div>
          <div className="newsletter">
            <fieldset className="w-full">
              <label htmlFor="email" className="font-semibold">
                Stay up to Date
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="form-input"
              />
            </fieldset>
            <button>
              <svg
                width="39"
                height="39"
                viewBox="0 0 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.75 30.875L30.875 9.75M30.875 9.75V30.03M30.875 9.75H10.595"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="footer-block-2">
          <div>
            <h6 className="links-heading">Quick Links</h6>
            <div className="links-wrapper">
              <ul className="space-y-3">
                <p>
                  <Link href={"#"}>About Us</Link>
                </p>
                <p>
                  <Link href={"#"}>Partners</Link>
                </p>
                <p>
                  <Link href={"#"}>Clients</Link>
                </p>
                <p>
                  <Link href={"#"}>Careers</Link>
                </p>
              </ul>
              <ul className="space-y-3">
                <p>
                  <Link href={"#"}>Media Centre</Link>
                </p>
                <p>
                  <Link href={"#"}>Contact </Link>
                </p>
              </ul>
            </div>
          </div>
          <div className="md:col-start-3">
            <h6 className="links-heading">Our Solutions</h6>
            <div className="links-wrapper">
              <ul className="space-y-3">
                <p>
                  <Link href={"#"}>Traditional Media</Link>
                </p>
                <p>
                  <Link href={"#"}>Digital Media</Link>
                </p>
                <p>
                  <Link href={"#"}>Influencer Media</Link>
                </p>
                <p>
                  <Link href={"#"}>Outdoor Media</Link>
                </p>
              </ul>
              <ul className="space-y-3">
                <p>
                  <Link href={"#"}>MOTT Advertising</Link>
                </p>
                <p>
                  <Link href={"#"}>Partnership</Link>
                </p>
              </ul>
            </div>
          </div>
          <div className="w-fit sm:ml-auto">
            <h6 className="links-heading">Connect with Us</h6>
            <div className="links-wrapper">
              <ul className="space-y-3">
                <p>
                  <Link href={"#"}>Facebook</Link>
                </p>
                <p>
                  <Link href={"#"}>Instagram</Link>
                </p>
                <p>
                  <Link href={"#"}>Youtube</Link>
                </p>
                <p>
                  <Link href={"#"}>Linkedin</Link>
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="copyrights">
        <p>All right Reserverd. Rotana Media Services</p>
        <ul className="policy-links">
          <li>
            <Link href={"#"}>Privacy Policy</Link>
          </li>
          <li>
            <Link href={"#"}>Terms & Conditions</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
