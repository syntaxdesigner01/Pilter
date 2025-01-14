"use client";

import { Button } from "@/components/ui/button";
import { Stack } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function AsideRightComponent() {
  const [prompt, setPrompt] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (prompt?.length >= 500) {
      setError(true);
    }
    if (prompt?.length < 500) {
      setError(false);
    }
  }, [prompt]);

  return (
    <section>
      <section>
        <form>
          <Stack>
            <textarea
              maxLength={500}
              cols={40}
              rows={60}
              placeholder="Create me a cat image on a white background"
              className={`border-4 rounded-xl p-4 w-full py-6 h-[10em] cursor-text bg-white placeholder:italic outline-double ${
                error ? "border-redTheme" : "border-black "
              }`}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <section className="flex justify-end w-full ">
              <span>{prompt?.length}/500</span>
            </section>
          </Stack>

          <section className="flex w-full justify-center items-center gap-20 font-bold">
            {/* <section className="flex cursor-pointer gap-2">
              <span>Qunatity</span>
              <input
                type="number"
                name=""
                id=""
                max={6}
                min={0}
              
                className="text-black pl-4 w-[9em] cursor-pointer border-2 border-black bg-white"
              />
            </section> */}
            
            <section className="flex cursor-pointer gap-2">
              <input
                type="checkbox"
                name=""
                id=""
                className="text-white cursor-pointer"
              />
              <span>Protriate</span>
            </section>

            <section className="cursor-pointer flex gap-2">
              <input
                type="checkbox"
                name=""
                id=""
                className="text-white cursor-pointer"
              />
              <span>Landscape</span>
            </section>
          </section>

          <section className="flex justify-center items-center w-full mt-4">
            <Button className="bg-redTheme text-white w-[32vw] font-semibold">
              Generate Image
            </Button>
          </section>
        </form>

        <section className="w-full h-full flex flex-col font-bold justify-center items-center pt-20">
          <Image
            src={"/Icons/undraw_Cat_epte 1.png"}
            alt=""
            width={200}
            height={200}
            className="w-[200px]"
          />

          <p>No image generated yet!</p>
        </section>
      </section>
    </section>
  );
}
