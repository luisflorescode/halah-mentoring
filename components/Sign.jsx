import Router from 'next/router';

const Sign = () => (
  <div className="sign">
    <h1 className="sign__title">¡Sé parte ahora y regístrate!</h1>
    <div className="options">
      <button
        onClick={() => {
          Router.push('/sign-up');
        }}
      >
        Soy PyME
      </button>
      <button
        onClick={() => {
          Router.push('/mentor-sign-up');
        }}
      >
        Soy Mentor
      </button>
    </div>

    <style jsx>{`
      .sign {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 25px;
        background-color: #ea44a9;
        color: #fff;
        text-shadow: 2px 2px #000;
      }

      button {
        padding: 5px;
        margin: 10px;
        background-color: #ffd422;
        color: #000;
        text-shadow: 2px 2px #fff;
      }
    `}</style>
  </div>
);

export default Sign;
