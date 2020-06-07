import PropTypes from 'prop-types';
// import playIcon from '../public/static/play-icon.png';

const CarouselItem = ({ firstName, lastName, description, calendly }) => {
  return (
    <div className="carousel-item">
      <div className="carousel-item__img">
        <div>
          <p>{`${firstName} ${lastName}`}</p>
          <p>{description}</p>
          <a href={calendly} target="_blank">
            <div>Agendar</div>
          </a>
        </div>
      </div>
      <style jsx>{`
        .carousel-item {
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          display: inline-block;
          width: 300px;
          height: 350px;
          margin-right: 10px;
          font-size: 20px;
          cursor: pointer;
          transition: 450ms all;
          -webkit-transform-origin: center left;
          transform-origin: center left;
        }

        .carousel-item:hover ~ .carousel-item {
          -webkit-transform: translate3d(100px, 0, 0);
          transform: translate3d(100px, 0, 0);
        }

        .carousel-item__img {
          background-color: #ffd422;
          width: 300px;
          height: inherit;
          -o-object-fit: cover;
          object-fit: cover;
        }

        .carousel-item__details {
          align-items: flex-start;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0) 100%
          );
          bottom: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: stretch;
          left: 0;
          opacity: 0;
          transition: 450ms opacity;
          padding: 10px;
          position: absolute;
          right: 0;
          top: 0;
          text-align: justify;
        }

        .carousel-item__details--img {
          width: 20px;
        }

        .carousel-item:hover .carousel-item__details {
          opacity: 1;
        }

        .carousel-item__details--title {
          font-size: 18px;
          color: white;
          word-wrap: break-word; /* IE 5.5-7 */
          white-space: -moz-pre-wrap; /* Firefox 1.0-2.0 */
          white-space: pre-wrap;
          margin: 5px 0px 5px 0px;
        }

        .carousel-item__details--subtitle {
          color: white;
          word-wrap: break-word; /* IE 5.5-7 */
          white-space: -moz-pre-wrap; /* Firefox 1.0-2.0 */
          white-space: pre-wrap;
          font-size: 12px;
          margin: 3px 0px;
        }
      `}</style>
    </div>
  );
};

CarouselItem.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  calendly: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

CarouselItem.defaultProps = {
  firstName: 'Nombre',
  lastName: 'Apellido',
  description: 'descripcion',
  calendly: 'link de calendly',
  email: 'nombre@mail.com',
};

export default CarouselItem;
