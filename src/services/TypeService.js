const Type = require("../models/TypeProduct")

const createType = (newType) => {
    return new Promise(async (resolve, reject) => {
        const { name } = newType
        try {
            const checkType = await Type.findOne({
                name: name
            })
            if (checkType !== null) {
                resolve({
                    status: 'ERR',
                    message: 'The name of Type is already'
                })
            }
            const newType = await Type.create({
                name,
            })
            if (newType) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newType
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateType = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkType = await Type.findOne({
                _id: id
            })
            if (checkType === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Type is not defined'
                })
            }

            const updatedType = await Type.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedType
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteType = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkType = await Type.findOne({
                _id: id
            })
            if (checkType === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Type is not defined'
                })
            }

            await Type.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Type success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await Type.find().sort({ createdAt: -1, updatedAt: -1 })
            resolve({
                status: 'OK',
                message: 'Success',
                data: allType,
            })
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createType,
    updateType,
    deleteType,
    getAllType
}