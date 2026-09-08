import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { comments, socialLinks } from '../data/config.jsx';
import { socialIcons } from './Icons.jsx';
import {
  SendIcon,
  UserIcon,
  MailIcon,
  MessageIcon,
  UploadIcon,
  HeartIcon,
  PinIcon,
  CheckCircleIcon,
} from './Icons.jsx';
import { fadeUp, stagger } from '../data/motion.js';

import Magnetic from './Magnetic.jsx';

const socialUrl = (icon, handle) => {
  const username = handle.replace(/^@/, '');
  const urls = {
    linkedin: `https://www.linkedin.com/in/${username}`,
    instagram: `https://www.instagram.com/${username}`,
    youtube: `https://www.youtube.com/@${username}`,
    github: `https://www.github.com/${username}`,
    tiktok: `https://www.tiktok.com/@${username}`,
  };
  return urls[icon] || '#';
};

function ContactPanel() {
  const [status, setStatus] = useState('idle');
  const [fields, setFields] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = useCallback(() => {
    const errs = {};
    if (!fields.name.trim()) errs.name = 'Name is required';
    if (!fields.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errs.email = 'Invalid email';
    if (!fields.message.trim()) errs.message = 'Message is required';
    return errs;
  }, [fields]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setFields({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1200);
  };

  const inputBase =
    'w-full bg-transparent py-3 text-sm text-text placeholder:text-faint focus:outline-none';

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-3xl border border-line-soft bg-card p-8">
        <h3 className="font-display text-2xl font-bold tracking-tight text-text">COMMANDO</h3>
        <p className="mt-3 text-sm font-light leading-relaxed text-muted">
          Feel free to reach out if you want to collaborate, discuss ideas, or simply say hello.
        </p>

        <form className="mt-8 flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
          <div>
            <label className="flex items-center gap-3 rounded-xl border bg-[#0a0a0a] px-4 transition-colors duration-300 focus-within:border-line"
              style={{ borderColor: errors.name ? '#ef4444' : undefined }}
            >
              <UserIcon size={15} className="shrink-0 text-faint" />
              <input
                type="text"
                value={fields.name}
                onChange={(e) => { setFields((f) => ({ ...f, name: e.target.value })); setErrors((er) => ({ ...er, name: undefined })); }}
                placeholder="Your Name"
                className={inputBase}
              />
            </label>
            {errors.name && <p className="mt-1.5 ml-1 font-mono text-[10px] text-red-400">{errors.name}</p>}
          </div>
          <div>
            <label className="flex items-center gap-3 rounded-xl border bg-[#0a0a0a] px-4 transition-colors duration-300 focus-within:border-line"
              style={{ borderColor: errors.email ? '#ef4444' : undefined }}
            >
              <MailIcon size={15} className="shrink-0 text-faint" />
              <input
                type="email"
                value={fields.email}
                onChange={(e) => { setFields((f) => ({ ...f, email: e.target.value })); setErrors((er) => ({ ...er, email: undefined })); }}
                placeholder="Your Email"
                className={inputBase}
              />
            </label>
            {errors.email && <p className="mt-1.5 ml-1 font-mono text-[10px] text-red-400">{errors.email}</p>}
          </div>
          <div>
            <label className="flex items-start gap-3 rounded-xl border bg-[#0a0a0a] px-4 pt-3 transition-colors duration-300 focus-within:border-line"
              style={{ borderColor: errors.message ? '#ef4444' : undefined }}
            >
              <MessageIcon size={15} className="mt-1 shrink-0 text-faint" />
              <textarea
                rows={5}
                value={fields.message}
                onChange={(e) => { setFields((f) => ({ ...f, message: e.target.value })); setErrors((er) => ({ ...er, message: undefined })); }}
                placeholder="Your Message"
                className="w-full resize-none bg-transparent pb-3 text-sm text-text placeholder:text-faint focus:outline-none"
              />
            </label>
            {errors.message && <p className="mt-1.5 ml-1 font-mono text-[10px] text-red-400">{errors.message}</p>}
          </div>

          <Magnetic className="w-full">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#e8e8e8] px-6 py-3.5 text-sm font-medium text-[#050505] transition-all duration-300 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
            <AnimatePresence mode="wait">
              {status === 'sending' ? (
                <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                  <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-[#050505]/30 border-t-[#050505]" />
                  Sending...
                </motion.span>
              ) : status === 'sent' ? (
                <motion.span key="sent" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                  <CheckCircleIcon size={15} />
                  Sent!
                </motion.span>
              ) : (
                <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                  <SendIcon size={15} />
                  Send Message
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </Magnetic>
        </form>
      </div>

      <div className="rounded-3xl border border-line-soft bg-card p-8">
        <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-faint">
          Connect With Me
        </h4>
        <div className="mt-5 grid grid-cols-2 gap-3">
          {socialLinks.map((social) => {
            const Icon = socialIcons[social.icon];
            return (
              <a
                key={social.label}
                href={socialUrl(social.icon, social.handle)}
                target="_blank"
                rel="noreferrer noopener"
                className={`${social.wide ? 'col-span-2' : ''} group flex items-center gap-3.5 rounded-xl border border-line-soft bg-[#0a0a0a] px-4 py-3.5 transition-colors duration-300 hover:border-white/20`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.05] text-muted transition-all duration-300 group-hover:text-text group-hover:bg-white/[0.08]">
                  <Icon size={17} />
                </span>
                <span>
                  <span className="block text-xs font-medium text-text">{social.label}</span>
                  <span className="block font-mono text-[10px] text-faint">{social.handle}</span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const initialComments = comments;

function CommentsPanel() {
  const [items, setItems] = useState(initialComments);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [commentError, setCommentError] = useState('');

  const postComment = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      setCommentError('Comment cannot be empty');
      return;
    }
    setCommentError('');
    setItems((prev) => [{ name: name.trim() || 'Tamu', text: text.trim(), pinned: false }, ...prev]);
    setName('');
    setText('');
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-3xl border border-line-soft bg-card p-8">
        <h3 className="font-display text-2xl font-bold tracking-tight text-text">Comments</h3>
        <p className="mt-3 text-sm font-light text-muted">Leave your thoughts here</p>

        <form className="mt-8 flex flex-col gap-4" onSubmit={postComment}>
          <label className="flex items-center gap-3 rounded-xl border border-line-soft bg-[#0a0a0a] px-4 transition-colors duration-300 focus-within:border-line">
            <UserIcon size={15} className="shrink-0 text-faint" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full bg-transparent py-3 text-sm text-text placeholder:text-faint focus:outline-none"
            />
          </label>
          <div>
            <label className="flex items-start gap-3 rounded-xl border bg-[#0a0a0a] px-4 pt-3 transition-colors duration-300 focus-within:border-line"
              style={{ borderColor: commentError ? '#ef4444' : undefined }}
            >
              <MessageIcon size={15} className="mt-1 shrink-0 text-faint" />
              <textarea
                rows={4}
                value={text}
                onChange={(e) => { setText(e.target.value); setCommentError(''); }}
                placeholder="Your Comment"
                className="w-full resize-none bg-transparent pb-3 text-sm text-text placeholder:text-faint focus:outline-none"
              />
            </label>
            {commentError && <p className="mt-1.5 ml-1 font-mono text-[10px] text-red-400">{commentError}</p>}
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-dashed border-white/20 px-5 py-3 text-sm font-medium text-muted transition-colors duration-300 hover:border-white/40 hover:text-text"
          >
            <UploadIcon size={15} />
            Upload Image
          </button>
          <button
            type="submit"
            className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 text-sm font-medium text-text transition-all duration-300 hover:border-white/35 hover:bg-white/[0.03]"
          >
            <SendIcon size={15} />
            Post Comment
          </button>
        </form>
      </div>

      <div className="rounded-3xl border border-line-soft bg-card p-8">
        <h4 className="mb-5 font-mono text-[10px] uppercase tracking-[0.25em] text-faint">
          Recent Comments
        </h4>
        <motion.ul
          className="flex flex-col gap-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <AnimatePresence>
            {items.map((comment, i) => (
              <motion.li
                key={`${comment.name}-${i}`}
                variants={fadeUp}
                layout
                className={`flex items-start gap-3.5 rounded-2xl border px-5 py-4 ${
                  comment.pinned
                    ? 'border-white/20 bg-white/[0.04]'
                    : 'border-line-soft bg-[#0a0a0a]'
                }`}
              >
                <span
                  className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-xs ${
                    comment.pinned
                      ? 'border border-violet-400/40 bg-violet-400/10 text-violet-300'
                      : 'border border-white/10 bg-white/[0.05] text-muted'
                  }`}
                >
                  {comment.name.slice(0, 1).toUpperCase()}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-text">{comment.name}</span>
                    {comment.pinned && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-violet-400/40 bg-violet-400/10 px-2 py-0.5 font-mono text-[9px] tracking-widest text-violet-300">
                        <PinIcon size={10} />
                        PINNED
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-[13px] font-light text-muted">{comment.text}</p>
                </div>
                <HeartIcon size={14} className="mt-1 shrink-0 text-faint transition-colors duration-300 hover:text-red-400" />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto w-full max-w-6xl px-8">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto mb-14 max-w-md text-center text-[15px] font-light text-muted"
        >
          Have something in mind? Send a message and let&apos;s connect.
        </motion.p>

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={fadeUp}>
            <ContactPanel />
          </motion.div>
          <motion.div variants={fadeUp}>
            <CommentsPanel />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
