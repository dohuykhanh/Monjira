import React, { useState, useEffect,useRef } from "react";
// import  "./cartcss.css" 
import { Button, Modal} from 'react-bootstrap'
import axios from "axios";
import moment from 'moment';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
// import "./Viewxemhoadon.css"



const Chitietlichsuchuyen = ({closemodal, Maid, Data}) => {
    const [Data1, setData1] = useState([]);
    const [Data2, setData2] = useState([]);
    console.log("trang chi tiet lich su chuyen 1", Maid);
    console.log("trang chi tiet lich su chuyen 2", Data);
   
    // const Findchitiet = () =>{
    //     // console.log("ko Vao dc cai if trang chi teit licj su chuyen",Data._id );
    //     for(let i=0; i<Data.length; i++){
    //         if(Data[i]._id==Maid){
    //             console.log("Vao dc cai if trang chi teit licj su chuyen");
    //             console.log("cai mang Vao dc cai if trang chi teit licj su chuyen",Data[i].SanPham);
    //             let a=Data[i].SanPham;
    //             for(var j=0;j<a.length;j++){
    //                 let b=a[j];
    //                 b.map((item) => {
    //                     let product={
    //                         TenVatTu: item.TenVatTu,
    //                         _id: item._id,
    //                         SoLuong: item.SoLuong,
    //                         Gia: item.Gia

    //                     }
    //                     Data1.push(product);
    //                     console.log("Ten vt",item._id);
    //                 })
    //             }

    //         }


    //     }





       
    // }



    console.log("chi teite lich su chuyen da xong ",Data1);



    const testcaimang = () => {
       
        Data1.map((item) => {
     
            console.log("k1",item.TenVatTu)
            console.log("k2", item._id)
            console.log("k3", item.SoLuong)
            console.log("k4", item.Gia)
        })
    }


    // useEffect(() => {
    //     Findchitiet();
  
       
    // }, [])
   
  return (
   
<div className="modalBackground">
    <div className="modalContainer">
       
{/* <Button size='sm' variant='primary' onClick={handleclick}>Xem</Button>| */}
<div className='row'>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>Ten VT</th>
                               
                               
                                <th>Số lượng</th>
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
                         
                            )
                            
                            }


{/* {Data2.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.NgayBan}</td>
                                    <td>{item.Gia}</td>
                                    <td>{item.SanPham.length}</td>
                               
                                
                                </tr>
                            )} */}
                           
                        </tbody>
                      
                    </table>

                    

                </div>
            </div>
            <div className={"nut"}>
            <button  onClick={() => closemodal(false)}> X </button>
            </div> 
            
            </div>
            
</div>



  );
};

export default Chitietlichsuchuyen;







