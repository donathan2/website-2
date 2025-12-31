import Image from "next/image";
import { motion } from "framer-motion";
import { Tiny5 } from "next/font/google";

const font = Tiny5({
  subsets: ["latin"],
  weight: "400",
});

export default function Bitbridge() {
  return (
    <motion.div
      className={`${font.className} absolute z-52 left-1/2 top-1/2 translate-x-[-12vw] -translate-y-1/2 w-[58vw] h-[88vh] text-center text-[2.4vw] [text-shadow:2px_2px_1px_rgba(0,0,0,0.8)]`}
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", delay: 0.1 }}
    >
      <Image
        src="/display/bitbridge-info.png"
        alt="bitbridge info"
        fill
        unoptimized
      ></Image>
    </motion.div>
  );
}
