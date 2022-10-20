import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import Home from "./pages/Home";
import NewsDetail from "./pages/NewsDetail";
import NotFound from "./pages/NotFound";
import HotTopicsPage from "./pages/HotTopicsPage";
import LatestNewsPage from "./pages/LatestNewsPage";
import Header from "./components/Header";
const App = () => {
  return (
    <div>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="news/:id" element={<NewsDetail />} />
          <Route path="*" element={<NotFound />} />
          <Route path="hottopics/:id" element={<HotTopicsPage />} />
          <Route path="latestnews/:id" element={<LatestNewsPage />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
