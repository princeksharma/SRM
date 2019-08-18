import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';

import Sidebar from './Sidebar';
import Main from './Main';
import AddButton from './AddButton';



class Admin extends Component {

    render() {
        return (
            <div className="profile">
            <div className="row row-bottom-margin no-gutters">
                <div className=" grey  col-md-2">
                    <h5 style={{ padding:'20px',float:'center'}}><i className="fa fa-user-circle-o" aria-hidden="true"></i>{'  '}Admin</h5>
                </div>
                <div style={{backgroundColor:'rgba(229, 229, 229, 0.5)'}}className="col-md-10">
                    <button style={{ borderRadius: '15px', margin:'20px', float:'right'}}type="submit" className="btn btn-dark "><AddButton/></button>
                </div>
            </div>
            <div className="row  row-bottom-margin no-gutters">
            <div className="grey col-md-2">
                <Sidebar/>
            </div>
            <div className="col-md-10">
                <Main/>
            </div>
        </div>
        </div>
        )
    }
}

export default Admin;
