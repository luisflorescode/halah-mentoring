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
      if (sessionData.user.typeOfUser === 'mentor') {
        Router.push('/mentor');
      } else {
        Router.push('/pymes');
      }
    }
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Sign />
      <Benefits />
    </div>
  );
}
