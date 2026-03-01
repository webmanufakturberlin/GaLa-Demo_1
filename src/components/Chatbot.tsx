import { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
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
            className="fixed bottom-28 right-8 z-50 w-80 md:w-96 bg-cream rounded-3xl shadow-2xl overflow-hidden border border-forest/10"
          >
            <div className="bg-forest p-6 text-cream flex justify-between items-center">
              <div>
                <h3 className="font-serif text-xl">Garten-Berater</h3>
                <p className="text-xs font-sans opacity-70 uppercase tracking-wider mt-1">Immer für Sie da</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-cream/70 hover:text-cream">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="h-80 p-6 bg-sand/30 overflow-y-auto flex flex-col gap-4">
              <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-sm font-sans text-forest/80 w-4/5">
                Herzlich willkommen. Wie darf ich Ihnen bei der Verwirklichung Ihres Traumgartens behilflich sein?
              </div>
            </div>
            
            <div className="p-4 bg-white border-t border-forest/5 flex items-center gap-2">
              <input 
                type="text" 
                placeholder="Ihre Nachricht..." 
                className="flex-1 bg-sand/20 border-none rounded-full px-4 py-3 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-bronze"
              />
              <button className="w-10 h-10 bg-bronze text-cream rounded-full flex items-center justify-center hover:bg-forest transition-colors">
                <Send className="w-4 h-4 ml-1" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
