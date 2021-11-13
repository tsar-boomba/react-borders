import React from 'react';

const ExampleContainer: React.FC = ({ children }) => {
	return (
		<div
			style={{
				display: 'flex',
				flexFlow: 'column',
				alignItems: 'center',
				backgroundColor: 'lightcoral',
				borderRadius: 16,
				boxShadow: '',
				padding: 16,
			}}
		>
			{children}
		</div>
	);
};

export default ExampleContainer;
