import React from "react";
import ReactDOM from "react-dom/client";

/***
+ *
+ * Created A Server
+ * HMR - Hot Module Replacement
+ * File Watcher algorithm - C++
+ * BUNDLING
+ * MINIFY
+ * Cleaning our Code
+ * Dev abd Production Build
+ * Super Fast build algorithm
+ * Image Optimization
+ * Caching while development
+ * Compression
+ * Compatble with older version of browser
+ * HTTPS on dev
+ * port Number
+ * Consistent Hashing Algorithm
+ * Zero Config
+ *Tree Shaking - remove unwanted code
+ *
+ *
+ * Transitive Dependencies
+ */

const heading1 = React.createElement(
  "h1",
  {
    id: "title",
    hello: "world",
  },
  "React Element"
);
console.log(heading1);
//React.createElement=> js Object => HTML(DOM)

const heading3 = (
  <h1 id="title" key="h1">
    my JSX
  </h1>
);

//functional component
const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="Logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZpQh6EY7F3c1fJcvo00FnLgY8IiNs3352A&usqp=CAU"
    />
  </a>
);
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const restaurantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "458851",
      name: "KFC",
      uuid: "0b7b21dc-f940-4a9f-9e82-328a8b061c21",
      city: "7",
      area: "HB Town",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 29,
      minDeliveryTime: 29,
      maxDeliveryTime: 29,
      slaString: "29 MINS",
      lastMileTravel: 2.299999952316284,
      slugs: {
        restaurant: "kfc-hb-town-sodepur",
        city: "kolkata",
      },
      cityState: "7",
      address: "Panihati Plaza Barasat Road,Mitrangan HB Town,West Bengal",
      locality: "Barasat",
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
      adTrackingID: "cid=5913368~p=1~eid=00000186-2f96-405b-1c6f-8b9400ce0176",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "458851",
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        lastMileTravel: 2.299999952316284,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.3",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "220207",
      name: "Aminia",
      uuid: "4f215893-05db-49db-b348-a58ab6fb31cc",
      city: "7",
      area: "Panihati",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "n860rkmbxlku42y4tjzf",
      cuisines: [
        "Biryani",
        "Mughlai",
        "North Indian",
        "Indian",
        "Kebabs",
        "Tandoor",
      ],
      tags: [],
      costForTwo: 60000,
      costForTwoString: "₹600 FOR TWO",
      deliveryTime: 23,
      minDeliveryTime: 23,
      maxDeliveryTime: 23,
      slaString: "23 MINS",
      lastMileTravel: 0.20000000298023224,
      slugs: {
        restaurant: "aminia-sodepur-sodepur",
        city: "kolkata",
      },
      cityState: "7",
      address: "12 BT road. Sodepur. Kolkata - 700114",
      locality: "Sodepur",
      parentId: 3786,
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
      lastMileTravelString: "0.2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "220207",
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        lastMileTravel: 0.20000000298023224,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.4",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "540288",
      name: "DOSA WORLD",
      uuid: "0070993c-7b25-4084-a7ef-0f6fdaa04962",
      city: "7",
      area: "Panihati",
      totalRatingsString: "20+ ratings",
      cloudinaryImageId: "j3lrhccm9y4t1tmqwn6g",
      cuisines: ["South Indian", "Indian"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 42,
      minDeliveryTime: 42,
      maxDeliveryTime: 42,
      slaString: "42 MINS",
      lastMileTravel: 0.20000000298023224,
      slugs: {
        restaurant: "dosa-world-sodepur-sodepur",
        city: "kolkata",
      },
      cityState: "7",
      address:
        "sunrise apartment 2 town colony, WARD NO-4, PANIHATI MUNICIPALITY, North Twenty Four Parganas, West Bengal - 700114",
      locality: "Sodepur",
      parentId: 20870,
      unserviceable: false,
      veg: true,
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
      lastMileTravelString: "0.2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "540288",
        deliveryTime: 42,
        minDeliveryTime: 42,
        maxDeliveryTime: 42,
        lastMileTravel: 0.20000000298023224,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.6",
      totalRatings: 20,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "213114",
      name: "Wow! China",
      uuid: "8f92c790-eff4-42d0-a1f8-8da95e26efa2",
      city: "7",
      area: "Sodepur",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "qiuyiafsfdjp2xiurcju",
      cuisines: [
        "Tibetan",
        "Chinese",
        "Asian",
        "Snacks",
        "Continental",
        "Desserts",
        "Beverages",
      ],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 28,
      minDeliveryTime: 28,
      maxDeliveryTime: 28,
      slaString: "28 MINS",
      lastMileTravel: 0.4000000059604645,
      slugs: {
        restaurant: "wow-momo-sodepur-sodepur",
        city: "kolkata",
      },
      cityState: "7",
      address:
        "53, RAILWAY PARK, ISHWAR CHATTERJEE ROAD, PANIHATI SODEPUR. RAGHUNATH BHAVAN , SODEPUR STATION ROAD, WARD NO -13.KOLKATA",
      locality: "Ishwar Chatterjee Road",
      parentId: 226836,
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
      adTrackingID: "cid=5833081~p=4~eid=00000186-2f96-405b-1c6f-8b9500ce046e",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "213114",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        lastMileTravel: 0.4000000059604645,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.0",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "225299",
      name: "Wow! Momo",
      uuid: "4efa0fa0-b6a8-4cb2-93f2-60d878b092b3",
      city: "7",
      area: "Panihati",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "czbxfaw9t1k4l1rornaj",
      cuisines: [
        "Tibetan",
        "Healthy Food",
        "Asian",
        "Chinese",
        "Snacks",
        "Continental",
        "Desserts",
        "Beverages",
      ],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 23,
      minDeliveryTime: 23,
      maxDeliveryTime: 23,
      slaString: "23 MINS",
      lastMileTravel: 0,
      slugs: {
        restaurant: "wow-momo-sodepur-city-life-sodepur",
        city: "kolkata",
      },
      cityState: "7",
      address:
        "1/A, Peerless Nagar, Under Ward no -3, Panihati Municipality,Dist-24 pgs north, kolkata= 700114.",
      locality: "SODEPUR CITY LIFE",
      parentId: 1776,
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
      hasSurge: false,
      sla: {
        restaurantId: "225299",
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        lastMileTravel: 0,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.4",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
];

const RestaurantCard = ({name, cloudinaryImageId,cuisines,avgRating}) => {
  console.log(name);
 
   return (
    <div className="card">
      <img alt="img" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
     {
      restaurantList.map(restaurant => {
        return <RestaurantCard key={restaurant.data.id} {...restaurant.data}/>
      })
      }
      {/* <RestaurantCard {...restaurantList[0].data}/>
      <RestaurantCard {...restaurantList[1].data}/>
      <RestaurantCard {...restaurantList[2].data}/>
      <RestaurantCard {...restaurantList[3].data}/>
      <RestaurantCard {...restaurantList[4].data}/> */}
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

// const styleObj={border:"2px solid green",};
// const MyComp=()=>{
//   return(
//     <div style={{backgroundColor:"red"}}>
//     <h1 style={styleObj}>JSX</h1>
//     <h2>React</h2>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
