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
    "Under $50,000",
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
    <div className="flex justify-center  items-center w-full px-5 mt-[100px]">
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
            <div className=" lg:flex hidden sm:flex-row sm:w-auto w-full flex-col justify-between items-center gap-8">
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
                      className="bg-white border-[1px] rounded-tl-md rounded-bl-md border-solid border-[#D4DCDC] h-[45px] sm:w-[200px] w-[250px] focus:outline-none pl-3"
                    />
                    <button className="rounded-tr-md rounded-br-md w-[90px] sm:w-[80px] h-[45px] text-white bg-main  hover:bg-[#21d98d]  transition-all text-base font-bold">
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
        <form
          id="about"
          className="flex justify-center items-center flex-col gap-5 w-full lg:w-1/2"
          action="https://public.herotofu.com/v1/8fed0d70-2e42-11ed-9d7d-1fea1503699b" method="POST"
        >
          <div className="flex justify-center sm:flex-row flex-col w-full items-center gap-4">
            <div className="flex justify-center  w-full items-start flex-col gap-2">
              <label className="text-white text-base" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="Name:"
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
                name="Phone:"
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
              name="Email:"
              className="w-full border-gray-600 rounded-lg pl-3 bg-white text-black h-[50px] text-lg"
            />
          </div>
          {/* drop downs ----------------------- */}
          <div className="relative w-full flex justify-start items-start flex-col gap-2">
            <label htmlFor="job-type" className="text-white text-lg">Looking for</label>
            <select name="Looking For:" id="job-type" className={`flex justify-between cursor-pointer items-center text-lg ${
                drop[0]
                  ? "rounded-br-none rounded-bl-none rounded-tr-lg rounded-tl-lg"
                  : "rounded-lg"
              } px-3 bg-white text-black h-[50px] w-full`}>
              <option value="Complete Product(s) Development">Complete Product(s) Development</option>
              <option value="Prototype/MVP">Prototype/MVP</option>
              <option value="Other Enquiry">Other Enquiry</option>
            </select>
          </div>
          <div className="relative w-full flex justify-start items-start flex-col gap-2">
            <label htmlFor="time" className="text-white text-lg">I would like to start</label>
            <select name="I would like to start:" id="time" className={`flex justify-between cursor-pointer items-center text-lg ${
                drop[1]
                  ? "rounded-br-none rounded-bl-none rounded-tr-lg rounded-tl-lg"
                  : "rounded-lg"
              } px-3 bg-white text-black h-[50px] w-full`}>
              <option value="As soon as possible">As soon as possible</option>
              <option value="Within the month">Within the month</option>
              <option value="1-3 months from now, No specified date">1-3 months from now, No specified date</option>
            </select>
          </div>
          <div className="relative w-full flex justify-start items-start flex-col gap-2">
            <label htmlFor="budget" className="text-white text-lg">My budget range</label>
            <select name="Budget:" id="budget" className={`flex justify-between cursor-pointer items-center text-lg ${
                drop[2]
                  ? "rounded-br-none rounded-bl-none rounded-tr-lg rounded-tl-lg"
                  : "rounded-lg"
              } px-3 bg-white text-black h-[50px] w-full`}>
              <option value="Under $50,000">Under $50,000</option>
              <option value="$50,000 - $250,000">$50,000 - $250,000</option>
              <option value="$250,000 - $500,000">$250,000 - $500,000</option>
              <option value="Above $500,000">Above $500,000</option>
            </select>
          </div>
          {/* drop downs ends ------------------------ */}
          <div className="flex justify-center  w-full items-start flex-col gap-2">
            <label className="text-white text-base" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="Message:"
              className="resize-none w-full border-gray-600 rounded-lg p-3  bg-white text-black h-[150px] text-lg"
            ></textarea>
          </div>
          <input type="submit" value="Send Inquiry" className="w-full xl:w-[260px] h-[50px] text-white bg-main rounded-md hover:bg-[#21d98d] hover:scale-105 transition-all text-base font-bold" />
        </form>
        <Fade delay={1100}>
          <div className=" lg:hidden flex sm:flex-row sm:w-auto w-full flex-col justify-between items-center gap-8">
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
                    className="bg-white border-[1px] rounded-tl-md rounded-bl-md border-solid border-[#D4DCDC] h-[45px] sm:w-[200px] w-[250px] focus:outline-none pl-3"
                  />
                  <button className="rounded-tr-md rounded-br-md w-[90px] sm:w-[80px] h-[45px] text-white bg-main  hover:bg-[#21d98d]  transition-all text-base font-bold">
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
    </div>
  );
}

export default About;
