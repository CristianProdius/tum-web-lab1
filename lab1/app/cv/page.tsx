"use client";
import Head from "next/head";
import { motion } from "framer-motion";
import AnimatedBackground from "@/components/AnimatedBackground";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Resume() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cristian Prodius - CV/Resume</title>
      </Head>
      <AnimatedBackground />
      <motion.main
        className="bg-gray-100 text-gray-900 p-8 h-screen relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Basic Information Section */}
        <motion.header className="text-center mb-8" variants={itemVariants}>
          <div className="flex flex-col items-center">
            <motion.img
              src="/image.png"
              alt="Cristian Prodius"
              className="w-32 h-32 rounded-full mb-4 shadow-lg"
              whileHover={{ scale: 1.1 }}
            />
            <motion.h1
              className="text-4xl font-bold mb-2"
              variants={itemVariants}
            >
              Cristian Prodius
            </motion.h1>
            <motion.p className="text-lg mb-2" variants={itemVariants}>
              Front-End Developer
            </motion.p>
            <motion.p className="text-lg" variants={itemVariants}>
              Contact:{" "}
              <a
                href="mailto:cristian@prodiusenterprise.com"
                className="text-blue-500"
              >
                cristian@prodiusenterprise.com
              </a>{" "}
              | (123) 456-7890
            </motion.p>
            <motion.div className="flex space-x-4 mt-4" variants={itemVariants}>
              <a
                href="https://linkedin.com/in/cristianprodius"
                className="text-blue-500 hover:underline"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/cristianprodius"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/cristianprodius"
                className="text-blue-500 hover:underline"
              >
                Twitter
              </a>
            </motion.div>
          </div>
        </motion.header>
        {/* Professional Description Section */}
        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
          <article className="bg-white p-4 rounded shadow">
            <p className="text-lg leading-relaxed mb-4">
              Passionate and dedicated front-end developer with a strong background in creating dynamic and responsive web applications. Experienced in leveraging modern frameworks and libraries to build user-friendly interfaces. Adept at collaborating with cross-functional teams to deliver high-quality software solutions.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Proficient in HTML, CSS, JavaScript, and TypeScript.</li>
              <li>Experienced with React, Next.js, and Tailwind CSS.</li>
              <li>
                Strong understanding of RESTful APIs and asynchronous programming.
              </li>
              <li>Excellent problem-solving skills and attention to detail.</li>
              <li>
                Committed to continuous learning and professional development.
              </li>
            </ul>
          </article>
        </motion.section>
        {/* Education Section */}
        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <article className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">TUM</h3>
            <p className="text-lg">
              Tehnical university FAF where everything was graded and nothing mattered.
            </p>
          </article>
        </motion.section>
        {/* Projects Section */}
        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <article className="bg-white p-4 rounded shadow mb-4">
            <h3 className="text-xl font-semibold mb-2">Ken AI</h3>
            <p className="text-lg mb-2">
              Description of the project, technologies used (e.g., React, Node.js), and any relevant details.
            </p>
            <a
              href="https://getken.ai"
              className="text-blue-500 hover:underline"
            >
              View Project
            </a>
          </article>
        </motion.section>
        {/* Additional Information Section */}
        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
          <p className="text-lg">
            Some additional information idk I don't need a job. I am looking for someone to hire though.
          </p>
        </motion.section>
      </motion.main>
    </>
  );
}
