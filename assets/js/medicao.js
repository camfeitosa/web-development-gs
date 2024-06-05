function medidas() {
    const contador = document.getElementById('contador');
    let valor = 0;
  
    //setInterval, os desenvolvedores têm a capacidade de executar determinado código repetidamente em um intervalo de tempo definido
    let tempo = setInterval(() => {
      valor += 1;
  
      contador.innerHTML = `${valor}%`;
  
      if (valor == 48) {
        //limpa o intervalo de tempo
        clearInterval(tempo);
      }
    });
  
    const contador1 = document.getElementById('contador1');
    let valor1 = 0;
  
    let tempo1 = setInterval(() => {
      valor1 += 1;
  
      contador1.innerHTML = `+${valor1}`;
  
      if (valor1 == 170) {
        clearInterval(tempo1);
      }
    });
  
    const contador2 = document.getElementById('contador2');
    let valor2 = 0;
  
    let tempo2 = setInterval(() => {
      valor2 += 5;
  
      contador2.innerHTML = `+${valor2}`;
  
      if (valor2 == 2000) {
        clearInterval(tempo2);
      }
    });
  }
  medidas();