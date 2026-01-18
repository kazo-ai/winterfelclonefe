// import { useRef, useState, useEffect, forwardRef } from "react"
// import { motion } from "framer-motion"

// export default function Navbar () {
//   const [position, setPosition] = useState({
//     left: 0,
//     width: 0,
//     opacity: 0,
//   })

//   const [selected, setSelected] = useState(0)
//   const tabsRef = useRef([])

//   useEffect(() => {
//     const selectedTab = tabsRef.current[selected]
//     if (selectedTab) {
//       const { width } = selectedTab.getBoundingClientRect()
//       setPosition({
//         left: selectedTab.offsetLeft,
//         width,
//         opacity: 1,
//       })
//     }
//   }, [selected])

//   return (
//   <nav className="flex justify-center py-6">
//     <ul
//       onMouseLeave={() => {
//         const selectedTab = tabsRef.current[selected]
//         if (selectedTab) {
//           const { width } = selectedTab.getBoundingClientRect()
//           setPosition({
//             left: selectedTab.offsetLeft,
//             width,
//             opacity: 1,
//           })
//         }
//       }}
//       className="relative flex w-fit rounded-full border-2 border-black bg-white p-1 dark:border-white dark:bg-neutral-800"
//     >
//       {["Home", "Pricing", "Features", "Docs", "Blog"].map((tab, i) => (
//         <Tab
//           key={tab}
//           ref={(el) => (tabsRef.current[i] = el)}
//           setPosition={setPosition}
//           onClick={() => setSelected(i)}
//         >
//           {tab}
//         </Tab>
//       ))}

//       <Cursor position={position} />
//     </ul>
//   </nav>
// )
// }

// /* ---------- Tab ---------- */
// const Tab = forwardRef(({ children, setPosition, onClick }, ref) => {
//   return (
//     <li
//       ref={ref}
//       onClick={onClick}
//       onMouseEnter={() => {
//         if (!ref?.current) return

//         const { width } = ref.current.getBoundingClientRect()

//         setPosition({
//           left: ref.current.offsetLeft,
//           width,
//           opacity: 1,
//         })
//       }}
//       className="relative z-10 cursor-pointer px-3 py-1.5 text-xs uppercase text-black md:px-5 md:py-3 md:text-base dark:text-white"    >
//       {children}
//     </li>
//   )
// })

// Tab.displayName = "Tab"

// /* ---------- Cursor ---------- */
// const Cursor = ({ position }) => {
//   return (
//     <motion.li
//       animate={{ ...position }}
//       className="absolute z-0 h-7 rounded-full bg-black dark:bg-white md:h-12"
//     />
//   )
// }

// import { useRef, useState, useEffect, forwardRef } from "react";
// import { motion } from "framer-motion";

// export default function Navbar() {
//   const [position, setPosition] = useState({
//     left: 0,
//     width: 0,
//     opacity: 0,
//   });

//   const [selected, setSelected] = useState(0);
//   const tabsRef = useRef([]);

//   useEffect(() => {
//     const selectedTab = tabsRef.current[selected];
//     if (!selectedTab) return;

//     const tabRect = selectedTab.getBoundingClientRect();
//     const parentRect = selectedTab.parentElement.getBoundingClientRect();

//     setPosition({
//       left: tabRect.left - parentRect.left,
//       width: tabRect.width,
//       opacity: 0, // hidden until hover
//     });
//   }, [selected]);

//   return (
//     <nav className="flex justify-center">
//       <ul
//         onMouseEnter={() =>
//           setPosition((p) => ({ ...p, opacity: 1 }))
//         }
//         onMouseLeave={() =>
//           setPosition((p) => ({ ...p, opacity: 0 }))
//         }
//         className="
//           relative flex items-center
//           w-[318.156px] h-[36px]
//           rounded-md
//           border border-zinc-400
//           bg-white
//           px-[4px]
//           dark:border-zinc-700 dark:bg-neutral-900
//         "
//       >
//         {["Home", "Pricing", "Features", "Docs", "Blog"].map((tab, i) => (
//           <Tab
//             key={tab}
//             ref={(el) => (tabsRef.current[i] = el)}
//             setPosition={setPosition}
//             onClick={() => setSelected(i)}
//           >
//             {tab}
//           </Tab>
//         ))}

