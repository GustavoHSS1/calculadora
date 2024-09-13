     // Função para aparecer o número digitado na div resultado
    function insert(num) {
      var numero = document.getElementById('resultado').innerHTML;
      document.getElementById('resultado').innerHTML = numero + num
    }

    // Função para limpar a div resultado
    
    function clean() {
      document.getElementById('resultado').innerHTML = "";
    }

    // Função para apagar o último número digitado na div resultado

    function back() {
      var resultado = document.getElementById('resultado').innerHTML;
      document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
    }

    // Função para calcular o resultado da expressão na div resultado

    function calcular() {
      var resultado = document.getElementById('resultado').innerHTML;
      if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
      } else {
        document.getElementById('resultado').innerHTML = "Nada..."
      }
    }

