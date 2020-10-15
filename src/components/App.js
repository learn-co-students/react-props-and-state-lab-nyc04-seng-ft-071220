import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
  filterType = (filteredType) => {
    this.setState({
      filters: {
        ...this.state.filter,
        type: filteredType
      }
    })
  }

  fetchPets = () => {
    if(this.state.filters.type === "all"){
      fetch(`/api/pets`)
      .then(res => res.json())
      .then(fetchedPets => {
        this.setState({
          pets: fetchedPets
        })
      })
    }
    else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(res => res.json())
      .then(fetchedPets => {
        this.setState({
          pets: fetchedPets
        })
      })

    }
  }

  adoptPet = (petId) => {
    let petBeingAdopted = this.state.pets.filter(pet => {
      return pet.id === petId
    })
    console.log(petBeingAdopted[0].isAdopted)
    petBeingAdopted[0].isAdopted = true
    console.log(petBeingAdopted[0].isAdopted)
  }
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.filterType} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
