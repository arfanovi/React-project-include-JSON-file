import { useEffect, useState } from 'react'

import './App.css'
import Watch from './Components/Watch/Watch';


function App() {

  // const watches = [
  //   {
  //      id: 1,
  //     name: "Smart Watch",
  //     price: 150
  //   },
  //   {
  //     id: 2,
  //     name: "Sport Watch",
  //     price: 100
  //   },
  //   {
  //     id: 3,
  //     name: "Luxury Watch",
  //     price: 500
  //   },
  //   {
  //     id: 4,
  //     name: "Digital Watch",
  //     price: 80
  //   }
  // ];
  // console.log(watches)


  const [watches, setWatches] = useState([])

  useEffect( () =>{
    fetch('Watches.json')
    .then(res => res.json())
    .then(data =>setWatches(data))
  },[])
  return (
    <>
    <h2>Functionalities React</h2>
  {
    watches.map(watch =><Watch key={watch.id} watch={watch}></Watch>)
  }
    </>
  )
}

export default App
