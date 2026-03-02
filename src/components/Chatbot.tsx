import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Message = {
  id: number;
  role: 'bot' | 'user';
  text: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: 'bot', text: 'Herzlich willkommen. Wie darf ich Ihnen bei der Verwirklichung Ihres Traumgartens behilflich sein?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now(), role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Responsive logic
    setTimeout(() => {
      let botResponse = "Gerne berate ich Sie dazu detaillierter. Bitte hinterlassen Sie uns eine Nachricht über das Kontaktformular oder rufen Sie uns an.";
      const lowerInput = userMessage.text.toLowerCase();

      if (lowerInput.includes('kosten') || lowerInput.includes('preis') || lowerInput.includes('teuer')) {
        botResponse = "Die Kosten hängen stark von der Größe und den gewünschten Materialien ab. Nach einem ersten unverbindlichen Gespräch können wir Ihnen eine grobe Preisspanne nennen.";
      } else if (lowerInput.includes('3d') || lowerInput.includes('planung')) {
        botResponse = "Mit unserer digitalen 3D-Manufaktur können Sie Ihren zukünftigen Garten virtuell durchschreiten, noch bevor wir mit der Arbeit beginnen. So stellen wir sicher, dass jedes Detail Ihren Vorstellungen entspricht.";
      } else if (lowerInput.includes('dauer') || lowerInput.includes('lange') || lowerInput.includes('zeit')) {
        botResponse = "Die Dauer eines Projekts variiert je nach Umfang. Eine typische Umgestaltung dauert zwischen 2 und 6 Wochen. Wir legen großen Wert auf Termintreue.";
      } else if (lowerInput.includes('kontakt') || lowerInput.includes('telefon') || lowerInput.includes('anruf')) {
        botResponse = "Sie erreichen uns telefonisch unter +49 30 123 456 789 oder per E-Mail an info@galabau-berlin.de. Wir freuen uns auf Sie!";
      } else if (lowerInput.includes('hallo') || lowerInput.includes('guten tag') || lowerInput.includes('hi')) {
        botResponse = "Hallo! Wie kann ich Ihnen rund um das Thema Gartengestaltung und Landschaftsbau weiterhelfen?";
      }

      setMessages(prev => [...prev, { id: Date.now(), role: 'bot', text: botResponse }]);
    }, 1000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Chat öffnen"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-forest text-cream rounded-full shadow-2xl flex items-center justify-center hover:bg-bronze transition-colors duration-300"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-28 right-8 z-50 w-80 md:w-96 bg-cream rounded-3xl shadow-2xl overflow-hidden border border-forest/10 flex flex-col"
          >
            <div className="bg-forest p-6 text-cream flex justify-between items-center shrink-0">
              <div>
                <h3 className="font-serif text-xl">Garten-Berater</h3>
                <p className="text-xs font-sans opacity-70 uppercase tracking-wider mt-1">Immer für Sie da</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-cream/70 hover:text-cream">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-80 p-6 bg-sand/30 overflow-y-auto flex flex-col gap-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`p-4 rounded-2xl shadow-sm text-sm font-sans w-4/5 ${msg.role === 'bot'
                      ? 'bg-white text-forest/80 rounded-tl-none self-start'
                      : 'bg-bronze text-cream rounded-tr-none self-end'
                    }`}
                >
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-white border-t border-forest/5 flex items-center gap-2 shrink-0">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ihre Nachricht..."
                className="flex-1 bg-sand/20 border-none rounded-full px-4 py-3 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-bronze"
              />
              <button
                onClick={handleSend}
                className="w-10 h-10 bg-bronze text-cream rounded-full flex items-center justify-center hover:bg-forest transition-colors shrink-0"
              >
                <Send className="w-4 h-4 ml-1" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
