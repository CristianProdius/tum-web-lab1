import Head from "next/head";

export default function Resume() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cristian Prodius - CV/Resume</title>
      </Head>
      <main className="bg-gray-100 text-gray-900 p-8 h-screen">
        {/* Basic Information Section */}
        <header className="text-center mb-8">
          <div className="flex flex-col items-center">
            <img
              src="/image.png"
              alt="Cristian Prodius"
              className="w-32 h-32 rounded-full mb-4 shadow-lg"
            />
            <h1 className="text-4xl font-bold mb-2">Cristian Prodius</h1>
            <p className="text-lg mb-2">Front-End Developer</p>
            <p className="text-lg">
              Contact:{" "}
              <a
                href="mailto:cristian@prodiusenterprise.com"
                className="text-blue-500"
              >
                cristian@prodiusenterprise.com
              </a>{" "}
              | (123) 456-7890
            </p>
            <div className="flex space-x-4 mt-4">
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
            </div>
          </div>
        </header>
        {/* Professional Description Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
          <article className="bg-white p-4 rounded shadow">
            <p className="text-lg leading-relaxed mb-4">
              Passionate and dedicated front-end developer with a strong
              background in creating dynamic and responsive web applications.
              Experienced in leveraging modern frameworks and libraries to build
              user-friendly interfaces. Adept at collaborating with
              cross-functional teams to deliver high-quality software solutions.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Proficient in HTML, CSS, JavaScript, and TypeScript.</li>
              <li>Experienced with React, Next.js, and Tailwind CSS.</li>
              <li>
                Strong understanding of RESTful APIs and asynchronous
                programming.
              </li>
              <li>Excellent problem-solving skills and attention to detail.</li>
              <li>
                Committed to continuous learning and professional development.
              </li>
            </ul>
          </article>
        </section>

        {/* Education Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <article className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">TUM</h3>
            <p className="text-lg">
              Tehnical univeristy FAF where everything was graded and nothing
              mattered.
            </p>
          </article>
        </section>

        {/* Projects Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <article className="bg-white p-4 rounded shadow mb-4">
            <h3 className="text-xl font-semibold mb-2">Ken AI</h3>
            <p className="text-lg mb-2">
              Description of the project, technologies used (e.g., React,
              Node.js), and any relevant details.
            </p>
            <a
              href="https://getken.ai"
              className="text-blue-500 hover:underline"
            >
              View Project
            </a>
          </article>
        </section>

        {/* (Optional) Additional Sections */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Additional Information
          </h2>
          <p className="text-lg">
            Some additional information idk I don't need a job. I am looking for
            someone to hire though.
          </p>
        </section>
      </main>
    </>
  );
}
