import React, { useState, useEffect,useRef } from "react";
// import  "./cartcss.css" 
import { Button, Modal} from 'react-bootstrap'
import axios from "axios";
import moment from 'moment';
import styles from "./viewchaomung.module.css"
import ReactToPrint, { useReactToPrint } from 'react-to-print';
const logo  = require('./1.png');

// import "./Viewxemhoadon.css"



const Viewxchaomung = ({ closemodal}) => {


            
  return (
   
<div className={styles.chaomung} >
   
   <img src={logo} style={{position:"relative",bottom:"220px",left:"20px" }} />
            <div className={"nut"} style={{position:"relative", bottom:"250px"}}  >
            <button  onClick={() => closemodal(false)}> X </button>
          
            </div> 
            
            </div>
            




  );
};

export default Viewxchaomung;



