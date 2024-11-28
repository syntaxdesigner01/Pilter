import Image from 'next/image';
import "./styles.css";

export default function TestimonieCard() {
  return (
    <section className="flex justify-center items-center w-full pt-20 pb-20 ">
      <section className="w-[500px] border-2  rounded-3xl shadow-md rotate">
        <section className="bg-[#1E1E1E] text-white flex items-center h-40 rounded-t-3xl px-10">
          <section className="relative">
            <Image
              src={"/Icons/quoteOpen.svg"}
              alt="quoteOpen"
              width={40}
              height={40}
              className="relative top-[-20px]"
            />
          </section>
          <p>
            Pilter isn&apos;t just an image search engine—it&apos;s a gateway to
            bringing art to life.
          </p>
          <section className="relative">
            <Image
              src={"/Icons/quoteClose.svg"}
              alt="quoteClose"
              width={40}
              height={40}
              className="relative bottom-[-10px] left-[-9em]"
            />
          </section>
        </section>

        <section className="flex justify-left px-4 items-center gap-4 py-6">
          <Image
            src={"/Testmonies/userTestmonies1.png"}
            alt="avatar1"
            width={80}
            height={80}
            className="rounded-full"
          />
          <section>
            <h4 className="font-bold text-xl">Mary Cliont</h4>
            <p className=" text-sm ">
              Software Engineer <span className="font-semibold">@Pixbay</span>
            </p>
          </section>
        </section>
      </section>
    </section>
  );
}
