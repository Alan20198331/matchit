import type {
    GameRoom,
    GameImageCard,
    GameImageAssetId
  } from "../model/matchit-model" ;
  

  function generateDeck(assets: GameImageAssetId[] , deckCap : number){
    let currentdeck : Array<GameImageCard> = [];
    let currentcard : GameImageCard 
    let imgpercard = 8; //The total amount of images in each individual card

    while (!(currentdeck.length <= deckCap)){
        currentcard = generateCard(currentdeck.length, imgpercard, assets);
         if(!(currentdeck.length = 0)){
          for(let i = 0; i < currentdeck.length; i++){
            for(let j = 0; j < currentcard.assets.length; j++){
              for (let k = 0 ; k < currentdeck[i].assets.length; k++){
                if(currentcard.assets[j] == currentdeck[i].assets[j]){
                  currentdeck.push(currentcard);
                  break;
                }  else {
                  k++;
                }
              }
             j++;
            }   
            i++;
          }
          } else {
            currentdeck.push(currentcard);
          }
        }    
  }

  function generateCard(decksize:number, imagespercard:number, assets: GameImageAssetId[] ){

    let images = assets;
    let shuffledImages= images.sort(() => 0.5 - Math.random());
    let chosenImages: any[] = shuffledImages.slice(0,imagespercard);
    let newCard: GameImageCard = {
      cardId: (decksize++).toString(),
      assets: chosenImages
    };
    return newCard;
  }