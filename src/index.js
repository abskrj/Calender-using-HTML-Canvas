import {
    TEXT_OFFSET_X,
    TEXT_OFFSET_Y,
    LINE_OFFSET_X,
    LINE_OFFSET_Y,
    INIT_DRAW_X,
    INIT_DRAW_Y,
    RECT_WIDTH,
    CARD_COLOR, 
    EVENT_NAME_OFFSET_X, 
    EVENT_NAME_OFFSET_Y, 
    EVENT_TIME_OFFSET_X, 
    EVENT_TIME_OFFSET_Y,
    testData
} from './constants';
import { getLocFromTime, Time, timeFormat } from './time';

const ctx = document.querySelector('#canvas').getContext('2d');
ctx.strokeStyle = "#dbd9db";
ctx.font = "11px sans-serif";

function draw() {
    console.time('Time To Paint Canvas');

    let iX = INIT_DRAW_X;
    let iY = INIT_DRAW_Y;

    ctx.beginPath();
    ctx.moveTo(iX, iY);

    const t = new Time();

    for (let i = 1; i < 25; i++) {
        ctx.fillText(t.getTime(i), iX - TEXT_OFFSET_X, iY + TEXT_OFFSET_Y);
        t.incTime();

        ctx.lineTo(iX + LINE_OFFSET_X, iY);
        ctx.closePath();
        ctx.stroke();

        iY += LINE_OFFSET_Y;
        ctx.moveTo(iX, iY);
    }

    console.timeEnd('Time To Paint Canvas');
}

function injectEventInCanvas(name, fTime, tTime, color) {
    ctx.fillStyle = color;

    const x = INIT_DRAW_X;
    const y = getLocFromTime(fTime) + INIT_DRAW_Y;
    const width = RECT_WIDTH;
    const height = getLocFromTime(tTime) - y + INIT_DRAW_Y;

    ctx.fillRect(x, y, width, height);
    ctx.fillStyle = CARD_COLOR;
    ctx.fillText(name, x + EVENT_NAME_OFFSET_X, y + EVENT_NAME_OFFSET_Y)
    ctx.fillText(timeFormat(fTime) + ' - ' + timeFormat(tTime), x + EVENT_TIME_OFFSET_X, y + EVENT_TIME_OFFSET_Y)
}

function createEvent() {
    const name = document.querySelector('#eName').value;
    const fTime = document.querySelector('#fTime').value;
    const tTime = document.querySelector('#tTime').value;
    const color = document.querySelector('#eColor').value;

    if (!name || !fTime || !tTime || !color) return alert('Missing Fields');

    injectEventInCanvas(name, fTime, tTime, color);
}

function sleep() {
    return new Promise(r => setTimeout(r, 100));
}

async function loadTestData() {
    for (const data of testData) {
        // await sleep(); // for animation effect.
        injectEventInCanvas(data.name, data.fTime, data.tTime, data.color);
    }
}

onload = () => {
    document.querySelector('#btn').addEventListener('click', createEvent);
    document.querySelector('#test-btn').addEventListener('click', loadTestData);
    loadTestData();
}


draw()