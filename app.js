var c = document.querySelector('#canvas');
var ctx = c.getContext('2d');
var image = new Image();
var file;
var data;
var name = 'Nama Anda';
var names = [];
var number = 'No.';
var title = 'Asal instansi';
var titles = [];
colorWell = document.querySelector('#colorWell');
ctx.textAlign = 'center';
var color = '#000000';
var size = 32;
var margin = 20;
ctx.fillStyle = color;
var x = 500;
var y = 300;
var a = 500;
var b = 350;
var z = 500;
var g = 350;

function showBorder(width, height) {
  let canvas = document.getElementById('canvas');
  var parentCanvas = canvas.parentElement;
  parentCanvas.offsetHeight = height;
  parentCanvas.offsetWidth = width;
  console.log(
    'canvas w=' + canvas.width + ' img w=' + parentCanvas.offsetWidth
  );
  console.log(
    'canvas h=' +
      canvas.height +
      ' img h=' +
      parentCanvas.offsetHeight
  );
}

function checkImage() {
  if (typeof data === 'undefined') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You didn`t upload certificate photo!',
    });
    return false;
  } else {
    return true;
  }
}

function showInfo() {
  Swal.fire({
    icon: 'info',
    title: 'Oops...',
    text: 'You didn`t enter any names',
  });
}
function handleImageUpload() {
  file = document.getElementById('upload').files[0];
  var reader = new FileReader();

  reader.onload = function (e) {
    data = e.target.result;

    image.onload = () => {
      window.imageSrc = this;
      onLoadImg(x, y);
    };
    image.src = data;
  };
  reader.readAsDataURL(file);
}

image.onload = () => {
  onLoadImg(x, y);
};

function onLoadImg(x, y) {
  var width = image.naturalWidth;
  var height = image.naturalHeight;
  c.width = width;
  c.height = height;
  console.log('w=' + width + ' h=' + height);
  c.className = 'border';
  ctx.font = size + 'px Times new roman';
  ctx.textAlign = 'center';
  ctx.fillStyle = color;
  ctx.drawImage(image, 0, 0, width, height);
  c.setAttribute('dir', 'ltr');
  ctx.direction = 'rtl';
  ctx.fillText(name, x, y);
  ctx.stroke();
  ctx.fillText(title, a, b);
  c.setAttribute('dir', 'ltr');
  ctx.direction = 'rtl';
  ctx.stroke();
  ctx.fillText(number, z, g);
}
// awal number
function sizeZ() {
  var resultCondition = checkImage();
  if (resultCondition == true) {
    size += 1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    image.onload = () => {
      onLoadImg(x, y);
    };
    image.src = data;
  }
}

function sizeG() {
  var resultCondition = checkImage();
  if (resultCondition == true) {
    size -= 1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    image.onload = () => {
      onLoadImg(x, y);
    };
    image.src = data;
  }
}
function upR() {
  var resultCondition = checkImage();
  if (resultCondition == true) {
    g -= 10;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    image.onload = () => {
      onLoadImg(x, y);
    };
    image.src = data;
  }
}
function downR() {
  var resultCondition = checkImage();
  if (resultCondition == true) {
    g += 10;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    image.onload = () => {
      onLoadImg(x, y);
    };
    image.src = data;
  }
}

function rightR() {
  var resultCondition = checkImage();
  if (resultCondition == true) {
    z += 10;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    image.onload = () => {
      onLoadImg(x, y);
    };
    image.src = data;
  }
}

function rightR() {
  var resultCondition = checkImage();
  if (resultCondition == true) {
    z += 10;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    image.onload = () => {
      onLoadImg(x, y);
    };
    image.src = data;
  }
}
function leftR() {
  var resultCondition = checkImage();
  if (resultCondition == true) {
    z -= 10;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    image.onload = () => {
      onLoadImg(x, y);
    };
    image.src = data;
  }
}

// akhir number
function sizeA() {
  var resultCondition = checkImage();
  if (resultCondition == true) {
    size += 1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    image.onload = () => {
      onLoadImg(x, y);
    };
    image.src = data;
  }
}

function sizeB() {
  var resultCondition = checkImage();
  if (resultCondition == true) {
    size -= 1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    image.onload = () => {
      onLoadImg(x, y);
    };
    image.src = data;
  }
}

function sizeD() {
  var resultCondition = checkImage();
  if (resultCondition == true) {
    size -= 1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    image.onload = () => {
      onLoadImg(x, y);
    };
    image.src = data;
  }
}

function sizeI() {
  var resultCondition = checkImage();
  if (resultCondition == true) {
    size += 1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    image.onload = () => {
      onLoadImg(x, y);
    };
    image.src = data;
  }
}

