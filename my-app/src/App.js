import React from 'react';
import ReactDom from 'react-dom';
import './App.css';
class App extends React.Component {
   render() {
      return (
         <div>
            <Add/>
            <ForceUpdate/>
            <UpdateText/>
            <Clock/>
            <Toggle/>
            <ClearData/>
        </div>
      );
   }
}
class Add extends React.Component {
  constructor()
  {
    super();
    this.state ={ data :[]}
    this.setStateHandler =this.setStateHandler.bind(this);
    this.setStateHandlerRemove =this.setStateHandlerRemove.bind(this);
  };
  setStateHandler()
  {
    var item = "\nstates"
    var myarray =this.state.data;
    myarray.push(item);
    this.setState({data:myarray})
  };
  setStateHandlerRemove()
  {
     var item="states"
     var myarray =this.state.data;
     myarray.pop(item);
     this.setState({data:myarray})
  };
  render(){
    return(
     <div className="well">
       <h1 id="main">React js Demo components</h1>
      <div className="row" id="item">
         <h2 id="itemheading">Elements add and remove demo</h2>
         <div className="col-lg-2 col-md-3">
           <button  onClick={this.setStateHandler}>State add</button>&nbsp;&nbsp;
           <button  onClick={this.setStateHandlerRemove}>State remove</button>
         </div>
         <div className="col-lg-2 col-md-3">
           <h4>state Array :{this.state.data}</h4>
        </div>
      </div>
    </div>
    );
  }
}
class ForceUpdate extends React.Component {
  constructor()
  {
    super();
     this.forceUpdateHandler =this.forceUpdateHandler.bind(this);
  };
  forceUpdateHandler()
  {
    this.forceUpdate();
  };
  render() {
    return(
     <div className="row" id="random">
       <h2 className="randomhead">Random Number</h2>
       <button className="randomhead" onClick={this.forceUpdateHandler}>RandomNumber</button>
       <h4 className="randomhead">Random Number :{(Math.floor(Math.random()*((100-1)+1)+1))}</h4>
     </div>
    );
  }
}
 class UpdateText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data :''};
    this.updateState = this.updateState.bind(this);
  };
  updateState(e)
  {
    this.setState({data: e.target.value});
  }
  render(){
    return(
     <div className="row" id="update">
       <h2 className="data">Update Data</h2>
      <input type="text" className="data" placeholder="Enter text here" value={this.state.data} onChange ={this.updateState}/>
       <h3 className="data">{this.state.data}</h3>
     </div>
    );
  }
}
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date : new Date() }
    };
    componentDidMount(){
      this.timerId = setInterval(

      ()=>this.tick(),1000
      );
    }
    componentWillUnmount(){
      clearInterval(this.timerId);
    }
    tick()
    {
      this.setState({
        date :new Date()
      });
    }
  render() {
    var styles =
    {
        color:'black',marginLeft:'30%'
    }
  return (
      <div className="row" id="timeheading">
        <h2 style={styles}>This is the current time</h2>
        <h2> {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
 render() {
    return (
       <div className="row" id="toggle">
        <h2> This is the Toggle on/off button</h2>
        <button size="30"  onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ToggleButton ON' : 'ToggleButton OFF'}
        </button>
      </div>
    );
  }
}
class ClearData extends React.Component{
   constructor(props){
     super(props);
     this.state ={ data:''}
     this.updateState =this.updateState.bind(this);
     this.clearInput =this.clearInput.bind(this);
   };
  updateState(e)
   {
    this.setState({data:e.target.value});
   }
  clearInput()
  {
    this.setState({data:' '});
    ReactDom.findDomNode(this.refs.myinput).focus();
      }
      render(){
        return(
          <div className="row" id="cleardata">
            <div className="clear">
             <h2>Clear Input</h2>
            <input  value={this.state.data} onChange={this.updateState} refs="myinput"></input>
            <button  onClick={this.clearInput}>Clear data</button>
            <h4>{this.state.data}</h4>
            </div>
          </div>
        );
      }
}
export default App;

