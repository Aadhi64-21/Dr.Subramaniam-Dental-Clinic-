var APP_DATA = {
  "scenes": [
    {
      "id": "0-waiting-01",
      "name": "waiting 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3726308726687002
      },
      "linkHotspots": [
        {
          "yaw": -1.2720705062496442,
          "pitch": 0.13182069188772694,
          "rotation": 4.71238898038469,
          "target": "4-lobby-first-floor"
        },
        {
          "yaw": -2.4866251204384042,
          "pitch": 0.17866268923452822,
          "rotation": 0,
          "target": "1-entrance"
        },
        {
          "yaw": 0.4919498938111939,
          "pitch": 0.051149960013400886,
          "rotation": 0,
          "target": "3-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entrance",
      "name": "entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.008130733945465707,
        "pitch": -0.02669984293927463,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": 1.3115373937760388,
          "pitch": 0.10167714387654136,
          "rotation": 5.497787143782138,
          "target": "4-lobby-first-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-waiting-02",
      "name": "waiting 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.04305852407721744,
        "pitch": -0.002394399828567373,
        "fov": 0.97287122389781
      },
      "linkHotspots": [
        {
          "yaw": 2.033439405260056,
          "pitch": 0.10014331077979399,
          "rotation": 0,
          "target": "3-reception"
        },
        {
          "yaw": -2.2501572013345843,
          "pitch": 0.19455874972991438,
          "rotation": 3.141592653589793,
          "target": "0-waiting-01"
        },
        {
          "yaw": -1.6908096672528625,
          "pitch": 0.06828121260335962,
          "rotation": 0,
          "target": "1-entrance"
        },
        {
          "yaw": -1.4133259825561346,
          "pitch": 0.10438129753848635,
          "rotation": 0.7853981633974483,
          "target": "4-lobby-first-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-reception",
      "name": "reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.9450498671394172,
        "pitch": -0.1017191842779912,
        "fov": 1.3726308726687002
      },
      "linkHotspots": [
        {
          "yaw": -2.142827782702831,
          "pitch": -0.09781071085149762,
          "rotation": 0,
          "target": "0-waiting-01"
        },
        {
          "yaw": -1.7688421373866916,
          "pitch": -0.09598675199637796,
          "rotation": 0.7853981633974483,
          "target": "4-lobby-first-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-lobby-first-floor",
      "name": "lobby first floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.28203307624687923,
        "pitch": -0.011907758231098242,
        "fov": 1.3726308726687002
      },
      "linkHotspots": [
        {
          "yaw": 0.7916110810300072,
          "pitch": 0.2042888213209384,
          "rotation": 4.71238898038469,
          "target": "7-pediatric-op-02"
        },
        {
          "yaw": -2.484987523012169,
          "pitch": 0.2636698264946098,
          "rotation": 0,
          "target": "5-pediatric-op-01"
        },
        {
          "yaw": -1.0408627121536043,
          "pitch": 0.2572535436424239,
          "rotation": 3.141592653589793,
          "target": "0-waiting-01"
        },
        {
          "yaw": -1.1412805996024051,
          "pitch": 0.26041278035035376,
          "rotation": 0,
          "target": "9-lobby-second-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-pediatric-op-01",
      "name": "pediatric op 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": -0.00490712153049877,
        "fov": 1.3726308726687002
      },
      "linkHotspots": [
        {
          "yaw": 1.5475524112010017,
          "pitch": 0.18395110988954855,
          "rotation": 0,
          "target": "4-lobby-first-floor"
        },
        {
          "yaw": 1.6358164605674421,
          "pitch": 0.17801219686970526,
          "rotation": 3.141592653589793,
          "target": "6-op-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-op-01",
      "name": "op 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.25913777593313725,
        "pitch": 0.07139932258471582,
        "fov": 1.3726308726687002
      },
      "linkHotspots": [
        {
          "yaw": -3.0484526847735296,
          "pitch": 0.19561861779633105,
          "rotation": 0,
          "target": "5-pediatric-op-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-pediatric-op-02",
      "name": "pediatric op 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.19889594945577294,
        "pitch": 0.04875842216213755,
        "fov": 1.3726308726687002
      },
      "linkHotspots": [
        {
          "yaw": 2.2287574189733483,
          "pitch": 0.06646580631266552,
          "rotation": 1.5707963267948966,
          "target": "4-lobby-first-floor"
        },
        {
          "yaw": 2.229409207992404,
          "pitch": 0.18512734421232935,
          "rotation": 0,
          "target": "8-op-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-op-02",
      "name": "op 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.1425704652786024,
        "pitch": -0.007041523645145986,
        "fov": 1.3726308726687002
      },
      "linkHotspots": [
        {
          "yaw": -2.7265971742752555,
          "pitch": 0.09665852327463043,
          "rotation": 0,
          "target": "7-pediatric-op-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-lobby-second-floor",
      "name": "lobby second floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.004612535888817604,
        "pitch": 0.010189000877737442,
        "fov": 1.3726308726687002
      },
      "linkHotspots": [
        {
          "yaw": 0.644780630963071,
          "pitch": 0.11256587792242811,
          "rotation": 0,
          "target": "10-treatment-02"
        },
        {
          "yaw": 1.3613232003014097,
          "pitch": 0.04540672509274657,
          "rotation": 3.141592653589793,
          "target": "11-treatment-03"
        },
        {
          "yaw": -0.5340071249840932,
          "pitch": 0.15909937075113056,
          "rotation": 3.141592653589793,
          "target": "4-lobby-first-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-treatment-02",
      "name": "treatment 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.3170701260828075,
        "pitch": 0.2542413400255654,
        "fov": 0.9682037420969508
      },
      "linkHotspots": [
        {
          "yaw": 3.117084368715247,
          "pitch": 0.025172322750190546,
          "rotation": 0,
          "target": "11-treatment-03"
        },
        {
          "yaw": -2.2364418213825665,
          "pitch": 0.023971246669770352,
          "rotation": 0,
          "target": "9-lobby-second-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-treatment-03",
      "name": "treatment 03",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.5288819866880488,
        "pitch": 0.024513373988320097,
        "fov": 1.3726308726687002
      },
      "linkHotspots": [
        {
          "yaw": 0.11283560607352605,
          "pitch": -0.01943977534372543,
          "rotation": 0,
          "target": "10-treatment-02"
        },
        {
          "yaw": -0.9225202937039434,
          "pitch": 0.09684263818068217,
          "rotation": 3.141592653589793,
          "target": "9-lobby-second-floor"
        },
        {
          "yaw": -1.364041641861398,
          "pitch": 0.10000807472710704,
          "rotation": 0,
          "target": "12-treatment-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-treatment-01",
      "name": "treatment 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.5625624227596937,
        "pitch": -0.021264193298828005,
        "fov": 1.3726308726687002
      },
      "linkHotspots": [
        {
          "yaw": -2.915993259995302,
          "pitch": 0.11789650966156273,
          "rotation": 3.141592653589793,
          "target": "9-lobby-second-floor"
        },
        {
          "yaw": 2.681781104913485,
          "pitch": 0.0963933694427439,
          "rotation": 5.497787143782138,
          "target": "10-treatment-02"
        },
        {
          "yaw": -3.117623427319547,
          "pitch": 0.1154127740674653,
          "rotation": 0,
          "target": "11-treatment-03"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
