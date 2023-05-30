import Link from "next/link";
import Image from "next/legacy/image";

export default function ProjectItem({ data }) {
  const title = data.properties.Name.title[0].plain_text;
  const description = data.properties.Description.rich_text[0].plain_text;
  const image = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.Tags.multi_select;
  const state = data.properties.Status?.status.name;
  const start = data.properties.WorkPeriod.date.start;

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
      : data.properties.WorkPeriod.date.end;

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
    <div className="project-card">
      <Link href={`/detail/${data.id}`}>
        <div>
          <Image
            className="rounded-t-xl"
            src={image}
            layout="responsive"
            objectFit="cover"
            quality={100}
            width="100%"
            height="60%"
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
          <div className="flex items-start mt-2 overflow-scroll relative">
            {tags.map((tag) => (
              <span
                className="odd:bg-violet-300 odd:dark:bg-violet-700/20 even:bg-rose-300 even:dark:bg-rose-700/20 px-2 py-1 mr-2 rounded-md w-30"
                key={tag.id}
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}
