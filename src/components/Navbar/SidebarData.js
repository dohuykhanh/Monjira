import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';







export const SidebarData = [
  {
    title: 'Sản Phẩm',
    path: '/VatTu',
    icon: <FaIcons.FaBookMedical />,
    cName: 'nav-text'
  },
  {
    title: 'Hoá Đơn',
    path: '/ThongKeDoanhThu',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Bán Hàng',
  //   path: '/BanHang',
  //   icon: <FaIcons.FaCartPlus />,
  //   cName: 'nav-text'
  // },
  {
    title: 'Nhân Viên',
    path: '/TungChiNhanh',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Lương',
    path: '/Trangluongnhanvien',
    icon: <AiIcons.AiFillDollarCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Đăng Xuất',
    path: '/DangNhap',
    icon: <IoIcons.IoMdArrowBack />,
    cName: 'nav-text'
  }
];



