import React from 'react'

class Pet extends React.Component {
  state = {
    isAdopted: this.props.pet.isAdopted
  }

  handleClick = () => {
    this.props.onAdoptPet(this.props.pet.id)
    this.setState({
      isAdopted: true
    })
  }
  render() {
    let {name,type,gender,age,weight} = this.props.pet
    // console.log(this.props)
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender==="female" ? '♀' : '♂'}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.state.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button>}
        </div>
      </div>
    )
  }
}

export default Pet
