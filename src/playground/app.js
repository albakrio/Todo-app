class IndecisionApp extends React.Component {
  constructor(props){
    super(props)
    this.handleDeleteOptions= this.handleDeleteOptions.bind(this)
    this.handlePick= this.handlePick.bind(this)
    this.handleAddOption= this.handleAddOption.bind(this)
    this.handleRemoveOption= this.handleRemoveOption.bind(this)
    this.state={
      options:[]

    }
  }

  ComponentDidMount(){
    console.log('fetching data');
    
  }
  ComponentDidUpadate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length){

    }
    console.log('saving data');
    
  }
  ComponentWillUnmount(){
    console.log('component will unmount');
    
  }
  handleRemoveOption(option){
    console.log('hdo:', option);
    
  }
  handleDeleteOptions(){
    this.setState(()=>({options:[] }))
    


    
  }

  handlePick(){
    const randomNum= Math.floor(Math.random()*this.state.options.length)
    const option= this.state.options[randomNum]
    alert(option)
    
  }
  handleAddOption(option){
    if(!option){
      return ' Enter a valid option! '
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option does exist!'

    }

    this.setState((prevState)=>({
      options: prevState.options.concat(option)
    }))
      
      
    
    
  }
  
  

  
  render() {                 
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header  subtitle={subtitle} />
        <Action 
        hasOptions={this.state.options.length>0}
        handlePick={this.handlePick}
        />
        <Options 
         options={this.state.options}
         handleDeleteOptions={this.handleDeleteOptions} 
        
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

const Header = (props)=> {
  
    return (
      <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </div>
    );
  
}
Header.defaultProps= {
  title: 'some default'
}

const Action= (props)=>{
  
  return (
      <div>
        <button 
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        
        
        
        >What should I do?
        
        </button>
      </div>
  ) 
  
}

const Options = (props)=> {
 
  
    return (
      <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {
         props.options.map((option) => <Option key={option} optionText={option}    handleRemoveOption={props.handleRemoveOption} />)
        }
      </div>
    );
  
}

const Option = (props)=> {
  
    return (
      <div>
        {props.optionText}
        <button onClick={((e)=>{
          handleRemoveOption(props.optionText)

        })}> Remove </button>
        
      </div>
    )
  
}

class AddOption extends React.Component {
  constructor(props){
    super(props)
    this.handleAddOption=this.handleAddOption.bind(this)
    this.state={
      error: undefined
    }
  }
  

  handleAddOption(e) {
    e.preventDefault();
    
    const option= e.target.elements.option.value.trim()
    const error= this.props.handleAddOption(option)
    
    this.setState(()=>({error: error}))
    if(!error){
      e.target.elements.option.value= ''
    }
  }
  render() {
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
      <form onSubmit={this.props.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
