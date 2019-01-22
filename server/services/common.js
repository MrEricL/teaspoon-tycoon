import { api as sodiumapi } from 'sodium';

export async function hashPassword(entity) {
	const password = Buffer.from(entity.pass, 'utf8');
	entity.pass = await sodiumapi.crypto_pwhash_str(
		password,
		sodiumapi.crypto_pwhash_OPSLIMIT_INTERACTIVE,
		sodiumapi.crypto_pwhash_MEMLIMIT_INTERACTIVE
	);
}

export async function comparePassword(candidatePassword) {
	// "this" is the entity
	const hashed = Buffer.from(this.password, 'utf8');
	const checkme = Buffer.from(candidatePassword, 'utf8');
	return await sodiumapi.crypto_pwhash_str_verify(hashed, checkme);
}
