import React, { useState, useEffect,useRef } from "react";
// import  "./cartcss.css" 
import { Button, Modal} from 'react-bootstrap'
import axios from "axios";
import moment from 'moment';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import "../Viewxemhoadon.css"




const ChiTietSanPham = ({ ThongKeDoanhThu,closemodal,Data3,MaNguoibanhd,NgayNguoibanhd,TienNguoibanhd}) => {
    const [TenNguoiBan,setTenNguoiBan] = useState("");
    const [ViewEdit, SetEditShow] = useState(true)
    const hanldeEditClose = () => { SetEditShow(false);
    
    }



    const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content:()=>componentRef.current,
    documentTitle:'emp-data',
    onAfterPrint:()=>alert('print success')
  });
    var Tenchinhanh= localStorage.getItem("TenChiNhanh");
    const GetTK = async () => {

        const url = `http://localhost:5001/Nhanvien/c/${Tenchinhanh}`
        axios.get(url)
                  .then(response => {
                      const result = response.data;
                      const { status, message, data } = result;
                      if (status !== 'SUCCESS') {
                          alert(message, status)
                      }
                      else {
                  data.map((item)=>{
                    console.log("trang chi tiet ten nguoi ban1",MaNguoibanhd);
                    console.log("trang chi tiet ten nguoi ban2",item._id);
                          if(item._id==MaNguoibanhd){
                            setTenNguoiBan(item.hoten)
                            console.log("trang chi tiet ten nguoi ban",item.hoten);
                          }
            
            })
                      
      

      
      
                      }
                  })
                  .catch(err => {
                      console.log(err)
                  })
                }


                useEffect(() => {
             
                    GetTK();
            
                }, [])    

                var hours = moment(NgayNguoibanhd).hours(); //To get the Current Hours
                var min = moment(NgayNguoibanhd).minute(); //To get the Current Minutes       
                console.log("buon nhat qua",moment(NgayNguoibanhd).hours() )
                const formatter = new Intl.NumberFormat('vn',{
                    style: 'currency',
                    currency:'VND',
                   
                    useGrouping: true,
                    notation: 'standard'
                  })
  return (
   
<div >
    <div >
       
{/* <Button size='sm' variant='primary' onClick={handleclick}>Xem</Button>| */}
<article>
    

      
      
        
    



<div className='model-box-view'>
                <Modal
                    show={ViewEdit}
                    onHide={hanldeEditClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                       
                          </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>                
                    <div ref={componentRef} style={{width:'100%',height:'100%'}} >
                    <div className='row'>
                <div className='table-responsive'>
                <h3 style={{display:"flex",justifyContent:"center"}}>
                            Hoá Đơn
                          </h3>
                          <span style={{let:"10px",position:"relative",fontSize:"18px"}}><b>Ngày bán: </b>{moment(NgayNguoibanhd).format('DD-MM-YYYY')}</span>
                    <span style={{position:"relative",right:"-50px",fontSize:"18px"}}><b>Giờ bán: </b>{hours +" giờ "+min+" phút " }</span>
                    <br/>
                    <span style={{fontSize:"18px"}}><b>Thu ngân: </b>{TenNguoiBan}</span>    
                    <table className='table table-striped table-hover table-bordered'>
                   
                        <thead>
                            <tr>
                                <th>Tên vật tư</th>
                                <th>số lượng</th>
                                {/* <th>ngày sản xuất</th>
                                <th>ngày hết hạn</th> */}
                                <th>Giá</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data3.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.TenVatTu}</td>
                                    <td>{item.SoLuong}</td>
                                    <td>{item.Gia}</td>
                               
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <span style={{display:"flex",justifyContent:"flex-end",fontSize:"18px"}}><b>Tổng tiền:</b>{formatter.format(TienNguoibanhd)}</span>
                <br/>
                <br/>
                <span style={{display:"flex",justifyContent:"center",fontSize:"16px"}}><b>Quí Khách vui lòng không đổi trả</b> </span>
                <br/> 
                <span style={{display:"flex",justifyContent:"center",fontSize:"16px"}}> <b>khi ra khỏi cửa hàng</b></span>
            </div>
            </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant='primary'  onClick={() => closemodal(false)}>Close</Button>
                        <Button variant='primary'  onClick={handlePrint}>PRINT!!!</Button>
                    </Modal.Footer>
                </Modal>
            </div>
    </article>
           
            
            {/* <div className={"nut"}>
            <button  onClick={() => closemodal(false)}> X </button>
            </div>  */}
            
            </div>





           
</div>



  );
};

export default ChiTietSanPham;



