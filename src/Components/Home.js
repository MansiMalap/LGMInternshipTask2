import React from 'react';
import './Home.css';

export default function Home({ getData }) {
    return (
        <section className="home">
            <div className="content">
           
                <p>Click the button<br/> to get users who creates blog <br/>Or <br/>Click the button in the<br/>navbar to get the users details.<br/><button onClick={getData}>Get Users</button></p>
            </div>
        </section>
    )
}