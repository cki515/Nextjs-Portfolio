import Layout from "../../components/layout";
import Link from "next/link";
import Image from "next/legacy/image";
import Head from "next/head";

export default function ProjectDetail({ project }) {
  const title = project.properties.Name.title[0].plain_text;
  const github = project.properties.Github.url;
  const description = project.properties.Description.rich_text[0].plain_text;
  const image = project.cover.file?.url || project.cover.external.url;
  const tags = project.properties.Tags.multi_select;
  const state = project.properties.Status?.status.name;
  const start = project.properties.WorkPeriod.date.start;
  const text = project.properties.Text.rich_text[0]?.plain_text;
  const url = project.properties.URL?.url;

  const dateToStr = (date) => {
    //   Sat May 13 2023 19:57:36
    //   2023-05-13
    const pad = (n) => {
      return n < 10 ? "0" + n : n;
    };
    return (
      date.getFullYear() +
      "-" +
      pad(date.getMonth() + 1) +
      "-" +
      pad(date.getDate())
    );
  };

  const end =
    state === "In progress"
      ? dateToStr(new Date())
      : project.properties.WorkPeriod.date.end;

  const stateColor =
    (state === "Done"
      ? "bg-orange-300 dark:bg-orange-700/60"
      : "bg-lime-300 dark:bg-lime-700/60") + " px-2 py-2 mr-2 rounded-md w-30";

  const calculatedPeriod = (start, end) => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    var startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1],
      startDateStringArray[2]
    );
    var endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1],
      endDateStringArray[2]
    );

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    return result;
  };

  return (
    <>
      <Layout>
        <Head>
          <title>Portfolio_Detail</title>
          <meta name="description" content="Nextjs portfolio app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex flex-col mt-10 rounded-xl">
          <div>
            <Image
              className="rounded-t-xl"
              src={image}
              layout="responsive"
              objectFit="contain"
              quality={100}
              width={50}
              height={20}
              alt="cover image"
              priority="false"
            />
          </div>
          <div className="flex flex-col p-4">
            <span className="my-2 text-3xl font-bold hover:text-indigo-800">
              {title}
            </span>
            <hr />
            <span className="my-2 text-xl whitespace-pre-wrap">
              {description}
            </span>
            <hr />
            <div className="my-3">
              Status : <span className={stateColor}>{state}</span>
            </div>
            <hr />
            <p className="my-2">
              Period : {start} ~ {state === "In progress" ? "" : end} (
              {calculatedPeriod(start, end) > 1
                ? calculatedPeriod(start, end) + " days"
                : "1 day"}
              )
            </p>
            <hr />
            <span className="my-2 text-xl whitespace-pre-wrap">{text}</span>
            <hr />
            <Link
              className="hover:text-red-700 my-2"
              href={github}
              target="_blank"
            >
              Go to Github
            </Link>
            {url && (
              <>
                <hr />
                <Link
                  className="hover:text-red-700 my-2"
                  href={url}
                  target="_blank"
                >
                  {url}
                </Link>
              </>
            )}
            <hr />
            <div className="flex items-start mt-2 my-2">
              {tags.map((tag) => (
                <span
                  className="odd:bg-violet-300 odd:bg-violet-700/20 even:bg-rose-300 even:dark:bg-rose-700/20 px-2 py-1 mr-2 rounded-md w-30"
                  key={tag.id}
                >
                  {tag.name}
                </span>
              ))}
            </div>
            <hr />
            <Link
              className="mt-2 p-2 flex justify-center text-white bg-indigo-500 hover:bg-indigo-600 text-lg rounded-md w-24"
              href="/projects"
            >
              Go Back
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: "Bearer " + process.env.NOTION_TOKEN,
    },
  };

  const res = await fetch(
    "https://api.notion.com/v1/databases/" +
      process.env.NOTION_DATABASE_ID +
      "/query",
    options
  );
  const projects = await res.json();
  const project = projects.results.find(
    (project) => project.id === id && project
  );
  return {
    props: {
      project: project,
    },
  };
}
