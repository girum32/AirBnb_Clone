import { Button } from '@material-ui/core'
import React from 'react'
import "./SearchPage.css";
import SearchResult from "./SearchResult"

function SearchPage() {
    return (
        <div className="searchPage">
            <div
                className="SearchPage__info">
                <p>62 stays . 26 august to 30 august . 2 guests</p>
                <h1>Stay nearby</h1>
                <Button variant="outlined">Type of Place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult 
                img = "https://images.unsplash.com/flagged/photo-1573168710865-2e4c680d921a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkcm9vbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                location="New York, United States"
                title="Spacious Manhattan Room"
                description="Immerse yourself in the excitement of New York City with views overlooking Midtown Manhattan. Located between floors 5 and 29, our Executive City View rooms are luxurious and spacious, with 1 King Bed."
                star="4.50"
                price="$200"
                total="$1,200"
            />
            <SearchResult 
                img = "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlZHJvb218ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                location="NYC"
                title="Room in boutique hotel hosted by Citadines"
                description="Well-placed high-rise in a prime Midtown spot on 45th between 5th and 6th Aves – a 7-minute stroll from the spectacle that is Times Square, with its neighboring Broadway theaters, shops and eateries galore. Plus an easy 14-minute jaunt from the equally famous Empire State Building."
                star="4.51"
                price="$175"
                total="$875"
            />
            <SearchResult 
                img = "https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzZ8fGJlZHJvb218ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                location="NYC"
                title="Accessible between Times Square & Central Park"
                description="Comfortable 280 sq ft guest room with 37 inches Flat Screen TV, comfortable King Size Pillow-top Mattress, spacious Work Desk with an Ergonomic Chair and a 2-Line Phone for your convenience."
                star="4.00"
                price="$97"
                total="$582"
            />
            <SearchResult 
                img = "https://images.unsplash.com/photo-1560067174-e553b3647603?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDF8fGJlZHJvb218ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                location="New York, United States"
                title="Marriott Hotel Times Square"
                description="Located less than 0.6 mi from Times Square, Fairfield Inn & Suites By Marriott New York Manhattan/Times Square features a rooftop bar that overlooks the city. Penn Station is 2,650 feet from this property.Complimentary WiFi is provided in rooms."
                star="4.75"
                price="$140"
                total="$1,130"
            />
            <SearchResult 
                img = "https://images.unsplash.com/photo-1593006526979-5f8814c229f9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nzd8fGJlZHJvb218ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                location="New York, United States"
                title="Large Room with Pull-out Sofa and Balcony"
                description="527 square foot Junior Suite features a 37 inches Flat Screen TV, King Size Pillow-top Mattress with large Pillows and high thread count linens, spacious Work Desk with an Ergonomic Chair, and 2-Line Phone. Includes Balcony!"
                star="4.38"
                price="$136"
                total="$500"
            />
            <SearchResult 
                img = "https://images.unsplash.com/photo-1587614381634-068e97d007ad?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTI3fHxiZWRyb29tfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                location="New York, United States"
                title="Midtown Manhattan - Private room"
                description="This standard room at the Royalton New York offers travelers a stunning private place to stay
                Your room charge has been taken prior to your arrival as a deposit. The remaining balance of taxes (NYS Sales Tax: 8.87%, NYC Tax 5.875%, Occupancy tax $4.00, Javits fee $1.50) and facility fee ($40.16) per night will be charged upon arrival. A refundable security deposit of $200 a night will also be taken"
                star="4.28"
                price="$152"
                total="$1,520"
            />
            <SearchResult 
                img = "https://images.unsplash.com/photo-1603072388361-1e368b7a84a5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTQ0fHxiZWRyb29tfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                location="New York, United States"
                title="CLOSE BY CENTRAL PARK AND TIME SQUARE!"
                description="The neighborhood is great we are right by strawberry fields in central park and the Dakota residency. Its great quiet clean and a landmark area. We offer Small and Cozy rooms, amazing location minutes from Central Park. Rooms vary upon availability."
                star="4.32"
                price="$89"
                total="$520"
            />
            
        </div>
    )
}

export default SearchPage
