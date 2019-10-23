import React, { Component, Fragment } from 'react'

export class Table extends Component {

    constructor(){
        super();
        this.state = {
            roster: []
        }
    }

    componentDidMount(){
        fetch('/api/customers')
            .then(res=> res.json())
            .then(roster => this.setState(
                {roster}, ()=>console.log('Customers fetched...', roster)));
        }

    render() {
        return (
            <Fragment>
                <div>
                    <table className='striped highlight centered'>

                        <thead>
                            <th>Store</th>
                            <th>Friday</th>
                            <th>Saturday</th>
                            <th>Sunday</th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>          
                        </thead>

                        <tbody>
                            {this.state.roster.map(roster => (
                                <tr key={roster.id}>
                                    <td>{roster.id}</td>
                                    <td>{roster.firstName}</td>
                                    <td>{roster.lastName}</td>
                                </tr>))}
                        </tbody>
                    </table>
                
                </div>  
            </Fragment>
        )
    }
}


export default Table
