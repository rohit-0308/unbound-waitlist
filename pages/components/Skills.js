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
    <div className="flex flex-col-reverse mt-16 px-12 justify-center items-center md:flex-row md:px-40 md:justify-center md:items-center">
      <Image
        src={hero}
        alt="hero"
        className="order-2 "
        height={553}
        width={553}
      />

      <div className="flex flex-col w-96 md:w-[40rem] md:pl-20 items-center">
        <p className="font-bold text-4xl px-12 pb-6 md:text-5xl">
          Learn New Skills with New gen developer platform
        </p>
        {/* Top */}
        <div className="px-12 py-8 flex justify-between w-[26rem] md:w-[34rem] md:pr-20 ">
          <div className="skills">
            <Image src={python} alt="python" className="p-3" />
          </div>
          <div className="skills">
            <Image src={js} alt="js" className="p-3" height={80} width={50} />
          </div>
          <div className="skills">
            <Image src={java} alt="java" className="p-3" />
          </div>
          <div className="skills">
            <Image
              src={golang}
              alt="golang"
              className="p-3"
              height={80}
              width={50}
            />
          </div>
        </div>

        {/* Down */}
        <div className="px-12 py-8 flex justify-between w-[26rem] md:w-[34rem] md:pr-20">
          <div className="skills">
            <Image
              src={react}
              alt="react"
              className="p-3"
              height={80}
              width={50}
            />
          </div>
          <div className="skills">
            <Image
              src={node}
              alt="node"
              className="p-3"
              height={80}
              width={50}
            />
          </div>
          <div className="skills">
            <Image
              src={firebase}
              alt="firebase"
              className="p-3"
              height={80}
              width={50}
            />
          </div>
          <div className="skills">
            <Image src={css} alt="css" className="p-3" height={80} width={50} />
          </div>
        </div>
        <p className="font-bold flex justify-center items-center mb-8">
          Many More..
        </p>
      </div>
    </div>
  );
}

export default Skills;
