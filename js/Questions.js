class Question {

    constructor() {
      this.title = createElement('h1')
      this.input1 = createInput("NAME : ");
      this.input2 = createInput("ANSWER : ");
      this.button = createButton("SUBMIT");
      this.question = createElement('h3');
      this.option1 = createElement('h4');
      this.option2 = createElement('h4');
      this.option3 = createElement('h4');
      this.option4 = createElement('h4');
    }
  
    hide(){
      this.title.hide();
      this.input1.hide();
      this.button.hide();
      this.input2.hide();
    }
  
    display(){
      this.title.html("MyQuiZ");
      this.title.position(200, 50);
  
      this.question.html("Who is known as the 'King of Pop'?" );
      this.question.position(70, 100);
      this.option1.html("A) Bruno Mars" );
      this.option1.position(90, 140);
      this.option2.html("B) Micheal Jackson" );
      this.option2.position(90, 275);
      this.option3.html("C) Jung Hoseok" );
      this.option3.position(290, 140);
      this.option4.html("D) Rihanna Fenty" );
      this.option4.position(290, 275);
  
      this.input1.position(100, 500);
      this.input2.position(250, 500);
      this.button.position(350, 530);
  
      this.button.mousePressed(()=>{
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        
        contestant.name = this.input1.value();
        contestant.answer = this.input2.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
      });
    }
  }
  