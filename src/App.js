import React from 'react';
import Search from './Components/Search';
import Results from './Components/Result';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';


function App() {

  const images = useSelector((state) => state.search.images)

  return (
    <Container className="App" fluid="md">
        <Search />
        {
          images.length !== 0
            ? <Results />
            : null
        }
    </Container>
  );
}

export default App;
