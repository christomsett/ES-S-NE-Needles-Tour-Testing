var APP_DATA = {
  "scenes": [
    {
      "id": "0-home-viewpoint",
      "name": "Home Viewpoint",
      "listNumber": null, /* MANUAL - shown as the number prefix in the left-hand scene list, independent of previousSceneSubtitle/nextSceneSubtitle */
      "listLabel": "Home View", /* MANUAL - shown as the text in the left-hand scene list. listNumber is null here, so no number prefix is shown - just "Home" */
      "nextScene": "1-alum-bay-from-the-ground",
      "nextSceneSubtitle": "Geology: Alum Bay",
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
          "target": "4-south-cliff-from-the-air"
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
      "hotspots": [
        {
          "yaw": -1.0,
          "pitch": -0.2,
          "category": "misc",
          "title": "Survey & Data Capture",
          "text": "We used UAVs to get data from previously inaccessible areas of the cliff face.",
          "image": "img/uav-pic.png",
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
              The 360 imagery captured and used here was part of a wider project by Natural England. Photos from the ground were
              obtained using a panoramic phone feature, whereas aerial 360 imagery was captured using a DJI Mavic 3.
            </p>  
          `
        }
      ]
    },
    {
      "id": "1-alum-bay-from-the-ground",
      "name": "Alum Bay From The Ground",
      "listNumber": 1, /* MANUAL - shown as the number prefix in the left-hand scene list, independent of previousSceneSubtitle/nextSceneSubtitle */
      "listLabel": "Geology: Alum Bay from the Ground", /* MANUAL - shown as the text in the left-hand scene list, e.g. "1. Geology" - can read completely differently from the scene's own "name" or its next/previous subtitles */
      "previousScene": "0-home-viewpoint",
      "nextScene": "2-alum-bay-from-the-air",
      "previousSceneSubtitle": "Home",
      "nextSceneSubtitle": "Geology: Continued",
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
      "hotspots": [
        {
          "yaw": 3,
          "pitch": -0.03,
          "category": "vegetation",
          "title": "Cliff vegetation",
          "text": "The cliff tops along the chalk headland are mainly covered in grasses of different varieties.",
          "image": "",
        },
        {
          "yaw": -0.09,
          "pitch": -0.03,
          "category": "heritage",
          "title": "The mainland",
          "text": "Unless the rain is falling, you can see across the Solent channel to Milford and Barton on Sea.",
          "image": "",
        },
        {
          "yaw": 0.57,
          "pitch": 0.05,
          "category": "heritage",
          "title": "The Needles Visitor Attraction",
          "text": "The centre boasts a number of attractions for visitors, including chairlifts to the beach, a sand shop, and rides.",
          "image": "",
        },
        {
          "yaw": 0.96,
          "pitch": 0.13,
          "category": "geomorphology",
          "title": "Gulley Zone",
          "text": "This is a region where continous recession has caused a gully zone to form. A series of these are visible across the face of Alum Bay.",
          "image": "",
        },
        {
          "yaw": -0.2,
          "pitch": 0.45,
          "category": "geomorphology",
          "title": "Wave Attack",
          "text": "The prevailing wind direction here creates a dominant area of wave attack, cuasing the beach and cliff base to be continously eroded despite some protection from the chalk headland.",
          "image": "",
        },
        {
          "yaw": 0,
          "pitch": 0.34,
          "category": "geomorphology",
          "title": "Narrow Beach",
          "text": "The underlying geology and geomorphological processes here lead to a narrow beach even at low tides. This offers little protection during storm events to the cliff behind.",
          "image": "",
        },
        {
          "yaw": 0.25,
          "pitch": -0.12,
          "category": "geology",
          "title": "Inclined Strata",
          "text": "The differing geology of this region is highlighted by the changes of colour. At this spot we can see steep inclines in the rock layers.",
          "image": "",
        },
        {
          "yaw": 1.11,
          "pitch": 0.12,
          "category": "geology",
          "title": "Exposed geology",
          "text": "You can clearly see the change in underling geology here, showing sand and mud stones in comparison to the chalk headland.",
          "image": "",
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
              across the area such as gullies and toe erosion. The steep cliff as you look out over Alum Bay hgihlights this 
              rapid shift in underlying geology, you don't want to get too close to the edge!
            </p>

            <p>
              The soft cliffs are continously being eroded here, and as a result they regularly release fossils onto the beach 
              below making it a popular location for tourists to visit year round. The Needles visitor centre even has a 
              chairlift to take you down directly onto the beach.
            </p>

            <p>
              Continue on to view Alum Bay from the air, highlighting some of the geomorphology in action.
            </p>
          `
        }
      ]
    },
    {
      "id": "2-alum-bay-from-the-air",
      "name": "Alum Bay From The Air",
      "listNumber": 2, /* MANUAL - shown as the number prefix in the left-hand scene list, independent of previousSceneSubtitle/nextSceneSubtitle */
      "listLabel": "Geology: Alum Bay from the Air", /* MANUAL - shown as the text in the left-hand scene list, e.g. "1. Geology" - can read completely differently from the scene's own "name" or its next/previous subtitles */
      "previousScene": "1-alum-bay-from-the-ground",
      "nextScene": "6-the-needles",
      "previousSceneSubtitle": "Geology: Previous",
      "nextSceneSubtitle": "Geology: Continued",
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
      "hotspots": [
        {
          "yaw": -0.09,
          "pitch": -0.1,
          "category": "geomorphology",
          "title": "Former activity",
          "text": "This area shows evidence of prior geomorphic activity (landslips), whereby enough time has passed for the surface to become vegetated once more.\nTake a look at the hostorical change in this area over the last 16 years, with red areas showing erosion.",
          "image": "img/Alum Bay Section_change map.png",
        },
        {
          "yaw": 0.32,
          "pitch": -0.2,
          "category": "vegetation",
          "title": "Cliff vegetation",
          "text": "More established areas of vegetation, such as this one, will help reduce erosion acrtivity by stabilising the soil through their root structures.",
          "image": "",
        },
        {
          "yaw": 2.69,
          "pitch": -0.02,
          "category": "geology",
          "title": "Exposed Chalk",
          "text": "The underlying geology of this cliff section is clearly exposed along this stretch, emphasising the differences geological type has on cliff structure.",
          "image": "",
        },
        {
          "yaw": -0.88,
          "pitch": -0.22,
          "category": "geology",
          "title": "Cliff Line",
          "text": "Across the view, we can see a clearly defined cliff top break point, with several exposed scarp faces from erosion activity.",
          "image": "",
        },
        {
          "yaw": -0.09,
          "pitch": -0.36,
          "category": "geology",
          "title": "Hummocky Ground",
          "text": "This area of uneven ground is typically caused by mass movement, such as landslides and rotational slumping, due to the unconsolidated materials below.",
          "image": "",
        },
        {
          "yaw": -0.43,
          "pitch": -0.22,
          "category": "geomorphology",
          "title": "Exposed Scarp Faces",
          "text": "Before the geology changes to the chalk of the headland, this cliff face has a number of exposed scarp faces such as this one, see how many spots you can see.",
          "image": "",
        },
        {
          "yaw": 2.45,
          "pitch": 1.22,
          "category": "geomorphology",
          "title": "Surface Cracks",
          "text": "Directly below our viewing point is a number of exposed fissures, where the ground is seperated after moving at variable rates due to the nature of the soft cliffs.",
          "image": "",
        },
        {
          "yaw": -2,
          "pitch": 0.76,
          "category": "geomorphology",
          "title": "Exposed Ground",
          "text": "Here we can see some freshly exposed material resulting from mass movement activity. Have a look further down the cliff to see if you can spot where it went...",
          "image": "",
        },
        {
          "yaw": -2.54,
          "pitch": 0.62,
          "category": "geomorphology",
          "title": "Debris Zone",
          "text": "There is evidence of debris accumulation at the foot of the cliff, resulting from a single or multiple events. Perhaps some of this material has come from the exposed ground directly upslope.",
          "image": "",
        },
        {
          "yaw": 1.55,
          "pitch": 0.22,
          "category": "vegetation",
          "title": "Patchwork Habitat",
          "text": "Soft cliffs contain a mix of bare ground, young vegetation and older plant communities. Constant erosion and landslides create an ever-changing patchwork of habitats.<br><br>Different parts of the cliff represent different stages of recovery. Some areas support pioneer species, while older, more stable ground can develop grassland, scrub or even woodland.",
          "image": "",
        },
        {
          "yaw": -1.64,
          "pitch": 0.58,
          "category": "vegetation",
          "title": "Fresh Start",
          "text": "Landslides expose bare ground, creating space for pioneer plants such as coltsfoot and creeping bent. These hardy species are often the first to colonise newly disturbed areas.",
          "image": "",
        },
        {
          "yaw": 0.06,
          "pitch": 0.81,
          "category": "vegetation",
          "title": "Plants on the Move",
          "text": "When cliffs collapse, blocks of soil and vegetation can slide downslope as rafts. These rafts carry established plants from the cliff top to new locations below.",
          "image": "",
        },
        {
          "yaw": 2.59,
          "pitch": 0.17,
          "category": "geomorphology",
          "title": "Landslip",
          "text": "At the bottom of this cliff face is a small accumulation of material from an erosion event. The force of the sea will eventually reduce this newly formed cliff toe.",
          "image": "",
        }
      ],
      "narrative": [
         {
          "title": "Geology: Alum Bay from the air.",
          "body": `
            <p>
              From this vantage point we get a much clearer look at the geology and processes happening within Alum Bay,
              as well as looking along the chalk cliffs towards The Needles (our next stop).
            </p>

            <p>
              As the headland towards the needles stretches out, we can see a steep sided cliff face with exposed chalk as well as sections with
              some established vegetation. The morphology (form) of these cliffs differs greatly from those at Alum Bay.
            </p>

            <p>
              Alum Bay exhibits a much greater variability in its morphology, with steep cliff sections, ridges and gulleys, as well as a display of
              slumps and former landslip events. Contrast between exposed rock and vegetated areas helps us identify the age of different events,
              and for how long slopes have remained stable for. 
            </p>

            <p>
              Have a pan around to see the different aspects of this area, before we move on to the main attraction at this site, The Needles themselves.
            </p>
          `
        }
      ]
    },
    {
      "id": "3-chalk-cliff-overhang",
      "name": "Chalk Cliff Overhang",
      "listNumber": 6, /* MANUAL - shown as the number prefix in the left-hand scene list, independent of previousSceneSubtitle/nextSceneSubtitle */
      "listLabel": "Erosion: Chalk Overhang", /* MANUAL - shown as the text in the left-hand scene list, e.g. "2. Erosion" - can read completely differently from the scene's own "name" or its next/previous subtitles */
      "previousScene": "7-needles-south-facing-cliffs",
      "nextScene": "4-south-cliff-from-the-air",
      "previousSceneSubtitle": "Erosion: The Needles",
      "nextSceneSubtitle": "Erosion: Continued",
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
          "target": "4-south-cliff-from-the-air"
        }
      ],
      "hotspots": [],
      "narrative": [
        {
          "title": "A Closer Look at the Overhang.",
          "body":`
            <p>
              From here we get a better look at this overhanging arch feature. The toe to the right of this cave
              indicates this feature has developed over time and may have undergone several collapses through time,
              gradually receeding the cliff line to its current position.
            </p>

            <p>
              We can also see the coastguard and defence infrastructure that has been placed along here over the years,
              highlighting the benefit of this location as a strategic vantage point over the English Channel.
            </p>

            <p>
              Lets head back to the view we just had, or if you have explored this already, continue onto the
              next section of our tour along the South of The Needles headland.
            </p>
            `
        }      
      ]
    },
    {
      "id": "4-south-cliff-from-the-air",
      "name": "South Cliff From The Air",
      "listNumber": 5, /* MANUAL - shown as the number prefix in the left-hand scene list, independent of previousSceneSubtitle/nextSceneSubtitle */
      "listLabel": "Erosion: South Cliffs", /* MANUAL - shown as the text in the left-hand scene list, e.g. "2. Erosion" - can read completely differently from the scene's own "name" or its next/previous subtitles */
      "previousScene": "7-needles-south-facing-cliffs",
      "nextScene": "5-south-cliff-from-the-ground",
      "previousSceneSubtitle": "Erosion: Previous",
      "nextSceneSubtitle": "Vegetation",
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
      "hotspots": [
        {
          "yaw": 0.03,
          "pitch": -0.09,
          "category": "misc",
          "title": "UAV Pilots",
          "text": "All this imagery has to come from somewhere, in this scene you can see the pilots flying the drone!",
          "image": "img/UAV-pilots.JPG",
        },
        {
          "yaw": 0.48,
          "pitch": 0.24,
          "category": "geology",
          "title": "Chalk Layers",
          "text": "In comparison to The Needles location, the chalk layering here is more horizontal with no inclination.",
          "image": "",
        },
        {
          "yaw": 1.56,
          "pitch": 0.49,
          "category": "geomorphology",
          "title": "Former Stack",
          "text": "This little stump of chalk rock poking out of the sea would have previously been a stack, and many years ago been attached to the mainland.",
          "image": "",
        },
        {
          "yaw": 1.36,
          "pitch": 0.23,
          "category": "geomorphology",
          "title": "Cliff Toe",
          "text": "The cliff toe here is much more varied comapred to the straighter toes elsewhere, this is likely to lead to several arches and stacks forming in the future.",
          "image": "",
        },
        {
          "yaw": -0.91,
          "pitch": 1.04,
          "category": "geomorphology",
          "title": "Deposition",
          "text": "Compared to other sections of the coastline here, this stretch has much smaller and less frequent deposition signals, either from less activity or higher rates of debris removal.",
          "image": "",
        },
        {
          "yaw": 1.43,
          "pitch": 0.01,
          "category": "heritage",
          "title": "Freshwater Bay",
          "text": "The lovely village at Freshwater Bay is a few miles down the coast.",
          "image": "",
        },
        {
          "yaw": -0.26,
          "pitch": 0.04,
          "category": "vegetation",
          "title": "Vegetation History",
          "text": "Fossil plants occur at several horizons within the site, and the flora assemblage which occur are important for reconstructing the vegetation history of the Hampshire Basin during Eocene times.",
          "image": "",
        }
      ],
      "narrative": [
        {
          "title": "Erosion: Continued",
          "body": `
            <p>
              Now we are on the South stretch of coastline around The Needles headland, we are again presented with a slightly
              different perspective on erosion at this site.
            </p>

            <p>
              Whilst the area around The Needles had steep inclines in the geology, a large archway forming, and those iconic stacks
              upon which the lighthouse is found, this stretch seems somewhat more stable. However, have a look around to see signs
              of geomorphic activity along the coast.
            </p>

            <p>
              Next, we will be talking a little about the vegetation at the site, and the role this plays.
            </p>
          `
        }
      ]
    },
    {
      "id": "5-south-cliff-from-the-ground",
      "name": "South Cliff From The Ground",
      "listNumber": 7, /* MANUAL - shown as the number prefix in the left-hand scene list, independent of previousSceneSubtitle/nextSceneSubtitle */
      "listLabel": "Vegetation", /* MANUAL - shown as the text in the left-hand scene list, e.g. "3. Vegetation" - can read completely differently from the scene's own "name" or its next/previous subtitles */
      "previousScene": "4-south-cliff-from-the-air",
      "nextScene": "8-the-old-battery-from-the-ground",
      "previousSceneSubtitle": "Erosion",
      "nextSceneSubtitle": "The Old Battery",
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
          "target": "4-south-cliff-from-the-air"
        },
        {
          "yaw": 2.5280934999500353,
          "pitch": -0.43311822722985127,
          "rotation": 0,
          "target": "0-home-viewpoint"
        }
      ],
      "hotspots": [
        {
          "yaw": 2.35,
          "pitch": 0.4,
          "category": "misc",
          "title": "Burrows",
          "text": "The thin layer of soil and underlying chalk geology make an excellent location for burrowing animals such as rabbits.",
          "image": "img/rabbit.jpg",
        },
        {
          "yaw": -2.14,
          "pitch": 0.06,
          "category": "vegetation",
          "title": "Grasses",
          "text": "This section of grassland is typical of much of the site, with larger vegetation such as trees and schrubs sporadically present across the landscape.",
          "image": "",
        },
        {
          "yaw": 1.50,
          "pitch": 0.10,
          "category": "vegetation",
          "title": "Harsh Conditions",
          "text": "The exposure of this section to the winds from the English Channel make it a challenging place for vegetation to grow.<br><br>Cliff plants can grow in challenging conditions though. Salt spray, strong winds, slope angle, rock type, weather, and human activity all help determine which species can survive here.",
          "image": "img/wild-thyme.jpg",
        },
      ],
      "narrative": [
        {
          "title": "Vegetation",
          "body": `
            <p>
              The cliffs at the Needles and Alum Bay form part of the Headon Warren and West High Down Site of Special 
              Scientific Interest (SSSI), owned and managed by the National Trust.
            </p>

            <p>
              Tennyson Down and West High Down (which can be seen here) support chalk and neutral grasslands. They are of 
              great scientific and nature conservation importance for the richness of their chalk grassland vegetation and 
              the presence of acid loving plant species that grow in small pockets on the drift deposits on the ridge.  
            </p>

            <p>
              The images here were taken in February, but if you were to visit in the spring/ summer the cliff tops
              would be a riot of colour with Horseshoe vetch, Wild Thyme and Cowslips.  For example, it supports nine species 
              of orchids, most notable is the Pyramidal orchid—the county flower of the Isle of Wight; and populations of rare 
              plants such as the Early Gentian and Tufted Centaury.
            </p>

            <p>
              The area is heavily grazed by rabbits which results in a short sward.  But the National Trust also grazes the cliff 
              tops with cattle (see here: 
              <a href="https://www.nationaltrust.org.uk/visit/isle-of-wight/the-needles-headland-and-tennyson-down/our-work-on-headon-warren" target="_blank" rel="noopener noreferrer">
                Conservation, grazing, Isle of Wight | National Trust 
              </a>. 
              ). The National Trust also actively remove non-native invasive Cotoneaster shrubs, which form dense mats that threaten 
              to choke out the rare species.
            </p>
              
            <p>
              Our final stop on this tour epxlores The Old Battery, demonstrating the importance of this location across
              its varied history.
            </p>
          `
        }
      ]
    },
    {
      "id": "6-the-needles",
      "name": "The Needles",
      "listNumber": 3, /* MANUAL - shown as the number prefix in the left-hand scene list, independent of previousSceneSubtitle/nextSceneSubtitle */
      "listLabel": "Geology: The Needles", /* MANUAL - shown as the text in the left-hand scene list, e.g. "1. Geology" - can read completely differently from the scene's own "name" or its next/previous subtitles */
      "previousScene": "2-alum-bay-from-the-air",
      "nextScene": "7-needles-south-facing-cliffs",
      "previousSceneSubtitle": "Geology: Previous",
      "nextSceneSubtitle": "Erosion",
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
      "hotspots": [
        {
          "yaw": 0.14,
          "pitch": 0.35,
          "category": "geology",
          "title": "Chalk Stacks",
          "text": "The protruding chalk headland here creates a set of distinctive features, The Needles themselevs, where the chalk geology leaves robust towers in place.",
          "image": "",
        },
        {
          "yaw": -0.19,
          "pitch": 0.02,
          "category": "heritage",
          "title": "The Needles Lighthouse",
          "text": "This 30m high landmark was completed in 1859, and was automated in 1994 ending the long history of having light house keepers on site. The light form the tower can be seen up to 14 miles away!",
          "image": "img/lighthouse.png",
        },
        {
          "yaw": 2.70,
          "pitch": 0.39,
          "category": "geology",
          "title": "Chalk Inclines",
          "text": "The steep inclines in the chalk beds are clearly visible here, showcasing how millions of years of geological processes has shaped this region.",
          "image": "",
        },
        {
          "yaw": 3.13,
          "pitch": 0.68,
          "category": "geomorphology",
          "title": "Cliff Collapse",
          "text": "This large deposit is the result of a failure between the chalk layers further up the cliff. A number of these can be seen along the cliff face.",
          "image": "",
        },
        {
          "yaw": -3.13,
          "pitch": -0.2,
          "category": "heritage",
          "title": "The Old Battery",
          "text": "This is the site of the Old Battery, a Victorian coastal defence post built between 1861 and 1863. We will learn more about this later in the tour.",
          "image": "",
        },
        {
          "yaw": 3.04,
          "pitch": 0.07,
          "category": "vegetation",
          "title": "Colonising Vegetation",
          "text": "Despite the harsh conditions and steep slopes, vegetation can still establish itself here. However, in contrast to softer substrates, the stabilising effects are more limited.",
          "image": "",
        },
      ],
      "narrative": [
        {
          "title": "Geology: The Needles",
          "body": `
            <p>
              Here we find the iconic chalk stacks formed by coastal erosion and the chalk geology. This protrusion of chalk
              from the main headland has been eroded over thousands of years to produce this marvelous site. 
            </p>

            <p>
              Chalk needs a higher force or a longer time period to erode at the same rate as the mud and sand stones seen
              in Alum Bay, and as such this chalk headland remains. The slower and more discrete erosion events over time lead
              to the angled cliff line we see here, extending up to the main coastguard station. Erosion events are typically dominated
              by structural breaks between layers of chalk.
            </p>

            <p>
              Explore around to see how the geology affects this landscape, before we continue on to look at some of the erosional
              processes occuring here.
            </p>
          `
        }
      ]
    },
    {
      "id": "7-needles-south-facing-cliffs",
      "name": "Needles South Facing Cliffs",
      "listNumber": 4, /* MANUAL - shown as the number prefix in the left-hand scene list, independent of previousSceneSubtitle/nextSceneSubtitle */
      "listLabel": "Erosion: The Needles", /* MANUAL - shown as the text in the left-hand scene list, e.g. "2. Erosion" - can read completely differently from the scene's own "name" or its next/previous subtitles */
      "previousScene": "6-the-needles",
      "nextScene": "4-south-cliff-from-the-air",
      "previousSceneSubtitle": "Erosion: Previous",
      "nextSceneSubtitle": "Erosion: Continued",
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
          "target": "4-south-cliff-from-the-air"
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
      "hotspots": [
        {
          "yaw": -2.81,
          "pitch": 0.15,
          "category": "geomorphology",
          "title": "Stack Erosion",
          "text": "Stacks are formed by the erosive power of the sea, intially causing cracks in the rock, before creating caves, arches, and finally stacks. Another famous example of this is Old harrys Rocks at Studland Bay.",
          "image": "",
        },
        {
          "yaw": -0.57,
          "pitch": 0.1,
          "category": "geology",
          "title": "Chalk Layers",
          "text": "The steeply inclined nature of the chalk beds here are clearly showcase on this exposed edge, a constant feature of this landscape.",
          "image": "",
        },
        {
          "yaw": -2.31,
          "pitch": 0.74,
          "category": "geomorphology",
          "title": "Deposition",
          "text": "Here we can see another example of a deposit from a cliff failure. How long these are present on the shoreline is dependent on the size of the deposit and the wave eneergy capable of removing them.",
          "image": "",
        },
        {
          "yaw": 0.41,
          "pitch": 0.73,
          "category": "geomorphology",
          "title": "Narrow Foreshore",
          "text": "The small area of land visible in front of the cliff means there is little protection for the base of the cliff. This was similar in Alum bay, but Alum bay is far more active.",
          "image": "",
        },
        {
          "yaw": 0.63,
          "pitch": 0.25,
          "category": "geomorphology",
          "title": "Developing Overhang",
          "text": "Here we can see a large overhang developing from erosional activity. The dominant wave direction faces this feature exposing it to the full power of the sea.<br><br>Quickly have a closer look using the arrows before jumping back to this point.",
          "image": "",
        },
        {
          "yaw": -1.37,
          "pitch": 0.13,
          "category": "heritage",
          "title": "Old Battery Entrance",
          "text": "For security, a large cutaway is present at the entrance to the Old Battery, access via a drawbridge only!",
          "image": "",
        },
      ],
      "narrative": [
        {
          "title": "Erosion: The Needles",
          "body": `
            <p>
              From this vantage point we can see a series of erosional processes and subsequent features occuring at the chalk headland
              which form The Needles. 
            </p>

            <p>
              From the chalk stacks with their famous lighthouse on the furthest point, through forming overhangs that overshadow the
              beach that sits below, to the active slope face and rock fall deposits on the beach, there are numerouse examples of 
              textbook features occuring at this location. Combined with the narrow beach and harsh conditions, this makes for an
              active area of chalk cliff.
            </p>

            <p>
              Investigate the pop outs which dive a little bit more into the processes and fromations that are present here, before we
              jump around the corner to see how the erosional processes change along this southern cliff line.
            </p>
          `
        }
      ]
    },
    {
      "id": "8-the-old-battery-from-the-ground",
      "name": "The Old Battery",
      "listNumber": 8, /* MANUAL - shown as the number prefix in the left-hand scene list, independent of previousSceneSubtitle/nextSceneSubtitle */
      "listLabel": "Heritage: The Old Battery", /* MANUAL - shown as the text in the left-hand scene list, e.g. "4. The Old Battery" - can read completely differently from the scene's own "name" or its next/previous subtitles */
      "previousScene": "5-south-cliff-from-the-ground",
      "nextScene": "0-home-viewpoint",
      "previousSceneSubtitle": "Vegetation",
      "nextSceneSubtitle": "Home",
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
      "hotspots": [
        {
          "yaw": 0.33,
          "pitch": -0.10,
          "category": "heritage",
          "title": "The New Battery",
          "text": "The New Battery replaced the Old Battery in 1895 due to the deteriation at the old site.<br><br>You can see the New battery more clearly from our home viewpoint.",
          "image": "",
        },
        {
          "yaw": 0.63,
          "pitch": 0.32,
          "category": "heritage",
          "title": "Old Battery Entrance",
          "text": "The Old Battery was accessed over a small bridge which enabled the site to be secured.",
          "image": "",
        },
        {
          "yaw": -2.47,
          "pitch": 0.22,
          "category": "heritage",
          "title": "Gun Stations",
          "text": "Each gun took a team of six to operate them. They were strategcally placed to cover as much of the water as possible.",
          "image": "",
        },
        {
          "yaw": -3,
          "pitch": 0.14,
          "category": "geomorphology",
          "title": "Erosion",
          "text": "Continued erosion of the south facing cliff led to the deteriation of the Old Battery, prompting its move. The cliff face drops off steeply here within the limits of the original Old Battery footprint.",
          "image": "",
        },
        {
          "yaw": -2.89,
          "pitch": 0.38,
          "category": "heritage",
          "title": "Below the Ground",
          "text": "The tunnels beneath the site are still usable today, and lead to the old lookout point which was used to spot enemy ships.",
          "image": "",
        },
      ],
      "narrative": [
        {
          "title": "The Old Battery",
          "body": `
            <p>
              This is our final stop on the tour, showcasing The Needles Old Battery, which has stood on the chalk headland since the 1860s.
              From here you can see the main positions used to defend the English Channel and Solent. 
            </p>

            <p>
              The chalk headland made an excellent vantage point due to its wide views of the English Chanel, making it easier to spot
              enemy defences. The Old Battery was replaced with the new battery further up the hill due to fears over cliff instability
              from gun reverberations. 
            </p>

            <p>
              This concludes our tour of The Needles coastline. Have a look around to see some of the historical features here, and then
              feel free to jump around the scenes, revisitng any spots you choose, and getting to know this area a little better!
            </p>

            <p>
              Thanks for joining us!
            </p>
          `
        }
      ]
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
    },

    /* =========================================================
       SPLASH SCREEN
       Shown once, over the top of the tour, when the page first
       loads. Edit any of the fields below - nothing else needs
       to change. Set "enabled" to false to switch it off entirely.

       - welcomeHeading / welcomeBody : short welcome message
       - navigationImage              : large PNG showing people how
                                         to navigate the tour. Drop your
                                         file into the img/ folder and
                                         point this at it, e.g.
                                         "img/splash-navigation.png"
       - creditsHeading / creditsBody : short text about who made/
                                         funded the tour
       - creditsImage                 : small PNG of contributor /
                                         funder logos, e.g.
                                         "img/splash-credits.png"
                                         (defaults to img/Logos.png
                                         until you supply your own)
       - buttonLabel                  : text on the button that
                                         dismisses the splash screen
    ========================================================= */
    "splash": {
      "enabled": true,
      "welcomeHeading": "Welcome to the Needles 360 Tour",
      "welcomeBody": "<p>Explore the Isle of Wight Needles site in 360&deg;. Use the information panel on the right to take a guided tour, or just pan and zoom to have a look around, use the arrow icons to move between scenes across the headland, and click the coloured icons to open popups containing photos and extra background information as you go.</p>",
      "navigationImage": "img/SceneGuide.png",
      "navigationImageAlt": "How to navigate the tour",
      "creditsHeading": "Content & Funding",
      "creditsBody": "<p>This tour was produced by Environmental Sensing at The University of Southampton (ES@S) and the GeoData Institute in partnership with Natural England. Thanks to the National Trust for letting us access thier land for collecting the data.</p>",
      "creditsImage": "img/Logos.png",
      "creditsImageAlt": "Project partner and funder logos",
      "buttonLabel": "Begin the Tour!"
    }
  }
};
