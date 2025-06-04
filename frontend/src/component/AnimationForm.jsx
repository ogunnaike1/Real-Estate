
import React, { useEffect, useState } from "react";


import { motion, AnimatePresence } from "framer-motion";



const QuickSearch = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full bg-gray-50 py-12 px-6 md:px-16">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        variants={fadeUp}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Quick Search
        </h2>

        <div className="grid md:grid-cols-4 gap-4">
          <motion.input
            whileFocus={{ scale: 1.03 }}
            type="text"
            placeholder="Location"
            className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <motion.select
            whileFocus={{ scale: 1.03 }}
            className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option>Property Type</option>
            <option>Apartment</option>
            <option>House</option>
            <option>Studio</option>
          </motion.select>

          <motion.select
            whileFocus={{ scale: 1.03 }}
            className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option>Price Range</option>
            <option>$500 - $1000</option>
            <option>$1000 - $1500</option>
      
          </motion.select>

          <motion.div whileHover={{ scale: 1.05 }}>
            <button className="w-full h-full rounded-xl text-white bg-primary hover:bg-primary-dark transition">
              Search
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default QuickSearch;



// export default function App() {
//   return (
//     <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
//       <motion.button
//         whileHover={{
//           scale: [1, 1.1, 1.05], // bounce-like effect
//           transition: {
//             type: "spring",
//             stiffness: 300,
//             damping: 15,
//           },
//         }}
//         whileTap={{ scale: 0.95 }} // tap feedback
//         onClick={() => alert("Clicked!")}
//         className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg"
//       >
//         Rent Now
//       </motion.button>
//     </div>
//   );
// }


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






