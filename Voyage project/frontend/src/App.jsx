import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import Itinerary from "./pages/Itinerary";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./components/FAQ";
import AdminDashboard from "./pages/Admindashboard";
import DestinationDetail from "./components/DestinationDetail";
import BlogDetail from "./pages/BlogDetail";
import ScrollToTop from "./components/ScrollToTop";
import Chatbot from "./pages/Chatbot";

function App() {
  return (
    <Router>
        <ScrollToTop />
        <Chatbot/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/itinerary" element={<Itinerary />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="/gallery/:destination" element={<DestinationDetail />} />
  <Route path="/blog/:id" element={<BlogDetail />} />
          </Routes>
    </Router>
  );
}

export default App;
