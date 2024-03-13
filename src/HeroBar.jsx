import { ReactTyped } from 'react-typed';

const HeroBar = () => {
	return (
		<>
			<div className="w-4/6 ml-10 pt-20">
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
				<div className="text-3xl font-semibold tracking-tightfont-mono">
					APIs together
				</div>
				<div className="text-base font-normal pt-2">
					Over 30 million developers use Postman. Get started by <br />
					signing up or downloading the desktop app.
				</div>
				<div className="flex flex-col  space-y-6 py-8">
					<input
						type="email"
						placeholder="mstephen130@example.com"
						className="border border-orange-500 px-2 py-1.5 text-sm rounded-md"
					/>
					<button className="text-white font-bold bg-orange-500 hover:bg-orange-600 py-2 px-3.5 rounded-md text-sm">
						Sign up for Free
					</button>
				</div>
			</div>
		</>
	);
};
export default HeroBar;
