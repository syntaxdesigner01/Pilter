

export default function TextBox({Title,Type,PlaceHolder}: {Title:string,Type:string,PlaceHolder:string}) {
  return (
    <section className="flex flex-col w-[40em]">
      <label
        htmlFor="email"
        className=" relative top-3 bg-white w-[20%] px-2 left-10 text-xl font-bold"
      >
        {Title}
      </label>
      <input
        type={Type}
        placeholder={PlaceHolder}
        className="h-16 out px-8 bg-white border-2 w-full  border-black rounded-xl"
        required
      />
    </section>
  );
}
