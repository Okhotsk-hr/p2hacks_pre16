function LEDブロック参考 () {
    // 各LEDをRGBの値で設定
    strip1.setPixelColor(0, neopixel.rgb(255, 255, 255))
    // LEDの明るさ設定
    strip1.setBrightness(255)
    strip1.show()
    strip1.clear()
    // LEDをレインボー点灯
    strip1.showRainbow(1, 360)
}
input.onButtonPressed(Button.A, function () {
    sensor = 0
})
input.onButtonPressed(Button.B, function () {
    sensor = 1
})
let sensor = 0
let strip1: neopixel.Strip = null
strip1 = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
let range1 = strip1.range(0, 8)
let strip2 = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
let range2 = strip2.range(0, 8)
basic.showString("branc_testのブランチを追加")
basic.forever(function () {
    if (1 == sensor) {
        strip1.showColor(neopixel.colors(NeoPixelColors.Red))
        strip2.showColor(neopixel.colors(NeoPixelColors.Red))
    } else {
        strip1.showColor(neopixel.colors(NeoPixelColors.Black))
        strip2.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
