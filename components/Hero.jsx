const Hero = () => (
  <div className="hero">
    <h1>No estás sólo, aquí hay una comunidad para ayudarte</h1>
    <div className="content">
      <article>
        <h2>Motivación para PyMEs</h2>
        <p>
          Sabes que la curva para adaptarse a la nueva era digital puede ser
          compleja pero ya no estás solo aquí, te conectamos con gente líder en
          tecnología que está dispuesta a ayudarte, porque juntos podemos salir
          de esta.
        </p>
      </article>
      <img src="./static/team.png" alt="team" />
      <article>
        <h2>Motivación para mentores</h2>
        <p>
          Sabemos que tienes algo que enseñar, aquí está la gente que te
          necesita, inscribete, mentorea, haz networking y sobre todo ayuda,
          todo cuenta y generando comunidad juntos podemos.
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
