import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { PageHeader } from '../components/ui/PageHeader';

export function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us - Edible Vibe</title>
        <meta name="description" content="Get in touch with the Edible Vibe team for collaborations, questions, or just to say hello!" />
      </Helmet>

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-20">
          <PageHeader 
            title="Get in Touch"
            description="Have a question, suggestion, or want to collaborate? We'd love to hear from you!"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 dark:bg-gray-700 dark:text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 dark:bg-gray-700 dark:text-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="question">General Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 dark:bg-gray-700 dark:text-white"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="text-orange-500 mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600 dark:text-gray-400">contact@ediblevibe.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="text-orange-500 mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="text-orange-500 mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold">Studio Location</h3>
                      <p className="text-gray-600 dark:text-gray-400">123 Content Drive<br />Los Angeles, CA 90028</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MessageSquare className="text-orange-500 mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-gray-600 dark:text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM<br />Weekend: By Appointment</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">FAQ</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">How can I collaborate with Edible Vibe?</h3>
                    <p className="text-gray-600 dark:text-gray-400">Send us a message with your proposal using the contact form, and our team will get back to you within 48 hours.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Do you accept guest appearances?</h3>
                    <p className="text-gray-600 dark:text-gray-400">Yes! We're always looking for passionate foodies and car enthusiasts to feature in our content.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Can I visit your studio?</h3>
                    <p className="text-gray-600 dark:text-gray-400">Studio visits are by appointment only. Please contact us to schedule a visit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}