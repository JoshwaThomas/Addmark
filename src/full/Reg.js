
import React,{useState} from "react";


function App() {

  const addetail =() => {
    axios.post('http://localhost:3001',{

    name:name,
    reg:reg,
    course:course,
    clg:clg

    }).then(()=>console.log('Success'))
  }

    const [name, setName] = useState("")
    const [reg, setReg] = useState("")
    const [course, setCourse] = useState("")
    const [clg, setClg] = useState("")


  return (
    <div className="ontainer mx-auto px-4 mt-32 ml-80 mr-80 pt-10 pb-10 border-2">
        <form onSubmit={addetail}>
        <center>
            <label>Name</label>
            <input type='text' name='name' onChange={(e) => setName(e.target.value)} value={name} className=" border-2" /><br/>
            <label>Reg. No.</label>
            <input type='text' name='reg' onChange={(e) =>setReg(e.target.value)} value={reg} className=" border-2"/><br/>
            <label>Course</label>
            <input type='text' name='course' onChange={(e) => setCourse(e.target.value)} value={course} className=" border-2"/><br/>
            <label>College</label>
            <input type='text' name='clg' onChange={(e) => setClg(e.target.value)} value={clg} className=" border-2"/><br/>
            <button>submit</button>
        </center>
        </form>
    </div>
   
  );
}

export default App;
