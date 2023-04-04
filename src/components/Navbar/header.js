import React, {useEffect, useState} from 'react';
import { Button, Modal} from 'react-bootstrap'
import styles from "./navbar.module.css"
import images from "../../images/Final_logo.png";
import {useNavigate} from 'react-router-dom';
import Thongbao from '../../features/Thongbao/Thongbao'
import axios from "axios";
import ViewPhieuDKChuyen from './ViewPhieuDKChuyen';
import Viewxchaomung from "../../features/login/Viewchaomung";
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

import {Route, Link, Routes, useLocation} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
const header = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [sidebar, setSidebar] = useState(false);
 // eslint-disable-next-line react-hooks/rules-of-hooks
  const showSidebar = () => setSidebar(!sidebar);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show, setshow]=useState(true);
   // eslint-disable-next-line react-hooks/rules-of-hooks
  const [cart, setCart]=useState([]);
   // eslint-disable-next-line react-hooks/rules-of-hooks
  const [ViewPost, SetPostShow] = useState(false)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [ViewPosttt, SetPostShowww] = useState(false)
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const [isToggledd, setisToggledd] =useState(false);
 
    // eslint-disable-next-line react-hooks/rules-of-hooks
   const [Data, setData] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [Data1, setData1] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
   const [RowData, SetRowData] = useState([])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [DK, SetDK] = useState(false)
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const [id,setId] = useState("");
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const [idd,setIdd] = useState("");
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const [cn, setcn] = useState("")
    // eslint-disable-next-line react-hooks/rules-of-hooks
 const handlePostShow = () => { SetPostShow(true) }
 // eslint-disable-next-line react-hooks/rules-of-hooks
 const handleShow = () => { SetDK(false) }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const handleShowT = () => { SetDK(true) }
 // eslint-disable-next-line react-hooks/rules-of-hooks
 const handlePostShowww = () => { SetPostShowww(true) }
  // eslint-disable-next-line react-hooks/rules-of-hooks
 const hanldePostClose = () => { SetPostShow(false) }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const phanquyen = localStorage.getItem("Vaitro")
  const Dieukien = localStorage.getItem("DieuKien")
  console.log("phanquya", phanquyen);
  var b=JSON.stringify(phanquyen);
  var k ="QuanLy"
  var Xep=false;
  var kho=false;
  
  if(phanquyen==="Chu"){
    Xep=true;
  }
  if(phanquyen==="QuanLyKho"){
    kho=true;
  }
  // if(phanquyen==="QuanLy"){
  //   filtersidebar= SidebarData1
  // }else{
  //   filtersidebar= SidebarData
  // }
  // if(phanquyen==="Chu"){
  //   filtersidebar= SidebarData
  // }
  // var setDK=(item) =>{
  //   DK=item;
  // }
  console.log("dieu kien show chuc mung ", Dieukien);
  // if(Dieukien=="true"){
  //   SetDK(true);
    
  // }
  const Rerun =()=>{
    if(Dieukien=="true"){
      SetDK(true);
      
    }
  }
//   DK=false;
let HDblock = false;
let HDblock1 = true;
let headerblock = window.location.href
let HDblock2=localStorage.getItem("Vaitro")

console.log('current URL KHANH', headerblock);
if(headerblock=="http://localhost:3000/ChiNhanh"||headerblock=="http://localhost:3000/ThongKe"||headerblock=="http://localhost:3000/NhanVien"|| HDblock2==="NhanVien"|| HDblock2==="QuanLyKho"){
  HDblock=false;
  HDblock1=true;
}else{
  HDblock= true;
  HDblock1= false;
}

// if(headerblock=="http://localhost:3000/ThongKe"){
//   HDblock=false;
//   HDblock1=true;
// }else{
//   HDblock= true;
//   HDblock1= false;
// }

