import NavBar from './components/NavBar'
import Dashboard from './containers/Dashboard'
import { UserContext, currentUser } from './context/UserContext'

function App() {

  return (
    <UserContext.Provider value={currentUser}>
      <NavBar />
      <Dashboard />
    </UserContext.Provider>
  )
}

export default App
