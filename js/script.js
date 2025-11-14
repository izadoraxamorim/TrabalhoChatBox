const historico = [];

document.getElementById("btnEnviar").addEventListener("click", enviarMensagem);
document.getElementById("inputMsg").addEventListener("keydown", function(e){
    if(e.key === "Enter") enviarMensagem();
});
document.getElementById("btnLimparChat").addEventListener("click", limparChat);

function enviarMensagem(){
    const input = document.getElementById("inputMsg");
    const texto = input.value.trim();
    if(!texto) return;

    adicionarMensagemChat(texto);

    historico.push(texto);

    atualizarHistorico();

    input.value = "";
    input.focus();
}

function adicionarMensagemChat(texto){
    const messages = document.getElementById("messages");

    const div = document.createElement("div");
    div.className = "alert alert-primary mt-2 mb-0";
    div.textContent = texto;

    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
}

function atualizarHistorico(){
    const container = document.getElementById("historicoConteudo");
    container.innerHTML = "";

    historico.slice().reverse().forEach(msg => {
        const p = document.createElement("p");
        p.className = "mb-2";
        p.textContent = msg;
        container.appendChild(p);
    });
}

function limparChat(){
    document.getElementById("messages").innerHTML = "";
}
