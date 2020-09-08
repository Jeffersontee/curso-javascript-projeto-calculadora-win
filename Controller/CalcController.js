class CalcController {

  constructor() {

    this._operation = [];
    this._displayCalc = document.getElementById("display");
    this.initialize();
    this.initButtonsEvents();

  }

  initialize() {

    document.querySelectorAll('.btn').forEach(btn => {
      //console.log(btn);
    })

  }

  addEventListenerAll(element, events, fn) {

    events.split(" ").forEach(event => {
      element.addEventListener(event, fn, false);

    });

  }

  clearAll() {

    this._operation = [];

  }

  clearEntry() {

    this._operation.pop();

  }


  addOperation(value) {

    this._operation.push(value);

    console.log(this._operation);

  }

  setError() {
    this.displayCalc = "Error"
  }


  execBtn(value) {

      switch(value) {

        case 'C':
          this.clearAll();
          break;
        case 'CE':
          this.clearEntry();
          break;
        case '%':
          //this.clearEntry();
          break;
        case '√':
          //this.raizQuadrada();
          break;
        case 'x²':
          //this.xElevado();
          break;
        case '÷':
          //this.divisao();
          break;
        case 'X':
          //this.x();
          break;
        case '-':
          //this.menos();
          break;
        case '+':
          //this.mais();
          break;
        
        
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          this.addOperation(parseInt(value));
          break;

        default:
          this.setError();
          break;
        
        
      
    }
  }

  initButtonsEvents() {

    let buttons = document.querySelectorAll(".row > button.btn");
  
    buttons.forEach((btn, index) => {

      this.addEventListenerAll(btn, 'click drag', e => {

        console.log(btn.innerHTML);
        let textBtn = btn.innerHTML;

        this.execBtn(textBtn);
      
      });

      this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e => {

        btn.style.cursor = "pointer";


      })
      
    });

  }

  get displayCalc() {

    return this._displayCalc.innerHTML;

  }

  set displayCalc(value) {

    this._displayCalc.innerHTML = value;

  }


}