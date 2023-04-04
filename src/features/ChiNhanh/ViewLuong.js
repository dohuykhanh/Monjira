import React, { useState, useEffect,useRef } from "react";
// import  "./cartcss.css" 
import { Button, Modal} from 'react-bootstrap'
import axios from "axios";
import moment from 'moment';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import "./Viewxemhoadon.css"



const ViewLuong = ({ closemodal, Manghoadon,IDnguoiban, Chitiethoadon, XemchitietTL}) => {
    // const [Data, setData] = useState([]);

    console.log("Qua trang viewHd", XemchitietTL)
            


    const formatter = new Intl.NumberFormat('vn',{
        style: 'currency',
        currency:'VND',
       
        useGrouping: true,
        notation: 'standard'
      })       
  return (
   
<div className="modalBackground">
    <div className="modalContainer">
       
{/* <Button size='sm' variant='primary' onClick={handleclick}>Xem</Button>| */}
 <div className='row'>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                            <th>Name</th>
                                <th>SDT</th>
                                <th>So luong hd</th>
                                <th>Lương</th>
                              
                            </tr>
                        </thead>
                        <tbody>

                        {XemchitietTL.map((item) =>
                                <tr key={item._id}>
                                  <td>{item.hoten}</td>
                                    <td>{item.sdt}</td>
                                    <td>{item.SoLuongHD}</td>
                                    <td>{formatter.format(item.Tienluong)}</td>
                              
                                    
                                  
                            
                                </tr>
                            )}
              
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

export default ViewLuong;



