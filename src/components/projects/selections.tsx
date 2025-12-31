import { useState, Dispatch, SetStateAction } from "react";
import { Tiny5 } from "next/font/google";
import Image from "next/image";

const font = Tiny5({
  subsets: ["latin"],
  weight: "400",
});

interface SelectionsProps {
  project: number;
  setProject: Dispatch<SetStateAction<number>>;
}

export default function Selections({ project, setProject }: SelectionsProps) {
  return (
    <div
      className="w-[50%] h-[10%] bg-sky-900 translate-x-[7.5vw] translate-y-[8vw] border-[0.3vw] border-white flex items-center gap-4"
      onClick={() => {
        if (project === 1) {
          setProject(0);
        } else {
          setProject(1);
        }
      }}
    >
      <div className="translate-x-[10%] relative w-[3vw] h-[3vw]">
        <Image src="/icons/bitbridge.png" alt="bitbridge icon" fill></Image>
      </div>
      <p className={`${font.className} text-[2vw]`}>BitBridge</p>
    </div>
  );
}
