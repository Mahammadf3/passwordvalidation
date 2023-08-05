import {useState} from "react"
import "./App.css"
const App=()=>{
  const [name,setState]=useState("")
const onPassword=event=>{
setState(event.target.value)
}
const validation=()=>{
  if(name.length<=8){
    return<p className="hh"> password must be in 8 charectors</p>
  }
}
  return(
  <div className="container">
    <div className="card">
      <h1 className="h">
        check your password
      </h1>
<p className="h">check how strong and check your password</p>
<input type="password" onChange={onPassword}/>
{validation()}
    </div>
  </div>
  )
}

export default App;