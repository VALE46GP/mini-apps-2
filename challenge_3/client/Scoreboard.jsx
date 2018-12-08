
import React from 'react';

class Scoreboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div className="grid-container">
          <div className="t-name">name</div>
          <div className="name">Ericio</div>

          <div className="t1">1</div>
          <div className="f1">1</div>
          <div className="f1l">1</div>
          <div className="f1r">/</div>

          <div className="t2">2</div>
          <div className="f2">2</div>
          <div className="f2l">2</div>
          <div className="f2r">/</div>

          <div className="t3">3</div>
          <div className="f3">3</div>
          <div className="f3l">3</div>
          <div className="f3r">/</div>

          <div className="t4">4</div>
          <div className="f4">4</div>
          <div className="f4l">4</div>
          <div className="f4r">/</div>

          <div className="t5">5</div>
          <div className="f5">5</div>
          <div className="f5l">5</div>
          <div className="f5r">/</div>

          <div className="t6">6</div>
          <div className="f6">6</div>
          <div className="f6l">6</div>
          <div className="f6r">/</div>

          <div className="t7">7</div>
          <div className="f7">7</div>
          <div className="f7l">7</div>
          <div className="f7r">/</div>

          <div className="t8">8</div>
          <div className="f8">8</div>
          <div className="f8l">8</div>
          <div className="f8r">/</div>

          <div className="t9">9</div>
          <div className="f9">9</div>
          <div className="f9l">9</div>
          <div className="f9r">/</div>

          <div className="t10">10</div>
          <div className="f10">10</div>
          <div className="f10l">10</div>
          <div className="f10r">/</div>
          <div className="f10b">X</div>

          <div className="t-total">total</div>
          <div className="total">300</div>
        </div>
      </div>
    );
  }
}

export default Scoreboard;
