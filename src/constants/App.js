// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import './App.css';
// import Navbar from '../src/Components/common/navbar/Navbar'
// import Home from './Components/home/Home';
// import About from "./Components/about/About";
// import Courses from "./Components/allcourses/Courses";
// import NewsAndUpdates from "./Components/newsAndUpdates/NewsAndUpdates";
// import Chatbot from "./Components/chatBot/ChatBot";
// import Footer from "./Components/common/footer/Footer";
// import { useState } from "react";
// import LoginPopup from './Components/loginPopup/LoginPopup'

// function App() {
//   const [showLogin, setShowLogin] = useState(false)
//   return (
//     <>
//     {showLogin?<LoginPopup setShowLogin={setShowLogin}/> :<></>}
//       <Router>
//       <Navbar setShowLogin={setShowLogin}/>
//         <Switch>
//           <Route exact path='/' component={Home} />
//           <Route exact path='/courses' component={Courses} />
//           <Route exact path='/chatbot' component={Chatbot} />
//           <Route exact path='/news' component={NewsAndUpdates} />
//           <Route exact path='/about' component={About} />
//         </Switch>
//         <Footer />
//       </Router>

//     </>
//   );
// }

// export default App;
