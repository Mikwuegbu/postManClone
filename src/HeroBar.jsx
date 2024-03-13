import { useState } from 'react';
import { ReactTyped } from 'react-typed';

const HeroBar = () => {
	return (
		<>
			<div className="">
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
				<div className="text-base font-normal">
					Over 30 million developers use Postman. Get started by signing up or
					downloading the desktop app.
				</div>
				<div className="flex flex-col ">
					<input
						type="email"
						placeholder="mstephen130@example.com"
						className="border border-orange-500 px-2 py-2 text-sm"
					/>
					<button>Sign up for Free</button>
				</div>
			</div>
		</>
	);
};
export default HeroBar;
