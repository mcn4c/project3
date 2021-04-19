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
				<Create id={this.state.user.id} name={this.state.user.firstName} />
				<br></br>

				{this.state.user.map((user) => user.journals.map((journal) => <Card id={journal.journal_id} title={journal.name} />)
			)}
	</Container>
		)
	}

}

export default AllJournals;
