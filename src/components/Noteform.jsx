import React, { useContext, useState, useEffect } from 'react';
import { NoteContext } from '../context/NoteContext';
import { useNavigate } from 'react-router-dom';
import { X, Plus, CheckCircle2, Sparkles } from 'lucide-react';

function Noteform() {
  const { createNote } = useContext(NoteContext);
  const navigate = useNavigate();

  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const [noteAdded, setNoteAdded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!note.title.trim() || !note.content.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      createNote(note);
      setNote({ title: '', content: '' });
      setIsSubmitting(false);
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
        setNoteAdded(true);
      }, 1200);
    }, 500);
  };

  useEffect(() => {
    if (noteAdded) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [noteAdded, navigate]);

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-[calc(100vh-140px)] flex items-center justify-center p-6 py-12 mt-40">
      {/* Success Overlay Animation */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-gray-900/90 backdrop-blur-xl border border-green-500/50 rounded-2xl p-8 shadow-2xl shadow-green-500/20 animate-scale-in">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-green-500 blur-2xl opacity-50 animate-pulse"></div>
                <CheckCircle2 className="relative w-16 h-16 text-green-400 animate-bounce-slow" />
              </div>
              <p className="text-xl font-semibold text-white">Note Created Successfully!</p>
            </div>
          </div>
        </div>
      )}

      {/* Form Container */}
      <div className="w-full max-w-2xl">
        {/* Glassmorphic Card */}
        <div className="relative bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl shadow-blue-500/10 overflow-hidden">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl"></div>

          {/* Animated Background Shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

          {/* Close Button */}
          <button
            onClick={goHome}
            className="absolute top-6 right-6 z-10 group p-2 bg-gray-800/50 hover:bg-red-500/20 border border-gray-700/50 hover:border-red-500/50 rounded-xl text-gray-400 hover:text-red-400 transition-all duration-300 hover:rotate-90 hover:scale-110"
            aria-label="Close form and go home"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Content */}
          <div className="relative p-8 md:p-10">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-30 animate-pulse"></div>
                  
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                Create a New Note
              </h2>
              <p className="text-gray-400 text-sm">
                Capture your thoughts and ideas in one place
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Title Input with Floating Label */}
              <div className="relative group">
                <input
                  type="text"
                  id="title"
                  className="peer w-full px-5 py-3.5 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all duration-300"
                  placeholder="Note title"
                  value={note.title}
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                  required
                />
                <label
                  htmlFor="title"
                  className="absolute left-5 -top-2.5 px-2 bg-gray-900/90 text-blue-400 text-sm font-medium transition-all duration-300 
                             peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent
                             peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-400 peer-focus:bg-gray-900/90"
                >
                  Note Title
                </label>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 group-focus-within:w-full transition-all duration-500"></div>
              </div>

              {/* Content Textarea with Floating Label */}
              <div className="relative group">
                <textarea
                  id="content"
                  className="peer w-full px-5 py-3.5 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all duration-300 resize-none"
                  placeholder="Write your note"
                  rows="6"
                  value={note.content}
                  onChange={(e) => setNote({ ...note, content: e.target.value })}
                  required
                />
                <label
                  htmlFor="content"
                  className="absolute left-5 -top-2.5 px-2 bg-gray-900/90 text-blue-400 text-sm font-medium transition-all duration-300 
                             peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent
                             peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-400 peer-focus:bg-gray-900/90"
                >
                  Note Content
                </label>
                <div className="absolute bottom-3 right-4 text-xs text-gray-500">
                  {note.content.length} characters
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !note.title.trim() || !note.content.trim()}
                className="group relative w-full py-3.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 overflow-hidden"
              >
                <span className="relative flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Creating Note...</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                      <span>Create Note</span>
                    </>
                  )}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
              </button>

              {/* Helper Text */}
              <p className="text-center text-xs text-gray-500">
                Press <kbd className="px-2 py-1 bg-gray-800 border border-gray-700 rounded text-gray-400">Enter</kbd> to submit
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Noteform;
