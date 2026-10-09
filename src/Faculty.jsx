const faculties = [
  {
    name: "Aarav Mehta",
    initials: "AM",
    subject: "Web Development",
    bio: "Aarav helps learners build accessible, responsive websites and turn modern frontend concepts into practical projects.",
  },
  {
    name: "Priya Nair",
    initials: "PN",
    subject: "Java Programming",
    bio: "Priya makes object-oriented programming approachable, guiding students from Java fundamentals to application design.",
  },
  {
    name: "Kabir Shah",
    initials: "KS",
    subject: "Data Science",
    bio: "Kabir introduces data analysis and machine learning through clear explanations, real-world examples, and hands-on practice.",
  },
  {
    name: "Ananya Rao",
    initials: "AR",
    subject: "Cloud Computing",
    bio: "Ananya teaches cloud architecture and deployment skills, helping students understand how reliable services scale.",
  },
];

export default function Faculty() {
  return (
    <main className="min-h-screen bg-blue-50 px-4 py-16 text-slate-800 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-700">
            TechMaster Learning
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Meet Our Faculties
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Learn from thoughtful mentors who bring practical experience and a
            passion for teaching to every lesson.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {faculties.map((faculty) => (
            <article
              key={faculty.name}
              className="flex flex-col rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div
                aria-hidden="true"
                className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-700 ring-4 ring-blue-50"
              >
                {faculty.initials}
              </div>
              <h2 className="text-xl font-semibold text-slate-900">
                {faculty.name}
              </h2>
              <p className="mt-1 text-sm font-semibold text-blue-700">
                {faculty.subject}
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {faculty.bio}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}