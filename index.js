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
  var infoContent = document.getElementById('infoContent');
  var infoPrevious = document.getElementById('infoPrevious');
  var infoNext = document.getElementById('infoNext');

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

    (sceneData.popupHotspots || []).forEach(function (h) {
      scene.hotspotContainer().createHotspot(
        createPopupHotspotElement(h),
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

     To link to another scene from within a narrative body, use:
       <a class="scene-link" data-target="6-the-needles">The Needles</a>
     where data-target is the scene's "id" from data.js. Clicking it
     jumps the main viewer to that scene (handled by the delegated
     click listener below).
  ------------------------------------------------ */

  function updateInfoPanel(id) {
    var scene = findSceneById(id);
    var narrative = scene && scene.data.narrative;

    if (!narrative || !narrative.length) {
      infoContent.innerHTML = "<p>No information available for this scene yet.</p>";
      updateInfoNavigation(scene);
      return;
    }

    infoContent.innerHTML = narrative.map(function (section) {
      return '<h3>' + sanitize(section.title) + '</h3>' + section.body;
    }).join('');

    updateInfoNavigation(scene);
  }

  function updateInfoNavigation(scene) {
    function configure(button, targetId, label) {
      if (!button) return;
      var target = targetId ? findSceneById(targetId) : null;
      button.disabled = !target;
      button.classList.toggle('disabled', !target);
      button.setAttribute('aria-label', target ? label + ': ' + target.data.name : label);
      button.onclick = target ? function () {
        switchScene(target);
      } : null;
    }

    configure(infoPrevious, scene.data.previousScene, 'Previous');
    configure(infoNext, scene.data.nextScene, 'Next');
  }

  infoContent.addEventListener('click', function (e) {
    var link = e.target.closest('.scene-link');
    if (!link) return;

    e.preventDefault();

    var target = findSceneById(link.dataset.target);
    if (target) switchScene(target);
  });

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

  function createPopupHotspotElement(h) {
    var el = document.createElement('div');
    el.className = 'hotspot popup-hotspot';

    var img = document.createElement('img');
    img.src = h.hotspotIcon || getCategoryImage(h.category);
    img.alt = h.title || h.category || 'Information';
    el.appendChild(img);

    el.addEventListener('click', function (e) {
      openPopup(createPopupBody(h), h.category, sourceTitle(h), e);
    });

    return el;
  }

  function createVideoHotspotElement(h) {
    var el = document.createElement('div');
    el.className = 'hotspot popup-hotspot';

    var img = document.createElement('img');
    img.src = h.hotspotIcon || getCategoryImage(h.category || 'general');
    img.alt = h.title || h.category || 'Video';
    el.appendChild(img);

    el.addEventListener('click', function (e) {
      var iframe = document.createElement('iframe');
      var idMatch = h.url && h.url.match(/[?&]v=([^&]+)/);
      var id = idMatch ? idMatch[1] : '';
      iframe.src = id ? "https://www.youtube.com/embed/" + id : h.url;
      iframe.setAttribute('allowfullscreen', '');
      openPopup(iframe, h.category || 'general', sourceTitle(h), e);
    });

    return el;
  }

  function createCameraHotspotElement(h) {
    var el = document.createElement('div');
    el.className = 'hotspot popup-hotspot';

    var img = document.createElement('img');
    img.src = h.hotspotIcon || getCategoryImage(h.category || 'general');
    img.alt = h.title || h.category || 'Image';
    el.appendChild(img);

    el.addEventListener('click', function (e) {
      openPopup(createPopupBody(h), h.category || 'general', sourceTitle(h), e);
    });

    return el;
  }

  function createPopupBody(h) {
    var wrap = document.createElement('div');
    wrap.className = 'popup-body';

    if (h.type === 'video' && h.url) {
      var iframe = document.createElement('iframe');
      var idMatch = h.url.match(/[?&]v=([^&]+)/);
      var id = idMatch ? idMatch[1] : '';
      iframe.src = id ? "https://www.youtube.com/embed/" + id : h.url;
      iframe.setAttribute('allowfullscreen', '');
      wrap.appendChild(iframe);
    } else if (h.url) {
      var img = document.createElement('img');
      img.src = h.url;
      img.alt = h.title || h.text || '';
      wrap.appendChild(img);
    }

    if (h.text) {
      var cap = document.createElement('div');
      cap.className = 'popup-caption';
      cap.textContent = h.text;
      wrap.appendChild(cap);
    }

    return wrap;
  }

  function getCategoryImage(category) {
    var builtInImages = {
      geology: 'img/Geology.png',
      geomorphology: 'img/Geomorphology.png',
      heritage: 'img/Heritage.png',
      vegetation: 'img/Vegetation.png',
      logos: 'img/Logos.png',
      general: 'img/Logos.png'
    };

    // Additional categories can be added in data.js under:
    // settings.popupCategories: { categoryName: "img/category.png" }
    var configuredImages = (data.settings && data.settings.popupCategories) || {};
    var key = String(category || 'general').toLowerCase();

    return configuredImages[key] || builtInImages[key] || builtInImages.general;
  }

  function sourceTitle(h) {
    return h.title || h.category || 'Information';
  }

  function openPopup(content, category, title, sourceEvent) {
    var overlay = document.createElement('div');
    overlay.className = 'popup-overlay';

    var box = document.createElement('div');
    box.className = 'popup-content';

    var close = document.createElement('div');
    close.className = 'popup-close';
    close.innerHTML = '&times;';
    close.onclick = function () {
      if (overlay.parentNode) document.body.removeChild(overlay);
    };

    var header = document.createElement('div');
    header.className = 'popup-header';

    var categoryImage = document.createElement('img');
    categoryImage.className = 'popup-category-image';
    categoryImage.src = getCategoryImage(category);
    categoryImage.alt = category || 'Information';

    var heading = document.createElement('div');
    heading.className = 'popup-title';
    heading.textContent = title;

    header.appendChild(categoryImage);
    header.appendChild(heading);

    box.appendChild(close);
    box.appendChild(header);
    box.appendChild(content);
    overlay.appendChild(box);

    overlay.onclick = function (e) {
      if (e.target === overlay && overlay.parentNode) {
        document.body.removeChild(overlay);
      }
    };

    document.body.appendChild(overlay);
    positionPopup(box, sourceEvent);
  }

  function positionPopup(box, sourceEvent) {
    var margin = 12;
    var anchorX = sourceEvent ? sourceEvent.clientX : window.innerWidth / 2;
    var anchorY = sourceEvent ? sourceEvent.clientY : window.innerHeight / 2;

    var rect = box.getBoundingClientRect();

    var left = anchorX + 16;
    var top = anchorY - rect.height / 2;

    // flip to the left of the click point if it would overflow the right edge
    if (left + rect.width + margin > window.innerWidth) {
      left = anchorX - rect.width - 16;
    }
    // final horizontal clamp
    left = Math.max(margin, Math.min(left, window.innerWidth - rect.width - margin));

    // vertical clamp
    top = Math.max(margin, Math.min(top, window.innerHeight - rect.height - margin));

    box.style.left = left + 'px';
    box.style.top = top + 'px';
  }

  function findSceneById(id) {
    return scenes.find(function (s) {
      return s.data.id === id;
    });
  }

  /* ---------------- DEBUG COORDINATES ---------------- */

  var coordsDisplay = document.createElement('div');
  coordsDisplay.id = 'coordsDisplay';
  
  coordsDisplay.style.position = 'fixed';
  coordsDisplay.style.bottom = '10px';
  coordsDisplay.style.left = '10px';
  coordsDisplay.style.zIndex = '9999';
  coordsDisplay.style.background = 'rgba(0,0,0,0.7)';
  coordsDisplay.style.color = '#fff';
  coordsDisplay.style.padding = '8px 10px';
  coordsDisplay.style.fontFamily = 'monospace';
  coordsDisplay.style.fontSize = '13px';
  coordsDisplay.style.pointerEvents = 'none';
  
  document.body.appendChild(coordsDisplay);
  
  function updateCoordinates() {
    var currentScene = scenes.find(function (s) {
      return s.scene === viewer.scene();
    });
  
    if (!currentScene) return;
  
    var params = currentScene.view.parameters();
  
    coordsDisplay.innerHTML =
      'Yaw: ' + params.yaw.toFixed(5) + ' rad<br>' +
      'Pitch: ' + params.pitch.toFixed(5) + ' rad<br>' +
      'FOV: ' + params.fov.toFixed(5) + ' rad';
  }
  
  setInterval(updateCoordinates, 100);

  /* ---------------- CENTRE ALIGNMENT DOT ---------------- */

  var centreDot = document.createElement('div');
  centreDot.id = 'centreAlignmentDot';
  
  centreDot.style.position = 'fixed';
  centreDot.style.left = '50%';
  centreDot.style.top = '50%';
  centreDot.style.width = '8px';
  centreDot.style.height = '8px';
  centreDot.style.background = 'red';
  centreDot.style.borderRadius = '50%';
  centreDot.style.transform = 'translate(-50%, -50%)';
  centreDot.style.zIndex = '9998';
  centreDot.style.pointerEvents = 'none';
  
  document.body.appendChild(centreDot);

  /* ---------------- INIT ---------------- */

  switchScene(scenes[0]);

})();