function upA() {
  var resultCondition = checkImage();
  if (resultCondition == true) {
    b -= 10;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    image.onload = () => {
      onLoadImg(x, y);
    };
    image.src = data;
  }
}

function up() {
  var resultCondition = checkImage();
  if (resultCondition == true) {
    y -= 10;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    image.onload = () => {
      onLoadImg(x, y);
    };
    image.src = data;
  }
}

function downA() {
  var resultCondition = checkImage();
  if (resultCondition == true) {
    b += 10;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    image.onload = () => {
      onLoadImg(x, y);
    };
    image.src = data;
  }
}

function down() {
  var resultCondition = checkImage();
  if (resultCondition == true) {
    y += 10;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    image.onload = () => {
      onLoadImg(x, y);
    };
    image.src = data;
  }
}

function rightA() {
  var resultCondition = checkImage();
  if (resultCondition == true) {
    a += 10;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    image.onload = () => {
      onLoadImg(x, y);
    };
    image.src = data;
  }
}

function right() {
  var resultCondition = checkImage();
  if (resultCondition == true) {
    x += 10;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    image.onload = () => {
      onLoadImg(x, y);
    };
    image.src = data;
  }
}

function leftA() {
  var resultCondition = checkImage();
  if (resultCondition == true) {
    a -= 10;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    image.onload = () => {
      onLoadImg(x, y);
    };
    image.src = data;
  }
}

function left() {
  var resultCondition = checkImage();
  if (resultCondition == true) {
    x -= 10;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    image.onload = () => {
      onLoadImg(x, y);
    };
    image.src = data;
  }
}
document.addEventListener('keyup', logKey);

function logKey(e) {
  if (e.keyCode === 37) {
    //left
    left();
    leftA();
  }
  if (e.keyCode === 39) {
    //right
    right();
    rightA();
  }
  if (e.keyCode === 38) {
    //up
    up();
    upA();
  }
  if (e.keyCode === 40) {
    //down
    down();
    downA();
  }
  if (e.keyCode === 189) {
    //-
    sizeD();
    sizeA();
  }
  if (e.keyCode === 187) {
    //+
    sizeI();
    sizeB();
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  image.onload = () => {
    onLoadImg(x, y);
  };
  image.src = data;
}

function logKey(e) {
  if (e.keyCode === 37) {
    //left
    leftR();
  }
  if (e.keyCode === 39) {
    //right
    rightR();
  }
  if (e.keyCode === 38) {
    //up
    upR();
  }
  if (e.keyCode === 40) {
    //down
    downR();
  }
  if (e.keyCode === 189) {
    //-
    sizeZ();
    sizeG();
  }
  if (e.keyCode === 187) {
    //+
    sizeI();
    sizeB();
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  image.onload = () => {
    onLoadImg(x, y);
  };
  image.src = data;
}

colorWell.addEventListener('input', () => {
  var resultCondition = checkImage();
  if (resultCondition == true) {
    color = event.target.value;
    console.log(ctx.fillStyle);
    console.log(event.target.value);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    image.onload = () => {
      onLoadImg(x, y);
    };
    image.src = data;
  }
});

function addName() {
  name = document.getElementById('name').value;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.textAlign = 'center';
  image.onload = () => {
    onLoadImg(x, y);
  };
  image.src = data;
}

function addNames() {
  names = document
    .getElementById('names')
    .value.match(/[^\s+].*[^\s*]*/g);
}

function addTitle() {
  title = document.getElementById('title').value;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.textAlign = 'center';
  image.onload = () => {
    onLoadImg(a, b);
  };
  image.src = data;
}

function addTitles() {
  titles = document
    .getElementById('titles')
    .value.match(/[^\s+].*[^\s*]*/g);
}
// function addNumber() {
//   name = document.getElementById('number').value;
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.textAlign = 'center';
//   image.onload = () => {
//     onLoadImg(x, y);
//   };
//   image.src = data;
// }

function saveEveryName(StudentName) {
  name = StudentName;
  title = StudentName;
}

function saveFile() {
  c.toBlob(function (blob) {
    let link = document.createElement('a');
    link.download = 'Certificate.png';
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
  }, 'image/png');
}

function saveZip() {
  var resultCondition = checkImage();
  if (resultCondition == true) {
    var imgUrl;
    var zip = new JSZip();
    console.log(names);
    console.log(titles);
    if (names + titles == null) {
      showInfo();
    } else {
      for (let i = 0; i < names.length && titles.length; i++) {
        name = names[i];
        title = titles[i];
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        onLoadImg(x, y);
        image.src = data;
        imgUrl = c.toDataURL();
        zip.file(name + '.png', imgUrl.split('base64,')[1], {
          base64: true,
        });
      }

      zip.generateAsync({ type: 'blob' }).then(function (content) {
        saveAs(content, 'Certificates.zip');
      });
    }
  }
}
