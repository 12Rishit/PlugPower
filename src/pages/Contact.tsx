import React from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const contactMethods = [
  {
    name: 'Email',
    description: 'Send us an email anytime',
    icon: Mail,
    contact: 'contact@plugandpower.com',
  },
  {
    name: 'Phone',
    description: 'Mon-Fri from 8am to 6pm',
    icon: Phone,
    contact: '(123) 456-7890',
  },
  {
    name: 'Office',
    description: 'Come say hello',
    icon: MapPin,
    contact: '123 Green Street, Eco City, EC 12345',
  },
];

export default function Contact() {
  return (
    <div className="bg-gray-50 pt-16">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get in Touch</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Have questions about our platform or need assistance? We're here to help!
          </p>

          {/* Contact Methods */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {contactMethods.map((method) => (
              <div key={method.name} className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <method.icon className="h-6 w-6 text-green-600" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-base font-semibold leading-7 text-gray-900">{method.name}</h3>
                <p className="mt-1 text-sm leading-6 text-gray-600">{method.description}</p>
                <p className="mt-1 text-sm leading-6 text-green-600">{method.contact}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-gray-900">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-gray-900">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-gray-900">
                  Subject
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Send Message
                </div>
              </button>
            </div>
          </div>

          {/* FAQ Preview */}
          <div className="mt-24">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Frequently Asked Questions</h3>
            <dl className="mt-8 space-y-6 divide-y divide-gray-300/10">
              {[
                {
                  question: "How do I find the nearest charging station?",
                  answer: "Use our interactive map on the Charging Stations page to find stations near you. You can filter by charging type and availability status."
                },
                {
                  question: "What types of charging connectors do you support?",
                  answer: "We support all major charging standards including Type 2, CCS, CHAdeMO, and Tesla connectors. You can filter stations by connector type in the app."
                },
                {
                  question: "How accurate is the battery range calculator?",
                  answer: "Our calculator considers multiple factors including vehicle model, battery capacity, and typical energy consumption patterns to provide accurate estimates."
                }
              ].map((faq) => (
                <div key={faq.question} className="pt-6">
                  <dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}