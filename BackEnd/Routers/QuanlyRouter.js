const express = require('express');
const QuanLyRounter = express.Router();
const { ObjectId } = require('mongodb');
const { db } = require('../db')

// here we create our Route
QuanLyRounter.post("/", async(req, res) => {
        const QuanLy = {
            hoten: req.body.hoten,
            sdt: req.body.sdt,
            ChiNhanh: req.body.ChiNhanh,
        };
        const result = await db.QuanLy.insertOne(QuanLy);

        if (!result) {
            res.json({
                status: "FAILED",
                message: "Không thêm được nhân viên"
            })
        } else {
            res.json({
                status: "SUCCESS",
                message: "Thêm nhân viên thành công",
                data: QuanLy
            })
        }
    })
    //get the
QuanLyRounter.get("/c/:chinhanh", async(req, res) => {
    const chinhanh = req.params.chinhanh;
    const result = await db.QuanLy.find({
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




//tim ko theo j calculated


QuanLyRounter.get("/", async(req, res) => {

        const result = await db.QuanLy.find({

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
    //get the
QuanLyRounter.get("/:id", async(req, res) => {
    const id = req.params.id;
    const result = await db.QuanLy.find({
        _id: ObjectId(id),
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

//get the
QuanLyRounter.put("/:id", async(req, res) => {
    const id = req.params.id;
    const body = req.body;
    const filter = {
        _id: new ObjectId(id)
    }
    const updateDoc = {
        $set: body
    }
    const result = await db.QuanLy.updateOne(filter, updateDoc);

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


QuanLyRounter.delete("/:id", async(req, res) => {
    const id = req.params.id;
    const body = req.body;
    const filter = {
        _id: new ObjectId(id)
    }
    const updateDoc = {
        $set: body
    }
    const result = await db.QuanLy.deleteOne(filter);

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


module.exports = QuanLyRounter;