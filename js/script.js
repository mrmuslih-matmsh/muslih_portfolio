
$(document).ready(function () {

  $('#menu').click(function () {

    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');

  });

  $(window).on('scroll load', function () {

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if ($(window).scrollTop() > 0) {
      $('.top').show();
    } else {
      $('.top').hide();
    }

  });

  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();

    $('html,body').animate({
      scrollTop: $($(this).attr('href')).offset().top,
    },

      500, 'linear'

    );

  });

});

var typed = new Typed(".auto_type_qualification", {
  strings: ["BSc(Hons) Computer Science in Software Engineering", "HND in Software Engineering", "Diploma in IT", "Diploma in English", "NVQ 4 in Graphic Design"],
  typeSpeed: 60,
  backSpeed: 60,
  loop: true
});

var typed = new Typed(".auto_type_skills", {
  strings: ["Web Development", "UI UX Design", "Wordpress", "SEO", "Mysql", "Java", "Figma", "Firebase"],
  typeSpeed: 60,
  backSpeed: 60,
  loop: true
});

var typed = new Typed(".post", {
  strings: ["Web Developer", "UI UX Designer", "Wordpress Developer", "Database Administrator"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
});

function showBigImage(imageSrc) {
  var modal = document.getElementById('bigImageModal');
  var bigImage = document.getElementById('bigImage');

  bigImage.src = imageSrc;
  modal.style.display = 'block';
}

function closeBigImageModal() {
  var modal = document.getElementById('bigImageModal');
  modal.style.display = 'none';
}



var colour = "#01E0CB";
var sparkles = 120;
var x = ox = 400;
var y = oy = 300;
var swide = 800;
var shigh = 600;
var sleft = sdown = 0;
var tiny = new Array();
var star = new Array();
var starv = new Array();
var starx = new Array();
var stary = new Array();
var tinyx = new Array();
var tinyy = new Array();
var tinyv = new Array();

window.onload = function () {
  if (document.getElementById) {
    var i, rats, rlef, rdow;
    for (var i = 0; i < sparkles; i++) {
      var rats = createDiv(3, 3);
      rats.style.visibility = "hidden";
      document.body.appendChild(tiny[i] = rats);
      starv[i] = 0;
      tinyv[i] = 0;
      var rats = createDiv(5, 5);
      rats.style.backgroundColor = "transparent";
      rats.style.visibility = "hidden";
      var rlef = createDiv(1, 5);
      var rdow = createDiv(5, 1);
      rats.appendChild(rlef);
      rats.appendChild(rdow);
      rlef.style.top = "2px";
      rlef.style.left = "0px";
      rdow.style.top = "0px";
      rdow.style.left = "2px";
      document.body.appendChild(star[i] = rats);
    }
    set_width();
    sparkle();
  }
}

function sparkle() {
  var c;
  if (x != ox || y != oy) {
    ox = x;
    oy = y;
    for (c = 0; c < sparkles; c++) if (!starv[c]) {
      star[c].style.left = (starx[c] = x) + "px";
      star[c].style.top = (stary[c] = y) + "px";
      star[c].style.clip = "rect(0px, 5px, 5px, 0px)";
      star[c].style.visibility = "visible";
      starv[c] = 50;
      break;
    }
  }
  for (c = 0; c < sparkles; c++) {
    if (starv[c]) update_star(c);
    if (tinyv[c]) update_tiny(c);
  }
  setTimeout("sparkle()", 40);
}

function update_star(i) {
  if (--starv[i] == 25) star[i].style.clip = "rect(1px, 4px, 4px, 1px)";
  if (starv[i]) {
    stary[i] += 1 + Math.random() * 3;
    if (stary[i] < shigh + sdown) {
      star[i].style.top = stary[i] + "px";
      starx[i] += (i % 5 - 2) / 5;
      star[i].style.left = starx[i] + "px";
    }
    else {
      star[i].style.visibility = "hidden";
      starv[i] = 0;
      return;
    }
  }
  else {
    tinyv[i] = 50;
    tiny[i].style.top = (tinyy[i] = stary[i]) + "px";
    tiny[i].style.left = (tinyx[i] = starx[i]) + "px";
    tiny[i].style.width = "2px";
    tiny[i].style.height = "2px";
    star[i].style.visibility = "hidden";
    tiny[i].style.visibility = "visible"
  }
}

function update_tiny(i) {
  if (--tinyv[i] == 25) {
    tiny[i].style.width = "1px";
    tiny[i].style.height = "1px";
  }
  if (tinyv[i]) {
    tinyy[i] += 1 + Math.random() * 3;
    if (tinyy[i] < shigh + sdown) {
      tiny[i].style.top = tinyy[i] + "px";
      tinyx[i] += (i % 5 - 2) / 5;
      tiny[i].style.left = tinyx[i] + "px";
    }
    else {
      tiny[i].style.visibility = "hidden";
      tinyv[i] = 0;
      return;
    }
  }
  else tiny[i].style.visibility = "hidden";
}

document.onmousemove = mouse;
function mouse(e) {
  set_scroll();
  y = (e) ? e.pageY : event.y + sdown;
  x = (e) ? e.pageX : event.x + sleft;
}

function set_scroll() {
  if (typeof (self.pageYOffset) == "number") {
    sdown = self.pageYOffset;
    sleft = self.pageXOffset;
  }
  else if (document.body.scrollTop || document.body.scrollLeft) {
    sdown = document.body.scrollTop;
    sleft = document.body.scrollLeft;
  }
  else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
    sleft = document.documentElement.scrollLeft;
    sdown = document.documentElement.scrollTop;
  }
  else {
    sdown = 0;
    sleft = 0;
  }
}

