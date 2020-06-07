const Benefits = () => (
  <div className="benefits">
    <h2 className="title">Beneficios</h2>
    <div className="benefits_list">
      <div className="benefit">
        <h3 className="benefit__title">Networking</h3>
        <p className="benefit__text">
          Mentoreando o pidiendo mentoría se crearan muchas relaciones, donde
          incluso puedes encontrar a tu próximo socio!
        </p>
      </div>
      <div className="benefit">
        <h3 className="benefit__title">Experiencia</h3>
        <p className="benefit__text">
          Cuando enseñas tu creces y ayudas, esto te ayudará a desarrollar
          nuevas habilidades, además de que es una oportunidad para aportar a
          toda la comunidad de pymes.
        </p>
      </div>
      <div className="benefit">
        <h3 className="benefit__title">Comunidad</h3>
        <p className="benefit__text">
          Ayudar a crear lazos entre comunidades de pymes y desarrolladores, es
          una mezcla muy rica de la cual pueden salir grandes proyectos, nuevas
          oportunidades laborales, y crecer tu marca personal.
        </p>
      </div>
    </div>

    <style jsx>{`
      .benefit {
        width: 350px;
        padding: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #fff;
        border: 1px solid black;
        border-radius: 15px;
      }

      .benefits {
        padding: 25px 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #ffd422;
      }

      .benefit__text {
        text-align: center;
      }

      .benefits_list {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
      }

      .title {
        color: #000;
        text-shadow: 2px 2px #ea44a9;
      }
    `}</style>
  </div>
);

export default Benefits;
