import Image from "next/image";
import BtnLogin from "@/components/inicio/BtnLogin";
import BtnSignup from "@/components/inicio/BtnSignup";
import Menu from "@/components/general/Menu";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <Image
            className=""
            src="/ArbolLogo.svg"
            alt="Logo Arbol Prpoject"
            width={700}
            height={700}
            priority
        />
        <BtnLogin />
        <BtnSignup />
      
    </div>
  );
}