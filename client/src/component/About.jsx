import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';


function About() {
    return (
        <>
        <Container className='bg-dark'  style={{ marginTop: '50px',color:'white' }}>
                <h1 style={{fontFamily: 'Cambay, sans-serif'}}>When we are</h1>
                <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
                Declarative views make your code more predictable and easier to debug.Component-BasedBuild encapsulated components that manage their own state, then compose them to make complex UIs.
                Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.Learn Once, Write Anywhere
                    We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.
                    React can also render on the server using Node and power mobile apps using React Native.
                    React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.Declarative views make your code more predictable and easier to debug.
</p>
                <h1 style={{fontFamily: 'Cambay, sans-serif'}}>Our speciality</h1>
                <Row>
                    <Col md={6}>
                        <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

                            Declarative views make your code more predictable and easier to debug.

                            Component-Based
                            Build encapsulated components that manage their own state, then compose them to make complex UIs.

                            Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</p>
                    </Col>
                    <Col md={6}>
                        <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

                            Declarative views make your code more predictable and easier to debug.

                            Component-Based
                            Build encapsulated components that manage their own state, then compose them to make complex UIs.

                            Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</p>
                    </Col>
                </Row>
                <Row>
                    <h1 style={{fontFamily: 'Cambay, sans-serif'}}>Our Cheif</h1>
                   
                    <Col md={3}>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.Declarative views make your code more predictable and easier to debug.

                    </Col>
                    <Col md={3}>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.Declarative views make your code more predictable and easier to debug.

                    </Col>
                    <Col md={3}>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.Declarative views make your code more predictable and easier to debug.

                    </Col>
                    <Col md={3}>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.Declarative views make your code more predictable and easier to debug.

                    </Col>
                    
                    
                </Row>
            </Container>
        </>
    )
}

export default About;
