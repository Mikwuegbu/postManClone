import Navbar from './Navbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import HeroBar from './HeroBar';

function App() {
	return (
		<div>
			<Navbar />
			<HeroBar />
		</div>
	);
}

export default App;
library.add(fab, fas, far);
