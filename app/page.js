"use client";
import Image from "next/image";
import { Menu, X } from "lucide-react"; 

import { useState, useEffect, useRef } from "react"
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style
import "react-date-range/dist/theme/default.css"; // theme

import { ChevronLeft, ChevronRight } from "lucide-react";



export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  // checkin-checkout
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");

  const [open, setOpen] = useState(false);
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  //curosal 
  const properties = [
    {
      name: "Hotels",
      img: "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595550862.jpeg?k=3514aa4abb76a6d19df104cb307b78b841ac0676967f24f4b860d289d55d3964&o=",
    },
    {
      name: "Apartments",
      img: "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o=",
    },
    {
      name: "Resorts",
      img: "https://q-xx.bstatic.com/xdata/images/hotel/263x210/595551044.jpeg?k=262826efe8e21a0868105c01bf7113ed94de28492ee370f4225f00d1de0c6c44&o=",
    },
    {
      name: "Villas",
      img: "https://q-xx.bstatic.com/xdata/images/hotel/263x210/620168315.jpeg?k=300d8d8059c8c5426ea81f65a30a7f93af09d377d4d8570bda1bd1f0c8f0767f&o=",
    },
    {
      name: "Campgrounds",
      img: "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595549938.jpeg?k=88e50f4acf09b4edc03ca94818723b3baca6eeaf49bf318edf8dc6690775c480&o=",
    },
    {
      name: "Luxury Tents",
      img: "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595550925.jpeg?k=c0db68290ad93f4dea18b95395397a874a8801159fb4d6308bd6164ebcd28a11&o=",
    },
  ];

  const [propertyIndex, setPropertyIndex] = useState(0);

  const nextProperty = () => {
    if (propertyIndex < properties.length - 4) setPropertyIndex(propertyIndex + 1);
  };
  const prevProperty = () => {
    if (propertyIndex > 0) setPropertyIndex(propertyIndex - 1);
  };
  //curosal end//
//curosal explore india//
  const cities = [
  {
    name: "New Delhi",
    img: "https://q-xx.bstatic.com/xdata/images/city/170x136/990313.jpg?k=940929beb89e058f8a4d60b605795d4424c2b4ea9463ecf102fa81dac2ab549e&o=",
    properties: "4,666 properties",
  },
  {
    name: "Bangalore",
    img: "https://q-xx.bstatic.com/xdata/images/city/170x136/990511.jpg?k=7a4ae0bcd342f9872b523ebc2463f973abe541c7f94d127dfe5a33a243c68234&o=",
    properties: "3,176 properties",
  },
  {
    name: "Mumbai",
    img: "https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=",
    properties: "1,999 properties",
  },
  {
    name: "Chennai",
    img: "https://cf.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o=",
    properties: "1,356 properties",
  },
  {
    name: "Varanasi",
    img: "https://q-xx.bstatic.com/xdata/images/city/170x136/684940.jpg?k=f8eb21b5c72289407585cef7ff7cfc99798ac9238398d7b27c6929ad6c54f78a&o=",
    properties: "2,345 properties",
  },
  {
    name: "Hyderabad",
    img: "https://r-xx.bstatic.com/xdata/images/city/170x136/684653.jpg?k=306ccafcc8a4a7e23b9e8a05b183453fe885b312a4daa5ce76ec39a1b79cbc6f&o=",
    properties: "1,876 properties",
  },
  {
    name: "Kolkata",
    img: "https://r-xx.bstatic.com/xdata/images/city/170x136/684571.jpg?k=2166dfd3192f12497a35d57434f14f2f9175eca9e2698b04eeb827064c3c9d4d&o=",
    properties: "2,210 properties",
  },
  {
    name: "Munnar",
    img: "https://r-xx.bstatic.com/xdata/images/city/170x136/684720.jpg?k=fdb1d9397eeb9b17d4a1ef6fdf806e6b4366d5ebda38d7f0c212b9c1bec8dcea&o=",
    properties: "1,543 properties",
  },
  {
    name: "Cochin",
    img: "https://r-xx.bstatic.com/xdata/images/city/170x136/684572.jpg?k=f74af2be72834d9953c8096834db666c7769c5f6c1ba230d6fe5591ba84dd33d&o=",
    properties: "3,654 properties",
  },
];
  const [cityIndex, setCityIndex] = useState(0);

  const nextCity = () => {
    if (cityIndex < cities.length - 6) setCityIndex(cityIndex + 1);
  };
  const prevCity = () => {
    if (cityIndex > 0) setCityIndex(cityIndex - 1);
  };

//end curosal (explore india)

//tab start 

const [activeTab, setActiveTab] = useState("Cultural Exploration");


const categories = [
"Cultural Exploration",
"Festivals",
"Food & Culinary",
"Historical Tours",
"Yoga & Wellness",
"Hill Stations",
"Beach Holidays",

];


