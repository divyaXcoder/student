// ==========================================================================
// 1. GLOBAL STATE MANAGER & VIEW MOUNT TARGETS
// ==========================================================================
const portalMount = document.getElementById('web-portal-mount');
let isSignUpState = false; 
let activeUser = JSON.parse(localStorage.getItem('quizathon_session')) || null;

// ==========================================================================
// 2. CENTRAL WEBPAGE TEMPLATE DICTIONARY (Your 6 Subjects Layout)
// ==========================================================================
const webPages = {
  home: `
    <div class="flex flex-col items-center text-center max-w-7xl mx-auto">
      <span class="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20 tracking-widest uppercase mb-4 shadow-sm">
        BTU Semester Portal
      </span>
      <h1 class="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
        Select Your Subject Quiz
      </h1>
      <p class="text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
        Pick a specific subject to launch a unique, randomized MCQ testing portal designed to evaluate true conceptual logic.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-left">
        <div id="subject-dm" class="group bg-[#141122] border border-[#221C38] hover:border-indigo-500/40 rounded-[24px] p-8 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between shadow-xl">
          <div>
            <div class="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 text-xl font-bold mb-6 border border-indigo-500/20 group-hover:scale-105 transition">Σ</div>
            <h3 class="text-lg font-black text-white mb-2 tracking-tight group-hover:text-indigo-400 transition">Discrete Mathematics</h3>
            <p class="text-xs text-gray-400 leading-relaxed">Master group theory proofs, matrix representations of graphs, set relations, and combinatorics logic.</p>
          </div>
        </div>

        <div id="subject-dbms" class="group bg-[#141122] border border-[#221C38] hover:border-indigo-500/40 rounded-[24px] p-8 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between shadow-xl">
          <div>
            <div class="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 text-xl mb-6 border border-purple-500/20 group-hover:scale-105 transition">🗄️</div>
            <h3 class="text-lg font-black text-white mb-2 tracking-tight group-hover:text-purple-400 transition">Database Management Systems</h3>
            <p class="text-xs text-gray-400 leading-relaxed">Practice relational algebra queries, BCNF/3NF schema normalization rules, and transaction indexing logic.</p>
          </div>
        </div>

        <div id="subject-mp" class="group bg-[#141122] border border-[#221C38] hover:border-indigo-500/40 rounded-[24px] p-8 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between shadow-xl">
          <div>
            <div class="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-400 text-xl mb-6 border border-amber-500/20 group-hover:scale-105 transition">⚡</div>
            <h3 class="text-lg font-black text-white mb-2 tracking-tight group-hover:text-amber-400 transition">Microprocessors</h3>
            <p class="text-xs text-gray-400 leading-relaxed">Test architectural awareness on 8085/8086 register arrays, flag conditions, and instruction assembly sets.</p>
          </div>
        </div>

        <div id="subject-toc" class="group bg-[#141122] border border-[#221C38] hover:border-indigo-500/40 rounded-[24px] p-8 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between shadow-xl">
          <div>
            <div class="w-12 h-12 bg-rose-500/10 rounded-2xl flex items-center justify-center text-rose-400 text-xl mb-6 border border-rose-500/20 group-hover:scale-105 transition">🤖</div>
            <h3 class="text-lg font-black text-white mb-2 tracking-tight group-hover:text-rose-400 transition">Theory of Computation</h3>
            <p class="text-xs text-gray-400 leading-relaxed">Analyze state machine closures, pumping lemma patterns, context-free languages, and Turing machines.</p>
          </div>
        </div>

        <div id="subject-java" class="group bg-[#141122] border border-[#221C38] hover:border-indigo-500/40 rounded-[24px] p-8 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between shadow-xl">
          <div>
            <div class="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-400 text-xl mb-6 border border-orange-500/20 group-hover:scale-105 transition">☕</div>
            <h3 class="text-lg font-black text-white mb-2 tracking-tight group-hover:text-orange-400 transition">Java Programming</h3>
            <p class="text-xs text-gray-400 leading-relaxed">Trace object allocations across stack/heap pools, abstract contracts, threads, and map collections.</p>
          </div>
        </div>

        <div id="subject-python" class="group bg-[#141122] border border-[#221C38] hover:border-indigo-500/40 rounded-[24px] p-8 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between shadow-xl">
          <div>
            <div class="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 text-xl mb-6 border border-emerald-500/20 group-hover:scale-105 transition">🐍</div>
            <h3 class="text-lg font-black text-white mb-2 tracking-tight group-hover:text-emerald-400 transition">Python Essentials</h3>
            <p class="text-xs text-gray-400 leading-relaxed">Evaluate tuple/list structural logic transformations, negative slicers, scope bindings, and MRO parsing.</p>
          </div>
        </div>
      </div>
    </div>
  `,
  about: `
    <div class="max-w-3xl mx-auto py-6">
      <h2 class="text-3xl font-black text-white mb-4 tracking-tight">About our Platform</h2>
      <p class="text-sm text-gray-400 leading-relaxed">
        Quizathon is an advanced academic examination matrix built to empower university students with immediate, high-fidelity conceptual practice feedback lines.
      </p>
    </div>
  `,
  contact: `
    <div class="max-w-md mx-auto py-4">
      <h2 class="text-3xl font-black text-white mb-6 tracking-tight text-center">Contact Operations</h2>
      <form class="space-y-4 bg-[#141122] border border-[#221C38] p-6 rounded-[24px] shadow-2xl">
        <input type="text" placeholder="Your Name" class="w-full bg-[#0B0813] border border-[#221C38] rounded-xl px-4 py-3 text-sm text-white focus:border-indigo-500 focus:outline-none transition" />
        <textarea placeholder="Message content details..." rows="4" class="w-full bg-[#0B0813] border border-[#221C38] rounded-xl px-4 py-3 text-sm text-white focus:border-indigo-500 focus:outline-none transition resize-none"></textarea>
        <button class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl text-sm transition tracking-wide cursor-pointer shadow-md" onclick="event.preventDefault();">Submit Message</button>
      </form>
    </div>
  `
};

