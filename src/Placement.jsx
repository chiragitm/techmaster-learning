import React from "react";

const stories = [
  {
    name: "Aarav Mehta",
    role: "Aspiring Frontend Developer",
    text: "In this fictional example, Aarav builds confidence through portfolio reviews and practice interviews.",
  },
  {
    name: "Maya Patel",
    role: "Future Data Analyst",
    text: "Maya's imaginary journey shows how project feedback can help learners communicate their skills.",
  },
  {
    name: "Noah Kim",
    role: "Junior UX Designer",
    text: "In this made-up story, Noah refines a design portfolio and practices presenting ideas clearly.",
  },
];

export default function Placement() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <section className="rounded-3xl bg-gradient-to-r from-blue-700 via-blue-800 to-purple-800 px-6 py-14 text-white shadow-xl sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
            TechMaster Learning
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Placement Page
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Explore career opportunities, strengthen your skills, and take your
            next step with guidance from a community focused on your growth.
          </p>
          <button
            type="button"
            className="mt-8 rounded-lg bg-white px-6 py-3 font-semibold text-blue-800 shadow transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
          >
            Learn More
          </button>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm">
            <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-3 text-xl text-blue-700" aria-hidden="true">✦</div>
            <h2 className="text-2xl font-bold text-slate-900">Career Support</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Identify your strengths, shape a career plan, and learn to present
              your projects. Our resources can support you as you explore paths
              that match your interests and goals.
            </p>
          </article>
          <article className="rounded-2xl border border-purple-100 bg-white p-7 shadow-sm">
            <div className="mb-4 inline-flex rounded-xl bg-purple-100 p-3 text-xl text-purple-700" aria-hidden="true">◎</div>
            <h2 className="text-2xl font-bold text-slate-900">Interview Preparation</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Practice introductions, thoughtful answers, and technical
              conversations. Mock interviews and constructive feedback can help
              you approach opportunities with confidence.
            </p>
          </article>
        </section>

        <section className="mt-14" aria-labelledby="placement-stories-heading">
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-700">
            Imagined learner journeys
          </p>
          <h2 id="placement-stories-heading" className="mt-2 text-3xl font-bold text-slate-900">
            Student success stories
          </h2>
          <p className="mt-2 text-slate-600">
            These clearly fictional examples illustrate possible learning journeys;
            they do not represent real student outcomes or placement statistics.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {stories.map((story) => (
              <article key={story.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-purple-100 font-bold text-blue-800" aria-hidden="true">
                  {story.name.split(" ").map((part) => part[0]).join("")}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{story.name}</h3>
                <p className="mt-1 text-sm font-medium text-purple-700">{story.role}</p>
                <p className="mt-4 leading-7 text-slate-600">{story.text}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}