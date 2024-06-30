/* eslint-disable no-unused-vars */
import {useState} from 'react'

// import BarChart1 from "./components/BarChart1"

// import PieChart1 from "./components/PieChart1"

import Breadcrumb from './components/Breadcrumb';

// import LineChart1 from "./components/LineChart1"

import SignUpForm from './components/SignUpForm';

// import Timeline2 from "./components/Timeline2"

// import Timeline from "./components/Timeline"

// import Chips2 from "./components/Chips2"

// import Chip1 from "./components/Chip1"

// import ToggleButtonList from "./components/ToggleButtonList"

// import ChatUI from "./components/ChatUI"

// import RadioButtonGroup from "./components/RadioButtonGroup"

// import PricingCard3 from "./components/PricingCard3"

// import Dropdown from "./components/Dropdown.jsx"

// import PricingCard2 from "./components/PricingCard2"

// import PricingCard from "./components/PricingCard"
// import Table from "./components/Table"

// import Header from "./components/Header"
// import Sidebar from "./components/Sidebar"
// import SalesCard from "./components/SalesCard"
// import Pagination from './components/Pagination';
import Paginationgreen from './components/Paginationgreen';
import PaginationCblue from './components/PaginationCblue';
import ProfilePictureUploader from './components/ProfilePictureUploader';
import SignIn from './components/SignIn';
import ProfileCard from './components/ProfileCard';
import Accordion from './components/Accordion';
import WeatherCard from './components/WeatherCard';
import Calendar from './components/Calender';
import CreditCardblue from './components/CreditCardblue';
import AudioPlayer from './components/AudioPlayer';
import BlogCard from './components/BlogCard';
import Card from './components/Card';
import UserReviewCard from './components/UserReviewCard';
import RatingProductCard from './components/RatingProductCard';
const App = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const totalPages = 5;

  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  // };

  // const breadcrumbItems = [
  //   { label: 'Home', link: '/' },
  //   { label: 'Fashion', link: '/fashion' },
  //   { label: 'Men', link: '/fashion/men' },
  //   { label: 'Jacket',link:"/jacket/men" }, // No link for the current page
  // ];
  return (
  <div>
    {/* <Sidebar/> */}
    {/* <Header/> */}
    {/* <Table/> */}
    {/* <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <PricingCard/>
    </div> */}
    
      {/* <PricingCard2/> */}

    {/* <Dropdown/> */}
    {/* <PricingCard3/> */}
    {/* <RadioButtonGroup/> */}
    {/* <ChatUI/> */}
    {/* <ToggleButtonList/> */}
    {/* <Chip1/> */}
    {/* <Chips2/> */}
    {/* <Timeline/> */}
    {/* <Timeline2/> */}
    {/* <LineChart/> */}
   {/* <LineChart1/> */}
   {/* <PieChart1/> */}
   
   {/* <div className="min-h-screen bg-gray-900 flex items-center justify-center"><BarChart1/></div> */}
   {/* salescard */}
   {/* <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <SalesCard 
          percentage={42}
          isIncrease={false}
          salesType="Target sales"
          amount="$7,392"
          percentageChange={13}
        />
        <SalesCard 
          percentage={86}
          isIncrease={true}
          salesType="Total sales"
          amount="$68,853"
          percentageChange={24}
        />
      </div>
    </div> */}



{/* <div className="p-4">
      <h1 className="mb-4">Pagination Example</h1>
      <PaginationCblue currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div> */}


    {/* <div className="p-4">
      
      <Breadcrumb items={breadcrumbItems} />
    </div> */}

{/* <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <SignUpForm />
    </div> */}
    {/* <ProfilePictureUploader/> */}
    {/* <SignIn/> */}
    {/* <ProfileCard/> */}
    {/* <Accordion/> */}
    {/* <WeatherCard/> */}
    {/* <Calendar/> */}
    {/* <CreditCardblue/> */}
    {/* <AudioPlayer/> */}
    {/* <BlogCard/> */}
    {/* <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card />
    </div> */}

{/* <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <UserReviewCard />
    </div> */}

<div className="flex items-center justify-center min-h-screen bg-gray-100">
      <RatingProductCard />
    </div>







  </div>
  )
}

export default App