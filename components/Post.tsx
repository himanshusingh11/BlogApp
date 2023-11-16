// post.tsx

import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";

const Post = (props: PostProps) => {
  let slug = props.title?.toLowerCase().replaceAll(" ", "-");

  return (
    <div className="mb-4 w-full px-2 md:w-1/2 lg:w-1/2 xl:w-1/2">
      <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow-lg">
        <Link href={`/${slug}`}>
          <div className="cursor-pointer">
            <Image
              src={props.image}
              alt={props.title}
              width={300}
              height={210}
              className="h-48 w-full object-cover"
            />
          </div>
        </Link>

        <div className="p-4">
          <div className="mb-3 flex items-start">
            <div className="mr-2 rounded-md bg-gray-500 px-2 py-1 text-sm font-semibold text-white">
              {props.tag}
            </div>
            <div className="rounded-md bg-gray-200 px-2 py-1 text-sm font-medium">
              <time dateTime={props.date.toString()}>
                {dayjs(props.date).format("DD MMMM, YYYY")}
              </time>
            </div>
          </div>

          <Link href={`/${slug}`}>
            <h2 className="cursor-pointer text-xl font-bold hover:underline">
              {props.title}
            </h2>
          </Link>

          <p className="mt-2 text-sm">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;

interface PostProps {
  tag: string;
  date: string;
  title: string;
  description: string;
  image: string;
}
