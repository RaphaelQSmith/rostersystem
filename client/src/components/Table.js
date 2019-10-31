import React, { Component, Fragment } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

export class Table extends Component {

    constructor() {
        super();
        this.state = {
            roster: []
        }
    }

    async componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.datepicker');
            M.Datepicker.init(elems,{
                format: "dd/mm/yyyy"
            }); 
          });

        await fetch('/tables')
            .then(res => res.json())
            .then(
                roster => this.setState(
                { roster }, () => console.log('Table fetched...', roster)))
    }

    render() {        
        return (
            <Fragment>
            <div>
                {!this.state.roster.week === this.state.week ? 
                    (
                    <div class="progress container">
                         <div class="indeterminate"></div>
                    </div>) :
                (<div>
                    <table className='striped highlight centered container'>
                        <thead>
                            <tr>
                                <th>Store</th>
                                <th>Friday</th>
                                <th>Saturday</th>
                                <th>Sunday</th>
                                <th>Monday</th>
                                <th>Tuesday</th>
                                <th>Wednesday</th>
                                <th>Thursday</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.roster.map(roster => (
                                <Fragment>
                                    <tr key={roster.$oid}>
                                        <td>Ranelagh - Morning</td>
                                        <td>{roster.ranFM}</td>
                                        <td>{roster.ranFE}</td>
                                        <td>{roster.ranSM}</td>
                                        <td>{roster.ranSE}</td>
                                        <td>{roster.ranSuM}</td>
                                        <td>{roster.ranSuE}</td>
                                        <td>{roster.ranMM}</td>
                                    </tr>
                                    <tr key={roster.$oid}>
                                        <td>Ranelagh - Evening</td>
                                        <td>{roster.ranME}</td>
                                        <td>{roster.ranTM}</td>
                                        <td>{roster.ranTE}</td>
                                        <td>{roster.ranWM}</td>
                                        <td>{roster.ranWE}</td>
                                        <td>{roster.ranThM}</td>
                                        <td>{roster.ranThE}</td>
                                    </tr>
                                </Fragment>
                            ))}
                        </tbody>
                    </table>
                    
                </div>
                )}
                <div className="container col s6">
                            <label>Choose the starting date</label>
                            <input type="text" class="datepicker" />
                    </div>
                
                </div>
            </Fragment>
        )
    }
}


export default Table
