export declare type Registers = {
    [address: number]: Uint8Array;
};
export declare class ModbusRegisters {
    registers: Registers;
    constructor(registers: Registers);
    get32BitFloatVal(param: number): number;
}
