// ==========================================
// 1. DOM ELEMENT REGISTRATION
// ==========================================
const selectionScreen = document.getElementById('subject-selection-screen');
const quizScreen = document.getElementById('quiz-screen');
const quizSetupZone = document.getElementById('quiz-setup-zone');
const quizActiveZone = document.getElementById('quiz-active-zone');

const categoryTag = document.getElementById('quiz-category-tag');
const questionText = document.getElementById('quiz-question-text');
const quizOptionsContainer = document.getElementById('quiz-options-container');

// Configuration Controls
const btn10 = document.getElementById('count-10-btn');
const btn20 = document.getElementById('count-20-btn');
const btn50 = document.getElementById('count-50-btn');
const launchExamBtn = document.getElementById('launch-exam-btn');
const nextQuestionBtn = document.getElementById('next-question-btn');
const cancelBtn = document.getElementById('cancel-quiz-btn');

// ==========================================
// 2. GLOBAL APP STATE (Our Memory Bank)
// ==========================================
let currentSubject = "";
let chosenQuestionCount = 10; 
let activeQuestionsPool = []; 
let currentQuestionIndex = 0; 
let userScore = 0;            
let timerInterval = null;
let secondsRemaining = 0;
let hasAnsweredCurrentQuestion = false; // Tracks if they answered or are skipping

// ==========================================
// 3. CORE EXAM ENGINE FUNCTIONS
// ==========================================

function openQuizSetup(subjectKey, subjectDisplayName) {
  currentSubject = subjectKey;
  categoryTag.innerText = subjectDisplayName;
  
  // Reset visual viewports
  selectionScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  quizSetupZone.classList.remove('hidden');
  quizActiveZone.classList.add('hidden');
  
  // Set default button active state visually
  setQuestionCount(10);
}

function setQuestionCount(count) {
  chosenQuestionCount = count;

  // Reset all 3 setup buttons to standard gray layout configuration
  [btn10, btn20, btn50].forEach(btn => {
    if (btn) {
      btn.className = "px-5 py-3 border-2 border-gray-200 text-gray-600 rounded-2xl font-bold text-sm hover:border-indigo-400 transition text-center flex flex-col items-center justify-center cursor-pointer";
    }
  });

  // Target the chosen button and apply active indicator styling
  let activeBtn = count === 10 ? btn10 : count === 20 ? btn20 : btn50;
  if (activeBtn) {
    activeBtn.className = "px-5 py-3 border-2 border-indigo-600 bg-indigo-50 text-indigo-700 rounded-2xl font-bold text-sm transition text-center flex flex-col items-center justify-center cursor-pointer";
  }
}

function launchExamination() {
  const originalPool = quizDatabase[currentSubject];
  
  if (!originalPool || originalPool.length === 0) {
    alert("This subject question pool is currently being compiled! Try Discrete Mathematics, DBMS, or Java.");
    return;
  }

  //  Create the shuffled pool variable 
  const shuffledPool = [...originalPool].sort(() => Math.random() - 0.5);
  
  //  Run  dynamic safety check using the shuffled pool
  const targetCount = Math.min(chosenQuestionCount, shuffledPool.length);
  activeQuestionsPool = shuffledPool.slice(0, targetCount);
  
  // Initialize test tracking metrics
  currentQuestionIndex = 0;
  userScore = 0;

  // Update layout viewport states
  quizSetupZone.classList.add('hidden');
  quizActiveZone.classList.remove('hidden');

  // Start the professional testing countdown timer (allow 90 seconds per question)
  startExamTimer(chosenQuestionCount * 90);

  // Render question #1
  renderCurrentQuestion();
}

function renderCurrentQuestion() {
  quizOptionsContainer.innerHTML = "";
  
  // Reset our tracking flag because this is a brand new question
  hasAnsweredCurrentQuestion = false;

  // Configure the button as a clickable "Skip" option right out of the gate
  nextQuestionBtn.innerText = "👉 Skip Question";
  nextQuestionBtn.disabled = false;
  nextQuestionBtn.className = "w-full mt-8 bg-amber-500 text-white py-3 rounded-2xl font-bold hover:bg-amber-600 transition cursor-pointer shadow-sm text-center";

  const currentQ = activeQuestionsPool[currentQuestionIndex];
  
  // Update the card heading with a clean progress tracking string metric
  categoryTag.innerHTML = `
    <div class="flex justify-between items-center w-full text-xs font-bold text-gray-500 tracking-wider">
      <span>${categoryTag.innerText.split('│')[0].trim()}</span>
      <span class="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full uppercase">Q: ${currentQuestionIndex + 1} / ${activeQuestionsPool.length}</span>
    </div>
  `;

  questionText.innerText = currentQ.question;

  // Populate multiple choice option blocks dynamically
  currentQ.options.forEach(option => {
    const optionButton = document.createElement('button');
    optionButton.innerText = option;
    optionButton.className = "w-full text-left px-5 py-3.5 border border-gray-200 rounded-2xl text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-300 transition duration-150 cursor-pointer text-sm";
    
    optionButton.addEventListener('click', function() {
      evaluateSelectedAnswer(option, currentQ.answer, optionButton);
    });

    quizOptionsContainer.appendChild(optionButton);
  });
}

