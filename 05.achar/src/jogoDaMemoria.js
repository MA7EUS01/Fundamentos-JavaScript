class JogoDaMemoria {
    constructor({
        tela
    })
    {
        this.tela = tela
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
                alert('Combinação correta!' + item.nome)
                return;
            }
            alert('Combinação incorreta!!')
            break;
        }
    }
    jogar(){
        this.embaralhar()
    }
}