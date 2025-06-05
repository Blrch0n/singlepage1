"use client";

import NewsDetails from "@/app/components/NewsID/NewsDetails";
import NewsHero from "@/app/components/NewsID/NewsHero";
import NewsSlider from "@/app/components/NewsID/NewsSlider";
import { useParams } from "next/navigation";

const page = () => {
  const { news_id } = useParams();
  return (
    <>
      <section className="w-full mx-auto h-fit flex flex-col">
        <NewsHero imageUrl={"/image1.jpg"} title={"Kitchen Stories"} />
        <div className="max-w-[1200px] w-full mx-auto h-fit flex flex-col justify-center gap-8 p-8">
          <NewsSlider />
          <NewsDetails />
        </div>
      </section>
    </>
  );
};

export default page;