window.onresize = set_width;
function set_width() {
  if (typeof (self.innerWidth) == "number") {
    swide = self.innerWidth;
    shigh = self.innerHeight;
  }
  else if (document.documentElement && document.documentElement.clientWidth) {
    swide = document.documentElement.clientWidth;
    shigh = document.documentElement.clientHeight;
  }
  else if (document.body.clientWidth) {
    swide = document.body.clientWidth;
    shigh = document.body.clientHeight;
  }
}

function createDiv(height, width) {
  var div = document.createElement("div");
  div.style.position = "absolute";
  div.style.height = height + "px";
  div.style.width = width + "px";
  div.style.overflow = "hidden";
  div.style.backgroundColor = colour;
  return (div);
}

function readMore(item) {
  switch (item) {
    case 'auto_cars':
      window.open("https://www.figma.com/file/xfMS8WezRn6xhIuPhaPw89/Auto-Cars---Taxi-Booking-System?type=design&node-id=0%3A1&mode=design&t=hdIGweVSsEjDr16i-1", '_blank');
      break;
    case 'evideo_cloud':
      window.open("https://www.figma.com/file/aYEMfGC7geDe8sBFlgHSxv/E-Video-Cloud-(EVC)?type=design&node-id=0%3A1&mode=design&t=6EHp0YgyPl4VAdtW-1", '_blank');
      break;
    case 'oxford_system':
      window.open("https://www.figma.com/community/file/1250815928359119367", '_blank');
      break;
    case 'bite_byte':
      window.open("https://www.figma.com/community/file/1300101419239007499", '_blank');
      break;
    case 'cleanscape':
      window.open("https://www.figma.com/community/file/1300102560285612302/cleanscape-urban-cleanliness-management-app", '_blank');
      break;
    case 'idspot':
      window.open("https://www.figma.com/file/uTppM8MXOcsVqw2RrhTYOW/ID-Spot?type=design&node-id=0%3A1&mode=design&t=wY1WLBJXKsYYHt1f-1", '_blank');
      break;
    case 'playerport':
      window.open("https://play.google.com/store/apps/details?id=com.playerport.store", '_blank');
      break;
    default:
      alert("Invalid item");
  }
}

function Download() {
  window.open("https://drive.google.com/file/d/1Zo6zHlIHbqRhxVfnqwbVfMIn8TzEZ_oB/view?usp=drive_link", '_blank');
}

function contact() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  var url = "https://wa.me/+94754043760?text=" +
    "My Name: " + name + "%0A" +
    "My Email: " + email + "%0A" +
    "Subject: " + subject + "%0A" +
    "Message: " + message;

  window.open(url, '_blank');
}








