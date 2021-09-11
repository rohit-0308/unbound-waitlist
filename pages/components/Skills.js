import Image from "next/image";
import hero from "../../public/Skills/newgen-01 1.svg";
import python from "../../public/Skills/4 1.svg";
import js from "../../public/Skills/3 1.svg";
import java from "../../public/Skills/6 1.svg";
import golang from "../../public/Skills/7 1.svg";
import react from "../../public/Skills/1 1.svg";
import node from "../../public/Skills/2 1.svg";
import firebase from "../../public/Skills/8 1.svg";
import css from "../../public/Skills/5 1.svg";

function Skills() {
  return (
    <div className="flex flex-col-reverse mt-20 px-12 justify-center items-center md:flex-row md:px-40 md:justify-center md:items-center">
      <Image
        src={hero}
        alt="hero"
        className="order-2 "
        height={553}
        width={553}
      />

      <div className="flex flex-col w-96 md:w-[40rem] md:pl-20">
        <p className="font-bold text-4xl px-12 pb-6 md:text-5xl">
          Learn New Skills with New gen developer platform
        </p>
        {/* Top */}
        <div className="px-12 py-8 flex justify-between md:pr-20 ">
          <div className="h-16 w-16 shadow-xl rounded-lg flex">
            <Image
              src={python}
              alt="python"
              className="p-3 justify-center items-center"
            />
          </div>
          <div className="h-16 w-16 shadow-xl rounded-lg flex">
            <Image
              src={js}
              alt="js"
              className="p-3 justify-center items-center"
            />
          </div>
          <div className="h-16 w-16 shadow-xl rounded-lg flex">
            <Image src={java} alt="java" className="p-3" />
          </div>
          <div className="h-16 w-16 shadow-xl rounded-lg flex">
            <Image src={golang} alt="golang" className="p-3" />
          </div>
        </div>

        {/* Down */}
        <div className="px-12 py-8 flex justify-between md:pr-20">
          <div className="h-16 w-16 shadow-xl rounded-lg flex">
            <Image
              src={react}
              alt="react"
              className="p-3 justify-center items-center"
            />
          </div>
          <div className="h-16 w-16 shadow-xl rounded-lg flex">
            <Image
              src={node}
              alt="node"
              className="p-3 justify-center items-center"
            />
          </div>
          <div className="h-16 w-16 shadow-2xl rounded-lg flex">
            <Image src={firebase} alt="firebase" className="p-3" />
          </div>
          <div className="h-16 w-16 shadow-xl rounded-lg flex">
            <Image src={css} alt="css" className="p-3" />
          </div>
        </div>

        <p className="font-bold flex justify-center items-center">
          Many More..
        </p>
      </div>
    </div>
  );
}

export default Skills;
