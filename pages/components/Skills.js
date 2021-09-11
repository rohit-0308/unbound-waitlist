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
    <div className="flex flex-col-reverse mt-20 px-12 md:flex-row md:px-48">
      <Image src={hero} alt="hero" className="order-2" />

      <div className="flex flex-col md:w-[48rem] ">
        <p className="font-bold text-4xl px-12 md:text-5xl">
          Learn New Skills with New gen developer Platform
        </p>
        <div className="px-12 py-8 flex justify-between ">
          <div className="h-16 w-16 shadow-xl rounded flex">
            <Image
              src={python}
              alt="python"
              className="p-3 justify-center items-center"
            />
          </div>
          <div className="h-16 w-16 shadow-xl rounded flex">
            <Image
              src={js}
              alt="js"
              className="p-3 justify-center items-center"
            />
          </div>
          <div className="h-16 w-16 shadow-xl rounded flex">
            <Image src={java} alt="java" className="p-3" />
          </div>
          <div className="h-16 w-16 shadow-xl rounded flex">
            <Image src={golang} alt="golang" className="p-3" />
          </div>
        </div>

        <div className="px-12 py-8 flex justify-between ">
          <div className="h-16 w-16 shadow-xl rounded flex">
            <Image
              src={react}
              alt="react"
              className="p-3 justify-center items-center"
            />
          </div>
          <div className="h-16 w-16 shadow-xl rounded flex">
            <Image
              src={node}
              alt="node"
              className="p-3 justify-center items-center"
            />
          </div>
          <div className="h-16 w-16 shadow-xl rounded flex">
            <Image src={firebase} alt="firebase" className="p-3" />
          </div>
          <div className="h-16 w-16 shadow-xl rounded flex">
            <Image src={css} alt="css" className="p-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
