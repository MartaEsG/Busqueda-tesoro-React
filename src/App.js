
import "./App.css"
import Matrix from './components/Matrix';

const gallery = [
  {img: "https://cdn-icons-png.flaticon.com/512/2/2104.png" }, 
  {img: "https://cdn-icons-png.flaticon.com/512/2/2104.png"}, 
  {img: "https://cdn-icons-png.flaticon.com/512/2/2104.png"}, 
  {img: "https://cdn-icons-png.flaticon.com/512/2/2104.png"},
  {img: "https://cdn-icons-png.flaticon.com/512/2/2104.png"}, 
  {img: "https://cdn-icons-png.flaticon.com/512/2/2104.png"} 
]
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Matrix data = {gallery} />
      </div>
      
    </div>
  );
}

export default App;
