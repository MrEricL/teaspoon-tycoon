import passport from 'passport';
import LocalStrategy from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import Bank from '../model/bank';

const localOptions = {
	usernameField: 'email',
	passwordField: 'pass',
};
const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.AUTH_SECRET,
};

passport.use(new LocalStrategy(localOptions, (email, password, done) => {
	Bank.findOne({
		attributes: ['email', 'pass', 'bankID'],
		where: {
			email: email,
		}
	}).then(user => {
		if (!user) {
			return done(null, false, 'no such user');
		}

		if (!user.comparePassword(password)) {
			done(null, false, { message: 'Incorrect email or password.' });
		} else {
			done(null, user);
		}
	})
}));

passport.use(new JwtStrategy(jwtOptions, (payload, done) => {
	Bank.findById(payload.sub)
		.then(user => {
			if (user) {
				done(null, user);
			} else {
				done(null, false);
			}
		});
}));

export function requireLoginBank(...groups) {
	return [
		passport.authenticate(['jwt', 'local'], { session: false }),
		(req, res, next) => {
			if (groups.length < 1 || (req.user && groups.includes(req.user.type))) {
				return next();
			} else {
				res.status(403).send('HERE');
			}
		}
	];
}
