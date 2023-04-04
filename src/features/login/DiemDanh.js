import React, { useState } from "react";
import styles from './DangNhap.module.css'
import images from '../../images/Final_logo.png'
// import images from '../../images/background.jpg'
import { useNavigate } from "react-router-dom";
import Viewxchaomung from "./Viewchaomung";
import axios from "axios";
function DiemDanh() {
  const [Name, setName] = useState("");
  const [Data, setData] = useState([]);
  const [Password, setPassword] =useState("");
  const navigate = useNavigate();
  const [isToggledd, setisToggledd]=useState(false);
  // const [Tontai, setTontai]=useState(false);
  var date = new Date().getDate(); //To get the Current Date
  var month = new Date().getMonth() + 1; //To get the Current Month
  var year = new Date().getFullYear(); //To get the Current Year
  var hours = new Date().getHours(); //To get the Current Hours
  var min = new Date().getMinutes(); //To get the Current Minutes
  var Ditre = 0;
  
  console.log("Dang nhap nhat dep trai", hours)
  console.log("Dang nhap nhat dep trai2",year)
  console.log("Dang nhap nhat dep trai3", month)
  console.log("Dang nhap nhat dep trai4", date)
  var Tontai =false;
  


  const GetPhieuChamCong = async (phut,gio,Idchu,id, thang ,nam) => {

    const url = `http://localhost:5001/PhieuChamCong/pck/${id}/${thang}/${nam}`
    axios.get(url)
              .then(response => {
                  const result = response.data;
                  const { status, message, data } = result;
                  if (status !== 'SUCCESS') {
                      alert(message, status)
                  }
                  else {
                      setData(data)
                      console.log("Dang nhap kiem tra data", data)
                      console.log("Dang nhap kiem tra chieu dai ", data.length)
                     
                    
                      if(data.length==0) {
                        Tontai=true
                        console.log("yeah 9 diem ")
                        let Thang= thang;
                        let Nam =nam;
                        console.log("Dang nhap xem gio", gio)
                        if(gio ==7){
                          let SoNgayLam=1;
                          let SoNgayTre = 0;
                          handleSubmite(Idchu, SoNgayLam , SoNgayTre, Thang, Nam)
                        }
                        if(phut > 0){
                          let SoNgayLam=1;
                          let SoNgayTre = 1;
                          handleSubmite(Idchu, SoNgayLam , SoNgayTre, Thang, Nam)
                        }
                        
                        
                        
                      }else{
                        
                        if(gio ==7){
                          let a = data.SoNayLam +1;
                          let b = data.SoNgayTre;
                          handleEdit(a,b,id)

                        }
                        if( phut >0){
                          
                          let a = data[0].SoNgayLam +1;
                          let b = data[0].SoNgayTre +1;
                          console.log("trang dang nhap kiem tra so ngay lam 1 ", data[0].SoNgayLam);
                          handleEdit(a,b,id)

                        }

                      }
                      
                      // console.log("Dang nhap kiem tra data", data)






                  }
              })
              .catch(err => {
                  console.log(err)
              })
            }


  const handleSubmite = (Idchu, SoNgayLam , SoNgayTre, Thang, Nam) => {
    const url = 'http://localhost:5001/PhieuChamCong'
    
    const Credentials = { Idchu, SoNgayLam , SoNgayTre, Thang, Nam }
    axios.post(url, Credentials)
        .then(response => {
            const result = response.data;
            const { status, message, data } = result;
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
  

const handleEdit = ( SoNgayLam , SoNgayTre, okii ) =>{
  const url = `http://localhost:5001/PhieuChamCong/pckk/${okii}`
  console.log("trang dang nhap kiem tra so ngay lam ", SoNgayLam);

  
  const Credentials = {  SoNgayLam , SoNgayTre }
  axios.put(url, Credentials)
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

  //  const SubmitChamCong = ()=>{
  //   if (hours == 7){

  //   }

  //  }
  const onchangename= (event) => {
    setName(event.target.value);
  }
  const onchangepassword= (event) => {
    setPassword(event.target.value);
  }
  const submitform= async (e)=>{
    e.preventDefault();
    console.log("Name", Name);
    console.log("Password", Password);
    const data={
      Name,
      Password,
    };
    const url = "http://localhost:5001/Login";
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    response.json().then((val)=>{
      console.log("giatri",val);
      console.log("ten",val.Name);
      console.log("pass",val.Password);
      console.log("vaitro",val.VaiTro);
      if(val.VaiTro==="Chu"){
        navigate(`/DangNhap`);
      }
      if(val.VaiTro==="QuanLyKho"){
        navigate(`/DangNhap`);
      }
      if(val.VaiTro==="NhanVien"){
        // setisToggledd(true);
        let id= val.Idchu
        let thang= String(month);
        let nam= String(year);
        let gio=hours;
        let phut =min;
        let Idchu=val.Idchu;
        console.log("Dang nhap khanh dep trai3", month)
        console.log("Dang nhap nkhanh dep trai4", year)


        GetPhieuChamCong(phut,gio,Idchu,id, thang , nam);
        console.log("Dang nhap nkhanh dep trai5", Tontai)
        if(Tontai==true){
          console.log("yeaj 10 diem")

        }
        // localStorage.setItem("DieuKien", true);
        navigate(`/DangNhap`);
      }
      if(val.VaiTro==="QuanLy"){


        let id= val.Idchu
        let thang= String(month);
        let nam= String(year);
        let gio=hours;
        let phut =min;
        let Idchu=val.Idchu;
        console.log("Dang nhap khanh dep trai3", month)
        console.log("Dang nhap nkhanh dep trai4", year)


        GetPhieuChamCong(phut,gio,Idchu,id, thang , nam);
        console.log("Dang nhap nkhanh dep trai5", Tontai)
        if(Tontai==true){
          console.log("yeaj 10 diem")

        }
        navigate(`/DangNhap`);
      }
      localStorage.setItem("Vaitro", val.VaiTro);
      localStorage.setItem("TenChiNhanh", val.ChiNhanh);
      localStorage.setItem("NguoiNhanTin", val.Name);
      localStorage.setItem("Idchu", val.Idchu);
      console.log("Idchu",val.Idchu);
      // localStorage.setItem("TenChiNhanhh", val.ChiNhanhh)
    })
    console.log("danhap", response.json());
   
      
    
  }
  return (
    <div className={styles.container} >
      {/* <img src={images} alt='images'/> */}
      <form>
        <div className={styles.formInner}>
          <h2>Điểm Danh</h2>

          <div className={styles.formGroup}>
            <label htmlFor="name">Tên đăng nhập</label>
            <input type="text" name="name" id="name" onChange={onchangename}/>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Mật khẩu</label>
            <input type="password" name="password" id="password" onChange={onchangepassword}/>
          </div>
          <input onClick={submitform} type="submit" value="Xác Nhận " />
          {/* <a href="http://127.0.0.1:5500/DACN-main/src/features/login/khanh.html">Đăng nhập bằng FACEID</a> */}
        </div>

        <div className={styles.images}>
          <img src={images} alt='images' style={{width:"150px",height:"150px" }}/>
          <h2>KHANH NHAT COMPANY</h2>
        </div>
      </form>


{/* <div>
  {isToggledd && <Viewxchaomung  closemodal={setisToggledd}/>}
</div> */}
    </div>
  );
}

export default DiemDanh;
