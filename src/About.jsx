import tools from './assets/tools.svg';
import repos from './assets/repository.svg';
import workspace from './assets/workspace.svg';
import governance from './assets/governance.svg';

const About = () => {
	return (
		<>
			<div className="px-5 bg-gray-100 bg-opacity-75">
				<div className="">
					<div className="text-2xl font-semibold tracking-tighte pb-2 pt-7">
						What is PostMan
					</div>
					<div className="text-base tracking-tight text-justify opacity-80">
						Postman is an API platform for building and using APIs. Postman
						simplifies each step of the API lifecycle and streamlines
						collaboration so you can create better APIs—faster.
					</div>
				</div>
				<div className="flex flex-wrap columns-2 justify-center py-16 gap-5">
					<a href="#" className="w-40 bg-white py-4 ">
						<img src={tools} alt="tools-icon" className="py-2" />
						<div className="text-lg font-semibold py-2">API Tools</div>
						<div className="text-sm">
							A comprehensive set of tools that help accelerate the API
							Lifecycle - from design, testing, documentation, and mocking to
							discovery.
						</div>
					</a>

					<a href="#" className="w-40 bg-white py-4">
						<img src={repos} alt="repo-icon" className="py-2" />
						<div className="text-lg font-semibold py-2">API Repository</div>
						<div className="text-sm">
							Easily store, iterate and collaborate around all your API
							artifacts on one central platform used across teams.
						</div>
					</a>
					<a href="#" className="w-40 bg-white py-4">
						<img src={workspace} alt="space-icon" className="py-2" />
						<div className="text-lg font-semibold py-2">Workspaces</div>
						<div className="text-sm">
							Organize your API work and collaborate with teammates across your
							organization or stakeholders across the world.
						</div>
					</a>
					<a href="#" className="w-40 bg-white py-4">
						<img src={governance} alt="governance-icon" className="h-12 py-2" />
						<div className="text-lg font-semibold py-2">Governance</div>
						<div className="text-sm">
							Improve the quality of APIs with governance rules that ensure APIs
							are designed, built, tested, and distributed meeting
							organizational standards.
						</div>
					</a>
				</div>
			</div>
		</>
	);
};
export default About;
