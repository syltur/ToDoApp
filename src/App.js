import Container from './components/Container/Container';
import Navbar from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import { Favorite } from './components/Favorite/Favorite';
import { About } from './components/About/About';
import { NotFound } from './components/NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <main>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;