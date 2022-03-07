const ID_BTN_JOGAR = "iniciar"
const ID_CONTEUDO = "conteudo"
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
}
