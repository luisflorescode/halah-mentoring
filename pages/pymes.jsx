import axios from 'axios';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import CarouselMentor from '../components/CarouselMentor';

export default function PyMES({ ingenieria, negocios, marketing, transformacion, diseño, creacion, mentors }) {
  return (
    <div className="container">
      <Head>
        <title>PyMES</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1 className="title">Biblioteca de recursos</h1>
      <Carousel headerList={ingenieria.data[0].categories[0].toUpperCase()}>
        {ingenieria.data.map((item) => (
          <CarouselItem key={item.id} {...item} />
        ))}
      </Carousel>
      <Carousel headerList={marketing.data[0].categories[0].toUpperCase()}>
        {marketing.data.map((item) => (
          <CarouselItem key={item.id} {...item} />
        ))}
      </Carousel>
      <Carousel headerList={negocios.data[0].categories[0].toUpperCase()}>
        {negocios.data.map((item) => (
          <CarouselItem key={item.id} {...item} />
        ))}
      </Carousel>
      <Carousel headerList={transformacion.data[0].categories[0].toUpperCase()}>
        {transformacion.data.map((item) => (
          <CarouselItem key={item.id} {...item} />
        ))}
      </Carousel>
      <Carousel headerList={diseño.data[0].categories[0].toUpperCase()}>
        {diseño.data.map((item) => (
          <CarouselItem key={item.id} {...item} />
        ))}
      </Carousel>
      <Carousel headerList={creacion.data[0].categories[0].toUpperCase()}>
        {creacion.data.map((item) => (
          <CarouselItem key={item.id} {...item} />
        ))}
      </Carousel>
    <h1  className="title">Consigue una mentoria!</h1>
    <Carousel headerList="NUESTROS MENTORES">
      {mentors.data.map((item) => (
        <CarouselMentor key={item.id} {...item} />
      ))}
    </Carousel>
    <style jsx>{`
      .title {
        text-align: center;
      }
    `}</style>
    </div>
  );
}

export async function getServerSideProps() {

  const resI = await fetch(`https://halah-mentoring.herokuapp.com/v1/resources?category=ingenieria`);
  const ingenieria = await resI.json();

  const resD = await fetch(`https://halah-mentoring.herokuapp.com/v1/resources?category=negocios`);
  const negocios = await resD.json();

  const resM = await fetch(`https://halah-mentoring.herokuapp.com/v1/resources?category=marketing`);
  const marketing = await resM.json();

  const resS = await fetch(`https://halah-mentoring.herokuapp.com/v1/resources?category=diseño`);
  const diseño = await resS.json();

  const resT = await fetch(`https://halah-mentoring.herokuapp.com/v1/resources?category=transformacion-digital`);
  const transformacion = await resT.json();

  const resC = await fetch(`https://halah-mentoring.herokuapp.com/v1/resources?category=creacion-de-contenido`);
  const creacion = await resC.json();

  const resE = await fetch(`https://halah-mentoring.herokuapp.com/v1/users?typeOfUser=mentor`);
  const mentors = await resE.json();

  return { props: { ingenieria, negocios, marketing, transformacion, diseño, creacion, mentors } }
}
