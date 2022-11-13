const getRandomInt = function(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

export default [
  // https://cl.ly/0e72dd890b93
  [[24,239],[724,244],[[0,288,330,192,1],[438,288,330,192,1]],[]],
  // https://cl.ly/80f69e0e3b74
  [[371,51],[724,404],[[0,100,768,16,1],[0,216,768,16,0],[0,332,768,16,1],[0,448,768,32,0]],[]],
  // https://cl.ly/a751117681a8
  [[24,239],[724,244],[[0,288,330,192,1],[438,288,330,192,0]],[]],
  // https://cl.ly/ffd71d417828
  [[23,263],[724,268],[[0,312,768,8,1],[380,0,8,312,1],[0,408,768,72,0]],[]],
  // https://cl.ly/7ce0a55e6c23
  [[116, 96], [628, 412], [
    [64, 448, 128, 32, false],
    [320, 448, 128, 32, true],
    [576, 448, 128, 32, false]
  ], []],
  // https://cl.ly/e7a2d2ecc0e7
  [[24,399],[604,152],[[0,448,768,32,1],[128,320,512,8,1],[632,328,8,120,1],[128,192,512,8,1],[128,200,8,120,1],[640,384,128,8,0],[0,256,128,8,0]],[]],
  // https://cl.ly/c3c9ccaf76a3
  [[16,275],[566,248],[[0,0,768,64,1],[0,64,128,192,1],[0,324,248,92,1],[0,416,768,64,1],[192,132,180,96,1],[440,64,100,224,1],[620,112,72,245,1],[192,228,56,96,1],[300,288,320,69,1]],[]],
  // https://cl.ly/91292cb165a6
  [[16,367],[704,84],[[0,416,244,64,1],[524,128,244,352,1],[288,320,64,160,0],[416,224,64,256,0]],[]],
  // https://cl.ly/dd353a0a4faf
  [[104,175],[176,32],[[96,224,56,8,1],[96,232,56,8,0],[144,72,8,152,1],[152,72,8,168,0],[160,72,128,92,1],[160,164,256,92,1],[160,256,384,92,1],[544,256,8,92,0],[160,348,512,92,1],[160,440,512,8,0],[552,340,120,8,0]],[]],
  // https://cl.ly/752bc2a6a72f
  [[16,422],[724,416],[[0,472,48,8,1],[0,376,48,8,0],[0,280,48,8,1],[0,184,96,8,0],[384,456,384,24,1]],[]],
  // https://cl.ly/13b3b6c2966d
  [[16,239],[724,244],[[0,288,768,192,1],[336,0,96,288,1]],[]],
  // https://cl.ly/74d75c6b6df7
  [[16, 56], [724, 216],
    [0, 1, 2, 3, 4, 5, 6, 7].map((x) => [x * 96, getRandomInt(240, 300), getRandomInt(24, 72), getRandomInt(24, 180), getRandomInt(0, 2)])
  , []],
  // https://cl.ly/129369ca9d9d
  [[48,383],[696,384],[[48,432,24,24,1],[156,348,24,24,0],[48,264,24,24,1],[156,180,24,24,0],[264,180,24,24,1],[372,180,24,24,0],[480,180,24,24,1],[588,180,24,24,0],[696,264,24,24,1],[588,348,24,24,0],[696,432,24,24,1]],[]],
  // https://cl.ly/de15c9f04a7d
  [[24, 8], [724, getRandomInt(128, 416)],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23].map((x) => [x * 32, getRandomInt(64, 464), 8, 8, getRandomInt(0, 2)])
  , []],
  // https://cl.ly/aef7878e8263
  [[372,391],[372,20],[[320,440,128,8,1],[320,344,128,8,0],[320,248,128,8,1],[320,152,128,8,0]],[[320,448,128,8,1,"down"],[320,352,128,8,0,"down"],[320,256,128,8,1,"down"],[320,160,128,8,0,"down"]]],
  // https://cl.ly/bfc474be92d1
  [[372,15],[372,418],[[320,64,128,16,1],[256,80,256,128,0],[320,208,128,16,1],[348,224,72,160,1],[348,384,8,96,1],[356,384,8,96,0],[412,384,8,96,1],[404,384,8,96,0]],[[312,64,8,16,1,"left"],[448,64,8,16,1,"right"],[312,208,8,16,1,"left"],[448,208,8,16,1,"right"]]],
  // https://cl.ly/38831ab3bb46
  [[24, 64], [724, getRandomInt(128, 416)], [[0, getRandomInt(128, 352), 768, 2, true]],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((x) =>
      [x * 48, getRandomInt(128, 352), 16, 8, getRandomInt(0, 2), 'up']
    )
  ],
  [[371, 20], [372, 372], [
    [336, 320, 96, 8, true],
    [336, 416, 96, 8, true],
    [336, 328, 8, 88, true],
    [424, 328, 8, 88, true],
  ], [
    [336, 312, 96, 8, true, 'up']
  ]],
  // https://cl.ly/bb5826e004eb
  [[371, 20], [584, 404], [
    [0, 152, 368, 8, true],
    [0, 248, 448, 8, true],
    [0, 344, 528, 8, true],
  ], [
    [0, 144, 368, 8, true, 'up'],
    [0, 240, 448, 8, true, 'up'],
    [0, 336, 528, 8, true, 'up'],
  ]],
  // https://cl.ly/130ada902b79
  [[12, 312], [725, 307], [
    [0, 152, 768, 72, true],
    [0, 362, 64, 8, true],
    [192, 362, 128, 8, true],
    [448, 362, 128, 8, true],
    [704, 362, 64, 8, true]
  ], [
    [0, 224, 768, 8, true, 'down'],
  ]],
  // https://cl.ly/be19660c5789
  [[371, 20], [372, 404], [
    [320, 384, 128, 8, true],
    [320, 272, 128, 8, false],
    [320, 168, 128, 8, true],
  ], [
    [320, 376, 128, 8, true, 'up'],
    [320, 264, 128, 8, false, 'up'],
    [320, 160, 128, 8, true, 'up'],
  ]],
  // https://cl.ly/52c9d3f5f7e6
  [[63,263],[660,272],[[48,312,96,96,1],[144,124,48,284,1],[192,124,96,96,1],[192,312,96,96,0],[288,124,48,284,1],[336,312,96,96,1],[432,124,48,284,1],[480,124,96,96,1],[480,312,96,96,0],[576,124,48,284,1],[624,312,96,96,1]],[[232,304,16,8,0,"up"],[520,304,16,8,0,"up"]]],
  // https://cl.ly/f83f4b0bb02d
  [[148, 254], [600, 266], [
    [94, 176, 8, 128, true],
    [222, 176, 8, 128, true],
    [94, 168, 136, 8, true],
    [94, 304, 136, 8, true],
    [318, 176, 8, 128, true],
    [446, 176, 8, 128, true],
    [318, 168, 136, 8, true],
    [318, 304, 136, 8, true],
    [542, 176, 8, 128, true],
    [670, 176, 8, 128, true],
    [542, 168, 136, 8, true],
    [542, 304, 136, 8, true]
  ], []],
  // https://cl.ly/0d180032f589
  [[400, 20], [372, 432], [], [
    [0, 96, 384, 8, true, 'up'],
    [0, 104, 384, 8, false, 'down'],
    [400, 240, 368, 8, true, 'up'],
    [400, 248, 368, 8, false, 'down'],
    [0, 384, 384, 8, true, 'up'],
    [0, 392, 384, 8, false, 'down'],
  ]],
  // https://cl.ly/d11a48fe9b24
[[368,14],[269,419],[],[[328,32,8,80,1,"right"],[320,32,8,80,0,"left"],[424,32,8,80,1,"left"],[432,32,8,80,0,"right"],[280,175,8,80,1,"right"],[272,174,8,80,0,"left"],[376,175,8,80,1,"left"],[384,175,8,80,0,"right"],[232,320,8,80,1,"right"],[224,319,8,80,0,"left"],[328,320,8,80,1,"left"],[336,319,8,80,0,"right"]]]
]
