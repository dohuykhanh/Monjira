import React, {useEffect, useState} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import styles from "./BanChay.module.css"
import axios from "axios";
const BanChay=({Data,Manghoadon,DataTenhienthi,DataSolieuhienthi}) =>{
  // const [Data, setData] = useState([]); 
  // const [DataSLvattu, setSLvattu] = useState([]); 
  // const [Data4, setData4] = useState([]); 
  // const [Data5, setData5] = useState([]); 
  // const [DataTenhienthi, setDataTenhienthi] = useState([]); 
  // const [DataSolieuhienthi, setDataSolieuhienthi] = useState([]); 




  // console.log("ben rong DATA banchay",Data)
  ChartJS.register(ArcElement, Tooltip, Legend);



        //     const handleclickgiohang = (item) => {
  
        //       if (DataSLvattu.indexOf(item) !== -1) return;
        //       DataSLvattu.push(item);
        //       // setCart([...cart, item])
            
        //     };




        //     const FilterArr = () => {
        //       for(let i = 0; i <Data.length; i++){
        //         let a=Data[i].MaVT;
               
        //         console.log("ben rong if banchay",a)
        //         handleclickgiohang(a);
         

              
               
        //       }

        //     }


        //     const handlethemphantuhoadon = (item) => {
  
        //       if (Data4.indexOf(item) !== -1) return;
        //       Data4.push(item);
        //       // setCart([...cart, item])
            
        //     };


        //     const handlethemphantuhoadon1 = (item) => {
  
        //       if (Data5.indexOf(item) !== -1) return;
        //       Data5.push(item);
        //       // setCart([...cart, item])
            
        //     };



        //     //them mag ten;
        //     const Cachthemten = (item) => {
  
        //       if (DataTenhienthi.indexOf(item) !== -1) return;
        //       DataTenhienthi.push(item);
        //       // setCart([...cart, item])
            
        //     };

        // const SearchHD=()=> {
        //   for(let h=0; h< DataSLvattu.length; h++){
        //     console.log("vao if MANG hoa don banchay")
        //     for(let k=0; k< Manghoadon.length; k++){
        //       let b=Manghoadon[k].SanPham
        //       for(let g=0; g< b.length;g++){
        //         let c=b[g];
        //         for(let i=0; i< c.length;i++){
        //           handlethemphantuhoadon(c[i]);
        //          //xong da lay dc cac sp trong hoa don
        //         }
               
        //       }
             
             
        //     }



            
      
        //   }
        // }


        // let soluongbandc=0;
        // let Tensanpham="";
        
        // const Loadxong = ()=>{

        //   for(let h=0; h< DataSLvattu.length; h++){
     

        //   for(let j=0; j< Data4.length;j++){


            
        //     console.log("nat1",DataSLvattu[h])
        //     console.log("nat2",Data4[j].MaVT)
           
        //     if(DataSLvattu[h]===Data4[j].MaVT){
        //       let kk = parseInt(Data4[j].SoLuong, 10)
        //       soluongbandc=soluongbandc+kk;
        //       Tensanpham=Data4[j].TenVatTu;
             
        //     }

            
        
        //   }

        //   let item={
        //       _id: DataSLvattu[h],
        //       TenVatTu: Tensanpham,
        //       Soluongbanduoc: soluongbandc

        //     }
        //     Cachthemten(Tensanpham);
        //     handlethemphantuhoadon1(item);
        //   console.log("so luong ban dc",soluongbandc)
        //   soluongbandc=0;
        //  Tensanpham="";
        // }


        // console.log("xong ban chay ", Data5)
        // }
            useEffect(() => {
              // FilterArr();
              // SearchHD();
      
          }, [])    
          
          // console.log("Gia tri gần nhất", XLC)
          // console.log("trang bán chayh ", DataSLvattu)
          // console.log("mang hoa don khanh ban chay ", Data4)
          // console.log("xong ban chay ", Data5)
          // console.log("hien thi ten  ", DataTenhienthi)
  return (
    <>
    <React.Fragment>
    {/* <button  onClick={() => Loadxong()}> xem </button> */}
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6' style={{position:"relative",left:"300px"}}>
        <Pie 
       
        data={{
          labels: DataTenhienthi,
          datasets: [
            {
              label: '# of Votes',
              data: DataSolieuhienthi,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          responsive:true,
        }}
        />
          </div>
        </div>
      </div>
    </React.Fragment>
    </>
  );
}

export default BanChay;
