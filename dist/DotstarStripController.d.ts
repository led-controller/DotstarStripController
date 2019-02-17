import { IStripController } from "./IStripController";
import { Dotstar } from "dotstar";
/**
 * Controller that takes all calls to a Dotstar-Strip and forwards them to the Library
 */
export default class DotstarStripController implements IStripController {
    dotstar: Dotstar;
    spi: any;
    /**
     * Controller that takes all calls to a Dotstar-Strip and forwards them to the Library
     * @param params Parameters passed to main application
     */
    constructor(params: Array<string>);
    /**
     * Sets the whole strip
     * @param r Red
     * @param g Green
     * @param b Blue
     * @param a Alpha
     */
    all(r: number, g: number, b: number, a: number): void;
    /**
     * Sets a specific LED
     * @param led Index of LED
     * @param r Red
     * @param g Green
     * @param b Blue
     * @param a Alpha
     */
    set(led: number, r: number, g: number, b: number, a: number): void;
    /**
     * Applies changes to LED-Strip
     */
    sync(): void;
    /**
     * Clears color buffer (all off)
     */
    clear(): void;
    /**
     * Clears the LED-Strip while retaining the colors in buffer
     * kinda like pausing the LEDs
     */
    off(): void;
    /**
     * Shuts down all Strip-Controller relevant connections like spi
     */
    shutdown(): void;
    /**
     * Returns the length of the LED-Strip
     * @returns {number} Length of LED-Strip
     */
    getLength(): number;
}
