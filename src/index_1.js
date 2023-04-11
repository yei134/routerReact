// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './components/App';
// import Todolist from './components/Todolist';
// import {Router, Link} from 'react-router-dom'
// import { HashRouter, Route, Routes} from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import reportWebVitals from './reportWebVitals';
//ref:https://israynotarray.com/react/20221008/1445725227/
//ref:https://molly1024.medium.com/%E6%96%B0%E7%89%88-react-router-%E6%80%8E%E9%BA%BC%E7%94%A8-react-router-dom-v6-8c0624642fce



// class App extends React.Component {
//   render () {
//     return (
//       <div>
//         <h1>App</h1>
//         <ul>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/users/1">Users 1</Link></li>
//           <li><Link to="/users/2">Users 2</Link></li>
//         </ul>
//         {this.props.children} 
//       </div>
//     );
//   }
// }

// class About extends React.Component {
//   render () {
//     return (<h1>About</h1>);
//   }
// }

// class Users extends React.Component {
//   render () {
//     const id = this.props.params.userId;
//     return (
//       <div>
//         user id: {id}
//       </div>
//     )
//   }
// }


// ReactDOM.render(
//   (
//     <Router history={hashHistory}>{/*hashHistory*/}
//       <Route path="/" component={App}>
//         <Route path="about" component={About}/>
//         <Route path="users/:userId" component={Users} />
//       </Route>
//     </Router>
//   ),
//   document.getElementById('root')
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App/>
//     {/* <HashRouter>
//       <Routes> */}
//         {/* <Route path="/" element={<App/>}/>
//         <Route path='/todolist' element={<Todolist/>} /> */}
        
//       {/* </Routes>     
//     </HashRouter> */}
//   </React.StrictMode> 
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
/*
//router教程
import React from 'react'
import './App.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
    useLocation,
} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <ul>
                <li>HOME</li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/list'>List</Link>
                </li>
            </ul>
        </div>
    )
}
const About = () => {
    const navigate = useNavigate()
    const onClick = () => {
        navigate('/')
    }
    return (
        <div>
            <button onClick={onClick}>BACK</button>
        </div>
    )
}

const Child1 = () => {
    return <div>Child1</div>
}
const Child2 = () => {
    return <div>Child2</div>
}

const List = () => {
    return (
        <div>
            list 頁面
            <Menus1 />
            <Container />
        </div>
    )
}
const Container = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}
const Menus1 = () => {
    return (
        <div>
            <Link to={'/list/child1'}> one </Link>
            <Link to={'/list/child2'}> two </Link>
        </div>
    )
}

function App() {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route element={<Home />} path={'/'}></Route>
                    <Route element={<About />} path='/about'></Route>
                    <Route element={<List />} path='/list'>
                        <Route element={<Child1 />} path='/list/child1'></Route>
                        <Route element={<Child2 />} path='/list/child2'></Route>
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}
export default App
*/
/*
//react-router教程
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router-dom'
import './index.css';

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users/1">Users 1</Link></li>
          <li><Link to="/users/2">Users 2</Link></li>
        </ul>
        {this.props.children} 
      </div>
    );
  }
}

class About extends React.Component {
  render () {
    return (<h1>About</h1>);
  }
}

class Users extends React.Component {
  render () {
    const id = this.props.params.userId;
    return (
      <div>
        user id: {id}
      </div>
    )
  }
}


ReactDOM.render(
  (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="about" component={About}/>
        <Route path="users/:userId" component={Users} />
      </Route>
    </Router>
  ),
  document.getElementById('root')
);
*/
/*
//預設程式碼
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/