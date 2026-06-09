import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, ArrowRight } from "lucide-react";

type Message = {
  from: "bot" | "user";
  text: string;
};

const STEPS = [
  "start",
  "name",
  "project",
  "details",
  "done",
] as const;
type Step = (typeof STEPS)[number];

const BOT_INTRO: Message = {
  from: "bot",
  text: "Hi there! 👋 I'm JB's project assistant. I'll help connect you with Jitesh in seconds. What's your name?",
};

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2">
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center text-white shrink-0 text-xs font-bold"
        style={{ background: "linear-gradient(135deg,#6366f1,#4f46e5)" }}
      >
        JB
      </div>
      <div
        className="px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center"
        style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.2)" }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
}

function BotBubble({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="flex items-end gap-2"
    >
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center text-white shrink-0 text-xs font-bold"
        style={{ background: "linear-gradient(135deg,#6366f1,#4f46e5)" }}
      >
        JB
      </div>
      <div
        className="px-4 py-3 rounded-2xl rounded-bl-sm text-sm leading-relaxed max-w-[85%]"
        style={{
          background: "rgba(99,102,241,0.12)",
          border: "1px solid rgba(99,102,241,0.2)",
          color: "hsl(var(--foreground))",
        }}
      >
        {text}
      </div>
    </motion.div>
  );
}

function UserBubble({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="flex justify-end"
    >
      <div
        className="px-4 py-3 rounded-2xl rounded-br-sm text-sm leading-relaxed max-w-[85%]"
        style={{
          background: "linear-gradient(135deg,#6366f1,#4f46e5)",
          color: "#fff",
        }}
      >
        {text}
      </div>
    </motion.div>
  );
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("name");
  const [messages, setMessages] = useState<Message[]>([BOT_INTRO]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [userData, setUserData] = useState({ name: "", project: "", details: "" });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasOpened, setHasOpened] = useState(false);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
      if (!hasOpened) setHasOpened(true);
    }
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const addBotMessage = (text: string, delay = 800) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { from: "bot", text }]);
    }, delay);
  };

  const handleSend = () => {
    const val = input.trim();
    if (!val || step === "done") return;
    setInput("");
    setMessages((prev) => [...prev, { from: "user", text: val }]);

    if (step === "name") {
      const name = val;
      setUserData((d) => ({ ...d, name }));
      setStep("project");
      addBotMessage(
        `Great to meet you, ${name}! 🚀 What are you looking to build? (e.g. mobile app, web platform, dashboard, automation tool…)`,
        900
      );
    } else if (step === "project") {
      setUserData((d) => ({ ...d, project: val }));
      setStep("details");
      addBotMessage(
        "Sounds interesting! Any extra details — timeline, key features, budget range, or anything Jitesh should know before you connect?",
        950
      );
    } else if (step === "details") {
      const details = val;
      setUserData((d) => ({ ...d, details }));
      setStep("done");
      addBotMessage(
        `Perfect! I've got everything. Click below to send this directly to Jitesh on WhatsApp — he typically replies within a few hours. 💬`,
        1000
      );
    }
  };

  const buildWhatsAppUrl = () => {
    const msg = encodeURIComponent(
      `Hi Jitesh! I found you through your portfolio.\n\nName: ${userData.name}\nProject: ${userData.project}\nDetails: ${userData.details}\n\nLooking forward to connecting! 🚀`
    );
    return `https://wa.me/919165759300?text=${msg}`;
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <AnimatePresence>
          {!open && !hasOpened && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ delay: 2.5, duration: 0.4 }}
              className="px-4 py-2.5 rounded-full text-sm font-medium text-white shadow-lg pointer-events-none whitespace-nowrap"
              style={{
                background: "rgba(10,10,15,0.9)",
                border: "1px solid rgba(99,102,241,0.4)",
                backdropFilter: "blur(12px)",
              }}
            >
              Have a project in mind? 💡
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen((o) => !o)}
          className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl relative"
          style={{
            background: "linear-gradient(135deg, #6366f1, #4f46e5)",
            boxShadow: "0 0 0 0 rgba(99,102,241,0.5)",
          }}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X size={22} />
              </motion.span>
            ) : (
              <motion.span key="s" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Sparkles size={22} />
              </motion.span>
            )}
          </AnimatePresence>
          {!open && (
            <span
              className="absolute inset-0 rounded-full animate-ping opacity-30"
              style={{ background: "#6366f1" }}
            />
          )}
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            style={{
              background: "hsl(var(--background))",
              border: "1px solid rgba(99,102,241,0.25)",
              height: 480,
              boxShadow: "0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(99,102,241,0.15)",
            }}
          >
            {/* Header */}
            <div
              className="px-5 py-4 flex items-center gap-3 shrink-0"
              style={{
                background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(79,70,229,0.08))",
                borderBottom: "1px solid rgba(99,102,241,0.15)",
              }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                style={{ background: "linear-gradient(135deg,#6366f1,#4f46e5)" }}
              >
                JB
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm text-foreground">JB's Project Assistant</div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-muted-foreground">Online · replies fast</span>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-7 h-7 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
              >
                <X size={15} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-0">
              {messages.map((m, i) =>
                m.from === "bot" ? (
                  <BotBubble key={i} text={m.text} />
                ) : (
                  <UserBubble key={i} text={m.text} />
                )
              )}
              {typing && <TypingIndicator />}

              {step === "done" && !typing && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="pt-2"
                >
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2.5 w-full py-3.5 px-5 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: "linear-gradient(135deg, #16a34a, #15803d)",
                      boxShadow: "0 4px 20px rgba(22,163,74,0.35)",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Send to Jitesh on WhatsApp
                    <ArrowRight size={16} />
                  </a>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            {step !== "done" && (
              <div
                className="px-4 py-3 shrink-0"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                  className="flex gap-2 items-center"
                >
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={
                      step === "name"
                        ? "Your name…"
                        : step === "project"
                        ? "What you want to build…"
                        : "Timeline, features, budget…"
                    }
                    className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none py-2 px-1"
                    autoComplete="off"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim()}
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-white transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-90"
                    style={{ background: "linear-gradient(135deg,#6366f1,#4f46e5)" }}
                  >
                    <Send size={15} />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
