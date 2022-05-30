
import Inicio from './components/Inicio';
import { useState } from 'react';
import PageMain from './components/PageMain';

function App() {

  const [page,setPage] = useState(false)
  const [listTransactions,setListTransactions] = useState([])
  console.log(listTransactions);

  return (
    <div className="App">
      {page ? <PageMain 
      setPage={setPage}
      listTransactions={listTransactions}
      setListTransactions={setListTransactions}
      />:<Inicio 
      setPage={setPage}
      />}      
    </div>
  );
}

export default App;
