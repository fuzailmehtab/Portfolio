import React, { useState, useEffect } from 'react';
import { Search, Globe, ExternalLink, MapPin, Users, BookOpen, Loader2, AlertCircle } from 'lucide-react';

const CollegeFinder = () => {
  // State management for application data and UI
  const [universities, setUniversities] = useState([]);
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [isUsingDemoData, setIsUsingDemoData] = useState(true);

  // Demo data - comprehensive list of top universities worldwide
  const demoUniversities = [
    {
      name: "Massachusetts Institute of Technology",
      country: "United States",
      "state-province": "Massachusetts",
      domains: ["mit.edu"],
      web_pages: ["https://web.mit.edu"]
    },
    {
      name: "Stanford University",
      country: "United States",
      "state-province": "California",
      domains: ["stanford.edu"],
      web_pages: ["https://www.stanford.edu"]
    },
    {
      name: "Harvard University",
      country: "United States",
      "state-province": "Massachusetts",
      domains: ["harvard.edu"],
      web_pages: ["https://www.harvard.edu"]
    },
    {
      name: "University of Oxford",
      country: "United Kingdom",
      "state-province": "England",
      domains: ["ox.ac.uk"],
      web_pages: ["https://www.ox.ac.uk"]
    },
    {
      name: "University of Cambridge",
      country: "United Kingdom",
      "state-province": "England",
      domains: ["cam.ac.uk"],
      web_pages: ["https://www.cam.ac.uk"]
    },
    {
      name: "University of Toronto",
      country: "Canada",
      "state-province": "Ontario",
      domains: ["utoronto.ca"],
      web_pages: ["https://www.utoronto.ca"]
    },
    {
      name: "University of British Columbia",
      country: "Canada",
      "state-province": "British Columbia",
      domains: ["ubc.ca"],
      web_pages: ["https://www.ubc.ca"]
    },
    {
      name: "Australian National University",
      country: "Australia",
      "state-province": "Australian Capital Territory",
      domains: ["anu.edu.au"],
      web_pages: ["https://www.anu.edu.au"]
    },
    {
      name: "University of Melbourne",
      country: "Australia",
      "state-province": "Victoria",
      domains: ["unimelb.edu.au"],
      web_pages: ["https://www.unimelb.edu.au"]
    },
    {
      name: "ETH Zurich",
      country: "Switzerland",
      "state-province": "Zurich",
      domains: ["ethz.ch"],
      web_pages: ["https://ethz.ch"]
    },
    {
      name: "Technical University of Munich",
      country: "Germany",
      "state-province": "Bavaria",
      domains: ["tum.de"],
      web_pages: ["https://www.tum.de"]
    },
    {
      name: "University of Tokyo",
      country: "Japan",
      "state-province": "Tokyo",
      domains: ["u-tokyo.ac.jp"],
      web_pages: ["https://www.u-tokyo.ac.jp"]
    },
    {
      name: "Kyoto University",
      country: "Japan",
      "state-province": "Kyoto",
      domains: ["kyoto-u.ac.jp"],
      web_pages: ["https://www.kyoto-u.ac.jp"]
    },
    {
      name: "Indian Institute of Technology Bombay",
      country: "India",
      "state-province": "Maharashtra",
      domains: ["iitb.ac.in"],
      web_pages: ["https://www.iitb.ac.in"]
    },
    {
      name: "Indian Institute of Science",
      country: "India",
      "state-province": "Karnataka",
      domains: ["iisc.ac.in"],
      web_pages: ["https://www.iisc.ac.in"]
    },
    {
      name: "University of Amsterdam",
      country: "Netherlands",
      "state-province": "North Holland",
      domains: ["uva.nl"],
      web_pages: ["https://www.uva.nl"]
    },
    {
      name: "Delft University of Technology",
      country: "Netherlands",
      "state-province": "South Holland",
      domains: ["tudelft.nl"],
      web_pages: ["https://www.tudelft.nl"]
    },
    {
      name: "Sorbonne University",
      country: "France",
      "state-province": "Île-de-France",
      domains: ["sorbonne-universite.fr"],
      web_pages: ["https://www.sorbonne-universite.fr"]
    },
    {
      name: "École Polytechnique",
      country: "France",
      "state-province": "Île-de-France",
      domains: ["polytechnique.edu"],
      web_pages: ["https://www.polytechnique.edu"]
    },
    {
      name: "Tsinghua University",
      country: "China",
      "state-province": "Beijing",
      domains: ["tsinghua.edu.cn"],
      web_pages: ["https://www.tsinghua.edu.cn"]
    },
    {
      name: "Peking University",
      country: "China",
      "state-province": "Beijing",
      domains: ["pku.edu.cn"],
      web_pages: ["https://www.pku.edu.cn"]
    },
    {
      name: "National University of Singapore",
      country: "Singapore",
      "state-province": null,
      domains: ["nus.edu.sg"],
      web_pages: ["https://www.nus.edu.sg"]
    },
    {
      name: "Seoul National University",
      country: "South Korea",
      "state-province": "Seoul",
      domains: ["snu.ac.kr"],
      web_pages: ["https://www.snu.ac.kr"]
    },
    {
      name: "University of São Paulo",
      country: "Brazil",
      "state-province": "São Paulo",
      domains: ["usp.br"],
      web_pages: ["https://www.usp.br"]
    },
    {
      name: "KTH Royal Institute of Technology",
      country: "Sweden",
      "state-province": "Stockholm",
      domains: ["kth.se"],
      web_pages: ["https://www.kth.se"]
    },
    {
      name: "University of Copenhagen",
      country: "Denmark",
      "state-province": "Capital Region",
      domains: ["ku.dk"],
      web_pages: ["https://www.ku.dk"]
    },
    {
      name: "Norwegian University of Science and Technology",
      country: "Norway",
      "state-province": "Trøndelag",
      domains: ["ntnu.no"],
      web_pages: ["https://www.ntnu.no"]
    },
    {
      name: "University of Helsinki",
      country: "Finland",
      "state-province": "Uusimaa",
      domains: ["helsinki.fi"],
      web_pages: ["https://www.helsinki.fi"]
    },
    {
      name: "Technion - Israel Institute of Technology",
      country: "Israel",
      "state-province": "Haifa District",
      domains: ["technion.ac.il"],
      web_pages: ["https://www.technion.ac.il"]
    },
    {
      name: "Universidad Nacional Autónoma de México",
      country: "Mexico",
      "state-province": "Mexico City",
      domains: ["unam.mx"],
      web_pages: ["https://www.unam.mx"]
    }
  ];

  // Popular countries for quick access
  const popularCountries = [
    'United States', 'United Kingdom', 'Canada', 'Australia', 
    'Germany', 'France', 'Japan', 'India', 'China', 'Netherlands'
  ];

  /**
   * Load demo data immediately for instant functionality
   */
  const loadDemoData = () => {
    setUniversities(demoUniversities);
    setFilteredUniversities(demoUniversities);
    setIsUsingDemoData(true);
    
    // Extract unique countries from demo data
    const uniqueCountries = [...new Set(demoUniversities.map(uni => uni.country))].sort();
    setCountries(uniqueCountries);
  };

  /**
   * Fetch universities from the Universities API (background process)
   * @param {string} country - Country to search for (optional)
   * @param {string} name - University name to search for (optional)
   */
  const fetchUniversities = async (country = '', name = '') => {
    setLoading(true);
    setError(null);
    
    try {
      let url = 'https://universities.hipolabs.com/search?';
      const params = new URLSearchParams();
      
      if (country) params.append('country', country);
      if (name) params.append('name', name);
      
      url += params.toString();
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        signal: AbortSignal.timeout(15000)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Successfully got real data
      const limitedData = data.slice(0, 200);
      setUniversities(limitedData);
      setFilteredUniversities(limitedData);
      setIsUsingDemoData(false);
      setError(null);
      
      // Extract unique countries for dropdown
      const uniqueCountries = [...new Set(data.map(uni => uni.country))].sort();
      setCountries(uniqueCountries);
      
    } catch (err) {
      console.warn('API fetch failed:', err.message);
      // Don't show error if we already have demo data loaded
      if (universities.length === 0) {
        loadDemoData();
      }
    } finally {
      setLoading(false);
    }
  };

  /**
   * Try to fetch real data in background while keeping demo data visible
   */
  const tryFetchRealData = async () => {
    setError(null);
    try {
      await fetchUniversities(selectedCountry, searchQuery);
    } catch (err) {
      // Silently fail - user can try again if needed
      console.warn('Background fetch failed');
    }
  };

  /**
   * Filter universities based on search query and selected country
   */
  const filterUniversities = () => {
    let filtered = universities;

    // Filter by search query (university name)
    if (searchQuery) {
      filtered = filtered.filter(uni =>
        uni.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by selected country
    if (selectedCountry) {
      filtered = filtered.filter(uni => uni.country === selectedCountry);
    }

    setFilteredUniversities(filtered);
  };

  // Effect to filter universities when search criteria change
  useEffect(() => {
    filterUniversities();
  }, [searchQuery, selectedCountry, universities]);

  // Load demo data immediately on component mount
  useEffect(() => {
    // Load demo data first for instant functionality
    loadDemoData();
    
    // Try to fetch real data in the background after a short delay
    const timer = setTimeout(() => {
      tryFetchRealData();
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  /**
   * Handle country selection from popular countries or dropdown
   * @param {string} country - Selected country name
   */
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    fetchUniversities(country);
  };

  /**
   * Handle search form submission
   * @param {Event} e - Form submit event
   */
  const handleSearch = (e) => {
    e.preventDefault();
    if (isUsingDemoData) {
      // Just filter demo data locally
      filterUniversities();
    } else {
      // Fetch from API with new criteria
      if (searchQuery || selectedCountry) {
        fetchUniversities(selectedCountry, searchQuery);
      }
    }
  };

  /**
   * Clear all filters and reload data
   */
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCountry('');
    if (isUsingDemoData) {
      loadDemoData();
    } else {
      fetchUniversities();
    }
  };

  /**
   * University Card Component
   * Displays individual university information
   * @param {Object} university - University data object
   */
  const UniversityCard = ({ university }) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200">
      {/* University Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
            {university.name}
          </h3>
          <div className="flex items-center text-gray-600 mb-2">
            <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="text-sm">{university.country}</span>
          </div>
        </div>
        <div className="flex items-center ml-4">
          <Globe className="w-8 h-8 text-blue-500" />
        </div>
      </div>

      {/* University Details */}
      <div className="space-y-3">
        {/* State/Province (if available) */}
        {university['state-province'] && (
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="text-sm">
              State/Province: {university['state-province']}
            </span>
          </div>
        )}

        {/* Domains */}
        {university.domains && university.domains.length > 0 && (
          <div className="flex items-start text-gray-600">
            <BookOpen className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <span className="font-medium">Domains: </span>
              <span>{university.domains.join(', ')}</span>
            </div>
          </div>
        )}

        {/* Website Links */}
        {university.web_pages && university.web_pages.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {university.web_pages.map((url, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 text-sm rounded-full transition-colors duration-200"
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                Visit Website
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header Section */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              🎓 College Finder
            </h1>
            <p className="text-gray-600 text-lg">
              Discover universities worldwide and find your perfect academic destination
            </p>
          </div>

          {/* Search Form */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              {/* University Name Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search universities by name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              {/* Country Selection */}
              <div className="md:w-64">
                <select
                  value={selectedCountry}
                  onChange={(e) => handleCountrySelect(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">All Countries</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleSearch}
                  disabled={loading}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg transition-colors duration-200 font-medium"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    'Search'
                  )}
                </button>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200 font-medium"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>

          {/* Popular Countries Quick Select */}
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-gray-600 mb-3">Popular Countries:</p>
            <div className="flex flex-wrap gap-2">
              {popularCountries.map((country) => (
                <button
                  key={country}
                  onClick={() => handleCountrySelect(country)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCountry === country
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {country}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              {filteredUniversities.length > 0 ? (
                `Found ${filteredUniversities.length} Universities`
              ) : loading ? (
                'Searching...'
              ) : (
                'No Universities Found'
              )}
            </h2>
            {(searchQuery || selectedCountry) && (
              <p className="text-gray-600 mt-1">
                {searchQuery && `Name: "${searchQuery}"`}
                {searchQuery && selectedCountry && ' • '}
                {selectedCountry && `Country: ${selectedCountry}`}
              </p>
            )}
          </div>
        </div>

        {/* Data Source Indicator */}
        {isUsingDemoData && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Globe className="w-5 h-5 text-blue-600 mr-2" />
                <div>
                  <p className="text-blue-800 font-medium">
                    Showing Top Universities (Demo Mode)
                  </p>
                  <p className="text-blue-600 text-sm">
                    30 prestigious universities worldwide - All features are fully functional
                  </p>
                </div>
              </div>
              <button
                onClick={tryFetchRealData}
                disabled={loading}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white text-sm rounded-lg transition-colors duration-200"
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  'Try Live Data'
                )}
              </button>
            </div>
          </div>
        )}

        {/* Success Message for Real Data */}
        {!isUsingDemoData && universities.length > 0 && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <Globe className="w-5 h-5 text-green-600 mr-2" />
              <p className="text-green-800">
                ✅ Connected to live university database with {universities.length}+ institutions
              </p>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="text-center">
              <Loader2 className="w-8 h-8 animate-spin text-blue-500 mx-auto mb-4" />
              <p className="text-gray-600">Loading universities...</p>
            </div>
          </div>
        )}

        {/* University Grid */}
        {!loading && filteredUniversities.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUniversities.map((university, index) => (
              <UniversityCard key={`${university.name}-${index}`} university={university} />
            ))}
          </div>
        )}

        {/* No Results State */}
        {!loading && !error && filteredUniversities.length === 0 && universities.length > 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No universities found
            </h3>
            <p className="text-gray-500 mb-4">
              Try adjusting your search criteria or explore different countries
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
            >
              Show All Universities
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm mb-2">
            {isUsingDemoData ? (
              <>
                Showing curated top universities • Built with React.js
                <br />
                <span className="text-xs text-gray-500">
                  Demo includes 30 world-renowned institutions across 20+ countries
                </span>
              </>
            ) : (
              <>
                Live data from{' '}
                <a
                  href="https://universities.hipolabs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  Universities API
                </a>
                {' '}• Built with React.js
              </>
            )}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CollegeFinder;