// if(headerblock=="http://localhost:3000/NhanVien"){
//   HDblock=false;
//   HDblock1=true;
// }else{
//   HDblock= true;
//   HDblock1= false;
// }



  const handleDelete = () =>{
    console.log("idd",idd)
    const url = `http://localhost:5001/ThongBao/${idd}`
    axios.delete(url)
        .then(response => {
            const result = response.data;
            const { status, message } = result;
            if (status !== 'SUCCESS') {
                alert(message, status)
            }
            else {
                alert(message)
                window.location.reload()
            }
        })
        .catch(err => {
            console.log(err)
        })
}

  const handleMove = () =>{
    console.log("id",id)
    
        const url = `http://localhost:5001/Nhanvien/${id}`
        var ChiNhanh = cn
        console.log("Chinhanh",ChiNhanh)
        const Credentials = {ChiNhanh }
        axios.put(url, Credentials)
            .then(response => {
                const result = response.data;
                const { status, message } = result;
                handleDelete();
                if (status !== 'SUCCESS') {
                    alert(message, status)
                    
                }
                else {
                    alert(message)
                    window.location.reload()
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    const vaokho=() =>{
        var bientam=0;
        localStorage.setItem("TenChiNhanh",bientam);
        navigate(`/VatTu`)
    }
   // eslint-disable-next-line react-hooks/rules-of-hooks
  const GetThongBao = async () => {

    const url = `http://localhost:5001/ThongBao`
    axios.get(url)
              .then(response => {
                  const result = response.data;
                  const { status, message, data } = result;
                  if (status !== 'SUCCESS') {
                      alert(message, status)
                  }
                  else {
                      setData(data)
                      console.log(data)
                  }
              })
              .catch(err => {
                  console.log(err)
              })
            }

     // eslint-disable-next-line react-hooks/rules-of-hooks
  const GetThongBaoDK = async () => {

    const url = `http://localhost:5001/PhieuDKChuyen`
    axios.get(url)
              .then(response => {
                  const result = response.data;
                  const { status, message, data } = result;
                  if (status !== 'SUCCESS') {
                      alert(message, status)
                  }
                  else {
                      setData1(data)
                      console.log(data)
                  }
              })
              .catch(err => {
                  console.log(err)
              })
            }

 // eslint-disable-next-line react-hooks/rules-of-hooks
            useEffect(() => {
              GetThongBao();
              GetThongBaoDK();
              Rerun();
              
          }, [])



          
          
          
 // eslint-disable-next-line react-hooks/rules-of-hooks
  return (
    <>
       <div className='navbarngang'> 
 
      <header>
        <nav 
        // ref={navRef}
        >
         { Xep && <p onClick={() => {navigate(`/ChiNhanh`)}}>Chi Nhánh</p>}
         { Xep &&<p onClick={() => {vaokho()}}> Kho </p>}
          { Xep &&<p onClick={() => {navigate(`/ThongKe`)}}> Thống kê</p>}
          { Xep &&<p onClick={() => {navigate(`/NhanVien`)}}> Tài khoản</p>}
          { Xep &&<p onClick={() => {navigate(`/LuongQuanLy`)}}> Lương</p>}
          { kho && <p onClick={() => {navigate(`/ChiNhanh`)}}>Chi Nhánh</p>}
          { kho &&<p onClick={() => {vaokho()}}> Kho </p>}
        </nav>

        { Xep &&
        <div className="cart" onClick={() => { handlePostShow() }} style={{position:"relative",left:"410px"}}>
          <span >
       
       <i  className="fa fa-bell"></i>
          </span>
          <span>{Data.length}</span>
        </div>
}

{ kho &&
        <div className="cart" onClick={() => { handlePostShowww() }} style={{position:"relative",left:"520px"}}>
          <span>
       
       <i className="fa fa-bell"></i>
          </span>
          <span>{Data1.length}</span>
        </div>
}

      </header>
     



           {/* Modal for submit data to database */}
           <div className='model-box-view'>
                <Modal
                    show={ViewPost}
                    onHide={hanldePostClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Thoong Bao</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div >
                    <div className='row'>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>Yêu Cầu</th>
                                <th>HỌ TÊN</th>
                                {/* <th>ngày sản xuất</th>
                                <th>ngày hết hạn</th> */}
                                <th>SDT</th>
                                <th>Chi Nhánh</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data.map((item) =>
                                <tr key={item._id}>
                                  <td>{item.YeuCau}</td>
                                <td>{item.hoten}</td>
                                <td>{item.sdt}</td>
                                <td>{item.ChiNhanh}</td>
                                <td>  <Button type='submit' className='btn btn-warning mt-4' onClick={() =>{handleMove(setId(item.idtb),setcn(item.ChiNhanh),setIdd(item._id))}}>Move Employee</Button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                
            </div>
            </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldePostClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
      {ViewPosttt && <ViewPhieuDKChuyen closemodal={SetPostShowww}/> }
     
     

{DK && <Viewxchaomung closemodal={SetDK}/>}

      <div>

</div>
    
        </div>
    <IconContext.Provider value={{ color: '#fff' }}>
      
          <div className='navbar'>
          
            <Link to='#' className='menu-bars'>
            
              {HDblock && <img src={images} alt='images' style={{width:"80px",height:"65px" }} onClick={showSidebar}/>}
              {HDblock1 && <img src={images} alt='images' style={{width:"80px",height:"65px" }} />}
            </Link>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              { SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}


              
            </ul>
          </nav>
        </IconContext.Provider>
    </>

  );
}

export default header;
