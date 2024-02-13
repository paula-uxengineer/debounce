import './App.css'
import { SearchBar } from './components/searchbar'

function App() {
  return (
    <div className='app'>
      <div className="search-bar-container">
          <SearchBar />
          {/* <div>Results</div> */}
      </div>
    </div>
  )
}

export default App
