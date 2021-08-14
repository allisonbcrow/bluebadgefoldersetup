import logo from './logo.svg';
import './App.css';
// import Header from './components/Day1/Header';
// import AboutMe from "./components/Day1/AboutMe";
// import Footer from "./components/Day1/footer"
import State from './components/Day1/State'
import Effect from './components/Day1/Effect';
import TenLittleMonkeys from './components/Day1/TenLittleMonkeys';

function App() {
  // const name = "Allison";
  // const age = 26;
  // const rich = "false";
  // return (
  //   <div className="App">
  //    <h1>Welcome to React, {name}.</h1>
  //    <h2>We just modified our root App component.</h2>
  //    <Header name={name} age={age} rich={rich}/>
  //    <AboutMe/>
  //    <Footer/>
  //    <h3>Create the following</h3>
  //     <ul>
  //       <li>New component in the Day1 Challenge folder called AboutMe</li>
  //       <li>h1 tag with your name</li>
  //       <li>p tag with I grew up in city/state</li>
  //       <li>an unordered list with 3 places you have visited</li>
  //       <li>Use inline styling to make your h1 tag with your name the color red and make the list tags with no bullets and aligned to the left</li>
  //     </ul>
  //     <p>Export, import into the App.jsx and mount it</p>

  //     <h3>Create the following</h3>
  // <ul>
  //    <li>Make a footer component import and mount it in the App.jsx component</li>
  //    <li>In the footer component make it have p tag with a Copyright EFA and the current year</li>
  //    <li>Bonus: Make that year dynamic by using a javascript method getFullYear Hint: Create a variable in the component that will store the getFullYear</li>
  // </ul>

  return (
    <div className="App">
      {/* <State />
      <Effect /> */}
      <TenLittleMonkeys />
      </div>
  );
}

export default App;
