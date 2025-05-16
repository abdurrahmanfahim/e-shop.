import React from 'react'
import { Link } from "react-router-dom";


const BottomRight = () => {
  return (
     <ul className="flex gap-20 leading-15 ">
      <li>
        <Link className="flex gap-4 uppercase " to={"#"}>
          LIMITED SALE 👋🏻
        </Link>
      </li>
      <li>
        <Link className="flex gap-2 items-center " to={"#"}>
          Best Seller
        </Link>
      </li>
      <li>
        <Link to={"#"}>New Arrival</Link>
      </li>
    </ul>
  )
}

export default BottomRight