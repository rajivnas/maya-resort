import React from "react"
import { MdCall, MdLocationOn } from "react-icons/md"

export default function Topbar() {
  return (
    <div className="top-bar container">
      <p>
        <MdLocationOn /> Jotgiri, Howrah, West Bengal 711114
      </p>
      <p>
        <MdCall /> +91 99035 00000 / 90073 00000
      </p>
    </div>
  )
}
