import React from 'react';

const ExampleContainer: React.FC<{ backgroundColor?: string }> = ({
	children,
	backgroundColor,
}) => {
	return (
		<div
			style={{
				display: 'flex',
				flexFlow: 'column',
				alignItems: 'center',
				backgroundColor: backgroundColor || 'lightcoral',
				borderRadius: 16,
				boxShadow: '',
				padding: 16,
				margin: 32,
			}}
		>
			{children}
		</div>
	);
};

export default ExampleContainer;
