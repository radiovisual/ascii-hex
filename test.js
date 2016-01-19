import test from 'ava';
import fn from './index.js';

test('should convert ascii to hex', t => {
	t.is(fn('A'), '0x41');
	t.is(fn('O'), '0x4f');
	t.is(fn('+'), '0x2b');
});
