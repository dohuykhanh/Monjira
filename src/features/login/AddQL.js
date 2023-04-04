import {React, useState} from "react";
import styles from './DangNhap.module.css'
import images from '../../images/Final_logo.png'
import axios from "axios";
// import images from '../../images/background.jpg'
import { useNavigate } from "react-router-dom";
function AddQL() {
  const navigate = useNavigate();
  const [isToggledd, setisToggledd] =useState(false);
  const [Data, setData] = useState([]);
  const [RowData, SetRowData] = useState([])

  const [ViewShow, SetViewShow] = useState(false)
  const handleViewShow = () => { SetViewShow(true) }
  const hanldeViewClose = () => { SetViewShow(false) }

    //FOr Delete Model
  const [ViewDelete, SetDeleteShow] = useState(false)
  const handleDeleteShow = () => { SetDeleteShow(true) }
  const hanldeDeleteClose = () => { SetDeleteShow(false) }
   //FOr Add New Data Model
   const [ViewPost, SetPostShow] = useState(false)
   const handlePostShow = () => { SetPostShow(true) }
   const hanldePostClose = () => { SetPostShow(false) }
  
  
     //Define here local state that store the form Data
     const [sdt, setpassword] = useState("")
    //  const [VaiTro, setvaitro] = useState("")
     const [ChiNhanh, setchinhanh] = useState("")
     const [hoten, setName] = useState("")
   
     
     const [cn, setcn] = useState("")
    //Id for update record and Delete
    const [id,setId] = useState("");
    const [Delete,setDelete] = useState(false)


    let SLCHINHANH = localStorage.getItem('SLCHINHANH');
    let SLCHINHANH1= SLCHINHANH.toString(10);
    console.log("nhat dang luoi",SLCHINHANH);




  const handleSubmite = () => {
    if(sdt==""  && hoten=="")
    {
      alert("Vui long nhap thong tin")
    }else if(sdt==""  || hoten==""){
      alert("Vui long nhap thong tin")
    }else{
      const url = 'http://localhost:5001/QuanLy'
    
      const Credentials = { sdt,hoten,ChiNhanh }
      axios.post(url, Credentials)
          .then(response => {
              const result = response.data;
              const { status, message, data } = result;
              localStorage.setItem("ChutkQL",  result.data._id)
              if (status !== 'SUCCESS') {
                  alert(message, status)
              }
              else {
                //   alert(message)
                  navigate(`/DangKyChu`);
                //   window.location.reload()
              }
          })
          .catch(err => {
              console.log(err)
          })
          navigate(`/NhanVien`);
    }
    
}
  return (
    <div className={styles.container} >
      {/* <img src={images} alt='images'/> */}
      <form>
        <div className={styles.formInner}>
          <h2>Nhập Thông Tin Quản Lý</h2>

          <div className={styles.formGroup}>
            <label htmlFor="name">Họ Tên</label>
            <input type="text" name="name" id="name"  onChange={(e) => setName(e.target.value)}/>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="name">SDT</label>
            <input type="text" name="name" id="name" onChange={(e) => setpassword(e.target.value)}/>
          </div>
     
          
          <div className={styles.formGroup}>
            <label htmlFor="name">Chi nhánh</label>
            <input type="number" max={SLCHINHANH1} min="1" name="name" id="name" onChange={(e) => setchinhanh(e.target.value)}  />
          </div>

       
          <input onClick={handleSubmite} type="submit" value="Tiếp Tục" />
        </div>

        <div className={styles.images}>
          <img src={images} alt='images' style={{width:"150px",height:"150px" }}/>
          <h2>KHANH NHAT COMPANY</h2>
        </div>
      </form>

    </div>
  );
}

export default AddQL;
