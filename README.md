# SDM630 Modbus TCP

[![npm](https://badgen.net/npm/v/sdm630-modbus-tcp)](https://www.npmjs.com/package/sdm630-modbus-tcp)

A nodejs package which allows reading values from an Eastron SDM630 over a Modbus TCP gateway.

## Install

`npm i --save sdm630-modbus-tcp`

## Example

```javascript
import SDM630 from './src';

const sdm630 = await SDM630.connect({ host: '192.168.1.100' });
const values = await sdm630.getValues();

console.log(values);

await sdm630.disconnect();
```

## Typescript & IntelliSense

Use a proper code editor like Visual Studio Code which will help you with IntelliSense & inline documentation.

## Hardware requirements

Requires a Modbus TCP connection to your SDM630.
If you are in the market for a cheap Modbus TCP gateway, have a look at the Protoss PE11/PW11:
https://www.aliexpress.com/item/4001292376481.html

In theory, a direct RS485 connection should also be feasible to implement. You are welcome to contribute it in the [jsmodbus](https://github.com/Cloud-Automation/node-modbus) dependency :-)

## Modbus gateway configuration

### Serial port settings

Make sure you setup the same baud rate on both the SDM630 and your Modbus TCP gateway:

- Baud rate
- Data bits
- Stop bits
- Parity

The PE11/PW11 offers some other settings as well on the 'serial port' side. These can be left default:

- Buffer size: 512
- Gap time: 50
- Flow control: Disable
- CLI: disable

### Communication settings

- Type: TCP
- Port: 502 (if you set a different port, make sure to configure it in the settings of this package)

## Notice

This package is provided as a small hobby project. Once everything is up and running in my setup at home, my motivation to maintain this repo might drop, so contributions are very welcome!
