const RESULT_PRIORITY = [
  "Chargership",
  "Realationship",
  "Trialship",
  "Backupship",
  "Pushpullship",
  "Soulmanyships",
];

const RESULTS = {
  Soulmanyships: {
    english: "Soulmanyships",
    chinese: "（多元搭子型）",
    emotional: "你看起来很清醒，其实最怕把真心只交给一个人。",
    pattern: "你会把聊天、陪伴、玩乐和情绪承接拆给不同的人，关系感很轻，但投入也被你切得很碎。",
    risk: "你很少真的失控，也很少真的走进深连接。",
    fit: "边界稳定、节奏不逼迫、却愿意慢慢变深的人。",
  },
  Pushpullship: {
    english: "Pushpullship",
    chinese: "（呼吸式暧昧型）",
    emotional: "你最会经营氛围，却不一定真的走进去。",
    pattern: "你偏爱有来有回的留白感，太冷会不安，太近又会下意识往后退半步。",
    risk: "你守住了节奏，也可能把真正靠近的人挡在外面。",
    fit: "有空间感、回应稳定、不会逼你失去呼吸感的人。",
  },
  Chargership: {
    english: "Chargership",
    chinese: "（储能型暧昧）",
    emotional: "你总在别人最空的时候被想起，却不总在对方的未来里。",
    pattern: "你很会接住脆弱和情绪，所以常在对方低落时变成最靠近的人，也最容易把被需要误认成被爱。",
    risk: "你一直在给关系供能，却未必被放进长期选择里。",
    fit: "不只在你脆弱时靠近，也会在你状态很好时主动靠近你的人。",
  },
  Trialship: {
    english: "Trialship",
    chinese: "（试错期暧昧）",
    emotional: "你会认真开始，但不会允许自己无限期等下去。",
    pattern: "你愿意尝试，也会观察细节；只要对方迟迟不给回应，你心里就会默默启动倒计时。",
    risk: "你很会止损，但也可能在关系刚要变清楚时先退出。",
    fit: "愿意推进关系、给反馈、让你不用反复试探的人。",
  },
  Backupship: {
    english: "Backupship",
    chinese: "（双向备选型）",
    emotional: "你给自己留了退路，也把被坚定选择的机会一起留在了门外。",
    pattern: "你不太会只押一个答案，关系里会保留余地，也默认对方大概率同样没有把你当唯一。",
    risk: "看起来很安全，实际上最容易停在不上不下的中间地带。",
    fit: "愿意排他、明确表达、把你真正放到前排的人。",
  },
  Realationship: {
    english: "Realationship",
    chinese: "（清晰关系型）",
    emotional: "你不是不上头，你只是要一段能被确认的关系。",
    pattern: "你可以慢热，但接受不了长期模糊；比起反复猜测，你更想知道彼此到底要不要认真往前走。",
    risk: "你对不够明确的人会很快降温，也容易错过慢热但真诚的人。",
    fit: "会沟通边界、给承诺、推进自然且稳定的人。",
  },
};

