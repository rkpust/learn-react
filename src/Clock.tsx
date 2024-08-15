import React from 'react'

class Clock extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {date: new Date()};
  // }

  state = {
    date: new Date(),
    locale: 'en-US',
    value: 'en',
  };

  componentDidMount() {
    this.clockTimer =  setInterval(() =>
        this.tick(), 1000); 
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  changeClock = () =>{
    let buttonValue = this.state.value;
    console.log(buttonValue);
    if (buttonValue == 'en'){
      this.setState(
        {'locale': 'bn-BD'}
      );

      this.state.value = 'bn';
    }
    else {
      this.setState(
        {'locale': 'en-US'}
      );

      this.state.value = 'en';
    }
    }


  tick() {
    this.setState({date: new Date()});
  }

  render(){
    const { date, locale } = this.state;
    return (
      <div>
        <h1 className='heading'>
        <span className='text'>
          {this.state.date.toLocaleTimeString(locale)}
        </span>
      </h1>
      <button type="button" value="en" onClick={this.changeClock}>Change Clock</button>
      </div>
      
    ); 
  } 
}

export default Clock
