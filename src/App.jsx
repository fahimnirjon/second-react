import { useEffect, useState } from 'react'
import './App.css'
import Watch from './assets/Components/Watch/Watch'
import Bottles from './assets/Components/Bottles/Bottles';

function App() {
  
  // const watches = [
  //   { id: 0, name: "Apple Watch Series 8", price: 399 },
  //   { id: 1, name: "Samsung Galaxy Watch 5", price: 300 },
  //   { id: 2, name: "Fitbit Sense 2", price: 279 },
  //   { id: 3, name: "Amazfit GTR 4", price: 199 },
  //   { id: 4, name: "Huawei Watch GT 3 Pro", price: 499 },
  //   { id: 5, name: "Garmin Fenix 7", price: 699 },
  //   { id: 6, name: "Fossil Gen 6", price: 299 },
  //   { id: 7, name: "Withings ScanWatch Horizon", price: 429 },
  //   { id: 8, name: "Mobvoi TicWatch Pro 3 Ultra", price: 299 },
  //   { id: 9, name: "OnePlus Watch (rumored)", price: "Unknown" }
  // ];

  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch('watches.json')
    .then(res=> res.json())
    .then(data=>setWatches(data))
  },[])

  
  

  return (
    <>
    <h2>Watch&Sunglass</h2>
    {
      watches.map(watch => <Watch key={watches.id} watch={watch}></Watch>)
    }
    <Bottles></Bottles>
    </>
  )
}

export default App
