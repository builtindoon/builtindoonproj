import React from 'react';
import Footer from './footer';
import Header from './Header';

const Home = (props) =>{
    return(
        <div>
        <Header aH={props.aH} />
            <h1 style={{height: "80vh"}}>home</h1>
            <Footer />
        </div>
    );
};

export default Home; 