input.onButtonPressed(Button.A, function () {
    sensor = 0
})
input.onButtonPressed(Button.B, function () {
    sensor = 1
})
function Flash_draw () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    i = 0
    for (let index = 0; index < 8; index++) {
        strip.setPixelColor(i - 1, neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(i, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(100)
        i += 1
    }
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(2000)
}
let IR = 0
let i = 0
let sensor = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P2, 8, NeoPixelMode.RGB)
let range = strip.range(0, 8)
strip.setBrightness(100)
basic.forever(function () {
    // 赤外線センサー：ドロー判定
    // P0
    if (pins.analogReadPin(AnalogPin.P0) < 20) {
        IR = 1
        Flash_draw()
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
