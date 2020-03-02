import React from 'react';
import './App.css';
import Cal from './components/calDisplay'


class App extends React.Component {
 state ={
 display:'',
 hold:'',
 secondDisplay:"",
 sign:""
 }
   maths =(event)=>{
     //get element by its textcontent
    const clicked = event.target.textContent
    console.log(clicked)
    switch (clicked) {
      case "+":
        case "-":
          case "*":
            case "/":
              //using tenary operator
              this.state.sign ==="" ?
        this.setState((prevstate)=>{
          return{ hold:parseFloat(prevstate.display),
                  secondDisplay:prevstate.display + clicked,
                  display:"",
                  sign:clicked
          }
        })
        : 
this.setState((prevstate)=>{
          return{ hold:parseFloat(prevstate.display),
                  secondDisplay:prevstate.display + clicked,
                  display:"",
                  sign:clicked
          }
        })

        break;
        case "=":
          this.setState((prevstate)=>{
            return{ 
              secondDisplay:prevstate.secondDisplay + prevstate.display,
              display:eval( prevstate.hold + prevstate.sign + (prevstate.display))
            }
          })
        break;

        case "clear":
          this.setState((prevstate)=>{
            return{ hold:null,
                    secondDisplay:"",
                    display:"",
                    sign:""
            }
          }) 
        break;

        case this.state.secondDisplay + this.state.display  :
          console.log(clicked)
        break;
        
    
      default:
        this.setState((prevstate)=>{
          return {display:  prevstate.display + clicked}
          
         })
        break;
    }
   
}


  render(){
    // console.log(this.state.hold)
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
