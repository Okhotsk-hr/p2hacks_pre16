function red_flash () {
	
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
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    i = 0
    for (let index = 0; index < 15; index++) {
        color = 200
        j = 0
        for (let index = 0; index < 7; index++) {
            strip.setPixelColor(i - j, neopixel.rgb(50, 0, color))
            color += -10
            j += 1
        }
        strip.show()
        basic.pause(100)
        i += 1
    }
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(2000)
}
let j = 0
let color = 0
let i = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P2, 8, NeoPixelMode.RGB)
let range = strip.range(0, 8)
strip.setBrightness(255)
basic.forever(function () {
	
})
