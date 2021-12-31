import React from 'react'
import { Container, Row, Col, Table,Image } from 'react-bootstrap'
import { FiPhoneCall } from "react-icons/fi";
import { ImMobile } from "react-icons/im";
import { MdEmail } from "react-icons/md";
function Contact() {
    return (
        <>
            <Container className='bg-dark' style={{ marginTop: '50px', color:'white'}}>
                <Row>
                    <Col md={6}>
                        <h2 style={{textAlign:'center',fontFamily: 'Cambay, sans-serif'}}>Vcoder Pizza shop</h2>
                        <p style={{fontFamily: 'Cambay, sans-serif'}}>
                            React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
                            Declarative views make your code more predictable and easier to debug.Component-BasedBuild encapsulated components that manage their own state, then compose them to make complex UIs.
                            Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.Learn Once, Write Anywhere
                            We don’t makesign simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.Declarative views make your code more predictable and easier to debug.
                        </p>


                        <Table striped bordered hover className="text-center">
                            <thead>
                                <tr>
                                    <th className="bg-warning text-center" colSpan={3}style={{color:'white'}}>--Contact Details--</th>
                                </tr>
                            </thead>
                            <tbody >
                                <tr style={{color:'white'}}>
                                    <td><FiPhoneCall /></td>
                                    <td>phone</td>
                                    <td>0123-456789</td>
                                </tr>
                                <tr style={{color:'white'}}>
                                    <td><ImMobile /></td>
                                    <td>call</td>
                                    <td>123456789</td>
                                </tr>
                                <tr style={{color:'white'}}>
                                    <td><MdEmail /></td>
                                    <td>email</td>
                                    <td>help@domain.com</td>
                                </tr>

                            </tbody>
                        </Table>
                    </Col>
                    <Col md={6}>
                        <Image src="images/contact.jpg" style={{width:"100%",height:"100%",borderRadius:'50%'}}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Contact
