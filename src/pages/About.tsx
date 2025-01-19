import React from 'react';
import { Leaf, Users, Globe } from 'lucide-react';

const teamMembers = [
  {
    name: 'Rishit Agnihotri',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Visionary entrepreneur with extensive experience in EV infrastructure and sustainable energy.',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Software architect specializing in EV charging infrastructure.',
  },
  {
    name: 'Emma Thompson',
    role: 'Head of Sustainability',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Environmental scientist dedicated to reducing carbon emissions.',
  },
];

const impactMetrics = [
  { id: 1, stat: '50,000+', label: 'Active Users' },
  { id: 2, stat: '10,000+', label: 'Charging Stations' },
  { id: 3, stat: '500,000+', label: 'Charging Sessions' },
  { id: 4, stat: '25,000+', label: 'Tons of CO₂ Saved' },
];

export default function About() {
  return (
    <div className="bg-white pt-16">
      {/* Mission Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-green-100/20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <h2 className="text-base font-semibold leading-8 text-green-600">Our Mission</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Accelerating the World's Transition to Sustainable Transportation
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At Plug & Power, we're committed to making electric vehicle charging accessible, 
              convenient, and reliable for everyone. Our platform connects drivers with charging 
              infrastructure while promoting sustainable transportation solutions.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>

      {/* Impact Metrics */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {impactMetrics.map((metric) => (
            <div key={metric.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{metric.label}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {metric.stat}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Team Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet the passionate individuals driving the electric revolution forward.
          </p>
        </div>
        <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {teamMembers.map((person) => (
            <li key={person.name}>
              <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.image} alt="" />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-base leading-7 text-green-600">{person.role}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Sustainability Section */}
      <div className="relative isolate overflow-hidden bg-green-600 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Commitment to Sustainability
            </h2>
            <figure className="mt-10">
              <blockquote className="text-lg font-semibold leading-8 text-white">
                <p>
                  "We believe that the future of transportation is electric. Our platform not only helps 
                  drivers find charging stations but also contributes to reducing carbon emissions and 
                  creating a more sustainable future for generations to come."
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <div className="text-base">
                  <div className="font-semibold text-white">Rishit Agnihotri</div>
                  <div className="mt-1 text-green-100">CEO & Founder</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#50c878] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  );
}