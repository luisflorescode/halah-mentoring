import Head from 'next/head';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

export default function PyMES({ ingenieria, negocios, marketing, transformacion, diseño, creacion }) {
  return (
    <div className="container">
      <Head>
        <title>PyMES</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
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

  return { props: { ingenieria, negocios, marketing, transformacion, diseño, creacion } }
}
