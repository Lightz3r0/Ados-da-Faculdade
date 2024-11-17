document.getElementById('cep').addEventListener('blur', async function () {
    const cep = this.value.replace(/\D/g, ''); 
    const aviso = document.getElementById('aviso'); 
    aviso.textContent = ''; 
  
    if (cep.length !== 8) {
      aviso.textContent = 'Por favor, insira um CEP válido com 8 dígitos.';
      return;
    }
  
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) {
        throw new Error('Erro ao consultar o CEP. Verifique sua conexão ou tente novamente.');
      }
  
      const data = await response.json();
  
      if (data.erro) {
        aviso.textContent = 'CEP não encontrado.';
      } else {
        document.getElementById('rua').value = data.logradouro || '';
        document.getElementById('bairro').value = data.bairro || '';
  
        const estado = data.uf || '';
        const cidade = data.localidade || '';
        document.getElementById('cidade').value = cidade;
        document.getElementById('estado').value = estado;
  
        if (estado !== 'MG' && estado !== 'ES') {
          aviso.textContent = 'Atenção: Não possuímos filial no seu estado.';
        }
      }
    } catch (error) {
      aviso.textContent = `Erro: ${error.message}`;
    }
  });

  document.getElementById("reserva-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const notificacao = document.getElementById("notificacao");
    notificacao.classList.remove("d-none");
  
    this.reset();
  });