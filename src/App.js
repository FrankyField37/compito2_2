import React,{Component} from 'react';
import './App.css';
import InputString from './InputString/InputString';
import OutputString from './OutputString/OutputString';

class App extends Component {

  state = {
    min : { lim : 5 , desc : 'Text soo short' },
    max : { lim : 10, desc : 'Text soo long ' },
    validLenght : 'Text long enough',
    showString : false,
    listString : []
  }

  deleteString = (index) => {

  }

  toggleString = () => {
    const viewString = this.state.showString;
    this.setState = ({
      showString : !viewString
    })
  }

  creatorString = (newString) => {
    const arrString = [...this.state.listString];

    // let newOString = genereteObjectString(newString);
    let newOString;
    //Create new object of component
    if(newString >= this.state.max.lim){
      newOString = { 
        id : arrString.length,
        string : newString,
        desc : this.state.max.desc,
        
      }
    }else if(newString <= this.state.min.lim){
      newOString = { 
        id : arrString.length,
        string : newString,
        desc : this.state.min.desc
      }
    } else {
      newOString = { 
        id : arrString.length,
        string : newString,
        desc : this.state.validLenght
      }
    }


    arrString[arrString.length] = newOString;

    this.setState({ listString : arrString })

  }

  render(){

    let arString = null;
    if (this.state.showString){
      arString = (
        <div>
          {this.state.listString.map((ObString,index) => {
              return <OutputString
                        key = {ObString.id}
                        string = {ObString.string}
                        desc = {ObString.desc}
                        change = {this.stringChanged}
                        click = {() => this.deleteString(index)}
                      
                      ></OutputString>
          })};
        </div>
      );
    }

    return (
      <div className="App">
        <InputString
            toggleString = {this.toggleString}  
            creatorString = {this.creatorString}     
        >
        </InputString>
        { arString }


      </div>
    );
  }
}

export default App;
