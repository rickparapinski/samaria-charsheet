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
                forca:4,
                destreza:4,
                carisma:4,
                resistencia:4,
                inteligencia:3,
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
            this.chardata.difRacial = this.info.racas[value].diferencial
            this.limiteAtributo = 23
            this.sumAttrib()


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
    }
},

 async created(){
  const res = await fetch('data.json')
  const results = await res.json()
  this.info = results
  

},


})

app.mount('#app')