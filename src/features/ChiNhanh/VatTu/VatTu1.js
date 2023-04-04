import React, {useEffect, useState} from 'react';
import { Button, Modal} from 'react-bootstrap'
import axios from "axios";
import moment from 'moment';


const VatTu1 = ({handleclickgiohang}) => {


    const phanquyen = localStorage.getItem("Vaitro")
    console.log("phanquya", phanquyen);
    var b=JSON.stringify(phanquyen);
    var k ="QuanLy"
    var Xep=true;
    var kho=false;
   
    if(phanquyen==="QuanLyKho"){
      kho=true;
      Xep=false;
    }
  const [isToggledd, setisToggledd] =useState(false);
  const [Data, setData] = useState([]);
  const [DataTK, setDataTK] = useState([]);



  const [RowData, SetRowData] = useState([])

  //FOr Edit Model
  const [ViewEdit, SetEditShow] = useState(false)
  const handleEditShow = () => { SetEditShow(true) }
  const hanldeEditClose = () => { SetEditShow(false) }



   //Define here local state that store the form Data
   const [gia, setgia]=useState("")
   const [TenVatTu, settenvattu] = useState("")
   const [SoLuong, setsoluong] = useState("")
   const [NgaySanXuat, setnsx] = useState("")
   const [NgayHetHan, setnhh] = useState("")
   const [MaVT, setMaVT] = useState("")
   let dateNgaysanxuat = Date(NgaySanXuat);
   let formatteddateNgaysanxuat = moment(dateNgaysanxuat).format('YYYY-MM-DD');
 
   console.log("datesdfdsf", formatteddateNgaysanxuat);
   const [cn, setcn] = useState("")
  //Id for update record and Delete
  const [id,setId] = useState("");
  const [Delete,setDelete] = useState(false)
  var Gia=gia



  var Tenchinhanh= localStorage.getItem("TenChiNhanh");
  console.log("chinhanh",Tenchinhanh)
  var ChiNhanh=Tenchinhanh;




  const diffDays = (date, otherDate) => Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24));
  
  let unique;

  let time
  let dayss
 let biennhh
 let  ngayhientai = new Date();
 ngayhientai.setDate(ngayhientai.getDate() - 61);
 let ngayhientai1 = moment(ngayhientai).format('YYYY-MM-DD');
 console.log("ngay da dk 2 thang", ngayhientai1)

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
                    //   console.log(data)






                  }
              })
              .catch(err => {
                  console.log(err)
              })
            }


            const handleSubmite = () => {
              const url = 'http://localhost:5001/VatTu'
              
              const Credentials = { TenVatTu, SoLuong,NgaySanXuat,NgayHetHan,ChiNhanh,Gia,MaVT }
              axios.post(url, Credentials)
                  .then(response => {
                      const result = response.data;
                      const { status, message, data } = result;
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

          const handleEdit = () =>{
            const url = `http://localhost:5001/VatTu/${id}`
            
            const Credentials = { TenVatTu, SoLuong,NgaySanXuat,NgayHetHan, ChiNhanh, Gia}
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


            
            useEffect(() => {
              Getvattu();
 
          }, [])

 
  var nsx;
  var nhh;
  return (
    <div>

 
      <div>

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
                            {Data.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.TenVatTu}</td>
                                    <td>{item.SoLuong}</td>
                                    <td>{nsx = moment(item.NgaySanXuat).format('DD/MM/YYYY')}</td>
                                    <td>{nhh = moment(item.NgayHetHan).format('YYYY-MM-DD')}</td>
                                    <td>{item.Gia}</td>
                                    <td style={{ minWidth: 190 }}>
                                        
                                      <Button size='sm' variant='primary' onClick={() => {handleclickgiohang(item) }}>Chọn</Button>
                                        {/* <Button size='sm' variant='warning' onClick={()=> {handleMoveShow(SetRowData(item),setId(item._id))}}>Move-To</Button>| */}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

   

            
                    {/* Modal for Edit employee record */}
                    <div className='model-box-view'>
                <Modal
                    show={ViewEdit}
                    onHide={hanldeEditClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Sửa vật tư</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <label>Tên vật tư</label>
                                <input type="text" className='form-control' onChange={(e) => settenvattu(e.target.value)} placeholder="Nhập tên vật tư" defaultValue={TenVatTu}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Số lượng</label>
                                <input type="email" className='form-control' onChange={(e) => setsoluong(e.target.value)} placeholder="Nhập số lượng" defaultValue={SoLuong} />
                                
                            </div>
                            <div className='form-group mt-3'>
                                <label>Ngày sản xuất</label>
                                <input type="text" className='form-control' onChange={(e) => setnsx(e.target.value)} placeholder="Nhập ngày sản xuất" defaultValue={nsx} />
                                
                            </div>
                            <div className='form-group mt-3'>
                                <label>Ngày hết hạn</label>
                                <input type="date" className='form-control' onChange={(e) => setnhh(e.target.value)} placeholder="Nhập ngày hết hạn" value={nhh} />
                                
                            </div>
                            <div className='form-group mt-3'>
                                <label>Ngày hết hạn</label>
                                <input type="text" className='form-control' onChange={(e) => setgia(e.target.value)} placeholder="Nhập giá" value={gia} />
                                
                            </div>
                            <Button type='submit' className='btn btn-warning mt-4' onClick={handleEdit}>Sửa vật tư</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldeEditClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>

            </div>

    </div>
  );
}

export default VatTu1;
