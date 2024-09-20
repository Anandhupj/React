// import logo from './logo.svg';
import './App.css';
import First01 from './components/First01';
import Img from './components/img';
import Counter from './components/Usestate';
import Timer from './components/timer';
import Display from './components/display'
import UseRef from './components/useref';
import Scrolltotop from './components/scroll';

function Greeting(myData){
  return <h1>Hello, {myData.name}</h1>

}

function App() {
  return (
    <div className="App">
       {/* <First01/> */}
        {/* <Img/>   */}
    {/* <Greeting name="anandhan"/> */}
    {/* <Counter/> */}
    {/* <Timer/>  */} 
    {/* <Display/> */}
    {/* <UseRef/> */}
    <Scrolltotop/>
    </div>
  );
}

export default App;
