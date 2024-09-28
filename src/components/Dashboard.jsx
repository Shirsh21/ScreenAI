import { useContext, useEffect, useRef } from 'react';
import './Dashboard.css';
import InterviewCard from './InterviewCard';
import Navbar from './Navbar';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
// import {mycontext} from './App.js' 
const Dashboard = () => {


const selectgenre = useRef();

// const {choice, setchoice} = useContext(mycontext);

const navigate = useNavigate();
    // const cookies = new Cookies();

    // const verifyuser = async () =>{

    //     const token = cookies.get("token");
    //     const baseurl = "  ";
        
    //     try{
    //         const response = await axios.get(baseurl,{
    //             headers:{
    //                 'Authorization': `Bearer ${token}`
    //             }
    //         })

    //         console.log(response.data)

    //     }catch(error){
    //         console.log("Error ",error);
    //     }
    // }
    

    // useEffect(()=>{
    //     verifyuser();
    // })




  const interviews = [
    { title: 'Full Stack Frontend Developer', experience: '7 Years', date: '05-06-2024' },
    { title: 'Backend Java Developer', experience: '8 Years', date: '05-06-2024' },
    { title: 'Full Stack Angular Developer', experience: '3 Years', date: '04-06-2024' },
    { title: 'Full Stack Developer', experience: '4 Years', date: '03-06-2024' },
  ];

  return (
    <>
    <div className="container" ref={selectgenre}>
      <h1 style={{display:'inline-block'}}>Genre</h1> <button style={{display:"inline-block", marginLeft:'50%', padding:"10px"}} className='goback' onClick={() => {

        // gsap.from(selectgenre.current,{
        //     y:0,
        //     duration:0.8,
        // })
        gsap.to(selectgenre.current,{
            y: 100,
            opacity:0,
            duration: 0.9,
        })
      }}>Go back</button>
      <div className="grid-container">
        <div className="grid-item">Fullstack Web Development</div>
        <div className="grid-item">AI & ML</div>
        <div className="grid-item">App Development</div>
        <div className="grid-item">Cloud Computing</div>
        <div className="grid-item">Data Science</div>
          
      </div>
    </div>
    <Navbar></Navbar>
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Create and Start your AI Mockup Interview</p>
      <div className="add-new">

        <button onClick={() =>{ 
            gsap.from(selectgenre.current, {
                y: 100,
                opacity:0,
                duration: 0.9,
            })
            gsap.to(selectgenre.current,{
                display:'block',
                position: 'absolute',
                duration: 0.8,
            });
        }}>
            
            Give an interview
        </button>

      </div>

      <h3>Previous Mock Interview</h3>
      <div className="interviews-list">
        {interviews.map((interview, index) => (
          <InterviewCard key={index} interview={interview} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Dashboard;
