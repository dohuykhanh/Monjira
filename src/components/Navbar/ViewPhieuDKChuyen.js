import React, { useState, useEffect,useRef } from "react";
// import  "./cartcss.css" 
import { Button, Modal} from 'react-bootstrap'
import axios from "axios";
import moment from 'moment';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
// import "../../features/ChiNhanh/Viewxemhoadon.css"
import styles from "./ViewPhieuDKChuyen.module.css"



const ViewPhieuDKChuyen = ({ Data,closemodal,IDnguoiban}) => {
    // const [Data, setData] = useState([]);
    const [Data1, setData1] = useState([]);
    const [Data2, setData2] = useState([]);

    const [Dataa, setDataa] = useState([]);
    const [cn, setcn] = useState("")
    const [id,setId] = useState("");
    const [Tucn,setTucn] = useState("");
    const [iddd,setiddd] =useState("");

    let Idnguoiban=IDnguoiban;
    console.log("id thang ban truyen qua", Idnguoiban)
    let hoadoncua=Idnguoiban;
  
    var Tenchinhanh= localStorage.getItem("TenChiNhanh");
    console.log("chinhanh",Tenchinhanh)
    var ChiNhanh=Tenchinhanh;
    let Gia;
    let TenVatTu;
    let SoLuong;
    let NgaySanXuat;
    let NgayHetHan;
    let idd;


    const handleDelete = (iddd) =>{
        console.log("idd",iddd)
        const url = `http://localhost:5001/PhieuDKChuyen/${iddd}`
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
                const GetThongBaoDK = async () => {

                    const url = `http://localhost:5001/PhieuDKChuyen`
                    axios.get(url)
                              .then(response => {
                                  const result = response.data;
                                  const { status, message, data } = result;
                                  if (status !== 'SUCCESS') {
                                      alert(message, status)
                                  }
                                  else {
                                    setData2(data)
                                    setiddd(data[0]._id);
                                      console.log('bugsss ne khanh',data[0]._id)
                                      console.log('bugsss ne khanh1',data)
                                  }
                              })
                              .catch(err => {
                                  console.log(err)
                              })
                            }
                            let a=[];
                            let b=[];
                            const handleclick = () => {
                                // setData1([]);
                                // setData1([...Data2[0].SanPham]);
                                // Data1.push(Data2[0].SanPham)
                                a = Data2[0].SanPham
                                setTucn(Data2[0].ChiNhanh)
                                b=a[0];
                                //  setData1([...Data2[0].SanPham]);
                                
                                console.log("buon ngu qua",b)
                                b.map((i) =>{
                                    console.log("buon ngu qu tenv tue",i.TenVatTu);
                                    let item ={
                                        TenVatTu: i.TenVatTu,
                                        _id: i._id,
                                        SoLuong: i.SoLuong,
                                        Gia: i.Gia,
                                        ChiNhanh:i.ChiNhanh
                                    }
                                    Data1.push(item)
                                })
                                
                               
                                console.log("buon ngu qua",Data1)
                        }

              useEffect(() => {
                GetThongBaoDK();
               
            }, [])


            const handleclickk = () => {
                GetThongBaoDK();
                handleclick();
            }

        


   console.log("bugs ne111",iddd);         
  return (
   
<div>
<div className={styles.modalBackgroundChuyen}>
    <div className={styles.modalContainerChuyen}>

<div className='row'>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>Tên vật tư</th>
                                <th>số lượng</th>
                                <th>Giá</th>
                                <th>Chi nhánh</th>
                            </tr>
                        </thead>
                        <tbody>
                        {Data1.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.TenVatTu}</td>
                                    <td>{item.SoLuong}</td>
                                    <td>{item.Gia}</td>
                                    <td>{item.ChiNhanh}</td> 
                                </tr>
                            )}
                           
                        </tbody>
                        <div>{Tucn}</div>
                       
                    </table>

                    <Button size='sm' variant='primary' onClick={() => {handleDelete(iddd) }} style={{position:"relative",bottom:"10px",left:"170px"}}>Xoá</Button>     
                    <Button size='sm' variant='primary' onClick={handleclickk} style={{position:"relative",bottom:"10px",left:"190px"}}>Xem</Button>             
                </div>
            </div>

            <div className={styles.nuttt}>
            <button  onClick={() => closemodal(false)} style={{padding:"10px"}} > X </button>
            </div>  

</div>
</div>
</div>



  );
};

export default ViewPhieuDKChuyen;



