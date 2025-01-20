// export class CircleThreader {
//     constructor(svg: SVGElement);
//     cleanUp: () => void;
//     toggle: () => void;
//     stop: () => void;
//     mute: () => void;
//     unmute: () => void;
// }

export as namespace Threader;
/*~ This declaration specifies that the class constructor function
 *~ is the exported object from the file
 */
export = CircleThreader;
/*~ Write your module's methods and properties in this class */
declare class CircleThreader {
    constructor(svg: SVGElement);
    cleanUp: () => void;
    toggle: () => void;
    stop: () => void;
    mute: () => void;
    unmute: () => void;
}
