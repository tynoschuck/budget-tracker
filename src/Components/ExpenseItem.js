import React from "react";
import { TiDelete } from "react-icons/ti";

const ExpenseItem = (props) => {
    return (
		<li class='list-group-item d-flex justify-content-between align-items-center'>
			{props.name}
			<div class='badge badge-primary badge-pill mr-3'>
				<span>£{props.cost}</span>
				<TiDelete size='1.5em' />
			</div>
		</li>
	);
};

export default ExpenseItem;