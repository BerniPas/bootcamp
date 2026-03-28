
import Form from 'react-bootstrap/Form';
import { Button, FormGroup } from 'react-bootstrap';

let Enviar = "Login"

function Login() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email: </Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
      <FormGroup> 
        <Button 
          value={Enviar}
          />
      </FormGroup>
    </Form>
  );
}

export default Login;