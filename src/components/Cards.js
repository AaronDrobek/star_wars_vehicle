import React, {Component} from 'react';


export default class Cards extends Component{


    render(){
      let ride = this.props.ride
      let key = this.props.key
      return (

        <div className="card" key={key}>
          <div className="card-block">
            <h4 className="card-name">{ride.name}</h4>
              <h4 className="card-model">{ride.model}</h4>
                <h5>Specs</h5>
                <p className="card-text">Manufacturer:{ride.manufacturer} </p>
                  <p className="card-text">Class:{ride.class} </p>
                  <p className="card-text">Passengers:{ride.passengers} </p>
                <p className="card-text">Crew:{ride.crew} </p>
              <p className="card-text">Length:{ride.length} </p>
            <p className="card-text">Max Speed{ride.max_atmosphering_speed}  </p>
          <p className="card-text">Cargo Capacity:{ride.cargo_capacity} </p>
          </div>
        </div>
        )

      }
}





// {this.prop.'name of prop'}
