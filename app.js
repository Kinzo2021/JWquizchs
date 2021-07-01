const quiz = [
  {
    question: '上帝的名字是什么？',
    answers: [ '耶稣', '大卫', '耶和华', '亚当'],
    correct: '耶和华'
  }, {
    question: '上帝的王国什么时候开始统治？',
    answers: [ '607年', '1914年', '1997年', '1919年'],
    correct: '1914年'
  }, {
    question: '上帝的儿子叫什么？',
    answers: [ '耶和华', '大卫', '耶稣', '彼得'],
    correct: '耶稣'
  }, {
    question: '上帝的朋友是谁？',
    answers: [ '亚当', '亚伯拉罕', '撒但', '该隐'],
    correct: '亚伯拉罕'
  }, {
    question: '上帝王国的君王有多少人？',
     answers: [ '166000', '144000', '1200', '144001'],
     correct: '144001'
},{
  question: '王国的君王是谁？',
  answers: [ '大卫', '所罗门', '耶稣', '犹大'],
  correct: '耶稣'
}, {
  question: '耶路撒冷什么时候被巴比伦毁灭？',
  answers: [ '公元前568年', '公元前538年', '公元前607年', '公元70年'],
  correct: '公元前607年'
}, {
  question: '大卫的朋友是谁？',
  answers: [ '扫罗', '亚伯', '约拿单', '凯撒'],
  correct: '约拿单'
}, {
  question: '出卖耶稣的是谁？',
  answers: [ '保罗', '犹大', '彼得', '约翰'],
  correct: '犹大'
}
  ];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';
  
  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}