
import React, { useEffect, useState } from "react";


import { motion, AnimatePresence } from "framer-motion";


export default function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
      <motion.button
        whileHover={{
          scale: [1, 1.1, 1.05], // bounce-like effect
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 15,
          },
        }}
        whileTap={{ scale: 0.95 }} // tap feedback
        onClick={() => alert("Clicked!")}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg"
      >
        Rent Now
   
    </div>
  );
}


// const DoubleDoorLoader = () => {
//   const [show, setShow] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setShow(false), 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <AnimatePresence>
//       {show && (
//         <motion.div
//           className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
//           initial={{ opacity: 1 }}
//           exit={{ opacity: 0, transition: { duration: 0.5 } }}
//         >
//           {/* Left Door */}
//           <motion.div
//             className="absolute left-0 top-0 w-1/2 h-full bg-black"
//             initial={{ x: 0 }}
//             animate={{ x: "-100%" }}
//             transition={{ duration: 1, ease: "easeInOut", delay: 0 }}
//           />

//           {/* Right Door */}
//           <motion.div
//             className="absolute right-0 top-0 w-1/2 h-full bg-black"
//             initial={{ x: 0 }}
//             animate={{ x: "100%" }}
//             transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }}
//           />

//           {/* Optional Center Logo/Text */}
//           <motion.div
//             className="z-10 text-white text-3xl font-bold"
//             initial={{ opacity: 1 }}
//             animate={{ opacity: 0 }}
//             transition={{ delay: 0.7, duration: 0.4 }}
//           >
//             RentEase
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default DoubleDoorLoader;






