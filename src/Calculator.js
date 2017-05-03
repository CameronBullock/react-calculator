import React from 'react';
import css from './style.css';


class Calculator extends React.Component {
  state = {calcDisplay="0" }


  //Numbers when clicking the .reg buttons
  calcNumbers = () => {
          document.getElementById("display").value += this.value;
  };

  // Operators when .op clicked
  calcOperators = () => {
          document.getElementById("display").value += this.value;
  };

  //Decimal when #decimal clicked
  calcDecimal = () => {
          document.getElementById("display").value += this.value;
  };

  //Equal when #equal clicked
  calcEqual = () => {
          display.value = eval(display.value);
  };

  //Clear for new calculation

  // Clear on Double Click
  displayClear = () => {
    document.getElementById("display").value = "";
    calcDisplay = "";
  }


  render() {
    return (
      <div>
        <div className="calculator">
          <div>
            <input id="display">{this}</input>
          </div>

          <div className="operators">
            <input className="op" type="button" id="add" value="+" />
            <input className="op" type="button" id="sub" value="-" />
            <input className="op" type="button" id="mult" value="*" />
            <input className="op" type="button" id="div" value="/" />
          </div>

          <div className="numbers">
            <input type="button" className="button reg" value="1" onClick={}/>
            <input type="button" className="button reg" value="2" />
            <input type="button" className="button reg" value="3" />
          </div>

          <div className="numbers">
            <input type="button" className="button reg" value="4" />
            <input type="button" className="button reg" value="5" />
            <input type="button" className="button reg" value="6" />
          </div>

          <div className="numbers">
            <input type="button" className="button reg" value="7" />
            <input type="button" className="button reg" value="8" />
            <input type="button" className="button reg" value="9" />
          </div>

          <div className="numbers">
            <input type="button" value="0" className="button reg " />
            <input type="button" id="decimal" className="button" value="." />
            <input type="button" id="equal" className="button" value="=" />
          </div>

        </div>
      </div>
    );
  }
};

export default Calculator;
