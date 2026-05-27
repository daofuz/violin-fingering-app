const TONICS = [
  { label: "C", pc: 0 },
  { label: "G", pc: 7 },
  { label: "D", pc: 2 },
  { label: "A", pc: 9 },
  { label: "E", pc: 4 },
  { label: "B", pc: 11 },
  { label: "F#", pc: 6 },
  { label: "F", pc: 5 },
  { label: "Bb", pc: 10 },
  { label: "Eb", pc: 3 },
  { label: "Ab", pc: 8 },
];

const MODES = {
  major: {
    label: "大调",
    intervals: [0, 2, 4, 5, 7, 9, 11],
    signatures: {
      C: "无升降",
      G: "1 个升号：F#",
      D: "2 个升号：F# C#",
      A: "3 个升号：F# C# G#",
      E: "4 个升号：F# C# G# D#",
      B: "5 个升号：F# C# G# D# A#",
      "F#": "6 个升号：F# C# G# D# A# E#",
      F: "1 个降号：Bb",
      Bb: "2 个降号：Bb Eb",
      Eb: "3 个降号：Bb Eb Ab",
      Ab: "4 个降号：Bb Eb Ab Db",
    },
  },
  minor: {
    label: "自然小调",
    intervals: [0, 2, 3, 5, 7, 8, 10],
    signatures: {
      C: "3 个降号：Bb Eb Ab",
      G: "2 个降号：Bb Eb",
      D: "1 个降号：Bb",
      A: "无升降",
      E: "1 个升号：F#",
      B: "2 个升号：F# C#",
      "F#": "3 个升号：F# C# G#",
      F: "4 个降号：Bb Eb Ab Db",
      Bb: "5 个降号：Bb Eb Ab Db Gb",
      Eb: "6 个降号：Bb Eb Ab Db Gb Cb",
      Ab: "7 个降号：Bb Eb Ab Db Gb Cb Fb",
    },
  },
  harmonicMinor: {
    label: "和声小调",
    intervals: [0, 2, 3, 5, 7, 8, 11],
    signatures: {
      C: "按 C 自然小调调号，临时升 B",
      G: "按 G 自然小调调号，临时升 F",
      D: "按 D 自然小调调号，临时升 C",
      A: "按 A 自然小调调号，临时升 G",
      E: "按 E 自然小调调号，临时升 D",
      B: "按 B 自然小调调号，临时升 A",
      "F#": "按 F# 自然小调调号，临时升 E",
      F: "按 F 自然小调调号，临时升 E",
      Bb: "按 Bb 自然小调调号，临时升 A",
      Eb: "按 Eb 自然小调调号，临时升 D",
      Ab: "按 Ab 自然小调调号，临时升 G",
    },
  },
};

const SIGNATURES = {
  major: {
    C: { type: "none", count: 0, names: [] },
    G: { type: "sharp", count: 1, names: ["F#"] },
    D: { type: "sharp", count: 2, names: ["F#", "C#"] },
    A: { type: "sharp", count: 3, names: ["F#", "C#", "G#"] },
    E: { type: "sharp", count: 4, names: ["F#", "C#", "G#", "D#"] },
    B: { type: "sharp", count: 5, names: ["F#", "C#", "G#", "D#", "A#"] },
    "F#": { type: "sharp", count: 6, names: ["F#", "C#", "G#", "D#", "A#", "E#"] },
    F: { type: "flat", count: 1, names: ["Bb"] },
    Bb: { type: "flat", count: 2, names: ["Bb", "Eb"] },
    Eb: { type: "flat", count: 3, names: ["Bb", "Eb", "Ab"] },
    Ab: { type: "flat", count: 4, names: ["Bb", "Eb", "Ab", "Db"] },
  },
  minor: {
    C: { type: "flat", count: 3, names: ["Bb", "Eb", "Ab"] },
    G: { type: "flat", count: 2, names: ["Bb", "Eb"] },
    D: { type: "flat", count: 1, names: ["Bb"] },
    A: { type: "none", count: 0, names: [] },
    E: { type: "sharp", count: 1, names: ["F#"] },
    B: { type: "sharp", count: 2, names: ["F#", "C#"] },
    "F#": { type: "sharp", count: 3, names: ["F#", "C#", "G#"] },
    F: { type: "flat", count: 4, names: ["Bb", "Eb", "Ab", "Db"] },
    Bb: { type: "flat", count: 5, names: ["Bb", "Eb", "Ab", "Db", "Gb"] },
    Eb: { type: "flat", count: 6, names: ["Bb", "Eb", "Ab", "Db", "Gb", "Cb"] },
    Ab: { type: "flat", count: 7, names: ["Bb", "Eb", "Ab", "Db", "Gb", "Cb", "Fb"] },
  },
};

