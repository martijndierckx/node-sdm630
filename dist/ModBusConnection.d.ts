import { ModbusRegisters } from './ModBusRegisters';
export declare class ModbusConnection {
    private socket;
    private conn;
    static connect(config: {
        port: number;
        host: string;
        slaveId: number;
    }): Promise<ModbusConnection>;
    disconnect(): Promise<void>;
    get isConnected(): boolean;
    getRegister(address: number): Promise<number>;
    getRegisterRanges(ranges: {
        startParam: number;
        quantity: number;
    }[]): Promise<ModbusRegisters>;
    getRegisterRange(startParam: number, quantity: number): Promise<{
        [address: number]: number;
    }>;
}
