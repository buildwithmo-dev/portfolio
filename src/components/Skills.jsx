export default function Skills() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-10">
          Skills & Tech Stack
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h3 className="font-semibold mb-3">Frontend</h3>
            <p className="text-gray-500">
              React, Tailwind CSS, JavaScript
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Backend</h3>
            <p className="text-gray-500">
              Django, Node.js, REST APIs
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Data</h3>
            <p className="text-gray-500">
              Python, Pandas, ETL Pipelines
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}