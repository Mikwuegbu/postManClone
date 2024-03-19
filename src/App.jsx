import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import HeroBar from './HeroBar';
import About from './About';
import LayoutComponent from './LayoutComponent';
import Footer from './Footer';

function App() {
	return (
		<LayoutComponent>
			<HeroBar />
			<About />
			<Footer />
		</LayoutComponent>
	);
}

export default App;
library.add(fab, fas, far);
