import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../../components/student/Navbar';

class App extends React.Component {
    render() {

        return (
            <div>
                <Header />
                <center>
                    <h3>Research Project Group 62980e249099ee02c30e69af</h3>
                </center>
                <div>
                    <nav class="navbar navbar-expand-md navbar-dark " style={{ position: 'static', marginLeft: "32%" }}>
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="/group-register">
                                    <button className="btn btn-info" type="submit" style={{ color: "white" }}>Register Project Group</button>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/group">
                                    <button className="btn btn-info" type="submit" style={{ color: "white" }}>Delete Project Group</button>
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link" href="/dashboard">
                                    <button className="btn btn-info" type="submit" style={{ color: "white" }}>Update Project Group</button>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>


            </div >
        )

    }
}

export default App;