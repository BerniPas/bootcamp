import { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';

//Axios para los métodos HTTP
import axios from 'axios';

const Registro = () => {

    // Estados
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Creamos la función para nombre
    const handleEmailChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    // Crear la función que envía los datos al backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        console.log(nombre, email, password);

        //1 Creo el objeto para enviar al Backend
        const persona = {
            nombre,
            email,
            password
        }

        //2 Envío el objeto al Backend
        try {
            const result = await axios.post('http://localhost:8080/api/usuarios/registro', persona);
            //3. Si todo sale bien, mostramos un mensaje de éxito
            alert(result.data.message);

            // Limpio los campos del formulario
            setNombre("");
            setEmail("");
            setPassword("");
            
        } catch (e) {
            console.log(e);
        }

    }

    //

    return (
        <Container className="mt-5 d-flex justify-content-center">
        <Card style={{ width: '400px' }}>
            <Card.Body>
            <Card.Title className="text-center mb-4">Registro de Usuario</Card.Title>
            
            <Form onSubmit={handleSubmit}> 
                <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type="text"
                    value = { nombre }
                    onChange={(e) => {setNombre(e.target.value)}} 
                    placeholder="Escribí tu nombre"
                    required
                />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                    type="email"
                    value = { email }
                    onChange={ handleEmailChange }
                    placeholder="ejemplo@correo.com"
                    required
                />
                </Form.Group>

                <Form.Group className="mb-4">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    type="password"
                    value={ password }
                    onChange={ handlePasswordChange }
                    placeholder="Tu contraseña secreta"
                    required
                />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                Registrarse
                </Button>
                <Button variant="danger" type="reset" className="w-100 mt-2">
                Borrar Datos
                </Button>
            </Form>
            </Card.Body>
        </Card>
        </Container>
    );
};

export default Registro;