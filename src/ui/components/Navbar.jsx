import { useRef, useState, useEffect, forwardRef } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const [selected, setSelected] = useState(0);
  const tabsRef = useRef([]);

  useEffect(() => {
    const tab = tabsRef.current[selected];
    if (!tab) return;

    const tabRect = tab.getBoundingClientRect();
    const parentRect = tab.parentElement.getBoundingClientRect();

    setPosition((p) => ({
      ...p,
      left: tabRect.left - parentRect.left,
      width: tabRect.width,
    }));
  }, [selected]);

  return (
    <nav className="flex justify-center">
      <ul
        onMouseEnter={() =>
          setPosition((p) => ({ ...p, opacity: 1 }))
        }
        onMouseLeave={() =>
          setPosition((p) => ({ ...p, opacity: 0 }))
        }
        className="
          relative flex items-center
          w-[318.156px] h-[36px]
          px-[4px]
          rounded-md
          border border-neutral-400
          bg-white
          dark:border-neutral-700 dark:bg-neutral-900
        "
      >
        {["Home", "Pricing", "Features", "Docs", "Blog"].map((tab, i) => (
          <Tab
            key={tab}
            ref={(el) => (tabsRef.current[i] = el)}
            onClick={() => setSelected(i)}
            setPosition={setPosition}
          >
            {tab}
          </Tab>
        ))}

        <Cursor position={position} />
      </ul>
    </nav>
  );
}

/* ---------------- TAB ---------------- */

const Tab = forwardRef(({ children, onClick, setPosition }, ref) => {
  return (
    <li
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const tabRect = ref.current.getBoundingClientRect();
        const parentRect =
          ref.current.parentElement.getBoundingClientRect();

        setPosition({
          left: tabRect.left - parentRect.left,
          width: tabRect.width,
          opacity: 1,
        });
      }}
      className="
        relative z-10
        px-3 py-1
        text-[11px] font-medium uppercase
        cursor-pointer
        text-neutral-700
        transition-colors
        hover:text-white
        dark:text-neutral-300 dark:hover:text-white
        whitespace-nowrap
      "
    >
      {children}
    </li>
  );
});

Tab.displayName = "Tab";

/* ---------------- CURSOR ---------------- */

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
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
