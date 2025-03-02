import './App.css'
import { StyledEngineProvider, Box } from '@mui/material';
import TopBar from './layout/TopBar';
import RoutingContent from './layout/RoutingContent';


function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw' }}>
        <TopBar></TopBar>
        <RoutingContent></RoutingContent>
      </Box>
    </StyledEngineProvider>
  )
}

export default App
