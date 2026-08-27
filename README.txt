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

  var splashScreen = document.getElementById('splashScreen');
  var splashClose = document.getElementById('splashClose');
  var splashStart = document.getElementById('splashStart');

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

    // Single unified hotspot type: video / image / plain-text info are all
    // just optional fields on the same object (see createHotspotElement).
    // Legacy arrays (videoHotspots / cameraHotspots / popupHotspots /
    // infoHotspots) are still read here too, so older data.js files keep
    // working, but new scenes should just use "hotspots".
    (sceneData.hotspots || [])
      .concat(sceneData.videoHotspots || [])
      .concat(sceneData.cameraHotspots || [])
      .concat(sceneData.popupHotspots || [])
      .concat(sceneData.infoHotspots || [])
      .forEach(function (h) {
        scene.hotspotContainer().createHotspot(
          createHotspotElement(h),
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
    // "subtitleField" (e.g. scene.data.nextSceneSubtitle) is a manually
    // written note about what's coming up, set per scene in data.js - it
    // is NOT auto-generated from the target scene's own name/narrative.
    function configure(button, targetId, label, subtitleText) {
      if (!button) return;
      var target = targetId ? findSceneById(targetId) : null;
      var subtitleEl = button.querySelector('.info-nav-subtitle');

      button.disabled = !target;
      button.classList.toggle('disabled', !target);

      var ariaLabel = label;
      if (target) ariaLabel += ': ' + (subtitleText || target.data.name);
      button.setAttribute('aria-label', ariaLabel);

      button.onclick = target ? function () {
        switchScene(target);
      } : null;

      if (subtitleEl) {
        var text = target ? (subtitleText || '') : '';
        subtitleEl.textContent = text;
        subtitleEl.classList.toggle('empty', !text);
      }
    }

    configure(infoPrevious, scene.data.previousScene, 'Previous', scene.data.previousSceneSubtitle);
    configure(infoNext, scene.data.nextScene, 'Next', scene.data.nextSceneSubtitle);
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

  /* ---------------- HOTSPOTS (unified) ----------------
     One style covers every marker: video, image, and plain-text
     "info" hotspots. Each entry in a scene's "hotspots" array can
     optionally include "video" (a YouTube URL) and/or "image" (a
     path to a picture) - both are optional. With neither, it's just
     a text info hotspot using "text". The icon shown on the panorama
     is always driven by "category" (via settings.popupCategories in
     data.js, or "hotspotIcon" to override it directly), so new
     categories can be added there without touching this file.
  ------------------------------------------------ */

  function createHotspotElement(h) {
    var el = document.createElement('div');
    el.className = 'hotspot popup-hotspot';

    var img = document.createElement('img');
    img.src = h.hotspotIcon || getCategoryImage(h.category);
    img.alt = h.title || h.category || 'Information';
    el.appendChild(img);

    el.addEventListener('click', function (e) {
      openPopup(createPopupBody(h), h.category, sourceTitle(h), e, h);
    });

    return el;
  }

  function createPopupBody(h) {
    var wrap = document.createElement('div');
    wrap.className = 'popup-body';

    // Accept the current "video" / "image" fields, and fall back to the
    // older "url" (+ optional "type: 'video'") field used by earlier
    // versions of this tour, so previously-written data.js entries still
    // render correctly.
    var videoUrl = h.video || (h.type === 'video' ? h.url : null);
    var imageUrl = h.image || (!videoUrl ? h.url : null);

    if (videoUrl) {
      var iframe = document.createElement('iframe');
      var idMatch = videoUrl.match(/[?&]v=([^&]+)/) || videoUrl.match(/youtu\.be\/([^?&]+)/);
      var id = idMatch ? idMatch[1] : '';
      iframe.src = id ? "https://www.youtube.com/embed/" + id : videoUrl;
      iframe.setAttribute('allowfullscreen', '');
      wrap.appendChild(iframe);
    } else if (imageUrl) {
      var img = document.createElement('img');
      img.src = imageUrl;
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

  function openPopup(content, category, title, sourceEvent, h) {
    var overlay = document.createElement('div');
    overlay.className = 'popup-overlay';

    var box = document.createElement('div');
    box.className = 'popup-content';

    // Optional per-hotspot sizing, e.g. "width": "90vw", "height": "50vh"
    // (also overrides the default max-width/max-height so a deliberately
    // large popup isn't clipped back down again)
    if (h && h.width) {
      box.style.width = h.width;
      box.style.maxWidth = h.width;
    }
    if (h && h.height) {
      box.style.maxHeight = h.height;
    }

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

  /* ---------------- SPLASH SCREEN ----------------
     Shown once over the top of the tour on startup. All of its
     content comes from data.settings.splash in data.js - edit that
     object to change the welcome message, the two images, and the
     credits text. Set data.settings.splash.enabled to false to turn
     it off entirely.
  ------------------------------------------------ */

  function setupSplashScreen() {
    var splash = (data.settings && data.settings.splash) || {};

    if (!splashScreen || splash.enabled === false) {
      if (splashScreen) splashScreen.remove();
      return;
    }

    setText('splashHeading', splash.welcomeHeading);
    setHtml('splashBody', splash.welcomeBody);
    setImage('splashNavigation', 'splashNavigationImage',
      splash.navigationImage, splash.navigationImageAlt);

    setText('splashCreditsHeading', splash.creditsHeading);
    setHtml('splashCreditsBody', splash.creditsBody);
    setImage('splashCredits', 'splashCreditsImage',
      splash.creditsImage, splash.creditsImageAlt);

    var startButton = document.getElementById('splashStart');
    if (startButton) startButton.textContent = splash.buttonLabel || 'Start Tour';

    document.body.classList.add('splash-open');

    function closeSplash() {
      document.body.classList.remove('splash-open');
      document.body.classList.add('splash-closed');
    }

    if (splashClose) splashClose.addEventListener('click', closeSplash);
    if (splashStart) splashStart.addEventListener('click', closeSplash);
  }

  function setText(id, value) {
    var el = document.getElementById(id);
    if (!el) return;
    if (value) {
      el.textContent = value;
      el.hidden = false;
    } else {
      el.hidden = true;
    }
  }

  // Trusted content only: these values come from data.js (authored by the
  // site owner), the same way scene "narrative" bodies already do.
  function setHtml(id, value) {
    var el = document.getElementById(id);
    if (!el) return;
    if (value) {
      el.innerHTML = value;
      el.hidden = false;
    } else {
      el.hidden = true;
    }
  }

  // Hides the whole containing section (not just the <img>) whenever no
  // image path is configured, or if the configured image fails to load -
  // so an unset/incorrect path never leaves a broken-image icon on screen.
  function setImage(sectionId, imgId, src, alt) {
    var section = document.getElementById(sectionId);
    var img = document.getElementById(imgId);
    if (!img) return;

    if (!src) {
      if (section) section.hidden = true;
      return;
    }

    img.onerror = function () {
      if (section) section.hidden = true;
    };
    img.onload = function () {
      if (section) section.hidden = false;
    };
    img.alt = alt || '';
    img.src = src;
  }

  /* ---------------- INIT ---------------- */

  setupSplashScreen();
  switchScene(scenes[0]);

})();
