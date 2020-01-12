//const express = require('express')
const router = express.Router()
import db from '../db'
import { findAll, findById, create, destroy } from '../db/models/students'

router.get('/', async (req,res,next) => {
    await findAll()
    .then(response => res.send(response))
    .catch(next)
})

router.get('/:studentId', async(req,res,next) => {
    await findById(req.params.studentId)
    .then(response => res.json(response))
    .catch(next)
})

router.post('/', async(req,res,next)=> {
    create(req.body)
    .then(response=> res.json(response))
    .catch(next)
})
router.delete('/:studentId', (req,res,next) => {
    destroy({
        where: {
            id:req.params.studentId
        }
    }).then(()=> {
        console.log('student is gone')
    })
})

export default router