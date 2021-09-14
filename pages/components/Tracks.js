import Image from "next/image";
import emoji from "../../public/Tracks logo/emoji_events.svg";
import military from "../../public/Tracks logo/military_tech.svg";
import connect from "../../public/Tracks logo/connect_without_contact.svg";
import hero from "../../public/Tracks logo/Flow-01 1.svg";

function Tracks() {
  return (
    <>
      <div className="flex flex-col justify-between items-center md:w-[45rem] lg:w-[90rem] md:pl-48 md:flex-row">
        <div className="flex flex-col md:grid grid-cols-[20] mt-20 text-blue-50">
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-[1px] bg-[#1563FC] pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#3A2DCE] shadow border-4 border-solid border-[#CECCE3]"></div>
            </div>
            <div className=" col-start-6 col-end-10 p-4 rounded-xl my-4 md:ml-16 shadow-md flex justify-between items-center w-80 md:w-96">
              <h3 className="font-semibold text-lg mb-1 text-black">
                Choose Tracks
              </h3>
              <div className="w-14 h-14 bg-[#FDEFD0] rounded-lg flex justify-center items-center">
                <Image src={emoji} alt="emoji" className="p-10" />
              </div>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-[1px] bg-[#1563FC] pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#3A2DCE] shadow border-4 border-solid border-[#CECCE3]"></div>
            </div>
            <div className=" col-start-6 col-end-10 p-4 rounded-xl my-4 md:ml-16 mr-auto shadow-md flex justify-between items-center w-80 md:w-96">
              <h3 className="font-semibold text-lg mb-1 text-black">
                Solve Challenges
              </h3>
              <div className="w-14 h-14 bg-[#F1FEF4] rounded-lg flex justify-center items-center">
                <Image src={military} alt="emoji" className="p-10" />
              </div>
            </div>
          </div>
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-[1px] bg-[#1563FC] pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#3A2DCE] shadow border-4 border-solid border-[#CECCE3]"></div>
            </div>
            <div className="bg-white col-start-6 col-end-10 p-4 rounded-xl my-4 md:ml-16 mr-auto shadow-md flex justify-between items-center w-80 md:w-96">
              <h3 className="font-semibold text-lg mb-1 text-black">
                Engage with Community
              </h3>
              <div className="w-14 h-14 bg-[#E4E1FD] rounded-lg flex justify-center items-center">
                <Image src={connect} alt="emoji" className="p-10" />
              </div>
            </div>
          </div>
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-[1px] bg-[#1563FC] pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#3A2DCE] shadow border-4 border-solid border-[#CECCE3]"></div>
            </div>
            <div className="bg-white col-start-6 col-end-10 p-4 rounded-xl my-4 md:ml-16 mr-auto shadow-md flex justify-between items-center w-80 md:w-96">
              <h3 className="font-semibold text-lg mb-1 text-black">
                Get Feedback
              </h3>
              <div className="w-14 h-14 bg-[#FDEFD0] rounded-lg flex justify-center items-center">
                <Image src={emoji} alt="emoji" className="p-10" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-28">
          <Image src={hero} alt="hero" />
        </div>
      </div>
    </>
  );
}

export default Tracks;
