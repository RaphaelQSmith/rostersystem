import React, { Component } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

export class Navbar extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
            }
        )
    }
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper #00796b teal darken-2">
                            <a href="/" data-target="slide-out" class="sidenav-trigger show-on-large"><i class="material-icons">menu</i></a>
                        <div className="container">
                            <a href="/" className="brand-logo left">Laundry Online</a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><a href="/staff">Staff</a></li>
                                <li><a href="/manager">Manager</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <ul id="slide-out" className="sidenav">
                    <li>
                        <div className="user-view">
                            <div class="background #263238 blue-grey darken-4">
                            </div>
                            <a href="/"><span className="white-text name">John Doe</span></a>
                            <a href="/"><span className="white-text email">jdandturk@gmail.com</span></a>
                        </div>
                    </li>

                    <li><a href="/"><i className="material-icons">person</i>Login</a></li>
                    <li><a href="/"><i className="material-icons">mode_edit</i>Register</a></li>
                    <li><a href="/"><i className="waves-effect material-icons">directions_run</i>Logout</a></li>
                </ul>
            </div>
        )
    }
}




export default Navbar
