namespace SpriteKind {
    export const decoration = SpriteKind.create()
}
function 生壞人 (num: number) {
    for (let index = 0; index < num; index++) {
        壞人方向決定 = randint(1, 4)
        壞壞 = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(壞壞, assets.tile`transparency16`)
        if (壞人方向決定 == 1) {
            壞壞.setVelocity(50, 50)
        } else if (壞人方向決定 == 2) {
            壞壞.setVelocity(50, -50)
        } else if (壞人方向決定 == 3) {
            壞壞.setVelocity(-50, 50)
        } else {
            壞壞.setVelocity(-50, -50)
        }
        壞壞.setBounceOnWall(true)
    }
}
controller.combos.attachCombo("ABAB", function () {
    第一關分數 = 59
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    子彈2 = sprites.createProjectileFromSprite(img`
        . 4 4 4 . 
        4 3 5 1 4 
        4 3 3 4 4 
        4 2 2 4 4 
        . 4 4 4 . 
        `, 主角, 200 * Math.cos(玩家方向 * (3.14 / 180)), -200 * Math.sin(玩家方向 * (3.14 / 180)))
})
function 轉場 () {
    bg = sprites.create(img`
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccc55555555555cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc55555555555ccccccccccccccccccc
        ccccccccccccccccccccc55555555555cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc55555555555ccccccccccccccccccc
        ccccccccccccccccccccc55555555555cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc55555555555ccccccccccccccccccc
        ccccccccccccccccccccc55555555555cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc55555555555ccccccccccccccccccc
        ccccccccccccccccccccc55555555555cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc55555555555ccccccccccccccccccc
        ccccccccccccccccccccc55555555555cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc55555555555ccccccccccccccccccc
        ccccccccccccccccccccc55555555555cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc55555555555ccccccccccccccccccc
        ccccccccccccccccccccc55555555555cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc55555555555ccccccccccccccccccc
        ccccccccccccccccccccc555555555555555555555555555555555cccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555555555555555555cccccccccccccccccccccccccccccc
        ccccccccccccccccccccc555555555555555555555555555555555cccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555555555555555555cccccccccccccccccccccccccccccc
        ccccccccccccccccccccc555555555555555555555555555555555cccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555555555555555555cccccccccccccccccccccccccccccc
        ccccccccccccccccccccc555555555555555555555555555555555cccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555555555555555555cccccccccccccccccccccccccccccc
        ccccccccccccccccccccc555555555555555555555555555555555cccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555555555555555555cccccccccccccccccccccccccccccc
        ccccccccccccccccccccc555555555555555555555555555555555cccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555555555555555555cccccccccccccccccccccccccccccc
        ccccccccccccccccccccc555555555555555555555555555555555cccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555555555555555555cccccccccccccccccccccccccccccc
        ccccccccccccccccccccc555555555555555555522222225555555cccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555555555555555555cccccccccccccccccccccccccccccc
        ccccccccccccccccccccc555555555555555555522222225555555cccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555222222255555555cccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc555555552222222555555555555555555cccccccccccccccccccccccccccccccc555555555555555555222222255555555cccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc555555552222222555555555555555555cccccccccccccccccccccccccccccccc555555555555555555222222255555555cccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc555555552222222555555555555555555cccccccccccccccccccccccccccccccc555555555555555555222222255555555cccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc555555552222222555555555555555555cccccccccccccccccccccccccccccccc555555555555555555222222255555555cccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc555555552222222555555555555555555cccccccccccccccccccccccccccccccc555555555555555555222222255555555cccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc555555552222222555555555555555555cccccccccccccccccccccccccccccccc555555555555555555222222255555555cccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc555555555555555555555555555555555cccccccccccccccccccccccccccccccc555555555555555555222222255555555cccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc555555555555555555555555555555555cccccccccccccccccccccccccccccccc555555555555555555222222255555555cccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc555555555555555555555555555555555cccccccccccccccccccccccccccccccc555555555555555555555555555555555cccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccc55555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc55555555555ccccccccccccccccccc
        cccccccccc55555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc55555555555ccccccccccccccccccc
        cccccccccc55555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc55555555555ccccccccccccccccccc
        cccccccccc55555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc55555555555ccccccccccccccccccc
        cccccccccc55555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc55555555555ccccccccccccccccccc
        cccccccccc55555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc55555555555ccccccccccccccccccc
        cccccccccc55555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc55555555555ccccccccccccccccccc
        cccccccccc55555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc55555555555ccccccccccccccccccc
        cccccccccc55555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc55555555555ccccccccccccccccccc
        cccccccccc5555555555555555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555555555555555555ccccccccccccccccccc
        cccccccccc5555555555555555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555555555555555555ccccccccccccccccccc
        cccccccccc5555555555555555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555555555555555555ccccccccccccccccccc
        cccccccccc5555555555555555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555555555555555555ccccccccccccccccccc
        cccccccccc5555555555555555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555555555555555555ccccccccccccccccccc
        cccccccccc5555555555555555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555555555555555555ccccccccccccccccccc
        cccccccccc5555555555555555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555555555555555555ccccccccccccccccccc
        cccccccccc5555555555555555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555555555555555555ccccccccccccccccccc
        cccccccccc5555555555555555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555555555555555555ccccccccccccccccccc
        cccccccccc555555555555555555555555555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc555555555555555555555555555555555ccccccccccccccccccc
        cccccccccc555555555555555555555555555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc555555555555555555555555555555555ccccccccccccccccccc
        cccccccccc555555555555555555555555555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc555555555555555555555555555555555ccccccccccccccccccc
        cccccccccc555555555555555555555555555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc555555555555555555555555555555555ccccccccccccccccccc
        cccccccccc555555555555555555555555555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc555555555555555555555555555555555ccccccccccccccccccc
        cccccccccc555555555555555555555555555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc555555555555555555555555555555555ccccccccccccccccccc
        cccccccccc555555555555555555555555555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc555555555555555555555555555555555ccccccccccccccccccc
        cccccccccc555555555555555555555555555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc555555555555555555555555555555555ccccccccccccccccccc
        cccccccccc555555555555555555555555555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc555555555555555555555555555555555ccccccccccccccccccc
        ccccccccccccccccccccc5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555cccccccccccccccccccccccccccccc
        ccccccccccccccccccccc5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555cccccccccccccccccccccccccccccc
        ccccccccccccccccccccc5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555cccccccccccccccccccccccccccccc
        ccccccccccccccccccccc5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555cccccccccccccccccccccccccccccc
        ccccccccccccccccccccc5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555cccccccccccccccccccccccccccccc
        ccccccccccccccccccccc5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555cccccccccccccccccccccccccccccc
        ccccccccccccccccccccc5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555cccccccccccccccccccccccccccccc
        ccccccccccccccccccccc5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555cccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `, SpriteKind.decoration)
    bg.z = -10
    bg.setFlag(SpriteFlag.RelativeToCamera, true)
    主角.setFlag(SpriteFlag.Ghost, true)
    controller.moveSprite(主角, 0, 0)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    timer.background(function () {
        screenTransitions.setZ(-5, 200)
        screenTransitions.startTransition(screenTransitions.Circle, 1000, true, true)
        tiles.setCurrentTilemap(tilemap`層級8`)
        bg.z = 100
        screenTransitions.setZ(90, 200)
        screenTransitions.startTransition(screenTransitions.Circle, 1000, false, true)
        bg.z = -10
        controller.moveSprite(主角)
        tiles.placeOnTile(主角, tiles.getTileLocation(1, 1))
        主角.setFlag(SpriteFlag.Ghost, false)
    })
}
function 初始化 () {
    tiles.setCurrentTilemap(tilemap`層級5`)
    生主角()
    生壞人(10)
    info.setLife(5)
    第一關分數 = 0
    game.splash("第一關你需要在血量還有前", "打死60隻怪物")
    game.splash("按下選單鍵", "可以查看你殺了幾隻")
    地圖轉變1 = 0
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    玩家方向 = 180
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    玩家方向 = 90
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    玩家方向 = 0
})
function 生主角 () {
    主角 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(主角)
    scene.cameraFollowSprite(主角)
    主角.setPosition(136, 7)
    主角.z = 300
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    玩家方向 = 270
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (第一關分數 < 60) {
        主角.sayText(第一關分數, 500, true)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (第一關分數 <= 50) {
        sprites.destroy(otherSprite, effects.trail, 100)
        第一關分數 += 1
        生壞人(1)
    } else {
        sprites.destroy(otherSprite, effects.trail, 100)
        第一關分數 += 1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (第一關分數 < 50) {
        sprites.destroy(otherSprite, effects.spray, 100)
        info.changeLifeBy(-1)
        生壞人(1)
    } else {
        sprites.destroy(otherSprite, effects.spray, 100)
        info.changeLifeBy(-1)
    }
})
let 地圖轉變1 = 0
let bg: Sprite = null
let 玩家方向 = 0
let 主角: Sprite = null
let 子彈2: Sprite = null
let 第一關分數 = 0
let 壞壞: Sprite = null
let 壞人方向決定 = 0
初始化()
forever(function () {
    if (玩家方向 == 90) {
        characterAnimations.loopFrames(
        主角,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 2 2 f f f f . . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f f 2 f e f . . 
            . . f f f 2 f e e 2 2 f f f . . 
            . . f e 2 f f e e 2 f e e f . . 
            . f f e f f e e e f e e e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . . e f f f f f f f f 4 e . . 
            . . . 4 f 2 2 2 2 2 e d d 4 . . 
            . . . e f f f f f f e e 4 . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 2 2 f f f f . . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e f 2 f f f 2 f 2 e f . . 
            . . f f f 2 2 e e f 2 f f f . . 
            . . f e e f 2 e e f f 2 e f . . 
            . f f e e e f e e e f f e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f e . . . 
            . . 4 d d e 2 2 2 2 2 f 4 . . . 
            . . . 4 e e f f f f f f e . . . 
            . . . . . . . . . f f f . . . . 
            `],
        200,
        characterAnimations.rule(Predicate.MovingUp)
        )
    } else if (玩家方向 == 180) {
        characterAnimations.loopFrames(
        主角,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 2 2 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e d d 4 . . . . 
            . . . f 2 2 2 2 e d d e . . . . 
            . . f f 5 5 4 4 f e e f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        200,
        characterAnimations.rule(Predicate.MovingLeft)
        )
    } else if (玩家方向 == 0) {
        characterAnimations.loopFrames(
        主角,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e e e d d d f . . . 
            . . . . . f 4 d d e 4 e f . . . 
            . . . . . f e d d e 2 2 f . . . 
            . . . . f f f e e f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . 4 d d e 4 4 4 e f . . . 
            . . . . e d d e 2 2 2 2 f . . . 
            . . . . f e e f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        200,
        characterAnimations.rule(Predicate.MovingRight)
        )
    } else {
        characterAnimations.loopFrames(
        主角,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . . f e 4 d d d d 4 e f e . . 
            . . f e f 2 2 2 2 e d d 4 e . . 
            . . e 4 f 2 2 2 2 e d d e . . . 
            . . . . f 4 4 5 5 f e e . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . e f e 4 d d d d 4 e f . . . 
            . . e 4 d d e 2 2 2 2 f e f . . 
            . . . e d d e 2 2 2 2 f 4 e . . 
            . . . . e e f 5 5 4 4 f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . f f f . . . . 
            `],
        200,
        characterAnimations.rule(Predicate.MovingDown)
        )
    }
})
game.onUpdateInterval(500, function () {
    if (第一關分數 >= 60) {
        地圖轉變1 = 1
        第一關分數 = 0
    }
})
game.onUpdateInterval(500, function () {
    if (地圖轉變1 == 1) {
        轉場()
        地圖轉變1 = 0
    }
})
