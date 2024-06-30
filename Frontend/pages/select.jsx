import React, { useState } from 'react';

export default function Admin() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Define dropdown items with labels and URLs
  const dropdownItems = [
    { id: 1, label: 'Sharda University', url: '/login' },
    { id: 2, label: 'GL Bajaj', url: '/login' },
    { id: 3, label: 'Amity University', url: '/Google.in' },
    { id: 4, label: 'Galgotias University', url: '/Youtube.in' },
  ];

  const filteredItems = dropdownItems.filter(item =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle redirection
  const handleRedirect = (url) => {
    window.location.href = url; // Redirects the user to the specified URL
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#1F2544' }}>
      <div className="relative group">
        <button
          id="dropdown-button"
          className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
          onClick={toggleDropdown}
        >
          <span className="mr-2 font-serif">Select College</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </button>
        <div id="dropdown-menu" className={`absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 ${isDropdownOpen ? 'block' : 'hidden'}`}>
          <input
            id="search-input"
            className="block w-full px-4 py-2 text-gray-800 border rounded-md border-gray-300 focus:outline-none"
            type="text"
            placeholder="Search colleges"
            autoComplete="off"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && filteredItems.map(item => (
            <div key={item.id} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md" onClick={() => handleRedirect(item.url)}>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}