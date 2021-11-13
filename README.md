# React Borders

## Basic Usage

You can attach a border to an element using the border component exported from react-borders.

The below code will generate a box with triangles on all sides.

**NOTE: The border component will set the position property of the parent to relative.**

```tsx
import React, { useRef } from 'react';
import { Border } from 'react-borders';

const BorderBox: React.VFC = () => {
	const boxRef = useRef<HTMLDivElement>(null);

	return (
		<div style={{ position: 'relative' }} ref={boxRef}>
			Triangles
			<Border parentRef={boxRef} type='triangles' sides={[1, 1, 1, 1]} />
		</div>
	);
};
```

## Example

The exmaple site is deployed [to vercel here](https://react-borders.vercel.app/). It is not yet complete.

## Border

This is a function component used attach and customize borders.

### Usage

For usage of this component, reference the basic usage section of the README.

### Props

The prop types for the Border component are exported from the package, if you want to use them.

```ts
import { BorderSettings } from 'react-borders';
```

#### parentRef

Type: `React.MutableRefObject<any>`
Required: true

The ref passed to the Border component should contain a reference to the element you wish to attach a border to.

#### type

Type: `'triangles' | 'ellipses'`
Required: true

The type of border you would like the component to display.

#### sides

Type: `[0 | 1 | undefined, 0 | 1 | undefined, 0 | 1 | undefined, 0 | 1 | undefined]`
Required: false

Each position in the array correlates to a side of the element being populated with a border.
[top, right, bottom, left]

Example: [1, 0, 1, 0] would place a border on only the top and bottom

#### widthContrains & heightConstrains

Type: `{ max: number, min: number }`
Required: false

Sets the max height and width for each element in the border.

#### backgroundColor

Type: string
Required: false

Sets the color of the border elements. Anything CSS supports, this does as well.

You can even set the background to a linear gradient. All you have to do is pass the colors and when they stop, as you can see in the example below.

```tsx
const Component = () => (
	<Border
		parentRef={ref}
		type='triangles'
		sides={[1, 1, 1, 1]}
		backgroundColor='red 60%, green 20%, blue 20%'
	/>
);
```

#### offset

Type: string | number
required: false

This prop is used to decide how far the border should be from the element, 100% means it is on the element border, lower makes it closer, while higher does the opposite.

#### spacing

Type: number
required: false

How far apart each element in the border should be from each other.

## BorderSettings

A interface that defines all of the props listed above, for your convenience.
