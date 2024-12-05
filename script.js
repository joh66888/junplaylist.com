import * as THREE from "three";

// import { TWEEN } from "three/addons/libs/tween.module.min.js";
import { TrackballControls } from "three/addons/controls/TrackballControls.js";
import {
  CSS3DRenderer,
  CSS3DObject,
} from "three/addons/renderers/CSS3DRenderer.js";
var stopfunction = false;
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

const table = [
  "images/got7_nanana.jpg",
  '<div class="spotify_box" style="background-color: rgb(12, 137, 62);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/2tEMbypmvYhf84mzVbhxwZ?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/stray_kids_s_class.jpg",
  '<div class="spotify_box" style="background-color: rgb(83, 83, 83);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/3gTQwwDNJ42CCLo3Sf4JDd?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/enhypen_polaroid_love.jpg",
  '<div class="spotify_box" style="background-color: rgb(184, 8, 40);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/5elW2CKSoqjYoJ32AGDxf1?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/seulgi_28_reasons.jpg",
  '<div class="spotify_box" style=" background-color:rgb(208, 24, 32);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/1dfsPqH09vnzUWEOsN98Ex?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/astro_crazy_sexy_cool.jpg",
  '<div class="spotify_box" style=" background-color:rgb(40, 120, 184);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/4hKhWLyYwCmugcMP8vbr7s?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/apink_dilemma.jpg",
  '<div class="spotify_box" style="background-color: rgb(57, 127, 146);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/3j0x2BUUtm2obQXS1lZuN3?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/kep1er_giddy.jpg",
  '<div class="spotify_box" style="background-color:rgb(216, 24, 80);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/6blIAzkMKENKqAfMwj5cZQ?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/enhypen_drunk_dazed.jpg",
  '<div class="spotify_box" style="background-color:rgb(168, 8, 48);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/1wcr8DjnN59Awev8nnKpQ4?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/le_sserafim_antifragile.jpg",
  '<div class="spotify_box" style="background-color: rgb(72, 72, 72);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/4fsQ0K37TOXa3hEQfjEic1?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/viviz_pull_up.jpg",
  '<div class="spotify_box" style="background-color: rgb(83, 83, 83);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/4Jmrkz9hytD3jaLDkZ7Qvc?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/nct_dream_candy.jpg",
  '<div class="spotify_box" style="background-color:rgb(0, 72, 24);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/27bIik73QCu8Xzt3xpG1bI?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/ive_iam.jpg",
  '<div class="spotify_box" style="background-color: rgb(83, 83, 83);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/70t7Q6AYG6ZgTYmJWcnkUM?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/newjeans_omg.jpg",
  '<div class="spotify_box" style="background-color: rgb(83, 83, 83);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/65FftemJ1DbbZ45DUfHJXE?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/red_velvet_birthday.jpg",
  '<div class="spotify_box" style="background-color: rgb(207, 57, 150);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/4LJgBT9yo0beHlaBesCFEv?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/seventeen_super.jpg",
  '<div class="spotify_box" style="background-color:rgb(83, 83, 83);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/3AOf6YEpxQ894FmrwI9k96?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/ive_kitsch.jpg",
  '<div class="spotify_box" style="background-color: rgb(188, 81, 128);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/4hbU7BVioG3WnoRNEy5YUf?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/treasure_u.jpg",
  '<div class="spotify_box" style="background-color: rgb(0, 134, 112);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/5NIHhuAdsaZHmGeEoHiGY7?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/nmixx_young_dumb_stupid.jpg",
  '<div class="spotify_box" style="background-color: rgb(189, 76, 158);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/2s2PGt2yeQly8auhPuHGIn?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/nct_127_lemonade.jpg",
  '<div class="spotify_box" style="background-color: rgb(0, 138, 66);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/6txVOdSbg928oeGhlVUrdK?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/nct_127_2_baddies.jpg",
  '<div class="spotify_box" style="background-color: rgb(0, 96, 192);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/1WKLxJpDqkQ9x1qEDNutoX?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/aespa_spicy.jpg",
  '<div class="spotify_box" style="background-color:rgb(40, 112, 176);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/1ULdASrNy5rurl1TZfFaMP?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/le_sserafim_unforgiven.jpg",
  '<div class="spotify_box" style=" background-color: rgb(160, 8, 48);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/51vRumtqBKNUy5Qtzj3Qvc?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/nmixx_love_me_like_this.jpg",
  '<div class="spotify_box" style=" background-color: rgb(92, 122, 141);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/6P3CtlzTKLxcNYGOS3es8m?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/taeyeon_invu.jpg",
  '<div class="spotify_box" style="background-color: rgb(64, 72, 88);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/7rXcCpIAoOUCydkVDMcoPV?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/le_sserafim_good_parts.jpg",
  '<div class="spotify_box" style=" background-color: rgb(72, 72, 72);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/1sZBzYhrQG40zcSuKkI93c?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/kep1er_up.jpg",
  '<div class="spotify_box" style="background-color: rgb(28, 119, 217);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/3XZAvh2NCDQYHgJei35VQ1?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/crush_rush_hour.jpg",
  '<div class="spotify_box" style="background-color: rgb(176, 48, 32);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/5aucVLKiumD89mxVCB4zvS?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/seventeen_fighting.jpg",
  '<div class="spotify_box" style=" background-color: rgb(24, 48, 88);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/7eBpUuPnDTfbeP1P4P93CS?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/idle_my_bag.jpg",
  '<div class="spotify_box" style="background-color: rgb(216, 8, 88);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/1t8sqIScEIP0B4bQzBuI2P?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/seventeen_hot.jpg",
  '<div class="spotify_box" style=" background-color: rgb(83, 83, 83);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/6I2tqFhk8tq69iursYxuxd?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/le_sserafim_impurities.jpg",
  '<div class="spotify_box" style="background-color:rgb(72, 72, 72);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/7F0MuIk5glqtowCUjbn9es?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/taeyang_shoong.jpg",
  '<div class="spotify_box" style="background-color:rgb(89, 123, 137);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/5HrIcZOo1DysX53qDRlRnt?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/idle_nxde.jpg",
  '<div class="spotify_box" style="background-color: rgb(168, 0, 0);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/6NnCWIWV740gP7DQ8kqdIE?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/aespa_im_unhappy.jpg",
  '<div class="spotify_box" style="background-color:rgb(40, 112, 176);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/6fzio74FGqFFsenYkbGPzR?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/jisoo_flower.jpg",
  '<div class="spotify_box" style="background-color: rgb(152, 8, 16);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/69CrOS7vEiHrhC2ILyEi0s?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/aespa_illusion.jpg",
  '<div class="spotify_box" style="background-color: rgb(120, 113, 156);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/5uFqjHOo3Sh0bVPCKf3DdH?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/nct_127_favorite.jpg",
  '<div class="spotify_box" style="background-color: rgb(122, 118, 118);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/2R8MZR1RCP4cIJITHDPRbY?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/ive_eleven.jpg",
  '<div class="spotify_box" style="background-color: rgb(216, 16, 72);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/7n2FZQsaLb7ZRfRPfEeIvr?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/treasure_darari.jpg",
  '<div class="spotify_box" style="background-color:rgb(0, 134, 112);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/0dcnrLo8s1rhjm8euGjI4n?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "images/chung_ha_bicycle.jpg",
  '<div class="spotify_box" style="background-color: rgb(0, 104, 184);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/7wDVvxMUdW5MtJUqFtuXUz?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
];

