import React,  { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap'
import axios from "axios";
import styles from "./TungChiNhanh.module.css"
import DieuHuong from "../../components/DieuHuong/Dieuhuong"
import { useNavigate } from "react-router-dom";
import ViewXemhodon from "./ViewXemHoaDon"
import Trangtinhluong from "./Trangtinhluong"
import ViewLuong from "./ViewLuong"
import moment from 'moment';


// import {isToggled} from'../../features/ChiNhanh/ChiNhanh'
const Trangluongnhanvien = () => {


    const navigate = useNavigate();
  const [isToggledd, setisToggledd] =useState(false);
  
//   const [Chitiethoadon, setChitiethoadon]= useState([]);
  
  const [Data, setData] = useState([]);
  const [RowData, SetRowData] = useState([])
  const [ChitietLuong,setChitietLuong]= useState([])

  
  const [XemchitietTL, setXemchitietTL]= useState([]);

  const [ViewShow, SetViewSho] = useState(false)


  const [ViewShowTL, SetViewShowTL] = useState(false)
  const [ViewShoww, SetViewShoww] = useState(false)
 

 


  const hanldeViewClose = () => { SetViewShow(false) }
  const hanldeViewCloseTL = () => { SetViewShowTL(false) }
  //FOr Edit Model
  const [ViewEdit, SetEditShow] = useState(false)
  const handleEditShow = () => { SetEditShow(true) }
  const hanldeEditClose = () => { SetEditShow(false) }
  //FOr Move Model
  const [ViewMove, SetMoveShow] = useState(false)
  const handleMoveShow = () => { SetMoveShow(true) }
  const hanldeMoveClose = () => { SetMoveShow(false) }
  //FOr Delete Model
  const [ViewDelete, SetDeleteShow] = useState(false)
  const handleDeleteShow = () => { SetDeleteShow(true) }
  const hanldeDeleteClose = () => { SetDeleteShow(false) }
  //FOr Add New Data Model
  const [ViewPost, SetPostShow] = useState(false)
  const handlePostShow = () => { SetPostShow(true) }
  const hanldePostClose = () => { SetPostShow(false) }

  //Define here local state that store the form Data
  const [hoten, sethoten] = useState("")
  const [sdt, setsdt] = useState("")
  const [cn, setcn] = useState("")
  const [hoadoncua, sethoadoncua] = useState("")





  const [Tienthuong, setTienthuong] = useState("")
  const [Tienchuyencan, setTienchuyencan] = useState("")
//   let hoadoncua;
//   const sethoadoncua = (item)=> {
//      hoadoncua=item;
//   }

  //Id for update record and Delete
  const [id,setId] = useState("");
  const [iddd,setIddd] = useState("");
  const [idtb,setidtb] = useState("");
  const [Delete,setDelete] = useState(false)
// const [Manggop, setManggop]= useState([])
const [Manghoadon, setManghoadon]= useState([])


var Chitiethoadon=[];
const setChitiethoadon = (item)=> {
    Chitiethoadon.push(item);
}



var Manggop=[]

  var Tenchinhanh= localStorage.getItem("TenChiNhanh");
  console.log("chinhanh",Tenchinhanh)
  var ChiNhanh=Tenchinhanh;


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

                    
                      console.log(data)
                  }
              })
              .catch(err => {
                  console.log(err)
              })
            }





            const Getallchitiethoadon = async () => {
              
                const url = `http://localhost:5001/HoaDon/h/${hoadoncua}`
                axios.get(url)
                          .then(response => {
                              const result = response.data;
                              const { status, message, data } = result;
                              if (status !== 'SUCCESS') {
                                  alert(message, status)
                              }
                              else {
                                setChitiethoadon(data)
                                  console.log("choa em a dugn day tu chiu 55555",Chitiethoadon)
                                  Chitiethoadon.map(x =>x.map(y=> console.log("y la sdfd", y)))
                              }
                          })
                          .catch(err => {
                              console.log(err)
                          })

                        
                        }


                        const GetallchitietLuong = async () => {
              
                            const url = `http://localhost:5001/Luong/c/${Tenchinhanh}`
                            axios.get(url)
                                      .then(response => {
                                          const result = response.data;
                                          const { status, message, data } = result;
                                          if (status !== 'SUCCESS') {
                                              alert(message, status)
                                          }
                                          else {
                                            setChitietLuong(data)
                                              console.log("choa em a dugn day tu chiu 55555",ChitietLuong)
                                            //   Chitiethoadon.map(x =>x.map(y=> console.log("y la sdfd", y)))
                                          }
                                      })
                                      .catch(err => {
                                          console.log(err)
                                      })
            
                                    
                                    }


  const Getnhanvien = async () => {

  const url = `http://localhost:5001/Nhanvien/c/${Tenchinhanh}`
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
          let IDnguoibanhang;
          let soluonghoadon = 0;
          const hamgopmang = () => {
            // bandau.push(itemm)
            //
            
            for(let i=0; i<Data.length; i++) {
               

                // if (Manggop.indexOf(Data) !== -1) return;
                // setManggop({
                //     // ChiNhanh: item.ChiNhanh,
                //     // Gia: item.Gia,
                //     // NgayHetHan: item.NgayHetHan,
                //     // NgaySanXuat: item.NgaySanXuat,
                //     // SoLuong: item.SoLuong,
                //     // TenVatTu: item.TenVatTu,
                //     // _id: Data[i]._id,
                //     // hoten: Data[i].hoten, 
                //     // sdt: Data[i].sdt,
                //     ChiNhanh: Data[i].ChiNhanh,
                //     SoLuongHD: 0
                
                // })
                let itemm={
                    _id: Data[i]._id,
                    hoten: Data[i].hoten, 
                    sdt: Data[i].sdt,
                    ChiNhanh: Data[i].ChiNhanh,
                        SoLuongHD: soluonghoadon,
                        IDnguoibanhang: IDnguoibanhang
                }
                Manggop.push(itemm)

                
        
                }


                for(let i=0; i<Data.length; i++) {
                for(let j=0; j< Manghoadon.length;j++){
                    let bienid=Data[i]._id;
                    let bienbienid= bienid.toString();
                    console.log("kiem tra gia tri id", bienid);
                    console.log("kiem tra gia tri id mang hoa don",Manghoadon[j].NguoiBan
                    );
                    if(Data[i]._id===Manghoadon[j].NguoiBan                        ){
                        console.log("xinchao mn");
                        soluonghoadon+=1;
                        Manggop[i].SoLuongHD= soluonghoadon;
                        Manggop[i].IDnguoibanhang =Manghoadon[j].NguoiBan;
                       
                    }
                              
                }
                
            }
            // setManggop([...Manggop,{
            //   ChiNhanh: item.ChiNhanh,
            //   Gia: item.Gia,
            //   NgayHetHan: item.NgayHetHan,
            //   NgaySanXuat: item.NgaySanXuat,
            //   SoLuong: item.SoLuong,
            //   TenVatTu: item.TenVatTu,
            //   _id: item._id,}])
            //   //
            // console.log("itemm", item)
            // console.log("bandaubennav", bandau)
            // console.log("2");
            console.log("mang da gop ", Manggop)
            // Getallchitiethoadon();
          }
          hamgopmang();


          const handleSubmite = () => {
            const url = 'http://localhost:5001/Nhanvien'
            if(hoten=="" && sdt==""&& ChiNhanh==""){
                alert("Vui lòng nhập đầy đủ thông tin");
            }
            else if(hoten=="" || sdt=="" || ChiNhanh==""){
                alert("Vui lòng nhập đầy đủ thông tin");
            }else{
                
                const Credentials = { hoten, sdt, ChiNhanh }
                axios.post(url, Credentials)
                    .then(response => {
                        const result = response.data;
                        const { status, message, data } = result;
                        localStorage.setItem("Chutk",  result.data._id)
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
                    navigate(`/DangKy`);
            }
        }

        const handleEdit = () =>{
            const url = `http://localhost:5001/Nhanvien/${id}`
            console.log('ten sdt', RowData.sdt)
            if(sdt===""){
                setsdt(RowData.sdt)
                console.log('dohuyykhanh')
                console.log('ten sdt', sdt)
            }
            if(hoten===""){
                sethoten(RowData.hoten)
            }
            const Credentials = { hoten, sdt, ChiNhanh }
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

        const handleViewShow = () => { 
            // console.log("choa em a dugn day tu chiu 0000", hoadoncua)
            // Getallchitiethoadon(hoadoncua);
            // if(Chitiethoadon!=null){
                SetViewShow(true);
            //     console.log("choa em a dugn day tu chiu 99",Chitiethoadon)
            // }
            // console.log("choa em a dugn day tu chiu 666",Chitiethoadon)
            
            
        
        
        }

        const handleViewShowTL = () => { 
            // console.log("choa em a dugn day tu chiu 0000", hoadoncua)
            // Getallchitiethoadon(hoadoncua);
            // if(Chitiethoadon!=null){
                SetViewShowTL(true);
            //     console.log("choa em a dugn day tu chiu 99",Chitiethoadon)
            // }
            // console.log("choa em a dugn day tu chiu 666",Chitiethoadon)
            
            
        
        
        }

        const handleViewShoww = () => { 
            // console.log("choa em a dugn day tu chiu 0000", hoadoncua)
            // Getallchitiethoadon(hoadoncua);
            // if(Chitiethoadon!=null){
                SetViewShoww(true);
            //     console.log("choa em a dugn day tu chiu 99",Chitiethoadon)
            // }
            // console.log("choa em a dugn day tu chiu 666",Chitiethoadon)
            
            
        
        
        }

      //handle Delete Function 
      const handleDeletetk = () =>{
    
        const url = `http://localhost:5001/TaiKhoan/${id}`
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

       
         //handle Delete Function 
         const handleDelete = () =>{
            const url = `http://localhost:5001/Nhanvien/${id}`
            axios.delete(url)
                .then(response => {
                    const result = response.data;
                    const { status, message } = result;
                    handleDeletetk();
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








    // const handleMove = () =>{
    //     const url = `http://localhost:5001/Nhanvien/${id}`
    //     ChiNhanh = cn
    //     const Credentials = {ChiNhanh }
    //     axios.put(url, Credentials)
    //         .then(response => {
    //             const result = response.data;
    //             const { status, message } = result;
    //             if (status !== 'SUCCESS') {
    //                 alert(message, status)
    //             }
    //             else {
    //                 alert(message)
    //                 window.location.reload()
    //             }
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }
    const YeuCau="Chuyển Nhân Viên";
    const handleMove = () =>{
        ChiNhanh = cn
        const url = 'http://localhost:5001/ThongBao'
        const Credentials = { YeuCau,hoten, sdt, ChiNhanh, idtb}
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

    // var XemchitietTL=[];
    var Mangcopy=[];


    const handleclickgiohang = (item) => {
  
        if (XemchitietTL.indexOf(item) !== -1) return;
        setXemchitietTL([...XemchitietTL,{
            _id: item._id,
            hoten: item.hoten, 
            sdt: item.sdt,
            ChiNhanh: item.ChiNhanh,
                SoLuongHD: item.SoLuongHD,
                IDnguoibanhang: item.IDnguoibanhang,
                Tienluong: item.Tienluong
        }])
        // setCart([...cart, item])
     
      };

    const Xulyxemchitietluong = (kkkk) => {
        for(let i = 0; i < ChitietLuong.length; i++) {
        
                for(let j = 0; j < ChitietLuong[i].Chitiet.length;j++){
                    console.log("Xuat thu cái ",  ChitietLuong[i].Chitiet[0].length)
                    Mangcopy=ChitietLuong[i].Chitiet[0];

                    for(let k = 0; k  < ChitietLuong[i].Chitiet[0].length;k ++){
                        console.log("Xuat thu cái ban trong for", Mangcopy[k].hoten);


                        console.log("Check dk id 1", ChitietLuong[i]._id);
                        console.log("Check dk id 2", kkkk);
                        if(ChitietLuong[i]._id==kkkk){
                            let itemm={
                                _id: Mangcopy[k]._id,
                                hoten: Mangcopy[k].hoten, 
                                sdt: Mangcopy[k].sdt,
                                ChiNhanh: Mangcopy[k].ChiNhanh,
                                    SoLuongHD: Mangcopy[k].SoLuongHD,
                                    IDnguoibanhang: Mangcopy[k].IDnguoibanhang,
                                    Tienluong: Mangcopy[k].Tienluong
                            }
                                XemchitietTL.push(itemm);
                        }
                        
                        // handleclickgiohang(Mangcopy[k]);

                    }




                    // let itemm={
                    //     _id: ChitietLuong[i].Chitiet[j]._id,
                    //     hoten: ChitietLuong[i].Chitiet[j].hoten, 
                    //     sdt: ChitietLuong[i].Chitiet[j].sdt,
                    //     ChiNhanh: ChitietLuong[i].Chitiet[j].ChiNhanh,
                    //         SoLuongHD: ChitietLuong[i].Chitiet[j].SoLuongHD,
                    //         IDnguoibanhang: ChitietLuong[i].Chitiet[j].IDnguoibanhang,
                    //         Tienluong: ChitietLuong[i].Chitiet[j].Tienluong
                    // }
                    //     XemchitietTL.push(itemm);




                }
            
           
        }



        console.log("Qua trang viewHd ko ơ trang luong nhan vien", XemchitietTL)
        handleViewShow();
    }






    const SetViewShow =(item)=>{
        if( item===false){
            XemchitietTL.length=0
        }
       
       
        SetViewSho(item)
       
    
    
      }

      
    

    useEffect(() => {
        
            Getnhanvien();
            Getallhoadon();
            hamgopmang();
            GetallchitietLuong();
            // Getallchitiethoadon();
        }, [])
  
 
  
  var Xep=true;
  let Ngaytinhluong1;




  const formatter = new Intl.NumberFormat('vn',{
    style: 'currency',
    currency:'VND',
   
    useGrouping: true,
    notation: 'standard'
  })       
  return (
    <div>
      
      <nav>
      <div className="nav_box">
      
      {/* {Xep &&<button style={{position:'relative',right:"120px"}}  onClick={() => TatHovernut()}><i style={{color:"Azure"}} class="fa fa-arrow-circle-left"></i></button>}
      {Xep &&<button style={{position:'relative',right:"280px"}}  onClick={() => Hovernut()}><i style={{color:"Azure"}} class="fa fa-arrow-circle-right"></i></button>} */}
      <h1 style={{color:"Azure",position:"relative",left:"150px"}} > <b><i>Chào Mừng Đến Chi Nhánh: {Tenchinhanh}</i></b> </h1>
      <div className={styles.fixDieuHuong}>
      {Xep &&
      <section>
      {isToggledd && <DieuHuong/>}
      </section>}
      </div>
      </div>
     
    </nav>

      <div>
      <div className='container'>
          
               
            
                    <div className='row'>
                        <div className='col' style={{position:"relative" , top:"15px",left:"170px"}}>
                    <Button variant='primary' onClick={() => { handleViewShowTL()}}><i className='fa fa-plu'></i>
                        Tinh lương
                    </Button>
                    </div>
                    <div className='col' style={{position:"relative" , top:"15px"}}>
                    <input type="Number" className='form-control' onChange={(e) => setTienthuong(e.target.value)} placeholder="mời nhập tiền thưởng" />
                    </div>
                    {/* <div className='col'>
                    <input type="Number" className='form-control' onChange={(e) => setTienchuyencan(e.target.value)} placeholder="mời nhập tiền chuyen can" />
                    </div> */}
                    </div>
    
           
            </div>
            <div className={styles.BangNhanVien}>
            <div className='row'>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered' style={{border:"solid 1px"}}>
                        <thead>
                            <tr style={{backgroundColor:"#ffff94"}}>
                                <th>NgayTinhLuong</th>
                                <th>TốngTienTra</th>
                                <th>CHI TIET</th>
                              
                            </tr>
                        </thead>
                        <tbody>

                        {ChitietLuong.map((item) =>
                                <tr key={item._id}>
                                    <td>{Ngaytinhluong1 = moment(item.NgayTinh).format('YYYY-MM-DD')}</td>
                                    <td>{formatter.format(item.Tienphaitra)}</td>
                                    <td style={{ minWidth: 190 }}>
                                        
                                        <Button size='sm' variant='primary' onClick={() => { Xulyxemchitietluong(item._id);setIddd(item._id) }}>click</Button>
                                          {/* <Button size='sm' variant='warning' onClick={()=> {handleMoveShow(SetRowData(item),setId(item._id))}}>Move-To</Button>| */}
                                      </td>
                                    
                                  
                            
                                </tr>
                            )}
              
                        </tbody>
                    </table>



                    
                </div>
            </div>
            </div>
            {/* View chi tiet hoa don*/}
    



             {/* Modal for submit data to database */}
             {/* <div className='model-box-view'>
                <Modal
                    show={ViewPost}
                    onHide={hanldePostClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add new Employee</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <input type="text" className='form-control' onChange={(e) => sethoten(e.target.value)} placeholder="Please enter Name" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="email" className='form-control' onChange={(e) => setsdt(e.target.value)} placeholder="Please enter phone number" />
                            </div>
                            <Button type='submit' className='btn btn-success mt-4' onClick={handleSubmite}>Bước tiếp theo</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldePostClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div> */}


            <div>
                {
                    ViewShowTL && <Trangtinhluong  closemodal={SetViewShowTL} Tienthuong={Tienthuong} Tienchuyencan={Tienchuyencan}/> 
                }
            </div>

            
                    {/* Modal for Edit employee record */}
                    {/* <div className='model-box-view'>
                <Modal
                    show={ViewEdit}
                    onHide={hanldeEditClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Employee</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <label>Name</label>
                                <input type="text" className='form-control' onChange={(e) => sethoten(e.target.value)} placeholder="Please enter Name" defaultValue={hoten}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>SDT</label>
                                <input type="email" className='form-control' onChange={(e) => setsdt(e.target.value)} placeholder="Please enter phone number" defaultValue={sdt} />
                                
                            </div>
                            <Button type='submit' className='btn btn-warning mt-4' onClick={handleEdit}>Edit Employee</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldeEditClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div> */}



            <div>
                {
                    ViewShow && <ViewLuong closemodal={SetViewShow} XemchitietTL={XemchitietTL} IDnguoiban={id}/>
                }
            </div>


        









 



            </div>
      
      {/* <a>Code Chuc nang</a> */}
    </div>
  );
}

export default Trangluongnhanvien;
