import { ReactTyped } from 'react-typed';
import aeroSpace from './assets/aeroSpace.svg';
import heroPageMobile from './assets/homePageHeroMobile.png';
import heropage from './assets/homePageHero.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeroBar = () => {
	return (
		<div className="">
			<div className="flex">
				<div className="w-4/6 md:w-4/12 ml-12 md:ml-6 pt-20 lg:pt-72 md:pt-40 lg:ml-36 lg:w-3/6">
					<div className="text-4xl font-semibold font-mono">
						<ReactTyped
							strings={[
								'Build',
								'Test',
								'Debug',
								'Document',
								'Monitor',
								'Publish',
								'Build',
							]}
							typeSpeed={250}
							loop={false}
							loopCount={1}
							backSpeed={40}
							cursorChar=" _"
						/>
					</div>
					<div className="text-3xl font-semibold tracking-tight font-mono">
						APIs together
					</div>
					<div className="text-base font-normal pt-2">
						Over 30 million developers use Postman. Get started by{' '}
						<br className="lg:hidden" />
						signing up or downloading the desktop app.
					</div>
					<div className="flex flex-col  space-y-6 md:space-y-4 py-8 md:py-6 md:w-11/12">
						<input
							type="email"
							placeholder="mstephen130@example.com"
							className="border border-orange-500 px-2 py-2 text-sm rounded-md lg:hidden"
						/>
						<button className="lg:hidden text-white font-bold bg-orange-500 hover:bg-orange-600 py-2 px-3.5 rounded-md text-sm">
							Sign up for Free
						</button>

						{/* Fixed the responsive issue in the desktop Mode of this section */}
						<div className="hidden lg:flex items-center border border-orange-400 rounded-r-md min-w-max">
							<input
								type="email"
								placeholder="mstephen130@example.com"
								className=" px-4 py-2.5 text-xs rounded-l-md flex-grow"
							/>
							<button className="text-xs md:text-sm lg:text-xs text-white font-bold bg-orange-500 hover:bg-orange-600 py-2.5  px-4 lg:px-4 rounded-r-md min-w-max">
								Sign up for Free
							</button>
						</div>

						<div className="hidden md:block space-y-1">
							<div className="text-xs font-bold opacity-70">
								Download the desktop app for
							</div>
							<div className="flex space-x-3.5 py px-1">
								<FontAwesomeIcon
									icon="fa-brands fa-windows"
									size="2xl"
									className="bg-gray-100 px-2.5 py-1 rounded-md w-5 cursor-pointer"
								/>
								<FontAwesomeIcon
									icon="fa-brands fa-apple"
									size="2xl"
									className="bg-gray-100 px-2.5 py-1 rounded-md w-5 cursor-pointer"
								/>
								<FontAwesomeIcon
									icon="fa-brands fa-linux"
									size="2xl"
									className="bg-gray-100 px-2.5 py-1 rounded-md w-5 cursor-pointer"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="hidden md:block md:absolute lg:static overflow-hidden">
					<img
						src={heropage}
						alt="HeroPage"
						className="pt-4 lg:static relative left-60 -z-50 lg:w-5/5 lg:-ml-2"
					/>
				</div>
			</div>
			<div className="px-10 md:relative md:py-8">
				<img
					src={aeroSpace}
					alt=""
					className="ml-32 md:h-44 md:absolute md:-top-36 md:right-14 md:-z-40 md:mt-20"
				/>
				<img src={heroPageMobile} className="py-10 px-2 md:hidden" />
			</div>
		</div>
	);
};
export default HeroBar;
