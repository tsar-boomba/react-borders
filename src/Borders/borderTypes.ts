export type sides = 'top' | 'right' | 'bottom' | 'left';

export interface BorderSettings {
	parentRef: React.MutableRefObject<any>;
	side: sides | undefined;
	heightConstrains?: { min: number; max: number };
	widthConstrains?: { min: number; max: number };
	backgroundColor?: string;
	offset?: number | string;
}

export interface BorderItemSettings {
	values: { height: number; width: number };
	backgroundColor?: string;
}