const QUESTIONS = [
  {
    text: "你更自然的亲密节奏是？",
    options: [
      { letter: "A", text: "我会把不同情绪分给不同的人。", scores: { Soulmanyships: 1 } },
      { letter: "B", text: "保持一点若即若离最好。", scores: { Pushpullship: 1 } },
      { letter: "C", text: "我低落时最想黏住一个人。", scores: { Chargership: 1 } },
      { letter: "D", text: "关系最好清楚再往前走。", scores: { Realationship: 1 } },
    ],
  },
  {
    text: "对方突然冷下来时，你通常会？",
    options: [
      { letter: "A", text: "先观察，不急着继续投入。", scores: { Trialship: 1 } },
      { letter: "B", text: "转身看看别的可能。", scores: { Backupship: 1 } },
      { letter: "C", text: "我也后退一点，先保住气氛。", scores: { Pushpullship: 1 } },
      { letter: "D", text: "会失落，也会更想靠近。", scores: { Chargership: 1 } },
    ],
  },
  {
    text: "你最害怕哪种关系状态？",
    options: [
      { letter: "A", text: "所有需求都压在一个人身上。", scores: { Soulmanyships: 1 } },
      { letter: "B", text: "有感觉却一直没有定义。", scores: { Realationship: 1 } },
      { letter: "C", text: "我以为自己是首选，其实不是。", scores: { Backupship: 1 } },
      { letter: "D", text: "花了很多心力，最后只是试试。", scores: { Trialship: 1 } },
    ],
  },
  {
    text: "下面哪种画面最像你会进入的关系？",
    options: [
      { letter: "A", text: "白天各忙，偶尔靠近就够了。", scores: { Pushpullship: 1 } },
      { letter: "B", text: "对方总在我脆弱时出现。", scores: { Chargership: 1 } },
      { letter: "C", text: "不同阶段有不同搭子陪我。", scores: { Soulmanyships: 1 } },
      { letter: "D", text: "慢一点也行，但要有确认。", scores: { Realationship: 1 } },
    ],
  },
  {
    text: "如果关系开始升温，你更容易怎么做？",
    options: [
      { letter: "A", text: "给自己留一个观察期限。", scores: { Trialship: 1 } },
      { letter: "B", text: "继续相处，也继续保留选择。", scores: { Backupship: 1 } },
      { letter: "C", text: "想把关系一步步说清楚。", scores: { Realationship: 1 } },
      { letter: "D", text: "会主动控制靠近的频率。", scores: { Pushpullship: 1 } },
    ],
  },
  {
    text: "如果这段关系一直没有明确结果，你最后大概率会？",
    options: [
      { letter: "A", text: "明知消耗，也还是放不下。", scores: { Chargership: 1 } },
      { letter: "B", text: "继续拆分需求，维持现状。", scores: { Soulmanyships: 1 } },
      { letter: "C", text: "随时抽身，因为本来就不是唯一。", scores: { Backupship: 1 } },
      { letter: "D", text: "到了期限，我会体面离开。", scores: { Trialship: 1 } },
    ],
  },
];

const state = {
  currentQuestion: 0,
  answers: [],
  scores: createEmptyScores(),
  isAdvancing: false,
  activeScreen: "start",
  transitionTimer: null,
};

const screens = {
  start: document.querySelector('[data-screen="start"]'),
  quiz: document.querySelector('[data-screen="quiz"]'),
  result: document.querySelector('[data-screen="result"]'),
};

const screenStage = document.getElementById("screenStage");
const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");
const questionIndex = document.getElementById("questionIndex");
const progressFill = document.getElementById("progressFill");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("options");

const resultTitle = document.getElementById("resultTitle");
const resultSubtitle = document.getElementById("resultSubtitle");
const resultEmotional = document.getElementById("resultEmotional");
const resultPattern = document.getElementById("resultPattern");
const resultRisk = document.getElementById("resultRisk");
const resultFit = document.getElementById("resultFit");

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", resetQuiz);
window.addEventListener("resize", () => syncStageHeight(screens[state.activeScreen]));

window.requestAnimationFrame(() => {
  syncStageHeight(screens[state.activeScreen]);
});

function createEmptyScores() {
  return Object.keys(RESULTS).reduce((accumulator, key) => {
    accumulator[key] = 0;
    return accumulator;
  }, {});
}

function startQuiz() {
  state.currentQuestion = 0;
  state.answers = [];
  state.scores = createEmptyScores();
  state.isAdvancing = false;
  renderQuestion();
  showScreen("quiz");
}

function resetQuiz() {
  state.currentQuestion = 0;
  state.answers = [];
  state.scores = createEmptyScores();
  state.isAdvancing = false;
  optionsContainer.innerHTML = "";
  showScreen("start");
}

