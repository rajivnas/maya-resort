import React from "react"
import { BiRestaurant } from "react-icons/bi"
import { FaParking, FaSwimmingPool } from "react-icons/fa"
import {
  MdOutlineLocalLaundryService,
  MdOutlineAir,
  MdRoomService,
} from "react-icons/md"

const amenities = [
  {
    id: 1,
    icon: <FaSwimmingPool />,
    title: "Outdoor Pool",
    description: "Simple Open Source icons carefully crafted",
  },
  {
    id: 2,
    icon: <MdOutlineAir />,
    title: "Air Condition",
    description: "Simple Open Source icons carefully crafted",
  },
  {
    id: 3,
    icon: <BiRestaurant />,
    title: "Delicious Food",
    description: "Simple Open Source icons carefully crafted",
  },
  {
    id: 4,
    icon: <MdOutlineLocalLaundryService />,
    title: "Laundry Service",
    description: "Simple Open Source icons carefully crafted",
  },
  {
    id: 5,
    icon: <MdRoomService />,
    title: "Room Service",
    description: "Simple Open Source icons carefully crafted",
  },
  {
    id: 6,
    icon: <FaParking />,
    title: "Free Parking",
    description: "Simple Open Source icons carefully crafted",
  },
]

export default amenities
