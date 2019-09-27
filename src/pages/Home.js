import React, { Component } from 'react';
import Input from "../components/Input";
import Preview from "../components/Preview";
import Table from '../components/Table';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-md-center">
                    <h2>React Tabungan App (CRUD)</h2>
                </div>
                <div>
                    <div className="row">
                        <div className="col-sm">
                            <Input />
                        </div>
                        <div className="col-sm">
                            <Preview />
                        </div>
                    </div>
                    <div className="row">
                        <Table/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;