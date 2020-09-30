import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { NavLink } from 'reactstrap';
import Contacts from "./Contacts";
import Gallery from "./Gallery";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contacts">Reviews</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <div className= "p-3">
        <h3>Our House</h3>

        <Gallery/>
        <p>
          Our house is the perfect Cape Cod Get-A-Way in a quaint neighborhood
          in West Yarmouth. The house is just off of Historic Route 28 in West
          Yarmouth located 1.5 miles from Seagull Beach. You are walking
          distance to many nearby restaurants such as Basil Thai, Jerry’s,
          Captain Parker’s and Red Face Jacks.2020 Newly refinished wood floor
          and new bathroom floors for your comfort and enjoyment.
        </p>

        <p>
          It features 5 bedrooms, 3 queen bedrooms, and 2 twin rooms. This home
          is an ideal rental for any group: Allowing a Large Family or 2-3
          smaller Families to vacation together and even with the grand parents!
          Also great for a Golf Outing with or without the whole gang; or the
          perfect summer Family Reunion. The 5 bedrooms are well laid out with 3
          Queen Beds, 6 Twin Beds, and 1 Queen Sleeper Sofa. Bring your own
          sheets, towels and pillow cases.
          <p>
            2 full bathrooms and an Outdoor Shower. Washer & Dryer. Central Heat
            and Air Conditioning. WiFi and Basic Cable. For your convenience, we
            do provide hand soap, Dial shampoo and body wash 2 in 1, ingredients
            will be in the guest book or can provide via message upon request.
            Large kitchen has a breakfast nook, dishwasher, stove and microwave.
            The dining room is just off the kitchen and looks out to the big
            back yard (1/3 acre). Great living room with gorgeous fireplace.
          </p>
          <p>
            Our house is in a great location to take advantage of all that Cape
            Cod has to offer. It is close to the beach which is key, but it also
            has a great yard and a lot of room to relax at the house or enjoy
            the summer breeze on the deck. The Outdoor Shower is perfect for
            rinsing off after the beach or an al fresco experience you can’t get
            at home. We are only 1.5 hours from downtown Boston, so it easy to
            get away without an extended drive to the outer regions of the Cape.
            But, we are in the center of everything you could want to Cape Cod –
            Shopping, Restaurants, Pirate Museum, Mini Golf, Trampolines,
            Pirate’s Cove, Beaches, Bars, Ice Cream, and of course the Christmas
            Tree Shops!
          </p>
          </p>
        </div>

        <div class="m-3 w3-row-padding w3-large w3-center" >
          <div class="w3-third">
            <i class="fa fa-envelope w3-text-red"></i> Contact Us:
            capecodgetaway10@gmail.com
          </div>
        </div>

        <div class="w3-panel w3-red w3-leftbar w3-padding-32">
          <h6>
            <i class="fa fa-info w3-deep-orange w3-padding w3-margin-right"></i>
            We have a TV in the living room and another TV in the garage
            bedroom/family room. We have a TV hooked up to a Blu-ray DVD player
            with some streaming capabilities and there’s a Redbox DVD vending
            machine conveniently located at the gas station across the street.
            The DVD and the black box device in the garage bedroom/family room
            can both be used to streaming free contents from the internet. Feel
            free to bring your personal streaming device to stream contents for
            your Netflix, Hulu, Amazon, etc. account.{" "}
          </h6>
          <NavLink href="/contacts/">Reviews</NavLink>
        </div>
      </div>
  );
}
