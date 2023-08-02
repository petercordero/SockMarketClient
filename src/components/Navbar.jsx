import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
 
function Navbar() {

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

    const getToken = () => {
        return localStorage.getItem('authToken')
      }

  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>

      <Link to="/all-socks">
        <button>See Socks</button>
      </Link>
 
      {getToken() && (
        <>      <Link to="/add-sock">
            <button>List Sock</button>
        </Link>
          <button onClick={logOutUser}>Logout</button>
          <span>{user && user.name}</span>
        </>
      )}
 
      {!getToken() && (
        <>
          <Link to="/signup"> <button>Sign Up</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
        </>
      )}
    </nav>
  );
}
 
export default Navbar;