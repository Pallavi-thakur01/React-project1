import "./App.css";
import { useState } from "react";
import  Buttons from "./components/Button";


function App() {
  
  const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('Male');
    const [hobbie, setHobbie] = useState('Reading');
    const submitValue = (e) => {
      e.preventDefault()

      const frmdetails = {
          'First Name' : fName,
          'Last Name' : lName,
          'Email' : email,
          'hobbie': hobbie,
          'gender' : gender
         
      }
      console.log(frmdetails);
  }
  const onClear = () => {
    setfName("");
    setlName("");
    setEmail("");
    setHobbie("");
    setGender("");
    
  };
  
  return (
    <div  style={{marginLeft:"600px",marginTop:"100px"}}>
    <form >
       <h1 style={{marginLeft:"10%"}}>Form</h1>
       <br />
       <label>First Name : </label>
       <input
          type="text"
          value={fName}
          placeholder="First Name"
          onChange={e => setfName(e.target.value)}
          ></input>
       <br/>
       <br />
       <label>Last Name : </label>
       <input
          type="text"
          value={lName}
          placeholder="Last Name"
          onChange={e => setlName(e.target.value)}
          ></input>
       <br />
       <br />
       <label>Email :   </label>
       <input  style={{marginLeft:"35px"}}
        size="20"
          type="text"
          value={email}
          placeholder="Email"
          onChange={e => setEmail(e.target.value)} 
          ></input>
       <br />
       <br />
       <label for="Hobbies">Hobbies :  </label>
       <select style={{marginLeft:"12px"}} name="Hobbies" value={hobbie}  onChange={e=>setHobbie(e.target.value)}>
          <option >Dance</option>
          <option>Reading</option>
          <option>Singing</option>
       </select>
       <br />
       <br />
       <div>
          <label  for="gender">Gender : </label>
          <input type="radio" value={gender} name="gender" onClick={() => setGender('Male')} /> Male
          <input type="radio" value={gender} name="gender" onClick={() => setGender('Female')}/> Female
          <input type="radio" value={gender} name="gender" onClick={() => setGender('other')}/> Other
       </div>
       <br/>
       <br />
       <button  onClick={submitValue} type="submit" value="submit">submit</button> 
       {/* <button  style={{marginLeft:"100px"}} onClick={onClear} type="reset" value="reset">Clear</button> */}
       < Buttons value={"Clear"} onClick={onClear}></ Buttons>
    </form>
 </div>
 );

  }
export default App;











// import "./App.css";
// import {  Route,Routes } from "react-router-dom";


// import Login from  './pages/Login';
// import Register from "./pages/Register";
//  import Forget from "./pages/Forget";

// function App() {
//   return (
//     // <Forget />
//     // <Register />
//     //  <Login />

//     <Routes>
//       <Route exact path="/" element={<Login/>} />
//     <Route path="/Register" element={<Register/>} />
//     <Route path="/Forget" element={<Forget/>}  />
    
    
//     </Routes>

//   );
// }

// export default App;