SIGNATURES.harmonicMinor = SIGNATURES.minor;

const STRINGS = [
  { name: "G", pc: 7, midi: 55 },
  { name: "D", pc: 2, midi: 62 },
  { name: "A", pc: 9, midi: 69 },
  { name: "E", pc: 4, midi: 76 },
];

const CHROMATIC_SHARP = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const CHROMATIC_FLAT = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
const NOTE_LETTERS = ["C", "D", "E", "F", "G", "A", "B"];

const SEMITONE_LABELS = [
  { finger: "空弦", type: "normal" },
  { finger: "低 1", type: "low" },
  { finger: "1", type: "normal" },
  { finger: "低 2", type: "low" },
  { finger: "2", type: "normal" },
  { finger: "3", type: "normal" },
  { finger: "高 3", type: "high" },
  { finger: "4", type: "normal" },
];

const STAFF_POSITIONS = {
  sharp: [42, 66, 30, 54, 78, 102, 66],
  flat: [74, 50, 82, 58, 90, 66, 98],
};

const tonicSelect = document.querySelector("#tonicSelect");
const modeSelect = document.querySelector("#modeSelect");
const stringFocus = document.querySelector("#stringFocus");
const showOnlyScale = document.querySelector("#showOnlyScale");
const keyName = document.querySelector("#keyName");
const signatureText = document.querySelector("#signatureText");
const scaleText = document.querySelector("#scaleText");
const signatureTitle = document.querySelector("#signatureTitle");
const staffSignature = document.querySelector("#staffSignature");
const boardTitle = document.querySelector("#boardTitle");
const fingerboard = document.querySelector("#fingerboard");
const prevKey = document.querySelector("#prevKey");
const nextKey = document.querySelector("#nextKey");
const playScaleButton = document.querySelector("#playScale");
const playStringsButton = document.querySelector("#playStrings");
const toneBrightness = document.querySelector("#toneBrightness");
const nowPlaying = document.querySelector("#nowPlaying");
const soundWave = document.querySelector("#soundWave");

let audioContext = null;
let activeTimers = [];
let audioUnlocked = false;

function init() {
  TONICS.forEach((tonic) => {
    const option = document.createElement("option");
    option.value = tonic.label;
    option.textContent = tonic.label;
    tonicSelect.append(option);
  });

  tonicSelect.value = "D";
  renderWave();
  render();
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  if (!["http:", "https:"].includes(window.location.protocol)) return;

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      console.info("Service worker registration skipped.");
    });
  });
}

function currentKey() {
  const tonic = TONICS.find((item) => item.label === tonicSelect.value);
  return {
    tonic,
    mode: MODES[modeSelect.value],
    modeKey: modeSelect.value,
  };
}

function normalizePc(pc) {
  return ((pc % 12) + 12) % 12;
}

function useFlats(tonicLabel, modeKey) {
  if (["F", "Bb", "Eb", "Ab"].includes(tonicLabel)) return true;
  if (modeKey !== "major" && ["C", "G", "D", "F", "Bb", "Eb", "Ab"].includes(tonicLabel)) return true;
  return false;
}

function noteName(pc, flat = false) {
  return (flat ? CHROMATIC_FLAT : CHROMATIC_SHARP)[normalizePc(pc)];
}

