// Episode 4 Code


import React from "react";
import ReactDOM from "react-dom/client";

// We are going to build a food ordering app now. For that, the first phase is to plan the app.
// What all components are we going to have in the app and how do we place them on the webpage. - ex. in notes

/*
* Header
  - Logo
  - NavBar
* Body
 - Search
 - CardContainer
   - Restaurant Cards 
      - name
      - cuisine, star rating and ETA.
* Footer
 - Copyright
 - Links
 - Address
*/

// Now, we are going to code it.

// Create the header
const Header = () => {
  return (
    <div className="header">
      <div className="img-container">
        <img
          className="logo"
          src="data:image/jpeg;base64,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"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Address</li>
          <li>
            <img
              className="cart-logo"
              src="https://freepngimg.com/thumb/categories/1325.png"
              alt="Cart Image"
            ></img>
          </li>
        </ul>
      </div>
    </div>
  );
};

const cardStyle = {
  backgroundColor: "#f0f0f0",
};

// The inline css can be added in jsx, just create a js object with style properties and give it to the
// style attribute of the div "res-card" container.
const CardContainer = (props) => {
  const { resData } = props;

  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData?.data;
  {
    /*In the above line, we are just destructuring the code and the names of variables must be same as passed in the props object.*/
  }
  return (
    <div className="res-card" style={cardStyle}>
      {/* The above liune can also be written as <div className = "res-card" style= {{backgroundColor: "#f0f0f0"}}>
          It means that we are giving js to the style attribute and in that js we are passing a js object in the internal {}
      */}
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="res logo"
      ></img>
      <h3 className="res-name">{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5 className="">{avgRating} ✨</h5>
      <h5>Rs. {costForTwo / 100} for two</h5>
      <h5>{deliveryTime} minutes</h5>
    </div>
  );
};

// Create the object for resObj using which the data is pasdsed in the app and is dispalyed using config UI.
const resList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "73011",
      name: "Dindigul Thalappakatti",
      uuid: "27ff4155-fe46-418e-9862-ab98953bf953",
      city: "22",
      area: "Anand Vihar Colony",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "w0fc1sr85flnqzb7qhma",
      cuisines: ["South Indian", "Snacks", "Biryani"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 6.199999809265137,
      slugs: {
        restaurant: "kfc-chukkuwala-chukkuwala",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "KFC Restaurant, Khasra No 1281/1291, Opp Dr Manish Jain hospital, Chakrata road, Dehradun-248001",
      locality: "Clock Tower",
      parentId: 547,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5698075~p=1~eid=00000185-8b09-7c92-0e51-a04b00dc0124",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "73011",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 6.199999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.0",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "5421325",
      name: "Copper Kitchen",
      uuid: "f2ee37f5-9ab0-4903-9420-6cae020b0a38",
      city: "22",
      area: "Majra    Bansal Home",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "ousftkkaojw0itx4u3tw",
      cuisines: [
        "North Indian",
        "South Indian",
        "Fast Food",
        "Snacks",
        "Beverages",
      ],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 33,
      minDeliveryTime: 33,
      maxDeliveryTime: 33,
      slaString: "33 MINS",
      lastMileTravel: 0.6000000238418579,
      slugs: {
        restaurant: "domnik-pizza-patel-nagar-patel-nagar-2",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "28/3 Sewala Chandravani Road, Arcedia Grant, Dehradun Rural, Dehradun, Uttarakhand",
      locality: "Patel Nagar",
      parentId: 22321,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "542132",
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        lastMileTravel: 0.6000000238418579,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "2.8",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "3215170",
      name: "Banana Leaf",
      uuid: "899d5dd4-200a-48b2-a321-391bb9486ec2",
      city: "22",
      area: "Majra",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "v7msadjrhhu6p1dbg29l",
      cuisines: ["Indian", "Chinese", "Tandoor", "Thalis", "Fast Food"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 0.699999988079071,
      slugs: {
        restaurant: "food-planet-restaurant-patel-nagar-patel-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "157/11, Chandra Parisar Chandra Bani Rd, Ekta Enclave, Doon Enclave, Majra, Dehradun, Uttarakhand 248171",
      locality: "Patel Nagar",
      parentId: 81850,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "321517",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 0.699999988079071,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "311800",
      name: "Kati Roll Shop",
      uuid: "162a4dc4-50de-452a-82cf-751e18ac9952",
      city: "22",
      area: "Anand Vihar Colony",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "oy37srywtgi89uynbb4v",
      cuisines: ["North Indian", "Snacks"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 39,
      minDeliveryTime: 39,
      maxDeliveryTime: 39,
      slaString: "39 MINS",
      lastMileTravel: 6.300000190734863,
      slugs: {
        restaurant: "burger-king-chakrata-road-ballupur",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "5/5,4/4 & 3/3, GROUND FLOOR, CHAKRATA ROAD, DEHRADUN, UTTRAKHAND",
      locality: "CHAKRATA ROAD",
      parentId: 166,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5700193~p=4~eid=00000185-8b09-7c92-0e51-a04c00dc0405",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "311806",
        deliveryTime: 39,
        minDeliveryTime: 39,
        maxDeliveryTime: 39,
        lastMileTravel: 6.300000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.2",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "132460",
      name: "Annapurna Andhra Mess",
      uuid: "c6460418-904b-4371-9e04-0ce8b1b46cae",
      city: "22",
      area: "Dehradun",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "mnjmlphk3sefop8tzo5i",
      cuisines: ["South Indian", "Biryani", "North Indian"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 1.399999976158142,
      slugs: {
        restaurant: "annapurna-andhra-mess-subhash-nagar-subhash-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "keshav enclave sewla khurd chandrabani road behind uttranchal PG college",
      locality: "Patel Nagar",
      parentId: 33997,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "132460",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 1.399999976158142,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "196677",
      name: "Firangi Bake",
      uuid: "e652ab57-22c2-4226-b5ea-a5caa26ee0f8",
      city: "22",
      area: "Patel Nagar",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "ivsvlekfebsbqmtmni3h",
      cuisines: ["North Indian", "Snacks", "Beverages", "Desserts"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 0.800000011920929,
      slugs: {
        restaurant: "uncle-ji-restaurant-patel-nagar-patel-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address: "348 santosh tower, majra road gram majra dehradun 248001",
      locality: "Patel Nagar",
      parentId: 298209,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "496677",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 0.800000011920929,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.2",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "296677",
      name: "Drunken Monkey",
      uuid: "e652ab57-22c2-4226-b5ea-a5caa26ee0f8",
      city: "22",
      area: "Patel Nagar",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "2d0c902eb2975b651d78e566bd8d06be",
      cuisines: ["Juices", "Snacks", "Beverages", "Desserts"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 0.800000011920929,
      slugs: {
        restaurant: "uncle-ji-restaurant-patel-nagar-patel-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address: "348 santosh tower, majra road gram majra dehradun 248001",
      locality: "Patel Nagar",
      parentId: 298209,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "496677",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 0.800000011920929,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "416677",
      name: "Sri Sampoorna Veg Restaurant",
      uuid: "e652ab57-22c2-4226-b5ea-a5caa26ee0f8",
      city: "22",
      area: "Patel Nagar",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "yv55fex41rwx0mtlt16q",
      cuisines: ["South Indian", "North Indian", "Snacks", "Beverages"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 0.800000011920929,
      slugs: {
        restaurant: "uncle-ji-restaurant-patel-nagar-patel-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address: "348 santosh tower, majra road gram majra dehradun 248001",
      locality: "Patel Nagar",
      parentId: 298209,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "496677",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 0.800000011920929,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "2.9",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "396677",
      name: "Silver Fish",
      uuid: "e652ab57-22c2-4226-b5ea-a5caa26ee0f8",
      city: "22",
      area: "Patel Nagar",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "ix9re2vh7mzu2bynrdhx",
      cuisines: ["South Indian", "Non Veg", "Snacks", "Beverages"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 0.800000011920929,
      slugs: {
        restaurant: "uncle-ji-restaurant-patel-nagar-patel-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address: "348 santosh tower, majra road gram majra dehradun 248001",
      locality: "Patel Nagar",
      parentId: 298209,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "496677",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 0.800000011920929,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "496077",
      name: "Udhayam Juice Shop",
      uuid: "e652ab57-22c2-4226-b5ea-a5caa26ee0f8",
      city: "22",
      area: "Patel Nagar",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "ox2wtrnxa7iakfefckoy",
      cuisines: ["South Indian", "North Indian", "Snacks", "Beverages"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 0.800000011920929,
      slugs: {
        restaurant: "uncle-ji-restaurant-patel-nagar-patel-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address: "348 santosh tower, majra road gram majra dehradun 248001",
      locality: "Patel Nagar",
      parentId: 298209,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "496677",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 0.800000011920929,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.4",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "4962677",
      name: "Writer's Cafe",
      uuid: "e652ab57-22c2-4226-b5ea-a5caa26ee0f8",
      city: "22",
      area: "Patel Nagar",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "njtmfslhi2dbosvnssar",
      cuisines: ["North Indian", "Snacks", "Beverages", "Desserts"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 0.800000011920929,
      slugs: {
        restaurant: "uncle-ji-restaurant-patel-nagar-patel-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address: "348 santosh tower, majra road gram majra dehradun 248001",
      locality: "Patel Nagar",
      parentId: 298209,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "496677",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 0.800000011920929,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "2.5",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "4961677",
      name: "Paste Factory",
      uuid: "e652ab57-22c2-4226-b5ea-a5caa26ee0f8",
      city: "22",
      area: "Patel Nagar",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "tqpyeoahq0hqfixzkrcm",
      cuisines: ["Desserts", "North Indian", "Snacks", "Beverages"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 0.800000011920929,
      slugs: {
        restaurant: "uncle-ji-restaurant-patel-nagar-patel-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address: "348 santosh tower, majra road gram majra dehradun 248001",
      locality: "Patel Nagar",
      parentId: 298209,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "496677",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 0.800000011920929,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.7",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "496377",
      name: "Sweet Tooth",
      uuid: "e652ab57-22c2-4226-b5ea-a5caa26ee0f8",
      city: "22",
      area: "Patel Nagar",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "7c51efd1c5a12b7925e428a87977f85d",
      cuisines: ["Cakes", "Snacks", "Desserts"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 0.800000011920929,
      slugs: {
        restaurant: "uncle-ji-restaurant-patel-nagar-patel-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address: "348 santosh tower, majra road gram majra dehradun 248001",
      locality: "Patel Nagar",
      parentId: 298209,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "496677",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 0.800000011920929,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
];
// Creating the body functional component now
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <CardContainer resData={restaurant}></CardContainer>
        ))}
      </div>
    </div>
  );
};
// Create an AppLayout in which all the components will be there.
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

// Part-1:-
// In part 1 , we saw how to plan the app, how to make the header component, how to create the card-containetr and then
// add cards inside them using jsx and css.

// In jsx code, the style does not take the code directly, rather it takes in the input as {} js object.

// There are three ways to write css in your code
// 1. Use inline CSS in js file only. - demonstrated above
// 2. use classes and then give style to those classes in .css file
// 3. Use tailwind CSS -> we will learn that later.

// The problem right now is that all the cards as static i.e. hardcoded, we have to make them dynamic now.

// Part-2:-
// We are now going to make the cards as dynamic.

// For achieving this, we will make use of props i.e. properties. props are to functional components what arguments are to functions.
// So, we will pass props to the functional component for passing data dynamically to the card.
// When we add props while calling a functional component in jsx, then React will wrap all of that data in a single object
// and then pass that object to the functional component which can then be used for dynamic data.

// We can also destructure the object on the fly in the functional component like
// const CardContainer = ({resName,cuisines,stars})

// We can also do, const CardContainer = (props) => {
// const {resName,cuisines,stars} = props;

// Passing data to the app.

// The data comes from the backend to us in json format.

// Swiggy uses config driven UI.
// means controlling the UI of the website using data(config) and the json data is the config that comes from the backend.
// examples -> there are different offers in swiggy for different cities, which is done using config driven UI.

// When we want top controll our UI according to the data passed from backend, then we pass that data from the backend
// and the UI is changed based on that data then. This is known as config driven UI -> used by various big comapies like
// Swiggy, Paytm etc.

// Always try and write reusable components so that we can pass dynamic data to it.

// Now, try and refactor the code -> use destructuring for the various components of the data in the objects of resList.
// Also, loop over the resList and create resCards one by one.

// Whenever we are using map for looping over an array in order to create react components, then make sure to have a unique
// key for each of the elements.

// Why do we need a unique key for each react component -> If we do not have a unique key for each of the elements at the same
// level, then if a new element is added to the conatiner, then React will not be able to identify which component is new and
// it will re-render all the components that are there in the container which makes the performance very bad.

// To avoid this, always have a unique key for all of the components at the same level, so that when a new componenet is added
// to the container, then React will know exactly which all components were alrewady there and which ones are new and it will
// only add the new ones, that makes the performance very good.

// Note -> React's official documentation says that using indexes and keys is a very bad practice. It is a bad practice but
// still better than not using keys at all.

// not using keys <<<<<<<<<<<<< index as keys <<<<<<<< unique id (best practice)

// not using index is a last resort.

// Let me explain, a key is the only thing React uses to identify DOM elements. What happens if you push an item to the list
// or remove something in the middle? If the key is same as before React assumes that the DOM element represents the same component
// as before. But that is no longer true.
