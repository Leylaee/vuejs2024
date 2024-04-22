const home = {
    template: '#homeTemplate',
    data: function () {
        return {
            items: [
                {
                id:1, 
                naam: 'hondenpak superman',
                omschrijving: 'Neem je hond mee als sidekick op al je avonturen!',
                prijs: 29.99, 
                afbeeldingSrc: 'elias-castillo-7-ToFEHzMNw-unsplash.jpg',
                besteld: 0
                },
                {
                id:2, 
                naam: 'Wonder Woman', 
                omschrijving: 'Laat de kleine meid tonen hoe speciaal ze is!',
                prijs: 34.99,
                afbeeldingSrc: 'gabriela-braga-CVEWeDNsJP4-unsplash.jpg',
                besteld: 0
                },
                {
                id:3, 
                naam: 'Spiderman masker',
                omschrijving: 'Je wil niet altijd dat je herkent wordt voor je goede daden!',
                prijs: 14.99, 
                afbeeldingSrc: 'joey-nicotra-0EI_4R2r0qg-unsplash.jpg',
                besteld: 0
                }
            ],
            winkelwagen : [],
            pathSmall:'images/small/',
            pathBig:'images/big/',
            
           
        }
    },
    methods : {
        toonGroteFoto: function(path){
            window.open(path);
        },
        VoegToeAanWinkelwagen: function(item) {
            item.besteld++;
            this.$root.aantalInWinkelwagen++;
            this.saveLocalStorageWinkelwagen();
            this.toonWinkelwagenMelding();
        },
        toonWinkelwagenMelding : function() {
            this.$root.showWinkelwagen = false;
            setTimeout(function(scope) {
                scope.$root.showWinkelwagen = true;
            }, 100,this);
        },
        saveLocalStorageWinkelwagen: function() {
            let temp = this.items.filter((item) => item.besteld !== 0);
            localStorage.setItem('winkelwagen', JSON.stringify(temp));
            },
       
       
        
    },
    mounted() {
        if (localStorage.getItem("winkelwagen")) {
            let tempLs = JSON.parse(localStorage.getItem("winkelwagen"));
            //alle items in LS overlopen
            //find in de data overeenkomstig item:
            //update item in data met besteld uit item van LS
            //update aantalInWinkelwagen
            tempLs.forEach((itemInLs) => {
            let gevondenItemInData = this.items.find(itemInData => itemInData.id == itemInLs.id);
            if (gevondenItemInData) {
            gevondenItemInData.besteld = itemInLs.besteld
            this.aantalInWinkelwagen += (itemInLs.besteld)
            }
             })		
        }
    }
}