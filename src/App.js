import React from 'react';
import './App.css';
import Cal from './components/calDisplay'


class App extends React.Component {
 state ={
 display:"",
 secondDisplay:"",
 sign:""
 }


  
 

   maths=(event)=>{
     
     //used getAttribue because value is not a predefined attribute of a div tag
     let value = event.target.getAttribute("value")
   
    //  console.log(value)

     switch (value) {
       case "+":
        case "-":
          case "*":
            case "/":
        this.setState((prevstate)=>{
          return{
            sign:value,
            secondDisplay:prevstate.display + value,
            display:""
          
          }
        })
         break;
         case "equals":
           let firstInput = parseFloat(this.state.secondDisplay)
           firstInput =isNaN(firstInput)
          //  let secondInput = parseFloat(this.state.display)
          firstInput ? this.setState({
            display:"",
                secondDisplay:"",
                sign:""
          }):
           
          this.setState((prevstate)=>{
            return{
              secondDisplay:prevstate.secondDisplay + prevstate.display,
              display:parseFloat(prevstate.secondDisplay) + parseFloat(prevstate.display)
          }
        }
          )
         break;

         case "clear":
           this.setState({
            display:"",
            secondDisplay:"",
            sign:""
           })
         break;

         case "display":
          //do notting when display is selected
         break;
     
       default:
        this.setState((prevstate)=>{
          return {
            display:prevstate.display + value
          }
        })
         break;
     }

   }
    

  render(){
    
    // console.log(this.state.sign)
    console.log((this.state.secondDisplay))
    // console.log(parseFloat(this.state.display))

  return (
    <div className="App">
     <Cal maths={this.maths}
      display ={this.state.display}
        secondDisplay = {this.state.secondDisplay}
      />
    </div>
  );
}
}

export default App;
