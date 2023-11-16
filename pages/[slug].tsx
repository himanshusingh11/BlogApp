import PostHeader from "../components/PostHeader";
import Image from "next/image";
import { posts as data } from "../data/post";
import dayjs from "dayjs";

export default function ReadingPage({ post, posts }: ReadingPageProps) {
  return (
    <>
      <PostHeader
        title={post.title}
        tag={post.tags[0]}
        date={dayjs(post.date).format("DD MMMM , YYYY")}
        authorName={post.author}
      />

      <div className="mx-auto my-10">
        <Image
          height="250"
          width="250"
          src={post.image}
          alt={post.title}
          className="mx-auto h-[72%] w-[1024px]"
        />
      </div>

      <div className="prose prose-stone mx-auto my-12 lg:prose-lg">
        <p className="mb-3 font-light text-gray-500 first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 first-line:uppercase first-line:tracking-widest dark:text-gray-400 dark:first-letter:text-gray-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          hic illum sint similique praesentium, labore, numquam quos quod at
          dolorum aliquam! Eaque, dolorum magni! Corporis tempore blanditiis et
          recusandae maiores.
        </p>
        <p className="font-light text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos officia
          nisi facilis asperiores aliquam eum quos vitae assumenda
          necessitatibus voluptas earum accusamus, laboriosam tenetur, ex veniam
          nemo, aliquid a. Quibusdam.
        </p>

        <p className="mb-3 font-light text-gray-500 dark:text-gray-400 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime labore
          eaque eum? Laborum autem rem exercitationem, deserunt dolore, quia
          officiis repellendus repudiandae incidunt natus voluptate distinctio
          soluta, accusantium consequuntur assumenda.
        </p>

        <div className="rounded-bl-[10px] rounded-br-[10px] bg-[rgba(235,242,254,1)] py-3.5 text-left font-normal text-[rgba(35,46,82,1)]">
          <img
            height="324px"
            width="1424px"
            className="cover"
            alt="Alt for images"
            src="https://source.unsplash.com/random/100x100"
          />
          <p className="text-center text-xs uppercase leading-normal">
            Image caption or credit
          </p>
        </div>

        <p className="font-light text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod,
          necessitatibus sunt magnam ea distinctio numquam molestias fugiat vel
          repellat aliquam dolorem molestiae voluptatum ipsum sed reprehenderit
          fugit voluptate voluptatibus eaque. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Corporis eaque, eveniet, voluptatibus
          illum cumque temporibus provident reiciendis assumenda quam beatae
          impedit iure dicta explicabo quidem animi eligendi ea molestias
          perferendis.
        </p>

        <p className="font-light text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          sint pariatur quaerat, quia adipisci illo eius sunt expedita quos
          totam tenetur? Aliquid, beatae. Repellendus eligendi perferendis nemo
          rem tempora ratione.
        </p>
      </div>
    </>
  );
}

ReadingPage.defaultProps = {};

interface ReadingPageProps {
  post: {
    date: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    author: string;
    category: string[];
    id: string;
  };
  posts: {
    map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
    filter(arg0: (_: any, i: any) => boolean): unknown;
    date: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    author: string;
    category: string[];
    id: string;
  };
}

export async function getStaticPaths() {
  const paths = data.map((item) => ({
    params: { slug: item.title.toLowerCase().replaceAll(" ", "-") },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context: { params: { slug: string } }) {
  const {
    params: { slug },
  } = context;

  const post = data.filter(
    (item) => item.title.toLowerCase().replaceAll(" ", "-") === slug
  );

  const posts = data.filter((_, i) => i < 3);

  return {
    props: { post: post[0], posts },
  };
}
