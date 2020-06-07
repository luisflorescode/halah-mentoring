
const Carousel = ({ children, headerList }) => (
  <section className='carousel'>
    <h3>{headerList}</h3>
    <div className='carousel__container'>{children}</div>

    <style jsx>{`
      .carousel {
        overflow: scroll;
        padding-left: 30px;
        position: relative;
        overflow-x: auto;
        overflow-y: hidden;
      }

      .carousel__container {
        transition: 450ms -webkit-transform;
        transition: 450ms transform;
        transition: 450ms transform, 450ms -webkit-transform;
        font-size: 0;
        white-space: nowrap;
        margin: 70px 0px;
        padding-bottom: 10px;
      }

      .carousel__container:hover .carousel-item {
        opacity: 0.3;
      }

      .carousel__container:hover .carousel-item:hover {
        -webkit-transform: scale(1.5);
        transform: scale(1.5);
        opacity: 1;
      }
    `}</style>
  </section>
);

export default Carousel;
