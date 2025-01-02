import { GoogleLogin } from "@react-oauth/google";

const GoogleAuthButton = () => {
  const onSuccess = (credentialResponse) => {
    console.log(credentialResponse);
  };

  const onError = () => {
    console.log("Login Failed");
  };

  return <GoogleLogin onSuccess={onSuccess} onError={onError} />;
};

export default GoogleAuthButton;

