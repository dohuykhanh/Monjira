import React, {useEffect, useState} from 'react';
import { Button, Modal} from 'react-bootstrap'
import axios from "axios";
import moment from 'moment';
import styles from "./VatTu.module.css"
import DieuHuong from "../../../components/DieuHuong/Dieuhuong"
import ".././Viewxemhoadon.css"
const Trangtonkho = ({DataTK,closemodal}) => {

    const [PO, setPO] = useState([]);
    let soluong=DataTK.length/2
    
  
   for(let i = 0; i <soluong; i++){
        PO.push(DataTK[i])
   }
//     const uniqueSet = new Set(DataTK);
// // Set { '🐣', 1, 2, 3 }

// // Step 2
// const backToArray = [...uniqueSet];
    let nsx;
    let nhh;
    console.log("kiem tra mang co bị gap đoi ko",soluong)
  return (
    <div className="modalBackground">

   
      <div className="modalContainer">

            <div className='row'>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>Tên vật tư</th>
                                <th>số lượng</th>
                                <th>ngày sản xuất</th>
                                <th>ngày hết hạn</th>
                                <th>Giá</th>
                            </tr>
                        </thead>
                        <tbody>
                            {PO.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.TenVatTu}</td>
                                    <td>{item.SoLuong}</td>
                                    <td>{nsx = moment(item.NgaySanXuat).format('DD/MM/YYYY')}</td>
                                    <td>{nhh = moment(item.NgayHetHan).format('YYYY-MM-DD')}</td>
                                    <td>{item.Gia}</td>
                              
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
}

export default Trangtonkho;
