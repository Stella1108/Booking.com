"use client";
import Image from "next/image";

import { useState } from "react";


export default function Page() {
  const [showLocations, setShowLocations] = useState(false);
  const [location, setLocation] = useState("");
  const [showGuests, setShowGuests] = useState(false);

  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const locations = ["New Delhi", "Mumbai", "Bangalore", "Goa", "Hyderabad"];

  return (
    <div>
      {/* Blue Section */}
      <div className="w-full bg-[#003b95] text-white pb-20 relative">
        <div className="px-[200px]">
          {/* Header */}
          <header className="flex justify-between items-center py-4">
            <div className="font-bold text-2xl">Booking.com</div>
            <div className="flex items-center gap-4">
              <div>INR</div>
              <img
                src="https://flagcdn.com/w20/in.png"
                alt="India"
                className="w-6 h-6 rounded-full border border-white"
              />
              <span className="text-white text-lg font-bold"><Image src="https://cdn-icons-png.flaticon.com/128/471/471664.png" alt="bed" width={24}  height={24}  className="invert"/></span>
              <div className="cursor-pointer">List your property</div>
              <button className="bg-white text-[#003b95] rounded-xl px-4 py-2">
                Register
              </button>
              <button className="bg-white text-[#003b95] rounded-xl px-4 py-2">
                Sign in
              </button>
            </div>
          </header>

          {/* Nav Row */}
          <nav className="flex gap-6 py-4">
            <div className="flex items-center gap-2 border rounded-[30px] px-4 py-2">
              <Image
        src="https://cdn-icons-png.flaticon.com/128/3030/3030336.png"
        alt="bed"
        width={24}
        height={24}
         className="invert"
      /> Stay
            </div>
            <div className="flex items-center gap-2"><Image src="https://cdn-icons-png.flaticon.com/128/10522/10522359.png" alt="Flight" width={24}  height={24}  className="invert"/>  Flights</div>
            <div className="flex items-center gap-2"><Image src="https://cdn-icons-png.flaticon.com/128/9494/9494754.png" alt="travel" width={24}  height={24}  className="invert"/>  Flight + Hotel</div>
            <div className="flex items-center gap-2"><Image src="https://cdn-icons-png.flaticon.com/128/15511/15511982.png" alt="car" width={24}  height={24}  className="invert"/> Car Rental</div>
            <div className="flex items-center gap-2"><Image src="https://cdn-icons-png.flaticon.com/128/7457/7457517.png" alt="attraction" width={24}  height={24}  className="invert"/> Attractions</div>
            <div className="flex items-center gap-2"><Image src="https://cdn-icons-png.flaticon.com/128/13223/13223678.png" alt="taxies" width={24}  height={24}  className="invert"/> Airport Taxis</div>
          </nav>

          {/* Hero */}
          <section className="mt-6">
            <h1 className="text-5xl font-bold">Find your next stay</h1>
            <p className="mt-1 text-gray-200 text-xl">
              Search deals on hotels, homes, and much more...
            </p>
          </section>
        </div>

        {/* Search Bar */}
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-full flex justify-center">
          <div className="flex w-full max-w-5xl border-[5px] border-[#ffb700] rounded-lg overflow-hidden bg-white text-black">
            {/* Destination */}
            <div
              onClick={() => setShowLocations(!showLocations)}
              className="flex items-center gap-2 px-4 py-3 flex-1 cursor-pointer"
            >
              <Image
        src="https://cdn-icons-png.flaticon.com/128/3030/3030336.png"
        alt="bed"
        width={24}
        height={24}
      /> <span>{location || "Where are you going?"}</span>
            </div>
            {showLocations && (
              <ul className="absolute mt-14 w-64 bg-white text-black shadow-lg rounded-lg z-10">
                {locations.map((loc) => (
                  <li
                    key={loc}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      setLocation(loc);
                      setShowLocations(false);
                    }}
                  >
                    {loc}
                  </li>
                ))}
              </ul>
            )}

            {/* Calendar */}
            <div className="flex items-center gap-2 px-4 py-3 flex-1 border-l border-[#ffb700]">
              <Image src="https://cdn-icons-png.flaticon.com/128/10692/10692577.png" alt="bed" width={24}  height={24}/> 
        <span>Check-in — Check-out</span>
            </div>

            {/* Guests */}
            <div
              onClick={() => setShowGuests(!showGuests)}
              className="flex items-center gap-2 px-4 py-3 flex-1 border-l border-[#ffb700] cursor-pointer"
            >
                 <Image src="https://cdn-icons-png.flaticon.com/128/747/747376.png" alt="man" width={24}  height={24}/> {" "}
              <span>
                {adults} adults · {children} children · {rooms} room
              </span>
            </div>

            {/* Search Button */}
            <button className="bg-blue-600 text-white font-semibold px-6 py-3 w-40 border-l border-[#ffb700]">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Below Blue Section */}
      <div className="px-[200px] mt-14">
        {/* Flights checkbox */}
        <div className="flex items-center gap-2 mb-4">
          <input type="checkbox" id="flights" className="w-5 h-5" />
          <label htmlFor="flights" className="text-ml">
            I’m looking for flights
          </label>
        </div>

        {/* Offers Section */}
        <h2 className="text-2xl font-bold">Offers</h2>
        <p className="text-ml text-gray-600 mb-8">
          Promotions, deals, and special offers for you
        </p>

        {/* Two Column Section */}
        <div className="grid grid-cols-2 gap-6 ">
          {/* Left Column with Background Image */}
          <div
            className="relative bg-cover bg-center h-40 rounded-lg overflow-hidden pt-10 flex items-end"
            style={{
              backgroundImage:
                "url('https://q-xx.bstatic.com/xdata/images/xphoto/814x138/535341132.jpeg?k=9adf4d98ff2d48c5745b37654d2d77e09169647b979dfda9c6baa54198b9fc6c&o=')",
            }}
          >
            <div className=" text-white p-6  w-full  ">
           <p className="text-ml">Vacation rentals</p>
              <h3 className="text-xl font-bold">
                Live the dream in a vacation home
              </h3>
              <p className="mt-1">
                Choose from houses, villas, cabins, and more
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md">
                Book yours
              </button>
            </div>
          </div>

          {/* Right Column with Border */}
          <div className="border border-gray-00 rounded-lg p-6 flex items-center justify-between">
            {/* Left Side Text */}
            <div>
              <h3 className="text-xl font-bold">Quick escape, quality time</h3>
              <p className="mt-1 text-gray-500">
                Save up to 20% with a Getaway Deal
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md">
                Save on stays
              </button>
            </div>
            {/* Right Side Image */}
            <img
              src="https://r-xx.bstatic.com/xdata/images/xphoto/248x248/468828542.jpeg?k=b51cb74f05db0ebc1a1cbcca384fa2ee8c4d6c0b5fd089a15b1fd14a107ccab4&o="
              alt="Getaway"
              className="w-20 h-20 rounded-lg "
            />
          </div>
        </div>
      </div>
      {/* Trending Destinations Section */}
