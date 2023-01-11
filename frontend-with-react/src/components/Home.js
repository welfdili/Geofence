import React,{ useState} from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios';


const Home = () => {

    const [name, setName] = useState("");

    let message = "";

    const addName = () => {
        axios
            .post("http://localhost:2000/api/addName", { name: name })
            .then((response) => {
                if (response) {
                    message = response.data.msg;
                    alert(message);
                }
            })
            .catch(err=>console.log(err))
    };

    return (
        <div>
            <div></div>
            <hr />
            <input type="text" placeholder='search...' onChange={(e)=>setName(e.target.value)} value={name} className="searchtext" />
            <Button disabled={name === "" ? true : false} onClick={addName}> Add</Button>
        </div>
    )
}

export default Home