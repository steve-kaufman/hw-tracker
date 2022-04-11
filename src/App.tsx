import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import "./styles/Main.scss"

function App() {
  return (
    <>
      <Header title="HW Tracker" />
      <main className="page-main">
        <Dashboard />
      </main>
    </>
  )
}

export default App
