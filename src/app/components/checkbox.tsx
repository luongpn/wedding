"use client";
import { ReactNode, createContext, useContext, useState } from "react";
import { motion } from "framer-motion";

interface CheckboxContextProps {
  id: string;
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
  register: any;
}

const CheckboxContext = createContext<CheckboxContextProps>({
  id: "",
  isChecked: false,
  setIsChecked: () => {},
  register: null,
});

const tickVariants = {
  checked: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.2,
    },
  },
  unchecked: {
    pathLength: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

interface CheckboxProps {
  children: ReactNode;
  id: string;
  register: any;
}

export default function Checkbox({ children, register, id }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex items-center">
      <CheckboxContext.Provider
        value={{
          id,
          isChecked,
          setIsChecked,
          register,
        }}
      >
        {children}
      </CheckboxContext.Provider>
    </div>
  );
}

function CheckboxIndicator() {
  const { id, isChecked, setIsChecked, register } = useContext(CheckboxContext);

  return (
    <button className="relative flex items-center">
      <input
        type="checkbox"
        className="border-[#fb2c36] relative h-5 w-5 cursor-pointer appearance-none rounded-md border-2 transition-all duration-500 checked:border-[#fb2c36] checked:bg-[#fb2c36]"
        onChange={() => setIsChecked(!isChecked)}
        id={id}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3.5"
          stroke="white"
          className="h-3.5 w-3.5"
          initial={false}
          animate={isChecked ? "checked" : "unchecked"}
        >
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
            variants={tickVariants}
          />
        </motion.svg>
      </div>
    </button>
  );
}

Checkbox.Indicator = CheckboxIndicator;

interface CheckboxLabelProps {
  children: ReactNode;
}

function CheckboxLabel({ children }: CheckboxLabelProps) {
  const { id, isChecked } = useContext(CheckboxContext);

  return (
    <motion.label
      className="relative ml-2 overflow-hidden text-sm line-through"
      htmlFor={id}
      animate={{
        x: isChecked ? [0, -4, 0] : [0, 4, 0],
        color: isChecked ? "black" : "#27272a",
        textDecorationLine: isChecked ? "none" : "none",
      }}
      initial={false}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.label>
  );
}

Checkbox.Label = CheckboxLabel;
