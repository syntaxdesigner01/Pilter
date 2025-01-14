import React from 'react'
import AsideLeftComponent from './AsideLeftComponent';
import AsideRightComponent from './AsideRightComponent';

export default function Divider() {
  return (
    <section className="w-full flex items-center pt-10">
      <section className="w-full flex justify-evenly items-center shadow-lg z-50 ">
        <section className="w-[25vw] h-screen shadow-r-md border-r-2 border-slate-300">
          <AsideLeftComponent />
        </section>

        <section className="w-[50vw] h-screen">
          <AsideRightComponent />
        </section>
      </section>
    </section>
  );
}
