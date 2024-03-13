import './App.css';
import Cocktails from './pages/Cocktail/Cocktails';
import FixedBottomNavigation from './components/Navbar';
import BackToTop from './components/TopBar';
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <BackToTop></BackToTop>
      <Container>
      <Cocktails></Cocktails>
      </Container>
      <FixedBottomNavigation></FixedBottomNavigation>
    </div>
  );
}

export default App;
