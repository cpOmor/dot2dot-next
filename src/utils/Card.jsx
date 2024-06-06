import { motion } from "framer-motion";

export const Card = ({ children }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 0.9 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.35 }}
      >
        <div className="content h-full ">
          <div className="wiper relative">
            {children}
            <div className=" cardBg "></div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
