import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';

import Sidebar from './Sidebar';
import Main from './Main';

class Profile extends Component {
    render() {
        return (
            <div className="profile">
            <div className="row grey row-bottom-margin no-gutters">
                <div className="col-md-2">
                    <h5 style={{ padding:'20px',float:'center'}}><i className="fa fa-user-circle-o" aria-hidden="true"></i>{'  '}Prince Sharma</h5>
                </div>
                <div className="col-md-10">
                    <div className="row  row-bottom-margin no-gutters">
                        <div className="col-md-3">
                            <div style={{ padding:'20px'}} className="form-group">
                                <select style={{ backgroundColor:'#C4C4C4'}}>
                                    <option selected>Date Range</option>
                                    <option>Dummy</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <div style={{ padding:'20px'}} className="form-group">
                                <select style={{ backgroundColor:'#C4C4C4'}}>
                                    <option selected>Project Name</option>
                                    <option>Snapshyft</option>
                                    <option>immortal</option>
                                    <option>instacamp</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <div style={{ padding:'20px'}} className="form-group">
                                <select style={{ backgroundColor:'#C4C4C4'}}>
                                    <option selected>Employee Name</option>
                                    <option>Prince Sharma</option>
                                    <option>Vidushi</option>
                                    <option>hey</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <button style={{margin:'20px', float:'center'}}type="submit" className="btn btn-dark fa fa-report ">Generate Report</button>
                        </div>
                    </div>
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

export default Profile;
