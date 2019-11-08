(() => {
    let word = ["b","o","n","j","o","u","r"];
    let final = ["_","_","_","_","_","_","_"];
    let fail = [];
    let ok = [];
    let correct = 1;
    let incorrect = 1;

if (correct >=7){
    alert ("Felicitation vous avez trouvé le mot");
}



    document.getElementById("search").addEventListener("click", () => {

        if (document.getElementById("letter").value == '') {

            alert ("veuillez indiquer une lettre");

            
        }else{
        let sWord = document.getElementById("letter").value;
        let searchWord = sWord.toLowerCase(); 

        function guessLetter()  {     
                for (let i = 0; i < word.length; i++) {
                    if (searcWord == ok[i]) {
                        alert("vous avez déjà indiqué cette lettre");
                    else {
                    if (searchWord == word[i]){
                        ok.splice(1,0, searchWord);
                        final.splice(i, 1, searchWord);
                        document.getElementById("mot").innerHTML = "Mot a découvrir  : " +final;
                        alert("vous avez trouvé la lettre " + searchWord );
                        document.getElementById("trouver").innerHTML = "vous avez " + correct++ + " reponses correcte";
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
                document.getElementById("zut").innerHTML = "Lettre(s) déjà essayée(s) : " +fail;
                document.getElementById("rater").innerHTML = "Vous avez  " + incorrect++ +  " reponses incorrecte"  ;
                
            
        }
        if (correct >=7){
            alert ("Felicitation vous avez trouvé le mot");
        }   
            guessLetter();
    }
});








     
})();

