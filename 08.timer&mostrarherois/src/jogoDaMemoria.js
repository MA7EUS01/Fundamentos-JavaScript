class JogoDaMemoria {
    constructor({
        tela,
        util
    })
    {
        this.tela = tela
        this.util = util
        this.armasIniciais = [
            {img: './arquivos/ak.png', nome: 'ak'},
            {img: './arquivos/faca.png', nome: 'faca'},
            {img: './arquivos/revolver.png', nome: 'revolver'},
            {img: './arquivos/sniper.png', nome: 'sniper'},

        ]
        this.iconePadrao = './arquivos/default.png'
        this.armasEscondidas = []
        this.armasSelecionadas = []
    }
    inicializar()
    {
        this.tela.atualizarImagens(this.armasIniciais)
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
        this.tela.configurarBotaoVerificar(this.verificarSelecao.bind(this))
        this.tela.configurarBotaoMostrarTudo(this.mostrarArmasescondidas.bind(this))
    }
    
    esconderArmas(armas){
        const ArmasOcultas = armas.map(({nome, id}) =>({
            id,
            nome,
            img: this.iconePadrao
        }))
        this.tela.atualizarImagens(ArmasOcultas)
        this.armasEscondidas = ArmasOcultas
    }
    
    exibirArmas(nomeDaArma){
        const {img} = this.armasIniciais.find(({nome}) => nomeDaArma === nome)
        this.tela.exibirArmas(nomeDaArma, img)
    }
    verificarSelecao(id, nome){
        const item = {id, nome}
        //alert(`Olá:${item.id}, ${item.nome}`)
        const armasSelecionadas = this.armasSelecionadas.length
        switch(armasSelecionadas){
            case 0:
            this.armasSelecionadas.push(item)
                break;
            case 1:
            const [opcao1] = this.armasSelecionadas
            this.armasSelecionadas = []
            if(opcao1.nome === item.nome && opcao1.id !== item.id){
                this.exibirArmas(item.nome)
                this.tela.exibirMensagem()
                return;
            }
            this.tela.exibirMensagem(false)
            break;
        }
    }

    async embaralhar(){
        const copias = this.armasIniciais.concat(this.armasIniciais).map(item =>{return Object.assign({}, item, {id: Math.random() / 0.5})}).sort(()=> Math.random() - 0.5)
  
        this.tela.atualizarImagens(copias)
          this.tela.exibirCarregando()

          const  idDoIntervalo = this.tela.iniciarContador()
          await this.util.timeout(3000)
          this.tela.limparContador(idDoIntervalo)

          this.esconderArmas(copias)
          this.tela.exibirCarregando(false)
    }
    mostrarArmasescondidas(){
        const armasEscondidas = this.armasEscondidas
         for(const arma of this.armasEscondidas){
             const { img } = this.armasIniciais.find(item => item.nome === arma.nome)
             arma.img = img
         }
         this.tela.atualizarImagens(armasEscondidas)
     }
    jogar(){
        this.embaralhar()
    }
}