"use client";
import { Seasons } from "@/utils/data";
import { Input, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { HStack } from "@chakra-ui/react";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/ui/pagination";

export default function AsideLeftComponent() {
  const [keyword, setKeyword] = useState<string>("");
  const [dataset, setDataset] = useState<string[][]>([]);
  const [page, setPage] = useState(1);
  const [viewText, setViewText] = useState<{ [key: number]: boolean }>({});

  const viewTextHandler = (index: number) => {
    setViewText((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const findWords: string[][] = [];

    Object.values(Seasons).forEach((season) => {
      const filteredData = season.filter((prompt) => prompt.includes(keyword));
      if (!findWords.includes(filteredData) && filteredData.length > 0) {
        findWords.push(filteredData);
      }
    });

    setDataset(findWords);
    console.log(findWords);
  }

  return (
    <section className="w-full relative left-[-4em] ">
      <h1 className="text-left text-sm font-semibold">Prompt suggestion: </h1>

      <form className="mt-2" onSubmit={(e) => handleSubmit(e)}>
        <Input
          className="border-2 border-black px-2 w-full h-12 rounded-md"
          placeholder="Keyword: Art"
          onChange={(e) => setKeyword(e.target.value)}
        />
      </form>

      <p className="text-[12px] py-2 font-bold">
        Type in a keyword to unlock a curated list of top-notch prompt
        suggestions tailored just for you
      </p>
      <hr />

      <Stack className="overflow-y-scroll">
        <Stack gap={4}>
          {dataset.length > 0 &&
            dataset
              .slice((page - 1) * 2, page * 3)
              .map((seasonPrompts, index) => {
                return (
                  <section
                    key={index}
                    className="mt-4 border-2 border-black  rounded-xl  leading-relaxed tracking-wider  text-sm"
                  >
                    <section className="flex justify-end items-center mb-[0.7px] rounded-tr-xl">
                      <button className="bg-black text-white px-4">
                        Copy text
                      </button>
                    </section>
                    <section className="bg-dark text-white p-3 text-sm">
                      {viewText[index]
                        ? seasonPrompts.join(" ")
                        : seasonPrompts.join(" ").slice(0, 50) + "..."}
                      <section className="flex justify-end items-center mt-[0.7px] ">
                        <button
                          className="bg-redTheme text-white px-4 rounded-md"
                          onClick={() => viewTextHandler(index)}
                        >
                          See more
                        </button>
                      </section>
                    </section>
                  </section>
                );
              })}
        </Stack>
      </Stack>

      <PaginationRoot
        count={3}
        pageSize={1}
        page={page}
        onPageChange={(e) => setPage(e.page)}
      >
        <HStack>
          <PaginationPrevTrigger />
          <PaginationItems />
          <PaginationNextTrigger />
        </HStack>
      </PaginationRoot>
    </section>
  );
}
