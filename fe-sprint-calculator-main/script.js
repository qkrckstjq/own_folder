const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const hidden_num = document.querySelector('.calculator__display--for-advanced'); //
let index  = 1;
let qwe = 1;
function calculate(n1, operator, n2) {
  let result = 0;
  result = eval(n1+operator+n2);
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
  return String(result);
}


buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

  if (target.matches('button')) {
    // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
    // 클릭된 HTML 엘리먼트가 button이면
    if (action === 'number') {
      // 그리고 버튼의 클레스가 number이면
      // 아래 코드가 작동됩니다.


      /*
        [index]
        1: 첫번째숫자 소수점 안누른 상태, 2: 첫번째숫자 소수점을 누른상태, 3: 첫번째숫자 소수점을 누른상태에서 버튼을 누른경우
        4: 두번째숫자 소수점 안누른 상태, 5: 두번째숫자 소수점을 누른상태, 6: 두번째숫자 소수점을 누른상태에서 버튼을 누른경우

        연산자를 누르면 3
        계산버튼을 누르면 1
      */

      switch (index) {
        case 1:
          firstOperend.innerText = buttonContent;
          hidden_num.innerText = buttonContent;
          index = 3 
          break;
        case 2:
          firstOperend.innerText = firstOperend.innerText + '.' + (buttonContent);
          hidden_num.innerText = hidden_num.innerText + '.' + (buttonContent);
          index = 3;
          break;
        case 3:
          firstOperend.innerText = firstOperend.innerText + buttonContent;
          hidden_num.innerText = hidden_num.innerText + buttonContent;
          break;
        case 4:
          secondOperend.innerText = buttonContent;
          hidden_num.innerText = buttonContent;
          index = 6;
          break;
        case 5:
          secondOperend.innerText = secondOperend.innerText + "." + buttonContent;
          hidden_num.innerText = hidden_num.innerText + '.' + (buttonContent);
          index = 6;
          break;
        case 6:
          secondOperend.innerText = secondOperend.innerText + buttonContent;
          hidden_num.innerText = hidden_num.innerText + buttonContent;
          break;   
      }
    }



    if (action === 'operator' && index != 6) {      //index가 6일경우 2번째의 숫자까지 입력x
      index  = 4;
      qwe = 1;
      operator.innerText = buttonContent;
    } else if((action === 'operator' && index == 6) || (action==='operator' && index == 3)) {
      hidden_num.textContent = eval(firstOperend.textContent+operator.textContent+secondOperend.textContent);
      calculatedResult.textContent = eval(firstOperend.textContent+operator.textContent+secondOperend.textContent);
      firstOperend.textContent = calculatedResult.textContent;
      secondOperend.textContent = '0';
      operator.textContent = buttonContent;
      index=4;
    }
    if (action === 'decimal') {
      switch (index) {
        case 1:
          index = 2;
          break;
        case 3:
          index = 2;
          break;
        case 4:
          index = 5;
          break;
        case 6:
          index = 5;
          break; 
      }
    }
    if (action === 'clear') {
      firstOperend.innerText  = '0';
      secondOperend.innerText = '0';
      calculatedResult.innerText = '0';
      hidden_num.innerText = '0'
      operator.innerText = "+";
      index = 1;
      qwe = 1;
    }
    if(qwe == 2) {                //5+5=10    enter
      let dupli_num = eval(calculatedResult.innerHTML+operator.innerText+secondOperend.innerHTML);
      calculatedResult.innerHTML=dupli_num
      hidden_num.innerText = dupli_num
    }
    if (action === 'calculate' && qwe == 1 && index == 6) {
      index = 1; //초기화 
      qwe = 2;
      let calculation = calculate(firstOperend.textContent, operator.textContent, secondOperend.textContent);
      calculatedResult.innerText = calculation;
      hidden_num.innerText = calculation;
    } else if(action === 'calculate' && qwe == 1 && index == 4) {
      let calculation = calculate(firstOperend.textContent, operator.textContent, firstOperend.textContent);
      calculatedResult.innerHTML = calculation;
      hidden_num.innerHTML = calculation;
    }
  }
});
const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced, previousKey, previousNum;
buttons.addEventListener('click', function (event) {
  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches('button')) {
    if (action === 'number') {}
    if (action === 'operator') {}
    if (action === 'decimal') {}
    if (action === 'clear') {}
    if (action === 'calculate') {}
  }
});
document.addEventListener('click',function (){
  console.log('히든숫자 : '+hidden_num.innerText);
  console.log('index : '+index)
  console.log('qwe : '+qwe)

})