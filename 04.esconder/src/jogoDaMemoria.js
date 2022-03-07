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
        this.iconePadrao = './arquivos/default.png'
        this.armasEscondidas = []
    }
    inicializar()
    {
        this.tela.atualizarImagens(this.armasIniciais)
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
    }
    embaralhar(){
      const copias = this.armasIniciais.concat(this.armasIniciais).map(item =>{return Object.assign({}, item, {id: Math.random() / 0.5})}).sort(()=> Math.random() - 0.5)

      this.tela.atualizarImagens(copias)
      setTimeout(()=>{
          this.esconderArmas(copias)
      }, 1000);
    }
    esconderArmas(armas){
        const ArmasOcultas = armas.map(({nome, id}) =>({
            id,
            nome,
            img: this.iconePadrao
        }))
        this.tela.atualizarImagens(ArmasOcultas)
        this.ArmasOcultas = ArmasOcultas
    }
    jogar(){
        this.embaralhar()
    }
}