function evaluateSelectedAnswer(selectedOption, correctOption, clickedButton) {
  // Flag that they locked in an answer choice
  hasAnsweredCurrentQuestion = true;

  // Lock all options instantly to prevent double-clicking
  const allButtons = quizOptionsContainer.querySelectorAll('button');
  allButtons.forEach(btn => btn.disabled = true);

  if (selectedOption === correctOption) {
    userScore++;
    clickedButton.className = "w-full text-left px-5 py-3.5 border-2 border-emerald-500 bg-emerald-50 text-emerald-700 font-bold rounded-2xl text-sm transition";
  } else {
    clickedButton.className = "w-full text-left px-5 py-3.5 border-2 border-rose-500 bg-rose-50 text-rose-700 font-bold rounded-2xl text-sm transition";
    
    // Highlight correct response green so the student can conceptualize the error
    allButtons.forEach(btn => {
      if (btn.innerText === correctOption) {
        btn.className = "w-full text-left px-5 py-3.5 border-2 border-emerald-500 bg-emerald-50 text-emerald-700 font-bold rounded-2xl text-sm transition";
      }
    });
  }

  // Transform the button away from "Skip" into a bold "Next Question" action
  nextQuestionBtn.innerText = "Next Question ➡️";
  nextQuestionBtn.className = "w-full mt-8 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-3 rounded-2xl font-bold hover:from-indigo-700 hover:to-indigo-800 transition cursor-pointer shadow-sm text-center";
}

function handleNextQuestion() {
  // Optional flag loop: if they clicked the button while it still says "Skip", we can trigger a minor alert note or log it
  if (!hasAnsweredCurrentQuestion) {
    console.log(`Question index ${currentQuestionIndex} was skipped by the student.`);
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < activeQuestionsPool.length) {
    renderCurrentQuestion();
  } else {
    concludeExamination();
  }
}

function startExamTimer(durationSeconds) {
  clearInterval(timerInterval);
  secondsRemaining = durationSeconds;

  let timerBadge = document.getElementById('exam-countdown-clock');
  if (!timerBadge) {
    timerBadge = document.createElement('div');
    timerBadge.id = 'exam-countdown-clock';
    timerBadge.className = "mt-3 text-right text-xs font-black tracking-widest text-rose-600 font-mono bg-rose-50 px-3 py-1.5 rounded-xl border border-rose-100 inline-block";
    questionText.parentNode.insertBefore(timerBadge, questionText);
  }
  timerBadge.classList.remove('hidden');

  timerInterval = setInterval(() => {
    secondsRemaining--;
    
    let mins = Math.floor(secondsRemaining / 60);
    let secs = secondsRemaining % 60;
    
    timerBadge.innerText = `⏱️ TIME REMAINING: ${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    if (secondsRemaining <= 0) {
      clearInterval(timerInterval);
      alert("Examination session duration timeout has been reached!");
      concludeExamination();
    }
  }, 1000);
}

function concludeExamination() {
  clearInterval(timerInterval);
  
  const timerBadge = document.getElementById('exam-countdown-clock');
  if (timerBadge) timerBadge.classList.add('hidden');

  const finalPercentage = ((userScore / activeQuestionsPool.length) * 100).toFixed(1);

  categoryTag.innerHTML = `<span class="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">Report Card</span>`;
  questionText.innerText = "Examination Session Completed Successfully!";
  
  quizOptionsContainer.innerHTML = `
    <div class="text-center py-6 bg-gray-50 border border-gray-100 rounded-2xl p-6">
      <div class="text-5xl font-black text-indigo-600 mb-2">${userScore} / ${activeQuestionsPool.length}</div>
      <p class="text-sm font-bold text-gray-700 uppercase tracking-wide">Final Evaluated Score</p>
      <div class="w-full bg-gray-200 rounded-full h-2.5 mt-4 overflow-hidden">
        <div class="bg-indigo-600 h-2.5 rounded-full" style="width: ${finalPercentage}%"></div>
      </div>
      <p class="text-xs font-semibold text-gray-500 mt-3">Accuracy Metric Profile Rank: ${finalPercentage}% Accuracy</p>
    </div>
  `;

  nextQuestionBtn.innerText = "Return to Main Dashboard";
  nextQuestionBtn.disabled = false;
  nextQuestionBtn.className = "w-full mt-8 bg-gray-900 text-white py-3 rounded-2xl font-bold hover:bg-gray-800 transition cursor-pointer shadow-sm text-center";
  
  nextQuestionBtn.replaceWith(nextQuestionBtn.cloneNode(true));
  const newHomeBtn = document.getElementById('next-question-btn');
  newHomeBtn.addEventListener('click', () => {
    location.reload(); 
  });
}

// ==========================================
// 4. BINDING CLICK HANDLERS TO ALL INTERACTIVE ELEMENTS
// ==========================================

const subjectCardsMap = [
  { id: 'math-card', key: 'discreteMaths', name: 'Discrete Mathematics' },
  { id: 'dbms-card', key: 'dbms', name: 'Database Management Systems' },
  { id: 'micro-card', key: 'microprocessors', name: 'Microprocessors' },
  { id: 'toc-card', key: 'toc', name: 'Theory of Computation' },
  { id: 'java-card', key: 'java', name: 'Java Programming' },
  { id: 'python-card', key: 'python', name: 'Python Essentials' }
];

subjectCardsMap.forEach(card => {
  const cardElement = document.getElementById(card.id);
  if (cardElement) {
    cardElement.addEventListener('click', function(event) {
      event.preventDefault();
      openQuizSetup(card.key, card.name);
    });
  }
});

if (btn10) btn10.addEventListener('click', function() { setQuestionCount(10); });
if (btn20) btn20.addEventListener('click', function() { setQuestionCount(20); });
if (btn50) btn50.addEventListener('click', function() { setQuestionCount(50); });

if (launchExamBtn) launchExamBtn.addEventListener('click', launchExamination);
if (nextQuestionBtn) nextQuestionBtn.addEventListener('click', handleNextQuestion);

if (cancelBtn) {
  cancelBtn.addEventListener('click', function() {
    clearInterval(timerInterval);
    quizScreen.classList.add('hidden');
    selectionScreen.classList.remove('hidden');
  });
}