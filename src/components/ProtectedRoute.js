import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useUserAuth } from "../context/UserAuthContext";
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
  const history = useHistory();
  console.log("Check user in Private: ", user);
  if (!user) {
    return <history.push to ="/login" />;
  }
  return children;
};

export default ProtectedRoute;
