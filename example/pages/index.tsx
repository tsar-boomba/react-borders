import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ExampleBox from '../components/ExampleBox';
import Title from '../components/Title';
import CodeBlock from '../components/CodeBlock';
import { example1, props } from '../examples';
import ExampleContainer from '../components/ExampleContainer';
import { colors } from '../styles/colors';

const exampleText: { style: React.CSSProperties } = {
	style: {
		width: 300,
		marginTop: 16,
		textAlign: 'center',
		fontSize: 24,
	},
};

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>React Borders Example</title>
				<meta name='description' content='Example site for react-borders' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Title text='React Borders' />

			<div className={styles.section}>
				<ExampleContainer backgroundColor={colors.blue1}>
					<h1>Basic Usage</h1>
					<ExampleBox type='triangles' sides={[1, 1, 1, 1]} />

					<CodeBlock code={example1} />
				</ExampleContainer>
			</div>
			<h1
				style={{
					width: '100%',
					textAlign: 'center',
					backgroundColor: colors.blue5,
					padding: '16px 0 16px 0',
				}}
			>
				Props
			</h1>
			<div className={styles.section}>
				<ExampleContainer backgroundColor={colors.blue2}>
					<h1>parentRef</h1>
					<h2>Type: React.MutableRefObject{'<any>'}</h2>
					<h2>Required: true</h2>

					<p {...exampleText}>
						The ref passed to the Border component should contain a reference to the
						element you wish to attach a border to.
					</p>
				</ExampleContainer>
				<ExampleContainer backgroundColor={colors.blue3}>
					<h1>type</h1>
					<h2>Type: 'triangles' | 'ellispes'</h2>
					<h2>Required: true</h2>

					<p {...exampleText}>
						The type of border you would like the component to display.
					</p>
				</ExampleContainer>
			</div>
		</div>
	);
};

export default Home;
