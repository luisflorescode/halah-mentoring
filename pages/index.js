import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Sign from '../components/Sign';
import { useEffect } from 'react';
import Router from 'next/router';

export default function Home() {
  useEffect(() => {
    const sessionData = JSON.parse(localStorage.getItem('session'));
    if (sessionData) {
      Router.push('/pymes');
    }
  }, []);

  return (
    <div className="container">
      <Head>
        <title>#JuntosPodremos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Sign />
      <Benefits />
    </div>
  );
}
