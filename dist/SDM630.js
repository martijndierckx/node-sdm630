"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDM630 = void 0;
const ModBusConnection_1 = require("./ModBusConnection");
class SDM630 {
    /**
     * Do not create an SDM630 object directly. Instead use the static 'connect' method.
     */
    constructor() { }
    /**
     * Creates a connection to the Modbus TCP gateway and the SDM630
     * @param {Config} opts Configuration
     * @param {string} opts.host Hostname or IP address of the Modbus TCP gateway
     * @param {number} [opts.ports=502] Port of the Modbus TCP gateway
     * @param {number} [opts.slaveId=1] The Modbus slave ID to which we need to connect.
     */
    static async connect(opts) {
        const sdm630 = new SDM630();
        // Connect to modbus
        sdm630.modbusConn = await ModBusConnection_1.ModbusConnection.connect({
            host: opts.host,
            port: opts.port ?? 502,
            slaveId: opts.slaveId ?? 1
        });
        return sdm630;
    }
    /**
     * Disconnects the Modbus gateway & SDM630
     */
    async disconnect() {
        await this.modbusConn.disconnect();
    }
    /**
     * Retrieves all values from the SDM630
     */
    async getValues() {
        // Retrieve vals (max 40 per trip = 80 registers)
        const registers = await this.modbusConn.getRegisterRanges([
            { startParam: 1, quantity: 40 },
            { startParam: 41, quantity: 13 },
            { startParam: 101, quantity: 34 },
            { startParam: 168, quantity: 23 }
        ]);
        return {
            l1: {
                V: registers.get32BitFloatVal(1),
                A: registers.get32BitFloatVal(4),
                W: registers.get32BitFloatVal(7),
                VA: registers.get32BitFloatVal(10),
                VAr: registers.get32BitFloatVal(13),
                powerFactor: registers.get32BitFloatVal(16),
                phaseAngle: registers.get32BitFloatVal(19),
                total: {
                    import: {
                        kWh: registers.get32BitFloatVal(174),
                        kVArh: registers.get32BitFloatVal(183)
                    },
                    export: {
                        kWh: registers.get32BitFloatVal(177),
                        kVArh: registers.get32BitFloatVal(186)
                    },
                    kWh: registers.get32BitFloatVal(180),
                    kVArh: registers.get32BitFloatVal(189)
                },
                demand: {
                    A: registers.get32BitFloatVal(130),
                    maxA: registers.get32BitFloatVal(133)
                },
                THD: {
                    V: registers.get32BitFloatVal(118),
                    A: registers.get32BitFloatVal(121)
                }
            },
            l2: {
                V: registers.get32BitFloatVal(2),
                A: registers.get32BitFloatVal(5),
                W: registers.get32BitFloatVal(8),
                VA: registers.get32BitFloatVal(11),
                VAr: registers.get32BitFloatVal(14),
                powerFactor: registers.get32BitFloatVal(17),
                phaseAngle: registers.get32BitFloatVal(20),
                total: {
                    import: {
                        kWh: registers.get32BitFloatVal(175),
                        kVArh: registers.get32BitFloatVal(184)
                    },
                    export: {
                        kWh: registers.get32BitFloatVal(178),
                        kVArh: registers.get32BitFloatVal(187)
                    },
                    kWh: registers.get32BitFloatVal(181),
                    kVArh: registers.get32BitFloatVal(190)
                },
                demand: {
                    A: registers.get32BitFloatVal(131),
                    maxA: registers.get32BitFloatVal(134)
                },
                THD: {
                    V: registers.get32BitFloatVal(119),
                    A: registers.get32BitFloatVal(122)
                }
            },
            l3: {
                V: registers.get32BitFloatVal(3),
                A: registers.get32BitFloatVal(6),
                W: registers.get32BitFloatVal(9),
                VA: registers.get32BitFloatVal(12),
                VAr: registers.get32BitFloatVal(15),
                powerFactor: registers.get32BitFloatVal(18),
                phaseAngle: registers.get32BitFloatVal(21),
                total: {
                    import: {
                        kWh: registers.get32BitFloatVal(176),
                        kVArh: registers.get32BitFloatVal(185)
                    },
                    export: {
                        kWh: registers.get32BitFloatVal(179),
                        kVArh: registers.get32BitFloatVal(188)
                    },
                    kWh: registers.get32BitFloatVal(182),
                    kVArh: registers.get32BitFloatVal(191)
                },
                demand: {
                    A: registers.get32BitFloatVal(132),
                    maxA: registers.get32BitFloatVal(135)
                },
                THD: {
                    V: registers.get32BitFloatVal(120),
                    A: registers.get32BitFloatVal(123)
                }
            },
            line2Line: {
                l1toL2: {
                    THD: {
                        V: registers.get32BitFloatVal(168)
                    }
                },
                l2toL3: {
                    THD: {
                        V: registers.get32BitFloatVal(169)
                    }
                },
                l3toL1: {
                    THD: {
                        V: registers.get32BitFloatVal(170)
                    }
                }
            },
            total: {
                A: registers.get32BitFloatVal(25),
                W: registers.get32BitFloatVal(27),
                VA: registers.get32BitFloatVal(29),
                VAr: registers.get32BitFloatVal(31),
                powerFactor: registers.get32BitFloatVal(32),
                phaseAngle: registers.get32BitFloatVal(34),
                import: {
                    kWh: registers.get32BitFloatVal(37),
                    kVArh: registers.get32BitFloatVal(39)
                },
                export: {
                    kWh: registers.get32BitFloatVal(38),
                    kVArh: registers.get32BitFloatVal(40)
                },
                kWh: registers.get32BitFloatVal(172),
                kVArh: registers.get32BitFloatVal(173),
                kVAh: registers.get32BitFloatVal(41),
                Ah: registers.get32BitFloatVal(42),
                demand: {
                    W: registers.get32BitFloatVal(43),
                    maxW: registers.get32BitFloatVal(44),
                    VA: registers.get32BitFloatVal(51),
                    maxVA: registers.get32BitFloatVal(52)
                }
            },
            average: {
                V: registers.get32BitFloatVal(22),
                A: registers.get32BitFloatVal(24),
                line2Line: {
                    V: registers.get32BitFloatVal(104),
                    THD: {
                        V: registers.get32BitFloatVal(171)
                    }
                },
                THD: {
                    V: registers.get32BitFloatVal(125)
                }
            },
            neutral: {
                A: registers.get32BitFloatVal(113),
                demand: {
                    A: registers.get32BitFloatVal(53),
                    maxA: registers.get32BitFloatVal(54)
                }
            },
            frequency: registers.get32BitFloatVal(36)
        };
    }
}
exports.SDM630 = SDM630;
//# sourceMappingURL=SDM630.js.map