import "bootstrap/dist/css/bootstrap.css";
import "./login.scss";

function Login() {
  return (
    <div className="Login">
      <div className="loginContainer">
        <h6>Login to Restructure</h6>
        <p>
          Enter your email address and the default password sent to your email
          address
        </p>

        <div className="formContainer">
          <div class="mb-3">
            <div class="input-group flex-nowrap">
              <span class="input-group-text" id="addon-wrapping">
                <i class="fa fa-envelope-o"></i>
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Email"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          <div class="mb-3">
            <div class="input-group flex-nowrap">
              <span class="input-group-text" id="addon-wrapping">
                <i class="fa fa-lock" aria-hidden="true"></i>
              </span>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          <button className="btn btn-primary col-auto">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
