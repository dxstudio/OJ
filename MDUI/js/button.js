var inst = new mdui.Fab('#fab');

// method
document.getElementById('open').addEventListener('click', function () {
  inst.open();
});

document.getElementById('close').addEventListener('click', function () {
  inst.close();
});

document.getElementById('hide').addEventListener('click', function () {
  inst.hide();
});

document.getElementById('show').addEventListener('click', function () {
  inst.show();
});

document.getElementById('getState').addEventListener('click', function () {
  mdui.alert(inst.getState());
});

// event
var fab = document.getElementById('fab');
fab.addEventListener('open.mdui.fab', function () {
  console.log('open');
});

fab.addEventListener('opened.mdui.fab', function () {
  console.log('opened');
});

fab.addEventListener('close.mdui.fab', function () {
  console.log('close');
});

fab.addEventListener('closed.mdui.fab', function () {
  console.log('closed');
});
