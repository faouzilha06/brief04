 document.body.onload = function(){
    const popup = document.createElement("div");
    popup.style.display = "none";
    const titre = document.createElement('h2');
    const paragraphe = document.createElement('p');
    const image = document.createElement('img');
    popup.setAttribute("class", "modale");
    popup.appendChild(titre);
    popup.appendChild(paragraphe);
    popup.appendChild(image);
    document.body.append(popup);

    const boutons = document.querySelectorAll(".card button");

    boutons.forEach((button)=>{
        button.addEventListener("click", ()=>{
        const index = Array.from(boutons).indexOf(button);
        image.src =`./img/img${index + 1}.jpg`;
        titre.textContent =`Lorem ipsum dolor sit amet`;
        paragraphe.textContent =`Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nostrum doloribus sit dolorum aliquam, est ab similique praesentium totam deserunt excepturi.`;
        popup.style.display ="flex";
        });
    });
    popup.addEventListener("click", ()=>{
        popup.style.display = "none";
    });

    

    // carousel
    let nbr = 8;
    let p = 0;
     let container = document.querySelector("#container");
     container.style.width = (190 * nbr) + "px";
     let carousel = document.querySelector("#carrousel");
     carousel.style.width = "190px";
     let g = document.getElementById("g");
     let d = document.getElementById("d");

     function afficherMasquer(){
         if(p == -nbr + 1){
             g.style.visibility = "hidden";
         }
         else{
             g.style.visibility = "visible";
        }
         if(p == 0){
            d.style.visibility = "hidden";
         }
         else{
             d.style.visibility = "visible";
         }
     }
     g.onclick = function(){
         if (p > -nbr + 1) {
             p--;
            container.style.transform = "translate("+p*190+"px)";
             container.style.transition = "all 0.5s ease";
             afficherMasquer();
         };
     }
     d.onclick = function(){
         if (p < 0) {
//             /*fin dernière image*/
             p++;
             // décrémente de 1 la position?
           container.style.transform = "translate("+p*190 +"px)";
             container.style.transition = "all 0.5s ease";
           afficherMasquer();
         };
    }
}





