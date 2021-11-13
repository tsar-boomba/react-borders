import React from 'react';
import { CopyBlock, monokai } from 'react-code-blocks';
import { colors } from '../styles/colors';

interface CodeBlockProps {
	code: string;
	language?: 'tsx' | 'typescript';
	style?: React.CSSProperties;
}

const CodeBlock: React.VFC<CodeBlockProps> = ({ code, language, style }) => {
	return (
		<div style={{ marginTop: 64, position: 'relative' }}>
			<CopyBlock
				text={code}
				theme={monokai}
				language={language || 'tsx'}
				customStyle={{ overflowX: 'auto', ...style }}
				wrapLongLines={false}
			/>
			<div
				style={{
					position: 'absolute',
					bottom: 16,
					right: 16,
					backgroundColor: colors.ts,
					borderRadius: 8,
					padding: '4px 6px 4px 6px',
					textAlign: 'center',
					fontWeight: 'bold',
					fontSize: 16,
					color: '#ffffff',
				}}
			>
				TSX
			</div>
		</div>
	);
};

export default CodeBlock;
