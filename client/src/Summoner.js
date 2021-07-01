import React, {Component} from 'react'

class Summoner extends Component {
    render() {
        const {summonerData} = this.props
        
        return (
            <table>
                <tbody>
                    <tr>
                        <th>Account ID:</th>
                        <td>{summonerData.accountId}</td>        
                    </tr>
                    <tr>
                        <th>Profile Icon ID:</th>
                        <td>{summonerData.profileIconId}</td>        
                    </tr>
                    <tr>
                        <th>Revision Date:</th>
                        <td>{summonerData.revisionDate}</td>        
                    </tr>
                    <tr>
                        <th>Name:</th>
                        <td>{summonerData.name}</td>        
                    </tr>
                    <tr>
                        <th>ID:</th>
                        <td>{summonerData.id}</td>        
                    </tr>
                    <tr>
                        <th>PUUID:</th>
                        <td>{summonerData.puuid}</td>        
                    </tr>
                    <tr>
                        <th>Summoner Level:</th>
                        <td>{summonerData.summonerLevel}</td>        
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Summoner