
import { IStripController } from "./IStripController";
import { Dotstar } from "dotstar";

const DOT = require("dotstar");
const SPI = require("pi-spi");

/**
 * Controller that takes all calls to a Dotstar-Strip and forwards them to the Library
 */
export default class DotstarStripController implements IStripController {

  dotstar: Dotstar;
  spi;

  /**
   * Controller that takes all calls to a Dotstar-Strip and forwards them to the Library
   * @param params Parameters passed to main application
   */
  constructor(params: Array<string>) {

    if (!params["spi"]) {
      const err : Error = new Error(`When using DotstarStripController you need to specify a "spi" parameter pointing to the SPI-Device and Bus you want to use`);
      err["type"] = "parameter";
      throw err;
    }

    this.spi = SPI.initialize(params["spi"]);
    this.dotstar = new DOT.Dotstar(this.spi, {length: params["ledcount"]});

    console.log('DotstarStripController initialized at: %s', params["spi"]);
  }

  /**
   * Sets the whole strip
   * @param r Red
   * @param g Green
   * @param b Blue
   * @param a Alpha
   */
  all(r: number, g: number, b: number, a: number): void {
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
  set(led: number, r: number, g: number, b: number, a: number): void {
    this.dotstar.set(led, r, g, b, a);
  }
  /**
   * Applies changes to LED-Strip
   */
  sync(): void {
    this.dotstar.sync();
  }
  /**
   * Clears color buffer (all off)
   */
  clear(): void {
    this.dotstar.clear();
  }
  /**
   * Clears the LED-Strip while retaining the colors in buffer
   * kinda like pausing the LEDs
   */
  off(): void {
    this.dotstar.off();
  }
  /**
   * Shuts down all Strip-Controller relevant connections like spi
   */
  shutdown(callback: Function): void {
    this.spi.close(callback);
  }
  /**
   * Returns the length of the LED-Strip
   * @returns {number} Length of LED-Strip
   */
  getLength(): number {
    return this.dotstar.length;
  }
}