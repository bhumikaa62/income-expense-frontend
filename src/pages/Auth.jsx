import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();


  
 const register = async(evt)=>{
  evt.preventDefault()
  const ob = {
       name : nameRef.current.value,
       mobile : mobileRef.current.value,
       email : mailRef.current.value,
       password : passRef.current.value
  }
  
  const response = await fetch("http://localhost:8989/auth/registration",{
    method : 'POST',
    headers:{
      "Content-Type" : "application/json"
    },
    body : JSON.stringify(ob)
  });
  const res = await response.json();
  if(res.status){
    toast.success(res.msg);
    evt.target.reset();
    setIsLogin(true);
  }
  else
    toast.error(res.msg);
 }

  const nameRef = useRef();
  const mobileRef = useRef();
  const mailRef = useRef();
  const passRef = useRef();


  const login = async (evt) => {
  evt.preventDefault();

  const ob = {
    email: mailRef.current.value,
    password: passRef.current.value,
  };

  const response = await fetch("http://localhost:8989/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ob),
  });

  const res = await response.json();

 if (res.status) {
  localStorage.setItem("token", res.data.token);
  localStorage.setItem("userId", res.data.userId);

  localStorage.setItem("role", res.data.role);

  toast.success(res.msg);

  // ✅ ADMIN REDIRECT
  if (res.data.role === "admin") {
    navigate("/admin/users");
  } else {
    navigate("/dashboard");
  }
}
  }


  return (
    <section className="auth-wrapper">
      <div className="auth-container">
        <div className="auth-card">

          <h2 className="auth-title">
            {isLogin ? "Secure Login" : "Create Account"}
          </h2>
             <form onSubmit={isLogin ? login : register}>

  {!isLogin && (
    <>
      <input
        type="text"
        ref={nameRef}
        placeholder="Full Name"
        required
      />

      <input
        type="tel"
        ref={mobileRef}
        placeholder="Mobile Number"
        required
      />
    </>
  )}

  <input
    type="email"
    ref={mailRef}
    placeholder="Email Address"
    required
  />

  <input
    type="password"
    ref={passRef}
    placeholder="Password"
    required
  />

  <button type="submit">
    {isLogin ? "Login Securely" : "Register Securely"}
  </button>

</form>

          <p className="switch-text">
            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}
            <span onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? " Register" : " Login"}
            </span>
          </p>

        </div>
      </div>
    </section>
  );
};

export default Auth;
