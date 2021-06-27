import './App.css';
import Nav from './components/Nav'

function App() {
  return (
    <div className="">
      <div className="leftCont bg-gray-100 dark:text-gray-100 dark:bg-gray-800">
        <h1>Left Container</h1>
        <Nav />
      </div>
      <div>
        <h1 className="rightCont bg-gray-800 text-white dark:text-black dark:bg-white">RightContainer</h1>
      </div>
    </div>
  );
}

export default App;
