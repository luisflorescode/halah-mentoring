import PropTypes from 'prop-types';
// import playIcon from '../public/static/play-icon.png';

const CarouselItem = ({ url, preview, description, title }) => {
  return (
    <a href={url} className="carousel-item" target="_blank">
      <img className="carousel-item__img" src={preview} />
      <div className="carousel-item__details">
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">{description}</p>
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
    </a>
  );
};

CarouselItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
};

CarouselItem.defaultProps = {
  title: 'Default title',
  description: 'Default description',
  url:
    'https://www.lancetalent.com/blog/wp-content/uploads/paginas_erro_404.png',
  preview: '',
};

export default CarouselItem;
