import logo from './assets/pm-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
	return (
		<nav className="flex py-2 px-3 justify-between">
			<div>
				<img src={logo} alt="" className="h-8 w-8 " />
			</div>
			<div className="space-x-6 px-3 py-2">
				<FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
				<FontAwesomeIcon icon="fa-solid fa-bars" size="lg" />
			</div>
		</nav>
	);
};
export default Navbar;
