import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Watchlist from "./pages/Watchlist";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Search from "./pages/Search";
import { CryptoProvider } from './context/crypto/CryptoContext'
import { UserProvider } from './context/user/UserContext'

function App() {
  return (
    <CryptoProvider>
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/watchlist" element={<Watchlist />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/search/:id" element={<Search />} />
        </Routes>
      </Router>
    </UserProvider>
    </CryptoProvider>
  );
}

export default App;
