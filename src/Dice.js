import React from 'react';

function Dice(props) {
	
	
	return (
		<div className={props.isHeld ? "is-held dice-face" : "dice-face"} onClick={props.toggleHeld}>
			<h1>{props.value}</h1>
		</div>
	)
}

export default Dice;

