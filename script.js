// Pegando os elementos HTML onde as horas, minutos e segundos vão ser exibidos
const horas = document.getElementById('horas'); // Seleciona o elemento com id 'horas'
const minutos = document.getElementById('minutos'); // Seleciona o elemento com id 'minutos'
const segundos = document.getElementById('segundos'); // Seleciona o elemento com id 'segundos'

// Usando setInterval para executar a função 'time' a cada 1000 milissegundos (1 segundo)
const relogio = setInterval(function time() {
    // Cria um novo objeto Date que vai pegar a data e hora atuais do sistema
    let dateToday = new Date();
    
    // Obtém as horas, minutos e segundos do objeto 'dateToday'
    let hr = dateToday.getHours(); // Pega as horas atuais (0-23)
    let min = dateToday.getMinutes(); // Pega os minutos atuais (0-59)
    let sec = dateToday.getSeconds(); // Pega os segundos atuais (0-59)

    // Verifica se as horas, minutos ou segundos são menores que 10. Se forem, adiciona um '0' na frente.
    if (hr < 10) hr = '0' + hr; // Exemplo: se 'hr' for 9, vai se tornar '09'
    
    if (min < 10) min = '0' + min; // Exemplo: se 'min' for 5, vai se tornar '05'
    
    if (sec < 10) sec = '0' + sec; // Exemplo: se 'sec' for 3, vai se tornar '03'

    // Atualiza o conteúdo de texto nos elementos HTML com os valores de horas, minutos e segundos
    horas.textContent = hr; // Exibe as horas formatadas (com 2 dígitos)
    minutos.textContent = min; // Exibe os minutos formatados (com 2 dígitos)
    segundos.textContent = sec; // Exibe os segundos formatados (com 2 dígitos)
})
