import express from 'express';
import passport from '../middleware/auth';

const router = express.Router();

router.post('/', passport.authenticate('signup'), function (req, res) {
    res.json({msg:'ok', user:req.body.user});
});
 
export default router;
