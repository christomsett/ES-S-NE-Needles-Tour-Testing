var APP_DATA = {
  "scenes": [
    {
      "id": "0-home-viewpoint",
      "name": "Home-Viewpoint",
      "nextScene": "1-alum-bay-from-the-ground",
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
        "yaw": -0.2083709413095267,
        "pitch": 0.758181397660973,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 2.0910365586795034,
          "pitch": 0.20525152494621146,
          "rotation": 0,
          "target": "2-alum-bay-from-the-air"
        },
        {
          "yaw": 2.297997318971012,
          "pitch": 0.1941404087909131,
          "rotation": 0,
          "target": "1-alum-bay-from-the-ground"
        },
        {
          "yaw": 3.0747455414311657,
          "pitch": 0.3013027655310232,
          "rotation": 0,
          "target": "5-south-cliff-from-the-ground"
        },
        {
          "yaw": -2.6900725204498883,
          "pitch": 0.322146914890169,
          "rotation": 0,
          "target": "4-south-ckliff-from-the-air"
        },
        {
          "yaw": 0.00691999346053862,
          "pitch": 0.368220727731547,
          "rotation": 0,
          "target": "8-the-old-battery-from-the-ground"
        },
        {
          "yaw": -0.2928174296960808,
          "pitch": 0.3067188277053301,
          "rotation": 0,
          "target": "6-the-needles"
        },
        {
          "yaw": -0.9496581853233863,
          "pitch": 0.6312515873981734,
          "rotation": 0,
          "target": "3-chalk-cliff-overhang"
        },
        {
          "yaw": -0.49013437409755234,
          "pitch": 0.537981043859654,
          "rotation": 0,
          "target": "7-needles-south-facing-cliffs"
        }
      ],
      "infoHotspots": [],
      "videoHotspots": [
        {
          "yaw": 1.2,
          "pitch": 0.1,
          "url": "https://www.youtube.com/watch?v=7vNUVzaKNkA",
          "category": "geology",
          "title": "Geology",
          "width": "90vw",
          "height": "50vh"
        }
      ],
      "cameraHotspots": [
        {
          "yaw": -1.0,
          "pitch": -0.2,
          "url": "img/uav-pic.png",
          "category": "geomorphology",
          "title": "Survey & Data Capture",
          "text": "We used UAVs to get data from previously inaccessible areas of the cliff face.",
          "width": "80vw",
          "height": "75vh"
        }
      ],
      "narrative": [
        {
          "title": "Home Viewpoint Overview",
          "body": `
            <h3>Welcome!</h3>
            <p>
              Welcome to the virtual tour at the Isle of Wight Needles site. This is our homepoint location from which you can
              view and navigate to different areas of the site. Feel free to look around before proceeding onto the first section
              of the tour: Geology!
            </p>
      
            <h3>Survey & Data Capture</h3>
            <p>
              The 360 imagery captured and used here was part of a wider project by Natural England. Photos from the gorund were
              obtained using a panoramic phone feature, whereas aerial 360 imagery was captured using a DJI Mavic 3.
            </p>  
          `
        }
      ]
    },
    {
      "id": "1-alum-bay-from-the-ground",
      "name": "Alum-Bay-From-The-Ground",
      "previousScene": "0-home-viewpoint",
      "nextScene": "2-alum-bay-from-the-air",
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
        "yaw": 0.18288658535724522,
        "pitch": 0.19590809760489947,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.29631609673942094,
          "pitch": 0.2508210763076839,
          "rotation": 0,
          "target": "2-alum-bay-from-the-air"
        },
        {
          "yaw": -2.529789819461463,
          "pitch": -0.7764265885933685,
          "rotation": 0,
          "target": "0-home-viewpoint"
        },
        {
          "yaw": -1.4619452734220957,
          "pitch": -0.14351493339079013,
          "rotation": 0,
          "target": "8-the-old-battery-from-the-ground"
        }
      ],
      "infoHotspots": [],
      "cameraHotspots": [
        {
          "yaw": 0.7,
          "pitch": -1,
          "url": "img/Heritage.png",
          "category": "heritage",
          "title": "The Needles Visitor Attraction",
          "text": "The centre boasts a number of attractions for visitors, including chairlifts to the beach, a sand shop, and rides.",
          "width": "80vw",
          "height": "75vh"
        }
      ],
      "narrative": [
        {
          "title": "Geology: Overlooking Alum Bay",
          "body": `
            <h3>Geological Formation</h3>
            <p>
              In contrast to the chalk stacks that form The Needles iconic stature, further along the coastline
              there is a shift in the geology of the underlying rock, to much softer and more easily eroded mudstone and 
              sandstones.
            </p>

            <p>
              The changes in these rock types lead to a much more mobile landscape, with a series of erosion features present
              across the area. The steep cliff as you look out over Alum Bay hgihlights this rapid shift in underlying
              geology, you don't want to get too close to the edge!
            </p>

            <p>
              The soft cliffs regularly release fossils onto the beach below making it a popular location for tourists
              to visit year round. The Needles visitor centre even has a chairlift to take you down directly onto the
              beach.
            </p>
          `
        }
      ]
    },
    {
      "id": "2-alum-bay-from-the-air",
      "name": "Alum-Bay-From-The-Air",
      "previousScene": "1-alum-bay-from-the-ground",
      "nextScene": "3-chalk-cliff-overhang",
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
        "yaw": -0.7095855513738858,
        "pitch": -0.13846155352099743,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.4970539257538835,
          "pitch": -0.35475891068278287,
          "rotation": 0,
          "target": "1-alum-bay-from-the-ground"
        },
        {
          "yaw": 2.4682316298621387,
          "pitch": -0.4361012799089714,
          "rotation": 0,
          "target": "0-home-viewpoint"
        },
        {
          "yaw": 2.9999742335580777,
          "pitch": -0.04885513361758065,
          "rotation": 0,
          "target": "8-the-old-battery-from-the-ground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-chalk-cliff-overhang",
      "name": "Chalk-Cliff-Overhang",
      "previousScene": "2-alum-bay-from-the-air",
      "nextScene": "4-south-ckliff-from-the-air",
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
        "yaw": -0.3716482455024277,
        "pitch": 0.7332881541189007,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.8396442233044077,
          "pitch": 0.31313749981587513,
          "rotation": 0,
          "target": "7-needles-south-facing-cliffs"
        },
        {
          "yaw": -3.0155634956404853,
          "pitch": 0.07769102116352933,
          "rotation": 0,
          "target": "6-the-needles"
        },
        {
          "yaw": -2.2766773444636605,
          "pitch": 0.004542952233883568,
          "rotation": 0,
          "target": "8-the-old-battery-from-the-ground"
        },
        {
          "yaw": -0.6897672132498602,
          "pitch": -0.45085538210365783,
          "rotation": 0,
          "target": "0-home-viewpoint"
        },
        {
          "yaw": 0.29033329455670653,
          "pitch": -0.00022055693854561298,
          "rotation": 0,
          "target": "4-south-ckliff-from-the-air"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-south-ckliff-from-the-air",
      "name": "South-Ckliff-From-The-Air",
      "previousScene": "3-chalk-cliff-overhang",
      "nextScene": "5-south-cliff-from-the-ground",
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
        "yaw": 0.7519336413053246,
        "pitch": 0.4876276703436151,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.9318878134633675,
          "pitch": -0.0526480324413896,
          "rotation": 0,
          "target": "5-south-cliff-from-the-ground"
        },
        {
          "yaw": -0.1634850210531713,
          "pitch": -0.5688911465236401,
          "rotation": 0,
          "target": "0-home-viewpoint"
        },
        {
          "yaw": -1.3519614822706156,
          "pitch": 0.08005108971653563,
          "rotation": 0,
          "target": "6-the-needles"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-south-cliff-from-the-ground",
      "name": "South-Cliff-From-The-Ground",
      "previousScene": "4-south-ckliff-from-the-air",
      "nextScene": "6-the-needles",
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
        "yaw": 0.981072421322132,
        "pitch": 0.07378356922782103,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.6780022185710433,
          "pitch": 0.05471604189472146,
          "rotation": 0,
          "target": "7-needles-south-facing-cliffs"
        },
        {
          "yaw": 2.5280934999500353,
          "pitch": -0.43311822722985127,
          "rotation": 0,
          "target": "0-home-viewpoint"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-the-needles",
      "name": "The-Needles",
      "previousScene": "5-south-cliff-from-the-ground",
      "nextScene": "7-needles-south-facing-cliffs",
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
        "yaw": 0.22651525834345776,
        "pitch": 0.41780897625319113,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.6033155274340345,
          "pitch": 0.17533990442232295,
          "rotation": 0,
          "target": "7-needles-south-facing-cliffs"
        },
        {
          "yaw": -2.6556374244855885,
          "pitch": 0.00848737756716389,
          "rotation": 0,
          "target": "3-chalk-cliff-overhang"
        },
        {
          "yaw": 3.057185026010062,
          "pitch": -0.3117698339813124,
          "rotation": 0,
          "target": "8-the-old-battery-from-the-ground"
        },
        {
          "yaw": -3.091016629251456,
          "pitch": -0.5818982973752984,
          "rotation": 0,
          "target": "0-home-viewpoint"
        }
      ],
      "infoHotspots": [],
      "narrative": [
        {
          "title": "Overview",
          "body": "<p>Iconic chalk stacks formed by coastal erosion.</p>"
        }
      ]
    },
    {
      "id": "7-needles-south-facing-cliffs",
      "name": "Needles-South-Facing-Cliffs",
      "previousScene": "6-the-needles",
      "nextScene": "8-the-old-battery-from-the-ground",
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
        "yaw": -0.17987576984839393,
        "pitch": 0.34601949706839363,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.7127504235488207,
          "pitch": 0.3427164470771764,
          "rotation": 0,
          "target": "3-chalk-cliff-overhang"
        },
        {
          "yaw": 0.738125498058956,
          "pitch": -0.11564914743675914,
          "rotation": 0,
          "target": "7-needles-south-facing-cliffs"
        },
        {
          "yaw": 0.20437085063286986,
          "pitch": -0.4154440928030567,
          "rotation": 0,
          "target": "0-home-viewpoint"
        },
        {
          "yaw": -1.4434284199678338,
          "pitch": -0.04625942332046762,
          "rotation": 0,
          "target": "8-the-old-battery-from-the-ground"
        },
        {
          "yaw": -2.894052220853105,
          "pitch": 0.26356650590894404,
          "rotation": 0,
          "target": "6-the-needles"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-the-old-battery-from-the-ground",
      "name": "The-Old-Battery-From-The-Ground",
      "previousScene": "7-needles-south-facing-cliffs",
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
        "yaw": -2.4569279246482036,
        "pitch": 0.20021450273642216,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.06363841791148417,
          "pitch": -0.6040185966962568,
          "rotation": 0,
          "target": "0-home-viewpoint"
        },
        {
          "yaw": 1.39481867922116,
          "pitch": 0.09039426904230652,
          "rotation": 0,
          "target": "7-needles-south-facing-cliffs"
        },
        {
          "yaw": 3.1370993123402693,
          "pitch": 0.04394960984866003,
          "rotation": 0,
          "target": "6-the-needles"
        },
        {
          "yaw": -0.28637800876968633,
          "pitch": 0.024887861790134025,
          "rotation": 0,
          "target": "2-alum-bay-from-the-air"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false,
    "popupCategories": {
      "geology": "img/Geology.png",
      "geomorphology": "img/Geomorphology.png",
      "heritage": "img/Heritage.png",
      "vegetation": "img/Vegetation.png",
      "general": "img/Logos.png"
    }
  }
};
