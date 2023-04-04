import React,  { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap'
import axios from "axios";
import styles from "./TungChiNhanh.module.css"
import DieuHuong from "../../components/DieuHuong/Dieuhuong"
import { useNavigate } from "react-router-dom";
import ViewXemhodon from "./ViewXemHoaDon"


// import {isToggled} from'../../features/ChiNhanh/ChiNhanh'
const Doanhthu1 = () => {


    const navigate = useNavigate();
 



    const [Manghoadon, setManghoadon]= useState([]);



    const [Mangdoanhthu, setMangdoanhthu]= useState([]);
    let SLCHINHANH = localStorage.getItem('SLCHINHANH');
    console.log('trang doan thu hin sl chi nhan', SLCHINHANH);


    const Getallhoadon = async () => {

        const url = `http://localhost:5001/HoaDon`
        axios.get(url)
                  .then(response => {
                      const result = response.data;
                      const { status, message, data } = result;
                      if (status !== 'SUCCESS') {
                          alert(message, status)
                      }
                      else {
                        setManghoadon(data)
    
                        
                          console.log("ben trang doanthu", data)
                      }
                  })
                  .catch(err => {
                      console.log(err)
                  })

                 
                }
   let j=[1,2,3];
   console.log("trang doan thu nhat", j.length)
    let soluonghoadon=0;
    let Tongthunhap=0;
    
    console.log("trang doan thu nhat 1", Manghoadon.length)
    const Hamhienthidoanthu= ()=>{
        console.log("da chay len dc");

        // let itemm={
        //     _id: Data[i]._id,
        //     ChiNhanh: Data[i].ChiNhanh,
        //         SoLuongHD: soluonghoadon,
  
        // }
        
        for(let i=1; i<= SLCHINHANH; i++){
            soluonghoadon=0;
   Tongthunhap=0;
           
            for(let j=0; j< Manghoadon.length ; j ++){
                console.log("vong for in chinhanh doanhthu", Manghoadon[j].ChiNhanh);
                if(Manghoadon[j].ChiNhanh==i){
                    soluonghoadon=soluonghoadon+1;
                    Tongthunhap = Tongthunhap + Manghoadon[j].Gia;

                }
            }

        //     let itemm={
        //     // _id: Data[i]._id,
        //     ChiNhanh: Data[i].ChiNhanh,
        //         SoLuongHD: soluonghoadon,
  
        // }

                console.log("chinhanh doanhthu", Manghoadon);
                console.log("tongthunhan", soluonghoadon);
                console.log("tongthunhan", Tongthunhap);
                
                
          



        }

    }
    const handlePostShow=() => {
         Getallhoadon();
        Hamhienthidoanthu();
    }






    

    useEffect(() => {
            // Getnhanvien();
            // Getallhoadon();
            // hamgopmang();
            // Getallchitiethoadon();
        }, [])
  

  
  var Xep=true;
  return (
    <div>
      <div>sdfgsfsdhukf</div>
  

      <div>
            <div className='row'>
                <div className='mt-5 mb-4'>
                    <Button variant='primary' onClick={() => { handlePostShow() }}><i className='fa fa-plu'></i>
                        Thêm Nhân Viên
                    </Button>
                </div>
            </div>
            <div className='row'>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                            <th>Chi Nhánh</th>
                                <th>Tổng SL Hoá Đơn</th>
                                <th>Tổng Thu Nhập</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {/* {Manggop.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.hoten}</td>
                                    <td>{item.sdt}</td>
                                    <td>{item.SoLuongHD}</td>
                                  
                                    <td style={{ minWidth: 190 }}>
                                        <Button size='sm' variant='primary' onClick={() => { handleViewShoww();setId(item._id) }}>View</Button>|
                                        <Button size='sm' variant='warning' onClick={()=> {handleEditShow(SetRowData(item),setsdt(item.sdt),sethoten(item.hoten),setId(item._id))}}>Edit</Button>|
                                        <Button size='sm' variant='danger' onClick={() => {handleViewShow(SetRowData(item),setId(item._id), setDelete(true))}}>Delete</Button>|
                                        <Button size='sm' variant='warning' onClick={()=> {handleMoveShow(SetRowData(item),setId(item._id),setsdt(item.sdt),sethoten(item.hoten),setidtb(item._id))}}>Move-To</Button>|
                                    </td>
                                </tr>
                            )} */}
                        </tbody>
                    </table>



                    
                </div>
            </div>
            </div>
        
        
      
      {/* <a>Code Chuc nang</a> */}
    </div>
  );
}

export default Doanhthu1;
