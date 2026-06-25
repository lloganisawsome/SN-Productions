(() => {
  const dialog = document.getElementById('tipNoticeDialog');
  const opener = document.getElementById('openTipNotice');
  const closer = document.getElementById('closeTipNotice');
  if (!dialog || !opener || !closer) return;
  opener.addEventListener('click', () => dialog.showModal());
  closer.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
})();
