const quizData = [
    {
      question: "На карте Башни есть шанс получить ценную гадальную карту. Что это за гадальная карта?",
      a: "Пациент",
      b: "Медсестра",
      c: "Доктор",
      d: "Братские сбережения",
      correct: "b",
    },
    {
      question: "Какой уровень области имеет локация Кровавый Акведук?",
      a: "61",
      b: "62",
      c: "63",
      d: "64",
      correct: "a",
    },
    {
      question: "Что будет, если имея Точные удары (Resolute Technique), вы активируете Алтарь Алмазов?",
      a: "Ничего",
      b: "Всегда наносить удары",
      c: "Критических ударов не будет",
      d: "Эффекты нивелируются",
      correct: "a",
    },
    {
      question: "Возможно ли оглушить таких уникальных боссов, как: Создатель, Сирус, Хранители Древнего и Создателя?",
      a: "нет",
      b: "да",
      c: "возможно",
      d: "частично",
      correct: "b",
    },
  ];

  const quiz =document.getElementById('quiz');
  const answerElements=document.querySelectorAll('.answer');
  const questionElements=document.getElementById('question');

  const a_text=document.getElementById("a_text");
  const b_text=document.getElementById("b_text");
  const c_text=document.getElementById("c_text");
  const d_text=document.getElementById("d_text");
  const submitButton = document.getElementById("submit");

  let currentQuiz=0;
  let score=0;


  const deselectAnswers=()=>{
    answerElements.forEach((answer)=>(answer.checked=false));
  }

  const getSelected=()=>{
    let answer;
    answerElements.forEach((answerElements)=>{
        if(answerElements.checked) answer=answerElements.id;
    });
    return answer;
  }

  const loadQuiz=()=>{
    deselectAnswers();
    const currentQuizData=quizData[currentQuiz];
    questionElements.innerHTML=currentQuizData.question;
    a_text.innerHTML=currentQuizData.a;
    b_text.innerHTML=currentQuizData.b;
    c_text.innerHTML=currentQuizData.c;
    d_text.innerHTML=currentQuizData.d;
    
  }

  submitButton.addEventListener('click',()=>{
    const answer=getSelected();
    if(answer){
        if(answer===quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if(currentQuiz<quizData.length) loadQuiz();
        else{
            quiz.innerHTML=`
            <h2> Вы ответили ${score} /${quizData.length} правильных ответов </h2>
            <button onclick='history.go(0)'>Play Again</button>
            `
        }
    }
  })

  loadQuiz();
