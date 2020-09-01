import React, { Component } from 'react';
import Form from '../Jeopardy/JeaopardyForm';

//import our service
import JeopardyService from '../../JeopardyService';
class Jeopardy extends Component {

  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {
        answer: ''
      },
      score: '0',
      
      formData: {
        yourAnswer: ''
      }
    }
  }

  //get a new random question from the API and add it to the data object in state
  getNewQuestion() { //catalyst to change state by getting questions//
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
      if(Number(this.state.data.value) === '' ){
        this.getNewQuestion()
      }
    })
  }
  //when the component mounts, get the first question
  componentDidMount() {
    this.getNewQuestion();
  }

  handleChange = (event) => {
    const formData = {...this.state.formData};
    formData[event.target.name] = event.target.value;

    this.setState({ formData });
  }
  // resetForm = (event) => {
  //   this.setState({
  //     submitted: false,
  //     formData: {
  //       yourAnswer: ''
  //     }
  //   });
  // }

  //Alec WTF!!   #$%%^

  handleSubmit = (event) => {
    event.preventDefault();
    let newValue = Number(this.state.data.value)
    if (this.state.formData.yourAnswer === this.state.data.answer) {
      
      this.setState((state) => ({
        score: state.score + newValue
      }))
    }
    else {
       this.setState((state) => ({
        score: state.score - newValue
      }))
    }
    this.getNewQuestion()
  }

  //display the results on the screen BULLET POINT 2:
  render() {  //Conditional Rendering//

    let category = "loading";

    if (this.state.data.category) {
      category = this.state.data.category.title
    }
    return (
      <div>
        <strong>Users Score:</strong> {this.state.score} <br />
        <strong>Question:</strong> {this.state.data.question} <br />
        
        <strong>Value:</strong> {this.state.data.value} <br />
        <strong>Category:</strong> {category}<br />

        <div className="Answer">
        </div>


        <label htmlFor="Answer">Your Answerrrr:</label>
        <input type="text"

          // placeholder={"Your Answer here!"}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />


        <button type='submit' onClick={this.handleSubmit}>Submit</button>
        <strong>Answer:</strong> {this.state.data.answer} <br />
      </div>


      // <div>
      //   {this.state.formData.firstName}
      //   <br />
      //   {this.state.formData.lastName}
      //   </div>


    )



  }
}
export default Jeopardy;