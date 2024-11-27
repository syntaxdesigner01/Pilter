import Image from 'next/image';

export default function SwiperCard({ title, baseText }: { title: string; baseText: string }) {
  return (
    <section key={title} className="pt-8">
      <p className="text-center ">{title}</p>
      <section className="flex justify-center w-full items-center gap-4 pt-10">
        {Array.from({ length: 4 }, (_, i) => i + 1).map((img) => {
          return (
            <Image
              src={`/Ideas/${baseText}${img}.png`}
              width={300}
              height={300}
              alt="Image 1"
              className="w-[250px] h-[250px]"
              key={img}
            />
          );
        })}
      </section>
    </section>
  );
}
