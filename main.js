const btn = document.createElement('button');

btn.textContent = 'hello';

btn.addEventListener('click', e => {
  new Notification('hello');
});

document.body.appendChild(btn);
