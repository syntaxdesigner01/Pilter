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
import { Clipboard, IconButton } from "@chakra-ui/react";
import { LuClipboard } from "react-icons/lu";
import { LuCheck } from "react-icons/lu";
export default function AsideLeftComponent() {
  const [keyword, setKeyword] = useState<string>("");
  const [dataset, setDataset] = useState<string[][]>([]);
  const [page, setPage] = useState(1);
  const [viewText, setViewText] = useState<{ [key: number]: boolean }>({});

  const itemsPerPage = 3;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;
  const paginatedItems = dataset.slice(startIndex, endIndex);

  const viewTextHandler = (index: number) => {
    setViewText((prev) => ({ [index]: !prev[index] }));
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const findWords: string[][] = [];

    if (keyword.trim().length < 3 || keyword.trim().length === 0) {
      alert("Please enter a keyword with at least 3 characters");
    }

    if (keyword.trim().length >= 3) {
      Object.values(Seasons).forEach((season) => {
        const filteredData = season.filter((prompt) =>
          prompt.includes(keyword)
        );
        if (!findWords.includes(filteredData) && filteredData.length > 0) {
          findWords.push(filteredData);
        }
      });

      setDataset(findWords);
      console.log(findWords);
    }
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

      <Stack className="mt-2 ">
        <Stack gap={2}>
          {paginatedItems.length > 0 &&
            paginatedItems.map((seasonPrompts, index) => {
              return (
                <section
                  key={index}
                  className="mt-1 border-2 border-black  rounded-xl  leading-relaxed tracking-wider  text-[12px] shadow-xl mx-2 flex flex-row-reverse items-start justify-evenly  overflow-y-auto "
                >
                  <section className="flex justify-end items-center relative  ">
                    <Clipboard.Root
                      value={seasonPrompts.join(" ")}
                      timeout={1000}
                      className=" text-dark w-10 bg-white rounded-tr-xl p-1"
                    >
                      <Clipboard.Trigger asChild className="cursor-pointer">
                        <IconButton size={"xs"} aria-label="Copy to clipboard">
                          <Clipboard.Indicator
                            copied={<LuCheck />}
                            className="flex"
                          >
                            <LuClipboard />
                          </Clipboard.Indicator>
                        </IconButton>
                      </Clipboard.Trigger>
                    </Clipboard.Root>
                  </section>
                  <section
                    className={`bg-white text-dark font-medium rounded-xl p-3 ${
                      viewText[index] && "h-40 p-4"
                    }`}
                  >
                    {viewText[index]
                      ? seasonPrompts.join(" ")
                      : seasonPrompts.join(" ").slice(0, 70) + "..."}

                    <span
                      className="cursor-pointer underline text-redTheme px-2 rounded-sm font-bold"
                      onClick={() => viewTextHandler(index)}
                    >
                      {viewText[index] ? "Read less" : "Expand"}
                    </span>
                  </section>
                </section>
              );
            })}
        </Stack>
      </Stack>

      <section className="flex justify-center items-center">
        {dataset.length > 0 && (
          <PaginationRoot
            count={Math.ceil(dataset.length / itemsPerPage)}
            pageSize={1}
            page={page}
            onPageChange={(e) => setPage(e.page)}
            className="fixed bottom-4"
            variant="solid"
          >
            <HStack>
              <PaginationPrevTrigger />
              <PaginationItems
                className={`border-2 border-black rounded-xl bg-white hover:bg-dark hover:text-white `}
              />
              <PaginationNextTrigger />
            </HStack>
          </PaginationRoot>
        )}
      </section>
    </section>
  );
}
