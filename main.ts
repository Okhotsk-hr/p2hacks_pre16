function red_flash () {
    strip.setPixelColor(randint(0, 7), neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(randint(0, 7), neopixel.colors(NeoPixelColors.Red))
    strip.setBrightness(randint(1, 200))
    strip.show()
    basic.pause(30)
}
function blue_flash () {
    i = 0
    for (let index = 0; index < 8; index++) {
        strip.setPixelColor(i, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        i += 1
        basic.pause(10)
    }
    basic.pause(1000)
}
function Flash_draw () {
    i = 0
    for (let index = 0; index < 8; index++) {
        strip.setPixelColor(i, neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
        i += 1
    }
    strip.show()
}
let i = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P2, 8, NeoPixelMode.RGB)
let range = strip.range(0, 8)
let go = 0
basic.forever(function () {
    // 赤外線センサー：ドロー判定
    // P0
    if (pins.analogReadPin(AnalogPin.P0) > 30) {
        go = 1
        Flash_draw()
    } else {
        // 赤外線センサー：ドロー判定
        // P0
        if (go == 1) {
            strip.showRainbow(1, 360)
            strip.show()
            basic.pause(500)
            go = 0
        } else {
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
        }
    }
})
