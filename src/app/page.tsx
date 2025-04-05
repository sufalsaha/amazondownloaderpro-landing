/* eslint-disable react/no-unescaped-entities */
// /* eslint-disable @typescript-eslint/no-unused-vars */

import Image from "next/image";
import logo from "@/static/logo/hola_logo_letters.svg";
import hero from "@/static/image/Screenshot_2.png";
import works3 from "@/static/image/how_it_works_access.svg";
import works2 from "@/static/image/how_it_works_download.svg";
import works1 from "@/static/image/how_it_works_download_exe.svg";
import work from "@/static/image/Screenshot_3.png";
import hola1 from "@/static/image/Screenshot_4.png";
import hola2 from "@/static/image/Screenshot_5.png";
import hola3 from "@/static/image/Screenshot_6.png";
import ster from "@/static/download.svg";
import Link from "next/link";
import { Poppins, IBM_Plex_Mono } from "next/font/google";
import { ArrowRight } from "lucide-react";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
const ibm_plex_mono = IBM_Plex_Mono({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${poppins.className} `}>
      <div className="flex justify-center bg-[#ffffff]">
        <div className="max-w-screen-2xl w-full fixed z-50">
          <div className="mx-[20px] md:mx-[28px] xl:mx-[124px] bg-[#bf2626cc] backdrop-blur-[5px] h-[44px] md:h-[72px] xl:h-[80px] rounded-[8px] md:rounded-[12px] shadow-nav px-[16px] md:px-[24px] xl:px-[30px] flex justify-between items-center">
            <nav className="w-full flex justify-between">
              <div>
                <Image src={logo} alt="LOGO" className="w-[53px]  " />
              </div>
              <div className={`${ibm_plex_mono.className} `}>
                <Link
                  href={"#"}
                  className="text-[#32302f] text-[14px] font-[500] leading-[24px] hover:underline"
                >
                  Log in
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <section className="flex justify-center bg-[#ffffff]">
        <div className="max-w-screen-2xl w-full">
          <div className="h-screen mx-[16]  md:mx-[27px] xl:mx-[124px] bg-[#fff] px-[16px] xl:px-[30px] flex flex-col justify-center items-center  ">
            <div className="w-full  flex flex-col justify-center items-center">
              <div>
                <Image src={hero} alt="LOGO" className=" w-[544px]  " />
              </div>
              <div className=" flex flex-col justify-center items-center gap-[24px] px-[20px]">
                <h1 className="text-[#32302f] text-[40px] font-[600] leading-[48px] text-center md:text-[48px] md:leading-[56px] xl:text-[64px] xl:leading-[72px] ">
                  Access worldwide content
                </h1>
                <p
                  className={`${ibm_plex_mono.className} text-[#7d7d7d] text-[18px] font-[500] leading-[24px] text-center max-w-[510px]  `}
                >
                  Your gateway to your favorite movies, TV shows, games and
                  more, no matter where you live!
                </p>
                <div className=" flex flex-col justify-center items-center gap-[16px]">
                  <button className="text-[#fff] text-[14px] font-[500] leading-[20px] text-center md:text-[17px] md:leading-[23px] px-[20px]  md:px-[32px] py-[20px] bg-[#32302F] rounded-4xl flex items-center gap-[12px] ">
                    Get Hola - it's free
                    <ArrowRight className="w-[22px] h-[18px] " />
                  </button>
                  <p className="text-[#7d7d7d] text-[14px] font-[600] leading-[19px] text-center">
                    Join more than 299 million members
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center bg-[#ffffff]">
        <div className="max-w-screen-2xl  w-full">
          <div className=" mx-[24px] md:mx-[70px] xl:mx-[124px] bg-[#fff] px-[16px] py-[40px] lg:py-[120px] md:px-[24px] xl:px-[30px] ">
            <div className="w-full  flex flex-col justify-center items-center">
              <div className="mb-[24px]">
                <h2 className="text-[#32302f] text-[48px] font-[600] leading-[56px] text-center">
                  How it works
                </h2>
              </div>
              <div className=" w-full flex flex-col justify-between items-center gap-[20px] lg:flex-row ">
                <div className=" w-[256px] ">
                  <div>
                    <Image src={works1} alt="LOGO" className="h-[200px] " />
                  </div>
                  <h3
                    className={`${ibm_plex_mono.className} text-[#32302f] text-[18px] font-[500] leading-[24px] `}
                  >
                    Better browsing, brought to you by Hola!
                  </h3>
                  <p className="text-[#65707c] text-[16px] font-[400] leading-[22px] mt-[16px]">
                    Download the Hola Browser and follow the steps for
                    installation!
                  </p>
                </div>
                <div>
                  <svg
                    version="1.1"
                    fill="none"
                    viewBox="0 0 49 16"
                    height="16"
                    width="49"
                    className="text-[#D5D5D5]"
                  >
                    <path
                      d="m 0,7 h 45.585938 l -4.645071,-4.6399475 -0.13618,-0.1530212 -0.07813,-0.140625 -0.07031,-0.2070313 -0.02344,-0.2148438 0.02734,-0.2304687 0.09766,-0.2734375 0.128907,-0.17578125 0.160156,-0.14453125 0.195312,-0.10546875 0.167969,-0.0546875 0.171875,-0.0234375 0.160156,0.007813 0.164063,0.0234375 0.144531,0.0585938 0.152344,0.0898438 0.152344,0.125 0.25,0.24609375 6.171875,6.1757812 0.117187,0.1875 0.0625,0.171875 0.03516,0.1445313 0.01172,0.15625 -0.01563,0.140625 -0.04687,0.171875 -0.0625,0.1523437 -0.07813,0.1132813 -0.15625,0.1757812 -6.068969,6.0515107 -0.192749,0.202396 -0.08984,0.09375 -0.132813,0.08984 -0.179687,0.08594 -0.175781,0.05469 -0.222657,0.01172 -0.20703,-0.03125 -0.203125,-0.08594 -0.191406,-0.125 -0.15625,-0.167969 -0.101563,-0.167969 -0.0625,-0.199218 -0.03125,-0.1875 0.01563,-0.1875 0.05859,-0.21875 0.08203,-0.167969 0.113282,-0.144531 0.113281,-0.105469 L 45.585938,9 H 0"
                      className="stroke-width:0 bg-[#fff] "
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <div className=" w-[256px] ">
                  <div>
                    <Image src={works2} alt="LOGO" className="h-[200px] " />
                  </div>
                  <h3
                    className={`${ibm_plex_mono.className} text-[#32302f] text-[18px] font-[500] leading-[24px] `}
                  >
                    Better browsing, brought to you by Hola!
                  </h3>
                  <p className="text-[#65707c] text-[16px] font-[400] leading-[22px] mt-[16px]">
                    Download the Hola Browser and follow the steps for
                    installation!
                  </p>
                </div>
                <div>
                  <svg
                    version="1.1"
                    fill="none"
                    viewBox="0 0 49 16"
                    height="16"
                    width="49"
                    className="text-[#D5D5D5]"
                  >
                    <path
                      d="m 0,7 h 45.585938 l -4.645071,-4.6399475 -0.13618,-0.1530212 -0.07813,-0.140625 -0.07031,-0.2070313 -0.02344,-0.2148438 0.02734,-0.2304687 0.09766,-0.2734375 0.128907,-0.17578125 0.160156,-0.14453125 0.195312,-0.10546875 0.167969,-0.0546875 0.171875,-0.0234375 0.160156,0.007813 0.164063,0.0234375 0.144531,0.0585938 0.152344,0.0898438 0.152344,0.125 0.25,0.24609375 6.171875,6.1757812 0.117187,0.1875 0.0625,0.171875 0.03516,0.1445313 0.01172,0.15625 -0.01563,0.140625 -0.04687,0.171875 -0.0625,0.1523437 -0.07813,0.1132813 -0.15625,0.1757812 -6.068969,6.0515107 -0.192749,0.202396 -0.08984,0.09375 -0.132813,0.08984 -0.179687,0.08594 -0.175781,0.05469 -0.222657,0.01172 -0.20703,-0.03125 -0.203125,-0.08594 -0.191406,-0.125 -0.15625,-0.167969 -0.101563,-0.167969 -0.0625,-0.199218 -0.03125,-0.1875 0.01563,-0.1875 0.05859,-0.21875 0.08203,-0.167969 0.113282,-0.144531 0.113281,-0.105469 L 45.585938,9 H 0"
                      className="stroke-width:0 bg-[#fff] "
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <div className=" w-[256px] ">
                  <div>
                    <Image src={works3} alt="LOGO" className="h-[200px] " />
                  </div>
                  <h3
                    className={`${ibm_plex_mono.className} text-[#32302f] text-[18px] font-[500] leading-[24px] `}
                  >
                    Better browsing, brought to you by Hola!
                  </h3>
                  <p className="text-[#65707c] text-[16px] font-[400] leading-[22px] mt-[16px]">
                    Download the Hola Browser and follow the steps for
                    installation!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center bg-[#ffffff]">
        <div className="max-w-screen-2xl  w-full">
          <div className=" mx-[24px] md:mx-[70px] xl:mx-[124px] bg-[#fff] px-[16px] py-[40px] lg:py-[120px] md:px-[24px] xl:px-[30px] ">
            <div className="w-full  flex flex-col justify-center items-center">
              <div className="mb-[30px]">
                <Image src={work} alt="LOGO" className=" w-[544px] " />
              </div>
              <div className="flex flex-col gap-[32px]">
                <p
                  className={`${ibm_plex_mono.className} text-[#7d7d7d] text-[18px] font-[500] leading-[24px] text-center `}
                >
                  Go beyond your location!
                </p>
                <p className="text-[#65707c] text-[30px] font-[500] leading-[40px] text-center max-w-[725px] ">
                  Our mission is to make the internet truly borderless by
                  helping you change your virtual location and getting you
                  access to global content, no matter where you are!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center bg-[#ffffff]">
        <div className="max-w-screen-2xl  w-full">
          <div className=" mx-[24px] md:mx-[70px] xl:mx-[124px] bg-[#fff] px-[16px] py-[40px] lg:py-[120px] md:px-[24px] xl:px-[30px] ">
            <div className="w-full  flex flex-col justify-center items-center">
              <div className="mb-[30px]">
                <h2 className="text-[#32302f] text-[38px] font-[600] leading-[48px] text-center md:text-[48px] md:leading-[56px]">
                  You'll love Hola!
                </h2>
              </div>
              <div className="flex flex-col gap-[20px] lg:flex-row ">
                <div className="max-w-[402px] flex flex-col justify-center items-center gap-[16px] ">
                  <div>
                    <Image src={hola1} alt="hola1" className="  " />
                  </div>
                  <h4
                    className={`${ibm_plex_mono.className} text-[#32302f] text-[18px] font-[500] leading-[24px] text-center max-w-[250px] `}
                  >
                    Ultra-fast and stable connection
                  </h4>
                  <p className="text-[#65707c] text-[16px] font-[400] leading-[22px] text-center">
                    Our high-speed stable network will get you the best
                    connectivity out there!
                  </p>
                </div>
                <div className="max-w-[402px] flex flex-col justify-center items-center gap-[16px] ">
                  <div>
                    <Image src={hola2} alt="hola1" className=" " />
                  </div>
                  <h4
                    className={`${ibm_plex_mono.className} text-[#32302f] text-[18px] font-[500] leading-[24px] text-center max-w-[250px] `}
                  >
                    Ultra-fast and stable connection
                  </h4>
                  <p className="text-[#65707c] text-[16px] font-[400] leading-[22px] text-center">
                    Our high-speed stable network will get you the best
                    connectivity out there!
                  </p>
                </div>
                <div className="max-w-[402px] flex flex-col justify-center items-center gap-[16px] ">
                  <div>
                    <Image src={hola3} alt="hola1" className="  " />
                  </div>
                  <h4
                    className={`${ibm_plex_mono.className} text-[#32302f] text-[18px] font-[500] leading-[24px] text-center max-w-[250px] `}
                  >
                    Ultra-fast and stable connection
                  </h4>
                  <p className="text-[#65707c] text-[16px] font-[400] leading-[22px] text-center">
                    Our high-speed stable network will get you the best
                    connectivity out there!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center bg-[#ffffff]">
        <div className="max-w-screen-2xl  w-full">
          <div className=" mx-[24px] md:mx-[70px] xl:mx-[124px] bg-[#fff] px-[16px] py-[40px] lg:py-[120px] md:px-[24px] xl:px-[30px] ">
            <div className="w-full  flex flex-col justify-center items-center">
              <div className="mb-[30px]">
                <h2 className="text-[#32302f] text-[38px] font-[600] leading-[48px] text-center md:text-[48px] md:leading-[56px]">
                  Don't just take our word for it
                </h2>
                <div className="flex justify-center flex-wrap gap-[25px] lg:gap-[48px] mt-[24px] ">
                  <div className="w-[200px] ">
                    <h4
                      className={`${ibm_plex_mono.className} text-[#32302f] text-[20px] font-[500] leading-[32px] text-center `}
                    >
                      4.9 stars
                    </h4>
                    <p className="text-[#7d7d7d] text-[16px] font-[400]  text-center ">
                      In Chrome Web Store
                    </p>
                  </div>
                  <div className="w-[200px] ">
                    <h4
                      className={`${ibm_plex_mono.className} text-[#32302f] text-[20px] font-[500] leading-[32px] text-center `}
                    >
                      263 million
                    </h4>
                    <p className="text-[#7d7d7d] text-[16px] font-[400]  text-center ">
                      Downloads
                    </p>
                  </div>
                  <div className="w-[200px] ">
                    <h4
                      className={`${ibm_plex_mono.className} text-[#32302f] text-[20px] font-[500] leading-[32px] text-center `}
                    >
                      16 years
                    </h4>
                    <p className="text-[#7d7d7d] text-[16px] font-[400]  text-center ">
                      16 years
                    </p>
                  </div>
                  <div className="w-[200px] ">
                    <h4
                      className={`${ibm_plex_mono.className} text-[#32302f] text-[20px] font-[500] leading-[32px] text-center `}
                    >
                      195 countries
                    </h4>
                    <p className="text-[#7d7d7d] text-[16px] font-[400]  text-center ">
                      to browse from
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[20px] lg:flex-row">
                <div className="max-w-[360px] w-full h-[360px] border-2 border-[#FFE275] p-[32px] rounded-[8px]">
                  <div className=" flex flex-col gap-[20px] h-full ">
                    <div className="flex gap-[5px] ">
                      <Image
                        src={ster}
                        alt="ster"
                        className="fill-[#00BB00]  "
                      />
                      <Image
                        src={ster}
                        alt="ster"
                        className="fill-[#00BB00]  "
                      />
                      <Image
                        src={ster}
                        alt="ster"
                        className="fill-[#00BB00]  "
                      />
                      <Image
                        src={ster}
                        alt="ster"
                        className="fill-[#00BB00]  "
                      />
                      <Image
                        src={ster}
                        alt="ster"
                        className="fill-[#00BB00]  "
                      />
                    </div>
                    <div className="flex flex-col justify-between gap-[16px] h-full ">
                      <div>
                        <p className="text-[#7d7d7d] text-[17px] font-[400] leading-[22px] ">
                          "This is actually the best service that I've
                          downloaded for browser, great work guys."
                        </p>
                      </div>
                      <div className="flex justify-between ">
                        <span
                          className={`${ibm_plex_mono.className} text-[#32302f] text-[16px] font-[500] leading-[24px] `}
                        >
                          Mhamad Mstafa
                        </span>
                        <span
                          className={`${ibm_plex_mono.className} text-[#32302f] text-[16px] font-[500] leading-[24px] hover:underline `}
                        >
                          Chrome store
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-[360px] w-full  h-[360px] border-2 border-[#FFE275] p-[32px] rounded-[8px]">
                  <div className=" flex flex-col gap-[20px] h-full ">
                    <div className="flex gap-[5px] ">
                      <Image
                        src={ster}
                        alt="ster"
                        className="fill-[#00BB00]  "
                      />
                      <Image
                        src={ster}
                        alt="ster"
                        className="fill-[#00BB00]  "
                      />
                      <Image
                        src={ster}
                        alt="ster"
                        className="fill-[#00BB00]  "
                      />
                      <Image
                        src={ster}
                        alt="ster"
                        className="fill-[#00BB00]  "
                      />
                      <Image
                        src={ster}
                        alt="ster"
                        className="fill-[#00BB00]  "
                      />
                    </div>
                    <div className="flex flex-col justify-between gap-[16px] h-full ">
                      <div>
                        <p className="text-[#7d7d7d] text-[17px] font-[400] leading-[22px] ">
                          "This is actually the best service that I've
                          downloaded for browser, great work guys."
                        </p>
                      </div>
                      <div className="flex justify-between ">
                        <span
                          className={`${ibm_plex_mono.className} text-[#32302f] text-[16px] font-[500] leading-[24px] `}
                        >
                          Mhamad Mstafa
                        </span>
                        <span
                          className={`${ibm_plex_mono.className} text-[#32302f] text-[16px] font-[500] leading-[24px] hover:underline `}
                        >
                          Chrome store
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-[360px] w-full  h-[360px] border-2 border-[#FFE275] p-[32px] rounded-[8px]">
                  <div className=" flex flex-col gap-[20px] h-full ">
                    <div className="flex gap-[5px] ">
                      <Image
                        src={ster}
                        alt="ster"
                        className="fill-[#00BB00]  "
                      />
                      <Image
                        src={ster}
                        alt="ster"
                        className="fill-[#00BB00]  "
                      />
                      <Image
                        src={ster}
                        alt="ster"
                        className="fill-[#00BB00]  "
                      />
                      <Image
                        src={ster}
                        alt="ster"
                        className="fill-[#00BB00]  "
                      />
                      <Image
                        src={ster}
                        alt="ster"
                        className="fill-[#00BB00]  "
                      />
                    </div>
                    <div className="flex flex-col justify-between gap-[16px] h-full ">
                      <div>
                        <p className="text-[#7d7d7d] text-[17px] font-[400] leading-[22px] ">
                          "This is actually the best service that I've
                          downloaded for browser, great work guys."
                        </p>
                      </div>
                      <div className="flex justify-between ">
                        <span
                          className={`${ibm_plex_mono.className} text-[#32302f] text-[16px] font-[500] leading-[24px] `}
                        >
                          Mhamad Mstafa
                        </span>
                        <span
                          className={`${ibm_plex_mono.className} text-[#32302f] text-[16px] font-[500] leading-[24px] hover:underline `}
                        >
                          Chrome store
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center bg-[#ffffff]">
        <div className="max-w-screen-2xl  w-full">
          <div className=" mx-[20px] md:mx-[70px] xl:mx-[124px] bg-[#fff]  py-[40px] lg:py-[120px] md:px-[24px] xl:px-[30px] ">
            <div className="w-full  flex flex-col justify-center items-center">
              <div className="mb-[30px] flex flex-col justify-center items-center gap-[32px] ">
                <h2 className="text-[#32302f] text-[38px] font-[600] leading-[48px] text-center max-w-[695px] md:text-[48px] md:leading-[56px]">
                  Never miss another episode, movie, match or game!
                </h2>

                <button className="text-[#fff] text-[14px] font-[500] leading-[20px] text-center md:text-[17px] md:leading-[23px] px-[20px]  md:px-[32px] py-[20px] bg-[#32302F] rounded-4xl flex items-center gap-[12px] ">
                  Download Hola today!
                  <ArrowRight className="w-[22px] h-[18px] " />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center bg-[#ffffff]">
        <div className="max-w-screen-2xl  w-full">
          <div className=" mx-[24px] md:mx-[70px] xl:mx-[124px] bg-[#fff] px-[16px] py-[20px] md:px-[24px] xl:px-[30px] ">
            <div className="w-full  flex flex-col justify-center items-center">
              <div className="w-full h-[2px] bg-[#E9E8E8] "></div>

              <div className="flex flex-col justify-between gap-[20px] md:flex-row w-full px-[50px] mt-[80px] ">
                <div className="flex flex-col  gap-[16px] ">
                  <h4 className="text-[#32302f] text-[16px] font-[600] leading-[22px] ">
                    Support
                  </h4>
                  <div className="flex flex-col gap-[24px] ">
                    <Link
                      href={"#"}
                      className="text-[#32302f] text-[14px] font-[400] leading-[19px] hover:underline "
                    >
                      Help center
                    </Link>
                    <Link
                      href={"#"}
                      className="text-[#32302f] text-[14px] font-[400] leading-[19px] hover:underline "
                    >
                      Setup guides
                    </Link>
                    <Link
                      href={"#"}
                      className="text-[#32302f] text-[14px] font-[400] leading-[19px] hover:underline "
                    >
                      Troubleshooting
                    </Link>
                    <Link
                      href={"#"}
                      className="text-[#32302f] text-[14px] font-[400] leading-[19px] hover:underline "
                    >
                      Account support
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-[16px] ">
                  <h4 className="text-[#32302f] text-[16px] font-[600] leading-[22px] ">
                    Policies & Press
                  </h4>
                  <div className="flex flex-col gap-[24px] ">
                    <Link
                      href={"#"}
                      className="text-[#32302f] text-[14px] font-[400] leading-[19px] hover:underline"
                    >
                      Privacy
                    </Link>
                    <Link
                      href={"#"}
                      className="text-[#32302f] text-[14px] font-[400] leading-[19px] hover:underline "
                    >
                      Terms
                    </Link>
                    <Link
                      href={"#"}
                      className="text-[#32302f] text-[14px] font-[400] leading-[19px] hover:underline"
                    >
                      DMCA Policy
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-[16px] ">
                  <h4 className="text-[#32302f] text-[16px] font-[600] leading-[22px] ">
                    Get in touch
                  </h4>
                  <div className="flex flex-col gap-[24px] ">
                    <Link
                      href={"#"}
                      className="text-[#32302f] text-[14px] font-[400] leading-[19px]  hover:underline"
                    >
                      Contact Us
                    </Link>
                    <Link
                      href={"#"}
                      className="text-[#32302f] text-[14px] font-[400] leading-[19px] hover:underline"
                    >
                      Report Abuse
                    </Link>
                    <Link
                      href={"#"}
                      className="text-[#32302f] text-[14px] font-[400] leading-[19px] hover:underline"
                    >
                      Press Kit
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full h-[2px] bg-[#E9E8E8] mt-[40px] "></div>
              <div className="py-[30px]">
                <p
                  className={`${ibm_plex_mono.className} text-[#7d7d7d] text-[12px] font-[500] leading-[18px]  `}
                >
                  © Copyright 2024 Hola VPN Ltd. | All rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
