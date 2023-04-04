const express = require('express');
const PhieuChamCongRouter = express.Router();
const { ObjectId } = require('mongodb');
const { db } = require('../db')


PhieuChamCongRouter.post("/", async(req, res) => {
    const NhanVien = {
        Idchu: req.body.Idchu,
        SoNgayLam: req.body.SoNgayLam,
        SoNgayTre: req.body.SoNgayTre,
        Thang: req.body.Thang,
        Nam: req.body.Nam
    };
    const result = await db.PhieuChamCong.insertOne(NhanVien);

    if (!result) {
        res.json({
            status: "FAILED",
            message: "Không thêm được nhân viên"
        })
    } else {
        res.json({
            status: "SUCCESS",
            message: "Thêm nhân viên thành công",
            data: NhanVien
        })
    }
})

PhieuChamCongRouter.get("/pck/:id/:thang/:nam", async(req, res) => {
    const id = req.params.id;
    const thang = req.params.thang;
    const nam = req.params.nam;
    const result = await db.PhieuChamCong.find({

        Idchu: id,
        Thang: thang,
        Nam: nam
    }).toArray();

    if (!result) {
        res.json({
            status: "FAILED",
            message: "Không có dữ liệu"
        })
    } else {
        res.json({
            status: "SUCCESS",
            message: "Lấy được dữ liệu",
            data: result
        })
    }
})



PhieuChamCongRouter.get("/pckhanh/:thang/:nam", async(req, res) => {

    const thang = req.params.thang;
    const nam = req.params.nam;
    const result = await db.PhieuChamCong.find({


        Thang: thang,
        Nam: nam
    }).toArray();

    if (!result) {
        res.json({
            status: "FAILED",
            message: "Không có dữ liệu"
        })
    } else {
        res.json({
            status: "SUCCESS",
            message: "Lấy được dữ liệu",
            data: result
        })
    }
})

PhieuChamCongRouter.put("/pckk/:id", async(req, res) => {
    const id = req.params.id;
    // const thang = req.params.thang;
    // const nam = req.params.nam;
    const body = req.body;
    const filter = {
        // _id: new ObjectId(id)
        Idchu: id,
    }
    const updateDoc = {
        $set: {
            // Idchu: req.body.Idchu,
            SoNgayLam: req.body.SoNgayLam,
            SoNgayTre: req.body.SoNgayTre,
            // Thang: req.body.Thang,
            // Nam: req.body.Nam
        }
    }
    const result = await db.PhieuChamCong.updateOne(filter, updateDoc);

    if (!result) {
        res.json({
            status: "FAILED",
            message: "Không có dữ liệu"
        })
    } else {
        res.json({
            status: "SUCCESS",
            message: "Lấy được dữ liệu",
            data: result
        })
    }
})



// ThongBaoRouter.delete("/:id", async(req, res) => {
//     const id = req.params.id;
//     const body = req.body;
//     const filter = {
//         _id: new ObjectId(id)
//     }
//     const updateDoc = {
//         $set: body
//     }
//     const result = await db.ThongBao.deleteOne(filter);

//     if (!result) {
//         res.json({
//             status: "FAILED",
//             message: "Không có dữ liệu"
//         })
//     } else {
//         res.json({
//             status: "SUCCESS",
//             message: "Lấy được dữ liệu",
//             data: result
//         })
//     }
// })
module.exports = PhieuChamCongRouter;