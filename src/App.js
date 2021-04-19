import React from 'react';
import Navbar from './components/Header';
import AllJournals from './pages/AllJournals';
// import EntryPage from './pages/EntryPage';
import Wrapper from './components/Wrapper';

function App() {
	return (
		<Wrapper>
			<Navbar />
			<AllJournals />
			{/* <EntryPage /> */}
		</Wrapper>
	);
}

export default App;
