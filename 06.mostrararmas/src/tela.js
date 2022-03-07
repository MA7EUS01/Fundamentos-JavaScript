const ID_BTN_JOGAR = "iniciar"
const ID_CONTEUDO = "conteudo"
const ID_MENSAGEM = "mensagem"
const CLASSE_INVISIVEL = "invisible"
const MENSAGEM = {
    sucesso:{
        texto: 'Combinação correta!!',
        classe: 'alert-success'
    },
    erro:{
        texto: 'Combinação errada!!',
        classe: 'alert-danger'
    }
}

class Tela {
    static obterCodigoHtml(item)
    {
        return `
    <div class="col-md-3">
        <div class="card" style="width: 50%; margin-top: 10px; background-color: transparent;" onclick = "window.verificarSelecao('${item.id}', '${item.nome}')">
                <img src="${item.img}" name="${item.nome}" class="card-img-top" alt="...">
            </div>
            <br/>
        </div>
        `
    }
    static alterarConteudoHTML(codigoHtml){
        const conteudo = document.getElementById(ID_CONTEUDO)
        conteudo.innerHTML = codigoHtml
    }
    static gerarStringPelaImagem(itens){
        
        return itens.map(Tela.obterCodigoHtml).join('')
    }
    static atualizarImagens(itens){
        const codigoHtml = Tela.gerarStringPelaImagem(itens)
        Tela.alterarConteudoHTML(codigoHtml)
    }
    static configurarBotaoJogar(fnOnclick){
        const btnJogar = document.getElementById(ID_BTN_JOGAR)
        btnJogar.onclick = fnOnclick
    }
    static configurarBotaoVerificar(fnOnclick){
        window.verificarSelecao = fnOnclick
    }
    static exibirArmas(nomeDaArma, img){
        const elementosHTML = document.getElementsByName(nomeDaArma)
        elementosHTML.forEach(item => (item.src = img))
    }
    static exibirMensagem(sucesso = true){
        const elemento = document.getElementById(ID_MENSAGEM)
        if (sucesso){
            elemento.classList.remove(MENSAGEM.erro.classe)
            elemento.classList.add(MENSAGEM.sucesso.classe)
            elemento.innerText = MENSAGEM.sucesso.texto
        }
        else{
            elemento.classList.remove(MENSAGEM.sucesso.classe)
            elemento.classList.add(MENSAGEM.erro.classe)
            elemento.innerText = MENSAGEM.erro.texto
        }
        elemento.classList.remove(CLASSE_INVISIVEL)
    }
}
