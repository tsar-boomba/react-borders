import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ExampleBox from '../components/ExampleBox';
import Title from '../components/Title';
import CodeBlock from '../components/CodeBlock';
import { example1 } from './examples';
import ExampleContainer from '../components/ExampleContainer';

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>React Borders Dev</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Title text='React Borders' />

			<main className={styles.main}>
				<ExampleContainer>
					<h1>Basic Usage</h1>
					<ExampleBox type='triangles' sides={[1, 1, 1, 1]} />

					<CodeBlock code={example1} />
				</ExampleContainer>
			</main>
		</div>
	);
};

export default Home;
