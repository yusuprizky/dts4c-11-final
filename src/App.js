import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Business from "./pages/Business";
import Technology from "./pages/Technology";
import Sport from "./pages/Sport";
import Sains from "./pages/Sains";
import Health from "./pages/Health";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:category" element={<Home />} />
            <Route path="/bisnis" element={<Business />} />
            <Route path="/teknologi" element={<Technology />} />
            <Route path="/olahraga" element={<Sport />} />
            <Route path="/sains" element={<Sains />} />
            <Route path="/kesehatan" element={<Health />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;
