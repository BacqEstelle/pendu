(() => {
    let word = ["b","o","n","j","o","u","r"];
    let final = ["_","_","_","_","_","_","_"];
    let fail = [];
    let global = [];
    let correct = 1;
    let incorrect = 1;

if (correct >= word.value){
    alert ("Felicitation vous avez trouvé le mot");
}



    document.getElementById("search").addEventListener("click", () => {    

        let sWord = document.getElementById("letter").value;
        let searchWord = sWord.toLowerCase(); 

        if (document.getElementById("letter").value == '') {

            alert ("veuillez indiquer une lettre");

            
    
        }else{


        function guessLetter()  {     
                for (let i = 0; i < word.length; i++) {
                    if (searchWord === word[i]){
                        if (global[i] === searchWord){
                            alert("vous avez déja indiquée la lettre");
                            return;
                        }else{
                            final.splice(i, 1, searchWord);
                            global.splice(1, 0, searchWord);
                            document.getElementById("mot").innerHTML = "Mot a découvrir  : " +final;
                            alert("vous avez trouvé la lettre " + searchWord );
                            document.getElementById("trouver").innerHTML = "vous avez " + correct++ + " reponse(s) correcte(s)";
                            document.getElementById("valeur").innerHTML = "Lettre(s) déjà essayée(s) : " +global;
                            for (let j=0; j<word.length; j++){
                                if (i >1 || searchWord === word[0]) { 
                            final.splice(i, 1, searchWord);
                            document.getElementById("mot").innerHTML = "Vos lettres découverte : " + final;
                            return; 
                                } 
                            }   

                        }
                    }
                }

                alert("Votre lettre : " + searchWord +" n'est pas correcte");
                fail.splice(1, 0, searchWord);
                global.splice(1, 0, searchWord);
                document.getElementById("zut").innerHTML = "Lettre(s) incorrecte(s) : " +fail;
                document.getElementById("valeur").innerHTML = "Lettre(s) déjà essayée(s) : " +global;
                document.getElementById("rater").innerHTML = "Vous avez  " + incorrect++ +  " reponse(s) incorrecte(s)"  ;
                
                
            
        }
        if (correct >=7){
            alert ("Felicitation vous avez trouvé le mot");
        }   
            guessLetter();
    }
});








     
})();

