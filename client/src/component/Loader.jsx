import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
    return <Spinner animation="border" variant="info" style={{ position:'relative',left:'600px' , marginTop:'80px',
    height:'70px',width:'70px'}} />;
}

export default Loader
