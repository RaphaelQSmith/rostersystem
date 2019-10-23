import React, { Component } from 'react'
import './customers.css'

export class Customers extends Component {
    constructor(){
        super();
        this.state = {
            customers: []
        }
    }

    componentDidMount(){
        fetch('/api/customers')
            .then(res=> res.json())
            .then(customers => this.setState(
                {customers}, ()=>console.log('Customers fetched...', customers)));
        }

    render() {
        return (
            <div>
                <h1>Customers</h1>
                <ul>
                    {this.state.customers.map(customer =>
                    <li key={customer.id}>{customer.firstName}</li>)}
                </ul>
            </div>
        )
    }
}

export default Customers
