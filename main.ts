function servo_init () {
    _default = 20
    servo1_pos = _default
    servo2_pos = _default
    pins.servoWritePin(AnalogPin.P0, servo1_pos)
    pins.servoWritePin(AnalogPin.P1, servo2_pos)
    s1_min = 20
    s2_min = 20
    s1_max = 120
    s2_max = 120
}
function set_servo (num: number) {
    if (num >= s1_min && num <= s1_max) {
        pins.servoWritePin(AnalogPin.P0, num)
    } else {
        basic.showIcon(IconNames.Yes)
    }
}
let s2_max = 0
let s1_max = 0
let s2_min = 0
let s1_min = 0
let servo2_pos = 0
let servo1_pos = 0
let _default = 0
let result = " "
serial.redirect(
SerialPin.USB_RX,
SerialPin.USB_TX,
BaudRate.BaudRate9600
)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    result = serial.readString()
    if (result) {
        basic.showIcon(IconNames.StickFigure)
    } else {
        basic.showIcon(IconNames.No)
    }
})
