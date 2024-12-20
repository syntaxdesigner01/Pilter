import Image from 'next/image';
import "./styles.css";

export default function TestimonieCard() {
  return (
    <section className="flex justify-center items-center w-full pt-20 md:pb-20 pb-10 z-50">
      <section className="md:w-[500px] w-[22em] border-2  rounded-3xl shadow-md rotate">
        <section className="bg-[#1E1E1E] text-white flex items-center h-[7em] md:h-40 rounded-t-3xl px-10">
          <section className="relative">
            <Image
              src={"/Icons/quoteOpen.svg"}
              alt="quoteOpen"
              width={40}
              height={40}
              className="relative top-[-20px]"
            />
          </section>
          <p className="text-sm font-semibold md:text-lg">
            Pilter isn&apos;t just an image search engine—it&apos;s a gateway to
            bringing art to life.
          </p>
          <section className="relative">
            <Image
              src={"/Icons/quoteClose.svg"}
              alt="quoteClose"
              width={40}
              height={40}
              className="relative md:bottom-[-10px] md:left-[-9em] bottom-[-16px] left-[-6em]"
            />
          </section>
        </section>

        <section className="flex justify-left px-4 items-center gap-4 py-6">
          <Image
            src={"/Testmonies/userTestmonies1.png"}
            alt="avatar1"
            width={80}
            height={80}
            className="rounded-full md:w-[80px] md:h-[80px] w-[70px] h-[70px]"
          />
          <section>
            <h4 className="font-bold text-lg md:text-xl">Mary Cliont</h4>
            <p className="text-[13px] md:text-sm ">
              Software Engineer <span className="font-semibold">@Pixbay</span>
            </p>
          </section>
        </section>
      </section>
    </section>
  );
}
