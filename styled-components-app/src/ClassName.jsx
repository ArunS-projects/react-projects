import React, { useState } from 'react';
import classNames from 'classnames';
import '../src/styles/Classname.css'

export default function Button (props) {
	const [isPressed, setIsPressed] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	// let btnClass = 'btn';
	// if (isPressed) btnClass += ' btn-pressed';
	// else if (isHovered) btnClass += ' btn-over';

    const btnClass = classNames({
		btn: true,
		'btn-pressed': isPressed,
		'btn-over': !isPressed && isHovered,
	});

	return (
		<button
			className={btnClass}
			onClick={() => setIsPressed(true)}
			onDoubleClick={() => setIsPressed(false)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{props.label}
		</button>
	);
}