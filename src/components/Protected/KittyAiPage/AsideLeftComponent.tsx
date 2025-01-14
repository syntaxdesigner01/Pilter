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

  const itemsPerPage = 2; // Define the number of items per page

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

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;
  const paginatedItems = dataset.slice(startIndex, endIndex);

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

      <Stack className="mt-2">
        <Stack gap={2}>
          {paginatedItems.length > 0 &&
            paginatedItems.map((seasonPrompts, index) => {
              return (
                <section
                  key={index}
                  className="mt-1 border-2 border-black  rounded-xl  leading-relaxed tracking-wider  text-[12px] shadow-xl mx-2"
                >
                  <section className="flex justify-end items-center mb-[0.7px]  rounded-tr-xl">
                    <button className="bg-black text-white px-4 rounded-tr-xl">
                      Copy
                    </button>
                  </section>
                  <section className="bg-white text-dark font-medium rounded-xl p-3">
                    {viewText[index]
                      ? seasonPrompts.join(" ")
                      : seasonPrompts.join(" ").slice(0, 50) + "..."}
                    {/* <section className="flex justify-end items-center mt-[0.7px] "> */}
                    <span
                      className="cursor-pointer underline text-redTheme px-2 rounded-sm font-bold"
                      onClick={() => viewTextHandler(index)}
                    >
                      {viewText[index] ? "Read less" : "Expand"}
                    </span>
                    {/* </section> */}
                  </section>
                </section>
              );
            })}
        </Stack>
      </Stack>

      {dataset.length > 0 && (
        <PaginationRoot
          count={Math.ceil(dataset.length / itemsPerPage)}
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
      )}
    </section>
  );
}
