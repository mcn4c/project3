import React from 'react';

function Card(props) {
	return (
		<div className="card-page">
			<div className="row">
				<div className="col-sm-4">
					<div className="card" style={{ width: '75%', height: '200px' }}>
						<div className="card-body">
							<h5 className="card-title" key={props.id}>
								{props.title} 
							</h5>
							<i className="fas fa-book" />
							<br />
							<br />
							<a href="#" className="card-link">
								See Entries
							</a>
							<br />
							<a href="#" className="card-link">
								Create New Entry
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
