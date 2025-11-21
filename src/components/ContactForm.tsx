'use client';

import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ message: '', type: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
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
        setFormData({ fullName: '', email: '', message: '' });
      } else {
        setStatus({ message: result.message || 'An error occurred.', type: 'error' });
      }
    } catch {
      setStatus({ message: 'An error occurred while sending the message.', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-spacing bg-gradient-to-b from-white to-neutral-50" id="contact">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold tracking-wider text-primary uppercase mb-3">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-tight mb-6">
            Let's Discuss Your Project
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Ready to build something great? Reach out to our team. We are committed to responding within one business day.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 outline-none resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full inline-flex items-center justify-center px-6 py-4 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              {status.message && (
                <div
                  className={`p-4 rounded-lg text-center font-medium ${status.type === 'success'
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : status.type === 'error'
                        ? 'bg-red-50 text-red-800 border border-red-200'
                        : 'bg-blue-50 text-blue-800 border border-blue-200'
                    }`}
                >
                  {status.message}
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Contact Information</h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                You can also reach us via the details below. We are committed to responding within one business day.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-neutral-100 hover:border-primary/50 transition-colors duration-300">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-1">Email</div>
                  <a href="mailto:contact@valaithalam.site" className="text-lg font-medium text-neutral-900 hover:text-primary transition-colors">
                    contact@valaithalam.site
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-neutral-100 hover:border-primary/50 transition-colors duration-300">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-1">Phone</div>
                  <a href="tel:+15551234567" className="text-lg font-medium text-neutral-900 hover:text-primary transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
              <h4 className="font-semibold text-neutral-900 mb-2">Business Hours</h4>
              <p className="text-neutral-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-neutral-600">Weekend: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;