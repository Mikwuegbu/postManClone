import myIcons from './myIcons';

const Footer = () => {
	return (
		<div>
			<div className="py-16 px-10 mt-12 justify-center bg-gray-100 bg-opacity-70">
				<div className="flex flex-col px-3.5">
					<div className="text-xl font-semibold text-justify pb-4">
						Get started with Postman
					</div>
					<input
						type="email"
						placeholder="mstephen130@example.com"
						className="border border-orange-500 px-2 py-2 text-sm rounded-md lg:hidden"
					/>
					<button className="lg:hidden text-white font-bold bg-orange-500 hover:bg-orange-600 py-2 px-3.5 rounded-md text-sm my-4">
						Sign up for Free
					</button>
				</div>
				<img src={myIcons.footerHomepage} className="mt-6 px-2" />
			</div>
		</div>
	);
};
export default Footer;
