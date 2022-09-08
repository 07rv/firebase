import { Box, Stack } from "@mui/material";
import Navbar from "./Components/Navbar";
import Rightbar from "./Components/Rightbar";
import Sidebar from "./Components/Sidebar";
import Slides from "./Components/Slides";

function App() {
  return (
    <div className="App">
      <Box>
        <Navbar />
        <Stack sx={{ m: 2, }} direction="row" spacing={1} justifyContent="space-between">
          <Sidebar />
          <Slides />
          <Rightbar />
        </Stack>
      </Box>
    </div>
  );
}

export default App;
