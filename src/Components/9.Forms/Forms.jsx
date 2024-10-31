import { useState } from "react";
import "./style.css";
const Forms = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [invalidName, setInvalidName] = useState("");
  const [invalidEmail, setInvalidEmail] = useState("");
  const [invalidPassword, setInvalidPassword] = useState("");
  const [invalidConfirmPassword, setInvalidConfirmPassword] = useState("");

  const [nameColor, setNameColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const checkValid = (e) => {
    e.preventDefault();
    if (name.length > 8) {
      setInvalidName("");
      setNameColor("green");
    } else {
      setInvalidName("Username must be 8 letters long");
      setNameColor("red");
    }

    if(email.includes("@gmail.com")){
        setInvalidEmail("");
        setEmailColor("green")
    }else {
          setInvalidEmail("Email should have @gmail.com");
          setEmailColor("red");
    }

    if(password.length > 8){
        setInvalidPassword("");
        setPasswordColor("green")
    }else{
         setInvalidPassword("Password must be 8 letters long");
         setPasswordColor("red");
    }

    if(confirmPassword != "" && confirmPassword === password){
        setInvalidConfirmPassword("");
        setConfirmPasswordColor("green");
    }else{
         setInvalidConfirmPassword("The password does not match");
         setConfirmPasswordColor("red");
    }
  };
  return (
    <section className="container">
      <img
        src="https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt="img"
      />
      <form onSubmit={checkValid}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ borderColor: nameColor }}
        />
        <p className="errorMsg">{invalidName}</p>

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ borderColor: emailColor }}
        />
        <p className="errorMsg">{invalidEmail}</p>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ borderColor: passwordColor }}
        />
        <p className="errorMsg">{invalidPassword}</p>

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={{ borderColor: confirmPasswordColor }}
        />
        <p className="errorMsg">{invalidConfirmPassword}</p>
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
};

export default Forms;