//         <Cursor position={position} />
//       </ul>
//     </nav>
//   );
// }

// /* ---------------- TAB ---------------- */

// const Tab = forwardRef(({ children, setPosition, onClick }, ref) => {
//   return (
//     <li
//       ref={ref}
//       onClick={onClick}
//       onMouseEnter={() => {
//         if (!ref?.current) return;

//         const tabRect = ref.current.getBoundingClientRect();
//         const parentRect = ref.current.parentElement.getBoundingClientRect();

//         setPosition({
//           left: tabRect.left - parentRect.left,
//           width: tabRect.width,
//           opacity: 1,
//         });
//       }}
//       className="
//         relative z-10
//         px-3 py-1
//         text-[11px] font-medium uppercase
//         cursor-pointer
//         text-zinc-700
//         transition-colors
//         hover:text-white
//         dark:text-zinc-300 dark:hover:text-white
//         whitespace-nowrap
//       "
//     >
//       {children}
//     </li>
//   );
// });

// Tab.displayName = "Tab";

// /* ---------------- CURSOR ---------------- */

// const Cursor = ({ position }) => {
//   return (
//     <motion.li
//       animate={{
//         left: position.left,
//         width: position.width,
//         opacity: position.opacity,
//       }}
//       transition={{
//         type: "spring",
//         stiffness: 260,
//         damping: 28,
//       }}
//       className="
//         absolute z-0
//         h-[28px]
//         rounded-sm
//         bg-[rgb(108,68,252)]
//       "
//     />
//   );
// };

import { useRef, useState, forwardRef } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [cursor, setCursor] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const tabsRef = useRef([]);

  const moveCursor = (el) => {
    if (!el) return;

    const tabRect = el.getBoundingClientRect();
    const parentRect = el.parentElement.getBoundingClientRect();

    setCursor({
      left: tabRect.left - parentRect.left,
      width: tabRect.width,
      opacity: 1,
    });
  };

  return (
    <nav className="flex justify-center">
      <ul
        onMouseLeave={() =>
          setCursor((c) => ({ ...c, opacity: 0 }))
        }
        className="
          relative flex items-center
          w-[318.156px] h-[36px]
          rounded-md
          border border-zinc-400
          bg-white
          px-[4px]
          dark:border-zinc-700 dark:bg-neutral-900
        "
      >
        {["Home", "Pricing", "Features", "Docs", "Blog"].map((tab, i) => (
          <Tab
            key={tab}
            ref={(el) => (tabsRef.current[i] = el)}
            onHover={moveCursor}
          >
            {tab}
          </Tab>
        ))}

        <Cursor cursor={cursor} />
      </ul>
    </nav>
  );
}

const Tab = forwardRef(({ children, onHover }, ref) => {
  return (
    <li
      ref={ref}
      onMouseEnter={() => onHover(ref.current)}
      className="
        relative z-10
        px-3 py-1
        text-[11px] font-medium uppercase
        cursor-pointer
        whitespace-nowrap
        text-zinc-700
        transition-colors
        hover:text-white
        dark:text-zinc-300 dark:hover:text-white
      "
    >
      {children}
    </li>
  );
});

Tab.displayName = "Tab";

const Cursor = ({ cursor }) => {
  return (
    <motion.li
      animate={{
        left: cursor.left,
        width: cursor.width,
        opacity: cursor.opacity,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 28,
      }}
      className="
        absolute z-0
        h-[28px]
        rounded-sm
        bg-[rgb(108,68,252)]
      "
    />
  );
};