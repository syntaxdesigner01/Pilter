import React from 'react'
import AsideLeftComponent from './AsideLeftComponent';

export default function Divider() {
  return (
    <section className="w-full flex items-center pt-10">
      <section className="w-full flex justify-evenly items-center shadow-lg z-50 ">
        <section className="w-[23vw] h-screen border-r-4 border-black ">
          <AsideLeftComponent/>
        </section>

        <section className="w-[50vw] h-screen">
          <p className="w-full">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            quo, quisquam excepturi voluptate architecto odit rem sapiente
            laudantium totam molestias, facilis ex quaerat dolorem ut nostrum,
            tempore tempora veritatis ea pariatur ratione! Expedita aliquid
            quidem non quam architecto magnam error nostrum quos quod officiis
            tenetur libero, asperiores commodi! Deserunt aliquid at dolorem
            beatae autem dolore possimus debitis ad iure nam?
          </p>
        </section>
      </section>
    </section>
  );
}
