let joe = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
`,SpriteKind.Player)


let pos_y = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
`,SpriteKind.Food) 
let neg_y = sprites.create(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Food)
let neg_x = sprites.create(img`
    5 . . . . . . . . . . . . . . .
    5 . . . . . . . . . . . . . . .
    5 . . . . . . . . . . . . . . .
    5 . . . . . . . . . . . . . . .
    5 . . . . . . . . . . . . . . .
    5 . . . . . . . . . . . . . . .
    5 . . . . . . . . . . . . . . .
    5 . . . . . . . . . . . . . . .
    5 . . . . . . . . . . . . . . .
    5 . . . . . . . . . . . . . . .
    5 . . . . . . . . . . . . . . .
    5 . . . . . . . . . . . . . . .
    5 . . . . . . . . . . . . . . .
    5 . . . . . . . . . . . . . . .
    5 . . . . . . . . . . . . . . .
    5 . . . . . . . . . . . . . . .
`, SpriteKind.Food)
let pos_x = sprites.create(img`
    . . . . . . . . . . . . . . . 5
    . . . . . . . . . . . . . . . 5
    . . . . . . . . . . . . . . . 5
    . . . . . . . . . . . . . . . 5
    . . . . . . . . . . . . . . . 5
    . . . . . . . . . . . . . . . 5
    . . . . . . . . . . . . . . . 5
    . . . . . . . . . . . . . . . 5
    . . . . . . . . . . . . . . . 5
    . . . . . . . . . . . . . . . 5
    . . . . . . . . . . . . . . . 5
    . . . . . . . . . . . . . . . 5
    . . . . . . . . . . . . . . 5 5
    . . . . . . . . . . . . . . 5 5
    . . . . . . . . . . . . . . . 5
    . . . . . . . . . . . . . . . 5
`, SpriteKind.Food)

pos_x.setFlag(SpriteFlag.Ghost,true)
neg_x.setFlag(SpriteFlag.Ghost, true)
pos_y.setFlag(SpriteFlag.Ghost, true)
neg_y.setFlag(SpriteFlag.Ghost, true)

neg_x.setPosition(joe.x - 1,joe.y)
pos_y.setPosition(joe.x,joe.y + 1)
pos_x.setPosition(joe.x + 1,joe.y)
neg_y.setPosition(joe.x,joe.y - 1)

controller.moveSprite(joe,100,100)
controller.moveSprite(neg_y,100,100)
controller.moveSprite(pos_y,100,100)
controller.moveSprite(neg_x,100,100)
controller.moveSprite(pos_x,100,100)

neg_x.data = [-1, "x"]
pos_x.data = [1, "x"]
neg_y.data = [-1, "y"]
pos_x.data = [1, "y"]

let isPos_x = 0
let isPos_y = 0
let isNeg_x = 0
let isNeg_y = 0

function collisions (direction : any, axis : any) {

 if ( direction = -neg_x) {
 isNeg_x = 1
} else if (direction = neg_y) {
 isNeg_y = 1
} else if (direction = pos_y){
 isPos_y = 1
} else if (direction = pos_x) {
 isPos_x = 1
}}

game.onUpdate(function(){
    isPos_x -= 0.5
    isPos_y -= 0.5
    isNeg_x -= 0.5
    isNeg_y -= 0.5
if (isPos_x > 0) {
    if (joe.vx)
}
})
 controller.B.onEvent(ControllerButtonEvent.Pressed,function(){
     game.splash(isPos_x)
 })