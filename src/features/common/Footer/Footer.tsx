import { FC } from "react";
import { Link } from "react-router-dom";
import { Footer as FlowbiteFooter, Flowbite } from "flowbite-react";

import footerTheme from "../../../theme/theme";
import X from "../../../assets/icons/x.svg";
import darkX from "../../../assets/icons/dark-x.svg";

import {
  // IconFacebbok,
  // IconTwitter,
  // IconInstagram,
  IconLinkedin,
  IconArrowSmallUp,
} from "../../../assets/constant/svg";
import blockexpander_logo from "../../../assets/images/logodark.png";

const Footer: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Flowbite theme={{ theme: footerTheme }}>
      <FlowbiteFooter>
        <div className="w-full space-y-12 container pt-12 pb-4">
          <div className="flex justify-between gap-2 w-full items-center">
            <div className="flex flex-row gap-x-3 md:gap-x-1 list-none col-span-1">
              {/* <FlowbiteFooter.Link href="/">
                <IconFacebbok />
              </FlowbiteFooter.Link> */}
              <FlowbiteFooter.Link
                target="blank"
                href="https://x.com/joseon_empire"
                className="group relative w-6 h-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
              >
                <img
                  src={X}
                  alt=""
                  className="w-4 h-4 group-hover:block absolute "
                />
                <img
                  src={darkX}
                  alt=""
                  className="w-4 h-4  group-hover:hidden absolute left-0 top-0"
                />
              </FlowbiteFooter.Link>
              {/* <FlowbiteFooter.Link href="/">
                <IconInstagram />
              </FlowbiteFooter.Link> */}
              <FlowbiteFooter.Link
                target="blank"
                href="https://www.linkedin.com/company/joseon/"
              >
                <IconLinkedin />
              </FlowbiteFooter.Link>
            </div>

            <div
              className="flex space-x-3 cursor-pointer justify-end items-center transition duration-150 ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover-effect"
              onClick={scrollToTop}
            >
              <IconArrowSmallUp />
              <span className="text-grey-50 text-sm font-sans font-medium mt-1">
                Back to Top
              </span>
            </div>
          </div>

          <FlowbiteFooter.Divider />

          <div className="flex md:flex-row flex-col justify-between items-center w-full space-y-4 md:space-y-0">
            <div className="col-span-1 md:col-span-6 mr-auto">
              <Link to={"/"} onClick={scrollToTop}>
                <img
                  src={blockexpander_logo}
                  alt="Joseon Explorer"
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            <div className="flex md:justify-end justify-start md:flex-row flex-col w-full gap-4 gap-x-[86px]">
              <div className="md:max-w-[300px] w-full">
                <FlowbiteFooter.LinkGroup col>
                  <p className="text-be-navy-blue-300 font-normal text-sm">
                    For issues relating to the Executive, Legislative or
                    Judicial Offices{" "}
                    <a
                      href="press@joseon.com"
                      className="text-white"
                      target="blank"
                    >
                      press@joseon.com
                    </a>
                  </p>
                </FlowbiteFooter.LinkGroup>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-row">
            <p className="text-be-navy-blue-300 text-xs">
              Joseon Explorer © 1392-{new Date().getFullYear()} All Rights
              Reserved.
            </p>
          </div>
        </div>
      </FlowbiteFooter>
    </Flowbite>
  );
};

export default Footer;
