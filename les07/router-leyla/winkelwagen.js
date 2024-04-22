const winkelwagen = {
    template: '#winkelwagenTemplate',
    data: function () {
        return {
            items: [],
            pathSmall:'images/small/',
            pathBig:'images/big/',
         
           
        }
    },
    methods : {
        toonGroteFoto: function(path){
            window.open(path);
        },
        verwijder: function(index) {
            event.preventDefault();
            this.items = this.items.filter((item,indx) => indx !== index)
            this.saveLocalStorageWinkelwagen();
        } ,
        aantalAanpassing: function(index) {
            if(this.items[index].besteld == 0){
                this.items.splice(index,1);
            }
            this.saveLocalStorageWinkelwagen();
        },
        saveLocalStorageWinkelwagen: function() {
            localStorage.setItem('winkelwagen', JSON.stringify(this.items));
        }
       
    },
    computed: {
        totalePrijs: function () {
            let totaal = 0;
            for(let i = 0; i < this.items.length; i++){
                if(this.items[i].besteld > 0){
                    totaal += this.items[i].besteld * this.items[i].prijs
                } 
            }
            return totaal.toFixed(2);
        },
        totaalAantalItems: function () {
            let totaal = 0;
            if(this.items.length > 0 ){
                for(let i = 0; i < this.items.length; i++){
                if(this.items[i].besteld > 0){
                    totaal += parseInt(this.items[i].besteld);
                } 
            }
        

            }
            return totaal;
        
        }
    },
    watch: {
        totaalAantalItems(newValue) {
        this.$root.totalItemsInCar = newValue
       }
     },
    mounted()  {
        if (localStorage.getItem("winkelwagen")) {
            this.items = JSON.parse(localStorage.getItem("winkelwagen"))
           }
    }

}