import Image from "next/image";
import logo from "../../public/unbound logo 1.svg";
import hero from "../../public/hero-1.svg";

function Header() {
  return (
    <>
      <header className="flex w-full px-28 py-0 justify-between">
        {/* Right */}
        <Image
          src={logo}
          alt="unbound"
          height={150}
          width={150}
          className="cursor-pointer"
        />

        {/* Left */}
        <div className="flex space-x-6 items-center invisible  md:visible">
          <button className="uppercase hover:text-[#050b7d] mr-7">
            Join The Community
          </button>
          <button className="waitlist">
            <span className="m-7">Join The Waitlist</span>
          </button>
        </div>
      </header>

      <section className="flex pl-28 pr-16 py-0 justify-between items-center">
        <div className="flex flex-col ">
          <h1 className="font-bold text-5xl ">
            Learn and Become a <br /> Professional Developer
          </h1>
          <p className="py-4 text-gray-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas maxime{" "}
            <br />
            placeat nulla veniam repellendus veniam?
          </p>
          <button className="waitlist mt-12">
            <span className="m-7">Join The Waitlist</span>
          </button>
        </div>
        <Image
          src={hero}
          alt="hero"
          height={400}
          width={680}
          className="invisible md:visible"
        />
      </section>
    </>
  );
}

export default Header;
