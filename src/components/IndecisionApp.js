import React from 'react'
import Action from './Action'
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import OptionModal from './OptionModal'



export default class IndecisionApp extends React.Component {
    state={
        options:[],
        selectedOption: undefined
    }

      handleDeleteOptions=()=>{
        this.setState(()=>({options:[] }))
        
    
      }
      handleClearSelectedOption =() =>{
        this.setState(()=>({selectedOption:undefined}))
      }

      handleRemoveOption = (optionToRemove) => {
        this.setState((prevState) => ({
          options: prevState.options.filter((option) => optionToRemove !== option)
        }));
      };
    
      handlePick=()=>{
        const randomNum= Math.floor(Math.random()*this.state.options.length)
        const option= this.state.options[randomNum]
        console.log(' i am clicked')
        this.setState (()=> ({
          selectedOption: option

        }))
        
      }
      handleAddOption=(option)=>{
        if(!option){
          return ' Enter a valid option! '
        } else if (this.state.options.indexOf(option) > -1) {
          return 'This option does exist!'
    
        }
    
        this.setState((prevState)=>({
          options: prevState.options.concat(option)
        }))
          
          
        
        
      }
        
  
      
    
  
    ComponentDidMount(){
      console.log('fetching data');
      
    }
    ComponentDidUpadate( prevState){
      if(prevState.options.length !== this.state.options.length){
        
      }
      console.log('saving data');
      
    }
    ComponentWillUnmount(){
      console.log('component will unmount');
      
    }
    
    
    
  
    
    render() {                 
      const title = 'Indecision';
      const subtitle = 'Put your life in the hands of a computer';
  
      return (
        <div>
          <Header  subtitle={subtitle} />
          <div className="container">
          <Action 
          hasOptions={this.state.options.length>0}
          handlePick={this.handlePick}
          />
          <div className ="widget">
          <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleRemoveOption={this.handleRemoveOption}
         
         />
         <AddOption handleAddOption={this.handleAddOption} />
         <OptionModal 
            selectedOption={this.state.selectedOption}
            handleClearSelectedOption={this.handleClearSelectedOption}
          />
          </div>
          
          </div>
        </div>
      );
    }
  }
  