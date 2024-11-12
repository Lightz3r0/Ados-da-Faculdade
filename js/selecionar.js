document.addEventListener('DOMContentLoaded', () => {
    let totalSelecionados = 0;
    const checkboxes = document.querySelectorAll('.selecionar-produto');
    const totalSelecionadosEl = document.getElementById('total-selecionados');
    const btnReservar = document.getElementById('btnReservar');
  
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', (event) => {
        if (event.target.checked) {
          totalSelecionados++;
        } else {
          totalSelecionados--;
        }
        totalSelecionadosEl.textContent = totalSelecionados;
        btnReservar.disabled = totalSelecionados === 0;
      });
    });
  
    btnReservar.addEventListener('click', () => {
      if (totalSelecionados > 0) {
        window.location.href = "./reservar.html";
      } else {
        alert('Selecione pelo menos um produto antes de reservar.');
      }
    });
});