<section className="px-[200px] mt-12">
  {/* Heading */}
  <h2 className="text-3xl font-bold">Trending destinations</h2>
  <p className="text-gray-600 mb-6">
    Most popular choices for travelers from India
  </p>

  {/* First Row: 2 Columns */}
  <div className="grid grid-cols-2 gap-5 mb-6">
    {/* New Delhi */}
    <div
      className="relative h-64 rounded-lg overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cf.bstatic.com/xdata/images/city/600x600/990313.jpg?k=940929beb89e058f8a4d60b605795d4424c2b4ea9463ecf102fa81dac2ab549e&o=')",
      }}
    >
      {/* Shadow Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      {/* Label */}
      <div className="absolute top-4 left-4 flex items-center gap-2 text-white px-3 py-1 rounded-md text-2xl">
          <span className="font-bold">New Delhi</span>
        <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-5 h-5" />
      
      </div>
    </div>

    {/* Bangalore */}
    <div
      className="relative h-64 rounded-lg overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cf.bstatic.com/xdata/images/city/600x600/990511.jpg?k=7a4ae0bcd342f9872b523ebc2463f973abe541c7f94d127dfe5a33a243c68234&o=')",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute top-4 left-4 flex items-center gap-2  text-white px-3 py-1 rounded-md text-2xl">
        <span className="font-bold">Bangalore</span>
        <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-5 h-5" />
      </div>
    </div>
  </div>

  {/* Second Row: 3 Columns */}
  <div className="grid grid-cols-3 gap-5">
    {/* Mumbai */}
    <div
      className="relative h-64 rounded-lg overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=')",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute top-4 left-4 flex items-center gap-2 text-white px-3 py-1 rounded-md text-2xl">
        <span className="font-bold">Mumbai</span>
        <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-5 h-5" />
        
      </div>
    </div>

    {/* Chennai */}
    <div
      className="relative h-64 rounded-lg overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cf.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o=')",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute top-4 left-4 flex items-center gap-2  text-white px-3 py-1 rounded-md text-2xl">
          <span className="font-bold">Chennai</span>
        <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-5 h-5" />
     
      </div>
    </div>

    {/* Varanasi */}
    <div
      className="relative h-64 rounded-lg overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cf.bstatic.com/xdata/images/city/600x600/684940.jpg?k=f8eb21b5c72289407585cef7ff7cfc99798ac9238398d7b27c6929ad6c54f78a&o=')",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute top-4 left-4 flex items-center gap-2  text-white px-3 py-1 rounded-md text-2xl">
         <span className="font-bold">Varanasi</span>
        <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-5 h-5" />
      
      </div>
    </div>
  </div>
</section>
{/* Browse by Property Type Section */}
<section className="px-[200px] mt-12">
  {/* Heading */}
  <h2 className="text-3xl font-bold mb-6">Browse by property type</h2>

  {/* 4 Columns */}
  <div className="grid grid-cols-4 gap-6">
    {/* Hotels */}
    <div className="text-center">
      <div
        className="h-48 w-full rounded-lg overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://r-xx.bstatic.com/xdata/images/hotel/263x210/595550862.jpeg?k=3514aa4abb76a6d19df104cb307b78b841ac0676967f24f4b860d289d55d3964&o=')",
        }}
      ></div>
      <p className="mt-3 text-lg font-semibold text-left ">Hotels</p>
    </div>

    {/* Apartments */}
    <div className="text-center">
      <div
        className="h-48 w-full rounded-lg overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://r-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o=')",
        }}
      ></div>
      <p className="mt-3 text-lg font-semibold text-left">Apartments</p>
    </div>

    {/* Resorts */}
    <div className="text-center">
      <div
        className="h-48 w-full rounded-lg overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://q-xx.bstatic.com/xdata/images/hotel/263x210/595551044.jpeg?k=262826efe8e21a0868105c01bf7113ed94de28492ee370f4225f00d1de0c6c44&o=')",
        }}
      ></div>
      <p className="mt-3 text-lg font-semibold text-left">Resorts</p>
    </div>

    {/* Villas */}
    <div className="text-center">
      <div
        className="h-48 w-full rounded-lg overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://q-xx.bstatic.com/xdata/images/hotel/263x210/620168315.jpeg?k=300d8d8059c8c5426ea81f65a30a7f93af09d377d4d8570bda1bd1f0c8f0767f&o=')",
        }}
      ></div>
      <p className="mt-3 text-lg font-semibold text-left">Villas</p>
    </div>
  </div>
