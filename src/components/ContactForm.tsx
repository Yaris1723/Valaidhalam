'use client';

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ message: '', type: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ message: 'Sending...', type: 'info' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ message: result.message, type: 'success' });
        setFormData({ fullName: '', email: '', message: '' }); // Clear form
      } else {
        setStatus({ message: result.message || 'An error occurred.', type: 'error' });
      }
    } catch (error) {
      setStatus({ message: 'An error occurred while sending the message.', type: 'error' });
    }
  };

  return (
    <section className="py-20 bg-secondary" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Get in Touch</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-y-6">
                <div>
                  <label htmlFor="fullName" className="sr-only">Full name</label>
                  <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary focus:border-primary border-gray-300 rounded-md" placeholder="Full name" />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary focus:border-primary border-gray-300 rounded-md" placeholder="Email" />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary focus:border-primary border-gray-300 rounded-md" placeholder="Message"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50" disabled={status.message === 'Sending...'}>
                    Send Message
                  </button>
                </div>
                {status.message && (
                  <div className={`text-center p-2 rounded-md ${status.type === 'success' ? 'bg-green-100 text-green-800' : ''} ${status.type === 'error' ? 'bg-red-100 text-red-800' : ''} ${status.type === 'info' ? 'bg-blue-100 text-blue-800' : ''}`}>
                    {status.message}
                  </div>
                )}
              </div>
            </form>
          </div>
          <div className="text-gray-900">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <p className="mt-4 text-lg text-gray-600">
              You can also reach us via the details below. We typically respond within 24 hours.
            </p>
            <div className="mt-6 space-y-4">
              <p className="flex items-center">
                <svg className="flex-shrink-0 h-6 w-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <span>contact@valaithalam.site</span>
              </p>
              <p className="flex items-center">
                <svg className="flex-shrink-0 h-6 w-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span>+1 (555) 123-4567</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;