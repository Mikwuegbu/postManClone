import tools from './assets/tools.svg';
import repos from './assets/repository.svg';
import workspace from './assets/workspace.svg';
import governance from './assets/governance.svg';

const About = () => {
	return (
		<div className="">
			<div className="bg-gray-100 bg-opacity-65">
				<div className="px-5 md:px-14">
					<div className="text-2xl font-semibold tracking-tight pb-2 pt-7">
						What is PostMan
					</div>
					<div className="text-base tracking-tight text-justify opacity-80 md:w-2/3 md:text-sm">
						Postman is an API platform for building and using APIs. Postman
						simplifies each step of the API lifecycle and streamlines
						collaboration so you can create better APIs—faster.
					</div>
				</div>
				<div className="">
					<div className="flex flex-wrap py-10 gap-3 md:gap-6 justify-center">
						<div className="w-5/12 md:w-6/11 bg-white px-3.5 py-6 hover:shadow-md rounded-md">
							<a href="#" className="py-4 ">
								<img src={tools} alt="tools-icon" className="py-2" />
								<div className="text-lg font-semibold py-2">API Tools</div>
								<div className="text-sm">
									A comprehensive set of tools that help accelerate the API
									Lifecycle - from design, testing, documentation, and mocking
									to discovery.
								</div>
							</a>
						</div>
						<div className="w-5/12 md:w-6/11 bg-white px-3.5 py-6 hover:shadow-md rounded-md">
							{' '}
							<a href="#" className="">
								<img src={repos} alt="repo-icon" className="py-2" />
								<div className="text-lg font-semibold py-2">API Repository</div>
								<div className="text-sm">
									Easily store, iterate and collaborate around all your API
									artifacts on one central platform used across teams.
								</div>
							</a>
						</div>
						<div className="w-5/12 md:w-6/11 bg-white px-3.5 py-6 hover:shadow-md rounded-md">
							<a href="#" className="py-4">
								<img src={workspace} alt="space-icon" className="py-2" />
								<div className="text-lg font-semibold py-2">Workspaces</div>
								<div className="text-sm">
									Organize your API work and collaborate with teammates across
									your organization or stakeholders across the world.
								</div>
							</a>
						</div>
						<div className="w-5/12 md:w-6/11 bg-white px-3.5 py-6 hover:shadow-md rounded-md">
							<a href="#" className="w-1/2 bg-white py-4">
								<img
									src={governance}
									alt="governance-icon"
									className="h-12 py-2"
								/>
								<div className="text-lg font-semibold py-2">Governance</div>
								<div className="text-sm">
									Improve the quality of APIs with governance rules that ensure
									APIs are designed, built, tested, and distributed meeting
									organizational standards.
								</div>
							</a>
						</div>
						<a href="#" className="pt-12">
							<button className="bg-white px-3.5 py-1.5 text-sm rounded-md border border-opacity-45 border-gray-400 hover:border-black hover:border-opacity-55">
								Learn more
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
export default About;
