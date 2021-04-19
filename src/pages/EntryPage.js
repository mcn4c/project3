import React, { Component } from 'react';
import Entry from '../components/Entry';
import Wrapper from '../components/Wrapper';
import SideNav from '../components/SideNav';
import './style.css';

import user from '../user.json';

class EntryPage extends Component {
	// Setting this.state.friends to the friends json array
	state = {
		
		user
	};

	render() {
		return (
			<Wrapper>
				{user.map((user) => <SideNav id={user.journals.journal_id} title={user.journals[0].article.title} />)}

				<Entry />
			</Wrapper>
		);
	}
}

export default EntryPage;
