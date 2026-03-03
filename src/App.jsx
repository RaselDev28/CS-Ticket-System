import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import ResolvedTask from './Components/Resolved Task/ResolvedTask'
import TaskStatus from './Components/Task-status/TaskStatus'

function App() {


  return (
    <>
      {/* Navbar */}
      <Navbar></Navbar>

      {/* Banner Section */}
      <Banner></Banner>

      {/* Task Status Componant */}
      <TaskStatus></TaskStatus>

      {/* Resolved Status Componant */}
      <ResolvedTask></ResolvedTask>
    </>
  )
}




export default App
