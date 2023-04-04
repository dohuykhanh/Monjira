import React, { useState, useEffect,useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Button, Modal} from 'react-bootstrap'
import { Pie } from 'react-chartjs-2';
import "../Viewxemhoadon.css"
import "../../ThongKe/BanChay.module.css"
import axios from "axios";

const ThongkeSP=({closemodal,datathongkkesp}) =>{
  // var Data=[];
  // const [DataSLvattu, setSLvattu] = useState([]); 
  // const [Data4, setData4] = useState([]); 
  const [ViewEdit, SetEditShow] = useState(true)
  const hanldeEditClose = () => { SetEditShow(false)};
  const [Data, setData] = useState([]); 
  const handleclick = (item) => {
  
    if (Data.indexOf(item) === -1) {
        Data.push(item);
    }else{ return; }
    
   
    // setCart([...cart, item])
  
  };
  var Tenchinhanh= localStorage.getItem("TenChiNhanh");

  const componentRef = useRef();
  



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
                  console.log("trang thong ke san pham 1", data)

                  data.map((item)=>{
                    item.SoLuong=0;
                    datathongkkesp.map((khanh) =>{
                      let a=khanh.SanPham[0]
                      for(let i=0;i< a.length;i++){
                       
                        if(item.TenVatTu==a[i].TenVatTu){
                          item.SoLuong= item.SoLuong+ a[i].SoLuong;
                        }
                      }
                      // console.log("tran dan tran1",item.TenVatTu);
                    })
      
      })
                  setData(data)

// data.map((item)=>{
 
// let it={
//   _id: item._id,
//   TenVatTu: item.TenVatTu,
//   Soluong: 0
  
// }
// handleclick(it);
// })


                }
            })
            .catch(err => {
                console.log(err)
            })
          }


          
          const setvekhong =() =>{
            Data.map((item)=>{
              console.log("sao laijk khong ra", item.SoLuong)
item.SoLuong=0
})
           
           }


  const [TongtienSLsp,setTongtienSLsp] = useState("");
//het
  console.log("trang thong ke san pham", Data)
  const ThongkeSPbandc =() =>{
    Getvattu();
    setvekhong()
    let tonsl=0;
   
    datathongkkesp.map((item) =>{
      let a=item.SanPham[0]
      for(let i=0;i< a.length;i++){
          console.log("tran dan tran1",a[i].SoLuong);
        tonsl=tonsl+a[i].SoLuong;
      }
      // console.log("tran dan tran1",item.TenVatTu);
    })
    console.log("tran dan tran tong so luong",tonsl);
    setTongtienSLsp(tonsl)
   
   }




            useEffect(() => {
             
              ThongkeSPbandc();
      
          }, [])    
          
  
  return (
    
    <div >
          
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
                                Thống Kê Sản Phẩm
                              </h3>
                              {/* <span style={{let:"10px",position:"relative",fontSize:"18px"}}><b>Ngày bán: </b>{moment(NgayNguoibanhd).format('DD-MM-YYYY')}</span>
                        <span style={{position:"relative",right:"-50px",fontSize:"18px"}}><b>Giờ bán: </b>{hours +" giờ "+min+" phút " }</span> */}
                        <br/>
                        {/* <span style={{fontSize:"18px"}}><b>Thu ngân: </b>{TenNguoiBan}</span>     */}
                        <table className='table table-striped table-hover table-bordered'>
                       
                            <thead>
                                <tr>
                                    <th>Tên vật tư</th>
                                    <th>số lượng bán được</th>
                                    {/* <th>ngày sản xuất</th>
                                    <th>ngày hết hạn</th> */}
                                    <th>Giá</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Data.map((item) =>
                                    <tr key={item._id}>
                                        <td>{item.TenVatTu}</td>
                                        <td>{item.SoLuong}</td>
                                        <td>{item.Gia}</td>
                                   
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <span style={{display:"flex",justifyContent:"flex-end",fontSize:"18px"}}><b>Tổng SL bán được:</b>{TongtienSLsp}</span>
                    <br/>
                    <br/>
                    {/* <span style={{display:"flex",justifyContent:"center",fontSize:"16px"}}><b>Quí Khách vui lòng không đổi trả</b> </span> */}
                    <br/> 
                    {/* <span style={{display:"flex",justifyContent:"center",fontSize:"16px"}}> <b>khi ra khỏi cửa hàng</b></span> */}
                </div>
                </div>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant='primary'  onClick={() => closemodal(false)}>Close</Button>
                            {/* <Button variant='primary'  onClick={handlePrint}>PRINT!!!</Button> */}
                        </Modal.Footer>
                    </Modal>
                </div>
        </article>
    </div>
    
  );
}

export default ThongkeSP;
