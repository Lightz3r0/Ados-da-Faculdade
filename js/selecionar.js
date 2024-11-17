document.addEventListener('DOMContentLoaded', () => {
  let totalSelecionados = 0;
  const checkboxes = document.querySelectorAll('.selecionar-produto');
  const totalSelecionadosEl = document.getElementById('total-selecionados');
  const btnReservar = document.getElementById('btnReservar');

  const atualizarTotal = () => {

    totalSelecionadosEl.textContent = totalSelecionados;
    btnReservar.disabled = totalSelecionados === 0;

  };
  checkboxes.forEach(checkbox => {

    checkbox.addEventListener('change', (event) => {
      const label = event.target.nextElementSibling; 
      if (event.target.checked) {
        label.textContent = 'Selecionado';
        totalSelecionados++;
      } else {
        label.textContent = 'Selecionar';
        totalSelecionados--;
      }
      atualizarTotal();
    });
  });
  
  btnReservar.addEventListener('click', () => {
    if (totalSelecionados > 0) {
      window.location.href = "./reservar.html";
    } else {
      alert('Selecione pelo menos um produto antes de reservar.');
    }
  });

  atualizarTotal();
});
