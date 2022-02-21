import './App.css';
import Header from "./components/header/header.js"
import SearchUser from "./components/search-user/search-user.js"
import Footer from "./components/footer/footer.js"

function App() {
  return (
    <div className="App">
    <Header />
    <SearchUser />
    <Footer />
    </div>
  );
}

export default App;
