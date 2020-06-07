import Router from 'next/router';

const Message = ({ children }) => {
  const login = () => {
    Router.push('/login');
  };

  return (
    <div>
      <h1>{children}</h1>
      <button onClick={login}>Aceptar</button>

      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 480px;
          margin: 0 auto;
          padding: 25px;
          border-radius: 15px;
        }
      `}</style>
    </div>
  );
};

export default Message;
