export default function About() {
	return (
		<main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-800 sm:px-10">
			<section className="mx-auto max-w-5xl">
				<header className="mx-auto max-w-3xl text-center">
					<p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
						About our institute
					</p>
					<h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
						Shaping ideas into impact
					</h1>
					<p className="mt-6 text-lg leading-8 text-slate-600">
						We are a technology institute built on the belief that learning
						should prepare people to solve tomorrow’s challenges. Through
						expert teaching, hands-on discovery, and a curious community, we
						help learners turn ambition into meaningful work.
					</p>
				</header>

				<div className="mt-14 grid gap-6 md:grid-cols-3">
					<article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
						<span className="text-sm font-bold text-blue-700">01</span>
						<h2 className="mt-4 text-xl font-semibold text-slate-900">Our beginnings</h2>
						<p className="mt-3 leading-7 text-slate-600">
							Established to make quality technology education accessible, our
							institute has grown into a place where practical skills and fresh
							thinking go hand in hand.
						</p>
					</article>
					<article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
						<span className="text-sm font-bold text-blue-700">02</span>
						<h2 className="mt-4 text-xl font-semibold text-slate-900">What we do</h2>
						<p className="mt-3 leading-7 text-slate-600">
							Experienced educators, modern learning spaces, and real-world
							projects make technology approachable, practical, and relevant.
						</p>
					</article>
					<article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
						<span className="text-sm font-bold text-blue-700">03</span>
						<h2 className="mt-4 text-xl font-semibold text-slate-900">Our purpose</h2>
						<p className="mt-3 leading-7 text-slate-600">
							We empower students to keep learning, collaborate with confidence,
							and use technology responsibly to create a better future.
						</p>
					</article>
				</div>

				<div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl bg-blue-950 p-8 text-center text-white sm:flex-row sm:text-left">
					<div>
						<h2 className="text-2xl font-bold">Ready to discover what’s possible?</h2>
						<p className="mt-2 text-blue-100">Find a community where your ideas can grow.</p>
					</div>
					<a
						href="/"
						className="inline-flex shrink-0 items-center justify-center rounded-lg bg-white px-5 py-3 font-semibold text-blue-950 transition hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-950"
					>
						Explore our institute
					</a>
				</div>
			</section>
		</main>
	);
}
