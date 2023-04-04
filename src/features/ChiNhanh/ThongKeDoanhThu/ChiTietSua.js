import React, { useState, useEffect,useRef } from "react";
// import  "./cartcss.css" 
import { Button, Modal} from 'react-bootstrap'
import axios from "axios";
import moment from 'moment';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import "../Viewxemhoadon.css"
import styles from ".././VatTu/VatTu.module.css"


const ChiTietSua = ({ closemodal, Data3,idofHD}) => {
    const [ViewEdit, SetEditShow] = useState(false)
    const handleEditShow = () => { SetEditShow(true) }
    const hanldeEditClose = () => { SetEditShow(false) }
    const [Thaydoisl,setThaydoisl] = useState("");
    const [Tensl,setTensl] = useState("");
    const [Data, setData] = useState([]);



    const handleEdit = (id,SoLuong) =>{
  
        const url = `http://localhost:5001/VatTu/change/${id}`
        
        const Credentials = {SoLuong}
        axios.put(url, Credentials)
            .then(response => {
                const result = response.data;
                const { status, message } = result;
                if (status !== 'SUCCESS') {
                    // alert(message, status)
                }
                else {
                    // alert(message)
                    // window.location.reload()
                }
            })
            .catch(err => {
                console.log(err)
            })
    }




    const handleEditHD = (id,dulieuvao,dulieugia) =>{
  
        const url = `http://localhost:5001/HoaDon/change/${id}`
        let SanPham=dulieuvao;
        let Gia= dulieugia;
        const Credentials = {SanPham, Gia}
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








    const updatedata3 = (tengiatri,giatri) => { 

        Data3.map((sp) => {
            if(sp.TenVatTu==tengiatri){
                sp.SoLuong=giatri;
            }
        })
        console.log("kiem tra data3 sao roi", Data3)
    }




    const Xacthucclick = () => { 

        let tonttienlaihd=0;
        Data3.map((sp) => {
            let slsau=0;
            slsau = -sp.SoLuong;
            tonttienlaihd = tonttienlaihd + (sp.SoLuong*sp.Gia)
            handleEdit(sp._id,slsau);
        })
        let arr =[];
        arr.push(Data3)
        handleEditHD(idofHD,arr,tonttienlaihd);
        
        closemodal(false)
    }




    var Tenchinhanh= localStorage.getItem("TenChiNhanh");

    const Getvattu = async () => {

        const url = `http://localhost:5001/VatTu/c/${Tenchinhanh}`
        axios.get(url)
                  .then(response => {
                      const result = response.data;
                      const { status, message, data } = result;
                      if (status !== 'SUCCESS') {
                          alert(message, status)
                      }
                      else {
                          setData(data)

    
   
    
    
                      }
                  })
                  .catch(err => {
                      console.log(err)
                  })
                }




                useEffect(() => {
                    Getvattu();
                 
                }, [])





  return (
    
   <div style={{width:"800px", height:"500px",backgroundColor:"#e5e5e5",position:"absolute",bottom:"90px",left:"250px",zIndex:"1", borderRadius:"5px"}} >
          <div className={styles.BangVatTu}>
          <div className='row'>
                <div className='table-responsive' style={{position:"relative",top:"50px",right:"16px"}} >
                    <table className='table table-striped table-hover table-bordered' style={{border:"solid 1px"}}>
                        <thead>
                            <tr style={{backgroundColor:"#ffff94"}}>
                                <th>Tên vật tư</th>
                                <th>số lượng</th>
                                <th>Giá</th>
                                <th></th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {Data3.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.TenVatTu}</td>
                                    <td>{item.SoLuong}</td>
                                   
                                    <td>{item.Gia}</td>
                                    <td style={{ minWidth: 190 }}>
                                      <Button size='sm' variant='primary' onClick={() => {handleEditShow() ; setTensl(item.TenVatTu)}}>Edit</Button>
                                       
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        <button onClick={() => closemodal(false)} style={{position:"relative",top:"190px",float:"right",right:"200px",border: 'none',color: "white",padding: "10px 40px",display: 'inline-block',backgroundColor: '#4CAF50',borderRadius:"5px",fontSize:"16px"}}>Close</button>
        <button onClick={() =>  Xacthucclick()} style={{position:"relative",top:"190px",float:"right",left:"85px",border: 'none',color: "white",padding: "10px 40px",display: 'inline-block',backgroundColor: '#4CAF50',borderRadius:"5px",fontSize:"16px"}}>Save</button>


       


        
    {/* Modal for Edit employee record */}
    <div className='model-box-view'>
                <Modal
                    show={ViewEdit}
                    onHide={hanldeEditClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Sửa Hóa Đơn</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <label>Số Lượng Sửa</label>
                                {/* onChange={(e) => settenvattu(e.target.value)} */}
                                <input type="text" className='form-control' onChange={(e) => setThaydoisl(e.target.value)} placeholder="Nhập số lượng" />
                            </div>
                           
                            
                           
                           
                            <Button type='submit' className='btn btn-warning mt-4' onClick={() => {updatedata3(Tensl,Thaydoisl)}} >Sửa hóa đơn</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldeEditClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>







   </div>



  );
};

export default ChiTietSua;



