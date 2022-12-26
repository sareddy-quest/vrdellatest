import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'src/MyDesignSystemLightTheme';
import ActivityList from 'src/components/ActivityList/ActivityList';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <Routes>
          <Route path="/" element={<ActivityList activity={ActivityList}/>} />
        </Routes>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
