import './App.css';
import QrCode from './components/QrCode';

function App() {
  return (
    <div className="App">
      <p>Qrcode</p>
      <QrCode value={
        'https://www.arunsingh28.me'
      } />
    </div>
  );
}

export default App;
