import { b as subscribe, f as getContext, p as createEventDispatcher, o as onDestroy } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, b as escape, a as add_attribute, e as each } from './ssr-BoMjCg5r.js';
import { M as MemberAvatar } from './MemberAvatar-DsbxH0w2.js';
import { a as getFullName } from './member-DajX-teH.js';
import { gw as members_selectedProfilePictureOption, gx as members_profilePictureOption, gy as members_uploadNew, go as members_save } from './messages-D8OfyZiq.js';
import { a as fileProxy } from './superForm-DTXAq_ly.js';
import './index-BHX467Gw.js';
import { n as zodClient } from './superValidate-C2lU2J3v.js';
import { s as superForm } from './superForms-CCN_8vE4.js';
import { u as uploadSchema } from './76-DbVB2v1z.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import 'tailwind-merge';
import './runtime-BxW51cRH.js';
import './index2-Bcb5RUHj.js';
import './stores-ClpLLrvc.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './index4-835RQQFE.js';
import './prod-ssr-DxkyU4_t.js';
import './scheduler-CzeG9NBC.js';
import './stringify-cFltMSLq.js';
import './constants-BTUpIS8C.js';
import './index-CuABlRvJ.js';
import './toast2-BAKD7V1C.js';
import 'uuid';
import './client3-CIDcnctW.js';
import './fileHandler-BJyM8X80.js';
import './shared-server-BfUoNEXY.js';
import 'minio';
import './apiNames-BaTM20TQ.js';
import './authorization-DvGst16H.js';
import 'path';
import 'sharp';
import './pageTitle-Dw7hiKEr.js';

