import React, { useState } from 'react';
import { Search, Filter, MapPin, Battery, Clock, Star } from 'lucide-react';

const mockStations = [
  {
    id: 1,
    name: 'Tata Power Charging Station',
    address: 'MG Road, Bangalore, Karnataka 560001',
    distance: '0.5 km',
    types: ['Level 2', 'DC Fast Charging'],
    available: 3,
    total: 6,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'EESL Charging Hub',
    address: 'Connaught Place, New Delhi 110001',
    distance: '1.2 km',
    types: ['Level 2', 'CCS2'],
    available: 2,
    total: 4,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1558425281-c539e5e5f28f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Ather Grid',
    address: 'Bandra West, Mumbai, Maharashtra 400050',
    distance: '2.0 km',
    types: ['Level 2', 'DC Fast Charging'],
    available: 1,
    total: 8,
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1562101806-4a0d7ea717b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Fortum Charge & Drive',
    address: 'Sector 18, Noida, Uttar Pradesh 201301',
    distance: '3.5 km',
    types: ['CCS2', 'CHAdeMO'],
    available: 4,
    total: 6,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    name: 'MG Motor Charging Station',
    address: 'Koramangala, Bangalore, Karnataka 560034',
    distance: '4.2 km',
    types: ['CCS2', 'Level 2'],
    available: 2,
    total: 4,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1558425281-c539e5e5f28f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    name: 'Hyundai Electric Plaza',
    address: 'Anna Salai, Chennai, Tamil Nadu 600002',
    distance: '1.8 km',
    types: ['CCS2', 'Level 2'],
    available: 3,
    total: 5,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1562101806-4a0d7ea717b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  }
];

const filters = [
  { id: 'level2', label: 'Level 2' },
  { id: 'ccs2', label: 'CCS2' },
  { id: 'dcFast', label: 'DC Fast Charging' },
  { id: 'chademo', label: 'CHAdeMO' },
  { id: 'available', label: 'Available Now' },
  { id: 'rating4Plus', label: '4.0+ Rating' },
];

export default function ChargingStations() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (filterId: string) => {
    setActiveFilters(current =>
      current.includes(filterId)
        ? current.filter(id => id !== filterId)
        : [...current, filterId]
    );
  };

  return (
    <div className="bg-gray-50 pt-16">
      {/* Search and Filter Section */}
      <div className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1 max-w-lg">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                className="block w-full rounded-full border-0 py-3 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600"
                placeholder="Search by city, area, or station name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => toggleFilter(filter.id)}
                  className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium ${
                    activeFilters.includes(filter.id)
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Filter className="mr-2 h-4 w-4" />
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stations Grid */}
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mockStations.map((station) => (
            <div
              key={station.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={station.image}
                  alt={station.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-900">{station.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="ml-1 text-sm text-gray-600">{station.rating}</span>
                  </div>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  {station.address}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {station.types.map((type) => (
                    <span
                      key={type}
                      className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700"
                    >
                      <Battery className="mr-1 h-3 w-3" />
                      {type}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {station.available} of {station.total} available
                  </div>
                  <button className="inline-flex items-center rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}