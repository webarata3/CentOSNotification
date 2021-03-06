var CentOSNotif = CentOSNotif || {};

(() => {
  'use strict';

  const notification = document.getElementsByName('notification');

  notification[0].addEventListener('change', () => {
    CentOSNotif.saveNotification('true');
  });

  notification[1].addEventListener('change', () => {
    CentOSNotif.saveNotification('false');
  });

  const highlight = document.getElementsByName('highlight');

  highlight[0].addEventListener('change', () => {
    CentOSNotif.saveHighlight('true');
  });

  highlight[1].addEventListener('change', () => {
    CentOSNotif.saveHighlight('false');
  });

  const intervalMinute = document.getElementById('intervalMinute');

  intervalMinute.addEventListener('input', (e) => {
    const $intervalMinute = e.target;
    $intervalMinute.value = $intervalMinute.value.replace(/[^0-9]/, '');
    CentOSNotif.saveIntervalMinute($intervalMinute.value === '' ? 60 : $intervalMinute.value);
  });

  document.body.onload = () => {
    CentOSNotif.saveNotification('true' ? notification[0].checked = true : notification[1].checked = true);
    CentOSNotif.saveHighlight('true' ? highlight[0].checked = true : highlight[1].checked = true);
    intervalMinute.value = CentOSNotif.loadIntervalMinute() === undefined ? 60 : CentOSNotif.loadIntervalMinute();};
})();
