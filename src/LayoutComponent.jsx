import Navbar from './Navbar';

const LayoutComponent = ({ children }) => {
	return (
		<div>
			<Navbar />
			<div className="container mx-auto mt-16">
				{' '}
				{/* Adjust margin-top for space below navigation */}
				{children} {/* Content or routes will be rendered here */}
			</div>
		</div>
	);
};

export default LayoutComponent;
