import Image from "next/image";
import logo from "../../public/unbound logo 1.svg";
import hero from "../../public/hero-1.svg";
import emoji from "../../public/Waitlist Logos/emoji_events.svg";
import library from "../../public/Waitlist Logos/local_library.svg";
import terrain from "../../public/Waitlist Logos/terrain.svg";

function Header() {
  return (
    <div className="bg-gradient-to-br from-[#B4C2F2] via-[#F5F7FFAF] to-[#FFFFFF]">
      <div className="flex w-full px-12 py-0 justify-between md:px-48">
        {/* Right */}
        <Image
          src={logo}
          alt="unbound"
          height={150}
          width={150}
          className="cursor-pointer"
        />

        {/* Left */}
        <div className="hidden space-x-6 items-center lg:flex">
          <button className="uppercase hover:text-[#050b7d] mr-7">
            Join The Community
          </button>
          <button className="waitlist">
            <span className="m-7">Join The Waitlist</span>
          </button>
        </div>
      </div>

      <section className="flex flex-col pl-12 pr-12 py-10 justify-between items-center md:pl-48 md:flex-row">
        <div className="flex flex-col ">
          <p className="font-bold text-4xl md:text-5xl">
            Learn and Become a <br /> Professional Developer
          </p>
          <p className="py-4 text-gray-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas maxime{" "}
            <br />
            placeat nulla veniam repellendus veniam?
          </p>
          <button className="waitlist mt-12 w-full lg:w-[217px]">
            <span className="m-7">Join The Waitlist</span>
          </button>
        </div>
        <Image
          src={hero}
          alt="hero"
          height={400}
          width={880}
          className="cursor-pointer"
        />
      </section>

      <section className="px-12 pt-14 pb-10 md:px-48 md:pt-8">
        <div className="flex flex-col justify-between bg-white shadow-lg h-60 w-full p-6 md:px-14 md:h-24 md:flex-row">
          <div className="flex items-center">
            <Image
              src={emoji}
              alt="emoji"
              width={38}
              height={37}
              className="bg-[#FDEFD0] rounded-full p-4"
            />
            <h4 className="pl-4 font-semibold">UI Challenges</h4>
          </div>
          <div className="flex items-center">
            <Image
              src={library}
              alt="library"
              className="bg-[#F1FEF4] rounded-full"
            />
            <h4 className="pl-4 font-semibold">Developer Tracks</h4>
          </div>
          <div className="flex items-center">
            <Image
              src={terrain}
              alt="terrain"
              className="bg-[#E4E1FD] rounded-full"
            />
            <h4 className="pl-4 font-semibold">Product Mindset</h4>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
