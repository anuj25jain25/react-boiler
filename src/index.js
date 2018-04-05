import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () =>{
    return(
        <div>
            <i className="fa fa-search"></i>
            <h1>Hello World</h1>
            <div className="row">
                <div className="col-sm-6">1</div>
                <div className="col-sm-6">2</div>
            </div>
        </div>
    );
}

ReactDOM.render(<Home />,  document.getElementById('app'));