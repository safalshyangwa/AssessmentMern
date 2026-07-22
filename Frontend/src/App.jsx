import './App.css';
import Navbar from './components/Navbar';
import Login from "./pages/login";
import AppRoutes from './routes/AppRoutes';


const app=()=>
{
  return (
   
    <>
    <Navbar/>
    <AppRoutes/>
    </>
  );  
}

export default app;