// ==========================================================================
// 3. CORE VIEW MOUNT ROUTING CONTROLLER
// ==========================================================================
function renderView(viewKey) {
  if (!webPages[viewKey]) return;
  
  portalMount.innerHTML = webPages[viewKey];

  document.querySelectorAll('nav button').forEach(button => {
    button.className = "px-4 py-2 rounded-xl text-gray-400 font-semibold text-sm tracking-wide hover:text-white hover:bg-white/5 transition cursor-pointer";
  });

  let btnTargetId = 'nav-home-btn';
  if(viewKey === 'about') btnTargetId = 'nav-about-btn';
  if(viewKey === 'contact') btnTargetId = 'nav-contact-btn';
  
  const targetBtn = document.getElementById(btnTargetId);
  if (targetBtn) {
    targetBtn.className = "px-4 py-2 rounded-xl text-indigo-400 font-bold text-sm bg-white/5 border border-[#2A2440] transition cursor-pointer";
  }

  // Hook up subject card click interactions
  if (viewKey === 'home') {
    document.querySelectorAll('.grid > div').forEach(card => {
      card.addEventListener('click', () => {
        const subjectId = card.id; 
        const subjectTitle = card.querySelector('h3').textContent;
        const subjectDesc = card.querySelector('p').textContent;
        
        const quizScreen = document.getElementById('quiz-workspace-screen');
        const lobbyBadge = document.getElementById('quiz-subject-badge');
        const lobbyTitle = document.getElementById('lobby-subject-title');
        const lobbyDesc = document.getElementById('lobby-subject-desc');
        
        const lobbyView = document.getElementById('quiz-lobby-view');
        const liveView = document.getElementById('quiz-live-view');
        const startBtn = document.getElementById('start-evaluation-btn');
        
        let selectedLength = 10;

        if (!quizScreen) return;

        lobbyBadge.textContent = subjectTitle.toUpperCase();
        if(lobbyTitle) lobbyTitle.textContent = subjectTitle;
        if(lobbyDesc) lobbyDesc.textContent = subjectDesc;

        const optionButtons = document.querySelectorAll('.len-option-btn');
        optionButtons.forEach(btn => {
          btn.onclick = () => {
            optionButtons.forEach(b => {
              b.className = "len-option-btn border border-[#221C38] bg-[#0B0813]/40 text-center p-4 rounded-2xl transition cursor-pointer";
              b.querySelector('div').className = "text-2xl font-black text-gray-300";
              b.querySelectorAll('div')[2].className = "inline-block text-[9px] font-medium text-gray-500 bg-white/5 border border-white/5 px-2 py-0.5 rounded-md mt-3 font-mono";
            });

            btn.className = "len-option-btn border-2 border-indigo-600 bg-indigo-600/5 text-center p-4 rounded-2xl transition cursor-pointer";
            btn.querySelector('div').className = "text-2xl font-black text-white";
            btn.querySelectorAll('div')[2].className = "inline-block text-[9px] font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-md mt-3 font-mono";
            selectedLength = parseInt(btn.getAttribute('data-len'));
          };
        });

        lobbyView.classList.remove('hidden');
        liveView.classList.add('hidden');
        quizScreen.classList.remove('hidden');

        // Dynamic Question Runner
// 4. Handle "Start Examination" click action (Silent background tracking engine)
        startBtn.onclick = () => {
          lobbyView.classList.add('hidden');
          liveView.classList.remove('hidden');

          const questionBox = document.getElementById('quiz-question-text');
          const optionsBox = document.getElementById('quiz-options-container');
          const progressTracker = document.getElementById('quiz-progress-tracker');
          const currentNumLabel = document.getElementById('quiz-current-num');
          const totalNumLabel = document.getElementById('quiz-total-num');
          const controlActionWrapper = document.getElementById('quiz-action-controls-wrapper');
          const countdownLabel = document.getElementById('quiz-countdown-timer');

          let subjectQuestions = [];
          
          // Fetch questions across the live local server API port channel
          fetch(`http://localhost:5000/api/questions/${subjectId}`)
            .then(response => response.json())
            .then(serverData => {
              subjectQuestions = serverData;
              
              if (subjectQuestions.length === 0) {
                questionBox.textContent = `Server Notice: No questions uploaded yet for key: ${subjectId}`;
                optionsBox.innerHTML = "";
                return;
              }

              let runningPool = [...subjectQuestions].sort(() => 0.5 - Math.random());
              runningPool = runningPool.slice(0, selectedLength);

              let currentQuestionIndex = 0;
              let studentScoreMatrix = 0;
              let selectedOptionText = null; // Tracks answer choice quietly in memory

              // --- TIME MANAGEMENT RUNNER ENGINE ---
              let totalTimeSeconds = 15 * 60; 
              if(countdownLabel) countdownLabel.textContent = "15:00";
              
              let timerInterval = setInterval(() => {
                totalTimeSeconds--;
                let mins = Math.floor(totalTimeSeconds / 60);
                let secs = totalTimeSeconds % 60;
                if(countdownLabel) {
                  countdownLabel.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
                }
                if (totalTimeSeconds <= 0) {
                  clearInterval(timerInterval);
                  terminateQuizSessionRun();
                }
              }, 1000);

              function renderActiveQuestionStep() {
                selectedOptionText = null; // Reset selection state for the new question
                const currentItem = runningPool[currentQuestionIndex];
                
                if (currentNumLabel) currentNumLabel.textContent = currentQuestionIndex + 1;
                if (totalNumLabel) totalNumLabel.textContent = runningPool.length;
                if (progressTracker) {
                  progressTracker.textContent = `Q: ${currentQuestionIndex + 1} / ${runningPool.length}`;
                }

                questionBox.textContent = currentItem.question;
                optionsBox.innerHTML = "";
                
                // Render choices cleanly without instant color reveals
                currentItem.options.forEach((optionText) => {
                  const optionButton = document.createElement('button');
                  optionButton.className = "w-full text-left bg-[#0B0813] border border-[#221C38] p-4 rounded-xl text-sm text-gray-300 font-medium transition duration-200 cursor-pointer focus:outline-none";
                  optionButton.textContent = optionText;

                  optionButton.onclick = () => {
                    selectedOptionText = optionText;

                    // Highlight ONLY the chosen option with an active indigo ring layout
                    Array.from(optionsBox.children).forEach(btn => {
                      if (btn.textContent === optionText) {
                        btn.className = "w-full text-left bg-indigo-600/10 border-2 border-indigo-500 p-4 rounded-xl text-sm text-indigo-400 font-bold transition";
                      } else {
                        btn.className = "w-full text-left bg-[#0B0813] border border-[#221C38] p-4 rounded-xl text-sm text-gray-400 font-medium transition opacity-50";
                      }
                    });

                    // Update action panel block state from skip to proceed look
                    renderFooterControls(true);
                  };

                  optionsBox.appendChild(optionButton);
                });

                renderFooterControls(false);

                if (window.MathJax?.typesetPromise) {
                  window.MathJax.typesetPromise();
                }
              }

              function renderFooterControls(hasSelected) {
                controlActionWrapper.innerHTML = "";
                const actionBtn = document.createElement('button');

                if (!hasSelected) {
                  actionBtn.className = "w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-xl text-sm transition tracking-wide cursor-pointer text-center flex items-center justify-center gap-1";
                  actionBtn.innerHTML = "👉 Skip Question";
                  actionBtn.onclick = () => advanceToNextStepMatrix();
                } else {
                  actionBtn.className = "w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl text-sm transition tracking-wide cursor-pointer text-center flex items-center justify-center gap-1";
                  actionBtn.innerHTML = "Next Question ➡️";
                  actionBtn.onclick = () => {
                    // Score verification matches quietly behind the screen context framework
                    const currentItem = runningPool[currentQuestionIndex];
                    if (selectedOptionText === currentItem.answer) {
                      studentScoreMatrix++;
                    }
                    advanceToNextStepMatrix();
                  };
                }

                controlActionWrapper.appendChild(actionBtn);
              }

              function advanceToNextStepMatrix() {
                if (currentQuestionIndex + 1 < runningPool.length) {
                  currentQuestionIndex++;
                  renderActiveQuestionStep();
                } else {
                  clearInterval(timerInterval);
                  terminateQuizSessionRun();
                }
              }

              function terminateQuizSessionRun() {
                document.getElementById('quiz-workspace-screen').classList.add('hidden');
                
                const resultModal = document.getElementById('quiz-result-modal');
                const scoreBox = document.getElementById('report-card-score-box');
                const progressFill = document.getElementById('report-card-progress-fill');
                const accuracyLabel = document.getElementById('report-card-accuracy-label');

                let accuracyPercent = ((studentScoreMatrix / runningPool.length) * 100).toFixed(1);

                if (scoreBox) scoreBox.textContent = `${studentScoreMatrix} / ${runningPool.length}`;
                if (progressFill) progressFill.style.width = `${accuracyPercent}%`;
                if (accuracyLabel) accuracyLabel.textContent = `${accuracyPercent}% Accuracy`;

                if (resultModal) resultModal.classList.remove('hidden');
              }

              // Boot the initial loader pass
              renderActiveQuestionStep();
            });
        };

      });
    });
  }
}

