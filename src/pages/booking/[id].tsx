import { generateSSGHelper } from "../../server/helpers/ssgHelper";
import type { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button } from "../../Components/UI/button";
import { api } from "axios  @tanstack/react-query/utils/api";
import path from "path";

export default function Page({ id }: { id: string }) {
  const [responseData, setResponseData] = useState();

  console.log("id", id);
  const { data, isFetched, error, isError } =
    api.Vechicle.getVechicleById.useQuery({
      id,
    });

  console.log(data);
  return (
    <>
      {isError && error.data}
      <div className=" flex  h-screen   items-center justify-center  bg-zinc-950 text-white lg:-mt-16  lg:h-screen">
        <div className="m-5 flex  w-screen flex-col rounded-xl border  md:w-3/4 lg:my-0 lg:h-3/5 lg:flex-row  lg:border xl:h-3/5  xl:w-2/3 2xl:w-1/2">
          <div className="mx-2 flex w-full justify-center p-5 md:mx-2 md:h-1/2 md:p-10  lg:h-full lg:w-3/4 lg:p-10  2xl:w-full  ">
            <img
              className="h-80 w-2/4 rounded-xl md:w-1/2 lg:h-full lg:w-full  "
              src="https://i.pinimg.com/736x/a7/b2/07/a7b207049d7cf83efc9e0c9a0e5076a9.jpg"
            />
          </div>
          <div className="w-full md:mx-0 lg:w-screen">
            <div className=" flex w-full items-center justify-center md:mt-10 lg:mt-5 lg:justify-start">
              <h1 className=" text-2xl font-bold  lg:p-10 lg:text-3xl">
                Hello
              </h1>
            </div>
            <div className="flex items-center justify-center text-lg md:mx-14 md:mt-5 md:text-lg lg:mx-0 lg:mt-0 lg:justify-start xl:text-xl">
              <h2 className="p-5 font-semibold lg:p-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                ipsum quo illo maxime fuga minima. A, est obcaecati. Ex qui
                voluptate dolore illo doloremque nihil quidem nobis temporibus
                sunt blanditiis?
              </h2>
            </div>
            <div className="flex items-center justify-start md:mx-14 md:mt-5 lg:mx-0 lg:mt-0 lg:justify-start">
              <h2 className="p-5 text-sm font-semibold lg:p-10 lg:pt-1">
                Route : KTM TO PKH
              </h2>
            </div>
            <div className="flex items-center justify-around  pb-5  md:mt-10 lg:mx-0   lg:mt-0 lg:justify-between  lg:px-10 lg:pb-0">
              <h2 className=" pt-1 text-sm font-semibold  lg:text-2xl">
                $ 100
              </h2>
              <Button variant={"outline"} className="text-black lg:mr-10">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const ssg = generateSSGHelper();

  const id = context.params?.id;

  if (typeof id !== "string") throw new Error("no id");

  await ssg.Vechicle.getVechicleById.prefetch({ id });
  // await ssg.profile.getUserByUsername.prefetch({ username });

  return {
    props: {
      trpcState: ssg.dehydrate(),
      id,
    },
  };
};

export const getStaticPaths = () => {
  return { paths: [], fallback: "blocking" };
};
