import { Suspense } from 'react'
import './App.css'
import AllCards from './Components/AllCards/AllCards'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'

const fetchCards=async ()=>{
  const res=await fetch("/card.json")
  return res.json();
}

function App() {

  const fetchPromise=fetchCards();
  return (
    <>
      {/* Navbar */}
      <Navbar></Navbar>

      {/* Banner Section */}
      <Banner></Banner>

    {/* All Ticktes */}
    <Suspense fallback={<div className=" flex items-center justify-center bg-base-100/80 backdrop-blur-sm z-50">
            <span className="loading loading-spinner loading-xl text-primary"></span>
          </div>
}>
      <AllCards fetchPromise={fetchPromise}></AllCards>
    </Suspense>
    </>
  )
}




export default App
