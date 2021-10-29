import React from 'react';
import './index.css';

interface IcicleProps {
	values: { height: number; width: number };
}

const Icicle: React.FC<IcicleProps> = ({ values }) => {
	return (
		<>
			<div
				className='Icicle'
				style={{
					width: values.width,
					height: values.height,
				}}
			/>
		</>
	);
};

export default Icicle;
