import Image from "next/image";
import { motion } from "framer-motion";
import { Tiny5 } from "next/font/google";
import { Press_Start_2P } from "next/font/google";
import { Jersey_10 } from "next/font/google";

const font = Tiny5({
  subsets: ["latin"],
  weight: "400",
});

const bitfont = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
});

const subfont = Jersey_10({
  subsets: ["latin"],
  weight: "400",
});

export default function Bitbridge() {
  return (
    <motion.div
      className={`${font.className} absolute z-52 left-1/2 top-1/2 translate-x-[-12vw] -translate-y-1/2 w-[58vw] h-[88vh] text-center text-[2.4vw] [shadow:2px_2px_1px_rgba(0,0,0,0.8)]`}
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", delay: 0.1 }}
    >
      <Image
        className="absolute z-10"
        src="/display/bitbridge-info.png"
        alt="bitbridge info"
        fill
        unoptimized
      ></Image>
      <div
        className={`${bitfont.className} text-[1.4vw] text-cyan-400 z-20 absolute w-[25%] h-[10%] bg-cyan-950 translate-x-[9vw] translate-y-[16vh] border-4 border-cyan-200 shadow-[0_0_10px_2px_rgba(3,170,250,0.9)]`}
      >
        {" "}
        <p className="translate-y-[2vh]">BitBridge</p>
      </div>
      <div
        className={`${font.className} text-[1.65vh] p-[2px] text-black z-20 absolute w-[25%] h-[46%] bg-sky-300 translate-x-[9vw] translate-y-[28vh] border-4 border-cyan-100 shadow-[0_0_10px_2px_rgba(100,170,250,0.9)]`}
      >
        <p className="translate-y-[0.8vh] line-clamp-15">
          {" "}
          BitBridge is a web app where users can hone their coding skills via
          project based learning within a community of other aspiring coders.
          Simply create a project, or join one! You'll become part of a team
          with other coders with an integrated workspace area, built-in GitHub
          integration, and an interface designed for collaborative work. Upon
          finishing a project or collecting daily log-in rewards, users can
          level up and accumulate bits and bytes. They can use these to purchase
          titles in the BitVault and customize their profiles!
        </p>
      </div>
      <div
        className={`absolute ${font.className} text-[1.65vh] p-[2px] text-white z-20 w-[42%] h-[14%] bg-cyan-800 translate-y-[43vh] translate-x-[25vw] border-4 border-cyan-100 shadow-[0_0_10px_2px_rgba(100,170,250,0.9)]`}
      >
        {" "}
        <p className="translate-y-[0.8vh] line-clamp-4">
          {" "}
          BitBridge was made during the 2025 Startery x Antler launchpad. It
          uses React, TypeScript, Tailwind CSS, Supabase, OAuth, and was
          deployed using Netlify. Gen AI was used in certain design areas.
        </p>
      </div>
      <a
        href="https://github.com/donathan2/bitbridge"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute z-20 w-[15%] h-[8%] text-[4vh] text-white [text-shadow:3px_3px_1px_rgba(0,0,0,0.6)] translate-x-[27.5vw] translate-y-[59vh] bg-cyan-300 rounded-[20px] border-[2px] border-white shadow-[0_0_10px_2px_rgba(100,170,250,0.9)] flex items-center justify-center"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-full h-full flex items-center justify-center"
        >
          <p className={`${subfont.className}`}>Visit Repo</p>
        </motion.div>
      </a>
      <a
        href="https://bitbridgeai.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute z-20 w-[15%] h-[8%] text-[4vh] text-white [text-shadow:3px_3px_1px_rgba(0,0,0,0.6)] translate-x-[37.5vw] translate-y-[59vh] bg-sky-400 rounded-[20px] border-[2px] border-white shadow-[0_0_10px_2px_rgba(100,170,250,0.9)] flex items-center justify-center"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-full h-full flex items-center justify-center"
        >
          <p className={`${subfont.className}`}>Visit Site!</p>
        </motion.div>
      </a>
      <div className="z-20 border-gray-600 border-[0.15vw] w-[42%] h-[27%] absolute translate-x-[25vw] translate-y-[16vh] shadow-[0_0_10px_2px_rgba(100,170,250,0.9)]">
        <video
          src="/videos/bitbridge-recording-edited.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover z-20 rounded"
          draggable={false}
        />
      </div>
    </motion.div>
  );
}
