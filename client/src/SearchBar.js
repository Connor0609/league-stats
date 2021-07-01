import React, {Component} from 'react'

class SearchBar extends Component{
    initialState = {
        summonerName: '',
    }

    state = this.initialState

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state.summonerName)
        this.setState(this.initialState)
    }

    render() {
        const {summonerName} = this.state;

        return (
            <form>
                <label htmlFor="searchBar">Summoner Name</label>
                <input 
                    type="text"
                    name="summonerName"
                    id="summonerName"
                    value={summonerName}
                    onChange={this.handleChange} />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        )
    }
}

export default SearchBar