import React from 'react';
import {
  LineChart,
  Battery,
  Clock,
  CreditCard,
  MapPin,
  Settings,
  User,
  LogOut,
} from 'lucide-react';

const mockChargingSessions = [
  {
    id: 1,
    station: 'Central Station EV Hub',
    date: '2024-03-10',
    duration: '45 min',
    cost: '$12.50',
    energy: '35 kWh',
  },
  {
    id: 2,
    station: 'GreenCharge Plaza',
    date: '2024-03-08',
    duration: '30 min',
    cost: '$8.75',
    energy: '25 kWh',
  },
  {
    id: 3,
    station: 'EcoCharge Station',
    date: '2024-03-05',
    duration: '60 min',
    cost: '$15.00',
    energy: '45 kWh',
  },
];

const favoriteStations = [
  {
    id: 1,
    name: 'Central Station EV Hub',
    address: '123 Main Street, Downtown',
    available: true,
  },
  {
    id: 2,
    name: 'GreenCharge Plaza',
    address: '456 Oak Avenue, Midtown',
    available: false,
  },
];

export default function UserDashboard() {
  return (
    <div className="bg-gray-50 pt-16">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        {/* User Profile Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded-full bg-green-600 flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Welcome back, John!</h2>
                <p className="text-sm text-gray-500">john.doe@example.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-400 hover:text-gray-500">
                <Settings className="h-6 w-6" />
              </button>
              <button className="text-gray-400 hover:text-gray-500">
                <LogOut className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Total Energy</p>
                    <p className="mt-1 text-2xl font-semibold text-gray-900">105 kWh</p>
                  </div>
                  <Battery className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Total Time</p>
                    <p className="mt-1 text-2xl font-semibold text-gray-900">2.25 hrs</p>
                  </div>
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Total Spent</p>
                    <p className="mt-1 text-2xl font-semibold text-gray-900">$36.25</p>
                  </div>
                  <CreditCard className="h-8 w-8 text-green-600" />
                </div>
              </div>
            </div>

            {/* Recent Sessions */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Recent Charging Sessions</h3>
              </div>
              <div className="flow-root">
                <div className="-mx-6 -mb-6">
                  <div className="inline-block min-w-full align-middle">
                    <table className="min-w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Station</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Date</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Duration</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Energy</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Cost</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {mockChargingSessions.map((session) => (
                          <tr key={session.id}>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">{session.station}</td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{session.date}</td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{session.duration}</td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{session.energy}</td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{session.cost}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Favorite Stations */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Favorite Stations</h3>
              <div className="space-y-4">
                {favoriteStations.map((station) => (
                  <div key={station.id} className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{station.name}</p>
                      <p className="text-sm text-gray-500">{station.address}</p>
                      <span className={`inline-flex items-center mt-1 px-2 py-0.5 rounded text-xs font-medium ${
                        station.available ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {station.available ? 'Available' : 'Busy'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Usage Chart */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Usage</h3>
              <div className="flex items-center justify-center">
                <LineChart className="h-48 w-48 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}