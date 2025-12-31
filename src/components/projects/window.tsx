import { motion } from "framer-motion";
import Image from "next/image";
import Letters from "./letters";
import { useState } from "react";
import Unselected from "./boards/unselected";
import Selections from "./selections";
import Bitbridge from "./boards/bitbridge";

export default function Window({
  setOpened,
}: {
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [project, setProject] = useState<number>(0);

  return (
    <>
      <div
        className="fixed z-50 inset-0 bg-gray-800/50"
        onClick={() => setOpened(false)}
      ></div>
      <motion.div
        className="absolute z-52 left-1/2 top-1/2 -translate-x-6/4 -translate-y-1/2 w-[30vw] h-[80vh]  scrollbar-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring" }}
      >
        <Image
          className="absolute"
          src="/display/projects-display.png"
          alt="projects display"
          fill
        ></Image>
        <Selections project={project} setProject={setProject}></Selections>
      </motion.div>
      <div className="w-[10vw] h-[5vw] absolute z-52 fixed pointer-events-none">
        <Letters />
      </div>
      {project === 0 && <Unselected></Unselected>}
      {project === 1 && <Bitbridge></Bitbridge>}
    </>
  );
}
