import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import "./Home.css";

function Home() {
    let history = useHistory();

   let handleClick = () => {
        history.push('/Products');
    };
    return (
        <div className="Home">
            <div className="lander">
                <h1>Home page</h1>
                <p>A simple app showing react button click navigation</p>
                <form>
                    <Button variant="btn btn-success" onClick={handleClick}>Click button to view products</Button>
                </form>
            </div>
        </div>
    );
}

export default Home;