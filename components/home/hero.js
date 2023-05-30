import Link from "next/link";
import Animation from "./animation";

export default function Hero() {
  return (
    <>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Animation />
      </div>

      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-900">
          Welcome to my portfolio
          <br className="hidden" />
        </h1>
        <div className="flex flex-col mb-8 sm:text-2xl text-1xl leading-relaxed whitespace-normal">
          <span>I am a beginner Front-end developer.</span>
          <span>
            I have made this homepage using Next.js to manage my portfolio.
          </span>
        </div>
        <div className="flex justify-center">
          <Link draggable="false" href="projects">
            <button className="btn-project">Go to Projects</button>
          </Link>
        </div>
      </div>
    </>
  );
}
