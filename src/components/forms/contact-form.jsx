import React, { useState } from 'react';
import { useRouter } from 'next/router';

const labels = {
    en: { name: 'Full name', email: 'email address', subject: 'subject', message: 'write message', send: 'send message' },
    ar: { name: 'الاسم الكامل', email: 'البريد الإلكتروني', subject: 'الموضوع', message: 'اكتب رسالتك', send: 'إرسال الرسالة' },
};

const ContactForm = () => {
    const { locale } = useRouter();
    const l = labels[locale] || labels.en;
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = `From: ${form.name} (${form.email})\n\n${form.message}`;
        window.location.href = `mailto:support@linkaza.com?subject=${encodeURIComponent(form.subject || 'Website inquiry')}&body=${encodeURIComponent(body)}`;
    };

    return (
        <form id="contact-form" onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder={l.name} value={form.name} onChange={handleChange} required />
            <input name="email" type="email" placeholder={l.email} value={form.email} onChange={handleChange} required />
            <input name="subject" type="text" placeholder={l.subject} value={form.subject} onChange={handleChange} />
            <textarea name="message" cols="30" rows="10" placeholder={l.message} value={form.message} onChange={handleChange} required></textarea>
            <button type="submit" className="x-btn btn-black">{l.send}</button>
        </form>
    );
};

export default ContactForm;