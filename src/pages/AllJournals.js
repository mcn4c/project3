import React, { Component } from 'react';
import Card from '../components/Cards';
import Create from '../components/Create';
import { Container } from '../components/Grid';

//file below does not yet exist
import user from '../user.json';

class AllJournals extends Component {
	// Setting this.state.friends to the friends json array
	state = {
		user
		
	};

	render() {
		return (
			<Container>
				<Create id={user[0].id}name={user[0].firstName} />
				<br></br>

				{this.state.user.map((user) => <Card id={user[0].journals[0].journals[0].journal_id} title={user[0].journals[0].name} />
			)}
	</Container>
		)
	}

}

export default AllJournals;
