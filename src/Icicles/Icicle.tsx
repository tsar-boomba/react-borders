import React from 'react';
import './icicles.css';

interface IcicleProps {
	values: { height: number; width: number };
	backgroundColor?: string;
}

const Icicle: React.FC<IcicleProps> = ({ values, backgroundColor }) => {
	const isGradient = new RegExp('/\\s/C').test(backgroundColor || '');
	console.log(isGradient.toString());

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
