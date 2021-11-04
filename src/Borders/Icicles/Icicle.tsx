import React from 'react';
import { BorderItemSettings } from '../borderTypes';
import './icicles.css';

const Icicle: React.FC<BorderItemSettings> = ({ values, backgroundColor }) => {
	const isGradient = new RegExp('/\\s/C').test(backgroundColor || '');

	return (
		<>
			<div
				className='Icicle'
				style={{
					width: values.width,
					height: values.height,
					background: isGradient
						? `transparent linear-gradient(${backgroundColor})`
						: backgroundColor,
				}}
			/>
		</>
	);
};

export default Icicle;
