const express = require('express');
const LuongRouter = express.Router();
const { ObjectId } = require('mongodb');
const { db } = require('../db')




LuongRouter.post("/", async(req, res) => {
    const VatTu = {
        Chitiet: [req.body.hoadon],

        NgayTinh: new Date(req.body.NgayBan),
        Tienphaitra: req.body.Tienphaitra,
        ChiNhanh: req.body.ChiNhanh
    };
    const result = await db.Luong.insertOne(VatTu);

    if (!result) {
        res.json({
            status: "FAILED",
            message: "Không thêm được sản phẩm"
        })
    } else {
        res.json({
            status: "SUCCESS",
            message: "Thêm sản phẩm thành công",
            data: VatTu
        })
    }
})


LuongRouter.get("/", async(req, res) => {
    const chinhanh = req.params.chinhanh;
    const result = await db.Luong.find({
        // ChiNhanh: chinhanh,
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

LuongRouter.get("/c/:chinhanh", async(req, res) => {
    const chinhanh = req.params.chinhanh;
    const result = await db.Luong.find({
        ChiNhanh: chinhanh,
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
LuongRouter.delete("/:id", async(req, res) => {
    const id = req.params.id;
    const body = req.body;
    const filter = {
        _id: new ObjectId(id)
    }
    const updateDoc = {
        $set: body
    }
    const result = await db.Luong.deleteOne(filter);

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

module.exports = LuongRouter;