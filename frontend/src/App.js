import { Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/HomePage';
import ChatPage from './Pages/ChatPage';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route path="/chats" component={ChatPage}/>
    </div>
  );
}

export default App;
