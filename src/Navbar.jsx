import logo from './assets/pm-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
	return (
		<nav className="flex py-2 px-3 justify-between fixed top-0 bg-white w-full z-50">
			<div className="flex space-x-3">
				<img src={logo} alt="" className="h-8 w-8 " />
				{/* desktop navBar display */}
				<div className="md:flex space-x-8 hidden font-semibold tracking-tighter">
					<div className="hover:opacity-100 opacity-60">
						<a href="#">Product</a>
					</div>
					<div className="hover:opacity-100 opacity-60 hidden lg:block">
						<a href="#">Pricing</a>
					</div>
					<div className="hover:opacity-100 opacity-60 hidden lg:block">
						<a href="#">Enterprise</a>
					</div>
					<div className="hover:opacity-100 opacity-60 hidden lg:block ">
						<a href="#">Resources and Support</a>
					</div>
					<div className="hover:opacity-100 opacity-60">
						<a href="#">Public API Network</a>
					</div>
					<div className="hover:opacity-100 opacity-60 lg:hidden">
						<a href="#">More</a>
					</div>
				</div>
			</div>
			<div className="relative hidden lg:block">
				<FontAwesomeIcon
					icon="fa-solid fa-magnifying-glass"
					size="sm"
					className="absolute bottom-0 top-4 left-7 opacity-45 overflow-auto"
				/>
				<input
					type="email"
					placeholder="           Search Postman"
					className="cursor-pointer border border-gray-300 px-5 py-2 bg-gray-500 bg-opacity-10 mt-1.5 font-semibold  placeholder-black placeholder-opacity-55 text-xs rounded-md hover:border-black hover:border-opacity-90"
				/>
			</div>

			{/* Mobile navbar Display */}
			<div className="space-x-6 px-3 py-2 md:py-0.5">
				<FontAwesomeIcon
					icon="fa-solid fa-magnifying-glass"
					className="md:hidden opacity-45"
				/>
				<FontAwesomeIcon
					icon="fa-solid fa-bars"
					size="lg"
					id="menuBar"
					className="md:hidden opacity-45 cursor-pointer"
				/>
				<div className="hidden md:block text-xs tracking-tighter space-x-2">
					<FontAwesomeIcon
						icon="fa-solid fa-magnifying-glass fa-2xl"
						className="opacity-45 lg:hidden"
					/>
					<button className="border font-medium border-gray-400 border-opacity-40 py-2 px-3.5 rounded-md hover:border-black hover:border-opacity-50">
						Contact Sales
					</button>
					<button className="border font-medium border-gray-400 border-opacity-40 py-2 px-3.5 rounded-md hover:border-black hover:border-opacity-50">
						Sign In
					</button>
					<button className="text-white font-bold bg-orange-500 hover:bg-orange-600 py-2 px-3.5 rounded-md">
						Sign Up for Free
					</button>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
