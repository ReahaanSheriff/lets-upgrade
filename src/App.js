import Button from './components/Button';
import './App.css';

function App() {
  return (
    <>
    <div className="App" style={{backgroundColor:"steelblue",color:"white"}}>
      <div className="row">
        <div className="col">
        <h1>Lets Upgrade</h1>
        
      </div>
      <div className="col"> <Button name="Home" color="btn btn-success" /></div>
      <div className="col"><Button name="About"  color="btn btn-primary" /></div>
      <div className="col"><Button name="Contact"  color="btn btn-warning"  /></div>
      </div>
      
    </div>
    <h1 className="text-center">Hello World</h1>
    </>
  );
}

export default App;
