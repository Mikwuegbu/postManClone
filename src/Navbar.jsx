const Navbar = () => {
	return (
		<nav className="flex py-2">
			<div className="flex">
				<h1>Logo</h1>
				<ul className="flex space-x-7 py-1.5 font-semibold text-md tracking-tighter text-black ">
					<li>
						<a href="#" className="opacity-70 hover:opacity-100">
							Product
						</a>
					</li>
					<li>
						<a href="#" className="opacity-70 hover:opacity-100">
							Pricing
						</a>
					</li>
					<li>
						<a href="#" className="opacity-70 hover:opacity-100">
							Enterprise
						</a>
					</li>
					<li>
						<a href="#" className="opacity-70 hover:opacity-100">
							Resources and Support
						</a>
					</li>

					<li>
						<a href="#" className="opacity-70 hover:opacity-100">
							Public API Network
						</a>
					</li>
				</ul>
			</div>
			<div className="px-2">
				<input
					placeholder="Search Postman"
					className="bg-gray-300 py-1.5 rounded-md px-2 bg-opacity-30 border border-slate-200 hover:border hover:border-slate-400 text-sm font-thin"
				/>
			</div>
			<div className="space-x-2">
				<button className="border px-5 py-1.5 rounded-md font-normal text-sm hover:border-black hover:border-opacity-40">
					Contact Sales
				</button>
				<button className="border px-5 py-1.5 rounded-md font-normal text-sm hover:border-black hover:border-opacity-40">
					Sign in
				</button>
				<button className="border bg-orange-500 hover:bg-orange-600 text-white px-5 py-1.5 rounded-md font-semibold text-sm">
					Sign Up for Free
				</button>
			</div>
		</nav>
	);
};
export default Navbar;
