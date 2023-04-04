import React,  { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap'
import axios from "axios";
import styles from "./Trangtinhluong.module.css"
import DieuHuong from "../../components/DieuHuong/Dieuhuong"
import { useNavigate } from "react-router-dom";
import ViewXemhodon from "./ViewXemHoaDon"


// import {isToggled} from'../../features/ChiNhanh/ChiNhanh'
const Trangtinluong = ({closemodal, Tienthuong, Tienchuyencan}) => {
  console.log("tien t  truyen qua", Tienthuong)
  console.log("tien cc truyen qua", Tienchuyencan)
  let Tienthuongg
  if(Tienthuong===""){
    Tienthuongg=0;
  }else{
    Tienthuongg=Tienthuong;

  }
  


    const navigate = useNavigate();
  const [isToggledd, setisToggledd] =useState(false);
  
//   const [Chitiethoadon, setChitiethoadon]= useState([]);
  
  const [Data, setData] = useState([]);
  const [Datak, setDatak] = useState([]);
  const [RowData, SetRowData] = useState([])

  const [ViewShow, SetViewShow] = useState(false)
  const [ViewShoww, SetViewShoww] = useState(false)
 

 


  const hanldeViewClose = () => { SetViewShow(false) }
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


//   let hoadoncua;
//   const sethoadoncua = (item)=> {
//      hoadoncua=item;
//   }

  //Id for update record and Delete
  const [id,setId] = useState("");
  const [idtb,setidtb] = useState("");
  const [Delete,setDelete] = useState(false)
// const [Manggop, setManggop]= useState([])
const [Manghoadon, setManghoadon]= useState([])


var Chitiethoadon=[];
const setChitiethoadon = (item)=> {
    Chitiethoadon.push(item);
}



var Manggop=[]
var Manglistluong=[]

  var Tenchinhanh= localStorage.getItem("TenChiNhanh");
  console.log("chinhanh",Tenchinhanh)
  var ChiNhanh=Tenchinhanh;







 var Mangchamcong=[]

 const handleclickchamcong = (item) => {
  
    if (Datak.indexOf(item) === -1) {
        Datak.push(item);
    }else{ return; }
    
   
    // setCart([...cart, item])
  
  };

  function searchNgalam(data, tim){
    console.log("alo loi j v 0", data)
    // console.log("sad", rows.NgayBan)
    let nglam = 0;
    let ngtre=0;
    let tongluong=0;
    let a =data.length
    console.log("chieu dai mang trong ham search", a)
    let i = 0
    do{
        console.log("alo loi j v ", tim, i)
        console.log("alo loi j v 1 ", data[i].Idchu)
        
              
                 
                 nglam=data[i].SoNgayLam;
                 ngtre=data[i].SoNgayTre;
                 console.log("kiem tra 9999 ngay lam ", nglam)
                 console.log("kiem tra 9999 ngay tre ", ngtre)
                 tongluong=(2000000*nglam)/26 - (ngtre*100000);

                 
                
           
            i=i+1;
    }while(i > a)
   
    
  }


  function searchNgatre(data, tim){
    // console.log("sad", rows.NgayBan)
    let ngtre;
    for(let i=0; i<data.length/2; i++){
            if(tim==data[i].Idchu){
                
                 ngtre=data[i].SoNgayTre;
                
            }else{
                ngtre=0;
            }
    }
   
    return ngtre;
  }


  const GetPhieuChamCong = async (thang ,nam) => {

    const url = `http://localhost:5001/PhieuChamCong/pckhanh/${thang}/${nam}`
    axios.get(url)
              .then(response => {
                  const result = response.data;
                  const { status, message, data } = result;
                  if (status !== 'SUCCESS') {
                      alert(message, status)
                  }
                  else {
                    //   setDatak(data)
                    //   console.log("Dang nhap kiem tra data trang tinh luong", data)
                    //   console.log("Dang nhap kiem tra chieu dai ", data.length)
                    //   Mangchamcong=[...data]
                     
                    //   console.log("Dang nhap kiem tra data trang tinh luong 99999999",  Mangchamcong)
                      for(let i = 0; i < data.length; i++){
                        let item={
                            _id: data[i]._id,
                            Idchu: data[i].Idchu,
                            SoNgayLam: data[i].SoNgayLam,
                            SoNgayTre: data[i].SoNgayTre,
                            Thang: data[i].Thang,
                            Nam: data[i].Nam
              
                          }


                          handleclickchamcong(item);

                      }
                     
           
                      
                      // console.log("Dang nhap kiem tra data", data)






                  }
              })
              .catch(err => {
                  console.log(err)
              })
            }


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
                        let soluonghoadon = 0;
                        let Tienluong =0;
                        let ab=0;
                        let ba=0;

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
        //   let soluonghoadon = 0;
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
                        IDnguoibanhang: IDnguoibanhang,
                        Tienluong: Tienluong,
                        Ngaylam: ab,
                        Ngaytre: ba
                }
                Manggop.push(itemm)

                
        
                }





                for(let i = 0; i <Manggop.length; i++){
                    for(let j = 0; j < Datak.length;j++){
                        console.log("khanh vao dc if r 1", Datak[j].Idchu, j);
                        console.log("khanh vao dc if r 2",Manggop[i]._id, i);
                            if(Manggop[i]._id==Datak[j].Idchu){
                                console.log("khanh vao dc if r")
                                    Manggop[i].Ngaylam=Datak[j].SoNgayLam;
                                    Manggop[i].Ngaytre = Datak[j].SoNgayTre;
                            }
                    }
                  

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
                        // const pp = parseInt(Tienchuyencan, 10);
                        const oo = parseInt(Tienthuongg, 10);
                        const uu= parseInt(soluonghoadon, 10);
                        let kkkk=Manghoadon[j].NguoiBan
                        // let chamcongngayban= searchNgalam(Datak,kkkk);
                        
                        // const chamcongngyatre = searchNgatre(Datak,Manghoadon[j].NguoiBan);
                        console.log("ho ten thang nhan vien ", Data[i].hoten)
                        console.log("ngay lam cu no ", Data[i].hoten)
                        // console.log("luong cu thang nhan vien", chamcongngayban)
                        // const tongtienlai= chamcongngayban + chamcongngyatre;
                   
                        // const tongtienlai= oo + uu*2000 + (2000000*chamcongngayban)/26 - chamcongngyatre*100000;
                        const tongtienlai= oo + uu*2000 + (2000000*Manggop[i].Ngaylam)/26 - Manggop[i].Ngaytre*100000;
                        Manggop[i].Tienluong = tongtienlai
                    }else{
                        // const oo = parseInt(Tienthuongg, 10);
                        // const uu= parseInt(soluonghoadon, 10);
                        // const tongtienlai= 7000;
                        // Manggop[i].Tienluong = tongtienlai

                   
                        
                    }
                              
                }
                soluonghoadon=0; 
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

    //hamf gui tien luong len
    const handleSubmitee = (hoadon,NgayBan, Tienphaitra) => {
        const url = 'http://localhost:5001/Luong'
        let ChiNhanh = Tenchinhanh
        // let Gia = price;
        const Credentials = {hoadon,NgayBan, Tienphaitra, ChiNhanh}
        axios.post(url, Credentials)
            .then(response => {
                const result = response.data;
                const { status, message, data } = result;
                if (status !== 'SUCCESS') {
                    alert(message, status)
                    hanldeEditClose()
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

    let  ngayhientai = new Date();
    let Tienphaitra = 0;
    const handlepostLuong = () =>{
        for(let i=0; i<Manggop.length; i++) {

            let itemm={
                _id: Manggop[i]._id,
                hoten: Manggop[i].hoten, 
                sdt: Manggop[i].sdt,
                ChiNhanh: Manggop[i].ChiNhanh,
                    SoLuongHD: Manggop[i].SoLuongHD,
                    IDnguoibanhang: Manggop[i].IDnguoibanhang,
                    Tienluong: Manggop[i].Tienluong
            }
            Manglistluong.push(itemm)
            let kk = parseInt(Manggop[i].Tienluong, 10)
            Tienphaitra = Tienphaitra + kk

            
    
            }
            console.log("xong game thooi", Manglistluong)
            handleSubmitee( Manglistluong,  ngayhientai, Tienphaitra)
    }

    const Xulychamcong = () =>{
        var month = new Date().getMonth() + 1; //To get the Current Month
        var year = new Date().getFullYear(); //To get the Current Year

        GetPhieuChamCong(month,year);
        console.log("trang tinh luong dang nhap mang datak", Datak)

    }

    useEffect(() => {
        Xulychamcong();
            Getnhanvien();
            Getallhoadon();
            hamgopmang();
            // Getallchitiethoadon();
        }, [])
  
  const Hovernut = ()=>{
    setisToggledd(true);
  }
  const TatHovernut = ()=>{
    setisToggledd(false);
  }
  
  var Xep=true;




  const formatter = new Intl.NumberFormat('vn',{
    style: 'currency',
    currency:'VND',
   
    useGrouping: true,
    notation: 'standard'
  })
  return (
    <div>
      
      {/* <nav>
      <div className="nav_box">
      
      {Xep &&<button style={{position:'relative',right:"120px"}}  onClick={() => TatHovernut()}><i style={{color:"Azure"}} class="fa fa-arrow-circle-left"></i></button>}
      {Xep &&<button style={{position:'relative',right:"240px"}}  onClick={() => Hovernut()}><i style={{color:"Azure"}} class="fa fa-arrow-circle-right"></i></button>}
      <h1 style={{color:"Azure"}} > <b><i>Chào Mừng Đến Chi Nhánh: {Tenchinhanh}</i></b> </h1>
      <div className={styles.fixDieuHuong}>
      {Xep &&
      <section>
      {isToggledd && <DieuHuong/>}
      </section>}
      </div>
      </div>
     
    </nav> */}

      <div className={styles.modalBackgroundd}>
      <div className={styles.modalContainerr}> 
              
            
            <div className='row'>
                <div className='table-responsive' style={{borderRadius:"20px"}}>
                    <table className='table table-striped table-hover table-bordered' >
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>SDT</th>
                                <th>So luong hd</th>
                                <th>Lương</th>
                                <th>So NGay Lam</th>
                                <th>So NGay di tre</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {Manggop.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.hoten}</td>
                                    <td>{item.sdt}</td>
                                    <td>{item.SoLuongHD}</td>
                                    <td>{formatter.format(item.Tienluong)}</td>
                                    <td>{item.Ngaylam}</td>
                                    <td>{item.Ngaytre}</td>
                                    
                                  
                            
                                </tr>
                            )}
                        </tbody>
                        
                    </table>
                    <Button size='sm' variant='danger' style={{position:"relative",bottom:"10px",left:"250px"}} onClick={() => { handlepostLuong() }}>Xác Thực</Button>



                    
                </div>
            </div>
            <div className={styles.nuttt}>
            <button  onClick={() => closemodal(false)}> X </button>
            </div> 
            </div>
            
            {/* View chi tiet hoa don*/}
            <div>
                {
                    ViewShoww && <ViewXemhodon closemodal={SetViewShoww} Manghoadon={Manghoadon} IDnguoiban={id}/>
                }
            </div>

             {/* View Modal */}
             <div className='model-box-view'>
                <Modal
                    show={ViewShow}
                    onHide={hanldeViewClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>View Employee Data</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <input type="text" className='form-control' value={RowData.hoten} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="email" className='form-control' value={RowData.sdt} readOnly />
                            </div>
                            {
                                Delete && (
                                    <Button type='submit' className='btn btn-danger mt-4' onClick={handleDelete}>Delete Employee</Button>
                                )
                            }

                        </div>
                           
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={() => {hanldeViewClose(setDelete(false))}}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>

             {/* Modal for submit data to database */}
             <div className='model-box-view'>
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
            </div>



             {/* Modal for Move employee record */}
             <div className='model-box-view'>
                <Modal
                    show={ViewMove}
                    onHide={hanldeMoveClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Move Employee To</Modal.Title>
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
                            <div className='form-group'>
                                <label>Chi Nhánh</label>
                                <input type="text" className='form-control' onChange={(e) => setcn(e.target.value)} placeholder="Please enter"/>
                            </div>
                            <Button type='submit' className='btn btn-warning mt-4' onClick={handleMove}>Move Employee</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldeEditClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>



            </div>

          
      
      {/* <a>Code Chuc nang</a> */}
    </div>
  );
}

export default Trangtinluong;
