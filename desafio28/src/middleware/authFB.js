import passport from 'passport';
import { UserModel } from '../models/user';
import Config from '../config/config';
import {
  VerifyFunction,
  StrategyOption,
  Strategy as FaceBookStrategy,
} from 'passport-facebook';

const facebookArgv = process.argv.slice(2);

const strategyOptions = {
  clientID: Config.FACEBOOK_APP_ID,
  clientSecret: Config.FACEBOOK_APP_SECRET,
  callbackURL: 'http://localhost:8080/auth/facebook/callback',
  profileFields: ['id', 'displayName', 'photos', 'emails'],
};

const loginFunc = async (
  accessToken,
  refreshToken,
  profile,
  done
) => {
  console.log('SALIO TODO BIEN');
  // console.log(accessToken);
  // console.log(refreshToken);
  console.log(profile);
  return done(null, profile);
};

passport.use(new FaceBookStrategy(strategyOptions, loginFunc));

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

export const isLoggedIn = (req, res, done) => {
  if (!req.isAuthenticated())
    return res.status(401).json({ msg: 'Unathorized' });

  done();
};

export default passport;

