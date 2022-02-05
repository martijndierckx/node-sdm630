import type { SDM630Registers } from './SDM630RegistersType';
export declare type SDM630Config = {
    host: string;
    port?: number;
    slaveId?: number;
};
export declare class SDM630 {
    private modbusConn;
    /**
     * Do not create an SDM630 object directly. Instead use the static 'connect' method.
     */
    private constructor();
    /**
     * Creates a connection to the Modbus TCP gateway and the SDM630
     * @param {Config} opts Configuration
     * @param {string} opts.host Hostname or IP address of the Modbus TCP gateway
     * @param {number} [opts.ports=502] Port of the Modbus TCP gateway
     * @param {number} [opts.slaveId=1] The Modbus slave ID to which we need to connect.
     */
    static connect(opts: SDM630Config): Promise<SDM630>;
    /**
     * Disconnects the Modbus gateway & SDM630
     */
    disconnect(): Promise<void>;
    /**
     * Retrieves all values from the SDM630
     */
    getValues(): Promise<SDM630Registers>;
}
