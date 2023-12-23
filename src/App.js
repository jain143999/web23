import './App.css';
import Header from './components/Header';
import Footer from './components/footer/Footer';
import Profile from './components/profile/Profile';
function App() {
  return (
    <div className="App">
      <Header/>
      <Profile/>
      <Footer/>
    </div>
  );
}

export default App;