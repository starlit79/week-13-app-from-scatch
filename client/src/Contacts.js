import React from 'react'
import { Table } from 'reactstrap'
//import{Component}
//class ...extends Component
//follow the template put super() in it
//read react component in open source

class Contacts extends React.Component {
    constructor () {
        super()
        this.state = {
            response: []
        }
    }

    componentDidMount() {
        this.callApi()
        .then((response) => { 
            this.setState({ response }) 
        } )
        .catch(err => console.log(err));
    }
    //async we are waiting
    //wait for the fetch to run
    //when result comes back , going into response
    callApi = async () => {
        const response = await fetch('http://localhost:3001/contacts');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        
        return body;
    };

    render ()  {
        return (
            <div>
                <h1 className = 'text-center'>Reviews</h1>
                <Table bordered> 
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Address</th>
                        <th>Visited</th>
                        <th>Review</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.response.map(contact =>
                    <tr>
                        <td key ={contact.key}> {contact.first} </td>
                        <td key ={contact.key}> {contact.address} </td>
                        <td key ={contact.key}> {contact.visited} </td>
                        <td key ={contact.key}> {contact.review} </td>
                    </tr>
                )}
                </tbody>
           </Table>
            </div>
        )
    }
}

export default Contacts