import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
