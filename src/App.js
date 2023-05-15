import './App.css';
import Notification from './components/Notification';
function App() {
  return (
    <div className="App">
      <Notification type='succes'/>
      <Notification type='error'/>
      <Notification type='warning'/>
      <Notification type='info'/>
    </div>
  );
}

export default App;
