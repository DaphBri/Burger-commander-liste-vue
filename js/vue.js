
//1) on click + => add contenu "class=price" au "class summery"/par burger
//              => add +1 au "class burger"<h2>/par burger
//2) on click - => remove contenu "class=price" au "class summery"/par burger
//              => remove -1 au "class burger"<h2>/par burger



new Vue({
    el:"#app",
    data:{
        
        burgers:[
            ],

    },
    created(){
                    //console.log("Vue created")
        axios.get("https://wt-902485dbb4fca4fccee3a0efcde5b34c-0.sandbox.auth0-extend.com/orderfoodmenu")
        .then(response => {
            this.burgers=response.data
        })
    },
    methods:{
        increment(burger){
            burger.quantity++;
        },
        decrement(burger){
            if (burger.quantity > 0){         // ou dans html avec un v-if
            burger.quantity--;
            }               
        },
        order(){
            axios.post("https://wt-902485dbb4fca4fccee3a0efcde5b34c-0.sandbox.auth0-extend.com/orderfoodmenu", this.burgers)
            .then(response => {
                console.log(response.data)
            })
        },

    },
    computed:{
        subtotalPrice() {
            let total = 0;
            this.burgers.forEach(burger => {
                total += burger.price * burger.quantity
            });
            return total;
        }
    },
    
})

// new Vue({
//     el:"#app",
//     data:{
//         isSuccess: false,
//         isHidden: false,
//         list:[
//             {name:'Courgette', isSelected:false}, 
//             {name:'Champignon', isSelected:false}, 
//             {name:'Tofu', isSelected:false}, 
//             {name:'Riz basmati', isSelected:false},
            
//         ],
//         i:{name:"", isSelected:false},
        
        //voir le fiddle de Sofie - correction - na marche pas chez moi.
        // computed:{
        //     ingredientsSelected(){
        //         let selected = this.list.filter(i => i.isSelected);
        //         let selectedNames = selected.map(i => i.name);
        //         return selectedNames.join(', ');

        //     }
        
//     },
//     methods: {
//         toggle(i){
//             i.isSelected = !i.isSelected;
//         },
//         addNewI(){
//             let newI ={
//             name: this.i.name,
//             isSelected:false
//         };
//         this.list.push(newI);
//         this.i.name=null;
//         }
//     }
// })






//5) rajouter une classe si selectionner/au click! toggle
// let app = new Vue({
//     el: "#app",             //el=selecteur qui sera lié à un element(app)
//     data: {                 //data=objet (voir dans index.html)
//         message: "Hello World",
//         isSelected: false     // rajouter une class au click par ex.
//     },
//     methods: {         // si je click/fonction/ je met une autre couleur(toggle) Dans index on met le @click=toggle()
//         toggle(){
//             if(this.isSelected){
//                 this.isSelected = false; 
//             } else{
//                 this.isSelected = true; 
//             }
            
//         }
//     }
// });