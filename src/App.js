import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div style={{ width: '80%' }} className='m-auto bg-dark'>
      <RouterProvider router={router}>
      <Toaster />
      </RouterProvider>
    </div>
  );
}

export default App;
