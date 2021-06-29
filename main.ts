let Shake = 0
input.onGesture(Gesture.Shake, function () {
    Shake = input.acceleration(Dimension.Strength)
    if (Shake > 3000) {
        basic.showNumber(Shake)
        basic.pause(1000)
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.clearScreen()
    }
})
