import React from 'react';
import '../../App.css';
import './profileGym.css'
import ClimbCards from '../../components/climbCards/climbCards.js';

class ProfileGym extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 2,
      climbs: undefined
    }
  }

  getClimbs = () => {

    const URL = `https://send-central-backend.herokuapp.com/api/climb/get_climbs?gym_id=${this.state.id}`;

    fetch(URL, {'method': 'GET'})
    .then(res => res.json())
    .then(data => {

      if (data.climbs) {
        let climbs = data.climbs;
        this.setState({ climbs })
      } else {
        alert(`${data.message}`);
      }
      })
    .catch(err => alert(err));
  }


  componentDidMount() {
    this.getClimbs();
  }


  render(){
    return (
      <div className="GymProfile">
        <h1>Central Rock Gym Watertown
        <button type='button' className='btn btn-primary'>Start Training Session Now!</button></h1>
        { this.state.climbs &&
          <ClimbCards climbs={this.state.climbs} />
        }
      </div>
    );
  }
}

export default ProfileGym;
