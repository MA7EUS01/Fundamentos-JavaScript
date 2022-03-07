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
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
    }
    embaralhar(){
      const copias = this.armasIniciais.concat(this.armasIniciais).map(item =>{return Object.assign({}, item, {id: Math.random() / 0.5})}).sort(()=> Math.random() - 0.5)

      this.tela.atualizarImagens(copias)
    }
    jogar(){
        this.embaralhar()
    }
}