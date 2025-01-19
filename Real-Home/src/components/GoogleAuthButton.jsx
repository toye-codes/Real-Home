import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

  

const GoogleAuthButton = () => {
  const navigate = useNavigate();

  const onSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    navigate("/home")
  };

  const onError = () => {
    console.log("Login Failed");
  };

  return <GoogleLogin onSuccess={onSuccess} onError={onError}  />;
};

export default GoogleAuthButton;

