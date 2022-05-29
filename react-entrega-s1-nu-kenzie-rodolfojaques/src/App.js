
import Inicio from './components/Inicio';
import { useState } from 'react';
import PageMain from './components/PageMain';

function App() {

  const [page,setPage] = useState(false)

  return (
    <div className="App">
      {page ? <PageMain setPage={setPage}/>:<Inicio setPage={setPage}/>}      
    </div>
  );
}

export default App;