function showScreen(screenName) {
  const nextScreen = screens[screenName];
  const previousScreen = screens[state.activeScreen];

  if (previousScreen === nextScreen) {
    syncStageHeight(nextScreen);
    return;
  }

  window.clearTimeout(state.transitionTimer);
  nextScreen.classList.add("is-mounted");
  syncStageHeight(nextScreen, previousScreen);

  window.requestAnimationFrame(() => {
    nextScreen.classList.add("is-active");

    if (previousScreen) {
      previousScreen.classList.remove("is-active");
      previousScreen.classList.add("is-exiting");
    }
  });

  state.activeScreen = screenName;
  state.transitionTimer = window.setTimeout(() => {
    if (previousScreen) {
      previousScreen.classList.remove("is-mounted", "is-exiting");
    }

    syncStageHeight(nextScreen);
  }, 320);

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const question = QUESTIONS[state.currentQuestion];
  const answeredLetter = state.answers[state.currentQuestion];
  const progress = ((state.currentQuestion + 1) / QUESTIONS.length) * 100;

  state.isAdvancing = false;

  questionIndex.textContent = `${state.currentQuestion + 1} / ${QUESTIONS.length}`;
  progressFill.style.width = `${progress}%`;
  questionText.textContent = question.text;

  optionsContainer.innerHTML = "";

  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.dataset.letter = option.letter;
    button.setAttribute(
      "aria-label",
      `${option.letter}，${option.text}`
    );

    if (answeredLetter === option.letter) {
      button.classList.add("is-selected");
    }

    const badge = document.createElement("span");
    badge.className = "option-badge";
    badge.textContent = option.letter;

    const content = document.createElement("span");
    content.className = "option-content";

    const copy = document.createElement("span");
    copy.className = "option-copy";
    copy.textContent = option.text;
    content.append(copy);
    button.append(badge, content);

    button.addEventListener("click", () => handleAnswer(option.letter));
    optionsContainer.append(button);
  });

  if (state.activeScreen === "quiz") {
    syncStageHeight(screens.quiz);
  }
}

function handleAnswer(letter) {
  if (state.isAdvancing) {
    return;
  }

  state.isAdvancing = true;
  const selectedOption = QUESTIONS[state.currentQuestion].options.find((option) => option.letter === letter);
  state.answers[state.currentQuestion] = letter;
  Object.entries(selectedOption.scores).forEach(([resultKey, value]) => {
    state.scores[resultKey] += value;
  });
  highlightSelected(letter);

  window.setTimeout(() => {
    const isLastQuestion = state.currentQuestion === QUESTIONS.length - 1;

    if (isLastQuestion) {
      renderResult();
      showScreen("result");
      return;
    }

    state.currentQuestion += 1;
    renderQuestion();
  }, 180);
}

function highlightSelected(letter) {
  optionsContainer.querySelectorAll(".option-button").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.letter === letter);
  });
}

function renderResult() {
  const winner = getWinningResult(state.scores);
  const result = RESULTS[winner];

  resultTitle.textContent = result.english;
  resultSubtitle.textContent = result.chinese;
  resultEmotional.textContent = result.emotional;
  resultPattern.textContent = result.pattern;
  resultRisk.textContent = result.risk;
  resultFit.textContent = result.fit;
}

function getWinningResult(scores) {
  const highestScore = Math.max(...Object.values(scores));
  const tied = Object.keys(scores).filter((key) => scores[key] === highestScore);

  if (tied.length === 1) {
    return tied[0];
  }

  return RESULT_PRIORITY.find((key) => tied.includes(key));
}

function syncStageHeight(...screenList) {
  const validScreens = screenList.filter(Boolean);

  if (!validScreens.length) {
    return;
  }

  const tallest = Math.max(...validScreens.map((screen) => screen.scrollHeight));
  screenStage.style.height = `${tallest}px`;
}
