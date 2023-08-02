import "./App.css";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import SockDetails from "./pages/SockDetails"
import AddSocks from "./pages/AddSocks";
import AllSocks from "./pages/AllSocks";
import EditSock from "./pages/EditSock";

 
function App() {

  const getToken = () => {
    return localStorage.getItem('authToken')
  }

  const LoggedIn = () => {
    return getToken() ? <Outlet /> : <Navigate to='/login' />
  }

  const NotLoggedIn = () => {
    return !getToken() ? <Outlet /> : <Navigate to='/' />
  }

  return (
    <div className="App">
      
      <Navbar />
 
      <Routes>      
        <Route path="/" element={ <Homepage /> } />
        <Route path="/all-socks" element={<AllSocks/>}/>
        <Route path="/sock-details/:sockId" element={<SockDetails/>}/>

        <Route element={<LoggedIn />}>
        <Route path="/add-sock" element={<AddSocks/>} />
        <Route path="edit-sock/:sockId" element={<EditSock/>}/>

        </Route>

        <Route element={<NotLoggedIn />}>

          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />

        </Route>

      </Routes>
      
    </div>
  );
}
export default App;