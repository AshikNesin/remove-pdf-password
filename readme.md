# remove-pdf-password 🔓

> Remove password from your pdf easily


## Install

```
$ npm install --save remove-pdf-password
```

## Dependency

This package depends on [qpdf](http://qpdf.sourceforge.net/)

You can install this pretty much easily using the following commands

### MacOS
```sh
brew install qpdf
```

### Ubuntu
```sh
sudo apt-get install qpdf
```

## Usage

```js
const removePdfPassword = require('remove-pdf-password');

const params = {
	inputFilePath: '/Users/YourName/input.pdf',
	password: "secrect",
	outputFilePath: '/Users/YourName/output.pdf',
}

removePdfPassword(params);

```


## API

### removePdfPassword(input, [options])

#### inputFilePath

Type: `string`

Local **absolute** path to your input pdf file in which you want to remove password.

#### outputFilePath

Type: `string`

Local **absolute** path to your output pdf file in which the password will be removed.

#### password

Type: `string`

Password for your pdf

## TODO
- [ ] Check if qpdf is installed in machine
- [ ] Read input file from web (http://example.com/file.pdf)
- [ ] Handle and return success/failure state
- [ ] Convert Relative path → absolute path?

## License

MIT © [Ashik Nesin](https://ashiknesin.com)
