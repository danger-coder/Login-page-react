import "./App.css";

function App() {
  return (
    <div className="container mx-auto border">
      <div>
        <div>
          {/* <img src={logo} alt="logo" /> */}
          <h2>LOGO</h2>
        </div>
        <form>
          <div>
            <h1>Sign In</h1>
            <p>
              Don’t have an account? <a>Create now</a>
              
            </p>
          </div>

          <div>
            <label>E-mail</label>
            <input type="email" placehlder="Enter your email"></input>
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
}

export default App;
