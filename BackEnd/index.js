const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const { connectToDb, db } = require('./db');
const NhanvienRouters = require('./Routers/NhanvienRouter');
const QuanLyRouters = require('./Routers/QuanlyRouter');
const VatTuRouter = require("./Routers/VatTuRouter");
const HoaDonRouter = require("./Routers/HoaDonRouter");
const ThongBaoRouter = require("./Routers/ThongBaoRouter");
const LuongRouter = require("./Routers/LuongRouter");
const LuongQLRouter = require("./Routers/LuongQLRouter");
const PhieuChuyenRouter = require("./Routers/PhieuChuyenRouter");
const LichSuChuyenRouter = require("./Routers/LichSuChuyenRouter");
const PhieuDKChuyenRouter = require("./Routers/PhieuDKChuyenRouter");
const TinNhanRouter = require("./Routers/TinNhanRouter");
const TaiKhoanRouter = require("./Routers/TaiKhoanRouter");
const PhieuChamCongRouter = require("./Routers/PhieuChamCongRouter");
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(express.json());
app.use("/QuanLy", QuanLyRouters);
app.use("/Nhanvien", NhanvienRouters);
app.use("/VatTu", VatTuRouter);
app.use("/HoaDon", HoaDonRouter);
app.use("/ThongBao", ThongBaoRouter);
app.use("/PhieuChuyen", PhieuChuyenRouter);
app.use("/PhieuDKChuyen", PhieuDKChuyenRouter);
app.use("/TinNhan", TinNhanRouter);
app.use("/TaiKhoan", TaiKhoanRouter);
app.use("/Luong", LuongRouter);
app.use("/LuongQL", LuongQLRouter);
app.use("/LichSuChuyen", LichSuChuyenRouter);
app.use("/PhieuChamCong", PhieuChamCongRouter);
app.get('/', (req, res) => {
    res.json('Hello world')
})


app.post('/Login', async(req, res) => {
    console.log(req.body)
    const respond = await db.TaiKhoan.findOne(req.body)
    res.status(200)
    res.json(respond)
})


const port = process.env['PORT'] || 5001
app.listen(port, () => {
    console.log('App is running on port 3000', port);
    connectToDb()
})