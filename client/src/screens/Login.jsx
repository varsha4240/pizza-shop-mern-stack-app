import React,{useState,useEffect}from 'react';
import {Container,Form,Button } from 'react-bootstrap';
import {useDispatch} from 'react-redux'
import { loginUser } from '../actions/userAction'


const Login = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
const dispatch = useDispatch()

useEffect(() => {
if(localStorage.getItem('currentUser')){
  window.location.href = "/";
}
},[]);

const loginHandler = () =>{
  const user = {email,password}
  dispatch(loginUser(user));
};

  return (
    <>
    <Container  className='bg-light'  style={{ marginTop: '50px',width:'50%',height:'100%' }}>
    &nbsp;
     <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">

    <Form.Label >Email address</Form.Label>
    <Form.Control type="email" 
    value={email}
    onChange ={(e) => setEmail(e.target.value)}
    placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
&nbsp;
  <Form.Group className="mb-3" controlId="formBasicPassword">
 
    <Form.Label>Password</Form.Label>
    <Form.Control type="password"
    value={password}
    onChange ={(e) => setPassword(e.target.value)}
     placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary"
   onClick= {loginHandler} style={{width:'10%'}}>
Login
  </Button>
</Form>
&nbsp;
</Container>
    </>
  )
}

export default Login
