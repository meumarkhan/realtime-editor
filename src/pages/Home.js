import { useState } from 'react'
import React from 'react'
import {v4 as uuidv4} from 'uuid'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate();
    const [roomId,setRommId]=useState("");
    const [username,setUsername]=useState("");
    const createNewRoom=(e)=>{
        e.preventDefault();
        const id = uuidv4();
        setRommId(id);
        toast.success('Created a new room');
        //console.log(id);
    }
    const joinRoom=()=>{
        if(!roomId || !username){
            toast.error('Room ID and username are required');
            return;
        }
        // Redirect
        navigate(`/editor/${roomId}`,{
            state:{
                username,
            },
        });
    }
    const handleInputEnter=(e)=>{
        if(e.code==='Enter'){
            joinRoom();
        }
    }
  return <div className="homePageWrapper">
    <div className="formWrapper">
        <img src="/code-sync.png" alt="code-sync-logo" />
        <h4 className="mainLabel">Paste Invitation Room ID</h4>
        <div className="inputGroup">
            <input type="text" className="inputBox" placeholder='ROOM ID' value = {roomId}
            onChange={(e)=>setRommId(e.target.value)} onKeyUp={handleInputEnter}/>
            <input type="text" className="inputBox" placeholder='USERNAME' value = {username}
            onChange={(e)=>setUsername(e.target.value)} onKeyUp={handleInputEnter}/>
            <button className='btn joinBtn' onClick={joinRoom}>Join Button</button>
            <span className="createInfo">
                If you don't have an invite then create &nbsp;
                <a onClick={createNewRoom} href="" className="createNewBtn">new room</a>
            </span>
        </div>
    </div>
    <footer>
        <h4>Build with heart by  <a href="https://github.com/meumarkhan">Umar Khan</a></h4>
    </footer>
  </div>
}

export default Home
