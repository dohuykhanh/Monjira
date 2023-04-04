import React, { useEffect, useState } from "react";
import styles from "./ThongKe.module.css";
// import { useNavigate } from "react-router-dom";
import BanChay from "./BanChay";
import DoanhThu from "./DoanhThu";
import axios from "axios";
import LichSuDieuChuyen from "./LichSuDieuChuyen";
import ChiTieu from "./ChiTieu";
const ThongKe=() => {
  const [navbarThongKe, setNavbarThongK] = useState("DoanhThu");




  const [Data, setData] = useState([]); 
  const [Manghoadon, setManghoadon]= useState([])
  const [DataSLvattu, setSLvattu] = useState([]); 
  const [Data4, setData4] = useState([]); 
  const [Data5, setData5] = useState([]); 
  const [DataTenhienthi, setDataTenhienthi] = useState([]); 
  const [DataSolieuhienthi, setDataSolieuhienthi] = useState([]); 

  const Getvattu = async () => {

    const url = `http://localhost:5001/VatTu`
    axios.get(url)
              .then(response => {
                  const result = response.data;
                  const { status, message, data } = result;
                  if (status !== 'SUCCESS') {
                      alert(message, status)
                  }
                  else {
                      setData(data)
                      console.log("banchay",data)
                    
              

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



                      












                      const handleclickgiohang = (item) => {
  
                        if (DataSLvattu.indexOf(item) !== -1) return;
                        DataSLvattu.push(item);
                        // setCart([...cart, item])
                      
                      };
          
          
          
          
                      const FilterArr = () => {
                        for(let i = 0; i <Data.length; i++){
                          let a=Data[i].MaVT;
                         
                          console.log("ben rong if banchay",a)
                          handleclickgiohang(a);
                   
          
                        
                         
                        }
          
                      }
          
          
                      const handlethemphantuhoadon = (item) => {
            
                        if (Data4.indexOf(item) !== -1) return;
                        Data4.push(item);
                        // setCart([...cart, item])
                      
                      };
          
          
                      const handlethemphantuhoadon1 = (item) => {
            
                        if (Data5.indexOf(item) !== -1) return;
                        Data5.push(item);
                        // setCart([...cart, item])
                      
                      };
          
          
          
                      //them mag ten;
                      const Cachthemten = (item) => {
            
                        if (DataTenhienthi.indexOf(item) !== -1) return;
                        DataTenhienthi.push(item);
                        // setCart([...cart, item])
                      
                      };


                      //them mag solong;
                      const Cachthemsoluong = (item) => {
            
                        if (DataSolieuhienthi.indexOf(item) !== -1) return;
                        DataSolieuhienthi.push(item);
                        // setCart([...cart, item])
                      
                      };
          
                  const SearchHD=()=> {
                    for(let h=0; h< DataSLvattu.length; h++){
                      console.log("vao if MANG hoa don banchay")
                      for(let k=0; k< Manghoadon.length; k++){
                        let b=Manghoadon[k].SanPham
                        for(let g=0; g< b.length;g++){
                          let c=b[g];
                          for(let i=0; i< c.length;i++){
                            handlethemphantuhoadon(c[i]);
                           //xong da lay dc cac sp trong hoa don
                          }
                         
                        }
                       
                       
                      }
          
          
          
                      
                
                    }
                  }
          
          
                  let soluongbandc=0;
                  let Tensanpham="";
                  
                  const Loadxong = ()=>{
          
                    for(let h=0; h< DataSLvattu.length; h++){
               
          
                    for(let j=0; j< Data4.length;j++){
          
          
                      
                      console.log("nat1",DataSLvattu[h])
                      console.log("nat2",Data4[j].MaVT)
                     
                      if(DataSLvattu[h]===Data4[j].MaVT){
                        let kk = parseInt(Data4[j].SoLuong, 10)
                        soluongbandc=soluongbandc+kk;
                        Tensanpham=Data4[j].TenVatTu;
                       
                      }
          
                      
                  
                    }
          
                    let item={
                        _id: DataSLvattu[h],
                        TenVatTu: Tensanpham,
                        Soluongbanduoc: soluongbandc
          
                      }
                      Cachthemten(Tensanpham);
                      Cachthemsoluong(soluongbandc);
                      handlethemphantuhoadon1(item);
                    console.log("so luong ban dc",soluongbandc)
                    soluongbandc=0;
                   Tensanpham="";
                  }
          
          
                  console.log("xong ban chay ", Data5)
                  }









                  const setNavbarThongKe=(item) => {
                    FilterArr();
                    SearchHD();
                    Loadxong()
                    setNavbarThongK(item);
                  }
                




            useEffect(() => {
              Getvattu();
              Getallhoadon();
              // FilterArr();
              // SearchHD();
              // Loadxong()
          
      
          }, [])    

  return (
    <React.Fragment>
      <div style={{ position: "relative" }}>
        <div className={styles.DoanhThuThongKe}>
          <div className={styles.DoanhThuThongKeLuuVet}>
            <p className={navbarThongKe === "DoanhThu" ? styles.active_Menu : ""}
              onClick={() => 
                // {navigate(`/DoanhThu`)}
                setNavbarThongKe("DoanhThu")
              }
            >
              Doanh Thu
            </p>
            <p className={navbarThongKe === "LichSuDieuChuyen" ? styles.active_Menu : ""}
              onClick={() =>
                // {navigate(`/LichSuDieuChuyen`)}
                setNavbarThongKe("LichSuDieuChuyen")
              }
            >
              Lịch Sử Điều Chuyển
            </p>
            <p className={navbarThongKe === "BanChay" ? styles.active_Menu : ""}
              onClick={() =>
                // {navigate(`/BanChay`)}
                setNavbarThongKe("BanChay")
              }
            >
              {" "}
              Bán Chạy
            </p>
            {/* <p className={navbarThongKe === "ChiTieu" ? styles.active_Menu : ""}
              onClick={() => 
                // {navigate(`/DoanhThu`)}
                setNavbarThongKe("ChiTieu")
              }
            >
              Chi Tiêu
            </p> */}
          </div>
        </div>
      </div>

      {navbarThongKe === "DoanhThu" && <DoanhThu />}

      {navbarThongKe === "LichSuDieuChuyen" && <LichSuDieuChuyen/>}

      {navbarThongKe === "BanChay" &&  <BanChay Data={Data} Manghoadon={Manghoadon} DataTenhienthi={DataTenhienthi} DataSolieuhienthi={DataSolieuhienthi}/>}
      {navbarThongKe === "ChiTieu" && <ChiTieu />}
    </React.Fragment>
  );
}

export default ThongKe;