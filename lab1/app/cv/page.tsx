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
          <h1 className="text-4xl font-bold mb-2">Cristian Prodius</h1>
          <p className="text-lg">
            Contact:{" "}
            <a href="mailto:Prodius@Cristian.com" className="text-blue-500">
              Prodius@Cristian.com
            </a>{" "}
            | (123) 456-7890
          </p>
        </header>

        {/* Professional Description Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            I enjoy drawing and exploring creative technologies, and I aspire to
            become a specialized front-end programmer. Briefly, I love learning
            new frameworks and building intuitive user interfaces.
          </p>
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