function noteToPc(note) {
  const base = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 }[note[0]];
  const accidentals = note.slice(1).split("").reduce((sum, char) => {
    if (char === "#") return sum + 1;
    if (char === "b") return sum - 1;
    return sum;
  }, 0);
  return normalizePc(base + accidentals);
}

function spelledScale(tonicLabel, pcs, flat) {
  const tonicLetter = tonicLabel[0];
  const startIndex = NOTE_LETTERS.indexOf(tonicLetter);
  const letters = Array.from({ length: 7 }, (_, index) => NOTE_LETTERS[(startIndex + index) % 7]);

  return pcs.map((pc, index) => {
    const letter = letters[index];
    const candidates = [letter, `${letter}#`, `${letter}b`, `${letter}##`, `${letter}bb`];
    const matched = candidates.find((candidate) => noteToPc(candidate) === pc);
    return matched || noteName(pc, flat);
  });
}

function getScale() {
  const { tonic, mode, modeKey } = currentKey();
  const pcs = mode.intervals.map((interval) => normalizePc(tonic.pc + interval));
  const flat = useFlats(tonic.label, modeKey);
  return {
    pcs,
    names: spelledScale(tonic.label, pcs, flat),
    flat,
  };
}

function getSignature() {
  const { tonic, modeKey } = currentKey();
  return SIGNATURES[modeKey][tonic.label];
}

function render() {
  const { tonic, mode, modeKey } = currentKey();
  const scale = getScale();

  keyName.textContent = `${tonic.label} ${mode.label}`;
  signatureText.textContent = mode.signatures[tonic.label];
  scaleText.textContent = `${scale.names.join(" - ")} - ${scale.names[0]}`;
  signatureTitle.textContent = `${tonic.label} ${mode.label} · ${signatureText.textContent}`;
  boardTitle.textContent = `${tonic.label} ${mode.label} · 第一把位`;

  renderSignature(modeKey);
  renderFingerboard(scale);
}

function renderSignature(modeKey) {
  const signature = getSignature();
  const symbol = signature.type === "flat" ? "♭" : "♯";
  const yPositions = STAFF_POSITIONS[signature.type] || [];
  const accidentals = signature.names
    .map((name, index) => {
      const x = 126 + index * 24;
      const y = yPositions[index];
      return `
        <text x="${x}" y="${y}" class="signature-symbol">${symbol}</text>
        <text x="${x + 2}" y="138" class="signature-name">${name}</text>
      `;
    })
    .join("");
  const helper =
    modeKey === "harmonicMinor"
      ? `<text x="298" y="37" class="signature-helper">和声小调第 7 音临时升高</text>`
      : "";
  const empty = signature.count === 0 ? `<text x="128" y="83" class="signature-empty">无升降号</text>` : "";

  staffSignature.innerHTML = `
    <svg viewBox="0 0 520 160" aria-hidden="true">
      <rect x="1" y="1" width="518" height="158" rx="8" class="staff-bg"></rect>
      <g class="staff-lines">
        <line x1="28" y1="42" x2="492" y2="42"></line>
        <line x1="28" y1="58" x2="492" y2="58"></line>
        <line x1="28" y1="74" x2="492" y2="74"></line>
        <line x1="28" y1="90" x2="492" y2="90"></line>
        <line x1="28" y1="106" x2="492" y2="106"></line>
      </g>
      <text x="44" y="105" class="treble-clef">𝄞</text>
      ${accidentals}
      ${empty}
      ${helper}
    </svg>
  `;
}

