const express = require('express');
const PhieuDKChuyenRouter = express.Router();
const { ObjectId } = require('mongodb');
const { db } = require('../db')




PhieuDKChuyenRouter.post("/", async(req, res) => {
    const VatTu = {
        SanPham: [req.body.hoadon],
        // NgayTinh: new Date(req.body.NgayBan)
        ChiNhanhGoiYeuCau: req.body.Tenchinhanh

    };
    const result = await db.PhieuDKChuyen.insertOne(VatTu);

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


PhieuDKChuyenRouter.get("/", async(req, res) => {
    const chinhanh = req.params.chinhanh;
    const result = await db.PhieuDKChuyen.find({
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


PhieuDKChuyenRouter.delete("/:id", async(req, res) => {
    const id = req.params.id;
    const body = req.body;
    const filter = {
        _id: new ObjectId(id)
    }
    const updateDoc = {
        $set: body
    }
    const result = await db.PhieuDKChuyen.deleteOne(filter);

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

module.exports = PhieuDKChuyenRouter;