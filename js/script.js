// Создайте <div>, который при нажатии Ctrl+E превращается в <textarea>.

// Изменения, внесенные в поле, можно сохранить обратно в <div> сочетанием клавиш Ctrl+S, при этом <div> получит в виде HTML содержимое <textarea>.

// Если же нажать Esc, то <textarea> снова превращается в <div>, изменения не сохраняются.

(function() {
  'use script'

  let div = document.querySelector('.click_div');
  let area = document.querySelector('.focus');
  area.hidden = true;

  document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyE' && event.ctrlKey) {
      event.preventDefault();
      hide(true, false);
    }
    if (event.code == 'Escape') {
      event.preventDefault();
      hide(false, true);
    }
    if (event.code == 'KeyS' && event.ctrlKey) {
      event.preventDefault();
      div.innerHTML = area.value;
      hide(false, true);
    }
  })
  
    function hide(x,y) {
      div.hidden = x;
      area.hidden = y;
    }
})()