const galleryItems = [
	{
		title: "Coding Workshops",
		description: "Hands-on sessions where ideas become working code.",
		image:
			"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
		alt: "Students collaborating during a coding workshop",
	},
	{
		title: "Modern Computer Labs",
		description: "A focused space equipped for learning and building.",
		image:
			"https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=85",
		alt: "Bright computer lab with rows of workstations",
	},
	{
		title: "Student Projects",
		description: "Creative projects that turn technical skills into solutions.",
		image:
			"https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=85",
		alt: "Team reviewing a student technology project",
	},
	{
		title: "Expert Seminars",
		description: "Fresh perspectives from experienced industry mentors.",
		image:
			"https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=85",
		alt: "Speaker presenting at a technology seminar",
	},
	{
		title: "Hackathons",
		description: "Big challenges, bold ideas, and teamwork under pressure.",
		image:
			"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=85",
		alt: "Participants working together at a hackathon",
	},
	{
		title: "Classroom Learning",
		description: "Supportive, interactive lessons for every learning journey.",
		image:
			"https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85",
		alt: "Students learning together in a classroom",
	},
];

export default function Gallery() {
	return (
		<main className="min-h-screen bg-slate-50 px-4 py-16 text-slate-900 sm:px-6 lg:px-8">
			<section className="mx-auto max-w-7xl">
				<div className="mx-auto mb-12 max-w-2xl text-center">
					<p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
						Life at TechMaster
					</p>
					<h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
						Our Gallery
					</h1>
					<p className="mt-5 text-lg leading-8 text-slate-600">
						Explore the people, spaces, and ideas that make learning at TechMaster
						Learning an inspiring hands-on experience.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{galleryItems.map((item) => (
						<article
							key={item.title}
							className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
						>
							<div className="aspect-[4/3] overflow-hidden bg-blue-100">
								<img
									src={item.image}
									alt={item.alt}
									loading="lazy"
									className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
								/>
							</div>
							<div className="p-5">
								<h2 className="text-xl font-semibold text-slate-900">
									{item.title}
								</h2>
								<p className="mt-2 leading-6 text-slate-600">
									{item.description}
								</p>
							</div>
						</article>
					))}
				</div>
			</section>
		</main>
	);
}
