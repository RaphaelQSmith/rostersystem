import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

class CreateTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            week: new Date(),
            ranFM: '',
            ranFE: '',
            ranSM: '',
            ranSE: '',
            ranSuM: '',
            ranSuE: '',
            ranMM: '',
            ranME: '',
            ranTM: '',
            ranTE: '',
            ranWM: '',
            ranWE: '',
            ranThM: '',
            ranThE: '',
            staff: [
                '',
                'Francisca',
                'Danielle',
                'Nathalia',
                'Kelly',
                'João',
                'Raphael',
                'Stefani'
            ]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, {
                format: "dd/mm/yyyy"
            }
                );
        }); 
    }


    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);

        //     axios
        //       .post('/posts', {
        //         name: this.state.name,
        //         email: this.state.email,
        //         password: this.state.password,
        //         position: this.state.position
        //       })
        //       .then(res => {
        //         console.log(res);
        //         this.setState({
        //           name: '',
        //           email: '',
        //           password: '',
        //           position: ''
        //         });
        //       })
    }
    render() {
        return (
            <div className="container row">
                <blockquote><h6>Create New Roster</h6></blockquote>
                <form onSubmit={this.handleSubmit} className="input-field">

                    <div className='row'>
                        <div class="input-field col s6">
                            <select>
                                <option value="" disabled selected>Select Store</option>
                                <option value="Ranelagh">Ranelagh</option>
                                <option value="Washers">Washers</option>
                                <option value="Basket">Basket</option>
                            </select>
                            <label> Store</label>
                        </div>
                        <div className="container col s6">
                            <label>  Choose the starting date</label>
                            <input type="text" name='week' value='' onChange={this.handleChange} class="datepicker" />
                    </div>
                    </div>
                    <div className='row'>
                        <div class="input-field col s6">
                            <select onChange={this.handleChange}>                            
                                {this.state.staff.map(name => (
                                    <option key={name} value={name}>{name}</option>
                                ))}
                            </select>
                            <label>Fri - Morning</label>
                        </div>
                        <div class="input-field col s6">
                            <select onChange={this.handleChange}>
                                {this.state.staff.map(name => (
                                    <option key={name} value={name}>{name}</option>
                                ))}
                            </select>
                            <label>Fri - Evenig</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div class="input-field col s6">
                            <select>
                                {this.state.staff.map(name => (
                                    <option key={name} value={name}>{name}</option>
                                ))}
                            </select>
                            <label>Sat - Morning</label>
                        </div>
                        <div class="input-field col s6">
                            <select>
                                {this.state.staff.map(name => (
                                    <option key={name} value={name}>{name}</option>
                                ))}
                            </select>
                            <label>Sat - Evenig</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div class="input-field col s6">
                            <select>
                                {this.state.staff.map(name => (
                                    <option key={name} value={name}>{name}</option>
                                ))}
                            </select>
                            <label>Sun - Morning</label>
                        </div>
                        <div class="input-field col s6">
                            <select>
                                {this.state.staff.map(name => (
                                    <option key={name} value={name}>{name}</option>
                                ))}
                            </select>
                            <label>Sun - Evenig</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div class="input-field col s6">
                            <select>
                                {this.state.staff.map(name => (
                                    <option key={name} value={name}>{name}</option>
                                ))}
                            </select>
                            <label>Mon - Morning</label>
                        </div>
                        <div class="input-field col s6">
                            <select>
                                {this.state.staff.map(name => (
                                    <option key={name} value={name}>{name}</option>
                                ))}
                            </select>
                            <label>Mon - Evenig</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div class="input-field col s6">
                            <select>
                                {this.state.staff.map(name => (
                                    <option key={name} value={name}>{name}</option>
                                ))}
                            </select>
                            <label>Tue - Morning</label>
                        </div>
                        <div class="input-field col s6">
                            <select>
                                {this.state.staff.map(name => (
                                    <option key={name} value={name}>{name}</option>
                                ))}
                            </select>
                            <label>Tue - Evenig</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div class="input-field col s6">
                            <select>
                                {this.state.staff.map(name => (
                                    <option key={name} value={name}>{name}</option>
                                ))}
                            </select>
                            <label>Wed - Morning</label>
                        </div>
                        <div class="input-field col s6">
                            <select>
                                {this.state.staff.map(name => (
                                    <option key={name} value={name}>{name}</option>
                                ))}
                            </select>
                            <label>Wed - Evenig</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div class="input-field col s6">
                            <select>
                                {this.state.staff.map(name => (
                                    <option key={name} value={name}>{name}</option>
                                ))}
                            </select>
                            <label>Thu - Morning</label>
                        </div>
                        <div class="input-field col s6">
                            <select>
                                {this.state.staff.map(name => (
                                    <option key={name} value={name}>{name}</option>
                                ))}
                            </select>
                            <label>Thu - Evenig</label>
                        </div>
                    </div>


                    <div>
                        <input type="submit" value="Submit" className="btn waves-effect right #00796b teal darken-2" />
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateTable;
