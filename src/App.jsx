import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import HackerNewsTopStories from "./pages/HackerNewsTopStories.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/hacker-news-top-stories" element={<HackerNewsTopStories />} />
      </Routes>
    </Router>
  );
}

export default App;
