import logo from './logo.svg';
import './App.css';
import './dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Deployment is happening! 
        </p>
        <p>Contact me on robin@robinkardell.com</p>
        <p>:D</p>
        <div class="alert alert-primary" role="alert">
  This is a primary alert—check it out!
</div>
      </header>
    </div>
  );
}

export default App;
