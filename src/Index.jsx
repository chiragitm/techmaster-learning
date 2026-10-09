import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import About from './About';
import Courses from './Courses';
import Faculty from './Faculty';
import Gallery from './Gallery';
import Placement from './Placement';
import Contact from './Contact';

const navItems = [
  { name: 'About us', path: '/about' },
  { name: 'Courses', path: '/courses' },
  { name: 'Faculties', path: '/faculty' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Placement', path: '/placement' },
  { name: 'Contact us', path: '/contact' }
]

export default function Index() {
	return (
		<div className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-900">
			<header className="bg-gradient-to-r from-blue-700 to-purple-700 px-6 py-5 text-white">
				<div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
					<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/15 text-2xl font-bold" aria-label="TechMaster Learning logo">
						TM
					</div>
					<div className="flex-1 text-center">
						<h1 className="text-2xl font-bold tracking-wide sm:text-3xl">TechMaster Learning</h1>
						<p className="mt-1 text-sm text-blue-100 sm:text-base">Master Technology, Shape the future</p>
					</div>
					<div className="hidden h-14 w-14 shrink-0 sm:block" aria-hidden="true" />
				</div>
			</header>

			<nav className="bg-blue-800 text-white" aria-label="Main navigation">
				<div className="mx-auto flex max-w-7xl flex-wrap justify-center">
					{navItems.map((item) => (
						<Link key={item.path} to={item.path} className="px-4 py-3 text-sm font-medium transition-colors hover:bg-blue-700 focus:bg-blue-700 focus:outline-none sm:px-6">
							{item.name}
						</Link>
					))}
				</div>
			</nav>

			<main className="mx-auto w-full max-w-7xl flex-1 px-6 py-8">
				<Routes>
                    <Route path='/' element={<About />} />
					<Route path="/about" element={<About />} />
					<Route path="/courses" element={<Courses />} />
					<Route path="/faculty" element={<Faculty />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/placement" element={<Placement />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</main>

			<footer className="bg-gradient-to-r from-blue-700 to-purple-700 px-6 py-4 text-center text-sm text-white">
				© 2026 Training Institute. All rights reserved.
			</footer>
		</div>
	);
}