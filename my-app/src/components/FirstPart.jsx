import Link from "next/link";

const FirstPart = () => {
  return (
    <div
      className="w-full h-screen flex justify-center items-center"
      
    >
      <div className="border-[10px] border-white p-5 flex flex-col gap-5 lg:w-1/2 w-full items-center justify-center" style={{ borderRadius: "2% 20%" }}>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          obcaecati deleniti rerum excepturi adipisci vitae quibusdam? Numquam
          alias quidem praesentium accusantium nesciunt eveniet, mollitia
          quibusdam amet illo provident id aspernatur fugiat quo quas magnam cum
          vero dolores illum, fugit saepe. Voluptatibus, veritatis, similique
          ipsa, velit ipsam voluptas inventore ducimus et ea incidunt excepturi
          non ad maxime. Quibusdam labore vero, corporis architecto nobis ipsum
          ducimus? Quaerat itaque culpa blanditiis alias eos nam a! Alias eius,
          similique sed unde voluptatum, itaque voluptatibus est rem, veritatis
          quasi vitae reiciendis porro at totam odio quis soluta quidem
          dignissimos dicta fuga! Dicta blanditiis fugiat voluptatum?
        </div>
        <div className="flex flex-col items-center">
          <Link href="/">Get Started in a minute</Link>
          <Link href="/">Earn money in a minute</Link>
        </div>
      </div>
    </div>
  );
};

export default FirstPart;
