const About = () => {
	return (
		<>
			<div className="px-5">
				<div>
					<div className="text-2xl font-semibold tracking-tighte pb-2">
						What is PostMan
					</div>
					<div className="text-base text-justify opacity-80">
						Postman is an API platform for building and using APIs. Postman
						simplifies each step of the API lifecycle and streamlines
						collaboration so you can create better APIs—faster.
					</div>
				</div>
				<div className="flex flex-wrap columns-2">
					<div className="w-40">
						<div className="text-lg font-semibold py-2">API Tools</div>
						<div className="text-sm">
							A comprehensive set of tools that help accelerate the API
							Lifecycle - from design, testing, documentation, and mocking to
							discovery.
						</div>
					</div>
					<div className="w-40">
						<div className="text-lg font-semibold py-2">API Repository</div>
						<div className="text-sm">
							Easily store, iterate and collaborate around all your API
							artifacts on one central platform used across teams.
						</div>
					</div>
					<div className="w-40">
						<div className="text-lg font-semibold py-2">Workspaces</div>
						<div className="text-sm">
							Organize your API work and collaborate with teammates across your
							organization or stakeholders across the world.
						</div>
					</div>
					<div className="w-40">
						<div className="text-lg font-semibold py-2">Governance</div>
						<div className="text-sm">
							Improve the quality of APIs with governance rules that ensure APIs
							are designed, built, tested, and distributed meeting
							organizational standards.
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default About;
