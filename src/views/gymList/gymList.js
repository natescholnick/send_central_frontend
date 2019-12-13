import React from 'react';
import '../../App.css';
import './gymList.css'
import GymCards from '../../components/gymCards/gymCards.js';

class GymList extends React.Component {
  constructor() {
    super();

    this.state = {
      gyms: undefined,
    }
  }

  getGyms = () => {

    const URL = 'https://send-central-backend.herokuapp.com/api/gym/get_gyms'

    fetch(URL, {'method': 'GET'})
    .then(res => res.json())
    .then(data => {

      if (data.gyms) {
        let gyms = data.gyms;
        this.setState({ gyms })
      } else {
        alert(`${data.message}`);
      }
      })
    .catch(err => alert(err));
  }


  componentDidMount() {
    this.getGyms();
  }


  render(){
    return (
      <div className="GymList">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1>Rock Gyms</h1>
            { this.state.gyms &&
              <GymCards gyms={this.state.gyms} />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default GymList;
