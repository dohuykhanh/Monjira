import React, { useState,useEffect } from 'react';
import { Button, Modal} from 'react-bootstrap'
import axios from "axios";
import styles from "./TaiKhoan.module.css"
import DataTable from "react-data-table-component"
import {useNavigate} from 'react-router-dom';
function NhanVien() {
  const navigate = useNavigate();
  const Tao = ()=>{
    navigate("/DangNhap")
  }
  const [loading, setLoading] = useState(false)
  const [isToggledd, setisToggledd] =useState(false);
  const [Data, setData] = useState([]);
  const [RowData, SetRowData] = useState([])
  const [TimKiem, setTimKiem] = useState("");
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
     const [Password, setpassword] = useState("")
     const [Vaitro, setvaitro] = useState("")
     const [ChiNhanh, setchinhanh] = useState("")
     const [Name, setName] = useState("")
     
     const [cn, setcn] = useState("")
    //Id for update record and Delete
    const [id,setId] = useState("");
    const [Delete,setDelete] = useState(false)


  const Gettaikhoan = async () => {

    const url = `http://localhost:5001/TaiKhoan/`
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

            const handleDelete = () =>{
              const url = `http://localhost:5001/TaiKhoan/${id}`
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

          const columns = [
            {
                name: <div style={{fontSize:"18px"}}>User</div>,
              selector: (row) => row.Name,
            },
            {
              name:<div style={{fontSize:"18px"}}>Password</div>,
              selector: (row) => row.Password,
            },
            {
                name:<div style={{fontSize:"18px"}}>Vai trò</div>,
                selector: (row) => row.VaiTro,
              
            },
            {
                name:<div style={{fontSize:"18px"}}>Chi Nhánh</div>,
                selector: (row) => row.ChiNhanh,
              
            },
        

          ]
          
          function search(rows){
            // console.log("sad", rows.NgayBan)
            console.log("sad1", TimKiem)
            return rows.filter(row => row.Name.toLowerCase().indexOf(TimKiem)> -1)
            
          }

          useEffect(() => {
            Gettaikhoan();
        }, [])   

      
            

  return (
    
    <div className='container'>
      
      <div className='row'>
                <div className='col'>
                    <Button variant='primary' style={{position:"relative" , top:"14px"}} onClick={() => {navigate("/AddQL")}}><i className='fa fa-plu'></i>
                        Thêm Quản Lý
                    </Button>
                    <div className='col'></div>
                    <div className='col'> <input  style={{border:"1px solid",borderRadius: '5px!important',float:"right"}} placeholder="Tìm Kiếm" value={TimKiem} onChange={(a)=> setTimKiem(a.target.value)} ></input></div>
                </div>
            </div>
            <div className={styles.ThongKeTaiKhoan}>
           
               
                    {/* <table className='table table-striped table-hover table-bordered' style={{border:"solid 1px"}}> */}
                        {/* <thead>
                            <tr style={{backgroundColor:"#ffff94"}}>
                                <th>User</th>
                                <th>Password</th>
                                <th>Vai trò</th>
                                <th> Chi nhánh </th>
                            </tr>
                        </thead> */}
                        
                        <DataTable
                             
                             columns={columns}
                            data={search(Data)}
                            progressPending={loading}
                            highlightOnHover
                            pagination
                            />
                            
                        {/* <tbody>
                            {Data.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.Name}</td>
                                    <td>{item.Password}</td>
                                    <td>{item.VaiTro}</td>
                                    <td>{item.ChiNhanh}</td>
                                    <td style={{ minWidth: 190 }}>
                                        <Button size='sm' variant='danger' onClick={()=>{handleDelete(setId(item._id))}}>Delete</Button>|
                                    </td>
                                </tr>
                            )}
                        </tbody> */}
                    {/* </table> */}
                
             
            </div>   
      
    </div>
  );
}

export default NhanVien;