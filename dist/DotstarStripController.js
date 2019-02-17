"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DOT = require("dotstar");
const SPI = require("pi-spi");
/**
 * Controller that takes all calls to a Dotstar-Strip and forwards them to the Library
 */
class DotstarStripController {
    /**
     * Controller that takes all calls to a Dotstar-Strip and forwards them to the Library
     * @param params Parameters passed to main application
     */
    constructor(params) {
        if (!params["spi"]) {
            const err = new Error('"spi" not set as a parameter!');
            err["type"] = "parameter";
            throw err;
        }
        if (!params["ledcount"]) {
            const err = new Error('"ledcount" not set as a parameter!');
            err["type"] = "parameter";
            throw err;
        }
        this.spi = SPI.initialize(params["spi"]);
        this.dotstar = new DOT.Dotstar(this.spi, { length: params["ledcount"] });
    }
    /**
     * Sets the whole strip
     * @param r Red
     * @param g Green
     * @param b Blue
     * @param a Alpha
     */
    all(r, g, b, a) {
        this.dotstar.all(r, g, b, a);
    }
    /**
     * Sets a specific LED
     * @param led Index of LED
     * @param r Red
     * @param g Green
     * @param b Blue
     * @param a Alpha
     */
    set(led, r, g, b, a) {
        this.dotstar.set(led, r, g, b, a);
    }
    /**
     * Applies changes to LED-Strip
     */
    sync() {
        this.dotstar.sync();
    }
    /**
     * Clears color buffer (all off)
     */
    clear() {
        this.dotstar.clear();
    }
    /**
     * Clears the LED-Strip while retaining the colors in buffer
     * kinda like pausing the LEDs
     */
    off() {
        this.dotstar.off();
    }
    /**
     * Shuts down all Strip-Controller relevant connections like spi
     */
    shutdown() {
        this.spi.close();
    }
    /**
     * Returns the length of the LED-Strip
     * @returns {number} Length of LED-Strip
     */
    getLength() {
        return this.dotstar.length;
    }
}
exports.default = DotstarStripController;
