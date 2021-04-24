const app = Vue.createApp({
    
data(){
    return{
        chardata: {
            charName: '',
            racaValue:'',
            racaName: '',
            idade:'',
            reino:'',
            cargo:'',
            pericia1 :'',
            pericia2 :'',
            pericia3 :'',
            armasIniciais:'',
            historia: '',
            difRacial:'',
            atributos: {
                agilidade:4,
                bonusAgilidade: 0,
                forca:4,
                bonusForca:0,
                destreza:4,
                bonusDestreza:0,
                carisma:4,
                bonusCarisma:0,
                resistencia:4,
                bonusResistencia:0,
                inteligencia:3,
                bonusInteligencia:0,
                atributosTotal:0
            },
        },
        info : null,
        limiteAtributo: 0

    }
},
methods: {
    sumAttrib(){
        
        this.chardata.atributos.atributosTotal  = this.chardata.atributos.agilidade + this.chardata.atributos.forca + this.chardata.atributos.destreza +  this.chardata.atributos.carisma + this.chardata.atributos.resistencia +this.chardata.atributos.inteligencia
},
onChange(value){
    switch(value){
        case 'samariano':
            console.log(value)
            this.chardata.difRacial = this.info.racas[value].diferencial
            this.limiteAtributo = 23
            this.chardata.atributos.bonusForca = 2
            this.chardata.atributos.bonusDestreza = 1
            this.sumAttrib()
        break;
        case 'elfos':
            console.log(value)
            this.chardata.difRacial = this.info.racas[value].diferencial
            this.limiteAtributo = 23
            this.chardata.atributos.bonusAgilidade = 2
            this.chardata.atributos.bonusDestreza = 1
            this.sumAttrib()
        break;
        case 'fadas':
            console.log(value)
            this.chardata.difRacial = this.info.racas[value].diferencial
            this.limiteAtributo = 23
            this.chardata.atributos.bonusInteligencia = 2
            this.chardata.atributos.bonusCarisma = 1
            this.sumAttrib()
        break;
    }

    
}
},

watch:{
    'chardata.atributos': {
        handler: function(){
            this.sumAttrib()
        },
        deep: true
    }

},

computed: {
    limiteAtributos(){
        return this.chardata.atributos.atributosTotal > this.limiteAtributo
    },
    displaybonus(){}
},

 async created(){
  const res = await fetch('data.json')
  const results = await res.json()
  this.info = results
  

},


})

app.mount('#app')