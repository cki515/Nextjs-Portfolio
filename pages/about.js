import Head from "next/head";
import Layout from "../components/layout";

export default function About() {
  return (
    <>
      <Layout>
        <div className="flex flex-col items-start justify-center min-h-screen px-6 mb-10">
          <Head>
            <title>About Me</title>
            <meta name="description" content="Nextjs portfolio app" />
            <link draggable="false" rel="icon" href="/favicon.ico" />
          </Head>
          <div className="flex flex-col p-3 gap-y-3 sm:mt-5">
            <p className="text-2xl font-bold"># INFOMATION</p>
            <hr />
            <div className="flex gap-2 text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                />
              </svg>
              <p>Kwangil (Colin) Choi</p>
            </div>
            <hr />
            <div className="flex gap-2 text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <p>02 - 7526 - 4655</p>
            </div>

            <hr />
            <div className="flex gap-2 text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <p>kwangilstory@gmail.com</p>
            </div>
            <hr />
            <div className="flex gap-2 text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <p>
                5A KIMBERLEY ST <br />
                CASEBROOK <br />
                CHRISTCHURCH
              </p>
            </div>
            <hr />
            <div className="my-8"></div>
            <p className="text-2xl font-bold"># TECHNICAL EXPERIENCES</p>
            <hr />
            <p className="text-xl">- PROGRAMMING LANGUAGES: Java, JavaScript</p>
            <hr />
            <p className="text-xl">
              - WEB CLIENT LANGUAGES: HTML, JavaScript, CSS
            </p>
            <hr />
            <p className="text-xl">
              - WEB SERVER SCRIPTING LANGUAGES: JavaScript, PHP, Jsp, React,
              Next.js
            </p>
            <hr />
            <p className="text-xl">- DATABASE PRODUCTS: MySQL, Maria DB</p>
            <hr />
          </div>
        </div>
      </Layout>
    </>
  );
}
