import { Routes, Route, useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Home from "./pages/Home";
import NewsDetail from "./pages/NewsDetail";
import NotFound from "./pages/NotFound";
import HotTopicsPage from "./pages/HotTopicsPage";
import Header from "./components/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./components/Footer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  const category = useParams();

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:catergory" element={<NewsDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;
