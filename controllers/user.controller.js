const {request, response } = require('express');


const userGet = (req = request, res = response)=>{
    const {apellido, edad} = req.query;
    res.json({
        id: 1,
        nombre: 'seba',
        apellido,
        edad
    })
}
const userPost = (req, res = response)=>{

    const {apellido, edad} = req.body;
    res.json({
        id: 1,
        nombre: 'seba',
        apellido,
        edad
    })
}
const userPut = (req = request, res = response)=>{
    const { edad } = req.params
    res.json({
        id: 1,
        nombre: 'seba',
        edad
    })
}
const userPatch = (req, res = response)=>{
    res.json({
        id: 1,
        nombre: 'seba'
    })
}
const userDelete = (req, res = response)=>{
    res.json({
        id: 1,
        nombre: 'seba'
    })
}

module.exports = {
    userGet,
    userPost,
    userPut,
    userPatch,
    userDelete
}