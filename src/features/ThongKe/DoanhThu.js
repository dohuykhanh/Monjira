import React,  { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap'
import axios from "axios";
import styles from "./DoanhThu.module.css"

import { useNavigate } from "react-router-dom";
// import ViewXemhodon from "./ViewXemHoaDon"


// import {isToggled} from'../../features/ChiNhanh/ChiNhanh'
const DoanhThu = () => {


  const navigate = useNavigate();
  const [isToggledd, setisToggledd] =useState(false);
  
//   const [Chitiethoadon, setChitiethoadon]= useState([]);
  
  const [Data, setData] = useState([]);
  const [RowData, SetRowData] = useState([])

  const [ViewShow, SetViewShow] = useState(false)
  const [ViewShoww, SetViewShoww] = useState(false)
  const [ThangDT, setThangDT] = useState("")
  const [NamDT, setNamDT] = useState("")

  const [ChitietLuongNV, setChitietLuongNV] = useState([]);
  const [Tientru, setTientru] = useState([]);
  const [Tientru1, setTientru1] = useState([]);
 

 

  


const [Manghoadon, setManghoadon]= useState([])
// const [Mangdoanhthu, setMangdoanhthu]= useState([])


var Chitiethoadon=[];
const setChitiethoadon = (item)=> {
    Chitiethoadon.push(item);
}



var Manggop=[]

  var Tenchinhanh= localStorage.getItem("TenChiNhanh");
  console.log("chinhanh",Tenchinhanh)
  var ChiNhanh=Tenchinhanh;





// nay laf dong 266 copy len la xongg
let SLCHINHANH = localStorage.getItem('SLCHINHANH');
// let SLCHINHANH=6;







const [ChitietLuongQL, setChitietLuongQL] = useState([]);
const handleclickKHANH1 = (item) => {

    if (ChitietLuongQL.indexOf(item) === -1) {
      ChitietLuongQL.push(item);
    }else{ return; }
    
  
    // setCart([...cart, item])
  
  };
  
  
  
  
  
    const GetallchitietLuong1 = async (ThangDT, NamDT) => {
                
      const url = `http://localhost:5001/LuongQL`
      axios.get(url)
                .then(response => {
                    const result = response.data;
                    const { status, message, data } = result;
                    if (status !== 'SUCCESS') {
                        alert(message, status)
                    }
                    else {
                      // setChitietLuongNV(data)
                      // setTientru(data)
                       
                      //   Chitiethoadon.map(x =>x.map(y=> console.log("y la sdfd", y)))
  
  
  
                      for(let i = 0 ; i<data.length; i++){
                        let a = new Date(data[i].NgayTinh).getMonth() + 1;
                        let b = new Date(data[i].NgayTinh).getFullYear();
                        
                        console.log("trang doanh thu ngya ", a);
                        console.log("trang doanh thu ngya khanh", b);
                        if(a==ThangDT && b==NamDT){
                            setTientru(data[i].Tienphaitra);
                            let nhat=data[i].Chitiet;
                            let nhat1=nhat[0];
                            //   for(let j = 0; j<=SLCHINHANH -1; j++){
  
                                
                            //       let item={
                                  
                                  
                            //         Tienphaitra: nhat1[0].Tienluong,
                                
          
                            //       }
                            //       handleclickKHANH1(item);
                                
                            //   }
                            nhat1.map((item) => {

                                let it={
                           
                           Chinhanh: item.ChiNhanh,
                             Tienphaitra: item.Tienluong,
                         
   
                           }
                           handleclickKHANH1(it);

                     })
                            
    
                            
                            
                          
                            // setmoney("")
                            // console.log("oi troi oi", nhat1[0].Tienluong);
                           
                         
                        }
  
  
  
                        console.log("oi troi oi", ChitietLuongQL);
                      }
  
  
  
                    }
                })
                .catch(err => {
                    console.log(err)
                })
  
              
              }















const handleclickKHANH = (item) => {
    
  if (ChitietLuongNV.indexOf(item) === -1) {
    ChitietLuongNV.push(item);
  }else{ return; }
  

  // setCart([...cart, item])

};





  const GetallchitietLuong = async () => {
              
    const url = `http://localhost:5001/Luong`
    axios.get(url)
              .then(response => {
                  const result = response.data;
                  const { status, message, data } = result;
                  if (status !== 'SUCCESS') {
                      alert(message, status)
                  }
                  else {
                    // setChitietLuongNV(data)
                     
                    //   Chitiethoadon.map(x =>x.map(y=> console.log("y la sdfd", y)))



                    for(let i = 0 ; i<data.length; i++){
                      let a = new Date(data[i].NgayTinh).getMonth() + 1;
                      let b = new Date(data[i].NgayTinh).getFullYear();
                      
                      console.log("trang doanh thu ngya do huy khanh ", ThangDT);
                      console.log("trang doanh thu ngya khanh", b);
                      if(a===parseInt(ThangDT) && b=== parseInt(NamDT)){
                        setTientru1(data[i].Tienphaitra);
                        GetallchitietLuong1(ThangDT, NamDT);

                        data.map((item) => {

                          let it={
                     
                            ChiNhanh: item.ChiNhanh,
                            Tienphaitra: item.Tienphaitra,
                   

                     }
                     handleclickKHANH(it);

               })
                            // for(let j = 1; j<=SLCHINHANH; j++){

                              
                            //     let item={
                                
                            //       ChiNhanh: data[j].ChiNhanh,
                            //       Tienphaitra: data[j].Tienphaitra,
                              
        
                            //     }
                            //     handleclickKHANH(item);
                              
                            // }
                          
  
                          
                          
                        
                          // setmoney("")
                         
                       
                      }



                      console.log("oi troi oi 888", ChitietLuongNV);
                    }



                  }

                  
              })
              .catch(err => {
                  console.log(err)
              })

            
            }

















  const handleclickNHAT = (item) => {
    
    if (Manghoadon.indexOf(item) === -1) {
      Manghoadon.push(item);
    }else{ return; }
    

    // setCart([...cart, item])
  
  };


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
                    console.log("trang doanh thu ngya 1 ", data);
                    Manghoadon.length=0;
                    
                    for(let i = 0 ; i<data.length; i++){
                      let a = new Date(data[i].NgayBan).getMonth() + 1;
                      let b = new Date(data[i].NgayBan).getFullYear();
                      
                      console.log("trang doanh thu ngya ", a);
                      console.log("trang doanh thu ngya khanh", b);
                      if(a==ThangDT && b==NamDT){
                    
                          let item={
                            _id: data[i]._id,
                            SanPham: data[i].SanPham,
                            NgayBan: data[i].NgayBan,
                            ChiNhanh: data[i].ChiNhanh,
                            Gia: data[i].Gia,
                            NguoiBan: data[i].NguoiBan
  
                          }
  
                          
                          handleclickNHAT(item);
                        
                          // setmoney("")
                         
                       
                      }
                    }
                    // setManghoadon(data)
                    
                   
                    Hamhienthidoanthu();
                    
                      console.log(data)
                  }
              })
              .catch(err => {
                  console.log(err)
              })
            }





          


       
    

    

    useEffect(() => {
      GetallchitietLuong1();
            // Getallhoadon();
           
            // Getallchitiethoadon();
        }, [])
  
  const Hovernut = ()=>{
    setisToggledd(true);
  }
  const TatHovernut = ()=>{
    setisToggledd(false);
  }



  const [Mangdoanhthu, setMangdoanhthu]= useState([]);
  const [MangSum, setMangSum]= useState([]);
  // let SLCHINHANH = localStorage.getItem('SLCHINHANH');
  //  SLCHINHANH=5;
  console.log('trang doan thu hin sl chi nhan', SLCHINHANH);


  // const Getallhoadon = async () => {

  //     const url = `http://localhost:5001/HoaDon`
  //     axios.get(url)
  //               .then(response => {
  //                   const result = response.data;
  //                   const { status, message, data } = result;
  //                   if (status !== 'SUCCESS') {
  //                       alert(message, status)
  //                   }
  //                   else {
  //                     setManghoadon(data)
  
                      
  //                       console.log("ben trang doanthu", data)
  //                   }
  //               })
  //               .catch(err => {
  //                   console.log(err)
  //               })

               
  //             }
 let j=[1,2,3];
 console.log("trang doan thu nhat", j.length)
  let soluonghoadonn=0;
  let Tongthunhap=0;
  let Tongtongdoanhthu=0;
  let TongtongdoanhthuNV=0;
  let TientraNV=0;
  let TongTientraNV=0;
  let TientraQL=0;
  let TongTientraQL=0;
  const [money,setmoney] = useState("");
  const [money1,setmoney1] = useState("");
  
  console.log("trang doan thu nhat 1", Manghoadon.length)
  const Hamhienthidoanthu= ()=>{

    Mangdoanhthu.length=0;
    
    setTientru("");
    
      console.log("da chay len dc");

      // let itemm={
      //     _id: Data[i]._id,
      //     ChiNhanh: Data[i].ChiNhanh,
      //         SoLuongHD: soluonghoadon,

      // }
      
      for(let i=1; i<= SLCHINHANH; i++){
          soluonghoadonn=0;
 Tongthunhap=0;
 TientraNV=0;
 TongTientraNV=0;
 TientraQL=0;
  TongTientraQL=0;

         
          for(let j=0; j< Manghoadon.length ; j ++){
              console.log("vong for in chinhanh doanhthu", Manghoadon[j].ChiNhanh);
              if(Manghoadon[j].ChiNhanh==i){
                  soluonghoadonn=soluonghoadonn+1;
                  Tongthunhap = Tongthunhap + Manghoadon[j].Gia;
                  Tongtongdoanhthu= Tongtongdoanhthu+Manghoadon[j].Gia;
                  // TientraNV= ChitietLuongNV[i].Tienphaitra;
                  // TongtongdoanhthuNV=Tongtongdoanhthu - TientraNV;
                  TongTientraNV= TongTientraNV + ChitietLuongNV[i].Tienphaitra;
                  TongtongdoanhthuNV=Tongtongdoanhthu - TongTientraNV;
                  
              }
          }

    //       let itemm={
    //       // _id: Data[i]._id,
    //       ChiNhanh: Data[i].ChiNhanh,
    //           SoLuongHD: soluonghoadon,

    //   }

              console.log("chinhanh doanhthu", Manghoadon);
              console.log("tongthunhan", soluonghoadonn);
              console.log("tongthunhan", Tongthunhap);
              console.log("tongdoanhthu12346", Tongtongdoanhthu);
              
             
              
              let itemm={
                _id: i,
                ChiNhanh: i,
                    SoLuongHD: soluonghoadonn,
                    Tongthunhap: Tongthunhap,
                    LuongNV: TientraNV,
                    LuongQL: TientraQL,
                   
      
            }
            let khanh={
                Tongdoanhthu: Tongtongdoanhthu
            }
         
            Mangdoanhthu.push(itemm);
            MangSum.push(khanh);
            // TongtongdoanhthuNV=Tongtongdoanhthu - TongTientraNV;
            setmoney(Tongtongdoanhthu);
            setmoney1(TongtongdoanhthuNV);
            



      }
     
      okila();
      ChitietLuongQL.length=0;
  }

  const okila = ()=> {
    // console.log("nhat ta ta day", Mangdoanhthu);
    // console.log("nhat ta ta day1", Mangdoanhthu[[1]]);




    // let a = ChitietLuongQL.length/2;
    // console.log("nhat ta ta day", a);
    // for (let i=0; i<a; i++){
    //   console.log("nhat ta ta day 1", Mangdoanhthu[i].LuongQL)
    //   Mangdoanhthu[i].LuongQL=ChitietLuongQL.Tienphaitra;
    //   console.log("nhat ta ta day", Mangdoanhthu[i].LuongQL)

    // }


    Mangdoanhthu.map((item) => {

//  console.log("khanh ta day", item.LuongQL)
 
    console.log("nhat ta ta day999",ChitietLuongQL[0].Tienphaitra);
    for (let i=0; i<ChitietLuongQL.length; i++){
      // console.log("nhat ta ta day99 iiiii", i)
      console.log("khanh ta ta day99", ChitietLuongQL[i].Tienphaitra)
      console.log("nhat ta ta day99", ChitietLuongQL[i].Chinhanh)
      console.log("nhat ta ta day99 iiiii", i)

    }
    
    ChitietLuongQL.map((it) => {
      if(item.ChiNhanh==it.Chinhanh){
        item.LuongQL=it.Tienphaitra;
        console.log("dai ca day", item.LuongQL)

      }

      console.log("tran ta ta day99", it.Tienphaitra)
      console.log("tran ta ta day99", it.Chinhanh)
    })

    ChitietLuongNV.map((it) => {
      if(item.ChiNhanh==it.ChiNhanh){
        item.LuongNV=it.Tienphaitra;
        // console.log("dai ca day", item.LuongQL)

      }

      // console.log("tran ta ta day99", it.Tienphaitra)
      // console.log("tran ta ta day99", it.Chinhanh)
    })
})
    
   

  }
  const handlePostShoww=() => {
    
    GetallchitietLuong();
   
    // okila();
       Getallhoadon();
      
     
     
      
  }




  
