export const example1 = `import React, { useRef } from 'react';
import { Border } from 'react-borders';

const BorderBox = () => {
	const boxRef = useRef<HTMLDivElement>(null);

	return (
		<div ref={boxRef}>
			'Triangles'
			<Border type='triangles' parentRef={boxRef} sides={[1, 1, 1, 1]} />
		</div>
	);
}
`;
