import ReactDOM from "react-dom";
import React from "react";
import "./styl.css";

class EkranKal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { wynik: "" };
  }
  usun = () => {
    this.setState({ wynik: "" });
  };
  usun_jeden_znak = () => {
    this.setState({ wynik: this.state.wynik.slice(0, -1) });
  };
  laczenie = przyciski => {
    if (przyciski === "delete") {
      this.usun();
    } else if (przyciski === "c") {
      this.usun_jeden_znak();
    } else if (przyciski === "=") {
      this.obliczanie();
    } else {
      this.setState({ wynik: this.state.wynik + przyciski });
    }
  };
  obliczanie = () => {
    try {
      this.setState({ wynik: (eval(this.state.wynik) || "") + "" });
    } catch (e) {
      this.setState({ wynik: "error" });
    }
  };
  render() {
    return (
      <div className="nav">
        <p>Najprostrzy kalkulator napisany w react.js</p>
        <div className="container">
          <div className="ekran">
            <p className="viev">{this.state.wynik}</p>
          </div>
          <div className="przyciski">
            <div>
              <button id="ukryty">m</button>
              <button onClick={e => this.laczenie(e.target.name)} name="%">
                %
              </button>
              <button onClick={e => this.laczenie(e.target.name)} name="c">
                C
              </button>
              <button onClick={e => this.setState(this.usun)}>delete</button>
            </div>
            <div>
              <button onClick={e => this.laczenie(e.target.name)} name="7">
                7
              </button>
              <button onClick={e => this.laczenie(e.target.name)} name="8">
                8
              </button>
              <button onClick={e => this.laczenie(e.target.name)} name="9">
                9
              </button>
              <button onClick={e => this.laczenie(e.target.name)} name="/">
                /
              </button>
            </div>
            <div>
              <button onClick={e => this.laczenie(e.target.name)} name="4">
                4
              </button>
              <button onClick={e => this.laczenie(e.target.name)} name="5">
                5
              </button>
              <button onClick={e => this.laczenie(e.target.name)} name="6">
                6
              </button>
              <button onClick={e => this.laczenie(e.target.name)} name="*">
                *
              </button>
            </div>
            <div>
              <button onClick={e => this.laczenie(e.target.name)} name="1">
                1
              </button>
              <button onClick={e => this.laczenie(e.target.name)} name="2">
                2
              </button>
              <button onClick={e => this.laczenie(e.target.name)} name="3">
                3
              </button>
              <button onClick={e => this.laczenie(e.target.name)} name="-">
                -
              </button>
            </div>
            <div>
              <button onClick={e => this.laczenie(e.target.name)} name="0">
                0
              </button>
              <button onClick={e => this.laczenie(e.target.name)} name=".">
                .
              </button>
              <button onClick={e => this.laczenie(e.target.name)} name="=">
                =
              </button>
              <button onClick={e => this.laczenie(e.target.name)} name="+">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<EkranKal />, document.getElementById("root"));
