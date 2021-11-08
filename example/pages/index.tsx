import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ExampleBox from '../components/ExampleBox';

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>React Borders Dev</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<ExampleBox
				type='triangles'
				sides={[1, 1, 1, 1]}
				backgroundColor='rgba(238,174,202,1) 0%, rgba(148,187,233,1) 50%'
			/>
			<span style={{ height: 100 }} />
			<ExampleBox
				type='ellipses'
				sides={[1, 1, 1, 1]}
				widthConstrains={{ max: 20, min: 10 }}
				heightConstrains={{ max: 15, min: 15 }}
				backgroundColor='rgba(238,174,202,1) 50%, rgba(148,187,233,1) 100%'
			/>
		</div>
	);
};

export default Home;
