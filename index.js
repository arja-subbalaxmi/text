const containerEl = document.querySelector(".container");
const careers=["Youtuber","Web Developer","Instructor","lecturer"];
let careersindex=0;
let characterindex=0;
update();
function update(){
    characterindex++
    containerEl.innerHTML=`<p style="font-size: 50px;">Iam a  ${careers[careersindex].slice(0,characterindex)} </p>`;

    
    if(characterindex === careers[careersindex].length){
        careersindex++
        characterindex=0;
    }
    if(careersindex === careers.length){
        careersindex=0;
    }
    setTimeout(update,400);
}