import React from "react";

// this step user Name details and department

class StepOne extends React.Component {
    constructor() {
        super();
        this.state = {
            firstname: "",
            lastname: "",
            department: "",
            firstnameValid: false,
            lastnameValid: false
        };
        this.handlefirstname = this.handlefirstname.bind(this);
        this.handlelastname = this.handlelastname.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }
    handlefirstname(event){
        this.setState({ firstname: event.target.value });
        this.setState({ firstnameValid: !!event.target.value.trim() });
    }
    debugger;
    handlelastname(event){
        this.setState({ lastname: event.target.value });
        this.setState({ lastnameValid: !!event.target.value.trim() });
    }
    handleOptionChange(event) {
        this.setState({ department: event.target.value });
    }
    handleSubmit(event) {
        alert("submit ");
        event.preventDefault();
    }
    

    render() {
        return <div className="container">
            <form className="form" onSubmit={this.handleSubmit}>
              <label>Firstname :</label>
              <input type="text" placeholder="firstname" autoFocus value={this.state.firstname} onChange={this.handlefirstname} />

              <label>Lastname :</label>
              <input type="text" placeholder="lastname" value={this.state.lastname} onChange={this.handlelastname} />

              <label>
                Select Department:
                <select value={this.state.value} onChange={this.handleOptionChange}>
                  <option value="Dental">Dermatologist</option>
                  <option value="EnT">EnT</option>
                  <option value="Physician">Physician</option>
                  <option value="Dermatologist">Dermatologist</option>
                </select>
              </label>
              <p>  Click Next </p>
              <button type="submit" className="btn btn-primary" disabled={!(this.state.lastname && this.state.firstnameValid)}>
                Next
              </button>
            </form>
          </div>;
    }
}

export default StepOne;