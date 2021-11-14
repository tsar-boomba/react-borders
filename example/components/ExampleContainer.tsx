import React from 'react';
import { colors } from '../styles/colors';

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
				backgroundColor: backgroundColor || 'aqua',
				borderRadius: 16,
				boxShadow: colors.shadow1,
				padding: 16,
				margin: 32,
			}}
		>
			{children}
		</div>
	);
};

export default ExampleContainer;
