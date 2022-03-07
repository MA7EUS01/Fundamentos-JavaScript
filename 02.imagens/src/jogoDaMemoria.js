class JogoDaMemoria {
    constructor({
        tela
    })
    {
        this.tela = tela
        this.armasIniciais = [
            {img: './arquivos/ak.png', name: 'ak'},
            {img: './arquivos/faca.png', name: 'faca'},
            {img: './arquivos/revolver.png', name: 'revolver'},
            {img: './arquivos/sniper.png', name: 'sniper'},

        ]
    }
    inicializar()
    {
        this.tela.atualizarImagens(this.armasIniciais)
    }
}