// console.log("test magn donathu ", Tongtongdoanhthu)

  





const formatter = new Intl.NumberFormat('vn',{
  style: 'currency',
  currency:'VND',
 
  useGrouping: true,
  notation: 'standard'
})
  
  return (
    <div>
      
      {/* <Button size='sm' variant='primary' onClick={() => { handlePostShoww() }}>View</Button>| */}

      <>
      <div className='col'>
      </div>
    <div className='container'>
    
      <div className='row'>
        
        <div className='col'></div>
        <div className='col'></div>
        <div className='col' style={{position:"relative" , top:"30px",color:"red"}}><h5><b><i>Tổng Doanh Thu:{formatter.format(money)} </i></b></h5></div>
        <div className='col' style={{position:"relative" , top:"30px",color:"red"}}><h5><b><i>Loi Nhuan:{formatter.format(money- Tientru - Tientru1)} </i></b></h5></div>
      </div>
    </div>
    <div className={styles.DoanhThuHoaDon}>
    <div className='row'>
                <div className='table-responsive' >
                    <div style={{cursor: "pointer"}} onClick={() => { handlePostShoww() }} >
                <h5 style={{color:"#ff2424"}}    ><b><i   >Bảng Doanh Thu:</i></b>
                
                <input  style={{border:"1px solid",borderRadius: '5px!important',position:"relative",left:"28px"}} placeholder="Nhập tháng" onChange={(e) => setThangDT(e.target.value)}></input>
                <input  style={{border:"1px solid",borderRadius: '5px!important',position:"relative",left:"35px"}} placeholder="Nhập năm " onChange={(e) => setNamDT(e.target.value)}></input>
                </h5>
                </div>

                    <table className='table table-striped table-hover table-bordered' style={{border:"solid 1px"}}>                      
                        <thead >
                            <tr style={{backgroundColor:"#ffff94"}}>
                                <th>Chi Nhánh</th>
                                <th>Tổng SL Hoá Đơn</th>
                                <th>Tổng Thu Nhập</th>
                                <th>Tien Luong NV</th>
                                <th>Tien Luong QL</th>
                                
                             
                            </tr>
                        </thead>
                        <tbody>
                            {Mangdoanhthu.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.ChiNhanh}</td>
                                    <td>{item.SoLuongHD}</td>
                                    <td>{formatter.format(item.Tongthunhap)}</td>
                                    <td>{formatter.format(item.LuongNV)}</td>
                                    <td>{formatter.format(item.LuongQL)}</td>
                                    
                                   
                                  
                                   
                                </tr>
                            )}
                        </tbody>
                    </table>



                    
                </div>
            </div>
        </div>              
    </>
      
      {/* <a>Code Chuc nang</a> */}
    </div>
  );
}

export default DoanhThu;
