import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import myIcons from './myIcons';

const Footer = () => {
	return (
		<div>
			<div className="py-16 px-10 md:px-4 mt-12 justify-center lg:py-24 bg-gray-100 bg-opacity-70 md:relative">
				<div className="flex flex-col px-3.5">
					<div className="text-xl font-semibold text-justify pb-4 lg:ml-24">
						Get started with Postman
					</div>
					<input
						type="email"
						placeholder="mstephen130@example.com"
						className="border border-orange-500 px-2 md:mr-[480px] py-2 text-sm rounded-md lg:hidden"
					/>
					<button className="lg:hidden text-white font-bold md:mr-[480px] bg-orange-500 hover:bg-orange-600 py-2 px-3.5 rounded-md text-sm my-4">
						Sign up for Free
					</button>
					{/* Desktop version */}
					<div className="hidden lg:flex items-center border border-orange-400 rounded-r-md w-2/6 ml-24">
						<input
							type="email"
							placeholder="mstephen130@example.com"
							className=" px-4 py-2.5 text-xs rounded-l-md flex-grow"
						/>
						<button className="text-xs md:text-sm lg:text-xs text-white font-bold bg-orange-500 hover:bg-orange-600 py-2.5  px-4 lg:px-4 rounded-r-md min-w-max">
							Sign up for Free
						</button>
					</div>
				</div>
				<img
					src={myIcons.footerHome}
					className="mt-6 px-2 md:absolute md:w-[450px] lg:w-[600px] lg:top-8  lg:right-36 md:top-14 md:right-8"
				/>
			</div>
			<div className="px-6 py-8 md:px-10">
				<div className="grid text-sm grid-cols-2 md:grid-cols-4 md:gap-x-4 md:gap-y-4 gap-y-10 gap-x-14">
					<ul className="space-y-2">
						<li className="font-semibold text-base">Product</li>
						<li className="hover:text-blue-500">
							<a href="#">What is Postman?</a>
						</li>
						<li className="hover:text-blue-500">
							<a href="#">API Repository</a>
						</li>
						<li className="hover:text-blue-500">
							<a href="#">Tools</a>
						</li>
						<li className="hover:text-blue-500">
							<a href="#">Governance</a>
						</li>
						<li className="hover:text-blue-500">
							<a href="#">Workspace</a>
						</li>
						<li className="hover:text-blue-500">
							<a href="#">Integrations</a>
						</li>
						<li className="hover:text-blue-500">
							<a href="#">Enterprise</a>
						</li>
						<li className="hover:text-blue-500">
							<a href="#">Plans and Pricing</a>
						</li>
						<li className="hover:text-blue-500">
							<a href="#">Download the app</a>
						</li>
						<li className="hover:text-blue-500">
							<a href="#">Support centre</a>
						</li>
					</ul>

					<ul className="space-y-2">
						<li className="font-semibold text-base">Company</li>
						<li className="hover:text-blue-500">
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">Careers and Culture</a>
						</li>
						<li className="hover:text-blue-500">
							<a href="#">Press and Media</a>
						</li>
						<li className="hover:text-blue-500">
							<a href="#">Contact Us</a>
						</li>
						<li className="hover:text-blue-500">
							<a href="#">Partner Program</a>
						</li>
					</ul>
					<ul className="space-y-2">
						<li className="font-semibold text-base">Legal and Security</li>
						<li className="hover:text-blue-500">
							<a href="#">Terms of Service</a>
						</li>
						<li>
							<a href="#">Trust and Safety</a>
						</li>
						<li className="hover:text-blue-500">
							<a href="#">Privacy policy</a>
						</li>
						<li className="hover:text-blue-500">
							<a href="#">Cookie notice</a>
						</li>
						<li className="hover:text-blue-500">
							<a href="#">Privacy choices</a>
						</li>
					</ul>
					<ul className="space-y-2">
						<li className="font-semibold text-base">API Categories</li>
						<li className="hover:text-blue-500">
							<a href="#">E-commerce</a>
						</li>
						<li className="hover:text-blue-500">
							<a href="#">eSignature</a>
						</li>
						<li className="hover:text-blue-500">
							<a href="#">Travel</a>
						</li>
						<li className="hover:text-blue-500">
							<a href="#">Database</a>
						</li>
						<li className="hover:text-blue-500">
							<a href="#">All Categories</a>
						</li>
					</ul>
					<ul className="space-y-2">
						<li className="font-semibold text-base">Explore public</li>
						<li className="hover:text-blue-500">
							<a href="#">Collections</a>
						</li>
						<li className="hover:text-blue-500">
							<a href="#">Workspaces</a>
						</li>
						<li className="hover:text-blue-500">
							<a href="#">Teams</a>
						</li>
					</ul>
					<ul className="space-y-2">
						<li className="font-semibold text-base">Social</li>
						<li className="hover:text-blue-500">
							<a href="#" className="">
								<FontAwesomeIcon
									icon="fa-brands fa-twitter"
									style={{ color: '#0000ff' }}
									className="pr-1"
								/>
								Twitter
							</a>
						</li>
						<li className="hover:text-blue-500">
							<a href="#">
								<FontAwesomeIcon
									icon="fa-brands fa-linkedin"
									size="lg"
									style={{ color: '#3e81ca' }}
									className="pr-1"
								/>
								LinkedIn
							</a>
						</li>
						<li className="hover:text-blue-500">
							<a href="#">
								{' '}
								<FontAwesomeIcon
									icon="fa-brands fa-github"
									size="lg"
									className="pr-1"
								/>
								Github
							</a>
						</li>
						<li className="hover:text-blue-500">
							<a href="#">
								<FontAwesomeIcon
									icon="fa-brands fa-youtube"
									size="lg"
									style={{ color: '#ff0000' }}
									className="pr-1"
								/>
								Youtube
							</a>
						</li>
						<li className="hover:text-blue-500">
							<a href="#">
								<FontAwesomeIcon
									icon="fa-brands fa-twitch"
									size="lg"
									className="pr-1"
								/>
								Twitch
							</a>
						</li>
					</ul>
				</div>
				<div className="md:hidden flex justify-center flex-col items-center pb-10">
					<img
						src={myIcons.footer}
						alt="footerimage"
						className="pt-16 h-72 w-72"
					/>
					<div className="text-sm py-6 text-center">@ 2024 Postman, inc</div>
				</div>
			</div>
		</div>
	);
};
export default Footer;
