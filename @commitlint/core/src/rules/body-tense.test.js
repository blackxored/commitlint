import test from 'ava';
import parse from '../library/parse';
import bodyTense from './body-tense';

test('returns deprecation warning', async t => {
	const actual = bodyTense(await parse('chore: \n'), 'always', [
		'present-imperative'
	]);
	t.deepEqual(actual, [
		false,
		'rules.body-tense is deprecated. Received [always, [present-imperative]]'
	]);
});
