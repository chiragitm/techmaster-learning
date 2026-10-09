import { useState } from "react";

export default function Contact() {
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(event) {
		event.preventDefault();
		setSubmitted(true);
	}

	return (
		<main className="min-h-screen bg-blue-50 px-4 py-12 text-slate-800 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-6xl">
				<div className="mb-10 text-center">
					<p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
						TechMaster Learning
					</p>
					<h1 className="text-4xl font-bold tracking-tight text-blue-950 sm:text-5xl">
						Contact Us
					</h1>
					<p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-slate-600">
						We’d love to hear from you. Whether you have a question about our
						courses or need help choosing a learning path, our team is here to
						help.
					</p>
				</div>

				<div className="grid gap-8 rounded-2xl bg-white p-6 shadow-xl shadow-blue-900/5 sm:p-8 lg:grid-cols-5 lg:p-10">
					<section className="lg:col-span-2" aria-labelledby="contact-details-heading">
						<h2 id="contact-details-heading" className="text-2xl font-semibold text-blue-950">
							Get in touch
						</h2>
						<p className="mt-2 text-slate-600">
							Reach out using the details below. These are fictional
							demonstration details, not real contact information.
						</p>

						<dl className="mt-8 space-y-6">
							<div>
								<dt className="text-sm font-semibold text-blue-800">Address</dt>
								<dd className="mt-1 text-slate-600">
									123 Learning Lane, Suite 200
									<br />
									Sample City, CA 90000, USA
									<span className="mt-1 block text-xs text-slate-500">
										Fictional demonstration address
									</span>
								</dd>
							</div>
							<div>
								<dt className="text-sm font-semibold text-blue-800">Email</dt>
								<dd className="mt-1">
									<a className="text-blue-700 hover:underline" href="mailto:hello@example.invalid">
										hello@example.invalid
									</a>
									<span className="mt-1 block text-xs text-slate-500">
										Fictional demonstration email
									</span>
								</dd>
							</div>
							<div>
								<dt className="text-sm font-semibold text-blue-800">Phone</dt>
								<dd className="mt-1 text-slate-600">
									+1 (202) 555-0147
									<span className="mt-1 block text-xs text-slate-500">
										Fictional demonstration number
									</span>
								</dd>
							</div>
						</dl>
					</section>

					<section className="lg:col-span-3" aria-labelledby="enquiry-heading">
						<h2 id="enquiry-heading" className="text-2xl font-semibold text-blue-950">
							Send an enquiry
						</h2>
						<form className="mt-6 space-y-5" onSubmit={handleSubmit}>
							<div>
								<label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-slate-700">
									Name
								</label>
								<input
									id="contact-name"
									name="name"
									type="text"
									autoComplete="name"
									required
									className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
									placeholder="Your name"
								/>
							</div>
							<div>
								<label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-slate-700">
									Email
								</label>
								<input
									id="contact-email"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
									placeholder="you@example.com"
								/>
							</div>
							<div>
								<label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-slate-700">
									Message
								</label>
								<textarea
									id="contact-message"
									name="message"
									rows="5"
									required
									className="w-full resize-y rounded-lg border border-slate-300 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
									placeholder="How can we help?"
								/>
							</div>
							<button
								type="submit"
								className="rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
							>
								Submit
							</button>
							{submitted && (
								<p className="text-sm font-medium text-blue-800" role="status" aria-live="polite">
									Thanks for your enquiry! This demo form does not send messages.
								</p>
							)}
						</form>
					</section>
				</div>
			</div>
		</main>
	);
}
