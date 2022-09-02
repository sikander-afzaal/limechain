import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Fade } from "react-reveal";
import logo from "../../Assets/logo.png";
function About() {
  const [drop, setDrop] = useState([false, false, false]);
  const [dropText, setDropText] = useState([
    "Complete Product(s) Development",
    "As soon as possible",
    "Up to $10,000",
  ]);
  const settingDropText = (e, num) => {
    setDrop((prev) => {
      return [false, false, false];
    });
    setDropText((prev) => {
      let copy = [...prev];
      copy[num] = e.target.innerText;
      return copy;
    });
  };
  return (
    <div
      id="about"
      className="flex justify-center  items-center w-full px-5 mt-[100px]"
    >
      <div className="flex isolate gap-10 justify-center items-start lg:flex-row flex-col  w-full 3xl:max-w-[2000px] max-w-[1244px] relative">
        <div className="flex isolate gap-10 justify-center items-start flex-col w-full lg:w-1/2">
          <Fade top>
            <h1 className="text-head text-4xl sm:text-5xl font-bold max-w-[900px]">
              Labz has a mission to provide our partners with cutting-edge
              blockchain & Web3 products
            </h1>
          </Fade>
          <Fade bottom delay={500}>
            <p className="text-text text-xl sm:text-2xl font-normal max-w-[700px]">
              Labz is passionate about creating decentralised application
              ecosystems which catalyses the adoption challenge of blockchain
              technology. We provide holistic solutions for our clients in their
              transition from Web2 to Web3.
            </p>
          </Fade>
          <Fade delay={1100}>
            <div className="flex sm:flex-row sm:w-auto w-full flex-col justify-between items-center gap-8">
              <img src={logo} className="w-[200px]" alt="" />{" "}
              <div className="  flex flex-col justify-start items-center gap-3">
                <h2 className="text-sm font-semibold text-head">
                  Subscribe to receive updates
                </h2>
                <div className=" flex flex-col justify-center items-start gap-1">
                  <div className=" flex justify-start items-start  ">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-white border-[1px] rounded-tl-md rounded-bl-md border-solid border-[#D4DCDC] h-[45px] w-[250px] focus:outline-none pl-3"
                    />
                    <button className="rounded-tr-md rounded-br-md w-[90px] sm:w-[108px] h-[45px] text-white bg-main  hover:bg-[#21d98d]  transition-all text-base font-bold">
                      Submit
                    </button>
                  </div>
                  <div className="flex gap-2 justify-center items-center">
                    <input type="checkbox" />
                    <p className="text-white font-normal text-sm">
                      I have read and I agree to Labz Privacy Policy
                    </p>
                  </div>
                </div>
                <div className="flex self-start justify-start items-start gap-1 mt-2 flex-col">
                  <h2 className="text-head font-bold text-[18px]">The labz</h2>
                  <p className="text-text text-base">
                    83 friar gate, Derby, <br /> DE1 1FL, Uk
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <form className="flex justify-center items-center flex-col gap-5 w-full lg:w-1/2">
          <div className="flex justify-center sm:flex-row flex-col w-full items-center gap-4">
            <div className="flex justify-center  w-full items-start flex-col gap-2">
              <label className="text-white text-base" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border-gray-600 rounded-lg pl-3 bg-white text-black h-[50px] text-lg"
              />
            </div>
            <div className="flex justify-center  w-full items-start flex-col gap-2">
              <label className="text-white text-base" htmlFor="phone">
                Phone
              </label>
              <input
                type="number"
                id="phone"
                className="w-full border-gray-600 rounded-lg pl-3 bg-white text-black h-[50px] text-lg"
              />
            </div>
          </div>
          <div className="flex justify-center  w-full items-start flex-col gap-2">
            <label className="text-white text-base" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-gray-600 rounded-lg pl-3 bg-white text-black h-[50px] text-lg"
            />
          </div>
          {/* drop downs ----------------------- */}
          <div className="relative w-full flex justify-start items-start flex-col gap-2">
            <p className="text-white text-lg">Looking for</p>
            <p
              onClick={() =>
                setDrop((prev) => {
                  if (prev[0] === false) {
                    return [true, false, false];
                  } else {
                    return [false, false, false];
                  }
                })
              }
              className={`flex justify-between cursor-pointer items-center text-lg ${
                drop[0]
                  ? "rounded-br-none rounded-bl-none rounded-tr-lg rounded-tl-lg"
                  : "rounded-lg"
              } px-3 bg-white text-black h-[50px] w-full`}
            >
              {dropText[0]}
              <FontAwesomeIcon icon={faChevronDown} />
            </p>
            <div
              className={`z-[10] flex-col gap-5 rounded-br-lg rounded-bl-lg absolute top-full left-0 w-full bg-white  justify-start items-start p-3 ${
                drop[0] ? "flex" : "hidden"
              }`}
            >
              <p
                onClick={(e) => {
                  settingDropText(e, 0);
                }}
                className=" cursor-pointer items-center text-lg rounded-lg px-3 text-black  "
              >
                Complete Product(s) Development
              </p>
              <p
                onClick={(e) => {
                  settingDropText(e, 0);
                }}
                className=" cursor-pointer items-center text-lg rounded-lg px-3 text-black  "
              >
                Prototype/MVP
              </p>
              <p
                onClick={(e) => {
                  settingDropText(e, 0);
                }}
                className=" cursor-pointer items-center text-lg rounded-lg px-3 text-black  "
              >
                Other Enquiry
              </p>
            </div>
          </div>
          <div className="relative w-full flex justify-start items-start flex-col gap-2">
            <p className="text-white text-lg">I would like to start</p>
            <p
              onClick={() =>
                setDrop((prev) => {
                  if (prev[1] === false) {
                    return [false, true, false];
                  } else {
                    return [false, false, false];
                  }
                })
              }
              className={`flex justify-between cursor-pointer items-center text-lg ${
                drop[1]
                  ? "rounded-br-none rounded-bl-none rounded-tr-lg rounded-tl-lg"
                  : "rounded-lg"
              } px-3 bg-white text-black h-[50px] w-full`}
            >
              {dropText[1]}
              <FontAwesomeIcon icon={faChevronDown} />
            </p>
            <div
              className={`z-[10] flex-col gap-5 rounded-br-lg rounded-bl-lg absolute top-full left-0 w-full bg-white  justify-start items-start p-3 ${
                drop[1] ? "flex" : "hidden"
              }`}
            >
              <p
                onClick={(e) => {
                  settingDropText(e, 1);
                }}
                className=" cursor-pointer items-center text-lg rounded-lg px-3 text-black  "
              >
                As soon as possible
              </p>
              <p
                onClick={(e) => {
                  settingDropText(e, 1);
                }}
                className=" cursor-pointer items-center text-lg rounded-lg px-3 text-black  "
              >
                Within the month
              </p>
              <p
                onClick={(e) => {
                  settingDropText(e, 1);
                }}
                className=" cursor-pointer items-center text-lg rounded-lg px-3 text-black  "
              >
                1-3 months from now, No specified date)
              </p>
            </div>
          </div>
          <div className="relative w-full flex justify-start items-start flex-col gap-2">
            <p className="text-white text-lg">My budget range</p>
            <p
              onClick={() =>
                setDrop((prev) => {
                  if (prev[2] === false) {
                    return [false, false, true];
                  } else {
                    return [false, false, false];
                  }
                })
              }
              className={`flex justify-between cursor-pointer items-center text-lg ${
                drop[2]
                  ? "rounded-br-none rounded-bl-none rounded-tr-lg rounded-tl-lg"
                  : "rounded-lg"
              } px-3 bg-white text-black h-[50px] w-full`}
            >
              {dropText[2]}
              <FontAwesomeIcon icon={faChevronDown} />
            </p>
            <div
              className={`z-[10] flex-col gap-5 rounded-br-lg rounded-bl-lg absolute top-full left-0 w-full bg-white  justify-start items-start p-3 ${
                drop[2] ? "flex" : "hidden"
              }`}
            >
              <p
                onClick={(e) => {
                  settingDropText(e, 2);
                }}
                className=" cursor-pointer items-center text-lg rounded-lg px-3 text-black  "
              >
                Up to $10,000
              </p>
              <p
                onClick={(e) => {
                  settingDropText(e, 2);
                }}
                className=" cursor-pointer items-center text-lg rounded-lg px-3 text-black  "
              >
                $10,000 - $25,000
              </p>
              <p
                onClick={(e) => {
                  settingDropText(e, 2);
                }}
                className=" cursor-pointer items-center text-lg rounded-lg px-3 text-black  "
              >
                $25,000 - $50,000
              </p>
              <p
                onClick={(e) => {
                  settingDropText(e, 2);
                }}
                className=" cursor-pointer items-center text-lg rounded-lg px-3 text-black  "
              >
                $50,000 - $100,000
              </p>
              <p
                onClick={(e) => {
                  settingDropText(e, 2);
                }}
                className=" cursor-pointer items-center text-lg rounded-lg px-3 text-black  "
              >
                $100,000+
              </p>
            </div>
          </div>
          {/* drop downs ends ------------------------ */}
          <div className="flex justify-center  w-full items-start flex-col gap-2">
            <label className="text-white text-base" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="resize-none w-full border-gray-600 rounded-lg p-3  bg-white text-black h-[150px] text-lg"
            ></textarea>
          </div>
          <button className="w-full xl:w-[260px] h-[50px] text-white bg-main rounded-md hover:bg-[#21d98d] hover:scale-105 transition-all text-base font-bold">
            Send Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}

export default About;