// ==========================================================================
// 4. PREMIUM TOAST NOTIFICATION ENGINE
// ==========================================================================
function showToast(message, icon = "ℹ️") {
  const toast = document.getElementById('toast-notification');
  if(!toast) return;
  document.getElementById('toast-icon').textContent = icon;
  document.getElementById('toast-message').textContent = message;
  
  toast.classList.remove('opacity-0', '-translate-y-20', 'pointer-events-none');
  toast.classList.add('opacity-100', 'translate-y-0');
  
  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', '-translate-y-20', 'pointer-events-none');
  }, 3000);
}

// ==========================================================================
// 5. SIGN-IN MODAL OVERLAY LOGIC BACKEND
// ==========================================================================
const authModal = document.getElementById('auth-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const navbarSignInBtn = document.getElementById('navbar-signin-btn');
const authToggleLink = document.getElementById('auth-toggle-link');

const authTitle = document.getElementById('auth-title');
const authSubtitle = document.getElementById('auth-subtitle');
const nameFieldGroup = document.getElementById('name-field-group');
const authSubmitBtn = document.getElementById('auth-submit-btn');
const authToggleMsg = document.getElementById('auth-toggle-msg');

function syncUserSessionUI() {
  if (!navbarSignInBtn) return;
  if (activeUser) {
    navbarSignInBtn.innerHTML = `👋 Log Out (${activeUser.name || 'User'})`;
  } else {
    navbarSignInBtn.innerHTML = `Sign in &rarr;`;
  }
}

if (authToggleLink) {
  authToggleLink.addEventListener('click', () => {
    isSignUpState = !isSignUpState;
    if (isSignUpState) {
      authTitle.textContent = "Create Account";
      authSubtitle.textContent = "Register a local student profile configuration.";
      nameFieldGroup.classList.remove('hidden');
      authSubmitBtn.textContent = "Register Account";
      authToggleMsg.textContent = "Already registered?";
      authToggleLink.textContent = "Sign In Instead";
    } else {
      authTitle.textContent = "Welcome Back";
      authSubtitle.textContent = "Enter your credentials to access active quiz metrics.";
      nameFieldGroup.classList.add('hidden');
      authSubmitBtn.textContent = "Sign In to Portal";
      authToggleMsg.textContent = "Don't have an account?";
      authToggleLink.textContent = "Create Account";
    }
  });
}

if (navbarSignInBtn) {
  navbarSignInBtn.addEventListener('click', () => {
    if (activeUser) {
      localStorage.removeItem('quizathon_session');
      activeUser = null;
      showToast("Session disconnected securely.", "🔒");
      syncUserSessionUI();
    } else {
      if(authModal) {
        authModal.classList.remove('opacity-0', 'pointer-events-none');
        authModal.querySelector('div').classList.remove('scale-95');
        authModal.querySelector('div').classList.add('scale-100');
      }
    }
  });
}

function closeAuthModal() {
  if(!authModal) return;
  authModal.classList.add('opacity-0', 'pointer-events-none');
  authModal.querySelector('div').classList.remove('scale-100');
  authModal.querySelector('div').classList.add('scale-95');
}
if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeAuthModal);

