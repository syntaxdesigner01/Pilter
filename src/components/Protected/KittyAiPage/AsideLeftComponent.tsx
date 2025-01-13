'use client'
import { Seasons } from '@/utils/data';
import { Input } from '@chakra-ui/react';
import React, { useState } from 'react'


export default function AsideLeftComponent() {

  const [keyword,setKeyword] = useState<string>('')
  const [dataset,setDataset] = useState<string[][]>([])




  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

        const findWords: string[][] = [];

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

  return (
    <section className="w-full relative left-[-4em] h-screen overflow-y-auto">
      <h1 className="text-left text-sm font-semibold">Prompt suggestion: </h1>

      <form
        className="mt-2"
        onSubmit={(e) => handleSubmit(e)}
      >
        <Input
          className="border-2 border-black px-2 w-full h-12 rounded-md"
          placeholder="Keyword: Art" onChange={(e) => setKeyword(e.target.value)}
        />
      </form>

      <p className="text-[12px] py-2 font-bold">
        Type in a keyword to unlock a curated list of top-notch prompt
        suggestions tailored just for you
      </p>
<hr />

      {dataset.length > 0 && dataset.map((seasonPrompts, index) => {
        return (
          <section
            key={index}
            className="mt-4 border-2 border-black  rounded-md  leading-relaxed tracking-wider  text-sm"
          >
            <section className="flex justify-end items-center">
              <button className='bg-black text-white'>Copy text</button>
            </section>

            <section className="bg-black text-white p-3">
              {seasonPrompts}
            </section>
            {/* <br /> */}
          </section>
        );
})}

    </section>
  );
}
