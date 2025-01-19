import React from 'react';
import { Zap, Calculator, LineChart, IndianRupee as Rupee, Shield, MapPin } from 'lucide-react';

const features = [
  {
    name: 'Pan-India Charging Network',
    description: 'Access 10,000+ charging points across major cities and highways in India.',
    icon: MapPin,
  },
  {
    name: 'Smart Tariff Calculator',
    description: 'Calculate charging costs with state-specific electricity tariffs and time-of-day rates.',
    icon: Rupee,
  },
  {
    name: 'FAME II Benefits Tracker',
    description: 'Track your FAME II subsidies and benefits for electric vehicle charging.',
    icon: Shield,
  },
  {
    name: 'Real-Time Availability',
    description: 'Get live updates on charging station availability and power status.',
    icon: Zap,
  },
  {
    name: 'Range Calculator',
    description: 'Plan your journey with our India-specific EV range calculator considering traffic and climate.',
    icon: Calculator,
  },
  {
    name: 'Usage Analytics',
    description: 'Track your charging history and expenses in INR with detailed monthly reports.',
    icon: LineChart,
  },
];

export default function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-green-600">Smart EV Charging</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            India's Most Advanced EV Charging Network
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Supporting India's electric mobility revolution with cutting-edge charging infrastructure and smart features
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-green-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}