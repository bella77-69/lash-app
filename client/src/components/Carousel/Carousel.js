import React from "react";
import "./Carousel.scss";

class Carousel extends React.Component {
  state = {
    currentIndex: 0,
  };

  componentDidMount() {
    window.addEventListener("keyup", this.onKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.onKeyUp);
  }

  onKeyUp = (e) => {
    if (e.keyCode) {
      if (e.keyCode === 39) {
        this.showNextSet();
      } else if (e.keyCode === 37) {
        this.showPrevSet();
      }
    }
  };

  render() {
    const { images } = this.props;
    const { currentIndex } = this.state;

    return (
      <div className="carousel">
        <div className="carousel-container">
          {images.map((img, index) => {
            let className = "carousel-image";
            if (index === currentIndex) className += "-active";

            return <img src={img} className={className} key={`img-${index}`} />;
          })}
        </div>
        <div className="carousel-controls">
          <button className="carousel-button" onClick={this.showPrevSet}>
            Prev<i className="fa fa-arrow-left"></i>
          </button>
          <button className="carousel-button" onClick={this.showNextSet}>
            Next<i className="fa fa-arrow-right"></i>
          </button>
        </div>
      </div>
    );
  }

  showPrevSet = () => {
    const currentIndex =
      (this.state.currentIndex - 1 + this.props.images.length) %
      this.props.images.length;
    this.setState({ currentIndex });
  };

  showNextSet = () => {
    const currentIndex =
      (this.state.currentIndex + 1) % this.props.images.length;
    this.setState({ currentIndex });
  };
}

export default Carousel;