function restrictPosition(position, imageSize, cropSize, zoom) {
  return {
    x: restrictPositionCoord(position.x, imageSize.width, cropSize.width, zoom),
    y: restrictPositionCoord(position.y, imageSize.height, cropSize.height, zoom)
  };
}
function restrictPositionCoord(position, imageSize, cropSize, zoom) {
  let maxPosition = imageSize * zoom / 2 - cropSize / 2;
  if (zoom < 1) {
    maxPosition = cropSize / 2 - imageSize * zoom / 2;
  }
  return Math.min(maxPosition, Math.max(position, -maxPosition));
}
function getDistanceBetweenPoints(pointA, pointB) {
  return Math.sqrt(Math.pow(pointA.y - pointB.y, 2) + Math.pow(pointA.x - pointB.x, 2));
}
function getCenter(a, b) {
  return {
    x: (b.x + a.x) / 2,
    y: (b.y + a.y) / 2
  };
}
const css = {
  code: ".container.svelte-wphbcw{position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;user-select:none;touch-action:none;cursor:move}.image.svelte-wphbcw{max-width:100%;max-height:100%;margin:auto;position:absolute;top:0;bottom:0;left:0;right:0;will-change:transform}.cropperArea.svelte-wphbcw{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);box-shadow:0 0 0 9999em;box-sizing:border-box;color:rgba(0, 0, 0, 0.5);border:1px solid rgba(255, 255, 255, 0.5);overflow:hidden}.grid.svelte-wphbcw:before{content:' ';box-sizing:border-box;border:1px solid rgba(255, 255, 255, 0.5);position:absolute;top:0;bottom:0;left:33.33%;right:33.33%;border-top:0;border-bottom:0}.grid.svelte-wphbcw:after{content:' ';box-sizing:border-box;border:1px solid rgba(255, 255, 255, 0.5);position:absolute;top:33.33%;bottom:33.33%;left:0;right:0;border-left:0;border-right:0}.round.svelte-wphbcw{border-radius:50%}",
  map: `{"version":3,"file":"Cropper.svelte","sources":["Cropper.svelte"],"sourcesContent":["<script>\\nimport { getContext as pArAgLiDe_translate_attribute_pass_getContext } from 'svelte';\\nimport { createEventDispatcher, onDestroy, onMount } from \\"svelte\\";\\nimport * as helpers from \\"./helpers\\";\\nexport let image;\\nexport let crop = { x: 0, y: 0 };\\nexport let zoom = 1;\\nexport let aspect = 4 / 3;\\nexport let minZoom = 1;\\nexport let maxZoom = 3;\\nexport let cropSize = null;\\nexport let cropShape = \\"rect\\";\\nexport let showGrid = true;\\nexport let zoomSpeed = 1;\\nexport let crossOrigin = null;\\nexport let restrictPosition = true;\\nexport let tabindex = void 0;\\nlet cropperSize = null;\\nlet imageSize = { width: 0, height: 0, naturalWidth: 0, naturalHeight: 0 };\\nlet containerEl = null;\\nlet containerRect = null;\\nlet imgEl = null;\\nlet dragStartPosition = { x: 0, y: 0 };\\nlet dragStartCrop = { x: 0, y: 0 };\\nlet lastPinchDistance = 0;\\nlet rafDragTimeout = null;\\nlet rafZoomTimeout = null;\\nconst dispatch = createEventDispatcher();\\nonMount(() => {\\n  if (imgEl && imgEl.complete) {\\n    onImgLoad();\\n  }\\n  if (containerEl) {\\n    containerEl.addEventListener(\\"gesturestart\\", preventZoomSafari);\\n    containerEl.addEventListener(\\"gesturechange\\", preventZoomSafari);\\n  }\\n});\\nonDestroy(() => {\\n  if (containerEl) {\\n    containerEl.removeEventListener(\\"gesturestart\\", preventZoomSafari);\\n    containerEl.removeEventListener(\\"gesturechange\\", preventZoomSafari);\\n  }\\n  cleanEvents();\\n});\\nconst preventZoomSafari = (e) => e.preventDefault();\\nconst cleanEvents = () => {\\n  if (typeof document !== \\"undefined\\") {\\n    document.removeEventListener(\\"mousemove\\", onMouseMove);\\n    document.removeEventListener(\\"mouseup\\", onDragStopped);\\n    document.removeEventListener(\\"touchmove\\", onTouchMove);\\n    document.removeEventListener(\\"touchend\\", onDragStopped);\\n  }\\n};\\nconst onImgLoad = () => {\\n  computeSizes();\\n  emitCropData();\\n};\\nconst getAspect = () => {\\n  if (cropSize) {\\n    return cropSize.width / cropSize.height;\\n  }\\n  return aspect;\\n};\\nconst computeSizes = () => {\\n  if (imgEl) {\\n    imageSize = {\\n      width: imgEl.width,\\n      height: imgEl.height,\\n      naturalWidth: imgEl.naturalWidth,\\n      naturalHeight: imgEl.naturalHeight\\n    };\\n    cropperSize = cropSize ? cropSize : helpers.getCropSize(imgEl.width, imgEl.height, aspect);\\n  }\\n  if (containerEl) {\\n    containerRect = containerEl.getBoundingClientRect();\\n  }\\n};\\nconst getMousePoint = (e) => ({\\n  x: Number(e.clientX),\\n  y: Number(e.clientY)\\n});\\nconst getTouchPoint = (touch) => ({\\n  x: Number(touch.clientX),\\n  y: Number(touch.clientY)\\n});\\nconst onMouseDown = (e) => {\\n  document.addEventListener(\\"mousemove\\", onMouseMove);\\n  document.addEventListener(\\"mouseup\\", onDragStopped);\\n  onDragStart(getMousePoint(e));\\n};\\nconst onMouseMove = (e) => onDrag(getMousePoint(e));\\nconst onTouchStart = (e) => {\\n  document.addEventListener(\\"touchmove\\", onTouchMove, { passive: false });\\n  document.addEventListener(\\"touchend\\", onDragStopped);\\n  if (e.touches.length === 2) {\\n    onPinchStart(e);\\n  } else if (e.touches.length === 1) {\\n    onDragStart(getTouchPoint(e.touches[0]));\\n  }\\n};\\nconst onTouchMove = (e) => {\\n  e.preventDefault();\\n  if (e.touches.length === 2) {\\n    onPinchMove(e);\\n  } else if (e.touches.length === 1) {\\n    onDrag(getTouchPoint(e.touches[0]));\\n  }\\n};\\nconst onDragStart = ({ x, y }) => {\\n  dragStartPosition = { x, y };\\n  dragStartCrop = { x: crop.x, y: crop.y };\\n};\\nconst onDrag = ({ x, y }) => {\\n  if (rafDragTimeout)\\n    window.cancelAnimationFrame(rafDragTimeout);\\n  rafDragTimeout = window.requestAnimationFrame(() => {\\n    if (x === void 0 || y === void 0 || !cropperSize)\\n      return;\\n    const offsetX = x - dragStartPosition.x;\\n    const offsetY = y - dragStartPosition.y;\\n    const requestedPosition = {\\n      x: dragStartCrop.x + offsetX,\\n      y: dragStartCrop.y + offsetY\\n    };\\n    crop = restrictPosition ? helpers.restrictPosition(requestedPosition, imageSize, cropperSize, zoom) : requestedPosition;\\n  });\\n};\\nconst onDragStopped = () => {\\n  cleanEvents();\\n  emitCropData();\\n};\\nconst onPinchStart = (e) => {\\n  const pointA = getTouchPoint(e.touches[0]);\\n  const pointB = getTouchPoint(e.touches[1]);\\n  lastPinchDistance = helpers.getDistanceBetweenPoints(pointA, pointB);\\n  onDragStart(helpers.getCenter(pointA, pointB));\\n};\\nconst onPinchMove = (e) => {\\n  const pointA = getTouchPoint(e.touches[0]);\\n  const pointB = getTouchPoint(e.touches[1]);\\n  const center = helpers.getCenter(pointA, pointB);\\n  onDrag(center);\\n  if (rafZoomTimeout)\\n    window.cancelAnimationFrame(rafZoomTimeout);\\n  rafZoomTimeout = window.requestAnimationFrame(() => {\\n    const distance = helpers.getDistanceBetweenPoints(pointA, pointB);\\n    const newZoom = zoom * (distance / lastPinchDistance);\\n    setNewZoom(newZoom, center);\\n    lastPinchDistance = distance;\\n  });\\n};\\nconst onWheel = (e) => {\\n  const point = getMousePoint(e);\\n  const newZoom = zoom - e.deltaY * zoomSpeed / 200;\\n  setNewZoom(newZoom, point);\\n};\\nconst getPointOnContainer = ({ x, y }) => {\\n  if (!containerRect) {\\n    throw new Error(\\"The Cropper is not mounted\\");\\n  }\\n  return {\\n    x: containerRect.width / 2 - (x - containerRect.left),\\n    y: containerRect.height / 2 - (y - containerRect.top)\\n  };\\n};\\nconst getPointOnImage = ({ x, y }) => ({\\n  x: (x + crop.x) / zoom,\\n  y: (y + crop.y) / zoom\\n});\\nconst setNewZoom = (newZoom, point) => {\\n  if (!cropperSize)\\n    return;\\n  const zoomPoint = getPointOnContainer(point);\\n  const zoomTarget = getPointOnImage(zoomPoint);\\n  zoom = Math.min(maxZoom, Math.max(newZoom, minZoom));\\n  const requestedPosition = {\\n    x: zoomTarget.x * zoom - zoomPoint.x,\\n    y: zoomTarget.y * zoom - zoomPoint.y\\n  };\\n  crop = restrictPosition ? helpers.restrictPosition(requestedPosition, imageSize, cropperSize, zoom) : requestedPosition;\\n};\\nconst emitCropData = () => {\\n  if (!cropperSize || cropperSize.width === 0)\\n    return;\\n  const position = restrictPosition ? helpers.restrictPosition(crop, imageSize, cropperSize, zoom) : crop;\\n  const { croppedAreaPercentages, croppedAreaPixels } = helpers.computeCroppedArea(\\n    position,\\n    imageSize,\\n    cropperSize,\\n    getAspect(),\\n    zoom,\\n    restrictPosition\\n  );\\n  dispatch(\\"cropcomplete\\", {\\n    percent: croppedAreaPercentages,\\n    pixels: croppedAreaPixels\\n  });\\n};\\n$:\\n  if (imgEl) {\\n    cropperSize = cropSize ? cropSize : helpers.getCropSize(imgEl.width, imgEl.height, aspect);\\n  }\\n$:\\n  zoom && emitCropData();\\n$:\\n  if (aspect) {\\n    computeSizes();\\n    emitCropData();\\n  }\\n\\nconst pArAgLiDe_translate_attribute_pass_context = pArAgLiDe_translate_attribute_pass_getContext('$paraglide-adapter-sveltekit:context');\\n    \\n        /**\\n         * @param {string} value\\n         * @param {string | undefined} lang_value\\n         */\\n        function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {\\nif(typeof value !== \\"string\\") return value;\\n            if(!pArAgLiDe_translate_attribute_pass_context) return value;\\n            return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);\\n        }\\n\\n        /**\\n         * @typedef {{ attribute_name: string, lang_attribute_name?: string }} AttributeTranslation\\n         */\\n\\n        /**\\n         * Takes in an object of attributes, and an object of attribute translations\\n         * & applies the translations to the attributes\\n         * \\n         * @param {Record<string, any>} attrs\\n         * @param {AttributeTranslation[]} attribute_translations\\n         */\\n        function pArAgLiDe_translate_attribute_pass_handle_attributes(attrs, attribute_translations) {\\n            //If the element has the data-no-translate attribute, don't translate it\\n            if(attrs[\\"data-no-translate\\"] === true) return attrs;\\n\\n            for (const { attribute_name, lang_attribute_name } of attribute_translations){\\n                if(attribute_name in attrs) {\\n                    const attr = attrs[attribute_name];\\n                    const lang_attr = lang_attribute_name ? attrs[lang_attribute_name] : undefined;\\n                    attrs[attribute_name] = pArAgLiDe_translate_attribute_pass_translateAttribute(attr, lang_attr);\\n                }\\n            }\\n\\n            return attrs;\\n        }\\n<\/script>\\n\\n<svelte:window on:resize={computeSizes} />\\n<div\\n  class=\\"container\\"\\n  bind:this={containerEl}\\n  on:mousedown|preventDefault={onMouseDown}\\n  on:touchstart|nonpassive|preventDefault={onTouchStart}\\n  on:wheel|nonpassive|preventDefault={onWheel}\\n  {tabindex}\\n  role=\\"button\\"\\n  data-testid=\\"container\\"\\n>\\n  <img\\n    bind:this={imgEl}\\n    class=\\"image\\"\\n    src={image}\\n    on:load={onImgLoad}\\n    alt=\\"\\"\\n    style=\\"transform: translate({crop.x}px, {crop.y}px) scale({zoom});\\"\\n    crossorigin={crossOrigin}\\n  />\\n  {#if cropperSize}\\n    <div\\n      class=\\"cropperArea\\"\\n      class:round={cropShape === 'round'}\\n      class:grid={showGrid}\\n      style=\\"width: {cropperSize.width}px; height: {cropperSize.height}px;\\"\\n      data-testid=\\"cropper\\"\\n    />\\n  {/if}\\n</div>\\n\\n<style>\\n  .container {\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    bottom: 0;\\n    overflow: hidden;\\n    -webkit-user-select: none;\\n       -moz-user-select: none;\\n            user-select: none;\\n    touch-action: none;\\n    cursor: move;\\n  }\\n\\n  .image {\\n    max-width: 100%;\\n    max-height: 100%;\\n    margin: auto;\\n    position: absolute;\\n    top: 0;\\n    bottom: 0;\\n    left: 0;\\n    right: 0;\\n    will-change: transform;\\n  }\\n\\n  .cropperArea {\\n    position: absolute;\\n    left: 50%;\\n    top: 50%;\\n    transform: translate(-50%, -50%);\\n    box-shadow: 0 0 0 9999em;\\n    box-sizing: border-box;\\n    color: rgba(0, 0, 0, 0.5);\\n    border: 1px solid rgba(255, 255, 255, 0.5);\\n    overflow: hidden;\\n  }\\n\\n  .grid:before {\\n    content: ' ';\\n    box-sizing: border-box;\\n    border: 1px solid rgba(255, 255, 255, 0.5);\\n    position: absolute;\\n    top: 0;\\n    bottom: 0;\\n    left: 33.33%;\\n    right: 33.33%;\\n    border-top: 0;\\n    border-bottom: 0;\\n  }\\n\\n  .grid:after {\\n    content: ' ';\\n    box-sizing: border-box;\\n    border: 1px solid rgba(255, 255, 255, 0.5);\\n    position: absolute;\\n    top: 33.33%;\\n    bottom: 33.33%;\\n    left: 0;\\n    right: 0;\\n    border-left: 0;\\n    border-right: 0;\\n  }\\n\\n  .round {\\n    border-radius: 50%;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAyRE,wBAAW,CACT,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CAAC,CACT,QAAQ,CAAE,MAAM,CAChB,mBAAmB,CAAE,IAAI,CACtB,gBAAgB,CAAE,IAAI,CACjB,WAAW,CAAE,IAAI,CACzB,YAAY,CAAE,IAAI,CAClB,MAAM,CAAE,IACV,CAEA,oBAAO,CACL,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,MAAM,CAAE,CAAC,CACT,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,CAAC,CACR,WAAW,CAAE,SACf,CAEA,0BAAa,CACX,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,GAAG,CACT,GAAG,CAAE,GAAG,CACR,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC,CAChC,UAAU,CAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,MAAM,CACxB,UAAU,CAAE,UAAU,CACtB,KAAK,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACzB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC1C,QAAQ,CAAE,MACZ,CAEA,mBAAK,OAAQ,CACX,OAAO,CAAE,GAAG,CACZ,UAAU,CAAE,UAAU,CACtB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC1C,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,MAAM,CAAE,CAAC,CACT,IAAI,CAAE,MAAM,CACZ,KAAK,CAAE,MAAM,CACb,UAAU,CAAE,CAAC,CACb,aAAa,CAAE,CACjB,CAEA,mBAAK,MAAO,CACV,OAAO,CAAE,GAAG,CACZ,UAAU,CAAE,UAAU,CACtB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC1C,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,MAAM,CACX,MAAM,CAAE,MAAM,CACd,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,CAAC,CACR,WAAW,CAAE,CAAC,CACd,YAAY,CAAE,CAChB,CAEA,oBAAO,CACL,aAAa,CAAE,GACjB"}`
};
const Cropper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image } = $$props;
  let { crop = { x: 0, y: 0 } } = $$props;
  let { zoom = 1 } = $$props;
  let { aspect = 4 / 3 } = $$props;
  let { minZoom = 1 } = $$props;
  let { maxZoom = 3 } = $$props;
  let { cropSize = null } = $$props;
  let { cropShape = "rect" } = $$props;
  let { showGrid = true } = $$props;
  let { zoomSpeed = 1 } = $$props;
  let { crossOrigin = null } = $$props;
  let { restrictPosition: restrictPosition$1 = true } = $$props;
  let { tabindex = void 0 } = $$props;
  let cropperSize = null;
  let imageSize = {
    width: 0,
    height: 0,
    naturalWidth: 0,
    naturalHeight: 0
  };
  let containerEl = null;
  let imgEl = null;
  let dragStartPosition = { x: 0, y: 0 };
  let dragStartCrop = { x: 0, y: 0 };
  let rafDragTimeout = null;
  let rafZoomTimeout = null;
  createEventDispatcher();
  onDestroy(() => {
    cleanEvents();
  });
  const cleanEvents = () => {
    if (typeof document !== "undefined") {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onDragStopped);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onDragStopped);
    }
  };
  const getMousePoint = (e) => ({
    x: Number(e.clientX),
    y: Number(e.clientY)
  });
  const getTouchPoint = (touch) => ({
    x: Number(touch.clientX),
    y: Number(touch.clientY)
  });
  const onMouseMove = (e) => onDrag(getMousePoint(e));
  const onTouchMove = (e) => {
    e.preventDefault();
    if (e.touches.length === 2) {
      onPinchMove(e);
    } else if (e.touches.length === 1) {
      onDrag(getTouchPoint(e.touches[0]));
    }
  };
  const onDrag = ({ x, y }) => {
    if (rafDragTimeout) window.cancelAnimationFrame(rafDragTimeout);
    rafDragTimeout = window.requestAnimationFrame(() => {
      if (x === void 0 || y === void 0 || !cropperSize) return;
      const offsetX = x - dragStartPosition.x;
      const offsetY = y - dragStartPosition.y;
      const requestedPosition = {
        x: dragStartCrop.x + offsetX,
        y: dragStartCrop.y + offsetY
      };
      crop = restrictPosition$1 ? restrictPosition(requestedPosition, imageSize, cropperSize, zoom) : requestedPosition;
    });
  };
  const onDragStopped = () => {
    cleanEvents();
  };
  const onPinchMove = (e) => {
    const pointA = getTouchPoint(e.touches[0]);
    const pointB = getTouchPoint(e.touches[1]);
    const center = getCenter(pointA, pointB);
    onDrag(center);
    if (rafZoomTimeout) window.cancelAnimationFrame(rafZoomTimeout);
    rafZoomTimeout = window.requestAnimationFrame(() => {
      getDistanceBetweenPoints(pointA, pointB);
    });
  };
  getContext("$paraglide-adapter-sveltekit:context");
  if ($$props.image === void 0 && $$bindings.image && image !== void 0) $$bindings.image(image);
  if ($$props.crop === void 0 && $$bindings.crop && crop !== void 0) $$bindings.crop(crop);
  if ($$props.zoom === void 0 && $$bindings.zoom && zoom !== void 0) $$bindings.zoom(zoom);
  if ($$props.aspect === void 0 && $$bindings.aspect && aspect !== void 0) $$bindings.aspect(aspect);
  if ($$props.minZoom === void 0 && $$bindings.minZoom && minZoom !== void 0) $$bindings.minZoom(minZoom);
  if ($$props.maxZoom === void 0 && $$bindings.maxZoom && maxZoom !== void 0) $$bindings.maxZoom(maxZoom);
  if ($$props.cropSize === void 0 && $$bindings.cropSize && cropSize !== void 0) $$bindings.cropSize(cropSize);
  if ($$props.cropShape === void 0 && $$bindings.cropShape && cropShape !== void 0) $$bindings.cropShape(cropShape);
  if ($$props.showGrid === void 0 && $$bindings.showGrid && showGrid !== void 0) $$bindings.showGrid(showGrid);
  if ($$props.zoomSpeed === void 0 && $$bindings.zoomSpeed && zoomSpeed !== void 0) $$bindings.zoomSpeed(zoomSpeed);
  if ($$props.crossOrigin === void 0 && $$bindings.crossOrigin && crossOrigin !== void 0) $$bindings.crossOrigin(crossOrigin);
  if ($$props.restrictPosition === void 0 && $$bindings.restrictPosition && restrictPosition$1 !== void 0) $$bindings.restrictPosition(restrictPosition$1);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0) $$bindings.tabindex(tabindex);
  $$result.css.add(css);
  return ` <div class="container svelte-wphbcw"${add_attribute("tabindex", tabindex, 0)} role="button" data-testid="container"${add_attribute("this", containerEl, 0)}><img class="image svelte-wphbcw"${add_attribute("src", image, 0)} alt="" style="${"transform: translate(" + escape(crop.x, true) + "px, " + escape(crop.y, true) + "px) scale(" + escape(zoom, true) + ");"}"${add_attribute("crossorigin", crossOrigin, 0)}${add_attribute("this", imgEl, 0)}> ${``} </div>`;
});
const ProfileImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $changeErrors, $$unsubscribe_changeErrors;
  let $deleteErrors, $$unsubscribe_deleteErrors;
  let { fileName } = $$props;
  let { url } = $$props;
  let { current = false } = $$props;
  let { changeForm } = $$props;
  let { deleteForm } = $$props;
  const { errors: changeErrors, enhance: changeEnhance } = superForm(changeForm, { id: `change-${fileName}` });
  $$unsubscribe_changeErrors = subscribe(changeErrors, (value) => $changeErrors = value);
  const { errors: deleteErrors, enhance: deleteEnhance } = superForm(deleteForm, { id: `delete-${fileName}` });
  $$unsubscribe_deleteErrors = subscribe(deleteErrors, (value) => $deleteErrors = value);
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.fileName === void 0 && $$bindings.fileName && fileName !== void 0) $$bindings.fileName(fileName);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0) $$bindings.url(url);
  if ($$props.current === void 0 && $$bindings.current && current !== void 0) $$bindings.current(current);
  if ($$props.changeForm === void 0 && $$bindings.changeForm && changeForm !== void 0) $$bindings.changeForm(changeForm);
  if ($$props.deleteForm === void 0 && $$bindings.deleteForm && deleteForm !== void 0) $$bindings.deleteForm(deleteForm);
  $$unsubscribe_changeErrors();
  $$unsubscribe_deleteErrors();
  return `<div class="relative"><form method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/change`, void 0), 0)}><input type="hidden"${add_attribute("value", url, 0)} name="url"> ${$changeErrors.url ? `<p class="text-error">${escape($changeErrors.url)}</p>` : ``} <button type="submit"><div class="${"avatar overflow-hidden rounded-full border-8 " + escape(current ? "border-primary" : "border-transparent", true)}"><figure class="relative w-48"><img${add_attribute("src", url, 0)}${add_attribute(
    "alt",
    current ? members_selectedProfilePictureOption() : members_profilePictureOption(),
    0
  )}></figure></div></button></form> <form method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/delete`, void 0), 0)}><input type="hidden"${add_attribute("value", fileName, 0)} name="fileName"> ${$deleteErrors.fileName ? `<p class="text-error">${escape($deleteErrors.fileName)}</p>` : ``} <button class="btn btn-square btn-secondary btn-sm absolute bottom-1 right-1" data-svelte-h="svelte-vtr4nf"><span class="i-mdi-delete"></span></button></form></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let member;
  let photos;
  let $form, $$unsubscribe_form;
  let $errors, $$unsubscribe_errors;
  let $$unsubscribe_file;
  let { data } = $$props;
  let isEditing = false;
  const { form, errors, enhance } = superForm(data.uploadForm, {
    resetForm: true,
    onResult(event) {
      if (event.result.type === "success") {
        avatar = void 0;
        isEditing = false;
      }
    },
    validators: zodClient(uploadSchema)
  });
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  const file = fileProxy(form, "image");
  $$unsubscribe_file = subscribe(file, (value) => value);
  let avatar = void 0;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  member = data.member;
  photos = data.photos;
  $$unsubscribe_form();
  $$unsubscribe_errors();
  $$unsubscribe_file();
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: "Bio - " + getFullName(member) }, {}, {})} <header class="flex gap-4">${validate_component(MemberAvatar, "MemberAvatar").$$render($$result, { member, class: "w-32 rounded-lg" }, {}, {})} <div class="flex flex-col"><h1 class="text-3xl font-bold">${escape(getFullName(member))}</h1> ${escape(member.studentId)}</div></header> <div class="mt-4 flex flex-wrap items-start gap-4">${!isEditing ? `<button class="btn btn-primary btn-lg">${escape(members_uploadNew())}</button>` : `<form method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/upload`, void 0), 0)} class="form-control gap-2" enctype="multipart/form-data">${avatar ? `<div class="relative h-[400px] w-[400px]">${validate_component(Cropper, "Cropper").$$render(
    $$result,
    {
      aspect: 1 / 1,
      cropShape: "round",
      showGrid: false,
      image: avatar
    },
    {},
    {}
  )}</div>` : ``} <input type="hidden" name="cropX"${add_attribute("value", $form.cropX, 0)}> <input type="hidden" name="cropY"${add_attribute("value", $form.cropY, 0)}> <input type="hidden" name="cropWidth"${add_attribute("value", $form.cropWidth, 0)}> <input type="hidden" name="cropHeight"${add_attribute("value", $form.cropHeight, 0)}> ${$errors.cropX ? `<p class="text-error">${escape($errors.cropX)}</p>` : ``} ${$errors.cropY ? `<p class="text-error">${escape($errors.cropY)}</p>` : ``} ${$errors.cropWidth ? `<p class="text-error">${escape($errors.cropWidth)}</p>` : ``} ${$errors.cropHeight ? `<p class="text-error">${escape($errors.cropHeight)}</p>` : ``} <input type="file" accept="image/*" name="image" class="file-input file-input-bordered w-full max-w-xs"> ${$errors.image ? `<p class="text-error">${escape($errors.image)}</p>` : ``} <button type="submit" class="btn btn-primary">${escape(members_save())}</button></form>`} ${each(photos, (photo) => {
    return `${photo.thumbnailUrl ? `<div class="relative">${validate_component(ProfileImage, "ProfileImage").$$render(
      $$result,
      {
        url: photo.thumbnailUrl,
        current: member.picturePath === photo.thumbnailUrl,
        fileName: photo.name,
        changeForm: data.changeForm,
        deleteForm: data.deleteForm
      },
      {},
      {}
    )} </div>` : ``}`;
  })}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Bm-BWuk1.js.map
