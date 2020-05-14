import React from 'react'
import PropTypes from 'prop-types'
import './ListingInfo.css'

const ListingInfo = (props) => {
    const { area, area_id } = props.listing 
    const { baths, beds, cost_per_night, superhost} = props.listing.details
    return (
        <div>ListingInfo
            <p>Area: {area}</p>
            <p>Area Id: {area_id}</p>
            <p>Bath: {baths
            }</p>
            <p>Beds: {beds}</p>
            <p>$ {cost_per_night}</p>
            <p>Superhost: {superhost}</p>
        </div>
    )
}

export default ListingInfo

ListingInfo.propTypes = {

}