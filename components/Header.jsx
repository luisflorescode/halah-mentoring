import { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';

const Header = () => {
  const [sign, setSign] = useState(false);

  useEffect(() => {
    const sessionData = JSON.parse(localStorage.getItem('session'));
    if (sessionData) {
      setSign(true);
    } else {
      setSign(false);
    }
  });

  const logout = () => {
    setSign(false);
    localStorage.removeItem('session');
    Router.push('/');
  };

  return (
    <header>
      <div>
        <Link href="/">
          <h1>#JuntosPodremos</h1>
        </Link>
      </div>
      <ul>
        {sign ? (
          <li onClick={logout}>Cerrar sesión</li>
        ) : (
          <Link href="/login">
            <li>Iniciar sesión</li>
          </Link>
        )}
      </ul>

      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: calc(100% - 100px);
          padding: 0 50px;
          height: 70px;
          background-color: #000;
        }

        div {
          display: flex;
        }

        h1 {
          cursor: pointer;
          margin: 0;
          color: #fff;
          text-shadow: 2px 2px #ea44a9;
        }

        ul {
          list-style-type: none;
          display: flex;
          color: #fff;
        }

        li {
          cursor: pointer;
          margin-left: 1em;
        }

        li:hover {
          color: #ffd422;
        }
      `}</style>
    </header>
  );
};

export default Header;
