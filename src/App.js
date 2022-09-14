import { Stack, Box } from "@mui/material";
import Navbar from "./Components/Navbar";
import Rightbar from "./Components/Rightbar";
import Sidebar from "./Components/Sidebar";
import Slides from "./Components/Slides";
import Blog from "./Components/Blog";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={
            <Box>
              <Navbar />
              <Stack sx={{ m: 2, }} direction="row" spacing={1} justifyContent="space-between">
                <Sidebar />
                <Slides />
                <Rightbar />
              </Stack>
              <Footer />
            </Box>
          } />
          <Route exact path="/blog" element={
            <Box>
              <Navbar />
              <Stack sx={{ m: 2, }} direction="row" spacing={1} justifyContent="space-between">
                <Sidebar />
                <Blog />
                <Rightbar />
              </Stack>
              <Footer />
            </Box>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