let camera, scene, renderer;
let controls;

var isMouseDown = false;
var boxmove = false;

const objects = [];
const targets = { table: [], sphere: [], helix: [], grid: [] };

init();
animate();

function onMouseMove(event) {
  // calculate mouse position in normalized device coordinates
  // (-1 to +1) for both components

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function init() {
  camera = new THREE.PerspectiveCamera(
    35,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );
  camera.position.z = 3000;

  scene = new THREE.Scene();

  let element;

  // table

  for (let i = 0; i < table.length; i += 2) {
    element = document.createElement("div");
    element.className = "element";
    // element.addEventListener("mouseover", onDocumentMouseDown, false);

    const innercard = document.createElement("div");
    innercard.className = "flip-card-inner";

    element.appendChild(innercard);

    const frontcard = document.createElement("div");
    frontcard.className = "flip-card-front";
    innercard.appendChild(frontcard);

    const img = document.createElement("img");
    img.setAttribute("rel", "preload");
    img.style.width = "300px";
    img.style.height = "424px";
    img.src = table[i];

    frontcard.appendChild(img);

    // 	//flip card back
    const details = document.createElement("div");
    details.className = "flip-card-back";

    // details.className = 'details';
    details.innerHTML = table[i + 1];

    innercard.appendChild(details);

    const objectCSS = new CSS3DObject(element);
    objectCSS.position.x = Math.random() * 4000 - 2000;
    objectCSS.position.y = Math.random() * 4000 - 2000;
    objectCSS.position.z = Math.random() * 4000 - 2000;

    scene.add(objectCSS);

    objects.push(objectCSS);

    const object = new THREE.Object3D();

    object.position.x = table[i + 3] * 320 - 1330;
    object.position.y = -(table[i + 4] * 520) + 990;

    targets.table.push(object);
  }

  // sphere

  const vector = new THREE.Vector3();

  for (let i = 0, l = objects.length; i < l; i++) {
    const phi = Math.acos(-1 + (2 * i) / l);
    const theta = Math.sqrt(l * Math.PI) * phi;

    const object = new THREE.Object3D();

    object.position.setFromSphericalCoords(800, phi, theta);

    vector.copy(object.position).multiplyScalar(2);

    object.lookAt(vector);

    targets.sphere.push(object);
  }

  // helix

  for (let i = 0, l = objects.length; i < l; i++) {
    // const theta = i * 0.176 + Math.PI;
    const theta = i * 0.158 + Math.PI;

    const y = -1;

    const object = new THREE.Object3D();
    //control the gap between cards
    object.position.setFromCylindricalCoords(1600, theta, y);

    vector.x = object.position.x * 1;
    vector.y = object.position.y;
    vector.z = object.position.z * 1;

    object.lookAt(vector);

    targets.helix.push(object);
  }

  // grid

  for (let i = 0; i < objects.length; i++) {
    const object = new THREE.Object3D();

    // object.position.x = (i % 30) * 400 - 800;
    object.position.x = i * 320;
    object.position.y = -(Math.floor(i / 5) % 5) * 0;
    object.position.z = 1800;
    // object.position.z = Math.floor(i / 5) * 10;

    targets.grid.push(object);
  }

  //

  renderer = new CSS3DRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  const allbox = renderer.domElement;

  document.getElementById("container").appendChild(allbox);

  controls = new TrackballControls(camera, allbox);
  controls.minDistance = 500;
  controls.maxDistance = 6000;
  controls.addEventListener("change", render);

  transform(targets.helix, 1500);

  //LOOP
  const buttonHelix = document.getElementById("helix");
  buttonHelix.addEventListener("click", function () {
    //remove mouse event
    const cbox = document.querySelectorAll(".element");

    for (let i = 0; i < cbox.length; i++) {
      cbox[i].removeEventListener("mouseover", onDocumentMouseDown, false);
    }

    // //remove mouse event
    const vbox = document.querySelectorAll(".flip-card-back");

    for (let i = 0; i < vbox.length; i++) {
      vbox[i].removeEventListener("mouseover", onDocumentMouseLeave, false);
    }

    const sbox = document.querySelectorAll(".spotify_box");

    for (let i = 0; i < sbox.length; i++) {
      sbox[i].style.display = "block";
    }

    const ibox = document.querySelectorAll("iframe");

    for (let i = 0; i < ibox.length; i++) {
      ibox[i].style.display = "none";
    }

    document.getElementById("right").style.display = "none";
    document.getElementById("left").style.display = "none";

    var elements = document.querySelectorAll(".element");

    for (var i = 0, length = elements.length; i < length; i++) {
      elements[i].classList.remove("mainbox");
    }

    scene.position.x = 0;

    isMouseDown = false;
    stopfunction = false;
    controls.enabled = true;
    transform(targets.helix, 1500);
  });

  //CARD
  const buttonGrid = document.getElementById("grid");
  buttonGrid.addEventListener("click", function () {
    //add mouse event
    const cbox = document.querySelectorAll(".element");
    for (let i = 0; i < cbox.length; i++) {
      cbox[i].addEventListener("mouseover", onDocumentMouseDown, false);
    }
    const flipbox = document.querySelectorAll(".flip-card-back");
    for (let i = 0; i < cbox.length; i++) {
      flipbox[i].addEventListener("mouseout", onDocumentMouseLeave, false);
    }

    const fbox = document.querySelectorAll("iframe");

    for (let i = 0; i < fbox.length; i++) {
      fbox[i].style.display = "none";
    }

    const sbox = document.querySelectorAll(".spotify_box");

    for (let i = 0; i < sbox.length; i++) {
      sbox[i].style.display = "none";
    }

    //document.querySelectorAll(".flip-card-back").style.display = "none";
    // // .flip-card-back

    boxmove = true;

    stopfunction = true;
    isMouseDown = true;

    controls.enabled = false;
    transform(targets.grid, 1500);
    controls.reset();
    scene.position.x = -3520;
    scene.rotation.y = 0;

    document.getElementById("right").style.display = "block";
    document.getElementById("left").style.display = "block";

    var elements = document.querySelectorAll(".element");

    for (var i = 0, length = elements.length; i < length; i++) {
      elements[i].classList.add("mainbox");
    }
  });

  window.addEventListener("resize", onWindowResize);
}

const buttonRight = document.getElementById("right");
buttonRight.addEventListener("click", function () {
  if (scene.position.x > -12780) {
    scene.position.x -= 320;
  } else {
    scene.position.x = -6700;
  }
});

const buttonLeft = document.getElementById("left");
buttonLeft.addEventListener("click", function () {
  if (scene.position.x < 0) {
    scene.position.x += 320;
  } else {
    scene.position.x = -6700;
  }
});

function onDocumentMouseDown() {
  isMouseDown = true;

  const frame = this.querySelector("iframe").getAttribute("data-src");
  const src = frame;
  this.querySelector("iframe").setAttribute("src", src);
  this.querySelector("iframe").style.display = "block";
  this.querySelector(".flip-card-inner").style.transform = "rotateY(180deg)";
  this.querySelector(".spotify_box").style.display = "block";
}

function onDocumentMouseLeave() {
  var boxone = this.querySelector(".spotify_box iframe");
  boxone.removeAttribute("src");
  this.parentElement.style.transform = "rotateY(0deg)";
  // this.querySelector(".spotify_box").style.display = "none";
  // this.querySelector(".flip-card-inner").style.transform = "rotateY(0deg)";

  if (stopfunction) {
  } else {
    isMouseDown = false;
  }

  // boxone.querySelector("iframe").display = "none";
  // boxone.style.display = "none";
}

function transform(targets, duration) {
  TWEEN.removeAll();

  for (let i = 0; i < objects.length; i++) {
    const object = objects[i];
    const target = targets[i];

    new TWEEN.Tween(object.position)
      .to(
        { x: target.position.x, y: target.position.y, z: target.position.z },
        Math.random() * duration + duration
      )
      .easing(TWEEN.Easing.Exponential.InOut)
      .start();
  }

  new TWEEN.Tween(this)
    .to({}, duration * 2)
    .onUpdate(render)
    .start();
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  render();
}

function animate() {
  requestAnimationFrame(animate);
  TWEEN.update();
  render();
  controls.update();

  if (!isMouseDown) {
    scene.rotation.y += 0.0005;
  }
}

function render() {
  renderer.render(scene, camera);
}
