import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    holiday: '',
    place: '',
    animal: '',
    noun: '',
    celebrity: '',
  };

  render() {
  return (
    <div className="App">
      {/* <Form form={this.state.fields}/> */}
      <form class="container">
          <label>
            Enter Random Holiday:
          <input type="text" 
                  id="holiday"
                name="holiday"
                className="form-control" 
                value={this.state.holiday} 
                onChange={ e=> this.setState({ holiday:e.target.value})}/>
          </label>
          <label>
            Enter a Place:
          <input type="text" 
                id="place"
                name="place"
                className="form-control"
                value={this.state.place}
                onChange={e => this.setState({place:e.target.value})} />
          </label>
          <label>
            Enter any Animal:
            <input type="text" 
                id="animal"
                name="animal"
                className="form-control"
                value={this.state.animal}
                onChange={e => this.setState({animal:e.target.value})} />
          </label>
          <label>
            Enter a Plural Noun:
            <input type="text" 
                id="noun"
                name="noun"
                className="form-control"
                value={this.state.noun}
                onChange={e => this.setState({noun:e.target.value})} />
          </label>
          <label>
            Enter any Celebrity:
            <input type="text" 
                id="celebrity"
                name="celebrity"
                className="form-control"
                value={this.state.celebrity}
                onChange={e => this.setState({celebrity:e.target.value})} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <button onClick={e => this.onSubmit()}>Get Started!</button>

      <br></br>
      <h2 className="app-title">A ____ Party Invitation!</h2>
      <p>
      You're Invited to Our Weekly {this.state.holiday} Party! Your presence is requested at {this.state.place} at noon. 
      Please come prepared with your favorite stuffed {this.state.animal}. We will be creating {this.state.noun} for your {this.state.animal} 
      to wear. How exciting!
      Please be on time, like that one person at the last party, looking at you {this.state.celebrity}!
      </p>

    </div>
  );
  }
}

export default App;
