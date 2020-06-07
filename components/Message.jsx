import Router from 'next/router';

const Message = ({ title, children }) => {
  const login = () => {
    Router.push('/login');
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>{children}</p>
      <button onClick={login}>Aceptar</button>

      <style jsx>{`
        div {
          width: 320px;
          height: 240px;
          padding: 25px;
          border-radius: 15px;
        }
      `}</style>
    </div>
  );
};

export default Message;
