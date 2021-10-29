import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRef } from 'react';
import styles from '../styles/Home.module.css';
import Icicles from 'icicles';

const Home: NextPage = () => {
	const boxRef = useRef<HTMLDivElement>(null);

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div
				ref={boxRef}
				style={{
					position: 'relative',
					width: '20%',
					height: '20%',
					margin: '20%',
					padding: 40,
				}}
			>
				Icicles
				<Icicles parentRef={boxRef} />
			</div>
		</div>
	);
};

export default Home;
