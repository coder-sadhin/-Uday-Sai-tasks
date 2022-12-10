import { useEffect, useState } from 'react';
import './App.css';
import DataTable from './Components/DataTable';

function App() {
  const [informetions, setInformetions] = useState([]);

  const [ascDesc, setAscDesc] = useState('');

  useEffect(() => {

    fetch('excelData.json')
      .then(res => res.json())
      .then(data => {
        // console.log(data)

        if (ascDesc === 'asc') {
          let sortedProducts = data.sort(
            (p1, p2) => (p1.first_name > p2.first_name) ? 1 : (p1.first_name < p2.first_name) ? -1 : 0);
          setInformetions(sortedProducts)
        }
        else if (ascDesc === 'desc') {
          let sortedProducts = data.sort(
            (p1, p2) => (p1.first_name < p2.first_name) ? 1 : (p1.first_name > p2.first_name) ? -1 : 0);
          setInformetions(sortedProducts)
        }
        else {
          setInformetions(data)
        }
      })

  }, [ascDesc])

  return (
    <div className='w-11/12 mx-auto'>
      <h2 className='text-4xl text-center my-5 font-bold'>Information List</h2>
      <DataTable
        informetions={informetions}
        setAscDesc={setAscDesc}
      ></DataTable>
    </div>
  );
}

export default App;