const destinations = {
"Cultural Exploration": [
{
name: "Udaipur",
distance: "1,354 km from Bangalore",
image:
"https://r-xx.bstatic.com/xdata/images/city/170x136/684938.jpg?k=9d07ff707ce59768769b5e9a5381a4c705d921209dafd8fd0e2f1a6acdf0c68a&o=",
},
{
name: "Kolkata",
distance: "1,560 km from Bangalore",
image:
"https://q-xx.bstatic.com/xdata/images/city/170x136/684571.jpg?k=2166dfd3192f12497a35d57434f14f2f9175eca9e2698b04eeb827064c3c9d4d&o=",
},
{
name: "Jaipur",
distance: "1,561 km from Bangalore",
image:
"https://q-xx.bstatic.com/xdata/images/city/170x136/684657.jpg?k=66dc5035b43e9bb86b756e381e4fec2558064af4a63a8af17836725a854c03ee&o=",
},
{
name: "Amritsar",
distance: "2,093 km from Bangalore",
image:
"https://q-xx.bstatic.com/xdata/images/city/170x136/684520.jpg?k=9c132986036f4aa8d7d1d1dd915509deed7b6285742b34f137b67e8f9db04af1&o=",
},
{
name: "Cochin",
distance: "364 km from Bangalore",
image:
"https://q-xx.bstatic.com/xdata/images/city/170x136/684572.jpg?k=f74af2be72834d9953c8096834db666c7769c5f6c1ba230d6fe5591ba84dd33d&o=",
},
{
name: "Gokarna",
distance: "395 km from Bangalore",
image:
"https://r-xx.bstatic.com/xdata/images/city/170x136/948123.jpg?k=887e4933b8b622412ddeeb4fbbe94daf92d25939524e789150e8f5f2d6dec066&o=",
},
],
Festivals: [
{
name: "Chennai",
distance: "519 km from Chennai",
image:
"https://q-xx.bstatic.com/xdata/images/city/170x136/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o=",
},
{
name: "Mumbai",
distance: "629 km from Mumbai",
image:
"https://r-xx.bstatic.com/xdata/images/city/170x136/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=",
},
{
name: "Bhubaneshwar",
distance: "1,561 km ",
image:
"https://r-xx.bstatic.com/xdata/images/city/170x136/684547.jpg?k=4ba42ba95af757b38c45f361860ddbbda0f6d9e63bc85aa7edebc7543fc7c310&o=",
},
{
name: "Ahmedabad",
distance: "2,093 km",
image:
"https://q-xx.bstatic.com/xdata/images/city/170x136/684515.jpg?k=cf7fecf7e8b51638d173d23a0954bf9dd20d98088f9fb5d38a3017fe6880aed3&o=",
},
{
name: "Varanasi",
distance: "364 km",
image:
"https://r-xx.bstatic.com/xdata/images/city/170x136/990511.jpg?k=7a4ae0bcd342f9872b523ebc2463f973abe541c7f94d127dfe5a33a243c68234&o=",
},
{
name: "Lucknow",
distance: "395 km ",
image:
"https://r-xx.bstatic.com/xdata/images/city/170x136/684683.jpg?k=698b609dd05f38097716054efd8aa7f0af75bee3a241e411e72d8710cc80e020&o=",
},
],
"Food & Culinary": [  //FOOD & CULINARY ///
{
name: "Puri",
distance: "1,354 km ",
image:
"https://q-xx.bstatic.com/xdata/images/city/170x136/684799.jpg?k=397354c65103bbb54623a26a643e9eec8ca14d7de26a260d84c3b0201404fd02&o=",
},
{
name: "Old Goa",
distance: "1,560 km ",
image:
"https://r-xx.bstatic.com/xdata/images/city/170x136/993128.jpg?k=9de52bfdb0032d0f0405156f734db8ded81e767d1df47bcfc8a14e1169aeec7f&o=",
},
{
name: "Pondicherry",
distance: "1,561 km",
image:
"https://q-xx.bstatic.com/xdata/images/city/170x136/684769.jpg?k=146b18e42b9eb74078f2e80e07e573e8dbac879208b86bae451f99882f566a99&o=",
},
{
name: "Alleppey",
distance: "2,093 km ",
image:
"https://q-xx.bstatic.com/xdata/images/city/170x136/684514.jpg?k=94a24874ade1e734dd61fa72b85a246a86a682b1e6e8a0e257cf82ad151ed1f0&o==",
},
{
name: "Mysore",
distance: "364 km ",
image:
"https://q-xx.bstatic.com/xdata/images/city/170x136/684572.jpg?k=f74af2be72834d9953c8096834db666c7769c5f6c1ba230d6fe5591ba84dd33d&o=",
},
{
name: "Gokarna",
distance: "395 km ",
image:
"https://r-xx.bstatic.com/xdata/images/city/170x136/948123.jpg?k=887e4933b8b622412ddeeb4fbbe94daf92d25939524e789150e8f5f2d6dec066&o=",
},
],

"Yoga & Wellness": [   //
{
name: "Udaipur",
distance: "1,354 km ",
image:
"https://r-xx.bstatic.com/xdata/images/city/170x136/684938.jpg?k=9d07ff707ce59768769b5e9a5381a4c705d921209dafd8fd0e2f1a6acdf0c68a&o=",
},
{
name: "Kolkata",
distance: "1,560 km",
image:
"https://q-xx.bstatic.com/xdata/images/city/170x136/684571.jpg?k=2166dfd3192f12497a35d57434f14f2f9175eca9e2698b04eeb827064c3c9d4d&o=",
},
{
name: "Jaipur",
distance: "1,561 km ",
image:
"https://q-xx.bstatic.com/xdata/images/city/170x136/684657.jpg?k=66dc5035b43e9bb86b756e381e4fec2558064af4a63a8af17836725a854c03ee&o=",
},
{
name: "Amritsar",
distance: "2,093 km",
image:
"https://q-xx.bstatic.com/xdata/images/city/170x136/684520.jpg?k=9c132986036f4aa8d7d1d1dd915509deed7b6285742b34f137b67e8f9db04af1&o=",
},
{
name: "Greater Noida",
distance: "364 km ",
image:
"https://q-xx.bstatic.com/xdata/images/city/170x136/909083.jpg?k=450ef74bfe47149f8c1f69645d5884000aca4bcc529169891163e0487afe8615&o=",
},
{
name: "Dwaraka",
distance: "395 km",
image:
"https://q-xx.bstatic.com/xdata/images/city/170x136/909083.jpg?k=450ef74bfe47149f8c1f69645d5884000aca4bcc529169891163e0487afe8615&o=",
},
],
"Hill Stations": [
{
name: "Faridabad",
distance: "1,354 km ",
image:
"https://r-xx.bstatic.com/xdata/images/city/170x136/988693.jpg?k=dac3e4b5742018a708c6545aa141e326e40d27543d26073a8856e6a66d5170af&o=",
},
{
name: "Kolkata",
distance: "1,560 km ",
image:
"https://q-xx.bstatic.com/xdata/images/city/170x136/684571.jpg?k=2166dfd3192f12497a35d57434f14f2f9175eca9e2698b04eeb827064c3c9d4d&o=",
},
{
name: "Jaipur",
distance: "1,561 km ",
image:
"https://q-xx.bstatic.com/xdata/images/city/170x136/684657.jpg?k=66dc5035b43e9bb86b756e381e4fec2558064af4a63a8af17836725a854c03ee&o=",
},
{
name: "Amritsar",
distance: "2,093 km ",
image:
"https://q-xx.bstatic.com/xdata/images/city/170x136/684520.jpg?k=9c132986036f4aa8d7d1d1dd915509deed7b6285742b34f137b67e8f9db04af1&o=",
},
{
name: "Cochin",
distance: "364 km ",
image:
"https://q-xx.bstatic.com/xdata/images/city/170x136/684572.jpg?k=f74af2be72834d9953c8096834db666c7769c5f6c1ba230d6fe5591ba84dd33d&o=",
},
{
name: "Gokarna",
distance: "395 km ",
image:
"https://r-xx.bstatic.com/xdata/images/city/170x136/948123.jpg?k=887e4933b8b622412ddeeb4fbbe94daf92d25939524e789150e8f5f2d6dec066&o=",
},
],

"Historical Tours": [   //
{
name: "Udaipur",
distance: "1,354 km ",
image:
"https://r-xx.bstatic.com/xdata/images/city/170x136/684938.jpg?k=9d07ff707ce59768769b5e9a5381a4c705d921209dafd8fd0e2f1a6acdf0c68a&o=",
},
{
name: "Kolkata",
distance: "1,560 km ",
image:
"https://q-xx.bstatic.com/xdata/images/city/170x136/684571.jpg?k=2166dfd3192f12497a35d57434f14f2f9175eca9e2698b04eeb827064c3c9d4d&o=",
},
{
name: "Jaipur",
distance: "1,561 km ",
image:
"https://q-xx.bstatic.com/xdata/images/city/170x136/684657.jpg?k=66dc5035b43e9bb86b756e381e4fec2558064af4a63a8af17836725a854c03ee&o=",
},
{
name: "Amritsar",
distance: "2,093 km ",
image:
"https://q-xx.bstatic.com/xdata/images/city/170x136/684520.jpg?k=9c132986036f4aa8d7d1d1dd915509deed7b6285742b34f137b67e8f9db04af1&o=",
},
{
name: "Cochin",
distance: "364 km ",
image:
"https://q-xx.bstatic.com/xdata/images/city/170x136/684572.jpg?k=f74af2be72834d9953c8096834db666c7769c5f6c1ba230d6fe5591ba84dd33d&o=",
},
{
name: "Gokarna",
distance: "395 km ",
image:
"https://r-xx.bstatic.com/xdata/images/city/170x136/948123.jpg?k=887e4933b8b622412ddeeb4fbbe94daf92d25939524e789150e8f5f2d6dec066&o=",
},
],
"Hill Stations": [
{
name: "Udaipur",
distance: "1,354 km ",
image:
"https://r-xx.bstatic.com/xdata/images/city/170x136/684938.jpg?k=9d07ff707ce59768769b5e9a5381a4c705d921209dafd8fd0e2f1a6acdf0c68a&o=",
},
{
name: "Kolkata",
distance: "1,560 km ",
image:
"https://q-xx.bstatic.com/xdata/images/city/170x136/684571.jpg?k=2166dfd3192f12497a35d57434f14f2f9175eca9e2698b04eeb827064c3c9d4d&o=",
},
{
name: "Jaipur",
distance: "1,561 km ",
image:
"https://q-xx.bstatic.com/xdata/images/city/170x136/684657.jpg?k=66dc5035b43e9bb86b756e381e4fec2558064af4a63a8af17836725a854c03ee&o=",
},
{
name: "Amritsar",
distance: "2,093 km ",
image:
"https://q-xx.bstatic.com/xdata/images/city/170x136/684520.jpg?k=9c132986036f4aa8d7d1d1dd915509deed7b6285742b34f137b67e8f9db04af1&o=",
},
{
name: "Cochin",
distance: "364 km ",
image:
"https://q-xx.bstatic.com/xdata/images/city/170x136/684572.jpg?k=f74af2be72834d9953c8096834db666c7769c5f6c1ba230d6fe5591ba84dd33d&o=",
},
{
name: "Gokarna",
distance: "395 km ",
image:
"https://r-xx.bstatic.com/xdata/images/city/170x136/948123.jpg?k=887e4933b8b622412ddeeb4fbbe94daf92d25939524e789150e8f5f2d6dec066&o=",
},
],

"Beach Holidays": [
{
name: "Mahabalipuram",
distance: "1,354 km ",
image:
"hhttps://r-xx.bstatic.com/xdata/images/city/170x136/786904.jpg?k=ded708831ab55bb2a028de7bf266af5f81aa051832a7ca7f5e3c7a5a6230ae91&o=",
},
{
name: "Rameswaram",
distance: "1,560 km ",
image:
"https://q-xx.bstatic.com/xdata/images/city/170x136/942474.jpg?k=e2fcd577909196cad44abfca965b94cb2959940424da2f8e2be28b96555703e5&o=",
},
{
name: "Rishikesh",
distance: "1,561 km ",
image:
"https://r-xx.bstatic.com/xdata/images/city/170x136/684880.jpg?k=e39b50ba8be4c6c6c413c963af6e0d452dbe0decaf72e13f9f798e65de549107&o=",
},
{
name: "Amritsar",
distance: "2,093 km",
image:
"https://q-xx.bstatic.com/xdata/images/city/170x136/684520.jpg?k=9c132986036f4aa8d7d1d1dd915509deed7b6285742b34f137b67e8f9db04af1&o=",
},
{
name: "Ooty",
distance: "364 km ",
image:
"https://q-xx.bstatic.com/xdata/images/city/170x136/684919.jpg?k=0a73fce29109503c055e288c413d9a1c5bd66fdb26f01c1438e8017b0b64b42f&o=",
},
{
name: "Munnar",
distance: "395 km ",
image:
"https://q-xx.bstatic.com/xdata/images/city/170x136/684720.jpg?k=fdb1d9397eeb9b17d4a1ef6fdf806e6b4366d5ebda38d7f0c212b9c1bec8dcea&o=",
},
],
};
// end of tab