</section>
<section className="mt-12 px-[200px]">
  {/* Heading */}
  <h2 className="text-3xl font-bold">Explore India</h2>
  <p className="text-lg text-gray-600 mt-1">
    These popular destinations have a lot to offer
  </p>

  {/* 6 Columns */}
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-6">
    {/* New Delhi */}
    <div>
      <div
        className="h-40 w-full rounded-lg overflow-hidden bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://q-xx.bstatic.com/xdata/images/city/170x136/990313.jpg?k=940929beb89e058f8a4d60b605795d4424c2b4ea9463ecf102fa81dac2ab549e&o=')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      <p className="mt-2 text-ml font-semibold text-left">New Delhi</p>
      <p className="text-sm text-gray-600 text-left">4,666 properties</p>
    </div>

    {/* Bangalore */}
    <div>
      <div
        className="h-40 w-full rounded-lg overflow-hidden bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://q-xx.bstatic.com/xdata/images/city/170x136/990511.jpg?k=7a4ae0bcd342f9872b523ebc2463f973abe541c7f94d127dfe5a33a243c68234&o=')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      <p className="mt-2 text-ml font-semibold text-left">Bangalore</p>
      <p className="text-sm text-gray-600 text-left">3,176 properties</p>
    </div>

    {/* Mumbai */}
    <div>
      <div
        className="h-40 w-full rounded-lg overflow-hidden bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      <p className="mt-2 text-ml font-semibold text-left">Mumbai</p>
      <p className="text-sm text-gray-600 text-left">1,999 properties</p>
    </div>

    {/* Chennai */}
    <div>
      <div
        className="h-40 w-full rounded-lg overflow-hidden bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://cf.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o=')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      <p className="mt-2 text-ml font-semibold text-left">Chennai</p>
      <p className="text-sm text-gray-600 text-left">1,356 properties</p>
    </div>

    {/* Varanasi */}
    <div>
      <div
        className="h-40 w-full rounded-lg overflow-hidden bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://q-xx.bstatic.com/xdata/images/city/170x136/684940.jpg?k=f8eb21b5c72289407585cef7ff7cfc99798ac9238398d7b27c6929ad6c54f78a&o=')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      <p className="mt-2 text-ml font-semibold text-left">Varanasi</p>
      <p className="text-sm text-gray-600 text-left">2,345 properties</p>
    </div>

    {/* Hyderabad */}
    <div>
      <div
        className="h-40 w-full rounded-lg overflow-hidden bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://r-xx.bstatic.com/xdata/images/city/170x136/684653.jpg?k=306ccafcc8a4a7e23b9e8a05b183453fe885b312a4daa5ce76ec39a1b79cbc6f&o=')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      <p className="mt-2 text-ml   font-semibold text-left">Hyderabad</p>
      <p className="text-sm text-gray-600 text-left">1,876 properties</p>
    </div>
  </div>
</section>
<section className="mt-12 px-[200px]">
  {/* Heading */}
  <h2 className="text-3xl font-bold">Quick and easy trip planner</h2>
  <p className="text-lg text-gray-600 mt-1">
    Pick a vibe and explore the top destinations in India
  </p>

  {/* Categories row */}
  <div className="flex flex-wrap justify-between gap-4 mt-6 text-base font-medium text-gray-700">
    <span>Cultural Exploration</span>
    <span>Festivals</span>
    <span>Food & Culinary</span>
    <span>Historical Tours</span>
    <span>Yoga & Wellness</span>
    <span>Hill Stations</span>
    <span>Beach Holidays</span>
    <span>Adventure & Wildlife</span>
  </div>

  {/* 6 Columns of destinations */}
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-8">
    {/* Hampi */}
    <div>
      <div
        className="h-40 w-full rounded-lg overflow-hidden bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://r-xx.bstatic.com/xdata/images/city/170x136/684938.jpg?k=9d07ff707ce59768769b5e9a5381a4c705d921209dafd8fd0e2f1a6acdf0c68a&o=')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      <p className="mt-2 text-lg font-semibold text-left">Udaipur</p>
      <p className="text-sm text-gray-600 text-left">1,354 km from Bangalore</p>
    </div>

    {/* Aurangabad */}
    <div>
      <div
        className="h-40 w-full rounded-lg overflow-hidden bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://q-xx.bstatic.com/xdata/images/city/170x136/684571.jpg?k=2166dfd3192f12497a35d57434f14f2f9175eca9e2698b04eeb827064c3c9d4d&o=')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      <p className="mt-2 text-lg font-semibold text-left">Kolkata</p>
      <p className="text-sm text-gray-600 text-left">1,560 km from Bangalore</p>
    </div>

    {/* Mysore */}
    <div>
      <div
        className="h-40 w-full rounded-lg overflow-hidden bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://q-xx.bstatic.com/xdata/images/city/170x136/684657.jpg?k=66dc5035b43e9bb86b756e381e4fec2558064af4a63a8af17836725a854c03ee&o=')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      <p className="mt-2 text-lg font-semibold text-left">Jaipur</p>
      <p className="text-sm text-gray-600 text-left">1,561 km from Bangalore</p>
    </div>

    {/* Ajmer */}
    <div>
      <div
        className="h-40 w-full rounded-lg overflow-hidden bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://q-xx.bstatic.com/xdata/images/city/170x136/684520.jpg?k=9c132986036f4aa8d7d1d1dd915509deed7b6285742b34f137b67e8f9db04af1&o=')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      <p className="mt-2 text-lg font-semibold text-left">Amritsar</p>
      <p className="text-sm text-gray-600 text-left">2,093 km from Bangalore</p>
    </div>

    {/* Agra */}
    <div>
      <div
        className="h-40 w-full rounded-lg overflow-hidden bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://q-xx.bstatic.com/xdata/images/city/170x136/684572.jpg?k=f74af2be72834d9953c8096834db666c7769c5f6c1ba230d6fe5591ba84dd33d&o=')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      <p className="mt-2 text-lg font-semibold text-left">Cochin</p>
      <p className="text-sm text-gray-600 text-left">364 km from Bangalore</p>
    </div>

    {/* Jaipur */}
    <div>
      <div
        className="h-40 w-full rounded-lg overflow-hidden bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://r-xx.bstatic.com/xdata/images/city/170x136/948123.jpg?k=887e4933b8b622412ddeeb4fbbe94daf92d25939524e789150e8f5f2d6dec066&o=')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      <p className="mt-2 text-lg font-semibold text-left">Gokarna</p>
      <p className="text-sm text-gray-600 text-left">395 km from Bangalore</p>
    </div>
  </div>