function renderFingerboard(scale) {
  const focused = stringFocus.value;
  const visibleStrings = focused === "all" ? STRINGS : STRINGS.filter((item) => item.name === focused);
  const scaleSet = new Set(scale.pcs);

  fingerboard.innerHTML = "";
  fingerboard.className = `fingerboard vertical-board strings-${visibleStrings.length}`;

  const nutLine = document.createElement("div");
  nutLine.className = "nut-line";
  fingerboard.append(nutLine);

  const labelRow = document.createElement("div");
  labelRow.className = "position-labels";
  labelRow.innerHTML = "<span>把位</span>" + visibleStrings.map((item) => `<span>${item.name} 弦</span>`).join("");
  fingerboard.append(labelRow);

  const stringRails = document.createElement("div");
  stringRails.className = "vertical-strings";
  visibleStrings.forEach((stringInfo) => {
    const line = document.createElement("div");
    line.className = "string-line";
    line.dataset.string = stringInfo.name;
    stringRails.append(line);
  });
  fingerboard.append(stringRails);

  SEMITONE_LABELS.forEach((fingerInfo, semitone) => {
    const row = document.createElement("div");
    row.className = "string-row";

    const positionName = document.createElement("div");
    positionName.className = "string-name";
    positionName.textContent = fingerInfo.finger;
    row.append(positionName);

    visibleStrings.forEach((stringInfo) => {
      const pc = normalizePc(stringInfo.pc + semitone);
      const midi = stringInfo.midi + semitone;
      const scaleName = scale.names[scale.pcs.indexOf(pc)];
      const physicalName = noteName(pc, scale.flat);
      const enharmonicHint = scaleName && scaleName !== physicalName ? `<span class="enharmonic">${physicalName} 位</span>` : "";
      const cell = document.createElement("div");
      const marker = document.createElement("button");
      const isScaleTone = scaleSet.has(pc);

      cell.className = "note-cell";
      marker.type = "button";
      marker.className = `note-marker ${fingerInfo.type}${showOnlyScale.checked && !isScaleTone ? " dimmed" : ""}`;
      marker.dataset.midi = String(midi);
      marker.dataset.note = scaleName || physicalName;
      marker.dataset.finger = fingerInfo.finger;
      marker.dataset.string = stringInfo.name;
      marker.innerHTML = `
        <span class="note-name">${scaleName || physicalName}</span>
        <span class="finger-name">${fingerInfo.finger}</span>
        ${enharmonicHint}
      `;
      marker.title = `${stringInfo.name} 弦：${scaleName || physicalName}，${fingerInfo.finger}`;
      marker.addEventListener("click", () => {
        playTone(midi, 0.9, 0, `${stringInfo.name} 弦 ${scaleName || physicalName} · ${fingerInfo.finger}`);
        pulseMarker(marker, 900);
      });

      cell.append(marker);
      row.append(cell);
    });

    fingerboard.append(row);
  });
}

function ensureAudio() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!audioContext) audioContext = new AudioContext();
  if (audioContext.state === "suspended") audioContext.resume();
  return audioContext;
}

function unlockAudio() {
  if (audioUnlocked) return;
  const context = ensureAudio();
  const gain = context.createGain();
  const oscillator = context.createOscillator();

  gain.gain.setValueAtTime(0.0001, context.currentTime);
  oscillator.frequency.setValueAtTime(440, context.currentTime);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + 0.03);
  audioUnlocked = true;
  setNowPlaying("声音已开启");
}

function midiToFrequency(midi) {
  return 440 * 2 ** ((midi - 69) / 12);
}

function playTone(midi, duration = 0.75, delay = 0, label = "") {
  const context = ensureAudio();
  const start = context.currentTime + delay;
  const end = start + duration;
  const brightness = Number(toneBrightness.value) / 100;

  const main = context.createOscillator();
  const support = context.createOscillator();
  const vibrato = context.createOscillator();
  const vibratoGain = context.createGain();
  const filter = context.createBiquadFilter();
  const gain = context.createGain();

  main.type = "sawtooth";
  support.type = "triangle";
  main.frequency.setValueAtTime(midiToFrequency(midi), start);
  support.frequency.setValueAtTime(midiToFrequency(midi), start);
  vibrato.frequency.setValueAtTime(5.8, start);
  vibratoGain.gain.setValueAtTime(2.5 + brightness * 3.5, start);
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(900 + brightness * 2600, start);
  filter.Q.setValueAtTime(2.1, start);

  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(0.18, start + 0.05);
  gain.gain.setValueAtTime(0.16, end - 0.12);
  gain.gain.exponentialRampToValueAtTime(0.0001, end);

  vibrato.connect(vibratoGain);
  vibratoGain.connect(main.frequency);
  vibratoGain.connect(support.frequency);
  main.connect(filter);
  support.connect(filter);
  filter.connect(gain);
  gain.connect(context.destination);

  main.start(start);
  support.start(start);
  vibrato.start(start);
  main.stop(end + 0.02);
  support.stop(end + 0.02);
  vibrato.stop(end + 0.02);

  if (label) {
    window.setTimeout(() => setNowPlaying(label), delay * 1000);
    window.setTimeout(() => setNowPlaying("点击音点试听"), (delay + duration + 0.2) * 1000);
  }
  pulseWave(delay, duration);
}

