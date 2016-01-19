# ascii-hex

> Get the hexadecimal value of an ASCII character

[![Build Status](https://travis-ci.org/radiovisual/ascii-hex.svg?branch=master)](https://travis-ci.org/radiovisual/ascii-hex)


## Install

```
$ npm install --save ascii-hex
```


## Usage

```js
const hex = require('ascii-hex');

hex('A');
//=> 0x41
```


## API

### asciiHex(input)

Returns the hexadecimal value of the ASCII character

#### input

Type: `string`

The ASCII character you want to convert to hex.

## Related

- [ascii-decimal](https://github.com/radiovisual/ascii-decimal) Get the decimal value of an ASCII character

## License

MIT © [Michael Wuergler](http://numetriclabs.com)
