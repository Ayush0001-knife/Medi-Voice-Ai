import { useState, useEffect, useRef, useCallback } from "react";
import "../styles/LiveConsultation.css";
import LANGUAGES from "../data/Live-Consultation/languages";
import INITIAL_TRANSCRIPT from "../data/Live-Consultation/initial-transcript";
import AI_RESPONSES from "../data/Live-Consultation/ai-responses";
import Background from "../components/Live-Consultation.jsx/Background";
import Navbar from "../components/Live-Consultation.jsx/Navbar";
import LeftPanel from "../components/Live-Consultation.jsx/LeftPanel";
import RightPanel from "../components/Live-Consultation.jsx/RightPanel";
import EndSessionModal from "../components/Live-Consultation.jsx/EndSessionModal";

const fmtTime = (s) =>
  `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

/* ─────────────── LIVE CONSULTATION PAGE ─────────────── */
export default function LiveConsultation({ initialLang = "en", doctor }) {
  const doc = doctor ?? {
    name: "Dr. James Carter",
    spec: "General Physician",
    emoji: "👨‍⚕️",
  };
  const [lang, setLang] = useState(initialLang);
  const [micOn, setMicOn] = useState(false);
  const [muted, setMuted] = useState(false);
  const [speakerOff, setSpeakerOff] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | user-speaking | ai-speaking | thinking
  const [transcript, setTranscript] = useState(INITIAL_TRANSCRIPT);
  const [spokenText, setSpokenText] = useState(
    "Press and hold the mic to speak",
  );
  const [elapsed, setElapsed] = useState(82); // session started 1:22 ago
  const [endModal, setEndModal] = useState(false);
  const [toast, setToast] = useState(null);
  const [aiResponseIdx, setAiRespIdx] = useState(0);

  const listRef = useRef(null);
  const timerRef = useRef(null);
  const aiTimeout = useRef(null);

  /* session timer */
  useEffect(() => {
    timerRef.current = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(timerRef.current);
  }, []);

  /* auto-scroll transcript */
  useEffect(() => {
    if (listRef.current)
      listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [transcript]);

  /* ── AI responds after user finishes speaking ── */
  const triggerAIResponse = useCallback(() => {
    setStatus("thinking");
    setSpokenText("Dr. Carter's AI is thinking…");
    addTranscript("user", "Thank you, I'll make note of that.");

    aiTimeout.current = setTimeout(() => {
      setStatus("ai-speaking");
      const pool = AI_RESPONSES[lang] ?? AI_RESPONSES.en;
      const reply = pool[aiResponseIdx % pool.length];
      setAiRespIdx((i) => i + 1);
      setSpokenText(reply);

      setTimeout(() => {
        addTranscript("ai", reply);
        setStatus("idle");
        setSpokenText("Your turn — press and hold the mic to speak");
      }, reply.length * 42);
    }, 1400);
  }, [lang, aiResponseIdx]);

  const addTranscript = (speaker, text) => {
    const now = new Date();
    const t = `${Math.floor(elapsed / 60)}:${String(elapsed % 60).padStart(2, "0")}`;
    setTranscript((prev) => [...prev, { speaker, text, time: t }]);
  };

  /* mic press-hold */
  const onMicDown = () => {
    if (muted) {
      showToast("Microphone is muted");
      return;
    }
    clearTimeout(aiTimeout.current);
    setMicOn(true);
    setStatus("user-speaking");
    setSpokenText("Listening… speak clearly");
  };

  const onMicUp = () => {
    if (!micOn) return;
    setMicOn(false);
    triggerAIResponse();
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2600);
  };

  /* waveform bars */
  const BAR_COUNT = 40;
  const wfBars = Array.from({ length: BAR_COUNT });

  const barClass =
    status === "ai-speaking"
      ? "ai-wave"
      : status === "user-speaking"
        ? "user-wave"
        : "idle";

  const langObj = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  return (
    <>
      <div className="live-consultation-page">
        {/* background */}
        <Background />
        <div className="grid-overlay" />

        <div className="consult-root">
          {/* ── TOP BAR ── */}
          <Navbar
            doc={doc}
            lang={lang}
            setLang={setLang}
            elapsed={elapsed}
            setEndModal={setEndModal}
            showToast={showToast}
            fmtTime={fmtTime}
          />
          {/* ── LEFT: HISTORY PANEL ── */}
          <LeftPanel
            doc={doc}
            langObj={langObj}
            transcript={transcript}
            status={status}
            time={elapsed}
            listRef={listRef}
          />
          {/* ── RIGHT: MAIN STAGE ── */}
          <RightPanel
            doc={doc}
            langObj={langObj}
            status={status}
            spokenText={spokenText}
            wfBars={wfBars}
            barClass={barClass}
            muted={muted}
            speakerOff={speakerOff}
            micOn={micOn}
            onMicDown={onMicDown}
            onMicUp={onMicUp}
            setSpeakerOff={setSpeakerOff}
            showToast={showToast}
            setMuted={setMuted}
          />
        </div>

        {/* ── END SESSION MODAL ── */}
        {endModal && (
          <EndSessionModal
            endModal={endModal}
            setEndModal={setEndModal}
            elapsed={elapsed}
            transcript={transcript}
            fmtTime={fmtTime}
            showToast={showToast}
          />
        )}

        {toast && <div className="toast">{toast}</div>}
      </div>
    </>
  );
}
