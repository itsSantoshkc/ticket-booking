import { useRouter } from "next/router";
import { Button } from "../Components/UI/button";

export default function Page() {
  const router = useRouter();
  return (
    <>
      <div className=" flex  h-screen  items-center justify-center  bg-zinc-950 text-white lg:-mt-16  lg:h-screen">
        <div className="m-5 flex  w-screen flex-col rounded-xl border md:h-3/4 md:w-3/4 lg:my-0 lg:h-2/4 lg:w-3/4 lg:flex-row lg:border xl:h-1/2 xl:w-1/2">
          <div className="flex w-full justify-center p-5 md:h-1/2 md:p-10 lg:h-full lg:w-2/3 lg:p-10 xl:w-full  ">
            <img
              className="h-80 rounded-xl md:w-1/2 lg:h-full lg:w-full  "
              src="https://i.pinimg.com/736x/a7/b2/07/a7b207049d7cf83efc9e0c9a0e5076a9.jpg"
            />
          </div>
          <div className="w-full lg:w-screen">
            <div className=" flex w-full items-center justify-center md:mt-10 lg:mt-5 lg:justify-start">
              <h1 className=" text-2xl font-bold  lg:p-10 lg:text-3xl">
                Hello
              </h1>
            </div>
            <div className="flex items-center justify-center md:mx-14 md:mt-5 lg:mx-0 lg:mt-0 lg:justify-start">
              <h2 className="font-semibold lg:p-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                ipsum quo illo maxime fuga minima. A, est obcaecati. Ex qui
                voluptate dolore illo doloremque nihil quidem nobis temporibus
                sunt blanditiis?
              </h2>
            </div>
            <div className="flex items-center justify-start md:mx-14 md:mt-5 lg:mx-0 lg:mt-0 lg:justify-start">
              <h2 className="font-semibold lg:p-10 lg:pt-1">
                Route : KTM TO PKH
              </h2>
            </div>
            <div className="flex justify-around pb-5 md:mt-10 lg:mx-0 lg:mt-0 lg:justify-between  lg:px-10 lg:pb-0">
              <h2 className="pt-1 font-semibold  lg:text-2xl">$ 100</h2>
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
