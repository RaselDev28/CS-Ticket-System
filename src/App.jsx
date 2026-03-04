import { Suspense, useState } from 'react'
import './App.css'
import AllCards from './Components/AllCards/AllCards'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'

const fetchCards = async () => {
  const res = await fetch("/card.json")
  return res.json();
}

function App() {
  const [fetchPromise] = useState(() => fetchCards());

  // State for tracking tasks
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  // Click card to move to Task Status & Increment In-Progress
  const addToProgress = (card) => {
    {
      setInProgressTasks([...inProgressTasks, card]);
    }
  };

  //Move from Task Status to Resolved & Adjust Counts
  const moveToResolved = (card) => {
    setInProgressTasks(inProgressTasks.filter(t => t.id !== card.id));
    setResolvedTasks([...resolvedTasks, card]);
  };

  return (
    <>
      <Navbar></Navbar>

      {/* Banner receives the counts */}
      <Banner
        progressCount={inProgressTasks.length}
        resolvedCount={resolvedTasks.length}
      />

      <Suspense fallback={
        <div className="flex items-center justify-center bg-base-100/80 backdrop-blur-sm z-50">
          <span className="loading loading-spinner loading-xl text-primary"></span>
        </div>
      }>
        <AllCards
          fetchPromise={fetchPromise}
          addToProgress={addToProgress}
          inProgressTasks={inProgressTasks}
          moveToResolved={moveToResolved}
          resolvedTasks={resolvedTasks}
        />
      </Suspense>
    </>
  )
}

export default App