import { useState} from "react";
import "./index.css";
import Input from "./Components/Input.component";
import Card from "./Views/Card";

function TipCalculator() {
  //state of each input
  const [amount, setAmount] = useState();
  const [people, setPeople] = useState();
  const [tip, setTip] = useState();


  //calculations
  const totalAmount = (amount * tip) / 100 + Number(amount);
  const amountPerPerson = (totalAmount / people).toFixed(2);
  const tipPerPerson = ((amount * tip) / 100 / people).toFixed(2);

  function unCheckRadioBtns() {
    // Clear the selected radio button in tip section
    const radioButtons = document.querySelectorAll('input[name="tips"]');
    radioButtons.forEach((radio) => {
      if (radio.checked) {
    
    
        radio.checked = false;
      }
    });
  }
  const tipInput = document.getElementById("tip");
  //reset function
  function reset() {
    setAmount("");
    setPeople("");
    setTip("");
    unCheckRadioBtns();
    peopleInputErrorMessage.classList.remove("people_error_text_active");
    peopleInput.classList.remove("people_error");
    tipInput.value = "";
  }

  const handleTipInputChange = (e) => {
    unCheckRadioBtns();
    setTip(e.target.value);
  };

  const peopleInputErrorMessage=document.querySelector(".people_error_text");
  const peopleInput= document.querySelector("#people");

  const handlePeopleInputChange = (e) => {
    setPeople(e.target.value);
    console.log(peopleInput);
    if(e.target.value<1){
      peopleInputErrorMessage.classList.add("people_error_text_active");
      peopleInput.classList.add("people_error");

    }
    else{
      peopleInputErrorMessage.classList.remove("people_error_text_active");
      peopleInput.classList.remove("people_error");

    }
  };

  return (
    <Card cardClass="tip_calculator">
      <Card cardClass="input_form">
        {/*Input Bill Amount */}

        <section className="amount_section">
          <Input
            id="input_amount"
            label="Bill"
            initialValue={amount}
            placeholder="0"
            changeHandler={(e) => setAmount(e.target.value)}
          />
        </section>
        {/*Input/choose tip %*/}
        <section className="tips_section">
          <h1 className="label">Select Tip %</h1>
          <div className="tip_options">
            <input type="radio" name="tips" id="5%" onClick={() => setTip(5)} />
            <label htmlFor="5%" className="tip_option">
              5%
            </label>
            <input
              type="radio"
              name="tips"
              id="10%"
              onClick={() => setTip(10)}
            />
            <label htmlFor="10%" className="tip_option">
              10%
            </label>
            <input
              type="radio"
              name="tips"
              id="15%"
              onClick={() => setTip(15)}
            />
            <label htmlFor="15%" className="tip_option">
              15%
            </label>
            <input
              type="radio"
              name="tips"
              id="25%"
              onClick={() => setTip(25)}
            />
            <label htmlFor="25%" className="tip_option">
              25%
            </label>
            <input
              type="radio"
              name="tips"
              id="50%"
              onClick={() => setTip(50)}
            />
            <label htmlFor="50%" className="tip_option">
              50%
            </label>

            <Input
              id="tip"
              changeHandler={handleTipInputChange}
              placeholder="Custom"
              type="text"
            />
          </div>
        </section>
        {/*Input number of people */}
        <section className="people_section">
          <div className="people_label">
            <label htmlFor="people">Number of People</label>
            <span className="people_error_text">Can't be zero</span>
          </div>
          <Input
            id="people"
            
            initialValue={people}
            placeholder="0"
            changeHandler={handlePeopleInputChange}
          />
        </section>
      </Card>
      <Card cardClass="results">
        <div className="result_display">
          <p>
            Tip Amount <br />
            <span>/ person</span>
          </p>
          <h1>${people > 0 && amount > 0 ? tipPerPerson : "0.00"}</h1>
        </div>
        <div className="result_display">
          <p>
            Total <br />
            <span>/ person</span>
          </p>
          <h1>${people > 0 && amount > 0 ? amountPerPerson : "0.00"}</h1>
        </div>
        <button onClick={reset}>RESET</button>
      </Card>
    </Card>
  );
}

export default TipCalculator;
