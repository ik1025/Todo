import React, {Component} from 'react';

class List extends Component {
	render() {
		return(
			<div>
			<h1>Completed Items: {this.props.count}</h1>
			</div>
		);
	}
}

export default List;