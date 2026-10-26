const educationDialog = document.querySelector('#education-dialog');
document.querySelector('#education-open').addEventListener('click', () => educationDialog.showModal());
educationDialog.querySelector('.close').addEventListener('click', () => educationDialog.close());
educationDialog.addEventListener('click', (event) => {
  if (event.target !== educationDialog) return;
  const rect = educationDialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) educationDialog.close();
});
document.querySelector('#year').textContent = new Date().getFullYear();
