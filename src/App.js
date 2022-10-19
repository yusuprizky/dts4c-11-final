import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewsDetail from "./pages/NewsDetail";
import NotFound from "./pages/NotFound";
import HotTopicsPage from "./pages/HotTopicsPage";
import LatestNewsPage from "./pages/LatestNewsPage";
import Header from "./components/Header";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="news/:id" element={<NewsDetail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="hottopics/:id" element={<HotTopicsPage />} />
        <Route path="latestnews/:id" element={<LatestNewsPage />} />
      </Routes>
    </>
  );
};

export default App;
