import './App.css';
import Nav from './components/Nav'
import ThemeButton from './components/ThemeButton';

function App() {
  return (
    <div className="">
      <div className="transition delay-150 duration-400 ease-in-out leftCont bg-gray-300 dark:text-gray-100 dark:bg-gray-800">
        <h1>Left Container</h1>
        <Nav />
      <ThemeButton />
      </div>
      <div>
        <h1 className="transition delay-150 duration-300 ease-in-out rightCont bg-gray-50 text-gray-800 dark:text-gray-50 dark:bg-gray-700">RightContainer</h1>
      </div>
    </div>
  );
}

export default App;
