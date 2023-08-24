import express from "express"
import Subscriber from "../models/subscriber.js"

const router = express.Router()

router.get('/', async (req,res) => {
    //res.send("hello")
    try {
        const subscribers = await Subscriber.find();
        res.json(subscribers);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
})
router.get('/:id', (req,res) => {
    res.send(req.params.id);
})
router.post('/', (req,res) => {

})
router.patch('/:id', (req,res) => {

})
router.delete('/:id', (req,res) => {

})

export default router;