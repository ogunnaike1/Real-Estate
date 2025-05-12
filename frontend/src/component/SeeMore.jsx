import React from "react";
import { motion } from "framer-motion";


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const SeeMore =()=> {
  return (
    <main className="flex flex-col items-center w-full overflow-x-hidden bg-white text-gray-800">
      {/* Hero Section */}
      <section className="w-full h-screen bg-[url('/images/hero.jpg')] bg-cover bg-center flex items-center justify-center">
        <motion.div
          className="text-center text-white px-4"
          variants={fadeInUp}
          initial="hidden"
          animate="show"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-xl">
            Find Your Dream Rental
          </h1>
          <p className="text-lg md:text-2xl mb-6 drop-shadow-md">
            Browse verified listings in your favorite neighborhoods
          </p>
          <motion.button className="px-6 py-3 text-lg rounded-2xl shadow-xl">
            Browse Listings
          </motion.button>
        </motion.div>
      </section>

      {/* How It Works */}
      <motion.section
        className="max-w-5xl px-6 py-20 text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="text-3xl font-semibold mb-8" variants={fadeInUp}>
          How It Works
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-6">
          {["Search", "Tour", "Apply", "Move In"].map((step, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 rounded-2xl p-6 shadow-md"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold mb-2">{step}</h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Featured Listings */}
      <motion.section
        className="max-w-6xl px-6 py-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="text-3xl font-semibold mb-10 text-center" variants={fadeInUp}>
          Featured Rentals
        </motion.h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
              variants={fadeInUp}
            >
              <div className="h-48 bg-gray-300"></div>
              <div className="p-4">
                <h3 className="font-semibold text-xl">Cozy Apartment #{i + 1}</h3>
                <p className="text-sm text-gray-600">$1,200/mo • 2 Bed • 1 Bath</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="bg-gray-100 w-full py-20 px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="text-3xl font-semibold text-center mb-10" variants={fadeInUp}>
          What Tenants Say
        </motion.h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {[1, 2].map((id) => (
            <motion.div
              key={id}
              className="bg-white rounded-2xl p-6 shadow"
              variants={fadeInUp}
            >
              <p className="text-sm italic">
                "Amazing experience! Found a perfect place within days. Highly recommend."
              </p>
              <div className="mt-4 text-right font-semibold">– Happy Renter #{id}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="w-full py-20 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-4xl font-bold mb-6">Ready to Find Your Next Home?</h2>
        <motion.button className="px-6 py-3 text-lg bg-white text-blue-600 hover:bg-gray-200 rounded-2xl">
          Get Started
        </motion.button>
      </motion.section>
    </main>
  );
}

export default  SeeMore
