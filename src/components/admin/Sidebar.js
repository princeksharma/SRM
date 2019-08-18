import React, { Component } from 'react';

import 'font-awesome/css/font-awesome.min.css';

class Sidebar extends Component {
    render() {
        return (
            <div>
                <div style={{ padding:'5px'}} className="list-group">
                    <button style={{ padding:'5px',borderRadius:'20px', textAlign:'center'}} type="button" className="btn btn-dark list-group-item list-group-item-action active">
                        <i className="fa fa-pencil" aria-hidden="true"></i>{' '}{' '}{' '}Compose
                    </button>
                    <br/>
                    <button type="button" className="list-group-item list-group-item-action">Reports</button>
                    <br/>
                    <button type="button" className="list-group-item list-group-item-action">Manage</button>
                </div>
            </div>
        )
    }
}

export default Sidebar;
