import React from 'react'
import "./Home.css"
import Banner from "./Banner"
import Card from './Card'

function Home() {
    return (
        <div className="home">
            <Banner />
            <div className="home_section">
                <Card 
                    src="https://images.unsplash.com/photo-1519678767534-29483894b34d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8aG9tZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    title="Entire homes"
                    description="Comfortable homes with all the essentials"
                />
                <Card 
                    src="https://images.unsplash.com/photo-1524234599372-a5bd0194758d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWxzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    title="Hotels"
                    description="Stylish accommodation and amenities"
                />
                <Card 
                    src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2glMjBob3VzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep."
                />
                <Card 
                    src="https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGV0c3xlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    title="Pets welcome"
                    description="Pet-friendly stays"
                />

            </div>
            <div className="home_section">
            <Card 
                    src="https://images.unsplash.com/photo-1588058013493-c4625f56a31c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsJTIwbG9iYnl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    title="The W Hotel"
                    description="In the city center, The W New York Times Square is in New York's Midtown neighborhood, an area with great shopping. Times Square and 5th Avenue are worth checking out... "
                    price="$250/night"
                />
                <Card 
                    src="https://images.unsplash.com/photo-1529551739587-e242c564f727?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHclMjBob3RlbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    title="Visit Barcelona"
                    description="Palau de la Musica Catalana and Barcelona Cathedral are notable landmarks, and the area's natural beauty can be seen at Barceloneta Beach and Mar Bella Beach..."
                    price="$260/night"
                />

                <Card 
                    src="https://images.unsplash.com/photo-1586875419037-52b4423c2c55?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjF8fHclMjBob3RlbHxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    title="The Escape"
                    description=" Enjoy open air spaces, waterfront dining, poolside fun enahnced cleaning practices close proximity theme parks and the beach. The area's natural beauty can be seen...  "
                    price="$240/night"
                />
            </div>
            <div className="home_section">
                <Card 
                    src="https://images.unsplash.com/photo-1519378045141-f05b62faa055?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJlZSUyMGhvdXNlfGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    title="The ReTreet House"
                    description="The ReTreet House was completed in the spring of 2019! It is a well insulated and heated two story house built among the many white cedar trees on 30 acres of woods. "
                    price="$250/night"
                />
                <Card 
                    src="https://images.unsplash.com/photo-1523760957528-55d1d540360d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGFnZXxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    title="Discover South Korea"
                    description="The ReTreet House was completed in the spring of 2019! It is a well insulated and heated two story house built among the many white cedar trees on 30 acres of woods."
                    price="$150/night"
                />

                <Card 
                    src="https://a0.muscache.com/im/pictures/0cbf819f-97aa-437b-8993-eea00d7299da.jpg?im_w=960"
                    title="The ReTreet House"
                    description="The ReTreet House was completed in the spring of 2019! It is a well insulated and heated two story house built among the many white cedar trees on 30 acres of woods. "
                    price="$120/night"
                />
            </div>
            <div className="home_section">
            <Card 
                    src="https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHZpbGxhZ2V8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    title="The ReTreet House"
                    description="The ReTreet House was completed in the spring of 2019! It is a well insulated and heated two story house built among the many white cedar trees on 30 acres of woods. "
                    price="$250/night"
                />
                <Card 
                    src="https://images.unsplash.com/photo-1441321845576-f74e2c7a85fc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fHZpbGxhZ2V8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    title="Discover ..."
                    description="The ReTreet House was completed in the spring of 2019! It is a well insulated and heated two story house built among the many white cedar trees on 30 acres of woods."
                    price="$150/night"
                />

                <Card 
                    src="https://images.unsplash.com/photo-1549742081-549949c78777?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZHVsdXRoJTIwbWlubmVzb3RhfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    title="The Light House"
                    description="The ReTreet House was completed in the spring of 2019! It is a well insulated and heated two story house built among the many white cedar trees on 30 acres of woods. "
                    price="$120/night"
                />
            </div>
            <div className="home_section">
            <Card 
                    src="https://images.unsplash.com/photo-1588557132645-ff567110cafd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGR1bHV0aCUyMG1pbm5lc290YXxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    title="The ReTreet House"
                    description="The ReTreet House was completed in the spring of 2019! It is a well insulated and heated two story house built among the many white cedar trees on 30 acres of woods. "
                    price="$250/night"
                />
                <Card 
                    src="https://images.unsplash.com/photo-1576176294653-deef19d6858f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fGR1bHV0aCUyMG1pbm5lc290YXxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    title="Discover ..."
                    description="The ReTreet House was completed in the spring of 2019! It is a well insulated and heated two story house built among the many white cedar trees on 30 acres of woods."
                    price="$150/night"
                />

                <Card 
                    src="https://images.unsplash.com/photo-1519350958820-ef6136c27534?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDh8fGR1bHV0aCUyMG1pbm5lc290YXxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    title="Enjoy the snow"
                    description="The ReTreet House was completed in the spring of 2019! It is a well insulated and heated two story house built among the many white cedar trees on 30 acres of woods. "
                    price="$120/night"
                />
            </div>
        </div>
    )
}

export default Home
