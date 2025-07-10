
import './App.css'
import Spreadsheet from "./components/Spreadsheet";
import Breadcrumbs from "./components/Breadcrums";
import Toolbar from "./components/Toolbar";

function App() {

  return (
    <div className="min-h-screen bg-white px-4 py-6">
      <Breadcrumbs />
      <Toolbar />
      <Spreadsheet />
    </div>
  )
}

export default App
