import React from 'react';
import { BellRing, MessageSquarePlus, Sparkles } from 'lucide-react';

interface NoticeBarProps {
  channelLink?: string;
  noticeChannelLink?: string;
  noticeText?: string;
  noticeEnabled?: boolean;
}

// ✅ No Firebase call here — App.tsx থেকে props আসে
// Double fetch বন্ধ করা হয়েছে
const NoticeBar: React.FC<NoticeBarProps> = ({
  noticeChannelLink,
  channelLink,
  noticeText = '🎬 New Content Added Daily! Enjoy High-Speed Streaming on Cineflix. ⚠️ আপনার পছন্দের মুভি বা সিরিজ খুঁজে পাচ্ছেন না? রিকোয়েস্ট বাটনে ক্লিক করুন।',
  noticeEnabled = true,
}) => {
  if (!noticeEnabled) return null;

  const reqLink = noticeChannelLink || channelLink || 'https://t.me/cineflixrequestcontent';
  const scrollText = `${noticeText}     •     ${noticeText}     •     `;

  return (
    <div className="w-full mb-6 px-0 relative z-20 overflow-hidden">
      <div
        className="relative overflow-hidden rounded-2xl flex items-stretch"
        style={{
          background: 'linear-gradient(135deg, #111111 0%, #1a1500 50%, #111111 100%)',
          boxShadow: '0 0 0 1px rgba(255,215,0,0.18), 0 4px 24px rgba(255,215,0,0.08), 0 1px 0 rgba(255,255,255,0.04) inset',
        }}
      >
        <div className="w-[3px] shrink-0 bg-gradient-to-b from-gold via-yellow-400 to-gold rounded-l-2xl" />

        <div className="flex items-center gap-3 flex-1 py-2.5 pl-3 pr-2 min-w-0">

          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-full bg-gold/20 blur-md animate-pulse" />
            <div className="relative bg-gold/15 border border-gold/30 p-2 rounded-xl">
              <BellRing size={15} className="text-gold" />
            </div>
          </div>

          <div className="shrink-0 hidden xs:flex items-center gap-1 bg-gold/10 border border-gold/25 px-2 py-0.5 rounded-lg">
            <Sparkles size={9} className="text-gold fill-gold/50" />
            <span className="text-[9px] font-black text-gold uppercase tracking-widest">Notice</span>
          </div>

          <div className="flex-1 overflow-hidden relative h-5 flex items-center"
            style={{ maskImage: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)' }}>
            <div
              className="whitespace-nowrap"
              style={{ animation: 'noticeScroll 30s linear infinite' }}
            >
              <span className="text-[11px] font-medium text-gray-200 tracking-wide">{scrollText}</span>
              <span className="text-[11px] font-medium text-gray-200 tracking-wide">{scrollText}</span>
            </div>
          </div>

          <button
            onClick={() => window.open(reqLink, '_blank')}
            className="shrink-0 relative overflow-hidden group/req flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all duration-200 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, rgba(255,215,0,0.15) 0%, rgba(255,215,0,0.08) 100%)',
              border: '1px solid rgba(255,215,0,0.35)',
              color: '#FFD700',
              boxShadow: '0 0 12px rgba(255,215,0,0.12)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent -translate-x-full group-hover/req:translate-x-full transition-transform duration-600 rounded-xl" />
            <MessageSquarePlus size={12} className="relative z-10" />
            <span className="relative z-10">REQ</span>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes noticeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default NoticeBar;
