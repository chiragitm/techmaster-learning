const courses = [
	{
		title: "Web Development",
		description: "Build modern, responsive websites with practical front-end and back-end skills.",
		duration: "12 weeks",
	},
	{
		title: "Java Programming",
		description: "Learn object-oriented programming and create robust applications with Java.",
		duration: "10 weeks",
	},
	{
		title: "Python Programming",
		description: "Get started with Python fundamentals and put your skills to work in projects.",
		duration: "8 weeks",
	},
	{
		title: "Data Science",
		description: "Explore data analysis, visualization, and the foundations of machine learning.",
		duration: "14 weeks",
	},
	{
		title: "Cybersecurity",
		description: "Discover security principles and learn how to protect systems and information.",
		duration: "11 weeks",
	},
	{
		title: "Cloud Computing",
		description: "Understand cloud platforms, core services, and scalable application deployment.",
		duration: "9 weeks",
	},
];

export default function Courses() {
	return (
		<main className="bg-white px-4 py-12 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="mx-auto mb-10 max-w-2xl text-center">
					<p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple-600">
						TechMaster Learning
					</p>
					<h1 className="text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
						Explore Our Courses
					</h1>
					<p className="mt-4 text-base leading-7 text-slate-600">
						Build in-demand technology skills with practical courses designed to help you take your next step.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{courses.map((course) => (
						<article
							key={course.title}
							className="flex flex-col rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-purple-200 hover:shadow-lg"
						>
							<div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-lg font-bold text-purple-700" aria-hidden="true">
								{course.title.charAt(0)}
							</div>
							<h2 className="text-xl font-semibold text-blue-950">{course.title}</h2>
							<p className="mt-3 flex-1 leading-6 text-slate-600">{course.description}</p>
							<p className="mt-5 text-sm font-medium text-blue-800">
								Duration: <span className="font-normal text-slate-600">{course.duration}</span>
							</p>
							<button
								type="button"
								className="mt-5 w-full rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
							>
								View Details
							</button>
						</article>
					))}
				</div>
			</div>
		</main>
	);
}
