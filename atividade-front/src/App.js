import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/signup/SignUp';
import { ThemeProvider } from 'styled-components';
import { blue, red } from '@mui/material/colors';
import { createTheme } from '@mui/material';

function App() {
  const defaultRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/home",
      element: <Home/>
    },
    {
      path: "/user/create",
      element: <SignUp/>
    }
  ])

  const defaultTheme = createTheme({
    palette: {
        primary: {
            main: blue[800]
        }, 
        secondary: {
            main: red[300]
        }
    }
  })
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <RouterProvider router={defaultRouter}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
