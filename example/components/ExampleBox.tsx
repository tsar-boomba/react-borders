import React, { useRef } from 'react';
import { Border, BorderSettings } from 'react-borders';

const ExampleBox: React.FC<
	Omit<BorderSettings, 'parentRef'> & { style?: React.CSSProperties; text?: string }
> = ({
	type,
	style,
	heightConstrains,
	widthConstrains,
	backgroundColor,
	offset,
	spacing,
	sides,
	text,
}) => {
	const exmapleBoxRef = useRef<HTMLDivElement>(null);

	return (
		<div
			ref={exmapleBoxRef}
			style={{
				position: 'relative',
				fontSize: 32,
				fontWeight: 'bold',
				backgroundColor: 'green',
				textAlign: 'center',
				marginTop: (heightConstrains?.max || 48) + 16,
				width: 200,
				...style,
			}}
		>
			{text || 'Triangles'}
			<Border
				parentRef={exmapleBoxRef}
				type={type}
				sides={sides}
				heightConstrains={heightConstrains}
				widthConstrains={widthConstrains}
				backgroundColor={backgroundColor}
				offset={offset}
				spacing={spacing}
			/>
		</div>
	);
};

export default ExampleBox;
