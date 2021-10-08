import express from 'express';

const router = express.Router();

router.post('/', (request, response)=> {
    console.log(request.body.user)
})

export default router;
