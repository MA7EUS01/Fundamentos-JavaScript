function onLoad(){
    console.log("Carregou esta bagaça!!")
    console.log("Módulo carregado:", Tela)
    console.log("Módulo carregado:", JogoDaMemoria)
    // const arma = {
    //     img: './arquivos/ak.png',
    //     nome: 'ak'
    // }

    // const codigoHtml = Tela.obterCodigoHtml(arma)
    // Tela.alterarConteudoHTML(codigoHtml.concat(codigoHtml))
    // Tela.atualizarImagens([
    //     arma,
    //     arma,
    //     arma,
    //     arma
    // ])

    const dependencias = {
        tela: Tela 
    }
    const jogoDaMemoria = new JogoDaMemoria(dependencias)
    jogoDaMemoria.inicializar()











}
window.onload = onLoad