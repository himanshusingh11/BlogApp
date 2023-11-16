// index.tsx

import Header from "../components/Header";
import Post from "../components/Post";
import Pagination from "../components/Pagination";
import { posts as data } from "../data/post";
import dayjs from "dayjs";

export default function Home({ posts }: HomePageProps) {
  return (
    <>
      <Header />

      <main className="container mx-auto flex flex-col p-3">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
          {posts?.map((item: ItemProps) => {
            let getDate = dayjs(item.date).format("DD-MMM , YYYY");

            return (
              <div key={item.id} className="flex justify-center">
                <Post
                  tag={item.tags[0]}
                  date={getDate.toString()}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              </div>
            );
          })}
        </div>

        <Pagination />
      </main>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { posts: data },
  };
}

interface HomePageProps {
  posts: ItemProps[];
}

interface ItemProps {
  date: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  author: string;
  category: string[];
  id: string;
}
