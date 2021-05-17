input.onGesture(Gesture.TiltRight, function () {
    spelare.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    spelare.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.A, function () {
    game.resume()
})
input.onGesture(Gesture.LogoDown, function () {
    spelare.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(game.score())
})
input.onButtonPressed(Button.B, function () {
    game.pause()
})
input.onGesture(Gesture.LogoUp, function () {
    spelare.change(LedSpriteProperty.Y, 1)
})
let mördare_3: game.LedSprite = null
let mördare_2: game.LedSprite = null
let mördare_1: game.LedSprite = null
let mördare: game.LedSprite = null
let spelare: game.LedSprite = null
spelare = game.createSprite(2, 2)
basic.forever(function () {
    if (mördare.isTouching(spelare)) {
        spelare.delete()
        game.gameOver()
    }
})
basic.forever(function () {
    mördare = game.createSprite(randint(0, 4), randint(0, 4))
    basic.pause(5000)
    basic.pause(5000)
    mördare_1 = game.createSprite(randint(0, 4), randint(0, 4))
    basic.pause(5000)
    basic.pause(5000)
    mördare_2 = game.createSprite(randint(0, 4), randint(0, 4))
    basic.pause(5000)
    basic.pause(5000)
    mördare_3 = game.createSprite(randint(0, 4), randint(0, 4))
})
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        basic.pause(5000)
        mördare.move(randint(-1, 1))
        basic.pause(5000)
        mördare.move(randint(-1, 1))
        basic.pause(5000)
    }
})
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        basic.pause(5000)
        mördare_2.move(randint(-1, 1))
        basic.pause(5000)
        mördare_2.move(randint(-1, 1))
        basic.pause(5000)
    }
})
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        basic.pause(5000)
        mördare_1.move(randint(-1, 1))
        basic.pause(5000)
        mördare_1.move(randint(-1, 1))
        basic.pause(5000)
    }
})
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        basic.pause(5000)
        mördare_3.move(randint(-1, 1))
        basic.pause(5000)
        mördare_3.move(randint(-1, 1))
        basic.pause(5000)
    }
})