</section>

<section className="mt-16 px-[200px]">
  {/* Heading */}
  <h2 className="text-3xl font-bold">Deals for the weekend</h2>
  <p className="text-lg text-gray-600 mt-1">
    Save on stays for September 5 - September 7
  </p>

  {/* Cards Row */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
    {/* Card 1 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
      {/* Image */}
      <div className="relative h-48 w-full">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square240/517155203.jpg?k=803c27eb52e3e8b39508fd6975e72e9705273ff5ed8070074ea3de645d04764b&o=0"
          alt="Hampi nature cottage"
          className="w-full h-full object-cover"
        />
        {/* Heart Icon */}
        <span className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
          <Image src="https://cdn-icons-png.flaticon.com/128/4675/4675168.png" alt="man" width={24}  height={24}/>
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
          Genius
        </span>
        <h3 className="text-ml font-bold mt-2">Hampi Nature Cottage</h3>
        <p className="text-gray-500 text-sm">Hampi, India</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          <span className="bg-blue-600 text-white text-sm font-semibold px-2 py-1 rounded">
            7.1
          </span>
          <div>
            <p className="text-sm font-semibold">Good</p>
            <p className="text-xs text-gray-500">48 reviews</p>
          </div>
        </div>

        {/* Deal Button */}
        <button className="mt-3 bg-green-600 text-white px-3 py-1 rounded text-sm">
          Getaway Deal
        </button>

        {/* Price */}
        <div className="mt-4 flex justify-between items-center">
  <div></div>
  <div className="flex items-center gap-2">
     <p className="text-xs text-gray-500">2 nights</p>
    <p className="text-sm text-red-600 line-through">₹6,200</p>
    <p className="text-lg font-bold">₹4,499</p>

  </div>
</div>
      </div>
    </div>

    {/* Repeat Card 2 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
      <div className="relative h-48 w-full">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/628649979.webp?k=48073b2a412407a2a32af63c7e43cd7293d7a9b9843e76e5827a2cce3e88572f&o="
          alt="Aurangabad Stay"
          className="w-full h-full object-cover"
        />
        <span className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
          <Image src="https://cdn-icons-png.flaticon.com/128/4675/4675168.png" alt="man" width={24}  height={24}/>
        </span>
      </div>
      <div className="p-4">
        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
          Genius
        </span>
        <h3 className="text-ml font-bold mt-2">Olive Hotel Benz Circle, Vijayawada by Embassy Group</h3>
        <p className="text-gray-500 text-sm">Vijayawāda, India</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="bg-blue-600 text-white text-sm font-semibold px-2 py-1 rounded">
            8.7
          </span>
          <div>
            <p className="text-sm font-semibold">Excellent</p>
            <p className="text-xs text-gray-500">90 reviews</p>
          </div>
        </div>
        <button className="mt-3 bg-green-600 text-white px-3 py-1 rounded text-sm">
          Getaway Deal
        </button>
        <div className="mt-4 flex justify-between items-center">
          <div></div>
       <div className="flex items-center gap-2">
     <p className="text-xs text-gray-500">2 nights</p>
    <p className="text-sm text-red-600 line-through">₹7,538</p>
    <p className="text-lg font-bold">₹6,030</p>

  </div>
</div>
      </div>
    </div>

    {/* Repeat Card 3 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
      <div className="relative h-48 w-full">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square240/594730538.jpg?k=d3f3e4b89ccc993f8d1300adecb3bdbc96ac14aace535a77d917cca9205bc872&o="
          alt="Mysore Comfort"
          className="w-full h-full object-cover"
        />
        <span className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
          <Image src="https://cdn-icons-png.flaticon.com/128/4675/4675168.png" alt="man" width={24}  height={24}/>
        </span>
      </div>
      <div className="p-4">
        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
          Genius
        </span>
        <h3 className="text-ml font-bold mt-2">Hotel Aerotel,Hyderabad</h3>
        <p className="text-gray-500 text-sm">Shamshabad, India</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="bg-blue-600 text-white text-sm font-semibold px-2 py-1 rounded">
            7.7
          </span>
          <div>
            <p className="text-sm font-semibold">Good</p>
            <p className="text-xs text-gray-500">100 reviews</p>
          </div>
        </div>
        <button className="mt-3 bg-green-600 text-white px-3 py-1 rounded text-sm">
          Getaway Deal
        </button>
        <div className="mt-4 flex justify-between items-center">
          <div></div>
   <div className="flex items-center gap-2">
     <p className="text-xs text-gray-500">2 nights</p>
    <p className="text-sm text-red-600 line-through">₹6,963</p>
    <p className="text-lg font-bold">₹4,874</p>

  </div>
</div>
      </div>
    </div>

    {/* Repeat Card 4 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
      <div className="relative h-48 w-full">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square240/638996196.jpg?k=f2982f3d24dd0bc3351b4952044784c5b06c85cfe1cdb5d22b5eefae03d93a8e&o="
          alt="Ajmer Retreat"
          className="w-full h-full object-cover"
        />
        <span className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
         <Image src="https://cdn-icons-png.flaticon.com/128/4675/4675168.png" alt="man" width={24}  height={24}/>
        </span>
      </div>
      <div className="p-4">
           <span className="inline-block bg-[#004cb8] text-white text-xs px-2 py-1 rounded">
                Genius
              </span>
        <h3 className="text-ml font-bold mt-2">The Hampi Cafe</h3>
        <p className="text-gray-500 text-sm">Hampi, India</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="bg-blue-600 text-white text-sm font-semibold px-2 py-1 rounded">
            9.5
          </span>
          <div>
            <p className="text-sm font-semibold">Exceptional</p>
            <p className="text-xs text-gray-500">6 reviews</p>
          </div>
        </div>
        <button className="mt-3 bg-green-600 text-white px-3 py-1 rounded text-sm">
          Getaway Deal
        </button>
        <div className="mt-4 flex justify-between items-center">
          <div></div>
       <div className="flex items-center gap-2">
     <p className="text-xs text-gray-500">2 nights</p>
    <p className="text-sm text-red-600 line-through">₹12,000</p>
    <p className="text-lg font-bold">₹10,800</p>

  </div>
</div>
      </div>
    </div>
  </div>
</section>
<section className="mt-16 px-[200px]">
 
  <h2 className="text-3xl font-bold">Homes guests love</h2>   
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
  
    <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
      <div className="relative h-48 w-full">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o="
          alt="Aparthotel Stare Miasto"
          className="w-full h-full object-cover"
        />
        <span className="absolute top-2 right-2 bg-white p-2 rounded-full shadow"><Image src="https://cdn-icons-png.flaticon.com/128/4675/4675168.png" alt="man" width={24}  height={24}/></span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">Aparthotel Stare Miasto</h3>
        <p className="text-gray-500 text-sm">Old Town, Poland, Krakow</p>
       
        <div className="flex items-center gap-2 mt-2">
          <span className="bg-blue-600 text-white text-sm font-semibold px-2 py-1 rounded">8.8</span>
          <div>
            <p className="text-sm font-semibold">Excellent</p>
            <p className="text-xs text-gray-500">3,281 reviews</p>
          </div>
        </div>
        <div className="mt-4 text-right">
          <p className="text-ml font-bold">Starting ₹3,998</p>
        </div>
      </div>
    </div>

   
    <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
      <div className="relative h-48 w-full">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/579099936.webp?k=e04cc7f7fe864ce09b7d7d978dbb7db3e558038a2151eb7c4c11e895bafbd8c0&o="
          alt="Aurangabad Stay"
          className="w-full h-full object-cover"
        />
        <span className="absolute top-2 right-2 bg-white p-2 rounded-full shadow"><Image src="https://cdn-icons-png.flaticon.com/128/4675/4675168.png" alt="man" width={24}  height={24}/></span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">7Seasons Apartments Budapest</h3>
        <p className="text-gray-500 text-sm">06. Terezvaros, Hungary, Budapest</p>

        <div className="flex items-center gap-2 mt-2">
          <span className="bg-blue-600 text-white text-sm font-semibold px-2 py-1 rounded">8.7</span>
          <div>
            <p className="text-sm font-semibold">Excellent</p>
            <p className="text-xs text-gray-500">10,927 reviews</p>
          </div>
        </div>
        <div className="mt-4 text-right">
          <p className="text-ml font-bold">Starting ₹4,299</p>
        </div>
      </div>
    </div>

 
    <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
      <div className="relative h-48 w-full">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/559654140.webp?k=89e79aa75ec8a78c63c6f97559ec8f893de372401cdde1b4a2ef8fa1b2389631&o="
          alt="Mysore Comfort"
          className="w-full h-full object-cover"
        />
        <span className="absolute top-2 right-2 bg-white p-2 rounded-full shadow"><Image src="https://cdn-icons-png.flaticon.com/128/4675/4675168.png" alt="man" width={24}  height={24}/></span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">Aparthotel Stare Miasto</h3>
        <p className="text-gray-500 text-sm">Prague 1, Czech Republic, Prague</p>

        <div className="flex items-center gap-2 mt-2">
          <span className="bg-blue-600 text-white text-sm font-semibold px-2 py-1 rounded">8.6</span>
          <div>
            <p className="text-sm font-semibold">Excellent</p>
            <p className="text-xs text-gray-500">714 reviews</p>
          </div>
        </div>
        <div className="mt-4 text-right">
          <p className="text-ml font-bold">Starting from  ₹3,899</p>
        </div>
      </div>
    </div>

  
    <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
      <div className="relative h-48 w-full">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/95058977.webp?k=ab4cc65897bb205dbcefd7a656cb3a811ce2b5b3135ca61c38860db146d96243&o="
          alt="Ajmer Retreat"
          className="w-full h-full object-cover"
        />
        <span className="absolute top-2 right-2 bg-white p-2 rounded-full shadow"><Image src="https://cdn-icons-png.flaticon.com/128/4675/4675168.png" alt="man" width={24}  height={24}/></span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">Oriente Palace Apartments</h3>
        <p className="text-gray-500 text-sm">Madrid City Center, Spain, Madrid</p>
      
        <div className="flex items-center gap-2 mt-2">
          <span className="bg-blue-600 text-white text-sm font-semibold px-2 py-1 rounded">8.9</span>
          <div>
            <p className="text-sm font-semibold">Excellent</p>
            <p className="text-xs text-gray-500">3,465 reviews</p>
          </div>
        </div>
        <div className="mt-4 text-right">
          <p className="text-ml font-bold">Starting ₹4,499</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="mt-12 px-[200px]">
 
  <h2 className="text-2xl font-bold mb-8">Why Booking.com?</h2>


  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

    <div className="bg-[#f5f5f5] border border-gray-300 rounded-lg p-6 ">
      <img
        src="https://t-cf.bstatic.com/design-assets/assets/v3.160.0/illustrations-traveller/FreeCancellation@2x.png"
        alt="Book now"
        className="mx-auto mb-4 h-12 w-12 "
      />
      <h3 className="text-lg font-bold mb-2">Book now, pay at the property</h3>
      <p className="text-sm text-gray-500">FREE cancellation on most rooms</p>
    </div>

    <div className="bg-[#f5f5f5] border border-gray-300 rounded-lg p-6 ">
      <img
        src="https://t-cf.bstatic.com/design-assets/assets/v3.160.0/illustrations-traveller/Reviews@2x.png"
        alt="Reviews"
        className="mx-auto mb-4 h-12 w-12"
      />
      <h3 className="text-lg font-bold mb-2">300M+ reviews from fellow travellers</h3>
      <p className="text-sm text-gray-500">Get trusted information from guests like you</p>
    </div>

    <div className="bg-[#f5f5f5] border border-gray-300 rounded-lg p-6 ">
      <img
        src="https://t-cf.bstatic.com/design-assets/assets/v3.160.0/illustrations-traveller/TripsGlobe@2x.png"
        alt="Properties"
        className="mx-auto mb-4 h-12 w-12"
      />
      <h3 className="text-lg font-bold mb-2">2+ million properties worldwide</h3>
      <p className="text-sm text-gray-500">Hotels, guest houses, apartments, and more…</p>
    </div>

 
    <div className="bg-[#f5f5f5] border border-gray-300 rounded-lg p-6 ">
      <img
        src="https://t-cf.bstatic.com/design-assets/assets/v3.160.0/illustrations-traveller/CustomerSupport@2x.png"
        alt="Support"
        className="mx-auto mb-4 h-12 w-12"
      />
      <h3 className="text-lg font-bold mb-2">
        Trusted customer service you can rely on, 24/7
      </h3>
      <p className="text-sm text-gray-500">We're always here to help</p>
    </div>

  </div>
</section>
<section className="mt-8 px-[200px]">

  <h2 className="text-2xl font-bold mb-8">Travel more, spend less</h2>

  <div className="flex items-center border border-gray-300 rounded-lg p-6 bg-white">
    

    <div className="w-4/5 pr-6">
      <h3 className="text-ml font-semibold mb-2">Sign in, save money</h3>
      <p className="text-gray-800 mb-4">
        Save 10% or more at participating properties – just look for the blue Genius label
      </p>
      <div className="flex gap-4">
        <button className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700">
          Sign in
        </button>
        <button className="border  text-blue-600 px-5 py-2 rounded-md font-medium hover:bg-blue-50">
          Register
        </button>
      </div>
    </div>

    
    <div className="w-1/5 flex justify-end">
      <img
        src="https://t-cf.bstatic.com/design-assets/assets/v3.160.0/illustrations-traveller/GeniusGenericGiftBox@2x.png"
        alt="Celebration"
        className="h-28 w-28 object-contain"
      />
    </div>
  </div>
</section>
<section className="mt-8 px-[200px]">
  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white relative">
    
    {/* <!-- Left Side (60% Blue Oval Background with text + button) --> */}
    <div className="w-[60%] flex flex-col justify-end items-center text-center p-16 relative overflow-hidden">
      {/* <!-- Blue Oval --> */}
      <div className="absolute inset-0 flex justify-end items-center">
        <div className="w-full h-full bg-blue-600 rounded-full"></div>
      </div>

      {/* <!-- Orange Circle --> */}
      <div className="absolute bottom-[-30px] left-[-30px] w-24 h-24 bg-[#ffb700] rounded-full z-0"></div>

      {/* <!-- Text Content --> */}
      <div className="relative z-10 text-white">
        <h2 className="text-3xl font-bold mb-6">
          Want to feel at home on your next adventure?
        </h2>
        <button className="bg-white text-blue-600 font-medium px-6 py-3 rounded hover:bg-gray-100">
          Discover holiday rentals
        </button>
      </div>
    </div>

    {/* <!-- Right Side (40% Image) --> */}
    <div className="w-[40%] flex justify-center items-center p-8 bg-white">
      <img
        src="https://cf.bstatic.com/psb/capla/static/media/bh_aw_cpg_main_image.ae847bb6.png" 
        alt="Holiday Rentals"
        className="max-h-64 object-contain"
      />
    </div>
  </div>
</section>
<section className="mt-8 px-[200px]">
  {/* Heading */}
  <h2 className="text-2xl font-bold mb-6">Popular with travellers from India</h2>

  {/* Filter Buttons */}
  <div className="flex gap-4 mb-8">
    <button className="px-4 py-2 border border-blue-600 rounded-lg text-blue-600 font-medium rounded bg-[#f5f5f5]">
      Domestic cities
    </button>
    <button className="px-4 py-2 text-gray-800 hover:text-blue-600">
      International cities
    </button>
    <button className="px-4 py-2 text-gray-800 hover:text-blue-600">
      Regions
    </button>
    <button className="px-4 py-2 text-gray-800 hover:text-blue-600">
      Countries
    </button>
    <button className="px-4 py-2 text-gray-800 hover:text-blue-600">
      Places to stay
    </button>
  </div>

  {/* 5 Column Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
    {/* Column 1 */}
    <div className="space-y-2">
      <p className="text-gray-700 hover:underline cursor-pointer text-xs">Srinagar hotels</p>
      <p className="text-gray-700 hover:underline cursor-pointer text-xs">Hyderabad hotels</p>
      <p className="text-gray-700 hover:underline cursor-pointer text-xs">Varkala hotels</p>
      <p className="text-gray-700 hover:underline cursor-pointer text-xs">Mysore hotels</p>
      <p className="text-gray-700 hover:underline cursor-pointer text-xs">Shimla hotels</p>
    </div>

    {/* Column 2 */}
    <div className="space-y-2">
      <p className="text-gray-700 hover:underline cursor-pointer text-xs">Mumbai hotels</p>
      <p className="text-gray-700 hover:underline cursor-pointer text-xs">Puri hotels</p>
      <p className="text-gray-700 hover:underline cursor-pointer text-xs">Munnar hotels</p>
      <p className="text-gray-700 hover:underline cursor-pointer text-xs">Cochin hotels</p>
      <p className="text-gray-700 hover:underline cursor-pointer text-xs">Gokarna hotels</p>
    </div>

    {/* Column 3 */}
    <div className="space-y-2">
      <p className="text-gray-700 hover:underline cursor-pointer text-xs">Bengaluru hotels</p>
      <p className="text-gray-700 hover:underline cursor-pointer text-xs">Puducherry hotels</p>
      <p className="text-gray-700 hover:underline cursor-pointer text-xs">Lonavala hotels</p>
      <p className="text-gray-700 hover:underline cursor-pointer text-xs">Pune hotels</p>
      <p className="text-gray-700 hover:underline cursor-pointer text-xs">Udaipur hotels</p>
    </div>

    {/* Column 4 */}
    <div className="space-y-2">
      <p className="text-gray-700 hover:underline cursor-pointer text-xs">Ooty hotels</p>
      <p className="text-gray-700 hover:underline cursor-pointer text-xs">Varanasi hotels</p>
      <p className="text-gray-700 hover:underline cursor-pointer text-xs">Rishīkesh hotels</p>
      <p className="text-gray-700 hover:underline cursor-pointer text-xs">New Delhi hotels</p>
      <p className="text-gray-700 hover:underline cursor-pointer text-xs">Kolkata hotels</p>
    </div>

    {/* Column 5 */}
    <div className="space-y-2">
      <p className="text-gray-700 hover:underline cursor-pointer text-xs">Jaipur hotels</p>
      <p className="text-gray-700 hover:underline cursor-pointer text-xs">Chennai hotels</p>
      <p className="text-gray-700 hover:underline cursor-pointer text-xs">Ayodhya hotels</p>
      <p className="text-gray-700 hover:underline cursor-pointer text-xs">Alleppey hotels</p>
      <p className="text-gray-700 hover:underline cursor-pointer text-xs">Mussoorie hotels</p>
    </div>
  </div>
   {/* Show More Button */}
  <div className="mt-4 ">
    <button className="text-blue-600 font-medium hover:underline">
      + Show more
    </button>
  </div>
    <div className="mt-6 text-center text-xs text-gray-600 flex flex-wrap justify-center gap-2">
    <span>Countries</span> •
    <span>Regions</span> •
    <span>Cities</span> •
    <span>Districts</span> •
    <span>Airports</span> •
    <span>Hotels</span> •
    <span>Places of interest</span> •
    <span>Holiday Homes</span> •
    <span>Apartments</span> •
    <span>Resorts</span> •
    <span>Villas</span> •
    <span>Hostels</span> •
    <span>B&Bs</span> •
    <span>Guest Houses</span> •
    <span>Unique places to stay</span> •
    <span>All destinations</span> •
    <span>All flight destinations</span> •
    <span>All car hire locations</span> •
    <span>All holiday destinations</span> •
    <span>Guides</span> •
    <span>Discover</span> •
    <span>Reviews</span> •
    <span>Discover monthly stays</span>
  </div>
</section>
<footer className="bg-[#f5f5f5] w-full mt-4 py-4 px-[200px]">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
    
    {/* Column 1 */}
    <div>
      <h3 className="font-bold text-ml mb-4">Support</h3>
      <ul className="space-y-2 text-sm text-gray-800">
        <li className="hover:underline cursor-pointer">Coronavirus (COVID-19) FAQs</li>
        <li className="hover:underline cursor-pointer">Manage your trips</li>
        <li className="hover:underline cursor-pointer">Contact Customer Service</li>
        <li className="hover:underline cursor-pointer">Safety resource centre</li>
      </ul>
    </div>

    {/* Column 2 */}
    <div>
      <h3 className="font-bold text-ml mb-4">Discover</h3>
      <ul className="space-y-2 text-sm text-gray-800">
        <li className="hover:underline cursor-pointer">Genius loyalty programme</li>
        <li className="hover:underline cursor-pointer">Seasonal and holiday deals</li>
        <li className="hover:underline cursor-pointer">Travel articles</li>
        <li className="hover:underline cursor-pointer">Booking.com for Business</li>
        <li className="hover:underline cursor-pointer">Traveller Review Awards</li>
        <li className="hover:underline cursor-pointer">Car hire</li>
        <li className="hover:underline cursor-pointer">Flight finder</li>
        <li className="hover:underline cursor-pointer">Restaurant reservations</li>
        <li className="hover:underline cursor-pointer">Booking.com for Travel Agents</li>
      </ul>
    </div>

    {/* Column 3 */}
    <div>
      <h3 className="font-bold text-ml mb-4">Terms and settings</h3>
      <ul className="space-y-2 text-sm text-gray-800">
        <li className="hover:underline cursor-pointer">Privacy & cookies</li>
        <li className="hover:underline cursor-pointer">Terms and conditions</li>
        <li className="hover:underline cursor-pointer">Accessibility Statement</li>
        <li className="hover:underline cursor-pointer">Grievance officer</li>
        <li className="hover:underline cursor-pointer">Modern Slavery Statement</li>
        <li className="hover:underline cursor-pointer">Human Rights Statement</li>
      </ul>
    </div>

    {/* Column 4 */}
    <div>
      <h3 className="font-bold text- ml mb-4">Partners</h3>
      <ul className="space-y-2 text-sm text-gray-800">
        <li className="hover:underline cursor-pointer">Extranet login</li>
        <li className="hover:underline cursor-pointer">Partner help</li>
        <li className="hover:underline cursor-pointer">List your property</li>
        <li className="hover:underline cursor-pointer">Become an affiliate</li>
      </ul>
    </div>

    {/* Column 5 */}
    <div>
      <h3 className="font-bold text-ml mb-4">About</h3>
      <ul className="space-y-2 text-sm text-gray-800">
        <li className="hover:underline cursor-pointer">About Booking.com</li>
        <li className="hover:underline cursor-pointer">How we work</li>
        <li className="hover:underline cursor-pointer">Sustainability</li>
        <li className="hover:underline cursor-pointer">Press centre</li>
        <li className="hover:underline cursor-pointer">Manage your trips</li>
        <li className="hover:underline cursor-pointer">Careers</li>
        <li className="hover:underline cursor-pointer">Investor relations</li>
        <li className="hover:underline cursor-pointer">Corporate contact</li>
      </ul>
    </div>

  </div>
  {/* Bottom Row */}
  <div className="flex justify-between items-center mt-6 ">
    {/* Country Logo */}
    <div className="flex items-center gap-8">
      <img 
        src="https://flagcdn.com/w40/in.png" 
        alt="India Flag" 
        className="w-8 h-8 rounded-full border border-gray-300"
      />
      <p className="text-ml font-semibold text-black">INR</p>
    </div>
  </div>
  {/* Divider */}
<hr className="my-6 border-t border-gray-300" />

{/* Copyright */}
<p className="text-xs text-gray-600 text-center px-4">
  Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services. <br />
  Copyright © 1996–2025 Booking.com™. All rights reserved.
</p>

{/* Logos Row */}
<div className="grid grid-cols-2 sm:grid-cols-5  items-center  justify-items-center mt-6 px-[300px]">
  <img 
    src="https://vr-dining.nl/wp-content/uploads/2017/11/1280px-Booking.com_logo.svg.png" 
    alt="Booking Holdings" 
    className="h-4 object-contain"
  />
  <img 
    src="https://kscorn.com/wp-content/uploads/2021/01/Priceline_Logo_RGB_Blue_2019-1-1-e1611681614313.png" 
    alt="Kayak" 
    className="h-5 object-contain"
  />
  <img 
    src="https://logos-world.net/wp-content/uploads/2021/03/Kayak-Logo-2004-2017.png" 
    alt="Priceline" 
    className="h-8 object-contain"
  />
  <img 
    src="https://www.lehladakhtaxis.com/img/best-hotels-leh-ladakh/logo-agoda.png" 
    alt="Agoda" 
    className="h-8 object-contain"
  />
  <img 
    src="https://www.clipartmax.com/png/middle/321-3215558_opentable-icon-open-table-logo-white.png" 
    alt="Agoda" 
    className="h-8 object-contain"
  />
</div>

</footer>






    </div>
    
  );
}
