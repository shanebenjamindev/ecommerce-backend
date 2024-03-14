const TypeService = require('../services/TypeService')

const createType = async (req, res) => {
    try {
        const { name } = req.body
        if (!name) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await TypeService.createType(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateType = async (req, res) => {
    try {
        const TypeId = req.params.id
        const data = req.body
        if (!TypeId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The TypeId is required'
            })
        }
        const response = await TypeService.updateType(TypeId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteType = async (req, res) => {
    try {
        const TypeId = req.params.id
        if (!TypeId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The TypeId is required'
            })
        }
        const response = await TypeService.deleteType(TypeId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createType,
    updateType,
    deleteType,
}
