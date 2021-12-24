import { LINE_OFFSET_Y } from "./constants";

export class Time {
    constructor() {
        this.t = 12;
    }

    getTime(i) {
        if (this.t === 13) this.t = 1;
        const time = this.t < 10 ? `0${this.t}:00` : `${this.t}:00`;
        if (i < 12) return time + ' AM';
        return time + ' PM';
    }

    incTime() {
        this.t++;
    }
}

export function getLocFromTime(time) {
    const [hh, mm] = time.split(":").map(Number);
    const offset = (mm / 60) * LINE_OFFSET_Y;
    return (hh * LINE_OFFSET_Y) + offset;
}

export function timeFormat(time) {
    let [hh, mm] = time.split(":").map(Number);
    const meridian = hh < 12 ? 'AM' : 'PM'
    if (mm < 10) mm = mm + '0';
    if (hh > 12) hh -= 12;
    if (hh < 10) hh = '0' + hh;
    const t = `${hh}:${mm} ${meridian}`;
    return t;
}