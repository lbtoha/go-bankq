"use client";
import { motion } from "framer-motion";
type Props = {
  children: React.ReactNode;
};

export const LeftCardAnimation = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      animate={{ rotate: -15, opacity: 1 }}
      className="card__left   md:max-w-[200px] lg:max-w-[240px] xl:max-w-[250px]"
    >
      {children}
    </motion.div>
  );
};

export const RightCardAnimation = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      animate={{ rotate: 15, opacity: 1 }}
      className="card__right hidden md:block md:max-w-[200px] lg:max-w-[240px]"
    >
      {children}
    </motion.div>
  );
};
