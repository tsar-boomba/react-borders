export type BorderTypes = 'triangles' | 'ellipses';
export type Sides = 'top' | 'right' | 'bottom' | 'left';

export interface WrapperSettings {
	parentRef: React.MutableRefObject<any>;
	side: Sides | undefined;
	heightConstrains?: { min: number; max: number };
	widthConstrains?: { min: number; max: number };
	backgroundColor?: string;
	offset?: number | string;
	spacing?: number;
}

export type BorderSettings = {
	type: BorderTypes;
	sides: [0 | 1 | undefined, 0 | 1 | undefined, 0 | 1 | undefined, 0 | 1 | undefined];
} & Omit<WrapperSettings, 'side'>;

export interface BorderItemSettings {
	values: { height: number; width: number };
	side: Sides;
	spacing: number;
	backgroundColor?: string;
}
