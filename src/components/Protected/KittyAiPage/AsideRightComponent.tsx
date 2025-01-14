import React from 'react'

export default function AsideRightComponent() {
  return (
    <section>
      <section>
        <form>
          <textarea
            cols={40}
            rows={60}
            placeholder="Create me a cat image on a white background"
            className="border-4 rounded-xl border-black p-4 w-full py-6 h-[10em] bg-white placeholder:italic outline-double"
          />
        </form>
      </section>
    </section>
  );
}
