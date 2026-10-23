import "./Login.css"
import { useState } from "react"
export default function Login() {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  function log(){
    console.log("Email:",email)
    console.log("Pass:",pass)
  } 
  return (
    <div className="fullbox">

      <div className="logbox">
        <form>

          <table className="tap">
            <tr>
              <td><label for="name" >Email Id:</label></td>
              <td><input type="email"
                id="name"
                className="inpu"
                value={email}
                onChange={(i) => setEmail(i.target.value)}

                placeholder="Enter your Email..." /></td>
            </tr>
            <br />
            <tr>
              <td><label for="pass">Password:</label></td>
              <td><input type="password"
                id="pass"
                className="inpu"
                value={pass}
                onChange={(e)=>setPass(e.target.value)}
                placeholder="Enter your password.." /></td>

            </tr>
          </table>
        
              <button type="submit" onClick={log}> Login</button>
        </form>
         
   
      </div>

    </div>



  )

}




