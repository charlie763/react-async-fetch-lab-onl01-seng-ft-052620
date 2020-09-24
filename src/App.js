import React from 'react'

class App extends React.Component {
  state = {
    peopleInSpace: {
      people: []
    }
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
      .then(resp=>resp.json())
      .then(json => {
        this.setState({
          peopleInSpace: json
        })
      })
  }

  render(){
    console.log(this.state.peopleInSpace.people)
    return (this.state.peopleInSpace.people.map(person => {
        return (
          <div>{person.name}</div>
        )
      })
    )
  }
}

export default App