function stopTimers() {
  activeTimers.forEach((timer) => window.clearTimeout(timer));
  activeTimers = [];
}

function nearestMidiForPc(pc) {
  let midi = 60 + normalizePc(pc);
  while (midi < 55) midi += 12;
  while (midi > 72) midi -= 12;
  return midi;
}

function playCurrentScale() {
  stopTimers();
  const scale = getScale();
  const baseMidi = nearestMidiForPc(scale.pcs[0]);
  let previousMidi = baseMidi - 1;
  const notes = [...scale.pcs, scale.pcs[0]].map((pc, index) => {
    let midi = nearestMidiForPc(pc);
    if (index === 7) midi = baseMidi + 12;
    while (midi <= previousMidi) midi += 12;
    previousMidi = midi;
    return midi;
  });

  playScaleButton.textContent = "播放中";
  notes.forEach((midi, index) => {
    const name = scale.names[index % scale.names.length];
    playTone(midi, 0.62, index * 0.5, name);
  });
  activeTimers.push(window.setTimeout(() => {
    playScaleButton.textContent = "播放音阶";
    setNowPlaying("点击音点试听");
  }, notes.length * 520 + 250));
}

function playOpenStrings() {
  stopTimers();
  playStringsButton.textContent = "定位中";
  STRINGS.forEach((stringInfo, index) => {
    playTone(stringInfo.midi, 0.75, index * 0.58, `${stringInfo.name} 空弦`);
  });
  activeTimers.push(window.setTimeout(() => {
    playStringsButton.textContent = "四弦定位";
    setNowPlaying("点击音点试听");
  }, STRINGS.length * 620 + 220));
}

function setNowPlaying(text) {
  nowPlaying.textContent = text;
}

function renderWave() {
  soundWave.innerHTML = Array.from({ length: 18 }, (_, index) => {
    const height = 18 + ((index * 17) % 38);
    return `<span style="height:${height}px"></span>`;
  }).join("");
}

function pulseWave(delay, duration) {
  const startTimer = window.setTimeout(() => soundWave.classList.add("active"), delay * 1000);
  const endTimer = window.setTimeout(() => soundWave.classList.remove("active"), (delay + duration) * 1000);
  activeTimers.push(startTimer, endTimer);
}

function pulseMarker(marker, duration) {
  marker.classList.add("playing");
  window.setTimeout(() => marker.classList.remove("playing"), duration);
}

function changeKey(step) {
  const index = TONICS.findIndex((item) => item.label === tonicSelect.value);
  const nextIndex = (index + step + TONICS.length) % TONICS.length;
  tonicSelect.value = TONICS[nextIndex].label;
  render();
}

[tonicSelect, modeSelect, stringFocus, showOnlyScale].forEach((control) => {
  control.addEventListener("change", render);
});

prevKey.addEventListener("click", () => changeKey(-1));
nextKey.addEventListener("click", () => changeKey(1));
playScaleButton.addEventListener("click", playCurrentScale);
playStringsButton.addEventListener("click", playOpenStrings);
document.addEventListener("pointerdown", unlockAudio, { once: true });

init();
registerServiceWorker();
