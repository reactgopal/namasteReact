import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - nav Items
 * Body
 *  - SearchI
 *  - RestaurantContainer
 *    - RestaurantCard
 *       - image,
 * Footer
 *    - Copyright
 *    - Links
 *    - Address
 *    - Contact
 */
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/previews/021/953/308/non_2x/food-ordering-app-logo-with-points-and-fork-shapes-in-the-center-free-vector.jpg"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
/*const styleCard = {
  backgroundColor: "yellow",
  padding: "20px",
  innerWidth: "200px",
  width: "200px",
  height: "150px",
};*/

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData;

  return (
    <div className="restaurant-card">
      <img
        alt="restaurant-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};
const resList = [
  {
    id: "666359",
    name: "Tea Post",
    cloudinaryImageId:
      "FOOD_CATALOG/IMAGES/CMS/2025/5/10/7917c547-7731-4c3b-a044-165a07210333_a35aacb1-4b94-46b9-8172-60def730340e.jpg_compressed",
    locality: "Dabholi Road",
    areaName: "Katargam",
    costForTwo: "₹300 for two",
    cuisines: ["Tea", "Coffee", "Snacks", "Gujarati"],
    avgRating: 4.6,
    veg: true,
    parentId: "4509",
    avgRatingString: "4.6",
    totalRatingsString: "560",
    promoted: true,
    adTrackingId:
      "cid=589c937b-d25b-4b50-9e1c-6887e8cc7c55~p=1~adgrpid=589c937b-d25b-4b50-9e1c-6887e8cc7c55#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=666359~plpr=COLLECTION~eid=a840b400-3d52-41a8-8be3-d506f111477b~srvts=1764650797532~collid=80373",
    sla: {
      deliveryTime: 51,
      lastMileTravel: 5.7,
      serviceability: "SERVICEABLE",
      slaString: "50-60 mins",
      lastMileTravelString: "5.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-12-03 05:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        textBased: {},
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹159",
      logoCtx: {
        text: "BENEFITS",
      },
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.png",
      },
      freedelMessage: "FREE DELIVERY",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
      commsStyling: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "118794",
    name: "Somnath Restaurant",
    cloudinaryImageId: "1347e329e05fca95914ccd13bccd64f3",
    locality: "Mini Bazaar Road",
    areaName: "Udhna-Surat",
    costForTwo: "₹300 for two",
    cuisines: ["Gujarati", "Fast Food", "Thalis", "Punjabi", "Beverages"],
    avgRating: 4.4,
    veg: true,
    parentId: "190836",
    avgRatingString: "4.4",
    totalRatingsString: "2.1K+",
    sla: {
      deliveryTime: 47,
      lastMileTravel: 3.6,
      serviceability: "SERVICEABLE",
      slaString: "45-50 mins",
      lastMileTravelString: "3.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-12-02 22:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        textBased: {},
        imageBased: {
          badgeObject: [
            {
              attributes: {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            },
          ],
        },
        textExtendedBadges: {},
      },
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.png",
      },
      freedelMessage: "FREE DELIVERY",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
      commsStyling: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "116846",
    name: "Halvawala Sweet And Snacks",
    cloudinaryImageId: "whqtpuqsbkisky4ngxaw",
    locality: "Vachi Sheri",
    areaName: "Salabatpura",
    costForTwo: "₹300 for two",
    cuisines: ["Desserts", "Sweets"],
    avgRating: 4.5,
    veg: true,
    parentId: "92975",
    avgRatingString: "4.5",
    totalRatingsString: "860",
    promoted: true,
    adTrackingId:
      "cid=2057379e-c18a-4f57-aa2c-97b6686e175a~p=2~adgrpid=2057379e-c18a-4f57-aa2c-97b6686e175a#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=116846~plpr=COLLECTION~eid=395b7e99-de87-4461-ac20-7e59dd593576~srvts=1764650797532~collid=80373",
    sla: {
      deliveryTime: 40,
      lastMileTravel: 6.9,
      serviceability: "SERVICEABLE",
      slaString: "40-45 mins",
      lastMileTravelString: "6.9 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-12-02 21:30:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        textBased: {},
        imageBased: {
          badgeObject: [
            {
              attributes: {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            },
          ],
        },
        textExtendedBadges: {},
      },
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.png",
      },
      freedelMessage: "FREE DELIVERY",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
      commsStyling: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "763157",
    name: "Sanju's Kitchen",
    cloudinaryImageId: "3091d100bcbdf7ae0e4c8da28a0de76a",
    locality: "G K Chambers",
    areaName: "Udhna-Surat",
    costForTwo: "₹400 for two",
    cuisines: ["Indian"],
    avgRating: 4.2,
    veg: true,
    parentId: "386243",
    avgRatingString: "4.2",
    totalRatingsString: "82",
    sla: {
      deliveryTime: 46,
      lastMileTravel: 3.6,
      serviceability: "SERVICEABLE",
      slaString: "45-50 mins",
      lastMileTravelString: "3.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-12-02 22:30:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        textBased: {},
        imageBased: {
          badgeObject: [
            {
              attributes: {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            },
          ],
        },
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹50 OFF",
      subHeader: "ABOVE ₹349",
      discountTag: "FLAT DEAL",
      logoCtx: {
        text: "BENEFITS",
      },
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.png",
      },
      freedelMessage: "FREE DELIVERY",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
      commsStyling: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "904066",
    name: "Surti Khaman House- Khaman, Locho, Farsan & More",
    cloudinaryImageId:
      "FOOD_CATALOG/IMAGES/CMS/2024/12/7/a72d78d2-f857-437f-80f8-088a4c7bdbe1_629b2afd-c506-42db-b669-6400ae30aaa8.jpg",
    locality: "Ambaji Rd",
    areaName: "Athwa",
    costForTwo: "₹300 for two",
    cuisines: ["Snacks"],
    avgRating: 3.9,
    veg: true,
    parentId: "550701",
    avgRatingString: "3.9",
    totalRatingsString: "561",
    promoted: true,
    adTrackingId:
      "cid=80edc306-5470-496a-aefb-9731577e8636~p=3~adgrpid=80edc306-5470-496a-aefb-9731577e8636#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=904066~plpr=COLLECTION~eid=c9d5f707-c70c-456f-9672-a0346220bad4~srvts=1764650797532~collid=80373",
    sla: {
      deliveryTime: 42,
      lastMileTravel: 6.5,
      serviceability: "SERVICEABLE",
      slaString: "40-50 mins",
      lastMileTravelString: "6.5 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-12-02 21:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        textBased: {},
        imageBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹29",
      logoCtx: {
        text: "BENEFITS",
      },
      footerText: "9 DEALS LEFT",
      secondaryHeaderType: "SECONDARY_HEADER_TYPE_USAGE_LIMIT_OFFER",
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.png",
      },
      freedelMessage: "FREE DELIVERY",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
      commsStyling: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "1082634",
    name: "Shreya's kitchen",
    cloudinaryImageId:
      "FOOD_CATALOG/IMAGES/CMS/2025/4/20/94ad480d-bab8-40e5-8192-c9abc334bc5a_2ae6fe6c-f09b-4306-a989-b02ebdef7680.jpg",
    locality: "Athwa",
    areaName: "Athwa",
    costForTwo: "₹350 for two",
    cuisines: [
      "Chinese",
      "Biryani",
      "Rajasthani",
      "Chaat",
      "Maharashtrian",
      "Hyderabadi",
      "Indian",
      "Kashmiri",
      "Tandoor",
      "Gujarati",
    ],
    avgRating: 4.2,
    veg: true,
    parentId: "186119",
    avgRatingString: "4.2",
    totalRatingsString: "56",
    sla: {
      deliveryTime: 51,
      lastMileTravel: 4.3,
      serviceability: "SERVICEABLE",
      slaString: "50-60 mins",
      lastMileTravelString: "4.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-12-03 05:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        textBased: {},
        imageBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "10% OFF",
      subHeader: "ABOVE ₹149",
      discountTag: "FLAT DEAL",
      logoCtx: {
        text: "BENEFITS",
      },
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.png",
      },
      freedelMessage: "FREE DELIVERY",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
      commsStyling: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "353411",
    name: "Akhil Hind Mahila Parishad Bruhad Surat Shakha",
    cloudinaryImageId: "edjjmuqjmpr6f3zb4ms2",
    locality: "Timaliyawad",
    areaName: "Nanpura",
    costForTwo: "₹200 for two",
    cuisines: ["Indian", "Gujarati", "Snacks", "Desserts", "Chaat"],
    avgRating: 4.6,
    veg: true,
    parentId: "28541",
    avgRatingString: "4.6",
    totalRatingsString: "1.6K+",
    promoted: true,
    adTrackingId:
      "cid=49ccca2f-b527-4e1e-8707-14df949bba30~p=4~adgrpid=49ccca2f-b527-4e1e-8707-14df949bba30#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=353411~plpr=COLLECTION~eid=731b4702-3e7f-4231-b7f2-966d3355daf7~srvts=1764650797532~collid=80373",
    sla: {
      deliveryTime: 51,
      lastMileTravel: 8.2,
      serviceability: "SERVICEABLE",
      slaString: "50-60 mins",
      lastMileTravelString: "8.2 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-12-02 18:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        textBased: {},
        imageBased: {
          badgeObject: [
            {
              attributes: {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            },
          ],
        },
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹99",
      logoCtx: {
        text: "BENEFITS",
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
      commsStyling: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "948080",
    name: "Jasu's Kitchen",
    cloudinaryImageId:
      "FOOD_CATALOG/IMAGES/CMS/2025/1/26/32a6ed27-3001-4e0a-8df1-b70f9c8fae19_02da4fca-e663-433e-b944-383d0c63a10f.jpg",
    locality: "Varachha",
    areaName: "Varachha",
    costForTwo: "₹200 for two",
    cuisines: ["Thalis", "Gujarati"],
    avgRating: 4.6,
    veg: true,
    parentId: "555808",
    avgRatingString: "4.6",
    totalRatingsString: "52",
    sla: {
      deliveryTime: 55,
      lastMileTravel: 4.3,
      serviceability: "SERVICEABLE",
      slaString: "55-65 mins",
      lastMileTravelString: "4.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-12-03 00:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            },
          ],
        },
        textExtendedBadges: {},
        textBased: {},
      },
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.png",
      },
      freedelMessage: "FREE DELIVERY",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
      commsStyling: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "71037",
    name: "Tipsy Topsy ( since 1987 )",
    cloudinaryImageId:
      "FOOD_CATALOG/IMAGES/CMS/2025/6/11/5ee035d8-6b37-41a9-a7ae-6d94494e167d_91b0715b-b578-4e85-bbdf-421372084b5e.jpg",
    locality: "Gandhi Smruti Bhavan",
    areaName: "Nanpura",
    costForTwo: "₹400 for two",
    cuisines: [
      "North Indian",
      "Thalis",
      "Chinese",
      "Fast Food",
      "Street Food",
      "Snacks",
    ],
    avgRating: 4.5,
    veg: true,
    parentId: "694811",
    avgRatingString: "4.5",
    totalRatingsString: "18K+",
    promoted: true,
    adTrackingId:
      "cid=a03dc491-3f2c-4877-b9bd-e5f19193f023~p=5~adgrpid=a03dc491-3f2c-4877-b9bd-e5f19193f023#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=71037~plpr=COLLECTION~eid=2a1a1b43-867b-41cf-b79d-e8dc878723e1~srvts=1764650797532~collid=80373",
    sla: {
      deliveryTime: 51,
      lastMileTravel: 8.8,
      serviceability: "SERVICEABLE",
      slaString: "50-60 mins",
      lastMileTravelString: "8.8 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-12-02 22:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        textBased: {},
        imageBased: {
          badgeObject: [
            {
              attributes: {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            },
          ],
        },
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹99",
      logoCtx: {
        text: "BENEFITS",
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
      commsStyling: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
];

// not using key (not acceptable) <<<<< index as key  <<<<<<<< unique id as key (best practice)

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
