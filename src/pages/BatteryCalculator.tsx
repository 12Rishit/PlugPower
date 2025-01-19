import React, { useState } from 'react';
import { Battery, Navigation2, AlertTriangle, Check, Zap, ThermometerSun } from 'lucide-react';

interface CalculationResult {
  canReach: boolean;
  estimatedRange: number;
  alternatives?: typeof mockStations;
}

const mockStations = [
  {
    id: 1,
    name: 'Tata Power Charging Station',
    distance: 15.5,
    available: true,
  },
  {
    id: 2,
    name: 'EESL Charging Hub',
    distance: 12.2,
    available: true,
  },
  {
    id: 3,
    name: 'Ather Grid',
    distance: 8.7,
    available: false,
  },
];

const vehicleModels = [
  { id: 'tata-nexon', name: 'Tata Nexon EV', range: 465 },
  { id: 'mg-zs', name: 'MG ZS EV', range: 461 },
  { id: 'hyundai-kona', name: 'Hyundai Kona Electric', range: 452 },
  { id: 'mahindra-xuv400', name: 'Mahindra XUV400', range: 456 },
  { id: 'ather-450x', name: 'Ather 450X', range: 146 },
  { id: 'ola-s1', name: 'Ola S1 Pro', range: 181 },
];

export default function BatteryCalculator() {
  const [batteryPercentage, setBatteryPercentage] = useState(80);
  const [selectedStation, setSelectedStation] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [weather, setWeather] = useState('normal'); // normal, hot, rainy

  const calculateRange = () => {
    const vehicle = vehicleModels.find(v => v.id === selectedVehicle);
    if (!vehicle) return;

    // Apply weather factors
    let weatherFactor = 1;
    switch (weather) {
      case 'hot':
        weatherFactor = 0.85; // 15% reduction in hot weather
        break;
      case 'rainy':
        weatherFactor = 0.9; // 10% reduction in rainy weather
        break;
    }

    const estimatedRange = (vehicle.range * (batteryPercentage / 100)) * weatherFactor;
    const selectedStationData = mockStations.find(station => station.id.toString() === selectedStation);
    
    if (selectedStationData) {
      const canReach = estimatedRange >= selectedStationData.distance;
      setResult({
        canReach,
        estimatedRange,
        alternatives: canReach ? undefined : mockStations
          .filter(s => s.id.toString() !== selectedStation && s.available && s.distance < estimatedRange)
          .sort((a, b) => a.distance - b.distance),
      });
    }
  };

  return (
    <div className="bg-gray-50 pt-16">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Indian EV Range Calculator
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Calculate your EV range considering Indian weather conditions and traffic patterns.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Calculator Form */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="space-y-8">
              {/* Vehicle Selection */}
              <div>
                <label htmlFor="vehicle" className="block text-sm font-medium leading-6 text-gray-900">
                  Select Your Vehicle
                </label>
                <select
                  id="vehicle"
                  value={selectedVehicle}
                  onChange={(e) => setSelectedVehicle(e.target.value)}
                  className="mt-2 block w-full rounded-md border-0 py-3 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600"
                >
                  <option value="">Select a vehicle</option>
                  {vehicleModels.map((vehicle) => (
                    <option key={vehicle.id} value={vehicle.id}>
                      {vehicle.name} ({vehicle.range} km range)
                    </option>
                  ))}
                </select>
              </div>

              {/* Battery Percentage Slider */}
              <div>
                <label htmlFor="battery" className="block text-sm font-medium leading-6 text-gray-900">
                  Current Battery Percentage
                </label>
                <div className="mt-2">
                  <div className="flex items-center gap-4">
                    <Battery className={`h-6 w-6 ${
                      batteryPercentage > 80 ? 'text-green-600' :
                      batteryPercentage > 20 ? 'text-yellow-600' :
                      'text-red-600'
                    }`} />
                    <input
                      type="range"
                      id="battery"
                      min="0"
                      max="100"
                      value={batteryPercentage}
                      onChange={(e) => setBatteryPercentage(Number(e.target.value))}
                      className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-sm font-medium text-gray-900">{batteryPercentage}%</span>
                  </div>
                </div>
              </div>

              {/* Weather Conditions */}
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Weather Conditions
                </label>
                <div className="mt-2 grid grid-cols-3 gap-3">
                  {[
                    { id: 'normal', label: 'Normal', icon: Zap },
                    { id: 'hot', label: 'Hot', icon: ThermometerSun },
                    { id: 'rainy', label: 'Rainy', icon: AlertTriangle },
                  ].map((condition) => (
                    <button
                      key={condition.id}
                      type="button"
                      onClick={() => setWeather(condition.id)}
                      className={`flex items-center justify-center gap-2 rounded-lg border p-3 text-sm ${
                        weather === condition.id
                          ? 'border-green-600 bg-green-50 text-green-600'
                          : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <condition.icon className="h-5 w-5" />
                      {condition.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Station Selection */}
              <div>
                <label htmlFor="station" className="block text-sm font-medium leading-6 text-gray-900">
                  Destination Charging Station
                </label>
                <select
                  id="station"
                  value={selectedStation}
                  onChange={(e) => setSelectedStation(e.target.value)}
                  className="mt-2 block w-full rounded-md border-0 py-3 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600"
                >
                  <option value="">Select a station</option>
                  {mockStations.map((station) => (
                    <option key={station.id} value={station.id}>
                      {station.name} ({station.distance} km)
                    </option>
                  ))}
                </select>
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateRange}
                disabled={!selectedStation || !selectedVehicle}
                className="w-full rounded-full bg-green-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Calculate Range
              </button>
            </div>
          </div>

          {/* Results Display */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Results</h3>
            
            {result ? (
              <div className="space-y-6">
                <div className={`rounded-lg p-4 ${
                  result.canReach ? 'bg-green-50' : 'bg-yellow-50'
                }`}>
                  <div className="flex items-start">
                    {result.canReach ? (
                      <Check className="h-5 w-5 text-green-600 mt-0.5" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    )}
                    <div className="ml-3">
                      <h4 className={`text-sm font-medium ${
                        result.canReach ? 'text-green-800' : 'text-yellow-800'
                      }`}>
                        {result.canReach
                          ? 'You can reach this station!'
                          : 'This station is out of range'}
                      </h4>
                      <p className="mt-2 text-sm text-gray-600">
                        Estimated range: {Math.round(result.estimatedRange)} km
                      </p>
                    </div>
                  </div>
                </div>

                {!result.canReach && result.alternatives && result.alternatives.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-3">
                      Alternative Stations Within Range
                    </h4>
                    <ul className="space-y-3">
                      {result.alternatives.map((station) => (
                        <li
                          key={station.id}
                          className="flex items-center justify-between rounded-lg border border-gray-200 p-4"
                        >
                          <div className="flex items-center">
                            <Navigation2 className="h-5 w-5 text-gray-400 mr-3" />
                            <div>
                              <p className="text-sm font-medium text-gray-900">{station.name}</p>
                              <p className="text-sm text-gray-500">{station.distance} km away</p>
                            </div>
                          </div>
                          <button className="rounded-full bg-green-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-green-500">
                            Select
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center text-gray-500 py-12">
                Select your vehicle and destination station to calculate range
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}