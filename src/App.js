import React, {useState} from 'react';
import Navbar from './components/Header';
import ThemeHeader from "./components/ThemeHeader"
// import AllJournals from './pages/AllJournals';
import EntryPage from './pages/EntryPage';
import Wrapper from './components/Wrapper';
import themes from './themes';

function App() {

	const [theme, setTheme] = useState('');

	const handleChange = (selectedTheme) => {
		setTheme(themes[selectedTheme.value]);
	};
	const refCallback = (node) => {
		if (node) {
		  theme &&
			Object.keys(theme).forEach((element) => {
			  node.style.setProperty(element, theme[element], 'important');
			  if (element === 'background-color' || element === 'background') {
				// apply the same background mentioned for theme to the body of the website
				document.body.style.background = theme[element];
			  }
			});
		}
	  };

	return (
		<Wrapper>
			<Navbar />
			{/* <AllJournals /> */}
			<div ref={refCallback} className="main-section">
				<ThemeHeader handleChange={handleChange} />
			<EntryPage />
			</div>
		</Wrapper>
	);
}

export default App;
