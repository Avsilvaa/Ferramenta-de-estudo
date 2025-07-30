// Materias
function adicionarMateria() {
    const input = document.getElementById("novaMateria");
    const ul = document.getElementById("listaMaterias");
    if (input.value.trim() !== "") {
      const li = document.createElement("li");
      li.textContent = input.value;
      ul.appendChild(li);
      input.value = "";
    }
  }
  
  // Tarefas
  function adicionarTarefa() {
    const input = document.getElementById("novaTarefa");
    const ul = document.getElementById("listaTarefas");
    if (input.value.trim() !== "") {
      const li = document.createElement("li");
      li.textContent = input.value;
      ul.appendChild(li);
      input.value = "";
    }
  }
  
  // Pomodoro Timer
  let tempo = 25 * 60;
  let intervalo;
  let rodando = false;
  
  function atualizarTimer() {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    document.getElementById("timer").textContent =
      `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
  }
  
  function iniciarPomodoro() {
    if (!rodando) {
      intervalo = setInterval(() => {
        if (tempo > 0) {
          tempo--;
          atualizarTimer();
        } else {
          clearInterval(intervalo);
          alert("Pomodoro concluído! Faça uma pausa.");
        }
      }, 1000);
      rodando = true;
    }
  }
  
  function pararPomodoro() {
    clearInterval(intervalo);
    rodando = false;
  }
  
  function resetarPomodoro() {
    pararPomodoro();
    tempo = 25 * 60;
    atualizarTimer();
  }
  
  atualizarTimer();
  
