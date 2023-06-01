import React, { useEffect } from "react";
import "./App.css";
import Homescreen from "./pages/Homescreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loginscreen from "./pages/Loginscreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";
import Profilescreen from "./pages/Profilescreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        dispatch(logout())
      }
    });

    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Loginscreen />
        ) : (
          <Routes>
            <Route path="/profile" Component={Profilescreen}/>
            <Route path="/" exact Component={Homescreen} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
