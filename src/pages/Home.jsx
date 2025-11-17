import React, { useContext } from 'react';
import { NoteContext } from '../context/NoteContext';
import Notecard from '../components/Notecard';
import { BookOpen, Plus, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  const { notes, loading } = useContext(NoteContext);

  // Modern Loading State
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen gap-6">
        {/* Animated Spinner Container */}
        <div className="relative">
          {/* Outer Glow Ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 blur-2xl opacity-30 animate-pulse"></div>
          
          {/* Spinning Ring */}
          <div className="relative w-20 h-20 rounded-full border-4 border-gray-800/20 border-t-blue-500 border-r-cyan-500 animate-spin"></div>
          
          {/* Center Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-blue-400 animate-pulse" />
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-2">
          <p className="text-lg font-semibold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Loading your notes
          </p>
          <p className="text-sm text-gray-500">This won't take long...</p>
        </div>
      </div>
    );
  }

  // Modern Empty State
  if (notes.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen p-6">
        <div className="max-w-md w-full">
          {/* Glassmorphic Card */}
          <div className="relative bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl shadow-blue-500/10 p-12">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent rounded-3xl"></div>
            
            {/* Content */}
            <div className="relative text-center space-y-6">
              {/* Animated Icon */}
              <div className="flex justify-center">
                <div className="relative">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 animate-pulse"></div>
                  
                  {/* Icon Container */}
                  <div className="relative bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-6 rounded-2xl border border-blue-500/30">
                    <BookOpen className="w-16 h-16 text-blue-400" strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-white">
                  No Notes Yet
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  Your notebook is empty. Start capturing your thoughts, ideas, and important information by creating your first note.
                </p>
              </div>

              {/* Call to Action Button */}
              <Link
                to="/create"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105 transition-all duration-300"
              >
                <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                <span>Create Your First Note</span>
                
                {/* Shine Effect */}
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
              </Link>

              {/* Helper Text */}
              <p className="text-xs text-gray-500 pt-4">
                Organize your thoughts • Boost productivity • Stay creative
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Notes Grid with Animations
  return (
    <div className="container mx-auto px-6 py-12 mt-20">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
          Your Notes
        </h1>
        <p className="text-gray-400">
          {notes.length} {notes.length === 1 ? 'note' : 'notes'} in your collection
        </p>
      </div>

      {/* Responsive Grid with Stagger Animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {notes.map((note, index) => (
          <div
            key={note._id}
            className="animate-fade-in-up"
            style={{
              animationDelay: `${index * 50}ms`,
              animationFillMode: 'both'
            }}
          >
            <Notecard note={note} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
