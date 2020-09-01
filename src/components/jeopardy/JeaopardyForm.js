// import React, { Component } from 'react';


// class Form extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             submitted: false,
//             formData: {
//                 yourAnswer: ''
//             }
//         }
//     }

//     handleChange = (event) => {
//         //Don't mess, copy n paste if needed
//         const formData = { ...this.state.formData };
//         formData[event.target.name] = event.target.value;

//         this.setState({ formData });
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();
//         this.setState(formData: {
//             yourAnswer: ''
//         })
// if ( {formData} = this.state.data.answer)
//              return(<div className="Correct">
//             <h5>Correct</h5>
//         </div>)
//         this.setState({
//             submitted: true,
//             formData: ''       
//         })
            
// }
//     resetForm = (event) => {
//         this.setState({
//             submitted: false,
//             formData: {
//                 yourAnswer: ''
//             }
//         });
//     }

//     render() {
//         if (this.state.submitted) {
//             return (
//                 <div className="Answer">
//                     <h5>Thank you for contacting us {this.state.formData.yourAnswer}, we'll be in touch.</h5>
//                     <button onClick={this.resetForm}>Play Again!</button>
//                 </div>
//             )
//         }
//         return (
//             <div className="answer">
//                 <form onSubmit={this.handleSubmit}>

//                     <div>
//                         <label htmlFor="yourAnswer">Your Answer:</label>
//                         <input
//                             type="text"
//                             name="yourAnswer"
//                             value={this.state.formData.yourAnswer}
//                             onChange={this.handleChange}
//                         />
//                     </div>
//                     <button>Submit Answer</button>

//                 </form>
//                 <div>
//                     <br />What is...
//                     {this.state.formData.yourAnswer}
//                 </div>
//             </div>
//         );
//     }
// }

// export default Form;