//tab start
const [selectedCategory, setSelectedCategory] = useState("domestic");

  const tabs = [
    { id: "domestic", label: "Domestic cities" },
    { id: "international", label: "International cities" },
    { id: "regions", label: "Regions" },
    { id: "countries", label: "Countries" },
    { id: "places", label: "Places to stay" },
  ];
const tabData = {
    domestic: [
      ["Srinagar hotels", "Hyderabad hotels", "Varkala hotels", "Mysore hotels", "Shimla hotels"],
      ["Mumbai hotels", "Puri hotels", "Munnar hotels", "Cochin hotels", "Gokarna hotels"],
      ["Bengaluru hotels", "Puducherry hotels", "Lonavala hotels", "Pune hotels", "Udaipur hotels"],
      ["Ooty hotels", "Varanasi hotels", "Rishīkesh hotels", "New Delhi hotels", "Kolkata hotels"],
      ["Jaipur hotels", "Chennai hotels", "Ayodhya hotels", "Alleppey hotels", "Mussoorie hotels"],
    ],
    international: [
      ["Dubai hotels", "Singapore hotels", "Bangkok hotels", "London hotels", "New York hotels"],
      ["Paris hotels", "Bali hotels", "Istanbul hotels", "Maldives hotels", "Kuala Lumpur hotels"],
      ["Rome hotels", "Sydney hotels", "Los Angeles hotels", "Toronto hotels", "Barcelona hotels"],
      ["Amsterdam hotels", "Vienna hotels", "Berlin hotels", "Tokyo hotels", "Hong Kong hotels"],
      ["Cape Town hotels", "Athens hotels", "Zurich hotels", "Doha hotels", "San Francisco hotels"],
    ],
    regions: [
      ["Goa region", "Kerala region", "Rajasthan region", "Himachal Pradesh region", "Uttarakhand region"],
      ["Andaman & Nicobar", "Ladakh", "Karnataka region", "Tamil Nadu region", "Gujarat region"],
      ["Dubai hotels", "Singapore hotels", "Bangkok hotels", "London hotels", "New York hotels"],
      ["Paris hotels", "Bali hotels", "Istanbul hotels", "Maldives hotels", "Kuala Lumpur hotels"],
      ["Rome hotels", "Sydney hotels", "Los Angeles hotels", "Toronto hotels", "Barcelona hotels"],
    ],
    countries: [
      ["India", "United Arab Emirates", "Singapore", "Thailand", "United States"],
      ["United Kingdom", "France", "Australia", "Canada", "Italy"],
      ["Srinagar hotels", "Hyderabad hotels", "Varkala hotels", "Mysore hotels", "Shimla hotels"],
      ["Mumbai hotels", "Puri hotels", "Munnar hotels", "Cochin hotels", "Gokarna hotels"],
      ["Bengaluru hotels", "Puducherry hotels", "Lonavala hotels", "Pune hotels", "Udaipur hotels"],
    ],
    places: [
      ["Hotels", "Apartments", "Resorts", "Villas", "Hostels"],
      ["B&Bs", "Guest Houses", "Holiday Homes", "Unique places to stay", "Monthly stays"],
      ["Goa region", "Kerala region", "Rajasthan region", "Himachal Pradesh region", "Uttarakhand region"],
      ["Andaman & Nicobar", "Ladakh", "Karnataka region", "Tamil Nadu region", "Gujarat region"],
      ["Dubai hotels", "Singapore hotels", "Bangkok hotels", "London hotels", "New York hotels"],
    ],
  }; // end of tab


  //where are you going.?

  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
  };
  const [showLocations, setShowLocations] = useState(false);
  const [location, setLocation] = useState("");
  const [showGuests, setShowGuests] = useState(false);

  const locations = ["New Delhi", "Mumbai", "Bangalore", "Goa", "Hyderabad"];

  //Drop down for adults , children and rooms

    const [showGuests1, setShowGuests1] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);


     const handleIncrement = (setter, value) => {
    setter(value + 1);
  };

  // decrement helper (with min value)
  const handleDecrement = (setter, value, min) => {
    if (value > min) {
      setter(value - 1);
    }
  };


  //end of dropdown

  return (
    <div>
      {/* Blue Section */}
    <div className="w-full bg-[#003b95] text-white pb-20 relative">
      <div className="w-full px-0 md:px-[200px]">
        {/* =================== HEADER =================== */}
        <header className="flex justify-between items-center py-4 px-2 md:px-0">
          <div className="font-bold text-xl md:text-2xl">Booking.com</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-row items-center gap-4 text-sm md:text-base">
            <div>INR</div>
            <img
              src="https://flagcdn.com/w20/in.png"
              alt="India"
              className="w-6 h-6 rounded-full border border-white"
            />
            <Image
              src="https://cdn-icons-png.flaticon.com/128/471/471664.png"
              alt="bed"
              width={24}
              height={24}
              className="invert"
            />
            <div className="cursor-pointer">List your property</div>
            <button className="bg-white text-[#003b95] rounded-lg px-4 py-2">
              Register
            </button>
            <button className="bg-white text-[#003b95] rounded-lg px-4 py-2">
              Sign in
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {menuOpen && (
              <div className="absolute right-2 top-14 bg-white text-black rounded-lg shadow-lg p-4 w-48 space-y-3 z-50">
                <div className="cursor-pointer">INR</div>
                <div className="flex items-center gap-2">
                  <img
                    src="https://flagcdn.com/w20/in.png"
                    alt="India"
                    className="w-5 h-5 rounded-full border border-gray-400"
                  />
                  India
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/128/471/471664.png"
                    alt="bed"
                    width={20}
                    height={20}
                    className="invert"
                  />
                  List your property
                </div>
                <button className="w-full bg-[#003b95] text-white rounded-lg px-3 py-2">
                  Register
                </button>
                <button className="w-full bg-[#003b95] text-white rounded-lg px-3 py-2">
                  Sign in
                </button>
              </div>
            )}
          </div>
        </header>

        {/* =================== NAV ROW =================== */}
        <nav className="flex gap-3 md:gap-6 py-3 md:py-4 overflow-x-auto px-2 md:px-0 text-sm md:text-base scrollbar-hide">
          {[
            { icon: "3030/3030336", text: "Stay" },
            { icon: "10522/10522359", text: "Flights" },
            { icon: "9494/9494754", text: "Flight + Hotel" },
            { icon: "15511/15511982", text: "Car Rental" },
            { icon: "7457/7457517", text: "Attractions" },
            { icon: "13223/13223678", text: "Airport Taxis" },
          ].map((item) => (
            <div
              key={item.text}
              className={`flex items-center gap-1 md:gap-2 px-3 md:px-4 py-1 md:py-2 flex-shrink-0 rounded-[30px] ${
                item.text === "Stay" ? "border" : ""
              }`}
            >
              <Image
                src={`https://cdn-icons-png.flaticon.com/128/${item.icon}.png`}
                alt={item.text}
                width={18}
                height={18}
                className="invert md:w-6 md:h-6"
              />
              {item.text}
            </div>
          ))}
        </nav>

        {/* =================== HERO SECTION =================== */}
        <section className="mt-4 mb-3 px-2 md:px-0">
          <h1 className="text-lg md:text-5xl font-bold">Find your next stay</h1>
          <p className="mt-1 text-gray-200 text-xs md:text-xl">
            Search deals on hotels, homes, and much more...
          </p>
        </section>
      </div>

      {/* =================== SEARCH BAR =================== */}
      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-full flex justify-center px-2 md:px-4">
        <div className="flex flex-col md:flex-row w-full max-w-[320px] md:max-w-6xl border-[2px] md:border-[5px] border-[#ffb700] rounded-lg bg-white text-black text-xs md:text-base">
          {/* Destination */}
          <div
            onClick={() => setShowLocations(!showLocations)}
            className="flex items-center gap-2 px-2 py-2 md:px-4 md:py-3 flex-1 cursor-pointer"
          >
            <Image
              src="https://cdn-icons-png.flaticon.com/128/3030/3030336.png"
              alt="bed"
              width={18}
              height={18}
              className="md:w-6 md:h-6"
            />
            <span className="truncate">
              {location || "Where are you going?"}
            </span>
          </div>

          {showLocations && (
            <ul className="absolute mt-14 w-48 md:w-64 bg-white text-black shadow-lg rounded-lg z-10 text-xs md:text-base">
              {locations.map((loc) => (
                <li
                  key={loc}
                  className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
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
          <div className="flex items-center gap-2 md:gap-4 p-2 md:p-4 border-t md:border-t-0 md:border-l">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/10692/10692577.png"
              alt="calendar"
              width={18}
              height={18}
              className="md:w-6 md:h-6"
            />
            <div className="flex flex-col">
              <label className="text-[10px] md:text-sm text-gray-600">
                Check-in
              </label>
              <input
                type="date"
                value={checkin}
                onChange={(e) => setCheckin(e.target.value)}
                className="border rounded px-1 py-1 md:px-2 md:py-1 text-[10px] md:text-sm cursor-pointer"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[10px] md:text-sm text-gray-600">
                Check-out
              </label>
              <input
                type="date"
                value={checkout}
                onChange={(e) => setCheckout(e.target.value)}
                className="border rounded px-1 py-1 md:px-2 md:py-1 text-[10px] md:text-sm cursor-pointer"
              />
            </div>
          </div>

          {/* Guests */}
          <div className="relative w-full md:max-w-sm border-t md:border-t-0 md:border-l flex justify-center">
            <div
              onClick={() => setShowGuests(!showGuests)}
              className="flex items-center gap-2 px-2 py-2 md:px-4 md:py-3 flex-1 cursor-pointer"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/128/747/747376.png"
                alt="man"
                width={18}
                height={18}
                className="md:w-6 md:h-6"
              />
              <span className="truncate">
                {adults} adults · {children} children · {rooms} room
              </span>
            </div>

            {showGuests && (
              <div className="absolute left-0 mt-2 w-48 md:w-64 bg-white shadow-lg rounded-lg p-2 md:p-4 space-y-2 md:space-y-4 z-50 text-xs md:text-base">
                {[
                  { label: "Adults", state: adults, setter: setAdults, min: 1 },
                  {
                    label: "Children",
                    state: children,
                    setter: setChildren,
                    min: 0,
                  },
                  { label: "Rooms", state: rooms, setter: setRooms, min: 1 },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center"
                  >
                    <span>{item.label}</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          handleDecrement(item.setter, item.state, item.min)
                        }
                        className="px-2 py-1 border rounded disabled:opacity-50"
                        disabled={item.state <= item.min}
                      >
                        -
                      </button>
                      <span>{item.state}</span>
                      <button
                        onClick={() =>
                          handleIncrement(item.setter, item.state)
                        }
                        className="px-2 py-1 border rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Search Button */}
          <button className="bg-blue-600 text-white font-semibold px-3 py-2 md:px-6 md:py-3 w-full md:w-40 border-t md:border-t-0 md:border-l border-[#ffb700] text-sm md:text-base">
            Search
          </button>
        </div>
      </div>
    </div>

      {/* Below Blue Section */}
<div className="bg-white overflow-y-auto w-[320px] h-[350px] md:w-full md:h-auto px-0 md:px-[200px] mt-6 md:mt-14">
  {/* Flights checkbox */}
  <div className="flex items-center gap-2 mb-4 md:mt-0 mt-16 px-2 md:px-0">
    <input type="checkbox" id="flights" className="w-4 h-4 md:w-5 md:h-5" />
    <label htmlFor="flights" className="text-sm md:text-base">
      I’m looking for flights
    </label>
  </div>

  {/* Offers Section */}
  <h2 className="text-lg md:text-2xl font-bold px-2 md:px-0">Offers</h2>
  <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 px-2 md:px-0">
    Promotions, deals, and special offers for you
  </p>

  {/* Two Column Section */}
<div className="px-2 md:px-0">
  {/* Wrapper: Scrollable in Mobile, Grid in Desktop */}
  <div className="flex md:grid md:grid-cols-2 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory">
    
    {/* Left Column with Background Image */}
    <div
      className="relative bg-cover bg-center h-40 md:h-40 rounded-lg overflow-hidden pt-6 md:pt-10 flex items-end flex-shrink-0 w-[280px] md:w-auto snap-start"
      style={{
        backgroundImage:
          "url('https://q-xx.bstatic.com/xdata/images/xphoto/814x138/535341132.jpeg?k=9adf4d98ff2d48c5745b37654d2d77e09169647b979dfda9c6baa54198b9fc6c&o=')",
      }}
    >
      <div className="text-white p-3 md:p-6 w-full">
        <p className="text-sm md:text-base">Vacation rentals</p>
        <h3 className="text-base md:text-xl font-bold">
          Live the dream in a vacation home
        </h3>
        <p className="mt-1 text-xs md:text-sm">
          Choose from houses, villas, cabins, and more
        </p>
        <button className="mt-3 md:mt-4 bg-blue-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-md text-xs md:text-base">
          Book yours
        </button>
      </div>
    </div>

    {/* Right Column with Border */}
    <div
      className="border border-gray-200 rounded-lg p-4 md:p-6 flex flex-row md:flex-row items-start md:items-center justify-between gap-3 md:gap-0 flex-shrink-0 w-[280px] md:w-auto snap-start"
    >
      {/* Left Side Text */}
      <div className="flex-1 pr-2">
        <h3 className="text-base md:text-xl font-bold">
          Quick escape, quality time
        </h3>
        <p className="mt-1 text-xs md:text-sm text-gray-500">
          Save up to 20% with a Getaway Deal
        </p>
        <button className="mt-3 md:mt-4 bg-blue-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-md text-xs md:text-base">
          Save on stays
        </button>
      </div>
      {/* Right Side Image */}
      <img
        src="https://r-xx.bstatic.com/xdata/images/xphoto/248x248/468828542.jpeg?k=b51cb74f05db0ebc1a1cbcca384fa2ee8c4d6c0b5fd089a15b1fd14a107ccab4&o="
        alt="Getaway"
        className="w-16 h-16 md:w-20 md:h-20 rounded-lg"
      />
    </div>
  </div>
</div>
</div>


    {/* TRENDING DESTINATIONS */}
<section className="px-2 md:px-[200px] mt-12">
  {/* Heading */}
  <h2 className="text-2xl md:text-3xl font-bold">Trending destinations</h2>
  <p className="text-gray-600 mb-4 text-sm md:text-base">
    Most popular choices for travelers from India
  </p>

  {/* Desktop View: unchanged */}
  <div className="hidden md:grid md:grid-cols-2 gap-5 mb-4">
    <div className="relative h-64 rounded-lg overflow-hidden bg-cover bg-center"
      style={{backgroundImage: "url('https://cf.bstatic.com/xdata/images/city/600x600/990313.jpg?k=940929beb89e058f8a4d60b605795d4424c2b4ea9463ecf102fa81dac2ab549e&o=')"}}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute top-4 left-4 flex items-center gap-2 text-white px-3 py-1 rounded-md text-2xl">
        <span className="font-bold">New Delhi</span>
        <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-5 h-5" />
      </div>
    </div>
    <div className="relative h-64 rounded-lg overflow-hidden bg-cover bg-center"
      style={{backgroundImage: "url('https://cf.bstatic.com/xdata/images/city/600x600/990511.jpg?k=7a4ae0bcd342f9872b523ebc2463f973abe541c7f94d127dfe5a33a243c68234&o=')"}}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute top-4 left-4 flex items-center gap-2 text-white px-3 py-1 rounded-md text-2xl">
        <span className="font-bold">Bangalore</span>
        <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-5 h-5" />
      </div>
    </div>
  </div>

  <div className="hidden md:grid md:grid-cols-3 gap-5">
    {[
      { name: "Mumbai", img: "https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" },
      { name: "Chennai", img: "https://cf.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o=" },
      { name: "Varanasi", img: "https://cf.bstatic.com/xdata/images/city/600x600/684940.jpg?k=f8eb21b5c72289407585cef7ff7cfc99798ac9238398d7b27c6929ad6c54f78a&o=" }
    ].map((city) => (
      <div key={city.name} className="relative h-64 rounded-lg overflow-hidden bg-cover bg-center" style={{backgroundImage: `url(${city.img})`}}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-4 left-4 flex items-center gap-2 text-white px-3 py-1 rounded-md text-2xl">
          <span className="font-bold">{city.name}</span>
          <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-5 h-5" />
        </div>
      </div>
    ))}
  </div>

  {/* Mobile View: one row, scroll horizontally, one image visible at a time */}
  <div className="md:hidden overflow-x-auto flex snap-x snap-mandatory">
    {[
      { name: "New Delhi", img: "https://cf.bstatic.com/xdata/images/city/600x600/990313.jpg?k=940929beb89e058f8a4d60b605795d4424c2b4ea9463ecf102fa81dac2ab549e&o=" },
      { name: "Bangalore", img: "https://cf.bstatic.com/xdata/images/city/600x600/990511.jpg?k=7a4ae0bcd342f9872b523ebc2463f973abe541c7f94d127dfe5a33a243c68234&o=" },
      { name: "Mumbai", img: "https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" },
      { name: "Chennai", img: "https://cf.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o=" },
      { name: "Varanasi", img: "https://cf.bstatic.com/xdata/images/city/600x600/684940.jpg?k=f8eb21b5c72289407585cef7ff7cfc99798ac9238398d7b27c6929ad6c54f78a&o=" }
    ].map((city) => (
      <div
        key={city.name}
        className="relative flex-shrink-0 w-[280px] h-40 rounded-lg overflow-hidden bg-cover bg-center snap-start mr-3 last:mr-0"
        style={{ backgroundImage: `url(${city.img})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-2 left-2 flex items-center gap-1 text-white px-2 py-1 rounded-md text-sm">
          <span className="font-bold">{city.name}</span>
          <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-3 h-3" />
        </div>
      </div>
    ))}
  </div>
</section>



{/* Browse by Property Type Section */}
<section className="px-2 md:px-[200px] mt-12 relative space-y-5">
  <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Browse by property type</h2>

  {/* Desktop View: arrows navigation */}
  <div className="hidden md:flex relative items-center">
    {propertyIndex > 0 && (
      <button
        onClick={prevProperty}
        className="absolute -left-12 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-100"
      >
        <ChevronLeft size={24} />
      </button>
    )}

    <div className="overflow-hidden w-full">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${propertyIndex * 25}%)` }}
      >
        {properties.map((property, i) => (
          <div key={i} className="w-1/4 flex-shrink-0 px-2">
            <div
              className="h-48 w-full rounded-lg overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${property.img})` }}
            ></div>
            <p className="mt-3 text-lg font-semibold text-left">{property.name}</p>
          </div>
        ))}
      </div>
    </div>

    {propertyIndex < properties.length - 4 && (
      <button
        onClick={nextProperty}
        className="absolute -right-12 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-100"
      >
        <ChevronRight size={24} />
      </button>
    )}
  </div>

  {/* Mobile View: horizontal scroll, one property visible */}
  <div className="md:hidden overflow-x-auto flex snap-x snap-mandatory">
    {properties.map((property, i) => (
      <div
        key={i}
        className="flex-shrink-0 w-[260px] mr-4 snap-start last:mr-0"
      >
        <div
          className="h-48 w-full rounded-lg overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${property.img})` }}
        ></div>
        <p className="mt-2 text-base font-semibold">{property.name}</p>
      </div>
    ))}
  </div>
</section>



   {/* //9(explore india)  */}
<section className="mt-12 px-2 md:px-[200px] relative">
  {/* Heading */}
  <h2 className="text-3xl font-bold">Explore India</h2>
  <p className="text-lg text-gray-600 mt-1">
    These popular destinations have a lot to offer
  </p>

  <div className="relative flex items-center mt-6">
    {/* Left arrow (desktop only) */}
    <div className="hidden md:block">
      {cityIndex > 0 && (
        <button
          onClick={prevCity}
          className="absolute -left-12 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-100"
        >
          <ChevronLeft size={24} />
        </button>
      )}
    </div>

    {/* Scrollable container */}
    <div
      className={`flex overflow-x-auto md:overflow-hidden w-full space-x-4 md:space-x-0 scrollbar-hide`}
    >
      <div
        className={`flex transition-transform duration-500 ease-in-out ${
          window.innerWidth >= 768 ? '' : ''
        }`}
        style={{
          transform:
            window.innerWidth >= 768
              ? `translateX(-${cityIndex * (100 / 6)}%)`
              : 'none',
        }}
      >
        {cities.map((city, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-full md:w-[calc(100%/6)] px-2"
          >
            <div
              className="h-40 md:h-40 w-full rounded-lg overflow-hidden bg-cover bg-center relative"
              style={{ backgroundImage: `url(${city.img})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>
            <p className="mt-2 text-ml font-semibold text-left">{city.name}</p>
            <p className="text-sm text-gray-600 text-left">{city.properties}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Right arrow (desktop only) */}
    <div className="hidden md:block">
      {cityIndex < cities.length - 6 && (
        <button
          onClick={nextCity}
          className="absolute -right-12 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-100"
        >
          <ChevronRight size={24} />
        </button>
      )}
    </div>
  </div>
</section>


{/* (Quick and  easy trip) */}
<section className="mt-12 px-2 md:px-[200px]">
  {/* Heading */}
  <h2 className="text-3xl font-bold">Quick and easy trip planner</h2>
  <p className="text-lg text-gray-600 mt-1">
    Pick a vibe and explore the top destinations in India
  </p>

  {/* Tabs */}
  <div className="mt-6">
    {/* Mobile scrollable tabs */}
    <div className="flex overflow-x-auto space-x-4 scrollbar-hide whitespace-nowrap md:flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveTab(cat)}
          className={`px-4 py-2 rounded-lg transition text-base font-medium ${
            activeTab === cat
              ? "bg-blue-600 text-white"
              : "text-gray-700 hover:bg-gray-200"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  </div>

  {/* Destinations Grid */}
  <div className="mt-8">
    {/* Mobile: horizontal scroll */}
    <div className="flex md:hidden overflow-x-auto space-x-4 scrollbar-hide">
      {destinations[activeTab]?.length > 0 ? (
        destinations[activeTab].map((dest, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-full sm:w-[calc(100%/2)] md:w-auto"
          >
            <div
              className="h-40 w-full rounded-lg overflow-hidden bg-cover bg-center relative"
              style={{ backgroundImage: `url(${dest.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>
            <p className="mt-2 text-lg font-semibold text-left">{dest.name}</p>
            <p className="text-sm text-gray-600 text-left">{dest.distance}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center w-full">Coming soon...</p>
      )}
    </div>

    {/* Desktop Grid */}
    <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {destinations[activeTab]?.length > 0 ? (
        destinations[activeTab].map((dest, idx) => (
          <div key={idx}>
            <div
              className="h-40 w-full rounded-lg overflow-hidden bg-cover bg-center relative"
              style={{ backgroundImage: `url(${dest.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>
            <p className="mt-2 text-lg font-semibold text-left">{dest.name}</p>
            <p className="text-sm text-gray-600 text-left">{dest.distance}</p>
          </div>
        ))
      ) : (
        <p className="col-span-full text-gray-500 text-center">
          Coming soon...
        </p>
      )}
    </div>
  </div>
</section>


<section className="mt-16 px-2 md:px-[200px]">
  {/* Heading */}
  <h2 className="text-2xl md:text-3xl font-bold">Deals for the weekend</h2>
  <p className="text-ml text-gray-600 mt-1">
    Save on stays for September 5 - September 7
  </p>

  {/* Mobile Scrollable Cards */}
  <div className="flex md:hidden overflow-x-auto space-x-4 mt-8 scrollbar-hide snap-x snap-mandatory">
    
    {/* Card 1 */}
    <div className="flex-shrink-0 w-[70%] snap-start">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
        <div className="relative h-50 w-full">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square240/517155203.jpg?k=803c27eb52e3e8b39508fd6975e72e9705273ff5ed8070074ea3de645d04764b&o=0"
            alt="Hampi nature cottage"
            className="w-full h-full object-cover"
          />
          <span className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
            <Image src="https://cdn-icons-png.flaticon.com/128/4675/4675168.png" alt="favorite" width={24} height={24}/>
          </span>
        </div>
        <div className="p-4">
          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">Genius</span>
          <h3 className="text-sm font-bold mt-2">Hampi Nature Cottage</h3>
          <p className="text-xs text-gray-500">Hampi, India</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="bg-blue-600 text-white text-sm font-semibold px-2 py-1 rounded">7.1</span>
            <div>
              <p className="text-xs font-semibold">Good</p>
              <p className="text-[10px] text-gray-500">48 reviews</p>
            </div>
          </div>
          <button className="mt-3 bg-green-600 text-white px-3 py-1 rounded text-xs">Getaway Deal</button>
          <div className="mt-4 flex justify-between items-center text-xs">
            <p>2 nights</p>
            <p className="text-red-600 line-through">₹6,200</p>
            <p className="font-bold text-sm">₹4,499</p>
          </div>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="flex-shrink-0 w-[70%] snap-start">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
        <div className="relative h-48 w-full">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/628649979.webp?k=48073b2a412407a2a32af63c7e43cd7293d7a9b9843e76e5827a2cce3e88572f&o="
            alt="Aurangabad Stay"
            className="w-full h-full object-cover"
          />
          <span className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
            <Image src="https://cdn-icons-png.flaticon.com/128/4675/4675168.png" alt="favorite" width={24} height={24}/>
          </span>
        </div>
        <div className="p-4">
          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">Genius</span>
          <h3 className="text-sm font-bold mt-2">Olive Hotel Benz Circle, Vijayawada</h3>
          <p className="text-xs text-gray-500">Vijayawāda, India</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="bg-blue-600 text-white text-sm font-semibold px-2 py-1 rounded">8.7</span>
            <div>
              <p className="text-xs font-semibold">Excellent</p>
              <p className="text-[10px] text-gray-500">90 reviews</p>
            </div>
          </div>
          <button className="mt-3 bg-green-600 text-white px-3 py-1 rounded text-xs">Getaway Deal</button>
          <div className="mt-4 flex justify-between items-center text-xs">
            <p>2 nights</p>
            <p className="text-red-600 line-through">₹7,538</p>
            <p className="font-bold text-sm">₹6,030</p>
          </div>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="flex-shrink-0 w-[70%] snap-start">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
        <div className="relative h-50 w-full">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square240/594730538.jpg?k=d3f3e4b89ccc993f8d1300adecb3bdbc96ac14aace535a77d917cca9205bc872&o="
            alt="Mysore Comfort"
            className="w-full h-full object-cover"
          />
          <span className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
            <Image src="https://cdn-icons-png.flaticon.com/128/4675/4675168.png" alt="favorite" width={24} height={24}/>
          </span>
        </div>
        <div className="p-4">
          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">Genius</span>
          <h3 className="text-sm font-bold mt-2">Hotel Aerotel, Hyderabad</h3>
          <p className="text-xs text-gray-500">Shamshabad, India</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="bg-blue-600 text-white text-sm font-semibold px-2 py-1 rounded">7.7</span>
            <div>
              <p className="text-xs font-semibold">Good</p>
              <p className="text-[10px] text-gray-500">100 reviews</p>
            </div>
          </div>
          <button className="mt-3 bg-green-600 text-white px-3 py-1 rounded text-xs">Getaway Deal</button>
          <div className="mt-4 flex justify-between items-center text-xs">
            <p>2 nights</p>
            <p className="text-red-600 line-through">₹6,963</p>
            <p className="font-bold text-sm">₹4,874</p>
          </div>
        </div>
      </div>
    </div>

    {/* Card 4 */}
    <div className="flex-shrink-0 w-[70%] snap-start">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
        <div className="relative h-50 w-full">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square240/638996196.jpg?k=f2982f3d24dd0bc3351b4952044784c5b06c85cfe1cdb5d22b5eefae03d93a8e&o="
            alt="Ajmer Retreat"
            className="w-full h-full object-cover"
          />
          <span className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
            <Image src="https://cdn-icons-png.flaticon.com/128/4675/4675168.png" alt="favorite" width={24} height={24}/>
          </span>
        </div>
        <div className="p-4">
          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">Genius</span>
          <h3 className="text-sm font-bold mt-2">The Hampi Cafe</h3>
          <p className="text-xs text-gray-500">Hampi, India</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="bg-blue-600 text-white text-sm font-semibold px-2 py-1 rounded">9.5</span>
            <div>
              <p className="text-xs font-semibold">Exceptional</p>
              <p className="text-[10px] text-gray-500">6 reviews</p>
            </div>
          </div>
          <button className="mt-3 bg-green-600 text-white px-3 py-1 rounded text-xs">Getaway Deal</button>
          <div className="mt-4 flex justify-between items-center text-xs">
            <p>2 nights</p>
            <p className="text-red-600 line-through">₹12,000</p>
            <p className="font-bold text-sm">₹10,800</p>
          </div>
        </div>
      </div>
    </div>

  </div>

 {/* Desktop Grid (unchanged) */}
<div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
  {/* Card 1 */}
  <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
    <div className="relative h-48 w-full">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square240/517155203.jpg?k=803c27eb52e3e8b39508fd6975e72e9705273ff5ed8070074ea3de645d04764b&o=0"
        alt="Hampi nature cottage"
        className="w-full h-full object-cover"
      />
      <span className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
        <Image src="https://cdn-icons-png.flaticon.com/128/4675/4675168.png" alt="favorite" width={24} height={24}/>
      </span>
    </div>
    <div className="p-4">
      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">Genius</span>
      <h3 className="text-ml font-bold mt-2">Hampi Nature Cottage</h3>
      <p className="text-gray-500 text-sm">Hampi, India</p>
      <div className="flex items-center gap-2 mt-2">
        <span className="bg-blue-600 text-white text-sm font-semibold px-2 py-1 rounded">7.1</span>
        <div>
          <p className="text-sm font-semibold">Good</p>
          <p className="text-xs text-gray-500">48 reviews</p>
        </div>
      </div>
      <button className="mt-3 bg-green-600 text-white px-3 py-1 rounded text-sm">Getaway Deal</button>
      <div className="mt-4 flex justify-between items-center">
        <p className="text-xs text-gray-500">2 nights</p>
        <p className="text-sm text-red-600 line-through">₹6,200</p>
        <p className="text-lg font-bold">₹4,499</p>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
    <div className="relative h-48 w-full">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/628649979.webp?k=48073b2a412407a2a32af63c7e43cd7293d7a9b9843e76e5827a2cce3e88572f&o="
        alt="Aurangabad Stay"
        className="w-full h-full object-cover"
      />
      <span className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
        <Image src="https://cdn-icons-png.flaticon.com/128/4675/4675168.png" alt="favorite" width={24} height={24}/>
      </span>
    </div>
    <div className="p-4">
      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">Genius</span>
      <h3 className="text-ml font-bold mt-2">Olive Hotel Benz Circle, Vijayawada by Embassy Group</h3>
      <p className="text-gray-500 text-sm">Vijayawāda, India</p>
      <div className="flex items-center gap-2 mt-2">
        <span className="bg-blue-600 text-white text-sm font-semibold px-2 py-1 rounded">8.7</span>
        <div>
          <p className="text-sm font-semibold">Excellent</p>
          <p className="text-xs text-gray-500">90 reviews</p>
        </div>
      </div>
      <button className="mt-3 bg-green-600 text-white px-3 py-1 rounded text-sm">Getaway Deal</button>
      <div className="mt-4 flex justify-between items-center">
        <p className="text-xs text-gray-500">2 nights</p>
        <p className="text-sm text-red-600 line-through">₹7,538</p>
        <p className="text-lg font-bold">₹6,030</p>
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
    <div className="relative h-48 w-full">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square240/594730538.jpg?k=d3f3e4b89ccc993f8d1300adecb3bdbc96ac14aace535a77d917cca9205bc872&o="
        alt="Mysore Comfort"
        className="w-full h-full object-cover"
      />
      <span className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
        <Image src="https://cdn-icons-png.flaticon.com/128/4675/4675168.png" alt="favorite" width={24} height={24}/>
      </span>
    </div>
    <div className="p-4">
      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">Genius</span>
      <h3 className="text-ml font-bold mt-2">Hotel Aerotel, Hyderabad</h3>
      <p className="text-gray-500 text-sm">Shamshabad, India</p>
      <div className="flex items-center gap-2 mt-2">
        <span className="bg-blue-600 text-white text-sm font-semibold px-2 py-1 rounded">7.7</span>
        <div>
          <p className="text-sm font-semibold">Good</p>
          <p className="text-xs text-gray-500">100 reviews</p>
        </div>
      </div>
      <button className="mt-3 bg-green-600 text-white px-3 py-1 rounded text-sm">Getaway Deal</button>
      <div className="mt-4 flex justify-between items-center">
        <p className="text-xs text-gray-500">2 nights</p>
        <p className="text-sm text-red-600 line-through">₹6,963</p>
        <p className="text-lg font-bold">₹4,874</p>
      </div>
    </div>
  </div>

  {/* Card 4 */}
  <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
    <div className="relative h-48 w-full">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square240/638996196.jpg?k=f2982f3d24dd0bc3351b4952044784c5b06c85cfe1cdb5d22b5eefae03d93a8e&o="
        alt="Ajmer Retreat"
        className="w-full h-full object-cover"
      />
      <span className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
        <Image src="https://cdn-icons-png.flaticon.com/128/4675/4675168.png" alt="favorite" width={24} height={24}/>
      </span>
    </div>
    <div className="p-4">
      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">Genius</span>
      <h3 className="text-ml font-bold mt-2">The Hampi Cafe</h3>
      <p className="text-gray-500 text-sm">Hampi, India</p>
      <div className="flex items-center gap-2 mt-2">
        <span className="bg-blue-600 text-white text-sm font-semibold px-2 py-1 rounded">9.5</span>
        <div>
          <p className="text-sm font-semibold">Exceptional</p>
          <p className="text-xs text-gray-500">6 reviews</p>
        </div>
      </div>
      <button className="mt-3 bg-green-600 text-white px-3 py-1 rounded text-sm">Getaway Deal</button>
      <div className="mt-4 flex justify-between items-center">
        <p className="text-xs text-gray-500">2 nights</p>
        <p className="text-sm text-red-600 line-through">₹12,000</p>
        <p className="text-lg font-bold">₹10,800</p>
      </div>
    </div>
  </div>
</div>

</section>


{/* (Home Guest love) */}
<section className="mt-16 px-2 md:px-[200px]">
  <h2 className="text-3xl font-bold">Homes guests love</h2>

  {/* Mobile scroll */}
  <div className="flex md:hidden overflow-x-auto space-x-4 mt-8 scrollbar-hide">
    {/* Card 1 */}
    <div className="flex-shrink-0 w-[80%] sm:w-[calc(100%-20px)]">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
        <div className="relative h-50 w-full">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o="
            alt="Aparthotel Stare Miasto"
            className="w-full h-full object-cover"
          />
          <span className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
            <Image src="https://cdn-icons-png.flaticon.com/128/4675/4675168.png" alt="man" width={24} height={24}/>
          </span>
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
          <div className="mt-4 flex justify-between items-center">
            <div></div>
            <div className="flex items-center gap-2">
              <p className="text-xs text-gray-500">Starting</p>
              <p className="text-lg font-bold">₹3,998</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="flex-shrink-0 w-[80%] sm:w-[calc(100%-20px)]">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
        <div className="relative h-48 w-full">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/579099936.webp?k=e04cc7f7fe864ce09b7d7d978dbb7db3e558038a2151eb7c4c11e895bafbd8c0&o="
            alt="7Seasons Apartments Budapest"
            className="w-full h-full object-cover"
          />
          <span className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
            <Image src="https://cdn-icons-png.flaticon.com/128/4675/4675168.png" alt="man" width={24} height={24}/>
          </span>
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
          <div className="mt-4 flex justify-between items-center">
            <div></div>
            <div className="flex items-center gap-2">
              <p className="text-xs text-gray-500">Starting</p>
              <p className="text-lg font-bold">₹4,299</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="flex-shrink-0 w-[80%] sm:w-[calc(100%-20px)]">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
        <div className="relative h-49 w-full">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/559654140.webp?k=89e79aa75ec8a78c63c6f97559ec8f893de372401cdde1b4a2ef8fa1b2389631&o="
            alt="Aparthotel Stare Miasto"
            className="w-full h-full object-cover"
          />
          <span className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
            <Image src="https://cdn-icons-png.flaticon.com/128/4675/4675168.png" alt="man" width={24} height={24}/>
          </span>
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
          <div className="mt-4 flex justify-between items-center">
            <div></div>
            <div className="flex items-center gap-2">
              <p className="text-xs text-gray-500">Starting</p>
              <p className="text-lg font-bold">₹3,899</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Card 4 */}
    <div className="flex-shrink-0 w-[80%] sm:w-[calc(100%-20px)]">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
        <div className="relative h-48 w-full">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/95058977.webp?k=ab4cc65897bb205dbcefd7a656cb3a811ce2b5b3135ca61c38860db146d96243&o="
            alt="Oriente Palace Apartments"
            className="w-full h-full object-cover"
          />
          <span className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
            <Image src="https://cdn-icons-png.flaticon.com/128/4675/4675168.png" alt="man" width={24} height={24}/>
          </span>
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
          <div className="mt-4 flex justify-between items-center">
            <div></div>
            <div className="flex items-center gap-2">
              <p className="text-xs text-gray-500">Starting</p>
              <p className="text-lg font-bold">₹3,499</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

<div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
  {/* Card 1 */}
  <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
    <div className="relative h-48 w-full">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o="
        alt="Aparthotel Stare Miasto"
        className="w-full h-full object-cover"
      />
      <span className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
        <Image src="https://cdn-icons-png.flaticon.com/128/4675/4675168.png" alt="man" width={24} height={24}/>
      </span>
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
      <div className="mt-4 flex justify-between items-center">
        <div></div>
        <div className="flex items-center gap-2">
          <p className="text-xs text-gray-500">Starting</p>
          <p className="text-lg font-bold">₹3,998</p>
        </div>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
    <div className="relative h-48 w-full">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/579099936.webp?k=e04cc7f7fe864ce09b7d7d978dbb7db3e558038a2151eb7c4c11e895bafbd8c0&o="
        alt="7Seasons Apartments Budapest"
        className="w-full h-full object-cover"
      />
      <span className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
        <Image src="https://cdn-icons-png.flaticon.com/128/4675/4675168.png" alt="man" width={24} height={24}/>
      </span>
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
      <div className="mt-4 flex justify-between items-center">
        <div></div>
        <div className="flex items-center gap-2">
          <p className="text-xs text-gray-500">Starting</p>
          <p className="text-lg font-bold">₹4,299</p>
        </div>
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
    <div className="relative h-48 w-full">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/559654140.webp?k=89e79aa75ec8a78c63c6f97559ec8f893de372401cdde1b4a2ef8fa1b2389631&o="
        alt="Aparthotel Stare Miasto Prague"
        className="w-full h-full object-cover"
      />
      <span className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
        <Image src="https://cdn-icons-png.flaticon.com/128/4675/4675168.png" alt="man" width={24} height={24}/>
      </span>
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
      <div className="mt-4 flex justify-between items-center">
        <div></div>
        <div className="flex items-center gap-2">
          <p className="text-xs text-gray-500">Starting</p>
          <p className="text-lg font-bold">₹3,899</p>
        </div>
      </div>
    </div>
  </div>

  {/* Card 4 */}
  <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
    <div className="relative h-48 w-full">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/95058977.webp?k=ab4cc65897bb205dbcefd7a656cb3a811ce2b5b3135ca61c38860db146d96243&o="
        alt="Oriente Palace Apartments"
        className="w-full h-full object-cover"
      />
      <span className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
        <Image src="https://cdn-icons-png.flaticon.com/128/4675/4675168.png" alt="man" width={24} height={24}/>
      </span>
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
      <div className="mt-4 flex justify-between items-center">
        <div></div>
        <div className="flex items-center gap-2">
          <p className="text-xs text-gray-500">Starting</p>
          <p className="text-lg font-bold">₹3,499</p>
        </div>
      </div>
    </div>
  </div>
</div>

</section>

{/* (why booking.com) */}
<section className="mt-12  md:px-[200px] px-4">
  <h2 className="text-2xl md:text-2xl font-bold mb-8">Why Booking.com?</h2>

  {/* Desktop: 4-column grid */}
  <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* Card 1 */}
    <div className="bg-[#f5f5f5] border border-gray-300 rounded-lg p-6">
      <img
        src="https://t-cf.bstatic.com/design-assets/assets/v3.160.0/illustrations-traveller/FreeCancellation@2x.png"
        alt="Book now"
        className="mx-auto mb-4 h-12 w-12"
      />
      <h3 className="text-lg font-bold mb-2">Book now, pay at the property</h3>
      <p className="text-sm text-gray-500">FREE cancellation on most rooms</p>
    </div>

    {/* Card 2 */}
    <div className="bg-[#f5f5f5] border border-gray-300 rounded-lg p-6">
      <img
        src="https://t-cf.bstatic.com/design-assets/assets/v3.160.0/illustrations-traveller/Reviews@2x.png"
        alt="Reviews"
        className="mx-auto mb-4 h-12 w-12"
      />
      <h3 className="text-lg font-bold mb-2">300M+ reviews from fellow travellers</h3>
      <p className="text-sm text-gray-500">Get trusted information from guests like you</p>
    </div>

    {/* Card 3 */}
    <div className="bg-[#f5f5f5] border border-gray-300 rounded-lg p-6">
      <img
        src="https://t-cf.bstatic.com/design-assets/assets/v3.160.0/illustrations-traveller/TripsGlobe@2x.png"
        alt="Properties"
        className="mx-auto mb-4 h-12 w-12"
      />
      <h3 className="text-lg font-bold mb-2">2+ million properties worldwide</h3>
      <p className="text-sm text-gray-500">Hotels, guest houses, apartments, and more…</p>
    </div>

    {/* Card 4 */}
    <div className="bg-[#f5f5f5] border border-gray-300 rounded-lg p-6">
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

  {/* Mobile: stacked vertical cards with image left and text right */}
  <div className="md:hidden flex flex-col gap-4">
    {/* Card 1 */}
    <div className="flex items-center bg-[#f5f5f5] border border-gray-300 rounded-lg p-3">
      <img
        src="https://t-cf.bstatic.com/design-assets/assets/v3.160.0/illustrations-traveller/FreeCancellation@2x.png"
        alt="Book now"
        className="h-12 w-12 mr-3"
      />
      <div>
        <h3 className="text-sm font-bold mb-1">Book now, pay at the property</h3>
        <p className="text-xs text-gray-500">FREE cancellation on most rooms</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="flex items-center bg-[#f5f5f5] border border-gray-300 rounded-lg p-3">
      <img
        src="https://t-cf.bstatic.com/design-assets/assets/v3.160.0/illustrations-traveller/Reviews@2x.png"
        alt="Reviews"
        className="h-12 w-12 mr-3"
      />
      <div>
        <h3 className="text-sm font-bold mb-1">300M+ reviews from fellow travellers</h3>
        <p className="text-xs text-gray-500">Get trusted information from guests like you</p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="flex items-center bg-[#f5f5f5] border border-gray-300 rounded-lg p-3">
      <img
        src="https://t-cf.bstatic.com/design-assets/assets/v3.160.0/illustrations-traveller/TripsGlobe@2x.png"
        alt="Properties"
        className="h-12 w-12 mr-3"
      />
      <div>
        <h3 className="text-sm font-bold mb-1">2+ million properties worldwide</h3>
        <p className="text-xs text-gray-500">Hotels, guest houses, apartments, and more…</p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="flex items-center bg-[#f5f5f5] border border-gray-300 rounded-lg p-3">
      <img
        src="https://t-cf.bstatic.com/design-assets/assets/v3.160.0/illustrations-traveller/CustomerSupport@2x.png"
        alt="Support"
        className="h-12 w-12 mr-3"
      />
      <div>
        <h3 className="text-sm font-bold mb-1">Trusted customer service you can rely on, 24/7</h3>
        <p className="text-xs text-gray-500">We're always here to help</p>
      </div>
    </div>
  </div>
</section>

{/* Travel more, spend less */}
<section className="mt-8 md:px-[200px] px-4">
  <h2 className="text-2xl md:text-2xl font-bold mb-8">Travel more, spend less</h2>

  {/* Desktop: flex row */}
  <div className="hidden md:flex items-center border border-gray-300 rounded-lg p-6 bg-white">
    <div className="w-4/5 pr-6">
      <h3 className="text-ml font-semibold mb-2">Sign in, save money</h3>
      <p className="text-gray-800 mb-4">
        Save 10% or more at participating properties – just look for the blue Genius label
      </p>
      <div className="flex gap-4">
        <button className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700">
          Sign in
        </button>
        <button className="border text-blue-600 px-5 py-2 rounded-md font-medium hover:bg-blue-50">
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

  {/* Mobile: row with text left, image right */}
  <div className="md:hidden flex flex-col gap-4">
    <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-white">
      <div className="flex-1 pr-2">
        <h3 className="text-sm font-semibold mb-1">Sign in, save money</h3>
        <p className="text-xs text-gray-800 mb-2">
          Save 10% or more at participating properties – just look for the blue Genius label
        </p>
        <div className="flex gap-2">
          <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-xs font-medium hover:bg-blue-700">
            Sign in
          </button>
          <button className="border text-blue-600 px-3 py-1 rounded-md text-xs font-medium hover:bg-blue-50">
            Register
          </button>
        </div>
      </div>
      <div className="flex-shrink-0">
        <img
          src="https://t-cf.bstatic.com/design-assets/assets/v3.160.0/illustrations-traveller/GeniusGenericGiftBox@2x.png"
          alt="Celebration"
          className="h-16 w-16 object-contain"
        />
      </div>
    </div>
    {/* Repeat more cards below if needed */}
  </div>
</section>


<section className="mt-8  md:px-[200px] px-4">
  {/* Desktop View */}
  <div className="hidden md:flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white relative">
    
    {/* Left Side (60% Blue Oval Background with text + button) */}
    <div className="w-[60%] flex flex-col justify-end items-center text-center p-16 relative overflow-hidden">
      {/* Blue Oval */}
      <div className="absolute inset-0 flex justify-end items-center">
        <div className="w-full h-full bg-blue-600 rounded-full"></div>
      </div>

      {/* Orange Circle */}
      <div className="absolute bottom-[-30px] left-[-30px] w-24 h-24 bg-[#ffb700] rounded-full z-0"></div>

      {/* Text Content */}
      <div className="relative z-10 text-white">
        <h2 className="text-3xl font-bold mb-6">
          Want to feel at home on your next adventure?
        </h2>
        <button className="bg-white text-blue-600 font-medium px-6 py-3 rounded hover:bg-gray-100">
          Discover holiday rentals
        </button>
      </div>
    </div>

    {/* Right Side (40% Image) */}
    <div className="w-[40%] flex justify-center items-center p-8 bg-white">
      <img
        src="https://cf.bstatic.com/psb/capla/static/media/bh_aw_cpg_main_image.ae847bb6.png" 
        alt="Holiday Rentals"
        className="max-h-64 object-contain"
      />
    </div>
  </div>

  {/* Mobile View */}
  <div className="md:hidden flex flex-col items-center border border-gray-300 rounded-lg bg-white p-4 gap-4">
    {/* Image on top */}
    <img
      src="https://cf.bstatic.com/psb/capla/static/media/bh_aw_cpg_main_image.ae847bb6.png" 
      alt="Holiday Rentals"
      className="w-full max-h-48 object-contain"
    />
    
    {/* Text + Button below image */}
    <div className="text-center">
      <h2 className="text-lg font-bold mb-4">
        Want to feel at home on your next adventure?
      </h2>
      <button className="bg-blue-600 text-white font-medium px-6 py-3 rounded hover:bg-blue-700">
        Discover holiday rentals
      </button>
    </div>
  </div>
</section>

{/* Popular with travellers from India */}
<section className="mt-8 md:px-[200px] px-4">
  {/* Heading */}
  <h2 className="text-2xl font-bold mb-6">Popular with travellers from India</h2>

  {/* Tabs */}
  <div className="hidden md:flex gap-4 mb-8 flex-wrap">
    {tabs.map((tab) => (
      <button
        key={tab.id}
        onClick={() => setSelectedCategory(tab.id)}
        className={`px-4 py-2 rounded-lg font-medium ${
          selectedCategory === tab.id
            ? "border border-blue-600 text-blue-600 bg-[#f5f5f5]"
            : "text-gray-800 hover:text-blue-600"
        }`}
      >
        {tab.label}
      </button>
    ))}
  </div>

  {/* Mobile Tabs */}
  <div className="md:hidden mb-4 overflow-x-auto flex gap-2   ">
    {tabs.map((tab) => (
      <button
        key={tab.id}
        onClick={() => setSelectedCategory(tab.id)}
        className={`flex-shrink-0 px-4 py-2 rounded-lg font-medium text-sm ${
          selectedCategory === tab.id
            ? "border border-blue-600 text-blue-600 bg-[#f5f5f5]"
            : "text-gray-800 hover:text-blue-600"
        }`}
      >
        {tab.label}
      </button>
    ))}
  </div>

  {/* Grid for active tab */}
  <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
    {tabData[selectedCategory]?.map((col, i) => (
      <div key={i} className="space-y-2">
        {col.map((item, j) => (
          <p
            key={j}
            className="text-gray-700 hover:underline cursor-pointer text-xs"
          >
            {item}
          </p>
        ))}
      </div>
    ))}
  </div>

  {/* Mobile Grid Scroll */}
  <div className="md:hidden overflow-x-auto flex gap-4">
    {tabData[selectedCategory]?.map((col, i) => (
      <div
        key={i}
        className="flex-shrink-0 w-48 bg-white p-2 rounded-lg  space-y-1"
      >
        {col.map((item, j) => (
          <p
            key={j}
            className="text-gray-700 hover:underline cursor-pointer text-xs"
          >
            {item}
          </p>
        ))}
      </div>
    ))}
  </div>

  {/* Show More Button */}
  <div className="mt-4">
    <button className="text-blue-600 font-medium hover:underline">
      + Show more
    </button>
  </div>

  {/* Bottom Links */}
  <div className="mt-6 text-center text-xs text-gray-600 flex flex-wrap justify-center gap-1">
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

<footer className="bg-[#f5f5f5] w-full mt-4 py-4 p-2 md:px-[200px]">
 {/* Desktop View (unchanged) */}
{/* Desktop View (unchanged) */}
<div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
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
    <h3 className="font-bold text-ml mb-4">Partners</h3>
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

{/* Mobile View (Accordion, no left/right spacing) */}
<div className="md:hidden divide-y">
  {[
    {
      title: "Support",
      items: [
        "Coronavirus (COVID-19) FAQs",
        "Manage your trips",
        "Contact Customer Service",
        "Safety resource centre",
      ],
    },
    {
      title: "Discover",
      items: [
        "Genius loyalty programme",
        "Seasonal and holiday deals",
        "Travel articles",
        "Booking.com for Business",
        "Traveller Review Awards",
        "Car hire",
        "Flight finder",
        "Restaurant reservations",
        "Booking.com for Travel Agents",
      ],
    },
    {
      title: "Terms and settings",
      items: [
        "Privacy & cookies",
        "Terms and conditions",
        "Accessibility Statement",
        "Grievance officer",
        "Modern Slavery Statement",
        "Human Rights Statement",
      ],
    },
    {
      title: "Partners",
      items: [
        "Extranet login",
        "Partner help",
        "List your property",
        "Become an affiliate",
      ],
    },
    {
      title: "About",
      items: [
        "About Booking.com",
        "How we work",
        "Sustainability",
        "Press centre",
        "Manage your trips",
        "Careers",
        "Investor relations",
        "Corporate contact",
      ],
    },
  ].map((section, idx) => (
    <details key={idx} className="py-2">
      <summary className="font-bold text-sm cursor-pointer py-2">
        {section.title}
      </summary>
      <ul className="space-y-2 text-xs text-gray-700 mt-2">
        {section.items.map((item, i) => (
          <li key={i} className="hover:underline cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </details>
  ))}
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
{/* Visible only on desktop (md and above) */}
<div className="hidden md:grid grid-cols-2 sm:grid-cols-5 items-center justify-items-center mt-6 px-[300px]">
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
    alt="OpenTable" 
    className="h-8 object-contain"
  />
</div>

</footer>






    </div>
    
  );
}
