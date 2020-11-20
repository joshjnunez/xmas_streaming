import React from 'react';
import { movies } from '../dummyData'
import '../styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      netflix: false,
      hulu: false,
      amazon: false
    }
  }

  //on submit

  changeNetflix() {
    console.log('netflix changed')
    this.state.netflix = !this.state.netflix
  }
  changeHulu() {
    console.log('hulu changed')
    this.state.netflix = !this.state.netflix
  }
  changeAmazon() {
    console.log('amazon changed')
    this.state.netflix = !this.state.netflix
  }

  render() {
    let { netflix, hulu, amazon } = this.state;

    if (netflix === true) {
      return (
        <div>
          <h4>{movies.netflix[1].title}</h4>
          <img height="300" width="200" className="photo" src={`${movies.netflix[1].image}`} />
        </div>
      )
    } else if (hulu === true) {
      return (
        <div>
          <h4>{movies.hulu[1].title}</h4>
          <img height="300" width="200" className="photo" src={`${movies.hulu[1].image}`} />
        </div>
      )
    } else if (amazon === true) {

      return (
        <div>
          <h4>{movies.hulu[1].title}</h4>
          <img height="300" width="200" className="photo" src={`${movies.hulu[1].image}`} />
        </div>
      )
    }

    return (
      <div>
        <h1>
          25 Days of Streaming
       </h1>
        <form>
          <label>
            <input type="checkbox" name="netflix" onChange={() => this.changeNetflix()} />
          Netflix
        </label>
          <label>
            <input type="checkbox" name="hulu" onChange={() => this.changeHulu()} />
          Hulu
        </label>
          <label>
            <input type="checkbox" name="amazon" onChange={() => this.changeAmazon()} />
         Amazon
        </label>
        </form>
        {/* <div>
          <h4>{movies.hulu[1].title}</h4>
          <img height="300" width="200" className="photo" src={`${movies.hulu[1].image}`} />
        </div>
        <div>
          <h4>{movies.netflix[1].title}</h4>
          <img height="300" width="200" className="photo" src={`${movies.netflix[1].image}`} />
        </div>
        <div>
          <h4>{movies.amazon[1].title}</h4>
          <img height="300" width="200" className="photo" src={`${movies.amazon[1].image}`} />
        </div> */}
      </div>
    )
  }
};

export default App;