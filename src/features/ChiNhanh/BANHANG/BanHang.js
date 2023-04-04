import React, {useEffect, useState} from 'react';
import { Button, Modal} from 'react-bootstrap'
import axios from "axios";
import moment from 'moment';
import DataTable from "react-data-table-component"

import DieuHuong from "../../../components/DieuHuong/Dieuhuong"
import Navbargiohang from "./navbargiohang"
const BanHang = ({handleclickgiohang}) => {
   
  const [isToggledd, setisToggledd] =useState(false);
  const [Data, setData] = useState([]);
  const [RowData, SetRowData] = useState([])


  const [TimKiem, setTimKiem] = useState("");
  const [loading, setLoading] = useState(false)


  const [ViewShow, SetViewShow] = useState(false)
  const handleViewShow = () => { SetViewShow(true) }
  const hanldeViewClose = () => { SetViewShow(false) }

  //FOr Edit Model
  const [ViewEdit, SetEditShow] = useState(false)
  const handleEditShow = () => { SetEditShow(true) }
  const hanldeEditClose = () => { SetEditShow(false) }
  //FOr Delete Model
  const [ViewDelete, SetDeleteShow] = useState(false)
  const handleDeleteShow = () => { SetDeleteShow(true) }
  const hanldeDeleteClose = () => { SetDeleteShow(false) }
 //FOr Add New Data Model
 const [ViewPost, SetPostShow] = useState(false)
 const handlePostShow = () => { SetPostShow(true) }
 const hanldePostClose = () => { SetPostShow(false) }


   //Define here local state that store the form Data
   const [TenVatTu, settenvattu] = useState("")
   const [SoLuong, setsoluong] = useState("")
   const [NgaySanXuat, setnsx] = useState("")
   const [NgayHetHan, setnhh] = useState("")
   let dateNgaysanxuat = Date(NgaySanXuat);
   let formatteddateNgaysanxuat = moment(dateNgaysanxuat).format('YYYY-MM-DD');
 
   console.log("datesdfdsf", formatteddateNgaysanxuat);
   const [cn, setcn] = useState("")
  //Id for update record and Delete
  const [id,setId] = useState("");
  const [Delete,setDelete] = useState(false)




  var Tenchinhanh= localStorage.getItem("TenChiNhanh");
  console.log("chinhanh",Tenchinhanh)
  var ChiNhanh=Tenchinhanh;

  


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
                      console.log(data)
                  }
              })
              .catch(err => {
                  console.log(err)
              })
            }


            var nsx;
            var nhh

            const columns = [
                {
                    name: <div style={{fontSize:"18px"}}>Tên Vật Tư</div>,
                  selector: (row) => row.TenVatTu,
                 
                },
                {
                  name:<div style={{fontSize:"18px"}}>Số Lượng</div>,
                  selector: (row) => row.SoLuong,
                },
                {
                    name:<div style={{fontSize:"18px"}}>Ngày Sản Xuất</div>,
                    selector: (row) => nsx= moment(row.NgaySanXuat).format("DD/MM/YYYY"),
                  
                },
                {
                    name:<div style={{fontSize:"18px"}}>Ngày Hết Hạn</div>,
                    selector: (row) => nsx= moment(row.NgayHetHan).format("DD/MM/YYYY"),
                  
                },
                {
                  name:<div style={{fontSize:"18px"}}>Action</div>,
                  cell: (row) => <Button size='sm' variant='primary' onClick={() => handleclickgiohang(row) }>Click</Button>,
                
              },
            
            
              ]
            
            useEffect(() => {
              Getvattu();
          }, [])

          function search(rows){
            // console.log("sad", rows.NgayBan)
            console.log("sad1", TimKiem)
            return rows.filter(row => row.TenVatTu.toLowerCase().indexOf(TimKiem)> -1)
            
          }


  return (
    <div>

      <div>
            <div className='row'>
                <div className='mt-5 mb-4'>
        
                </div>
            </div>
            <div className='row'>
                <div className='table-responsive'>
                <input  style={{border:"1px solid",borderRadius: '5px!important',float:"right",marginRight:"10px"}} placeholder="Tìm Kiếm" value={TimKiem} onChange={(a)=> setTimKiem(a.target.value)} ></input>
                    <table className='table table-striped table-hover table-bordered'>
                       
                       
                    <DataTable
                             
                             columns={columns}
                             data={search(Data)}
                             progressPending={loading}
                             fixedHeader
                             fixedHeaderScrollHeight='400px'
                             highlightOnHover
                             pagination
                             
                             />
                        {/* <thead>
                            <tr>
                                <th>Tên vật tư</th>
                                <th>số lượng</th>
                                <th>ngày sản xuất</th>
                                <th>ngày hết hạn</th>
                            </tr>
                        </thead> */}
                        {/* <tbody>
                            {Data.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.TenVatTu}</td>
                                    <td>{item.SoLuong}</td>
                                    <td>{nsx = moment(item.NgaySanXuat).format('DD/MM/YYYY')}</td>
                                    <td>{nhh = moment(item.NgayHetHan).format('YYYY-MM-DD')}</td>
                                    <td style={{ minWidth: 190 }}>
                                        <Button size='sm' variant='primary' onClick={() => handleclickgiohang(item) }>Mua</Button>|
                                        {/* <Button size='sm' variant='warning' onClick={()=> {handleMoveShow(SetRowData(item),setId(item._id))}}>Move-To</Button>| */}
                                    {/* </td> */}
                                {/* </tr> */}
                            {/* )} */}
                        {/* </tbody>  */}
                    </table>
                </div>
            </div>




           
            </div>

    </div>
  );
}

export default BanHang;
