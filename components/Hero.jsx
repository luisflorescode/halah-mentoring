const Hero = () => (
  <div className="hero">
    <h1>No estás sólo, aquí estámos para ayudarte</h1>
    <div className="content">
      <article>
        <h2>Transformación digital para PYMES a través de mentorías</h2>
        <p>
          orem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen.
        </p>
      </article>
      <img src="./static/team.png" alt="team" />
      <article>
        <h2>Sé mentor y ayuda a PYMES a superar está crisis</h2>
        <p>
          orem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen.
        </p>
      </article>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        padding-top: 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      h1 {
        color: #ea44a9;
        text-shadow: 2px 2px #ffd422;
      }

      article {
        width: 350px;
        margin: 25px;
      }

      .content {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      img {
        margin: 25px;
        height: 250px;
        width: auto;
      }
    `}</style>
  </div>
);

export default Hero;
