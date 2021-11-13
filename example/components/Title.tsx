import React from 'react';
import { useRef } from 'react';
import { Border } from '../../lib/esm';

const Title: React.VFC<{ text: string }> = ({ text }) => {
	const titleRef = useRef<HTMLHeadingElement>(null);

	return (
		<h1
			ref={titleRef}
			style={{
				position: 'relative',
				fontSize: '7vw',
				marginBottom: '8rem',
				zIndex: 1,
			}}
		>
			{text}
			<Border
				parentRef={titleRef}
				type='triangles'
				sides={[0, 0, 1, 0]}
				offset='85%'
				heightConstrains={{ max: 100, min: 40 }}
				widthConstrains={{ max: 30, min: 10 }}
			/>
			<span
				style={{
					position: 'absolute',
					top: '20%',
					height: '65%',
					backgroundColor: 'rgba(205, 252, 255, 1)',
					width: '100%',
					left: 0,
					zIndex: -1,
					borderTopLeftRadius: 10,
					borderTopRightRadius: 10,
				}}
			/>
		</h1>
	);
};

export default Title;
