import React, {Component} from 'react'
import Summoner from './Summoner'
import SearchBar from './SearchBar'

class App extends Component {

    state = {
        summonerData: [],
    }
    
    handleSubmit = (summonerName) => {
        fetch("http://localhost/lol/summoner/v4/summoners/by-name/" + summonerName)
            .then((result) => result.json())
            .then((result) => {
                this.setState({
                    summonerData: result,
                })
                console.log(result)
            })
    }
    

    render() {
        return (
            <div className="container">
                <SearchBar handleSubmit={this.handleSubmit}/>
                <Summoner summonerData={this.state.summonerData} />
            </div>
        )
    }
}

export default App