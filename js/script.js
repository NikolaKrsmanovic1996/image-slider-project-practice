//immidiate invoked function practice

(function(){
  let pictures = [
      "contBcg-0",
      "contBcg-1",
      "contBcg-2",
      "contBcg-3",
      "contBcg-4"
  ];
  //setup counter
  let counter = 0;
//first selecting the buttons from index.html in this case select them all 
  let buttons = document.querySelectorAll(".btn");
  //passed paramater btn it means forEach item in loop (btn,buttons) add event listener
  buttons.forEach(function(btn){
      //on Click 
      btn.addEventListener('click',function(event){
          //taregeting that buttons with .target functionallity
         let value = event.target;
         //checking what values im clicking
         //console.log(value);
         if(value.classList.contains('btn-left')){
            counter--;//this will be error need because it will go from 4 to -1,-2,-3... etc to prevent that set it like this
            if(counter<0){
                counter = pictures.length-1;      
            }
            console.log(counter);
            document.querySelector(".img-container").style.backgroundImage = `url('img/${pictures[counter]}.jpeg')`;
         }
         if(value.classList.contains('btn-right')){
           counter++;//this will be error need because it will go from 0 to higher numbers in array to prevent set it like this
           if(counter>pictures.length-1){
               counter = 0;          
           }
           console.log(counter);

           document.querySelector(".img-container").style.backgroundImage = `url('img/${pictures[counter]}.jpeg')`;
        }
      });
  });
})();