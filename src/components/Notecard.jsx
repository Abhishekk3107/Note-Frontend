import React, { useContext, useState } from 'react';
import { NoteContext } from '../context/NoteContext';
import { Edit3, Trash2, Check, X, Calendar, Sparkles } from 'lucide-react';

function Notecard({ note }) {
  const { deleteNote, updateNote } = useContext(NoteContext);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [editData, setEditData] = useState({
    title: note.title,
    content: note.content,
  });

  const handleUpdate = () => {
    updateNote(note._id, editData);
    setIsEditing(false);
  };

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      deleteNote(note._id);
    }, 300);
  };

  return (
    <div
      className={`group relative transition-all duration-300 ${
        isDeleting ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
      }`}
    >
      {/* Glassmorphic Card */}
      <div className="relative bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg shadow-blue-500/5 hover:shadow-blue-500/20 hover:border-blue-500/30 transition-all duration-500 overflow-hidden">
        {/* Gradient Overlay - Animated on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-cyan-500/10 transition-all duration-500 rounded-2xl"></div>

        {/* Top Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Sparkle Icon - Appears on Hover */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-12">
          <Sparkles className="w-5 h-5 text-blue-400" />
        </div>

        {/* Content Container */}
        <div className="relative p-6 flex flex-col h-full min-h-[250px]">
          {isEditing ? (
            <>
              {/* Edit Mode */}
              <div className="space-y-4 flex-1">
                {/* Title Input */}
                <div className="relative">
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all duration-300"
                    placeholder="Note title..."
                    value={editData.title}
                    onChange={(e) =>
                      setEditData({ ...editData, title: e.target.value })
                    }
                  />
                </div>

                {/* Content Textarea */}
                <div className="relative flex-1">
                  <textarea
                    className="w-full h-32 px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all duration-300 resize-none"
                    placeholder="Write your thoughts..."
                    value={editData.content}
                    onChange={(e) =>
                      setEditData({ ...editData, content: e.target.value })
                    }
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={handleUpdate}
                    className="group/save flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-green-500/50 hover:scale-105 transition-all duration-300"
                  >
                    <Check className="w-4 h-4 group-hover/save:scale-110 transition-transform" />
                    <span>Save</span>
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="group/cancel flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-700/50 border border-gray-600/50 text-gray-300 font-medium rounded-xl hover:bg-gray-600/50 hover:text-white transition-all duration-300"
                  >
                    <X className="w-4 h-4 group-hover/cancel:rotate-90 transition-transform" />
                    <span>Cancel</span>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* View Mode */}
              <div className="flex flex-col h-full">
                {/* Title */}
                <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-blue-300 transition-colors duration-300">
                  {note.title}
                </h2>

                {/* Content */}
                <p className="text-gray-400 leading-relaxed flex-1 line-clamp-4 mb-4">
                  {note.content}
                </p>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent mb-4"></div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>
                      {new Date(note.createdAt).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {/* Edit Button */}
                    <button
                      onClick={() => setIsEditing(true)}
                      className="group/edit relative p-2 bg-amber-500/20 border border-amber-500/30 text-amber-400 rounded-lg hover:bg-amber-500/30 hover:border-amber-500/50 hover:text-amber-300 hover:scale-110 transition-all duration-300"
                      aria-label="Edit note"
                    >
                      <Edit3 className="w-4 h-4 group-hover/edit:rotate-12 transition-transform" />
                      
                      {/* Tooltip */}
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover/edit:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-gray-700 shadow-xl">
                        Edit
                      </span>
                    </button>

                    {/* Delete Button */}
                    <button
                      onClick={handleDelete}
                      className="group/delete relative p-2 bg-red-500/20 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/30 hover:border-red-500/50 hover:text-red-300 hover:scale-110 transition-all duration-300"
                      aria-label="Delete note"
                    >
                      <Trash2 className="w-4 h-4 group-hover/delete:scale-110 transition-transform" />
                      
                      {/* Tooltip */}
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover/delete:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-gray-700 shadow-xl">
                        Delete
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Noise Texture Overlay (Optional Premium Effect) */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}></div>
        </div>
      </div>
    </div>
  );
}

export default Notecard;
