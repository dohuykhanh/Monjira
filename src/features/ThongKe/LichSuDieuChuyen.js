import React, { useState, useEffect,useRef } from "react";
import styles from "./LichSuDieuChuyen.module.css";
import { Button, Modal} from 'react-bootstrap'
import axios from "axios";
import moment from 'moment';
import Chitietlichsuchuyen from "./Chitietlichsuchuyen"
const LichSuDieuChuyen=() => {


    const [Data, setData] = useState([]);
    const [Data1, setData1] = useState([]);
    const [Data3, setData3] = useState([]);
    const [Dataa, setDataa] = useState([]);
    const [cn, setcn] = useState("")
    const [id,setId] = useState("");
    const [Maid,setMaid] = useState("");
    const [ViewShowTL, SetViewShowT] = useState(false)


    const SetViewShowTL =(item)=>{
        if( item===false){
            Data3.length=0
        }
       
       
        SetViewShowT(item)
       
    
    
      }

  
    var Tenchinhanh= localStorage.getItem("TenChiNhanh");
    console.log("chinhanh",Tenchinhanh)
    var ChiNhanh=Tenchinhanh;
    let Gia;
    let TenVatTu;
    let SoLuong;
    let NgaySanXuat;
    let NgayHetHan;
    let idd;



    const Getlichsuchuyen = async () => {
  
        const url = `http://localhost:5001/LichSuChuyen`
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
                          // setData1(Data[0].SanPham)
                          
                          
                      }
                  })
                  .catch(err => {
                      console.log(err)
                  })
                }



    const Getvattuu = async () => {

        const url = `http://localhost:5001/VatTu/c/${Tenchinhanh}`
        axios.get(url)
                  .then(response => {
                      const result = response.data;
                      const { status, message, data } = result;
                      if (status !== 'SUCCESS') {
                          alert(message, status)
                      }
                      else {
                          setDataa(data)
                          console.log(data)
                      }
                  })
                  .catch(err => {
                      console.log(err)
                  })
                }
      

                const handleEdit = (TenVatTu, SoLuong,NgaySanXuat,NgayHetHan, ChiNhanh, Gia,idd) =>{
                    const url = `http://localhost:5001/VatTu/${idd}`
                    
                    const Credentials = { TenVatTu, SoLuong,NgaySanXuat,NgayHetHan, ChiNhanh, Gia}
                    axios.put(url, Credentials)
                        .then(response => {
                            const result = response.data;
                            const { status, message } = result;
                          
                        })
                        .catch(err => {
                            console.log(err)
                        })
                }






    const handleDelete = () =>{
        
        const url = `http://localhost:5001/PhieuChuyen/${id}`
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
  
    // const Getvattu = async () => {
  
    //   const url = `http://localhost:5001/PhieuChuyen/c/${Tenchinhanh}`
    //   axios.get(url)
    //             .then(response => {
    //                 const result = response.data;
    //                 const { status, message, data } = result;
                    
    //                 if (status !== 'SUCCESS') {
    //                     alert(message, status)
    //                 }
    //                 else {
    //                     setData(data)
    //                     console.log(data)
    //                     // setData1(Data[0].SanPham)
                        
    //                     // console.log("dataaaa1",Data1)
    //                 }
    //             })
    //             .catch(err => {
    //                 console.log(err)
    //             })
    //           }


              const handleclick = () => {
                setData1([]);
                setData1([...Data[0].SanPham]);
                
                console.log("dataaaa1khanhoidayne",Data1)
        }

        const handleclickxacthuc = () => {
            //   hoadon.push(item);
            //   handleEditShow();
            // console.log("bien carrt", cart)
          
          
          
            
           
            console.log("Dataakhanh1", Dataa)
            console.log("Dataakhanh2", Data1)
            for(let i=0; i<Dataa.length; i++) {
              for(let j=0; j<Data1.length;j++){
                if(Dataa[i].MaVT===Data1[j][i].MaVT){
                  console.log("DataakhanhID1", Dataa[i].TenVatTu)
                  console.log("DataakhanhID2", Data1[j][i].TenVatTu)
                //   console.log("DataakhanhSP1", Data1[j][i].Gia)
                  
                //   console.log("DataakhanhSP3",Data1[j][i].NgaySanXuat )
                //   console.log("DataakhanhSP4", Data1[j][i].NgayHetHan)
                //   console.log("DataakhanhSP5", Data1[j][i]._id)
                  
          
                  Gia = Data1[j][i].Gia;
                  TenVatTu = Data1[j][i].TenVatTu;
                  NgaySanXuat= Data1[j][i].NgaySanXuat;
                  NgayHetHan= Data1[j][i].NgayHetHan;
                  idd=Dataa[i]._id;
          
                  let sltruoc=Dataa[i].SoLuong;
                  let slsau=Data1[j][i].SoLuong;
                  let slcannhap= sltruoc+slsau;
                  SoLuong=slcannhap;
                  ChiNhanh=Dataa[i].ChiNhanh
                  console.log("DataakhanhSP1", TenVatTu)
                  console.log("DataakhanhSP2",  SoLuong)
                  console.log("DataakhanhSP3",NgaySanXuat )
                  console.log("DataakhanhSP4", NgayHetHan)
                  console.log("DataakhanhSP5", ChiNhanh)
                  console.log("DataakhanhSP6", slcannhap)
                  console.log("DataakhanhSP7", idd)
                  console.log("DataakhanhSP7", Dataa[i]._id)
                  handleEdit(TenVatTu, SoLuong,NgaySanXuat,NgayHetHan, ChiNhanh, Gia,idd);
                }
              }
          }
            
            // handleEditShow();
            alert("xax thuc thanh cong");
           
          
          }





          const Findchitiet = () =>{
            console.log("ko Vao dc cai if trang chi teit licj su chuyen",Data._id );
            for(let i=0; i<Data.length; i++){
                if(Data[i]._id==Maid){
                    console.log("Vao dc cai if trang chi teit licj su chuyen");
                    console.log("cai mang Vao dc cai if trang chi teit licj su chuyen",Data[i].SanPham);
                    let a=Data[i].SanPham;
                    for(var j=0;j<a.length;j++){
                        let b=a[j];
                        b.map((item) => {
                            let product={
                                TenVatTu: item.TenVatTu,
                                _id: item._id,
                                SoLuong: item.SoLuong,
                                Gia: item.Gia
    
                            }
                            Data3.push(product);
                            console.log("Ten vt",item._id);
                        })
                    }
    
                }
    
    
            }
    
    
    
    
    
           
        }



          const handleViewShowTL = (item) => { 
            console.log("vao dc rooif", item)
            let a=item;
            for(var j=0;j<a.length;j++){
                let b=a[j];
                b.map((item) => {
                    let product={
                        TenVatTu: item.TenVatTu,
                        _id: item._id,
                        SoLuong: item.SoLuong,
                        Gia: item.Gia
 
                    }
                    Data3.push(product);
                    console.log("Ten vt",item._id);
                })
            }
                SetViewShowTL(true);
   
        }





              useEffect(() => {
                Getlichsuchuyen();
                Getvattuu();
            }, [])

            
console.log("Lich su Chuyen", Data)
let ngayc;

  return (
    <>
      <div className={styles.LichSuDieuChuyenVT}>
    <div className='row'>
                <div className='table-responsive' >
                <h5 style={{color:"#ff2424"}}><b><i>Lưu Vết Vật Tư Điều Chuyển:</i></b></h5>
                    <table className='table table-striped table-hover table-bordered' style={{border:"solid 1px"}}>                      
                        <thead >
                            <tr style={{backgroundColor:"#ffff94"}}>
                                <th>Chi Nhánh Chuyển</th>
                                <th>Chi Nhánh Nhận</th>
                                <th>Số Lượng Vật Tư Điều Chuyển</th>
                                <th>Ngày Chuyển</th>
                                <th>Chi Tiết</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data.map((item) =>
                                <tr key={item._id}>
                                    <td>Chi Nhánh {item.ChiNhanhXuatPhat}</td>
                                    <td>Chi Nhánh {item.ChiNhanh}</td>
                                    <td>{item.SanPham[0].length}</td>
                                    <td>{ngayc = moment(item.NgayChuyen).format('DD/MM/YYYY')}</td>
                                    <td style={{ minWidth: 190 }}>
                                        <Button size='sm' variant='primary' onClick={() => { handleViewShowTL(item.SanPham); setMaid(item._id)}}>Click</Button>
                                      
                                        </td>
                                </tr>
                            )}
                        </tbody>
                    </table>


                    
                </div>
            </div>



            <div>
                {
                    ViewShowTL && <Chitietlichsuchuyen  closemodal={SetViewShowTL}  Maid={Maid} Data={Data3}/> 
                }
            </div>
        </div>  
    </>
  );
}

export default LichSuDieuChuyen;
