class Quiz {
    constructor(){
      
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
          contestantCount = contestantCountRef.val();
          contestant.getCount();
        }
        question = new Question()
        question.display();
      }
    }
  
    play(){
      question.hide();
      background("yellow");

      textSize(30);
      fill("blue");
      text("RESULTS!", 120,40);

      Contestant.getPlayerInfo();
      if(allContestants !== undefined){
        debugger;
        var display_Answers = 370;
       
        for(var plr in allContestants){
          debugger;
          var correctAns1 = "B";
          var correctAns2= "Micheal Jackson";
          var correctAns3 = "ANSWER : B";
          var correctAns4 = "ANSWER : Micheal Jackson";
          if (correctAns1 === allContestants[plr].answer
            ||correctAns2 === allContestants[plr].answer
            ||correctAns3 === allContestants[plr].answer
            ||correctAns4 === allContestants[plr].answer){
              
              fill("Green")
            }else{
              
              fill("red");
          }
          
          display_Answers+=30;
          textSize(15);
          text(allContestants[plr].name + " = " + allContestants[plr].answer, 70,display_Answers)
        }
      }
    }
  }
  