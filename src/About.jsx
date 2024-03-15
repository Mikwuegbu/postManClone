import tools from './assets/tools.svg';
import repos from './assets/repository.svg';
import workspace from './assets/workspace.svg';
import governance from './assets/governance.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import myIcons from './myIcons';

const About = () => {
	return (
		<div className="">
			<div className="bg-gray-100 bg-opacity-65 pb-8 md:pb-14">
				<div className="px-5 md:px-14 lg:px-36">
					<div className="text-2xl lg:text-3xl font-semibold tracking-tight pb-2 pt-7 lg:pt-20">
						What is PostMan
					</div>
					<div className="text-base tracking-tight text-justify opacity-80 lg:w-3/6 md:w-2/3 md:text-sm lg:text-base">
						Postman is an API platform for building and using APIs. Postman
						simplifies each step of the API lifecycle and streamlines
						collaboration so you can create better APIs—faster.
					</div>
				</div>
				<div className="lg:mx-36">
					<div className="flex flex-wrap lg:flex-nowrap py-10 gap-3 md:gap-6 justify-center">
						<div className="w-5/12 md:w-6/11 bg-white px-3.5 lg:px-6 lg:py-4 py-6 hover:shadow-md rounded-md border">
							<a href="#" className="py-4 ">
								<img src={tools} alt="tools-icon" className="py-2 lg:py-1" />
								<div className="text-lg font-semibold py-2">API Tools</div>
								<div className="text-sm lg:text-xs">
									A comprehensive set of tools that help accelerate the API
									Lifecycle - from design, testing, documentation, and mocking
									to discovery.
								</div>
							</a>
						</div>
						<div className="w-5/12 md:w-6/11 bg-white px-3.5 lg:px-6 lg:py-4 py-6 hover:shadow-md rounded-md border">
							{' '}
							<a href="#" className="">
								<img src={repos} alt="repo-icon" className="py-2 lg:py-1" />
								<div className="text-lg font-semibold py-2">API Repository</div>
								<div className="text-sm lg:text-xs">
									Easily store, iterate and collaborate around all your API
									artifacts on one central platform used across teams.
								</div>
							</a>
						</div>
						<div className="w-5/12 md:w-6/11 bg-white px-3.5 lg:px-6 lg:py-4 py-6 hover:shadow-md rounded-md border">
							<a href="#" className="py-4">
								<img
									src={workspace}
									alt="space-icon"
									className="py-2 lg:py-1"
								/>
								<div className="text-lg font-semibold py-2">Workspaces</div>
								<div className="text-sm lg:text-xs">
									Organize your API work and collaborate with teammates across
									your organization or stakeholders across the world.
								</div>
							</a>
						</div>
						<div className="w-5/12 md:w-6/11 bg-white px-3.5 lg:px-6 lg:py-4 py-6 hover:shadow-md rounded-md border">
							<a href="#" className="w-1/2 bg-white py-4">
								<img
									src={governance}
									alt="governance-icon"
									className="h-12 py-2 lg:py-1"
								/>
								<div className="text-lg font-semibold py-2">Governance</div>
								<div className="text-sm lg:text-xs">
									Improve the quality of APIs with governance rules that ensure
									APIs are designed, built, tested, and distributed meeting
									organizational standards.
								</div>
							</a>
						</div>
					</div>
				</div>
				<a href="#" className="pt-4 flex justify-center">
					<button className="bg-white px-2.5 md:px-3.5 py-1.5 text-sm md:text-xs rounded-md border border-opacity-45 border-gray-400 hover:border-black hover:border-opacity-55">
						Learn more
					</button>
				</a>
			</div>
			<div>
				<div className="pt-16 px-3.5 md:px-8">
					<div className="text-2xl font-semibold pb-3">
						What&apos;s happening on Postman
					</div>
					<div className="text-base">
						Browse the largest network of APIs and share what you build with
						developers across the planet.
					</div>
					<a href="#" className="">
						<span className="text-blue-700 hover:border-blue-700 hover:border-b">
							Explore the Public API Network &nbsp;
							<FontAwesomeIcon
								icon="fa-solid fa-arrow-right"
								size="sm"
								style={{ color: '#0000ff' }}
							/>
						</span>
					</a>
				</div>
				<ul className="pt-4 md:pt-8 px-3.5 space-y-4 md:grid md:grid-cols-2">
					<li className="flex border hover:cursor-pointer mx-1 py-5 px-4 rounded-md hover:shadow-md hover:bg-gray-100 hover:bg-opacity-45">
						<div className="w-14">
							<img src={myIcons.upslogo} alt="ups-logo" className="" />
						</div>
						<div className="text-xs space-y-2">
							<div className="text-base font-semibold flex pl-5">
								UPS APIs{' '}
								<span className="ml-40 hover:opacity-55">
									<FontAwesomeIcon icon="fa-solid fa-link" size="xs" />
								</span>
							</div>
							<div className="space-y-2 px-4 ml-1">
								This workspace contains resources that you can demo and share
								with customers and partners.
								<div className="pt-2 opacity-80">
									<FontAwesomeIcon
										icon="fa-solid fa-boxes-stacked"
										size="sm"
										className="pr-2"
									/>
									Workspace{' '}
									<span className="pl-3">
										By UPS Developers{' '}
										<FontAwesomeIcon
											icon="fa-solid fa-circle-check"
											size="sm"
											style={{ color: '#0000ff' }}
											className="pl-1"
										/>
									</span>
								</div>
								<div className="opacity-80">
									<FontAwesomeIcon
										icon="fa-solid fa-eye"
										size="sm"
										className="pr-2"
									/>
									20+ watchers <span className="pl-4"> 10k+ views</span>
								</div>
							</div>
						</div>
					</li>
					<li className="flex border hover:cursor-pointer mx-1 py-5 px-4 rounded-md hover:shadow-md hover:bg-gray-100 hover:bg-opacity-45">
						<div className="w-14">
							<img src={myIcons.green} alt="ups-logo" className="" />
						</div>
						<div className="text-xs space-y-2">
							<div className="text-base font-semibold flex pl-5">
								UPS APIs{' '}
								<span className="ml-40 hover:opacity-55">
									<FontAwesomeIcon icon="fa-solid fa-link" size="xs" />
								</span>
							</div>
							<div className="space-y-2 px-4 ml-1">
								This workspace contains resources that you can demo and share
								with customers and partners.
								<div className="pt-2 opacity-80">
									<FontAwesomeIcon
										icon="fa-solid fa-boxes-stacked"
										size="sm"
										className="pr-2"
									/>
									Workspace{' '}
									<span className="pl-3">
										By UPS Developers{' '}
										<FontAwesomeIcon
											icon="fa-solid fa-circle-check"
											size="sm"
											style={{ color: '#0000ff' }}
											className="pl-1"
										/>
									</span>
								</div>
								<div className="opacity-80">
									<FontAwesomeIcon
										icon="fa-solid fa-eye"
										size="sm"
										className="pr-2"
									/>
									20+ watchers <span className="pl-4"> 10k+ views</span>
								</div>
							</div>
						</div>
					</li>
					<li className="flex border hover:cursor-pointer mx-1 py-5 px-4 rounded-md hover:shadow-md hover:bg-gray-100 hover:bg-opacity-45">
						<div className="w-14">
							<img src={myIcons.talon} alt="ups-logo" className="" />
						</div>
						<div className="text-xs space-y-2">
							<div className="text-base font-semibold flex pl-5">
								UPS APIs{' '}
								<span className="ml-40 hover:opacity-55">
									<FontAwesomeIcon icon="fa-solid fa-link" size="xs" />
								</span>
							</div>
							<div className="space-y-2 px-4 ml-1">
								This workspace contains resources that you can demo and share
								with customers and partners.
								<div className="pt-2 opacity-80">
									<FontAwesomeIcon
										icon="fa-solid fa-boxes-stacked"
										size="sm"
										className="pr-2"
									/>
									Workspace{' '}
									<span className="pl-3">
										By UPS Developers{' '}
										<FontAwesomeIcon
											icon="fa-solid fa-circle-check"
											size="sm"
											style={{ color: '#0000ff' }}
											className="pl-1"
										/>
									</span>
								</div>
								<div className="opacity-80">
									<FontAwesomeIcon
										icon="fa-solid fa-eye"
										size="sm"
										className="pr-2"
									/>
									20+ watchers <span className="pl-4"> 10k+ views</span>
								</div>
							</div>
						</div>
					</li>
					<li className="flex border hover:cursor-pointer mx-1 py-5 px-4 rounded-md hover:shadow-md hover:bg-gray-100 hover:bg-opacity-45">
						<div className="w-14">
							<img src={myIcons.identity} alt="ups-logo" className="" />
						</div>
						<div className="text-xs space-y-2">
							<div className="text-base font-semibold flex pl-5">
								UPS APIs{' '}
								<span className="ml-40 hover:opacity-55">
									<FontAwesomeIcon icon="fa-solid fa-link" size="xs" />
								</span>
							</div>
							<div className="space-y-2 px-4 ml-1">
								This workspace contains resources that you can demo and share
								with customers and partners.
								<div className="pt-2 opacity-80">
									<FontAwesomeIcon
										icon="fa-solid fa-boxes-stacked"
										size="sm"
										className="pr-2"
									/>
									Workspace{' '}
									<span className="pl-3">
										By UPS Developers{' '}
										<FontAwesomeIcon
											icon="fa-solid fa-circle-check"
											size="sm"
											style={{ color: '#0000ff' }}
											className="pl-1"
										/>
									</span>
								</div>
								<div className="opacity-80">
									<FontAwesomeIcon
										icon="fa-solid fa-eye"
										size="sm"
										className="pr-2"
									/>
									20+ watchers <span className="pl-4"> 10k+ views</span>
								</div>
							</div>
						</div>
					</li>
					<li className="flex border hover:cursor-pointer mx-1 py-5 px-4 rounded-md hover:shadow-md hover:bg-gray-100 hover:bg-opacity-45">
						<div className="w-14">
							<img src={myIcons.intel} alt="ups-logo" className="" />
						</div>
						<div className="text-xs space-y-2">
							<div className="text-base font-semibold flex pl-5">
								UPS APIs{' '}
								<span className="ml-40 hover:opacity-55">
									<FontAwesomeIcon icon="fa-solid fa-link" size="xs" />
								</span>
							</div>
							<div className="space-y-2 px-4 ml-1">
								This workspace contains resources that you can demo and share
								with customers and partners.
								<div className="pt-2 opacity-80">
									<FontAwesomeIcon
										icon="fa-solid fa-boxes-stacked"
										size="sm"
										className="pr-2"
									/>
									Workspace{' '}
									<span className="pl-3">
										By UPS Developers{' '}
										<FontAwesomeIcon
											icon="fa-solid fa-circle-check"
											size="sm"
											style={{ color: '#0000ff' }}
											className="pl-1"
										/>
									</span>
								</div>
								<div className="opacity-80">
									<FontAwesomeIcon
										icon="fa-solid fa-eye"
										size="sm"
										className="pr-2"
									/>
									20+ watchers <span className="pl-4"> 10k+ views</span>
								</div>
							</div>
						</div>
					</li>
					<li className="flex border hover:cursor-pointer mx-1 py-5 px-4 rounded-md hover:shadow-md hover:bg-gray-100 hover:bg-opacity-45">
						<div className="w-14">
							<img src={myIcons.africa} alt="ups-logo" className="" />
						</div>
						<div className="text-xs space-y-2">
							<div className="text-base font-semibold flex pl-5">
								UPS APIs{' '}
								<span className="ml-40 hover:opacity-55">
									<FontAwesomeIcon icon="fa-solid fa-link" size="xs" />
								</span>
							</div>
							<div className="space-y-2 px-4 ml-1">
								This workspace contains resources that you can demo and share
								with customers and partners.
								<div className="pt-2 opacity-80">
									<FontAwesomeIcon
										icon="fa-solid fa-boxes-stacked"
										size="sm"
										className="pr-2"
									/>
									Workspace{' '}
									<span className="pl-3">
										By UPS Developers{' '}
										<FontAwesomeIcon
											icon="fa-solid fa-circle-check"
											size="sm"
											style={{ color: '#0000ff' }}
											className="pl-1"
										/>
									</span>
								</div>
								<div className="opacity-80">
									<FontAwesomeIcon
										icon="fa-solid fa-eye"
										size="sm"
										className="pr-2"
									/>
									20+ watchers <span className="pl-4"> 10k+ views</span>
								</div>
							</div>
						</div>
					</li>
					<li className="flex border hover:cursor-pointer mx-1 py-5 px-4 rounded-md hover:shadow-md hover:bg-gray-100 hover:bg-opacity-45">
						<div className="w-14">
							<img src={myIcons.space} alt="ups-logo" className="" />
						</div>
						<div className="text-xs space-y-2">
							<div className="text-base font-semibold flex pl-5">
								UPS APIs{' '}
								<span className="ml-40 hover:opacity-55">
									<FontAwesomeIcon icon="fa-solid fa-link" size="xs" />
								</span>
							</div>
							<div className="space-y-2 px-4 ml-1">
								This workspace contains resources that you can demo and share
								with customers and partners.
								<div className="pt-2 opacity-80">
									<FontAwesomeIcon
										icon="fa-solid fa-boxes-stacked"
										size="sm"
										className="pr-2"
									/>
									Workspace{' '}
									<span className="pl-3">
										By UPS Developers{' '}
										<FontAwesomeIcon
											icon="fa-solid fa-circle-check"
											size="sm"
											style={{ color: '#0000ff' }}
											className="pl-1"
										/>
									</span>
								</div>
								<div className="opacity-80">
									<FontAwesomeIcon
										icon="fa-solid fa-eye"
										size="sm"
										className="pr-2"
									/>
									20+ watchers <span className="pl-4"> 10k+ views</span>
								</div>
							</div>
						</div>
					</li>
					<li className="flex border hover:cursor-pointer mx-1 py-5 px-4 rounded-md hover:shadow-md hover:bg-gray-100 hover:bg-opacity-45">
						<div className="w-14">
							<img src={myIcons.dolby} alt="ups-logo" className="" />
						</div>
						<div className="text-xs space-y-2">
							<div className="text-base font-semibold flex pl-5">
								UPS APIs{' '}
								<span className="ml-40 hover:opacity-55">
									<FontAwesomeIcon icon="fa-solid fa-link" size="xs" />
								</span>
							</div>
							<div className="space-y-2 px-4 ml-1">
								This workspace contains resources that you can demo and share
								with customers and partners.
								<div className="pt-2 opacity-80">
									<FontAwesomeIcon
										icon="fa-solid fa-boxes-stacked"
										size="sm"
										className="pr-2"
									/>
									Workspace{' '}
									<span className="pl-3">
										By UPS Developers{' '}
										<FontAwesomeIcon
											icon="fa-solid fa-circle-check"
											size="sm"
											style={{ color: '#0000ff' }}
											className="pl-1"
										/>
									</span>
								</div>
								<div className="opacity-80">
									<FontAwesomeIcon
										icon="fa-solid fa-eye"
										size="sm"
										className="pr-2"
									/>
									20+ watchers <span className="pl-4"> 10k+ views</span>
								</div>
							</div>
						</div>
					</li>
					<li className="flex border hover:cursor-pointer mx-1 py-5 px-4 rounded-md hover:shadow-md hover:bg-gray-100 hover:bg-opacity-45">
						<div className="w-14">
							<img src={myIcons.developer} alt="ups-logo" className="" />
						</div>
						<div className="text-xs space-y-2">
							<div className="text-base font-semibold flex pl-5">
								UPS APIs{' '}
								<span className="ml-40 hover:opacity-55">
									<FontAwesomeIcon icon="fa-solid fa-link" size="xs" />
								</span>
							</div>
							<div className="space-y-2 px-4 ml-1">
								This workspace contains resources that you can demo and share
								with customers and partners.
								<div className="pt-2 opacity-80">
									<FontAwesomeIcon
										icon="fa-solid fa-boxes-stacked"
										size="sm"
										className="pr-2"
									/>
									Workspace{' '}
									<span className="pl-3">
										By UPS Developers{' '}
										<FontAwesomeIcon
											icon="fa-solid fa-circle-check"
											size="sm"
											style={{ color: '#0000ff' }}
											className="pl-1"
										/>
									</span>
								</div>
								<div className="opacity-80">
									<FontAwesomeIcon
										icon="fa-solid fa-eye"
										size="sm"
										className="pr-2"
									/>
									20+ watchers <span className="pl-4"> 10k+ views</span>
								</div>
							</div>
						</div>
					</li>
					<li className="flex border hover:cursor-pointer mx-1 py-5 px-4 rounded-md hover:shadow-md hover:bg-gray-100 hover:bg-opacity-45">
						<div className="w-14">
							<img src={myIcons.space} alt="ups-logo" className="" />
						</div>
						<div className="text-xs space-y-2">
							<div className="text-base font-semibold flex pl-5">
								UPS APIs{' '}
								<span className="ml-40 hover:opacity-55">
									<FontAwesomeIcon icon="fa-solid fa-link" size="xs" />
								</span>
							</div>
							<div className="space-y-2 px-4 ml-1">
								This workspace contains resources that you can demo and share
								with customers and partners.
								<div className="pt-2 opacity-80">
									<FontAwesomeIcon
										icon="fa-solid fa-boxes-stacked"
										size="sm"
										className="pr-2"
									/>
									Workspace{' '}
									<span className="pl-3">
										By UPS Developers{' '}
										<FontAwesomeIcon
											icon="fa-solid fa-circle-check"
											size="sm"
											style={{ color: '#0000ff' }}
											className="pl-1"
										/>
									</span>
								</div>
								<div className="opacity-80">
									<FontAwesomeIcon
										icon="fa-solid fa-eye"
										size="sm"
										className="pr-2"
									/>
									20+ watchers <span className="pl-4"> 10k+ views</span>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default About;