const authForm = document.getElementById('auth-form');
if (authForm) {
  authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('auth-email').value.trim();
    const password = document.getElementById('auth-password').value;
    const name = document.getElementById('auth-name').value.trim();

    if (isSignUpState) {
      const newUser = { name: name || 'Student', email: email, password: password };
      localStorage.setItem(`user_${email}`, JSON.stringify(newUser));
      showToast("Profile created successfully! Please sign in.", "✅");
      authToggleLink.click();
    } else {
      const registeredUser = JSON.parse(localStorage.getItem(`user_${email}`));
      if (registeredUser && registeredUser.password === password) {
        activeUser = registeredUser;
        localStorage.setItem('quizathon_session', JSON.stringify(activeUser));
        showToast(`Welcome, ${activeUser.name}! Authentication confirmed.`, "🚀");
        syncUserSessionUI();
        closeAuthModal();
      } else {
        showToast("Invalid credentials configuration match.", "❌");
      }
    }
  });
}

// ==========================================================================
// 6. CORE NAVIGATION LINK LISTENERS & WINDOW CLOSES
// ==========================================================================
document.getElementById('nav-home-btn')?.addEventListener('click', () => renderView('home'));
document.getElementById('nav-about-btn')?.addEventListener('click', () => renderView('about'));
document.getElementById('nav-contact-btn')?.addEventListener('click', () => renderView('contact'));

document.getElementById('exit-quiz-btn')?.addEventListener('click', () => {
  document.getElementById('quiz-workspace-screen').classList.add('hidden');
});

document.getElementById('close-result-modal-btn')?.addEventListener('click', () => {
  document.getElementById('quiz-result-modal').classList.add('hidden');
});

// Initializations
syncUserSessionUI();
renderView('home');


document.getElementById('master-dashboard-return-btn')?.addEventListener('click', () => {
  document.getElementById('quiz-result-modal').classList.add('hidden');
})