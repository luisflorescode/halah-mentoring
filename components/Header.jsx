const Header = () => (
  <header>
    <div>
      <img className="logo" src="./static/idea.png" alt="logo" />
      <h1>#JuntosPodemos</h1>
    </div>
    <ul>
      <li>PYMES</li>
      <li>Mentores</li>
      <li>Iniciar sesión</li>
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

      .logo {
        width: 36px;
        height: 36px;
      }

      h1 {
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

export default Header;
