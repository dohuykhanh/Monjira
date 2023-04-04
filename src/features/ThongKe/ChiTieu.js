import React,  { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap'
import axios from "axios";
import styles from './ChiTieu.module.css'

const ChiTieu=()=> {




    let SLCHINHANH=5;

    const [ChitietLuongQL, setChitietLuongQL] = useState([]);
    const handleclickKHANH1 = (item) => {
    
        if (ChitietLuongQL.indexOf(item) === -1) {
          ChitietLuongQL.push(item);
        }else{ return; }
        
      
        // setCart([...cart, item])
      
      };
      
      
      
      
      
        const GetallchitietLuong1 = async () => {
                    
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
                           
                          //   Chitiethoadon.map(x =>x.map(y=> console.log("y la sdfd", y)))
      
      
      
                          for(let i = 0 ; i<data.length; i++){
                            let a = new Date(data[i].NgayTinh).getMonth() + 1;
                            let b = new Date(data[i].NgayTinh).getFullYear();
                            
                            console.log("trang doanh thu ngya ", a);
                            console.log("trang doanh thu ngya khanh", b);
                            if(a==11 && b==2022){

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





                  useEffect(() => {
                    ChitietLuongQL.length=0;
                    GetallchitietLuong1();
                    ChitietLuongQL.length=0;
      
                    // Getallhoadon();
                   
                    // Getallchitiethoadon();
                }, [])
          
  return (
    <>
      
    <div className={styles.ChiTieuCongTy}>
  asldsalds
          
        </div>      
    </>
  );
}

export default ChiTieu;