const defaultExample = (code: string, text = 'Triangles') => {
	return `import React, { useRef } from 'react';
import { Border } from 'react-borders';

const Component = () => {
	const boxRef = useRef<HTMLDivElement>(null);

	return (
		<div ref={boxRef}>
			'${text}'
			${code}
		</div>
	);
}
`;
};

export const example1 = defaultExample(
	`<Border
				type='triangles'
				parentRef={boxRef}
				sides={[1, 1, 1, 1]}
			/>`,
);

export const props = {
	backgroundColor: defaultExample(
		`<Border
				type='ellipses'
				parentRef={boxRef}
				sides={[1, 1, 0, 1]}
				backgroundColor='#ffffff'
			/>
		`,
		'ellipses',
	),
};
