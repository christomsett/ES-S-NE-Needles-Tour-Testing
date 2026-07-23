'use strict';

(function () {

  var Marzipano = window.Marzipano;
  var bowser = window.bowser;
  var screenfull = window.screenfull;
  var data = window.APP_DATA;

  /* ---------------- DOM ---------------- */

  var panoElement = document.querySelector('#pano');
  var sceneNameElement = document.querySelector('#titleBar .sceneName');
  var sceneListElement = document.querySelector('#sceneList');
  var sceneElements = document.querySelectorAll('#sceneList .scene');
  var sceneListToggleElement = document.querySelector('#sceneListToggle');
  var autorotateToggleElement = document.querySelector('#autorotateToggle');
  var fullscreenToggleElement = document.querySelector('#fullscreenToggle');

  var infoToggle = document.getElementById('infoToggle');
  var infoClose = document.getElementById('infoClose');
  var infoTitle = document.getElementById('infoTitle');
  var infoContent = document.getElementById('infoContent');

  /* ---------------- DEVICE ---------------- */

  if (window.matchMedia) {
    var mql = matchMedia("(max-width: 500px), (max-height: 500px)");
    var setMode = function () {
      document.body.classList.toggle('mobile', mql.matches);
      document.body.classList.toggle('desktop', !mql.matches);
    };
    setMode();
    mql.addListener(setMode);
  } else {
    document.body.classList.add('desktop');
  }

  document.body.classList.add('no-touch');
  window.addEventListener('touchstart', function () {
    document.body.classList.remove('no-touch');
    document.body.classList.add('touch');
  });

  if (bowser.msie && parseFloat(bowser.version) < 11) {
    document.body.classList.add('tooltip-fallback');
  }

  /* ---------------- VIEWER ---------------- */

  var viewer = new Marzipano.Viewer(panoElement, {
    controls: {
      mouseViewMode: data.settings.mouseViewMode
    }
  });

  if (data.settings.autorotateEnabled) {
    document.getElementById('autorotateToggle').classList.add('enabled');
  }

  /* ---------------- SCENES ---------------- */

  var scenes = data.scenes.map(function (sceneData) {

    var source = Marzipano.ImageUrlSource.fromString(
      "tiles/" + sceneData.id + "/{z}/{f}/{y}/{x}.jpg",
      { cubeMapPreviewUrl: "tiles/" + sceneData.id + "/preview.jpg" }
    );

    var geometry = new Marzipano.CubeGeometry(sceneData.levels);

    var limiter = Marzipano.RectilinearView.limit.traditional(
      sceneData.faceSize,
      100 * Math.PI / 180,
      120 * Math.PI / 180
    );

    var view = new Marzipano.RectilinearView(
      sceneData.initialViewParameters,
      limiter
    );

    var scene = viewer.createScene({
      source: source,
      geometry: geometry,
      view: view,
      pinFirstLevel: true
    });

    (sceneData.linkHotspots || []).forEach(function (h) {
      scene.hotspotContainer().createHotspot(
        createLinkHotspotElement(h),
        { yaw: h.yaw, pitch: h.pitch }
      );
    });

    (sceneData.videoHotspots || []).forEach(function (h) {
      scene.hotspotContainer().createHotspot(
        createVideoHotspotElement(h),
        { yaw: h.yaw, pitch: h.pitch }
      );
    });

    (sceneData.cameraHotspots || []).forEach(function (h) {
      scene.hotspotContainer().createHotspot(
        createCameraHotspotElement(h),
        { yaw: h.yaw, pitch: h.pitch }
      );
    });

    return {
      data: sceneData,
      scene: scene,
      view: view
    };
  });

  /* ---------------- AUTOROTATE ---------------- */

  var autorotate = Marzipano.autorotate({
    yawSpeed: 0.03,
    targetPitch: 0,
    targetFov: Math.PI / 2
  });

  autorotateToggleElement.addEventListener('click', toggleAutorotate);

  /* ---------------- FULLSCREEN ---------------- */

  if (screenfull.enabled && data.settings.fullscreenButton) {
    document.body.classList.add('fullscreen-enabled');

    fullscreenToggleElement.addEventListener('click', function () {
      screenfull.toggle();
    });

    screenfull.on('change', function () {
      fullscreenToggleElement.classList.toggle('enabled', screenfull.isFullscreen);
    });
  }

  /* ---------------- SCENE LIST ---------------- */

  sceneListToggleElement.addEventListener('click', toggleSceneList);

  scenes.forEach(function (scene) {
    var el = document.querySelector('#sceneList .scene[data-id="' + scene.data.id + '"]');

    el.addEventListener('click', function () {
      switchScene(scene);
      if (document.body.classList.contains('mobile')) hideSceneList();
    });
  });

  /* ---------------- VIEW CONTROLS ---------------- */

  var controls = viewer.controls();
  var velocity = 0.7;
  var friction = 3;

  controls.registerMethod('up', new Marzipano.ElementPressControlMethod(
    document.getElementById('viewUp'), 'y', -velocity, friction), true);

  controls.registerMethod('down', new Marzipano.ElementPressControlMethod(
    document.getElementById('viewDown'), 'y', velocity, friction), true);

  controls.registerMethod('left', new Marzipano.ElementPressControlMethod(
    document.getElementById('viewLeft'), 'x', -velocity, friction), true);

  controls.registerMethod('right', new Marzipano.ElementPressControlMethod(
    document.getElementById('viewRight'), 'x', velocity, friction), true);

  controls.registerMethod('in', new Marzipano.ElementPressControlMethod(
    document.getElementById('viewIn'), 'zoom', -velocity, friction), true);

  controls.registerMethod('out', new Marzipano.ElementPressControlMethod(
    document.getElementById('viewOut'), 'zoom', velocity, friction), true);

  /* ---------------- SCENE SWITCH ---------------- */

  function switchScene(scene) {
    stopAutorotate();
    scene.view.setParameters(scene.data.initialViewParameters);
    scene.scene.switchTo();
    startAutorotate();

    updateSceneName(scene);
    updateSceneList(scene);
    updateInfoPanel(scene.data.id);
  }

  function updateSceneName(scene) {
    sceneNameElement.innerHTML = sanitize(scene.data.name);
  }

  function updateSceneList(scene) {
    sceneElements.forEach(function (el) {
      el.classList.toggle('current', el.dataset.id === scene.data.id);
    });
  }

  function sanitize(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /* ---------------- RESIZE FIX (IMPORTANT) ---------------- */

  function resizeViewer() {
    setTimeout(function () {
      window.dispatchEvent(new Event('resize'));
    }, 420);
  }

  /* ---------------- INFO PANEL ----------------
     Scene-specific panel content lives in ONE place: the "narrative"
     array on each scene object in data.js, e.g.

     "narrative": [
       { "title": "Overview", "body": "<p>...</p>" },
       { "title": "Geology",  "body": "<p>...</p>" }
     ]

     Add/edit that array per scene in data.js - nothing else needs to
     change here. (Previously this info also lived in a second,
     hardcoded TOUR_INFO object in this file that only covered 2 of 9
     scenes and could silently override data.js - that duplicate has
     been removed.)
  ------------------------------------------------ */

  function updateInfoPanel(id) {
    var scene = findSceneById(id);
    var narrative = scene && scene.data.narrative;

    infoTitle.textContent = scene ? scene.data.name.replace(/-/g, ' ') : 'Tour Info';

    if (!narrative || !narrative.length) {
      infoContent.innerHTML = "<p>No information available for this scene yet.</p>";
      return;
    }

    infoContent.innerHTML = narrative.map(function (section) {
      return '<h3>' + sanitize(section.title) + '</h3>' + section.body;
    }).join('');
  }

  /* ---------------- INFO PANEL UI ---------------- */

  infoToggle.addEventListener('click', function () {
    if (window.innerWidth <= 768) {
      document.body.classList.add('info-open');
    } else {
      document.body.classList.toggle('info-collapsed');
    }

    resizeViewer();
  });

  infoClose.addEventListener('click', function () {
    document.body.classList.remove('info-open');
    document.body.classList.add('info-collapsed');

    resizeViewer();
  });

  /* ---------------- AUTOROTATE ---------------- */

  function startAutorotate() {
    if (!autorotateToggleElement.classList.contains('enabled')) return;
    viewer.startMovement(autorotate);
    viewer.setIdleMovement(3000, autorotate);
  }

  function stopAutorotate() {
    viewer.stopMovement();
    viewer.setIdleMovement(Infinity);
  }

  function toggleAutorotate() {
    autorotateToggleElement.classList.toggle('enabled');
    if (autorotateToggleElement.classList.contains('enabled')) startAutorotate();
    else stopAutorotate();
  }

  /* ---------------- SCENE LIST UI ---------------- */

  function hideSceneList() {
    sceneListElement.classList.remove('enabled');
    sceneListToggleElement.classList.remove('enabled');
  }

  function toggleSceneList() {
    sceneListElement.classList.toggle('enabled');
    sceneListToggleElement.classList.toggle('enabled');
  }

  /* ---------------- HOTSPOTS ---------------- */

  function createLinkHotspotElement(h) {
    var el = document.createElement('div');
    el.className = 'hotspot link-hotspot';

    var img = document.createElement('img');
    img.src = 'img/link.png';
    img.className = 'link-hotspot-icon';

    img.style.transform = 'rotate(' + h.rotation + 'rad)';

    el.appendChild(img);

    el.addEventListener('click', function () {
      switchScene(findSceneById(h.target));
    });

    return el;
  }

  function createVideoHotspotElement(h) {
    var el = document.createElement('div');
    el.className = 'hotspot video-hotspot';

    var img = document.createElement('img');
    img.src = 'img/video.png';
    el.appendChild(img);

    el.onclick = function () {
      var iframe = document.createElement('iframe');
      var id = h.url.split('v=')[1];
      iframe.src = "https://www.youtube.com/embed/" + id;
      openPopup(iframe, h.width, h.height);
    };

    return el;
  }

  function createCameraHotspotElement(h) {
    var el = document.createElement('div');
    el.className = 'hotspot camera-hotspot';

    var img = document.createElement('img');
    img.src = 'img/camera.png';
    el.appendChild(img);

    el.onclick = function () {
      var wrap = document.createElement('div');
      wrap.className = 'popup-media';

      var imgEl = document.createElement('img');
      imgEl.src = h.url;

      wrap.appendChild(imgEl);

      if (h.text) {
        var cap = document.createElement('div');
        cap.className = 'popup-caption';
        cap.textContent = h.text;
        wrap.appendChild(cap);
      }

      openPopup(wrap, h.width, h.height);
    };

    return el;
  }

  function openPopup(content, w, h) {
    var overlay = document.createElement('div');
    overlay.className = 'popup-overlay';

    var box = document.createElement('div');
    box.className = 'popup-content';

    var close = document.createElement('div');
    close.className = 'popup-close';
    close.innerHTML = '&times;';
    close.onclick = function () {
      document.body.removeChild(overlay);
    };

    box.appendChild(close);
    box.appendChild(content);
    overlay.appendChild(box);

    overlay.onclick = function (e) {
      if (e.target === overlay) document.body.removeChild(overlay);
    };

    document.body.appendChild(overlay);
  }

  function findSceneById(id) {
    return scenes.find(function (s) {
      return s.data.id === id;
    });
  }

  /* ---------------- INIT ---------------- */

  switchScene(scenes[0]);

})();
