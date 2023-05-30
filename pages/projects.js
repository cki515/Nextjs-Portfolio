import Head from "next/head";
import Layout from "../components/layout";
import ProjectItem from "../components/projects/project-item";

export default function Projects({ projects }) {
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-screen px-6 mb-10">
          <Head>
            <title>Portfolio</title>
            <meta name="description" content="Nextjs portfolio app" />
            <link draggable="false" rel="icon" href="/favicon.ico" />
          </Head>
          <div className="pt-10 text-4xl font-bold sm:text-6xl">
            All Projects :
            <span className="pl-4 text-violet-600">
              {projects.results.length}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-6 py-10">
            {projects.results.map((project) => (
              <ProjectItem key={project.id} data={project} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: "Bearer " + process.env.NOTION_TOKEN,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "WorkPeriod",
          direction: "descending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    "https://api.notion.com/v1/databases/" +
      process.env.NOTION_DATABASE_ID +
      "/query",
    options
  );
  const projects = await res.json();
  return {
    props: {
      projects: projects,
    },
    revalidate: 3600,
  };
}
