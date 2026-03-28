
//1. crear una variariable de tipo objeto
const miestilo = {
  width: "100%", 
  maxwidth: "400px"
}

const Login = () => {
  return(
      <div className="container d-flex justify-content-center align-items-center mt-5">
    <div className="card shadow" style={{width: "100%", maxwidth: "400px"}}>
      <div className="card-body p-5">
        <h2 className="card-title text-center mb-4">Iniciar Sesión</h2>
        <form action="/login" method="POST">
          <div className="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" name="email" required />
          </div>
          <div className="mb-3">
            <label for="password" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="password" name="password" required />
          </div>
          <button type="submit" class="btn btn-primary w-100">Ingresar</button>
        </form>
        <p className="text-center mt-3">
          ¿No tienes cuenta? <a href="/api/usuarios/registro">Regístrate aquí</a>
        </p>
      </div>
    </div>
      </div>
  )
}

export default Login;