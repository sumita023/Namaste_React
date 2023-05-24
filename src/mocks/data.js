export const MENU_DATA = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    cards: [
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "296955",
              name: "TANDOOR BOX",
              city: "Kolkata",
              slugs: {
                restaurant: "tandoor-box-chinar-park-chinar-park",
                city: "kolkata",
              },
              uniqueId: "10435781-b828-4956-9dad-6de069dce9f8",
              cloudinaryImageId: "ad44908b2d32aa3513545e65f4bba913",
              locality: "Sodepur",
              areaName: "Sodepur",
              costForTwo: "30000",
              costForTwoMessage: "₹300 for two",
              cuisines: ["North Indian", "Mughlai"],
              avgRating: 4.3,
              feeDetails: {
                restaurantId: "296955",
                fees: [
                  { name: "distance", fee: 3200 },
                  { name: "time" },
                  { name: "special" },
                ],
                totalFee: 3200,
                icon: "v1648635511/Delivery_fee_new_cjxumu",
                message: "1 kms | ₹32 Delivery fee will apply",
              },
              parentId: "6291",
              avgRatingString: "4.3",
              totalRatingsString: "1K+ ratings",
              sla: {
                restaurantId: "296955",
                deliveryTime: 25,
                minDeliveryTime: 25,
                maxDeliveryTime: 25,
                lastMileTravel: 1,
                serviceability: "SERVICEABLE",
                stressFactor: 0.753304,
                rainMode: "RAIN_MODE_NONE",
                longDistance: "LONG_DISTANCE_NOT_LONG_DISTANCE",
                zoneId: 993,
                slaString: "25 MINS",
                lastMileTravelString: "1.0 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2023-04-10 23:00:00",
                visibility: true,
                opened: true,
                restaurantClosedMeta: {},
              },
              aggregatedDiscountInfo: {
                header: "50% off",
                shortDescriptionList: [
                  {
                    meta: "50% off | Use TRYNEW",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "FLAT150 off | Use FLATDEAL",
                    discountType: "Flat",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    meta: "50% off up to ₹100 | Use code TRYNEW",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "FLAT150 off | Use FLATDEAL",
                    discountType: "Flat",
                    operationType: "RESTAURANT",
                  },
                ],
                visible: true,
              },
              badges: {},
              slugString: "tandoor-box-chinar-park-chinar-park",
              multiOutlet: true,
              isOpen: true,
              labels: [
                { title: "Timings", message: "null" },
                {
                  title: "Address",
                  message:
                    "2/S/1, SAHID COLONY, WARD NO. 13, PANIHATI MUNICIPALITY, North Twenty Four Parganas, West Bengal-700114",
                },
                { title: "Cuisines", message: "North Indian,Mughlai" },
              ],
              totalRatings: 1000,
              aggregatedDiscountInfoV2: {
                header: "50% off",
                shortDescriptionList: [
                  {
                    meta: "50% off | Use TRYNEW",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "FLAT150 off | Use FLATDEAL",
                    discountType: "Flat",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    meta: "50% off up to ₹100 | Use code TRYNEW",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "FLAT150 off | Use FLATDEAL",
                    discountType: "Flat",
                    operationType: "RESTAURANT",
                  },
                ],
                couponDetailsCta: "View coupon details",
              },
              type: "F",
              headerBanner: {
                url: "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/296955",
              },
              expectationNotifiers: [
                {
                  text: "1 kms | ₹32 Delivery fee will apply",
                  icon: { imageId: "v1648635511/Delivery_fee_new_cjxumu" },
                  popup: { cta: {} },
                  type: "DISTANCE_FEE_NON_FOOD_LM",
                  enrichedText: "<b>1 kms</b> | ₹32 Delivery fee will apply",
                  halfCardPopup: { halfCardPopupHeader: {} },
                },
              ],
              ratingSlab: "RATING_SLAB_5",
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
              },
              hasBestsellerItems: true,
              cartOrderabilityNudgeBanner: { parameters: {}, presentation: {} },
              areaPostalCode: "0",
              latLong: "22.696871,88.375165",
            },
            analytics: {},
          },
          relevance: {
            type: "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
            sectionId: "POP_UP_CROUTON_MENU",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            layout: {
              rows: 1,
              columns: 5,
              horizontalScrollEnabled: true,
              itemSpacing: 12,
              lineSpacing: 10,
              widgetPadding: {},
              containerStyle: {
                containerPadding: { left: 10, right: 10, bottom: 16 },
              },
              scrollBar: {},
            },
            id: "offerCollectionWidget_UX4",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                offers: [
                  {
                    info: {
                      header: "50% OFF UPTO ₹100",
                      offerTagColor: "#E46D47",
                      offerIds: ["3c12592e-879c-480d-9ed9-11931f08c97a"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE TRYNEW",
                      description: "ABOVE ₹159",
                      offerType: "offers",
                      restId: "296955",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: { type: "OFFER_HALF_CARD" },
                  },
                  {
                    info: {
                      header: "FLAT ₹150 OFF",
                      offerTag: "FLAT DEAL",
                      offerTagColor: "#E46D47",
                      offerIds: ["473a9fa1-e3d3-4f52-b23c-aa45fd7bc48d"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE FLATDEAL",
                      description: "ABOVE ₹999",
                      offerType: "offers",
                      restId: "296955",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: { type: "OFFER_HALF_CARD" },
                  },
                  {
                    info: {
                      header: "20% OFF UPTO ₹120",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "rng/md/ads/production/1acdb97aadcb61b323307845bda86535",
                      offerIds: ["ce5f9f86-e9b3-4580-9a70-4ce54ffd449c"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE FEDERALCC",
                      description: "ABOVE ₹249",
                      offerType: "offers",
                      restId: "296955",
                      offerLogo:
                        "rng/md/ads/production/1acdb97aadcb61b323307845bda86535",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: { type: "OFFER_HALF_CARD" },
                  },
                  {
                    info: {
                      header: "15% OFF UPTO ₹100",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "rng/md/ads/production/6ef0fc65ca643ecbdcf8a930599c7edd",
                      offerIds: ["523d4bbf-6b4d-41cf-93ec-6bf718deb347"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE HSBCFEST",
                      description: "ABOVE ₹499",
                      offerType: "offers",
                      restId: "296955",
                      offerLogo:
                        "rng/md/ads/production/6ef0fc65ca643ecbdcf8a930599c7edd",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: { type: "OFFER_HALF_CARD" },
                  },
                  {
                    info: {
                      header: "10% OFF UPTO ₹100",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "rng/md/ads/production/5c4848f8c208408b048c18f6be604f14",
                      offerIds: ["e2458c78-c6d7-45fa-9876-097a713aba81"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE INDUSIND100",
                      description: "ABOVE ₹699",
                      offerType: "offers",
                      restId: "296955",
                      offerLogo:
                        "rng/md/ads/production/5c4848f8c208408b048c18f6be604f14",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: { type: "OFFER_HALF_CARD" },
                  },
                ],
              },
            },
          },
        },
      },
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                      badges: {},
                      vegOnlyDetails: {
                        imageId: "AutoVegOnly_qkjowj",
                        title: "Showing only vegetarian options.",
                        description:
                          "Tap on the VEG ONLY button to turn off the setting",
                      },
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Veg Kebabs",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110168543",
                              name: "Achari Paneer Tikka [6pcs]",
                              category: "Veg Kebabs",
                              description:
                                "Soft & Fresh Paneer Marinated with Pickle And Hung Curd, Cooked To Perfection In The Tandoor. Served With Mint Chutney",
                              imageId: "esp6h5ashrsqfsynm5ar",
                              inStock: 1,
                              isVeg: 1,
                              price: 28900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "77763370",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110168836",
                              name: "Malai Mushroom Tikka [8pcs]",
                              category: "Veg Kebabs",
                              description:
                                "Button Mushrooms Marinated With Cream Cheese, Cashew Paste, Indian Spices And Hung Curd, Cooked To Perfection In The Tandoor. Served With Mint Chutney",
                              imageId: "ljs3batcshydvx4aawmg",
                              inStock: 1,
                              isVeg: 1,
                              price: 28900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "77764100",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110168886",
                              name: "Peri Peri Mushroom Tikka [8pcs]",
                              category: "Veg Kebabs",
                              description:
                                "Button Mushrooms Marinated With Peri Peri Spice And Hung Curd, Cooked To Perfection In The Tandoor. Served With Mint Chutney",
                              imageId: "ej7zqzv3ydh8ohgjcvof",
                              inStock: 1,
                              isVeg: 1,
                              price: 28900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "77764141",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110168906",
                              name: "Paneer Malai Kebab [6pcs]",
                              category: "Veg Kebabs",
                              description:
                                "Soft & Fresh Paneer Marinated With Cream Cheese, Cashew Paste, Indian Spices And Hung Curd, Cooked To Perfection In The Tandoor. Served With Mint Chutney",
                              imageId: "ezxrgfjgunluhux8fuhe",
                              inStock: 1,
                              isVeg: 1,
                              price: 28900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "77764731",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110168923",
                              name: "Paneer Tikka [6pcs]",
                              category: "Veg Kebabs",
                              description:
                                "Soft & Fresh Paneer Marinated With Exotic Indian Spices And Hung Curd, Cooked To Perfection In The Tandoor. Served With Mint Chutney",
                              imageId: "aq0mdibodkrnekgs9tkw",
                              inStock: 1,
                              isVeg: 1,
                              price: 28900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "77764897",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110168934",
                              name: "Veg Stuffed Potato [6pcs]",
                              category: "Veg Kebabs",
                              description:
                                "Fresh Potatoes Stuffed With Paneer, Veggies And Cheese, Cooked To Perfection In The Tandoor. Served With Mint Chutney",
                              imageId: "auxhxy6fab3j7iknxh5p",
                              inStock: 1,
                              isVeg: 1,
                              price: 28900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "77765194",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110169018",
                              name: "Hariyali Paneer Kebab [6pcs]",
                              category: "Veg Kebabs",
                              description:
                                "Soft & Fresh Paneer Marinated With Coriander Leaves, Mint Leaves And Hung Curd, Cooked To Perfection In The Tandoor. Served With Mint Chutney",
                              imageId: "jmuf2wyg6spp5rinfkya",
                              inStock: 1,
                              isVeg: 1,
                              price: 28900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "77767202",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110799226",
                              name: "Ajwain Paneer Tikka [6pcs]",
                              category: "Veg Kebabs",
                              description:
                                "Soft Paneer is marinated in yogurt and spices along with one magical ingredient ?ajwain/carom seeds? which adds a burst of flavours to this dish",
                              imageId: "66210a3840a6d299949f13b31f2aba2d",
                              inStock: 1,
                              isVeg: 1,
                              price: 30900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "86432607",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110799227",
                              name: "Hara Bhara Kebab [6pcs]",
                              category: "Veg Kebabs",
                              description:
                                "Its a kebab full of greens made with spinach, pear and potatoes.",
                              imageId: "2e7740ea9001b4bd9404b3c34814a099",
                              inStock: 1,
                              isVeg: 1,
                              price: 26900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "86432600",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110799228",
                              name: "Veg Falafel [6pcs]",
                              category: "Veg Kebabs",
                              description:
                                "Deep-fried patty-shaped fritter made from ground chickpeas, broad beans, served with pita and hummus.",
                              imageId: "0f127788a84746f5f5338b6015e2aba6",
                              inStock: 1,
                              isVeg: 1,
                              price: 26900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "86432605",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110799229",
                              name: "Veg Seekh Kebab [6pcs]",
                              category: "Veg Kebabs",
                              description:
                                "MASHED VEGGIES SEASONED WITH INDIAN SPICES, SKEWERED INTO CYLINDRICAL SHAPES AND COOKED TO PERFECTION IN THE TANDOOR. SERVED WITH MINT CHUTNEY",
                              imageId: "3eb798e389294724ccba66b948d2cfa1",
                              inStock: 1,
                              isVeg: 1,
                              price: 26900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "86432603",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "111525005",
                              name: "Malai Chaap [6pcs]",
                              category: "Veg Kebabs",
                              description:
                                "Soya Chaap coated with cream, butter and cardamom powder.",
                              inStock: 1,
                              isVeg: 1,
                              price: 28900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "86432611",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "111525006",
                              name: "Peri Peri Soya Chaap [6pcs]",
                              category: "Veg Kebabs",
                              description:
                                "Soya Chaap Marinated With Peri Peri Spice And Hung Curd, Cooked To Perfection In The Tandoor. Served With Mint Chuntey",
                              inStock: 1,
                              isVeg: 1,
                              price: 28900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "86432633",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "111525007",
                              name: "Tandoori Soya Chaap [6pcs]",
                              category: "Veg Kebabs",
                              description:
                                "Soya Chaap Marinated With Exotic Indian Spices And Hung Curd, Cooked To Perfection In The Tandoor. Served With Mint Chutney.",
                              inStock: 1,
                              isVeg: 1,
                              price: 28900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "86432615",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Fish Kebabs",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110168835",
                              name: "Gondharaj Fish Tikka",
                              category: "Fish Kebabs",
                              description:
                                "Soft And Fresh Pieces Of Basa/Bhetki Fish Marinated With Gondhoraj Lemon Zest, Cashew Paste And Hung Curd, Cooked To Perfection In The Tandoor. Served With Mint Chutney",
                              imageId: "nd2y1vhdt8jrfgtrz15a",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "25020193",
                                    name: "Customisation",
                                    variations: [
                                      {
                                        name: "BHETKI [4pcs]",
                                        price: 419,
                                        default: 1,
                                        id: "79797332",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "BASA [6pcs]",
                                        price: 389,
                                        id: "79797333",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "25020193",
                                        variationId: "79797332",
                                      },
                                    ],
                                    price: 41900,
                                    addonCombinations: [
                                      {
                                        groupId: "77764097",
                                        addonId: "62785731",
                                      },
                                      {
                                        groupId: "77764097",
                                        addonId: "62785732",
                                      },
                                      {
                                        groupId: "77764097",
                                        addonId: "62785733",
                                      },
                                      {
                                        groupId: "77764097",
                                        addonId: "62785734",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "25020193",
                                        variationId: "79797333",
                                      },
                                    ],
                                    price: 38900,
                                    addonCombinations: [
                                      {
                                        groupId: "77764097",
                                        addonId: "62785731",
                                      },
                                      {
                                        groupId: "77764097",
                                        addonId: "62785732",
                                      },
                                      {
                                        groupId: "77764097",
                                        addonId: "62785733",
                                      },
                                      {
                                        groupId: "77764097",
                                        addonId: "62785734",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "77764097",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              defaultPrice: 41900,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110168933",
                              name: "Peri Peri Fish Kebab",
                              category: "Fish Kebabs",
                              description:
                                "Soft And Fresh Pieces Of Basa/Bhetki Fish Marinated With Peri Peri Spice And Hung Curd, Cooked To Perfection In The Tandoor. Served With Mint Chuntey",
                              imageId: "oucdhv8q1xltphbmmwo6",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "25020195",
                                    name: "Customisation",
                                    variations: [
                                      {
                                        name: "BHETKI [4pcs]",
                                        price: 419,
                                        default: 1,
                                        id: "79797336",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "BASA [6pcs]",
                                        price: 389,
                                        id: "79797337",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "25020195",
                                        variationId: "79797336",
                                      },
                                    ],
                                    price: 41900,
                                    addonCombinations: [
                                      {
                                        groupId: "77765072",
                                        addonId: "62785731",
                                      },
                                      {
                                        groupId: "77765072",
                                        addonId: "62785732",
                                      },
                                      {
                                        groupId: "77765072",
                                        addonId: "62785733",
                                      },
                                      {
                                        groupId: "77765072",
                                        addonId: "62785734",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "25020195",
                                        variationId: "79797337",
                                      },
                                    ],
                                    price: 38900,
                                    addonCombinations: [
                                      {
                                        groupId: "77765072",
                                        addonId: "62785731",
                                      },
                                      {
                                        groupId: "77765072",
                                        addonId: "62785732",
                                      },
                                      {
                                        groupId: "77765072",
                                        addonId: "62785733",
                                      },
                                      {
                                        groupId: "77765072",
                                        addonId: "62785734",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "77765072",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              defaultPrice: 41900,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110168935",
                              name: "Fish Tikka",
                              category: "Fish Kebabs",
                              description:
                                "Soft And Fresh Pieces Of Basa/Bhetki Fish Marinated With Exotic Indian Spices And Hung Curd, Cooked To Perfection In The Tandoor. Served With Mint Chuntey",
                              imageId: "m63n71od57pnrbdmrxew",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "25020192",
                                    name: "Customisation",
                                    variations: [
                                      {
                                        name: "BHETKI [4pcs]",
                                        price: 419,
                                        default: 1,
                                        id: "79797330",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "BASA [6pcs]",
                                        price: 389,
                                        id: "79797331",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "25020192",
                                        variationId: "79797330",
                                      },
                                    ],
                                    price: 41900,
                                    addonCombinations: [
                                      {
                                        groupId: "77765295",
                                        addonId: "62785731",
                                      },
                                      {
                                        groupId: "77765295",
                                        addonId: "62785732",
                                      },
                                      {
                                        groupId: "77765295",
                                        addonId: "62785733",
                                      },
                                      {
                                        groupId: "77765295",
                                        addonId: "62785734",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "25020192",
                                        variationId: "79797331",
                                      },
                                    ],
                                    price: 38900,
                                    addonCombinations: [
                                      {
                                        groupId: "77765295",
                                        addonId: "62785731",
                                      },
                                      {
                                        groupId: "77765295",
                                        addonId: "62785732",
                                      },
                                      {
                                        groupId: "77765295",
                                        addonId: "62785733",
                                      },
                                      {
                                        groupId: "77765295",
                                        addonId: "62785734",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "77765295",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              defaultPrice: 41900,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110168956",
                              name: "Hariyali Fish Kebab",
                              category: "Fish Kebabs",
                              description:
                                "Soft And Fresh Pieces Of Basa/Bhetki Fish Marinated With Coriander Leaves, Mint Leaves And Hung Curd, Cooked To Perfection In The Tandoor. Served With Mint Chuntey",
                              imageId: "ys80jergm948cm9yygfm",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "25020194",
                                    name: "Customisation",
                                    variations: [
                                      {
                                        name: "BHETKI [4pcs]",
                                        price: 419,
                                        default: 1,
                                        id: "79797334",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "BASA [6pcs]",
                                        price: 389,
                                        id: "79797335",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "25020194",
                                        variationId: "79797334",
                                      },
                                    ],
                                    price: 41900,
                                    addonCombinations: [
                                      {
                                        groupId: "77765733",
                                        addonId: "62785731",
                                      },
                                      {
                                        groupId: "77765733",
                                        addonId: "62785732",
                                      },
                                      {
                                        groupId: "77765733",
                                        addonId: "62785733",
                                      },
                                      {
                                        groupId: "77765733",
                                        addonId: "62785734",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "25020194",
                                        variationId: "79797335",
                                      },
                                    ],
                                    price: 38900,
                                    addonCombinations: [
                                      {
                                        groupId: "77765733",
                                        addonId: "62785731",
                                      },
                                      {
                                        groupId: "77765733",
                                        addonId: "62785732",
                                      },
                                      {
                                        groupId: "77765733",
                                        addonId: "62785733",
                                      },
                                      {
                                        groupId: "77765733",
                                        addonId: "62785734",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "77765733",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              defaultPrice: 41900,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110799230",
                              name: "Ajwain Fish Tikka [6pcs]",
                              category: "Fish Kebabs",
                              description:
                                "Soft and fresh pieces of Basa/Bhetki marinated in yogurt and spices along with one magical ingredient ?ajwain/carom seeds? which adds a burst of flavours to this dish.",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "25020191",
                                    name: "Customisation",
                                    variations: [
                                      {
                                        name: "BHETKI [4pcs]",
                                        price: 439,
                                        default: 1,
                                        id: "79797328",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "BASA [6pcs]",
                                        price: 389,
                                        id: "79797329",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "25020191",
                                        variationId: "79797328",
                                      },
                                    ],
                                    price: 43900,
                                    addonCombinations: [
                                      {
                                        groupId: "86432609",
                                        addonId: "62785731",
                                      },
                                      {
                                        groupId: "86432609",
                                        addonId: "62785732",
                                      },
                                      {
                                        groupId: "86432609",
                                        addonId: "62785733",
                                      },
                                      {
                                        groupId: "86432609",
                                        addonId: "62785734",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "25020191",
                                        variationId: "79797329",
                                      },
                                    ],
                                    price: 38900,
                                    addonCombinations: [
                                      {
                                        groupId: "86432609",
                                        addonId: "62785731",
                                      },
                                      {
                                        groupId: "86432609",
                                        addonId: "62785732",
                                      },
                                      {
                                        groupId: "86432609",
                                        addonId: "62785733",
                                      },
                                      {
                                        groupId: "86432609",
                                        addonId: "62785734",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "86432609",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              defaultPrice: 43900,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "111525008",
                              name: "Peri Peri Prawns",
                              category: "Fish Kebabs",
                              description:
                                "Fresh Prawns Marinated With Peri Peri Spice And Hung Curd, Cooked To Perfection In The Tandoor. Served With Mint Chuntey",
                              imageId: "ea49681cb93e76d01ad566d39f31d80f",
                              inStock: 1,
                              price: 61900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "86432593",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "111525009",
                              name: "Tandoori Prawns",
                              category: "Fish Kebabs",
                              description:
                                "Fresh Prawns marinated in yogurt and Indian spices.",
                              imageId: "48cb85210aebab2c11a62c0bfc039215",
                              inStock: 1,
                              price: 61900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "86432596",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Chicken Kebabs",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "57402025",
                              name: "Tangdi Kebab (2pcs)",
                              category: "Chicken Kebabs",
                              description:
                                "Soft And Juicy Chicken Legs Marinated With Indian Spices And Hung Curd, Cooked To Perfection In The Tandoor. Served With Mint Chutney",
                              imageId: "cdf9553e2505024ba5048051b031aaef",
                              inStock: 1,
                              price: 29900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "77766303",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "57402026",
                              name: "Tandoori Chicken (2pcs)",
                              category: "Chicken Kebabs",
                              description:
                                "Succulent pieces of roasted chicken marinated in yogurt and Indian spices.",
                              imageId: "zjumidqcufarddqmhtbf",
                              inStock: 1,
                              price: 36900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "77765922",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66894341",
                              name: "Chicken Seekh Kebab",
                              category: "Chicken Kebabs",
                              description:
                                "Minced Chicken Seasoned With Indian Spices, Skewered Into Cylindrical Shapes And Cooked To Perfection In The Tandoor. Served With Mint Chutney",
                              imageId: "z890vjstb1gjovu5zrre",
                              inStock: 1,
                              price: 31900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "77767227",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110168868",
                              name: "Peri Peri Chicken Kebab",
                              category: "Chicken Kebabs",
                              description:
                                "Tender & Juicy Chicken Boneless Pieces Marinated With Peri Peri Spice And Hung Curd, Cooked To Perfection In The Tandoor. Served With Mint Chutney",
                              imageId: "k9njcuy3oybvdecek36k",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "24420478",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half (6pcs)",
                                        price: 319,
                                        default: 1,
                                        id: "78556688",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full (12pcs)",
                                        price: 629,
                                        id: "83619654",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "24420478",
                                        variationId: "78556688",
                                      },
                                    ],
                                    price: 31900,
                                    addonCombinations: [
                                      {
                                        groupId: "77764102",
                                        addonId: "62785731",
                                      },
                                      {
                                        groupId: "77764102",
                                        addonId: "62785732",
                                      },
                                      {
                                        groupId: "77764102",
                                        addonId: "62785733",
                                      },
                                      {
                                        groupId: "77764102",
                                        addonId: "62785734",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "24420478",
                                        variationId: "83619654",
                                      },
                                    ],
                                    price: 62900,
                                    addonCombinations: [
                                      {
                                        groupId: "77764102",
                                        addonId: "62785731",
                                      },
                                      {
                                        groupId: "77764102",
                                        addonId: "62785732",
                                      },
                                      {
                                        groupId: "77764102",
                                        addonId: "62785733",
                                      },
                                      {
                                        groupId: "77764102",
                                        addonId: "62785734",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "77764102",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              defaultPrice: 31900,
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110168885",
                              name: "Gondhoraj Chicken Tikka",
                              category: "Chicken Kebabs",
                              description:
                                "Tender & Juicy Chicken Boneless Pieces Marinated With Gondhoraj Lemon Zest, Cashew Paste And Hung Curd, Cooked To Perfection In The Tandoor. Served With Mint Chutney",
                              imageId: "yqh6zcfqcgzrfgq9de4z",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "24420479",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half (6pcs)",
                                        price: 319,
                                        default: 1,
                                        id: "78556689",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full (12pcs)",
                                        price: 629,
                                        id: "83619655",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "24420479",
                                        variationId: "78556689",
                                      },
                                    ],
                                    price: 31900,
                                    addonCombinations: [
                                      {
                                        groupId: "77764139",
                                        addonId: "62785731",
                                      },
                                      {
                                        groupId: "77764139",
                                        addonId: "62785732",
                                      },
                                      {
                                        groupId: "77764139",
                                        addonId: "62785733",
                                      },
                                      {
                                        groupId: "77764139",
                                        addonId: "62785734",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "24420479",
                                        variationId: "83619655",
                                      },
                                    ],
                                    price: 62900,
                                    addonCombinations: [
                                      {
                                        groupId: "77764139",
                                        addonId: "62785731",
                                      },
                                      {
                                        groupId: "77764139",
                                        addonId: "62785732",
                                      },
                                      {
                                        groupId: "77764139",
                                        addonId: "62785733",
                                      },
                                      {
                                        groupId: "77764139",
                                        addonId: "62785734",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "77764139",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              defaultPrice: 31900,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110169019",
                              name: "Chicken Tikka",
                              category: "Chicken Kebabs",
                              description:
                                "Tender & Juicy Chicken Boneless Pieces Marinated With Coriander Leaves, Mint Leaves And Hung Curd, Cooked To Perfection In The Tandoor. Served With Mint Chutney",
                              imageId: "vmavi07qkm7nsy7vukvv",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "24420561",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half (6pcs)",
                                        price: 319,
                                        default: 1,
                                        id: "78556934",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full (12pcs)",
                                        price: 629,
                                        id: "83619656",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "24420561",
                                        variationId: "78556934",
                                      },
                                    ],
                                    price: 31900,
                                    addonCombinations: [
                                      {
                                        groupId: "77767223",
                                        addonId: "62785731",
                                      },
                                      {
                                        groupId: "77767223",
                                        addonId: "62785732",
                                      },
                                      {
                                        groupId: "77767223",
                                        addonId: "62785733",
                                      },
                                      {
                                        groupId: "77767223",
                                        addonId: "62785734",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "24420561",
                                        variationId: "83619656",
                                      },
                                    ],
                                    price: 62900,
                                    addonCombinations: [
                                      {
                                        groupId: "77767223",
                                        addonId: "62785731",
                                      },
                                      {
                                        groupId: "77767223",
                                        addonId: "62785732",
                                      },
                                      {
                                        groupId: "77767223",
                                        addonId: "62785733",
                                      },
                                      {
                                        groupId: "77767223",
                                        addonId: "62785734",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "77767223",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              defaultPrice: 31900,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110169021",
                              name: "Chicken Hariyali Kebab",
                              category: "Chicken Kebabs",
                              description:
                                "Tender & Juicy Chicken Boneless Pieces Marinated With Exotic Indian Spices And Hung Curd, Cooked To Perfection In The Tandoor. Served With Mint Chutney",
                              imageId: "k3h02sdu3ocphcxptvgt",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "24420562",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half (6pcs)",
                                        price: 319,
                                        default: 1,
                                        id: "78556935",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full (12pcs)",
                                        price: 629,
                                        id: "83619657",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "24420562",
                                        variationId: "78556935",
                                      },
                                    ],
                                    price: 31900,
                                    addonCombinations: [
                                      {
                                        groupId: "77767225",
                                        addonId: "62785731",
                                      },
                                      {
                                        groupId: "77767225",
                                        addonId: "62785732",
                                      },
                                      {
                                        groupId: "77767225",
                                        addonId: "62785733",
                                      },
                                      {
                                        groupId: "77767225",
                                        addonId: "62785734",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "24420562",
                                        variationId: "83619657",
                                      },
                                    ],
                                    price: 62900,
                                    addonCombinations: [
                                      {
                                        groupId: "77767225",
                                        addonId: "62785731",
                                      },
                                      {
                                        groupId: "77767225",
                                        addonId: "62785732",
                                      },
                                      {
                                        groupId: "77767225",
                                        addonId: "62785733",
                                      },
                                      {
                                        groupId: "77767225",
                                        addonId: "62785734",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "77767225",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              defaultPrice: 31900,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110169034",
                              name: "JAMAICAN CHICKEN JERK",
                              category: "Chicken Kebabs",
                              description:
                                "Tender & Juicy Chicken Boneless Pieces Marinated With Jamaican Jerk Seasoning And Hung Curd, Cooked To Perfection In The Tandoor. Served With Mint Chutney",
                              imageId: "fzo4kccgsuegpqo1akao",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "24420570",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half (6pcs)",
                                        price: 339,
                                        default: 1,
                                        id: "78556950",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full (12pcs)",
                                        price: 629,
                                        id: "83619659",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "24420570",
                                        variationId: "78556950",
                                      },
                                    ],
                                    price: 33900,
                                    addonCombinations: [
                                      {
                                        groupId: "77767242",
                                        addonId: "62785731",
                                      },
                                      {
                                        groupId: "77767242",
                                        addonId: "62785732",
                                      },
                                      {
                                        groupId: "77767242",
                                        addonId: "62785733",
                                      },
                                      {
                                        groupId: "77767242",
                                        addonId: "62785734",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "24420570",
                                        variationId: "83619659",
                                      },
                                    ],
                                    price: 62900,
                                    addonCombinations: [
                                      {
                                        groupId: "77767242",
                                        addonId: "62785731",
                                      },
                                      {
                                        groupId: "77767242",
                                        addonId: "62785732",
                                      },
                                      {
                                        groupId: "77767242",
                                        addonId: "62785733",
                                      },
                                      {
                                        groupId: "77767242",
                                        addonId: "62785734",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "77767242",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              defaultPrice: 33900,
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110169040",
                              name: "Chicken Stuffed Potato [6pcs]",
                              category: "Chicken Kebabs",
                              description:
                                "Fresh Potatoes Stuffed With Seasoned Minced Chicken And Cheese, Cooked To Perfection In The Tandoor. Served With Mint Chutney",
                              imageId: "abusfcv5m2vkhs81tvf6",
                              inStock: 1,
                              price: 31900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "77767267",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110169193",
                              name: "Chicken Reshmi Kebab",
                              category: "Chicken Kebabs",
                              description:
                                "Tender & Juicy Chicken Boneless Pieces Marinated With Cream Cheese, Cashew Paste, Indian Spices And Hung Curd, Cooked To Perfection In The Tandoor. Served With Mint Chutney",
                              imageId: "c5db34xviw7or4xox6oq",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "24420691",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half (6pcs)",
                                        price: 319,
                                        default: 1,
                                        id: "78557297",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full (12pcs)",
                                        price: 629,
                                        id: "83619660",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "24420691",
                                        variationId: "78557297",
                                      },
                                    ],
                                    price: 31900,
                                    addonCombinations: [
                                      {
                                        groupId: "77767566",
                                        addonId: "62785731",
                                      },
                                      {
                                        groupId: "77767566",
                                        addonId: "62785732",
                                      },
                                      {
                                        groupId: "77767566",
                                        addonId: "62785733",
                                      },
                                      {
                                        groupId: "77767566",
                                        addonId: "62785734",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "24420691",
                                        variationId: "83619660",
                                      },
                                    ],
                                    price: 62900,
                                    addonCombinations: [
                                      {
                                        groupId: "77767566",
                                        addonId: "62785731",
                                      },
                                      {
                                        groupId: "77767566",
                                        addonId: "62785732",
                                      },
                                      {
                                        groupId: "77767566",
                                        addonId: "62785733",
                                      },
                                      {
                                        groupId: "77767566",
                                        addonId: "62785734",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "77767566",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              defaultPrice: 31900,
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110169195",
                              name: "Chicken Peri Peri Wings [6pcs]",
                              category: "Chicken Kebabs",
                              description:
                                "Soft And Juicy Chicken Wings Marinated With Peri Peri Spice And Hung Curd, Cooked To Perfection In The Tandoor. Served With Mint Chutney",
                              imageId: "fdwcwfgowjgctxnasvf7",
                              inStock: 1,
                              price: 36900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "77767568",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110799231",
                              name: "Chicken Kali Mirch Kebab",
                              category: "Chicken Kebabs",
                              description:
                                "TENDER & JUICY CHICKEN LEG BONELESS PIECES MARINATED WITH CRUSHE BLACK PEPPERS, CASHEW PASTE, INDIAN SPICES AND HUNG CURD, COOKED TO PERFECTION IN THE TANDOOR. SERVED WITH MINT CHUTNEY",
                              imageId: "38970d5206d97374aca5f2882401832d",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "24691457",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half (6pcs)",
                                        price: 319,
                                        default: 1,
                                        id: "79144199",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full (12pcs)",
                                        price: 629,
                                        id: "83619661",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "24691457",
                                        variationId: "79144199",
                                      },
                                    ],
                                    price: 31900,
                                    addonCombinations: [
                                      {
                                        groupId: "86432641",
                                        addonId: "62785731",
                                      },
                                      {
                                        groupId: "86432641",
                                        addonId: "62785732",
                                      },
                                      {
                                        groupId: "86432641",
                                        addonId: "62785733",
                                      },
                                      {
                                        groupId: "86432641",
                                        addonId: "62785734",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "24691457",
                                        variationId: "83619661",
                                      },
                                    ],
                                    price: 62900,
                                    addonCombinations: [
                                      {
                                        groupId: "86432641",
                                        addonId: "62785731",
                                      },
                                      {
                                        groupId: "86432641",
                                        addonId: "62785732",
                                      },
                                      {
                                        groupId: "86432641",
                                        addonId: "62785733",
                                      },
                                      {
                                        groupId: "86432641",
                                        addonId: "62785734",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "86432641",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              defaultPrice: 31900,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110799232",
                              name: "Chicken Sish Touk",
                              category: "Chicken Kebabs",
                              description:
                                "TENDER & JUICY CHICKEN LEG BONELESS PIECES MARINATED WITH ARABIC  SPICES AND HUNG CURD, COOKED TO PERFECTION IN THE TANDOOR. SERVED WITH MINT CHUTNEY",
                              imageId: "ceaebc3593b646241d28818b10b60a2a",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "24691458",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half (6pcs)",
                                        price: 319,
                                        default: 1,
                                        id: "79144200",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full (12pcs)",
                                        price: 629,
                                        id: "83619658",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "24691458",
                                        variationId: "79144200",
                                      },
                                    ],
                                    price: 31900,
                                    addonCombinations: [
                                      {
                                        groupId: "86432587",
                                        addonId: "62785731",
                                      },
                                      {
                                        groupId: "86432587",
                                        addonId: "62785732",
                                      },
                                      {
                                        groupId: "86432587",
                                        addonId: "62785733",
                                      },
                                      {
                                        groupId: "86432587",
                                        addonId: "62785734",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "24691458",
                                        variationId: "83619658",
                                      },
                                    ],
                                    price: 62900,
                                    addonCombinations: [
                                      {
                                        groupId: "86432587",
                                        addonId: "62785731",
                                      },
                                      {
                                        groupId: "86432587",
                                        addonId: "62785732",
                                      },
                                      {
                                        groupId: "86432587",
                                        addonId: "62785733",
                                      },
                                      {
                                        groupId: "86432587",
                                        addonId: "62785734",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "86432587",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              defaultPrice: 31900,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "111525010",
                              name: "Chicken Malai  Tikka [6pcs]",
                              category: "Chicken Kebabs",
                              description:
                                "Chicken Reshmi Kebabs coated with cream, butter and cardamom powder.",
                              imageId: "4b7e5636dd1d9365591f60d96a78f89c",
                              inStock: 1,
                              price: 36900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "86432631",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "114184974",
                              name: "Tangdi Kebab (4pcs)",
                              category: "Chicken Kebabs",
                              description:
                                "Soft And Juicy Chicken Legs Marinated With Indian Spices And Hung Curd, Cooked To Perfection In The Tandoor. Served With Mint Chutney",
                              imageId: "738a4099106bb3c835c579b217b47ef5",
                              inStock: 1,
                              price: 39900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "86432668",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "114185052",
                              name: "Tandoori Chicken (4pcs)",
                              category: "Chicken Kebabs",
                              description:
                                "Succulent pieces of roasted chicken marinated in yogurt and Indian spices.",
                              imageId: "0f2efdcc1ec2fcb8adac49d089ce5f4a",
                              inStock: 1,
                              price: 49900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "86433169",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Mutton Kebabs",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "57402037",
                              name: "Mutton Seekh Kebab",
                              category: "Mutton Kebabs",
                              description:
                                "Minced Mutton Seasoned With Indian Spices, Skewered Into Cylindrical Shapes And Cooked To Perfection In The Tandoor. Served With Mint Chutney",
                              imageId: "reizwkp1eescauv7nrnl",
                              inStock: 1,
                              price: 36900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "77767338",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110169039",
                              name: "Mutton Stuffed Potato [6 Pieces]",
                              category: "Mutton Kebabs",
                              description:
                                "Fresh Potatoes Stuffed With Seasoned Minced Mutton And Cheese, Cooked To Perfection In The Tandoor. Served With Mint Chutney",
                              inStock: 1,
                              price: 34900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "77767260",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110799233",
                              name: "Mutton Gilafi Seekh",
                              category: "Mutton Kebabs",
                              description:
                                "Minced Mutton Seasoned With Indian Spices, Coated with chopped peppers. Skewered Into Cylindrical Shapes And Cooked To Perfection In The Tandoor. Served With Mint Chutney",
                              imageId: "050fa28ac429c916250b391eb8ff42cc",
                              inStock: 1,
                              price: 36900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "86432560",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Assorted Kebabs",
                      categories: [
                        {
                          title: "Assorted Veg Kebabs",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "110168544",
                                  name: "Assorted Veg Kebab Box",
                                  category: "Assorted Kebabs",
                                  description:
                                    "Stuffed Potato[2pcs] + Paneer Tikka[2pcs] + Paneer Malai Kebab[2pcs] + Stuffed Mushroom Tikka[2pcs]",
                                  imageId: "tub3hjiulkmeikdregje",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 35900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "77763374",
                                      groupName: "BEVERAGES",
                                      choices: [
                                        {
                                          id: "62785731",
                                          name: "COKE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785732",
                                          name: "SPRITE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785733",
                                          name: "Thumsup (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785734",
                                          name: "PACKAGED WATER (1 Litre)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "Assorted Non Veg Kebabs",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "57402039",
                                  name: "Assorted Chicken Kebab Box",
                                  category: "Assorted Kebabs",
                                  description:
                                    "Chicken Calypso[2Pieces] + Chicken Reshmi Kebab[2Pieces] + Chicken Hariyali Kebab[2Pieces] + Chicken Tikka[2Pieces]",
                                  imageId: "jbdkvuv9r3b8s2qjj2mg",
                                  inStock: 1,
                                  price: 42900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "77763372",
                                      groupName: "BEVERAGES",
                                      choices: [
                                        {
                                          id: "62785731",
                                          name: "COKE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785732",
                                          name: "SPRITE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785733",
                                          name: "Thumsup (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785734",
                                          name: "PACKAGED WATER (1 Litre)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.9",
                                      ratingCount: "14 ratings",
                                      ratingCountV2: "14",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "57402040",
                                  name: "Assorted Fish Kebab Box",
                                  category: "Assorted Kebabs",
                                  description:
                                    "2 Pieces each of BHETKI or BASA in Gondhoraj, Hariyali, Tikka and Peri Peri  Marinades.",
                                  imageId: "s8cugnxpsfmg63wnpltd",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "26325142",
                                        name: "Customisation",
                                        variations: [
                                          {
                                            name: "BHETKI",
                                            price: 1099,
                                            default: 1,
                                            id: "83440201",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "BASA",
                                            price: 499,
                                            id: "83440202",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "26325142",
                                            variationId: "83440201",
                                          },
                                        ],
                                        price: 109900,
                                        addonCombinations: [
                                          {
                                            groupId: "77763376",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77763376",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77763376",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77763376",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "26325142",
                                            variationId: "83440202",
                                          },
                                        ],
                                        price: 49900,
                                        addonCombinations: [
                                          {
                                            groupId: "77763376",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77763376",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77763376",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77763376",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "77763376",
                                      groupName: "BEVERAGES",
                                      choices: [
                                        {
                                          id: "62785731",
                                          name: "COKE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785732",
                                          name: "SPRITE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785733",
                                          name: "Thumsup (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785734",
                                          name: "PACKAGED WATER (1 Litre)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  defaultPrice: 109900,
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Chello Kebab",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "57402050",
                              name: "Chicken Tikka Fried Rice",
                              category: "Chello Kebab",
                              description:
                                "Soft Succulent Pieces Of Chicken Tikka, Tossed In A Wok With Eggs And Veggies",
                              imageId: "aszoztapv1xlxgvfoncv",
                              inStock: 1,
                              price: 31900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "77763368",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "57402051",
                              name: "Chicken Chello Kebab",
                              category: "Chello Kebab",
                              description:
                                "3 Pieces Of Chicken Kebabs And 2 Pieces Of Chicken Seekh Kebab Served With Buttered Basmati Rice, Grilled Veggies And A Fried Egg",
                              imageId: "g9nodwtjvhnvfp2tabr1",
                              inStock: 1,
                              price: 38900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "77764174",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110168893",
                              name: "Grilled Fish With Herb Rice And Veggies",
                              category: "Chello Kebab",
                              description:
                                "3 Pieces Of Marinated Grilled Basa Served With A Portion Basmati Rice Tossed With Herbs And Grilled Veggies",
                              imageId: "rouij72mu5niedz1uszs",
                              inStock: 1,
                              price: 33900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "77764240",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110168905",
                              name: "Mutton Chello Kebab",
                              category: "Chello Kebab",
                              description:
                                "3 Pieces Of Chicken Kebabs And 2 Pieces Of Mutton Seekh Kebab Served With Buttered Basmati Rice, Grilled Veggies And A Fried Egg",
                              imageId: "xjwhfwznp41h7n6uu0t8",
                              inStock: 1,
                              price: 40900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "77764637",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "111525011",
                              name: "Stuffed Potato With Ghee Rice And Dal Makhni",
                              category: "Chello Kebab",
                              description:
                                "Basmati rice tossed in desi ghee. Accompanied with a bowl of creamy dal makhni and stuffed potatoes.",
                              imageId: "0120ba2b1b0730c407010b8a0db29ceb",
                              inStock: 1,
                              isVeg: 1,
                              price: 29900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "86432646",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "111525012",
                              name: "Veg Chello Kebab",
                              category: "Chello Kebab",
                              description:
                                "Veg sheekh kebabs, onion and bell peppers grilled to perfection, are served on a bed of buttered rice (chello). Accompanied with 3 types of paneer kebabs. A grilled tomato, add to the goodness of it all.",
                              imageId: "ee45641f3abb6b0af84cecff6efe6f91",
                              inStock: 1,
                              isVeg: 1,
                              price: 29900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "86432644",
                                  groupName: "BEVERAGES",
                                  choices: [
                                    {
                                      id: "62785731",
                                      name: "COKE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785732",
                                      name: "SPRITE (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785733",
                                      name: "Thumsup (250ml)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "62785734",
                                      name: "PACKAGED WATER (1 Litre)",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Super Saver Combos - Free 1 Litre Thumsup",
                      categories: [
                        {
                          title: "Veg Super Saver Combos",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "66111351",
                                  name: "Veg Delight Box",
                                  category:
                                    "Super Saver Combos - Free 1 Litre Thumsup",
                                  description:
                                    "8pcs Malai Mushroom Tikka + 6pcs Veg Stuffed Potato +  2 DIPS + PITA BREAD + 1Ltr ThumsUP",
                                  imageId: "ptjlivlfkz3k9eaxfqeu",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 59900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "77770398",
                                      groupName: "BEVERAGES",
                                      choices: [
                                        {
                                          id: "62785731",
                                          name: "COKE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785732",
                                          name: "SPRITE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785733",
                                          name: "Thumsup (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785734",
                                          name: "PACKAGED WATER (1 Litre)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "110169684",
                                  name: "House Party Combo (veg)",
                                  category:
                                    "Super Saver Combos - Free 1 Litre Thumsup",
                                  description:
                                    "6pcs PANEER MALAI KEBAB + 6pcs VEG STUFFED POTATO + 6pcs PERI PERI MUSHROOM TIKKA + PANEER MAKHNI + 2pcs BUTTER NAAN + JEERA RICE + 2 DIPS + 1Ltr ThumsUP",
                                  imageId: "lwrfpvle7pngsuu2i4eb",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 139900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "77770396",
                                      groupName: "BEVERAGES",
                                      choices: [
                                        {
                                          id: "62785731",
                                          name: "COKE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785732",
                                          name: "SPRITE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785733",
                                          name: "Thumsup (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785734",
                                          name: "PACKAGED WATER (1 Litre)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "Non Veg Super Saver Combos",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "66111348",
                                  name: "Ultimate Saver Box",
                                  category:
                                    "Super Saver Combos - Free 1 Litre Thumsup",
                                  description:
                                    "CHICKEN TANDOOR FULL + 10pcs CHICKEN RESHMI KEBAB + 2 DIPS + 1Ltr ThumsUp",
                                  imageId: "cycf17ahqxauflb11sby",
                                  inStock: 1,
                                  price: 99900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "77770411",
                                      groupName: "BEVERAGES",
                                      choices: [
                                        {
                                          id: "62785731",
                                          name: "COKE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785732",
                                          name: "SPRITE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785733",
                                          name: "Thumsup (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785734",
                                          name: "PACKAGED WATER (1 Litre)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "66111349",
                                  name: "Fish Lovers Box",
                                  category:
                                    "Super Saver Combos - Free 1 Litre Thumsup",
                                  description:
                                    "6pcs PERI PERI FISH KEBAB + 6pcs HARIYALI FISH TIKKA+ PITA BREAD + 2 DIPS + 1 Ltr ThumsUp",
                                  imageId: "i6kght3tluzry9l237tp",
                                  inStock: 1,
                                  price: 83900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "77770403",
                                      groupName: "BEVERAGES",
                                      choices: [
                                        {
                                          id: "62785731",
                                          name: "COKE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785732",
                                          name: "SPRITE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785733",
                                          name: "Thumsup (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785734",
                                          name: "PACKAGED WATER (1 Litre)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "66111354",
                                  name: "Jumbo Combo",
                                  category:
                                    "Super Saver Combos - Free 1 Litre Thumsup",
                                  description:
                                    "Tandoori Chicken Full + 5pcs Mutton Seekh Kebab + 6pcs Peri Peri Fish Kebab + Butter Chicken (6pcs) + Butter Naan (2pcs) + Jeera Rice + 2 Dips + 1Ltr ThumsUp",
                                  imageId: "q7018pehix1kunjrk81z",
                                  inStock: 1,
                                  price: 179900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "77767530",
                                      groupName: "BEVERAGES",
                                      choices: [
                                        {
                                          id: "62785731",
                                          name: "COKE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785732",
                                          name: "SPRITE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785733",
                                          name: "Thumsup (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785734",
                                          name: "PACKAGED WATER (1 Litre)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "66111355",
                                  name: "Bestseller Box",
                                  category:
                                    "Super Saver Combos - Free 1 Litre Thumsup",
                                  description:
                                    "6pcs RESHMI KEBAB + 5pcs MUTTON SEEKH KEBAB + 6pcs PERI PERI FISH KEBAB + 2 DIPS + PITA BREAD + 1Ltr ThumsUp",
                                  imageId: "al2ypzy349ceate2ydxw",
                                  inStock: 1,
                                  price: 109900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "77770400",
                                      groupName: "BEVERAGES",
                                      choices: [
                                        {
                                          id: "62785731",
                                          name: "COKE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785732",
                                          name: "SPRITE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785733",
                                          name: "Thumsup (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785734",
                                          name: "PACKAGED WATER (1 Litre)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "110169685",
                                  name: "House Party Combo (non Veg)",
                                  category:
                                    "Super Saver Combos - Free 1 Litre Thumsup",
                                  description:
                                    "6pcs RESHMI KEBAB + 6pcs PERI PERI WINGS + 4pcs TANGDI KEBAB + 6pcs BUTTER CHICKEN + 2pcs BUTTER NAAN + JEERA RICE + 2 DIPS + Ltr ThumsUp",
                                  imageId: "y5mkxi35iuzvyvgqrw5x",
                                  inStock: 1,
                                  price: 159900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "77770405",
                                      groupName: "BEVERAGES",
                                      choices: [
                                        {
                                          id: "62785731",
                                          name: "COKE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785732",
                                          name: "SPRITE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785733",
                                          name: "Thumsup (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785734",
                                          name: "PACKAGED WATER (1 Litre)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Curries",
                      categories: [
                        {
                          title: "Veg Curries",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "57402055",
                                  name: "Dal Makhni",
                                  category: "Curries",
                                  description:
                                    "?Black lentils & red kidney beans slow cooked with spices, butter & cream.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 26900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "86432619",
                                      groupName: "BEVERAGES",
                                      choices: [
                                        {
                                          id: "62785731",
                                          name: "COKE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785732",
                                          name: "SPRITE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785733",
                                          name: "Thumsup (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785734",
                                          name: "PACKAGED WATER (1 Litre)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "57402057",
                                  name: "Sahi Paneer",
                                  category: "Curries",
                                  description:
                                    "6 Pieces Of Paneer Tikka Cooked In A Rich Cashew And Sauteed Brown Onion Gravy",
                                  imageId: "bn0excnlkkvfruz92c6s",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 31900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "77763475",
                                      groupName: "BEVERAGES",
                                      choices: [
                                        {
                                          id: "62785731",
                                          name: "COKE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785732",
                                          name: "SPRITE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785733",
                                          name: "Thumsup (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785734",
                                          name: "PACKAGED WATER (1 Litre)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "57402058",
                                  name: "Paneer Tikka Masala",
                                  category: "Curries",
                                  description:
                                    "6 Pieces Of Paneer Tikka Cooked In A Creamy Spiced Curry",
                                  imageId: "pfawcuzfv5dbpn40zyes",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 31900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "77763377",
                                      groupName: "BEVERAGES",
                                      choices: [
                                        {
                                          id: "62785731",
                                          name: "COKE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785732",
                                          name: "SPRITE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785733",
                                          name: "Thumsup (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785734",
                                          name: "PACKAGED WATER (1 Litre)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "110168899",
                                  name: "Paneer Makhani",
                                  category: "Curries",
                                  description:
                                    "6 Pieces Of Paneer Tikka Cooked In A Rich Tomato And Thick Cream Gravy",
                                  imageId: "aesv4qqstib110vucri5",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 31900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "77764428",
                                      groupName: "BEVERAGES",
                                      choices: [
                                        {
                                          id: "62785731",
                                          name: "COKE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785732",
                                          name: "SPRITE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785733",
                                          name: "Thumsup (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785734",
                                          name: "PACKAGED WATER (1 Litre)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "110169683",
                                  name: "MIX VEG",
                                  category: "Curries",
                                  description:
                                    "Mixed Veggies cooked in an onion tomato gravy",
                                  imageId: "vyynaj4rfdwksr35pkc7",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 29900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "77770395",
                                      groupName: "BEVERAGES",
                                      choices: [
                                        {
                                          id: "62785731",
                                          name: "COKE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785732",
                                          name: "SPRITE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785733",
                                          name: "Thumsup (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785734",
                                          name: "PACKAGED WATER (1 Litre)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "111525013",
                                  name: "Paneer Methi Malai",
                                  category: "Curries",
                                  description:
                                    "Paneer cooked in creamy, mildly sweet gravy with hints of methi leaves",
                                  imageId: "e5a3c020bffe69da60ace9ea78cc0153",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 31900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "86432639",
                                      groupName: "BEVERAGES",
                                      choices: [
                                        {
                                          id: "62785731",
                                          name: "COKE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785732",
                                          name: "SPRITE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785733",
                                          name: "Thumsup (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785734",
                                          name: "PACKAGED WATER (1 Litre)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "111525014",
                                  name: "Soya Chaap Butter Masala",
                                  category: "Curries",
                                  description:
                                    "Soya Chaap  Cooked In A Creamy Spiced Curry.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 31900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "86432546",
                                      groupName: "BEVERAGES",
                                      choices: [
                                        {
                                          id: "62785731",
                                          name: "COKE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785732",
                                          name: "SPRITE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785733",
                                          name: "Thumsup (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785734",
                                          name: "PACKAGED WATER (1 Litre)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "Non Veg Curries",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "57402005",
                                  name: "Fish Tikka Masala",
                                  category: "Curries",
                                  description:
                                    "Fish Tikka Cooked In A Creamy Spiced Curry",
                                  imageId: "bywg7ffkwaz8vhlu3b1m",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "25020198",
                                        name: "Customisation",
                                        variations: [
                                          {
                                            name: "BHETKI [4pcs]",
                                            price: 449,
                                            default: 1,
                                            id: "79797342",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "BASA [6pcs]",
                                            price: 419,
                                            id: "79797343",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "25020198",
                                            variationId: "79797342",
                                          },
                                        ],
                                        price: 44900,
                                        addonCombinations: [
                                          {
                                            groupId: "77765399",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77765399",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77765399",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77765399",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "25020198",
                                            variationId: "79797343",
                                          },
                                        ],
                                        price: 41900,
                                        addonCombinations: [
                                          {
                                            groupId: "77765399",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77765399",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77765399",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77765399",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "77765399",
                                      groupName: "BEVERAGES",
                                      choices: [
                                        {
                                          id: "62785731",
                                          name: "COKE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785732",
                                          name: "SPRITE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785733",
                                          name: "Thumsup (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785734",
                                          name: "PACKAGED WATER (1 Litre)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  defaultPrice: 44900,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "57402059",
                                  name: "Butter Chicken",
                                  category: "Curries",
                                  description:
                                    "6 Pieces Of Chicken Tikka Cooked In A Rich Tomato And Thick Cream Gravy",
                                  imageId: "f0ys2byja4cvuklhpfpi",
                                  inStock: 1,
                                  price: 35900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "77764098",
                                      groupName: "BEVERAGES",
                                      choices: [
                                        {
                                          id: "62785731",
                                          name: "COKE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785732",
                                          name: "SPRITE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785733",
                                          name: "Thumsup (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785734",
                                          name: "PACKAGED WATER (1 Litre)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "57402060",
                                  name: "Chicken Tikka Masala",
                                  category: "Curries",
                                  description:
                                    "6 Pieces Of Chicken Tikka Cooked In A Creamy Spiced Curry",
                                  imageId: "mowhjgc4mwhrvfoz7dq5",
                                  inStock: 1,
                                  price: 35900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "77764060",
                                      groupName: "BEVERAGES",
                                      choices: [
                                        {
                                          id: "62785731",
                                          name: "COKE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785732",
                                          name: "SPRITE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785733",
                                          name: "Thumsup (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785734",
                                          name: "PACKAGED WATER (1 Litre)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "110168884",
                                  name: "Afghani Chicken",
                                  category: "Curries",
                                  description:
                                    "6 Pieces Of Chicken Reshmi Kebab Cooked In A Super Creamy Gravy Consisting Of Cashew Nut Paste And Thick Cream",
                                  inStock: 1,
                                  price: 35900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "77764128",
                                      groupName: "BEVERAGES",
                                      choices: [
                                        {
                                          id: "62785731",
                                          name: "COKE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785732",
                                          name: "SPRITE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785733",
                                          name: "Thumsup (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785734",
                                          name: "PACKAGED WATER (1 Litre)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "110799234",
                                  name: "Mutton Rogan Josh",
                                  category: "Curries",
                                  description:
                                    "A classic comfort food from the Kashmiri Cuisine is a slow cooked dish made with nalli pieces of mutton, spices, herbs and yogurt.",
                                  imageId: "62491ace431a4d0cd3dc8831d1646cca",
                                  inStock: 1,
                                  price: 46900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "86432637",
                                      groupName: "BEVERAGES",
                                      choices: [
                                        {
                                          id: "62785731",
                                          name: "COKE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785732",
                                          name: "SPRITE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785733",
                                          name: "Thumsup (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785734",
                                          name: "PACKAGED WATER (1 Litre)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "110799235",
                                  name: "Mutton Sahi Korma",
                                  category: "Curries",
                                  description:
                                    "Nalli pieces of mutton cooked  in rich white creamy gravy.",
                                  imageId: "f17eac305e81de372a4f6d04f9232a5a",
                                  inStock: 1,
                                  price: 46900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "86432635",
                                      groupName: "BEVERAGES",
                                      choices: [
                                        {
                                          id: "62785731",
                                          name: "COKE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785732",
                                          name: "SPRITE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785733",
                                          name: "Thumsup (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785734",
                                          name: "PACKAGED WATER (1 Litre)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "111525015",
                                  name: "Tandoori Butter Masala",
                                  category: "Curries",
                                  description:
                                    "Tandoori Chicken Cooked In A Creamy Spiced Curry.",
                                  imageId: "608cf9106f54a177d0143143faec3c9c",
                                  inStock: 1,
                                  price: 41900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "86432548",
                                      groupName: "BEVERAGES",
                                      choices: [
                                        {
                                          id: "62785731",
                                          name: "COKE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785732",
                                          name: "SPRITE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785733",
                                          name: "Thumsup (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785734",
                                          name: "PACKAGED WATER (1 Litre)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "111525016",
                                  name: "Tangdi Masala",
                                  category: "Curries",
                                  description:
                                    "Tangdi Kebabs Cooked In A Creamy Spiced Curry.",
                                  imageId: "032dce57d6e7a1880775e8dc1af08411",
                                  inStock: 1,
                                  price: 35900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "86432550",
                                      groupName: "BEVERAGES",
                                      choices: [
                                        {
                                          id: "62785731",
                                          name: "COKE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785732",
                                          name: "SPRITE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785733",
                                          name: "Thumsup (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785734",
                                          name: "PACKAGED WATER (1 Litre)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Rice",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "57402008",
                              name: "Jeera Rice",
                              category: "Rice",
                              description:
                                "Basmati Rice Tempered With Cumin Seeds And Desi Ghee",
                              imageId: "cnaotgbsjrmu66shrc15",
                              inStock: 1,
                              isVeg: 1,
                              price: 13900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "57402010",
                              name: "Burnt Garlic Rice",
                              category: "Rice",
                              description:
                                "Basmati Rice Tossed With Burnt Garlic And Butter",
                              imageId: "amkf5i8jewrqlkqgtepj",
                              inStock: 1,
                              isVeg: 1,
                              price: 13900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "57402012",
                              name: "Herb Rice",
                              category: "Rice",
                              description:
                                "Basmati Rice Tossed With Herbs And Butter",
                              imageId: "qu13ads9fjiksaclbltd",
                              inStock: 1,
                              isVeg: 1,
                              price: 13900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "57402014",
                              name: "Peas Pulao",
                              category: "Rice",
                              description:
                                "Basmati Rice Tossed With Boiled Peas And Garam Masalas",
                              imageId: "jkoq2cnscamlvvmaqyh3",
                              inStock: 1,
                              isVeg: 1,
                              price: 14900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110168991",
                              name: "Jafrani Pulao",
                              category: "Rice",
                              description:
                                "Basmati Rice Tosssed With Brown Onions, Cashew, Saffron Flavour And Rose Water",
                              imageId: "x9rzugeozr0x8wvnid40",
                              inStock: 1,
                              isVeg: 1,
                              price: 15900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110799222",
                              name: "Steamed Rice",
                              category: "Rice",
                              description: "Boiled basmati rice.",
                              inStock: 1,
                              isVeg: 1,
                              price: 13900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Roti",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65806045",
                              name: "Tandoori Roti",
                              category: "Roti",
                              description:
                                "Indian Bread made in a tandoor or clay oven at a high temperature",
                              inStock: 1,
                              isVeg: 1,
                              price: 3900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65806075",
                              name: "Naan",
                              category: "Roti",
                              description:
                                "Leavened Indian flatbread made using all purpose flour.",
                              imageId: "kwjea8a41m8krfvl3vdi",
                              inStock: 1,
                              isVeg: 1,
                              price: 4900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65806101",
                              name: "Butter Naan",
                              category: "Roti",
                              description:
                                "Tossed with butter, leavened Indian flatbread made using all purpose flour.",
                              inStock: 1,
                              isVeg: 1,
                              price: 5900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65806102",
                              name: "Garlic Naan",
                              category: "Roti",
                              description:
                                "Garlic Naan is a soft and fluffy flatbread which is infused with an irresistible garlic flavor.",
                              inStock: 1,
                              isVeg: 1,
                              price: 7900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65806103",
                              name: "Cheese Naan",
                              category: "Roti",
                              description:
                                "Flatbread made with all purpose flour stuffed with Indian Cottage Cheese (Paneer) mixed with herbs and spices,",
                              inStock: 1,
                              isVeg: 1,
                              price: 9900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65806104",
                              name: "Kulcha",
                              category: "Roti",
                              description: "A soft flat bread.",
                              imageId: "j9sliozrispbrtmzwfe2",
                              inStock: 1,
                              isVeg: 1,
                              price: 9900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110799223",
                              name: "Butter Tandoori Roti",
                              category: "Roti",
                              description:
                                "Indian Bread made in a tandoor or clay oven at a high temperature brushed with amul butter.",
                              inStock: 1,
                              isVeg: 1,
                              price: 4900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Wraps",
                      categories: [
                        {
                          title: "Veg Wraps",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "57402004",
                                  name: "Paneer Wrap",
                                  category: "Wraps",
                                  description:
                                    "Soft Paneer Tikka, Lettuce, Salad And Hummus Wrapped With A Freshly Baked Flat Pita Bread",
                                  imageId: "fvcibu433t4cfbtajjpl",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 15800,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "57402006",
                                  name: "Paneer Makhmali Wrap",
                                  category: "Wraps",
                                  description:
                                    "Soft Paneer Malai Kebab, Lettuce, Salad And Mayonnaise Wrapped With A Freshly Baked Flat Pita Bread",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 15800,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "Non Veg Wraps",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "57402007",
                                  name: "Chicken Wrap",
                                  category: "Wraps",
                                  description:
                                    "Juicy & Tender Chicken Tikka, Lettuce, Salad And Hummus Wrapped With A Freshly Baked Flat Pita Bread",
                                  imageId: "witu0gx9igac1x2abitg",
                                  inStock: 1,
                                  price: 15800,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.7",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "57402009",
                                  name: "Chicken Makhmali Wrap",
                                  category: "Wraps",
                                  description:
                                    "Juicy & Tender Chicken Reshmi Kebab, Lettuce, Salad And Mayonnaise Wrapped With A Freshly Baked Flat Pita Bread",
                                  inStock: 1,
                                  price: 15800,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "6 ratings",
                                      ratingCountV2: "6",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "57402011",
                                  name: "Chicken Seekh Wrap",
                                  category: "Wraps",
                                  description:
                                    "Soft Chicken Seekh Kebab, Lettuce, Salad And Hummus Wrapped With A Freshly Baked Flat Pita Bread",
                                  inStock: 1,
                                  price: 15800,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "57402013",
                                  name: "Mutton Seekh Wrap",
                                  category: "Wraps",
                                  description:
                                    "Soft Mutton Seekh Kebab, Lettuce, Salad And Hummus Wrapped With A Freshly Baked Flat Pita Bread",
                                  inStock: 1,
                                  price: 15800,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "57402015",
                                  name: "Peri Peri Fish Wrap",
                                  category: "Wraps",
                                  description:
                                    "Tender Peri Peri Fish Kebab, Lettuce, Salad And Hummus Wrapped With A Freshly Baked Flat Pita Bread",
                                  inStock: 1,
                                  price: 15800,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.0",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "110799224",
                                  name: "Peri Peri Chicken Wrap",
                                  category: "Wraps",
                                  description:
                                    "JUICY & TENDER PERIPERI CHICKEN KEBAB, LETTUCE, SALAD AND HUMMUS WRAPPED WITH A FRESHLY BAKED FLAT PITA BREAD",
                                  inStock: 1,
                                  price: 15800,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "MAKE YOUR MEAL",
                      categories: [
                        {
                          title: "Veg Combos",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "110169686",
                                  name: "PANEER MAKHNI COMBO",
                                  category: "MAKE YOUR MEAL",
                                  description:
                                    "Choose your preffered sides with our creamy Paneer Makhni",
                                  imageId: "qrh8wcohgmn8nj9f5giv",
                                  inStock: 1,
                                  isVeg: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "24421959",
                                        name: "Customisation",
                                        variations: [
                                          {
                                            name: "JEERA RICE",
                                            price: 319,
                                            default: 1,
                                            id: "78561116",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "JAFRANI PULAO",
                                            price: 319,
                                            id: "78561117",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "BURNT GARLIC RICE",
                                            price: 319,
                                            id: "78561118",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "BUTTER NAAN",
                                            price: 319,
                                            id: "78561119",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "KULCHA",
                                            price: 319,
                                            id: "78561120",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "24421959",
                                            variationId: "78561116",
                                          },
                                        ],
                                        price: 31900,
                                        addonCombinations: [
                                          {
                                            groupId: "77770412",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77770412",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77770412",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77770412",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "24421959",
                                            variationId: "78561117",
                                          },
                                        ],
                                        price: 31900,
                                        addonCombinations: [
                                          {
                                            groupId: "77770412",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77770412",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77770412",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77770412",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "24421959",
                                            variationId: "78561118",
                                          },
                                        ],
                                        price: 31900,
                                        addonCombinations: [
                                          {
                                            groupId: "77770412",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77770412",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77770412",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77770412",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "24421959",
                                            variationId: "78561119",
                                          },
                                        ],
                                        price: 31900,
                                        addonCombinations: [
                                          {
                                            groupId: "77770412",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77770412",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77770412",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77770412",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "24421959",
                                            variationId: "78561120",
                                          },
                                        ],
                                        price: 31900,
                                        addonCombinations: [
                                          {
                                            groupId: "77770412",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77770412",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77770412",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77770412",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "77770412",
                                      groupName: "BEVERAGES",
                                      choices: [
                                        {
                                          id: "62785731",
                                          name: "COKE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785732",
                                          name: "SPRITE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785733",
                                          name: "Thumsup (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785734",
                                          name: "PACKAGED WATER (1 Litre)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "VEG" },
                                  defaultPrice: 31900,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "110169687",
                                  name: "PANEER TIKKA MASALA COMBO",
                                  category: "MAKE YOUR MEAL",
                                  description:
                                    "Choose your preffered sides with our creamy and spicy Paneer Tikka Masala.",
                                  imageId: "qrh8wcohgmn8nj9f5giv",
                                  inStock: 1,
                                  isVeg: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "24421960",
                                        name: "Customisation",
                                        variations: [
                                          {
                                            name: "JEERA RICE",
                                            price: 319,
                                            default: 1,
                                            id: "78561121",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "JAFRANI PULAO",
                                            price: 319,
                                            id: "78561122",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "BURNT GARLIC RICE",
                                            price: 319,
                                            id: "78561123",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "BUTTER NAAN",
                                            price: 319,
                                            id: "78561124",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "KULCHA",
                                            price: 319,
                                            id: "78561125",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "24421960",
                                            variationId: "78561121",
                                          },
                                        ],
                                        price: 31900,
                                        addonCombinations: [
                                          {
                                            groupId: "77770413",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77770413",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77770413",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77770413",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "24421960",
                                            variationId: "78561122",
                                          },
                                        ],
                                        price: 31900,
                                        addonCombinations: [
                                          {
                                            groupId: "77770413",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77770413",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77770413",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77770413",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "24421960",
                                            variationId: "78561123",
                                          },
                                        ],
                                        price: 31900,
                                        addonCombinations: [
                                          {
                                            groupId: "77770413",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77770413",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77770413",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77770413",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "24421960",
                                            variationId: "78561124",
                                          },
                                        ],
                                        price: 31900,
                                        addonCombinations: [
                                          {
                                            groupId: "77770413",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77770413",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77770413",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77770413",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "24421960",
                                            variationId: "78561125",
                                          },
                                        ],
                                        price: 31900,
                                        addonCombinations: [
                                          {
                                            groupId: "77770413",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77770413",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77770413",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77770413",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "77770413",
                                      groupName: "BEVERAGES",
                                      choices: [
                                        {
                                          id: "62785731",
                                          name: "COKE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785732",
                                          name: "SPRITE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785733",
                                          name: "Thumsup (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785734",
                                          name: "PACKAGED WATER (1 Litre)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "VEG" },
                                  defaultPrice: 31900,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "110169688",
                                  name: "SAHI PANEER COMBO",
                                  category: "MAKE YOUR MEAL",
                                  description:
                                    "Choose your preffered sides with our rich and creamy Sahi Paneer",
                                  imageId: "r6jnywu2mkbah0qxziwc",
                                  inStock: 1,
                                  isVeg: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "24421962",
                                        name: "Customisation",
                                        variations: [
                                          {
                                            name: "JEERA RICE",
                                            price: 319,
                                            default: 1,
                                            id: "78561129",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "JAFRANI PULAO",
                                            price: 319,
                                            id: "78561130",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "BURNT GARLIC RICE",
                                            price: 319,
                                            id: "78561131",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "BUTTER NAAN",
                                            price: 319,
                                            id: "78561132",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "KULCHA",
                                            price: 319,
                                            id: "78561133",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "24421962",
                                            variationId: "78561129",
                                          },
                                        ],
                                        price: 31900,
                                        addonCombinations: [
                                          {
                                            groupId: "77770415",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77770415",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77770415",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77770415",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "24421962",
                                            variationId: "78561130",
                                          },
                                        ],
                                        price: 31900,
                                        addonCombinations: [
                                          {
                                            groupId: "77770415",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77770415",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77770415",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77770415",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "24421962",
                                            variationId: "78561131",
                                          },
                                        ],
                                        price: 31900,
                                        addonCombinations: [
                                          {
                                            groupId: "77770415",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77770415",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77770415",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77770415",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "24421962",
                                            variationId: "78561132",
                                          },
                                        ],
                                        price: 31900,
                                        addonCombinations: [
                                          {
                                            groupId: "77770415",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77770415",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77770415",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77770415",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "24421962",
                                            variationId: "78561133",
                                          },
                                        ],
                                        price: 31900,
                                        addonCombinations: [
                                          {
                                            groupId: "77770415",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77770415",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77770415",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77770415",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "77770415",
                                      groupName: "BEVERAGES",
                                      choices: [
                                        {
                                          id: "62785731",
                                          name: "COKE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785732",
                                          name: "SPRITE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785733",
                                          name: "Thumsup (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785734",
                                          name: "PACKAGED WATER (1 Litre)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "VEG" },
                                  defaultPrice: 31900,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "Non Veg Combos",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "110168897",
                                  name: "FISH TIKKA MASALA COMBO [basa]",
                                  category: "MAKE YOUR MEAL",
                                  description:
                                    "Choose your preffered sides with our creamy and spicy Fish Tikka Masala.",
                                  imageId: "qrh8wcohgmn8nj9f5giv",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "24420482",
                                        name: "Customisation",
                                        variations: [
                                          {
                                            name: "JEERA RICE",
                                            price: 349,
                                            default: 1,
                                            id: "78556692",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "JAFRANI PULAO",
                                            price: 349,
                                            id: "78556693",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "BURNT GARLIC RICE",
                                            price: 349,
                                            id: "78556694",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "BUTTER NAAN",
                                            price: 349,
                                            id: "78556695",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "KULCHA",
                                            price: 349,
                                            id: "78556696",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "24420482",
                                            variationId: "78556692",
                                          },
                                        ],
                                        price: 34900,
                                        addonCombinations: [
                                          {
                                            groupId: "77764358",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77764358",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77764358",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77764358",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "24420482",
                                            variationId: "78556693",
                                          },
                                        ],
                                        price: 34900,
                                        addonCombinations: [
                                          {
                                            groupId: "77764358",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77764358",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77764358",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77764358",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "24420482",
                                            variationId: "78556694",
                                          },
                                        ],
                                        price: 34900,
                                        addonCombinations: [
                                          {
                                            groupId: "77764358",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77764358",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77764358",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77764358",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "24420482",
                                            variationId: "78556695",
                                          },
                                        ],
                                        price: 34900,
                                        addonCombinations: [
                                          {
                                            groupId: "77764358",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77764358",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77764358",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77764358",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "24420482",
                                            variationId: "78556696",
                                          },
                                        ],
                                        price: 34900,
                                        addonCombinations: [
                                          {
                                            groupId: "77764358",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77764358",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77764358",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77764358",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "77764358",
                                      groupName: "BEVERAGES",
                                      choices: [
                                        {
                                          id: "62785731",
                                          name: "COKE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785732",
                                          name: "SPRITE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785733",
                                          name: "Thumsup (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785734",
                                          name: "PACKAGED WATER (1 Litre)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  defaultPrice: 34900,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "110169689",
                                  name: "AFGHANI CHICKEN COMBO",
                                  category: "MAKE YOUR MEAL",
                                  description:
                                    "Choose your preffered sides with our signature Afghani Chicken.",
                                  imageId: "gydofxpesjzbns5zamdb",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "24421963",
                                        name: "Customisation",
                                        variations: [
                                          {
                                            name: "JEERA RICE",
                                            price: 319,
                                            default: 1,
                                            id: "78561134",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "JAFRANI PULAO",
                                            price: 319,
                                            id: "78561135",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "BURNT GARLIC RICE",
                                            price: 319,
                                            id: "78561136",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "BUTTER NAAN",
                                            price: 319,
                                            id: "78561137",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "KULCHA",
                                            price: 319,
                                            id: "78561138",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "24421963",
                                            variationId: "78561134",
                                          },
                                        ],
                                        price: 31900,
                                        addonCombinations: [
                                          {
                                            groupId: "77770418",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77770418",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77770418",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77770418",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "24421963",
                                            variationId: "78561135",
                                          },
                                        ],
                                        price: 31900,
                                        addonCombinations: [
                                          {
                                            groupId: "77770418",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77770418",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77770418",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77770418",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "24421963",
                                            variationId: "78561136",
                                          },
                                        ],
                                        price: 31900,
                                        addonCombinations: [
                                          {
                                            groupId: "77770418",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77770418",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77770418",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77770418",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "24421963",
                                            variationId: "78561137",
                                          },
                                        ],
                                        price: 31900,
                                        addonCombinations: [
                                          {
                                            groupId: "77770418",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77770418",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77770418",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77770418",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "24421963",
                                            variationId: "78561138",
                                          },
                                        ],
                                        price: 31900,
                                        addonCombinations: [
                                          {
                                            groupId: "77770418",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77770418",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77770418",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77770418",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "77770418",
                                      groupName: "BEVERAGES",
                                      choices: [
                                        {
                                          id: "62785731",
                                          name: "COKE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785732",
                                          name: "SPRITE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785733",
                                          name: "Thumsup (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785734",
                                          name: "PACKAGED WATER (1 Litre)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  defaultPrice: 31900,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "4 ratings",
                                      ratingCountV2: "4",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "110169690",
                                  name: "BUTTER CHICKEN COMBO",
                                  category: "MAKE YOUR MEAL",
                                  description:
                                    "Choose your preffered sides with our rich and creamy Butter Chicken.",
                                  imageId: "z4vd79pegwspnvx6dqb3",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "24421964",
                                        name: "Customisation",
                                        variations: [
                                          {
                                            name: "JEERA RICE",
                                            price: 319,
                                            default: 1,
                                            id: "78561139",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "JAFRANI PULAO",
                                            price: 319,
                                            id: "78561140",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "BURNT GARLIC RICE",
                                            price: 319,
                                            id: "78561141",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "BUTTER NAAN",
                                            price: 319,
                                            id: "78561142",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "KULCHA",
                                            price: 319,
                                            id: "78561143",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "24421964",
                                            variationId: "78561139",
                                          },
                                        ],
                                        price: 31900,
                                        addonCombinations: [
                                          {
                                            groupId: "77770419",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77770419",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77770419",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77770419",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "24421964",
                                            variationId: "78561140",
                                          },
                                        ],
                                        price: 31900,
                                        addonCombinations: [
                                          {
                                            groupId: "77770419",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77770419",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77770419",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77770419",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "24421964",
                                            variationId: "78561141",
                                          },
                                        ],
                                        price: 31900,
                                        addonCombinations: [
                                          {
                                            groupId: "77770419",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77770419",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77770419",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77770419",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "24421964",
                                            variationId: "78561142",
                                          },
                                        ],
                                        price: 31900,
                                        addonCombinations: [
                                          {
                                            groupId: "77770419",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77770419",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77770419",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77770419",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "24421964",
                                            variationId: "78561143",
                                          },
                                        ],
                                        price: 31900,
                                        addonCombinations: [
                                          {
                                            groupId: "77770419",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77770419",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77770419",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77770419",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "77770419",
                                      groupName: "BEVERAGES",
                                      choices: [
                                        {
                                          id: "62785731",
                                          name: "COKE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785732",
                                          name: "SPRITE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785733",
                                          name: "Thumsup (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785734",
                                          name: "PACKAGED WATER (1 Litre)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  defaultPrice: 31900,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "10 ratings",
                                      ratingCountV2: "10",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "110169691",
                                  name: "CHICKEN TIKKA MASALA COMBO",
                                  category: "MAKE YOUR MEAL",
                                  description:
                                    "Choose your preffered sides with our creamy and spicy Chicken Tikka Masala.",
                                  imageId: "refrvhc4c1pq4gqm1m6n",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "24421966",
                                        name: "Customisation",
                                        variations: [
                                          {
                                            name: "JEERA RICE",
                                            price: 319,
                                            default: 1,
                                            id: "78561147",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "JAFRANI PULAO",
                                            price: 319,
                                            id: "78561148",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "BURNT GARLIC RICE",
                                            price: 319,
                                            id: "78561149",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "BUTTER NAAN",
                                            price: 319,
                                            id: "78561150",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "KULCHA",
                                            price: 319,
                                            id: "78561151",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "24421966",
                                            variationId: "78561147",
                                          },
                                        ],
                                        price: 31900,
                                        addonCombinations: [
                                          {
                                            groupId: "77770421",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77770421",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77770421",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77770421",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "24421966",
                                            variationId: "78561148",
                                          },
                                        ],
                                        price: 31900,
                                        addonCombinations: [
                                          {
                                            groupId: "77770421",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77770421",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77770421",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77770421",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "24421966",
                                            variationId: "78561149",
                                          },
                                        ],
                                        price: 31900,
                                        addonCombinations: [
                                          {
                                            groupId: "77770421",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77770421",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77770421",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77770421",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "24421966",
                                            variationId: "78561150",
                                          },
                                        ],
                                        price: 31900,
                                        addonCombinations: [
                                          {
                                            groupId: "77770421",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77770421",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77770421",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77770421",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "24421966",
                                            variationId: "78561151",
                                          },
                                        ],
                                        price: 31900,
                                        addonCombinations: [
                                          {
                                            groupId: "77770421",
                                            addonId: "62785731",
                                          },
                                          {
                                            groupId: "77770421",
                                            addonId: "62785732",
                                          },
                                          {
                                            groupId: "77770421",
                                            addonId: "62785733",
                                          },
                                          {
                                            groupId: "77770421",
                                            addonId: "62785734",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "77770421",
                                      groupName: "BEVERAGES",
                                      choices: [
                                        {
                                          id: "62785731",
                                          name: "COKE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785732",
                                          name: "SPRITE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785733",
                                          name: "Thumsup (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785734",
                                          name: "PACKAGED WATER (1 Litre)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  defaultPrice: 31900,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Twin Combos",
                      categories: [
                        {
                          title: "Twin Combo Veg",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "66111344",
                                  name: "Wrap + Stuffed Potato Combo",
                                  category: "Twin Combos",
                                  description:
                                    "TWO PANEER MAKHMALI WRAP + 4PCS STUFFED POTATO + COKE",
                                  imageId: "t1maoopch5meyjrlltw0",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 59900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "77766885",
                                      groupName: "BEVERAGES",
                                      choices: [
                                        {
                                          id: "62785731",
                                          name: "COKE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785732",
                                          name: "SPRITE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785733",
                                          name: "Thumsup (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785734",
                                          name: "PACKAGED WATER (1 Litre)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "Twin Combo Non Veg",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "66111345",
                                  name: "Wrap + Chicken Tangdi Combo",
                                  category: "Twin Combos",
                                  description:
                                    "TWO CHICKEN SEEKH WRAPS + 2PCS TANGDI KEBAB + COKE",
                                  imageId: "pjkhkje6usqwijdglbb1",
                                  inStock: 1,
                                  price: 55900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "77770393",
                                      groupName: "BEVERAGES",
                                      choices: [
                                        {
                                          id: "62785731",
                                          name: "COKE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785732",
                                          name: "SPRITE (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785733",
                                          name: "Thumsup (250ml)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "62785734",
                                          name: "PACKAGED WATER (1 Litre)",
                                          price: 3000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                      type: "FSSAI",
                      imageId: "fssai_final_edss9i",
                      text: ["License No. 12822013001467"],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                      name: "TANDOOR BOX",
                      area: "Sodepur",
                      completeAddress:
                        "2/S/1, SAHID COLONY, WARD NO. 13, PANIHATI MUNICIPALITY, North Twenty Four Parganas, West Bengal-700114",
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
    firstOffsetRequest: true,
  },
  tid: "eb3b1aab-5387-4535-990c-558c818b99c7",
  sid: "6f61523a-7e67-4424-8efc-7dd00bf6de93",
  deviceId: "d2238e9f-c72a-a632-b320-a93cb40fba0b",
  csrfToken: "ODLq89c2XNpp-uPmdOJCcciKABYWYQDk-OKcnTzk",
};

export const RESTAURANT_DATA = {
  statusCode: 0,
  data: {
    cacheExpiryTime: 320,
    pages: 1,
    pageIndex: 0,
    scrubber: 0,
    filters: [
      {
        type: "FilterWidget",
        title: "Cuisines",
        key: "CUISINES",
        configType: "checkbox",
        visible: 1,
        options: [
          { option: "American", selected: 0, visible: 1 },
          { option: "Arabian", selected: 0, visible: 1 },
          { option: "Asian", selected: 0, visible: 1 },
          { option: "Awadhi", selected: 0, visible: 1 },
          { option: "Bakery", selected: 0, visible: 1 },
          { option: "Bangladeshi", selected: 0, visible: 1 },
          { option: "Barbecue", selected: 0, visible: 1 },
          { option: "Bengali", selected: 0, visible: 1 },
          { option: "Beverages", selected: 0, visible: 1 },
          { option: "Biryani", selected: 0, visible: 1 },
          { option: "Burgers", selected: 0, visible: 1 },
          { option: "Chaat", selected: 0, visible: 1 },
          { option: "Chinese", selected: 0, visible: 1 },
          { option: "Combo", selected: 0, visible: 1 },
          { option: "Continental", selected: 0, visible: 1 },
          { option: "Desserts", selected: 0, visible: 1 },
          { option: "Fast Food", selected: 0, visible: 1 },
          { option: "Healthy Food", selected: 0, visible: 1 },
          { option: "Ice Cream", selected: 0, visible: 1 },
          { option: "Ice Cream Cakes", selected: 0, visible: 1 },
          { option: "Indian", selected: 0, visible: 1 },
          { option: "Italian", selected: 0, visible: 1 },
          { option: "Italian-American", selected: 0, visible: 1 },
          { option: "Juices", selected: 0, visible: 1 },
          { option: "Kebabs", selected: 0, visible: 1 },
          { option: "Lebanese", selected: 0, visible: 1 },
          { option: "Lucknowi", selected: 0, visible: 1 },
          { option: "Mexican", selected: 0, visible: 1 },
          { option: "Mughlai", selected: 0, visible: 1 },
          { option: "North Indian", selected: 0, visible: 1 },
          { option: "Oriental", selected: 0, visible: 1 },
          { option: "Pan-Asian", selected: 0, visible: 1 },
          { option: "Pastas", selected: 0, visible: 1 },
          { option: "Pizzas", selected: 0, visible: 1 },
          { option: "Punjabi", selected: 0, visible: 1 },
          { option: "Salads", selected: 0, visible: 1 },
          { option: "Seafood", selected: 0, visible: 1 },
          { option: "Snacks", selected: 0, visible: 1 },
          { option: "South Indian", selected: 0, visible: 1 },
          { option: "Street Food", selected: 0, visible: 1 },
          { option: "Sweets", selected: 0, visible: 1 },
          { option: "Tandoor", selected: 0, visible: 1 },
          { option: "Thai", selected: 0, visible: 1 },
          { option: "Thalis", selected: 0, visible: 1 },
          { option: "Tibetan", selected: 0, visible: 1 },
          { option: "Vietnamese", selected: 0, visible: 1 },
        ],
        detail: "",
        heading: "Cuisines",
        applicable: 1,
        searchable: 1,
      },
      {
        type: "FilterWidget",
        title: "Show Restaurants With",
        key: "SHOW_RESTAURANTS_WITH",
        configType: "checkbox",
        visible: 1,
        options: [
          { option: "Offers", selected: 0, visible: 1 },
          { option: "Pure Veg", selected: 0, visible: 1 },
        ],
        detail: "",
        heading: "Offers & More",
        applicable: 1,
        searchable: 0,
      },
    ],
    sorts: [
      {
        type: "SortWidget",
        key: "RELEVANCE",
        title: "Relevance",
        selected: 1,
        visible: 1,
        defaultSelection: true,
      },
      {
        type: "SortWidget",
        key: "DELIVERY_TIME",
        title: "Delivery Time",
        selected: 0,
        visible: 1,
        defaultSelection: false,
      },
      {
        type: "SortWidget",
        key: "RATING",
        title: "Rating",
        selected: 0,
        visible: 1,
        defaultSelection: false,
      },
      {
        type: "SortWidget",
        key: "COST_FOR_TWO",
        title: "Cost: Low to High",
        selected: 0,
        visible: 1,
        defaultSelection: false,
      },
      {
        type: "SortWidget",
        key: "COST_FOR_TWO_H2L",
        title: "Cost: High to Low",
        selected: 0,
        visible: 1,
        defaultSelection: false,
      },
    ],
    configs: {
      ribbons: {
        PREORDER: {
          type: "PREORDER",
          text: "Preorder",
          textColor: "#ffffff",
          imageId: "sfefefefeegeg",
          topBackgroundColor: "#d53d4c",
          bottomBackgroundColor: "#af2330",
          priority: 3,
        },
        EXCLUSIVE: {
          type: "EXCLUSIVE",
          text: "Exclusive",
          textColor: "#ffffff",
          imageId: "sfefefefeegeg",
          topBackgroundColor: "#fa4a5b",
          bottomBackgroundColor: "#d12a3b",
          priority: 2,
        },
        NEW: {
          type: "NEW",
          text: "Newly Added",
          textColor: "#ffffff",
          imageId: "sfefefefeegeg",
          topBackgroundColor: "#d53d4c",
          bottomBackgroundColor: "#af2330",
          priority: 4,
        },
        REPEAT: {
          type: "REPEAT",
          text: "Repeat",
          textColor: "#ffffff",
          imageId: "sfefefefeegeg",
          topBackgroundColor: "#D53D4C",
          bottomBackgroundColor: "#B02331",
          priority: 6,
        },
        CLOUD: {
          type: "CLOUD",
          text: "Daily Menus",
          textColor: "#ffffff",
          imageId: "sfefefefeegeg",
          topBackgroundColor: "#fa4a5b",
          bottomBackgroundColor: "#d12a3b",
          priority: 5,
        },
        PREMIUM: {
          type: "PREMIUM",
          text: "Premium",
          textColor: "#ffffff",
          imageId: "sfefefefeegeg",
          topBackgroundColor: "#8a584b",
          bottomBackgroundColor: "#583229",
          priority: 7,
        },
        PROMOTED: {
          type: "PROMOTED",
          text: "Promoted",
          textColor: "#ffffff",
          imageId: "sfefefefeegeg",
          topBackgroundColor: "#3a3c41",
          bottomBackgroundColor: "#1e2023",
          priority: 1,
        },
      },
      croutons: {
        RAIN: {
          type: "Crouton",
          bgColor: "#282C3F",
          icon: "surge_listing_piuzrv",
          textColor: "#ffffff",
          title: "Bad Weather",
          message: "${amount} extra levied on some restaurants",
        },
        SERVICEABLE_WITH_BANNER_RAIN: {
          type: "Crouton",
          bgColor: "#282C3F",
          icon: "rain_crouton_4x",
          textColor: "#ffffff",
          title: "Bad Weather",
          message: "Few restaurants unserviceable due to rains",
        },
      },
    },
    cards: [
      {
        cardType: "carousel",
        layoutAlignmentType: "VERTICAL",
        data: {
          type: "carousel",
          subtype: "topCarousel",
          data: {
            cards: [
              {
                type: "carouselElement",
                subtype: "image",
                data: {
                  bannerId: 635529,
                  creativeId: "rng/md/carousel/production/pneknawbadtvceqzwiep",
                  type: "restaurantCollectionV2",
                  link: "49301",
                  cityId: 0,
                  restaurantUuid: "",
                  restaurantParentId: "0",
                  thirdPartyVendor: "",
                  thirdPartyAddress: false,
                },
              },
              {
                type: "carouselElement",
                subtype: "image",
                data: {
                  bannerId: 619141,
                  creativeId: "rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t",
                  type: "restaurantCollectionV2",
                  link: "56413",
                  cityId: 0,
                  restaurantUuid: "",
                  restaurantParentId: "0",
                  thirdPartyVendor: "",
                  thirdPartyAddress: false,
                },
              },
              {
                type: "carouselElement",
                subtype: "image",
                data: {
                  bannerId: 607195,
                  creativeId: "rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3",
                  type: "restaurantCollectionV2",
                  link: "56421",
                  cityId: 0,
                  restaurantUuid: "",
                  restaurantParentId: "0",
                  thirdPartyVendor: "",
                  thirdPartyAddress: false,
                },
              },
            ],
          },
        },
        parentWidget: false,
      },
      {
        cardType: "carousel",
        layoutAlignmentType: "VERTICAL",
        data: {
          type: "carousel",
          subtype: "openFilter",
          data: {
            cards: [
              {
                type: "carouselElement",
                subtype: "image",
                data: {
                  bannerId: 181684,
                  creativeId: "bkhjfipzydkoqncrxpyi",
                  type: "restaurantCollectionV2",
                  link: "11718",
                  cityId: 0,
                  restaurantUuid: "",
                  restaurantParentId: "0",
                  title: "Offers Near You",
                  subtitle: "0 OPTIONS",
                  restaurants: [],
                  totalCount: 0,
                  dwebOpenFilterTitle: "Offers Near You",
                  dwebOpenFilterBgColor: "#FF0000",
                  dwebOpenFilterSelectIcon: "eyperwsfhaoa5vktjtu4",
                  dwebOpenFilterDeselectIcon: "urw8usdf4mk9aywd59gq",
                },
              },
              {
                type: "carouselElement",
                subtype: "image",
                data: {
                  bannerId: 273242,
                  creativeId: "rng/md/carousel/production/vquntqrzvkb08pe59cec",
                  type: "restaurantCollectionV2",
                  link: "46147",
                  cityId: 0,
                  restaurantUuid: "",
                  restaurantParentId: "0",
                  title: "Top Picks",
                  subtitle: "0 OPTIONS",
                  restaurants: [],
                  totalCount: 0,
                  dwebOpenFilterTitle: "Top Picks",
                  dwebOpenFilterBgColor: "#FF0000",
                  dwebOpenFilterSelectIcon:
                    "rng/md/carousel/production/vt13uzhjrg5r49kh9oru",
                  dwebOpenFilterDeselectIcon:
                    "rng/md/carousel/production/ser2sttildk9yt7t2s91",
                },
              },
              {
                type: "carouselElement",
                subtype: "image",
                data: {
                  bannerId: 181680,
                  creativeId: "a3jqjjod5taken7dh1bs",
                  type: "restaurantCollectionV2",
                  link: "11721",
                  cityId: 0,
                  restaurantUuid: "",
                  restaurantParentId: "0",
                  title: "Veg Only",
                  subtitle: "0 OPTIONS",
                  restaurants: [],
                  totalCount: 0,
                  dwebOpenFilterTitle: "Vegetarian Options",
                  dwebOpenFilterBgColor: "#FF0000",
                  dwebOpenFilterSelectIcon: "qtjc8dzfexg72lug37a0",
                  dwebOpenFilterDeselectIcon: "bm8bziikwyvwqsml1clm",
                },
              },
            ],
          },
        },
        parentWidget: false,
      },
      {
        cardType: "seeAllRestaurants",
        layoutAlignmentType: "VERTICAL",
        data: {
          type: "seeAllRestaurants",
          data: {
            title: "SEE ALL",
            totalOpenRestaurants: 257,
            cards: [
              {
                type: "restaurant",
                data: {
                  type: "F",
                  id: "540574",
                  name: "Little Darjeeling",
                  uuid: "0dfc9b1b-52c8-496a-b724-803083000310",
                  city: "7",
                  area: "Rahara Rd",
                  totalRatingsString: "50+ ratings",
                  cloudinaryImageId: "voq3xckjtldqkkssx4hh",
                  cuisines: ["Biryani"],
                  tags: [],
                  costForTwo: 40000,
                  costForTwoString: "₹400 FOR TWO",
                  deliveryTime: 34,
                  minDeliveryTime: 34,
                  maxDeliveryTime: 34,
                  slaString: "34 MINS",
                  lastMileTravel: 3.700000047683716,
                  slugs: {
                    restaurant: "little-darjeeling-sodepur-sodepur",
                    city: "kolkata",
                  },
                  cityState: "7",
                  address:
                    "99/40/A, I.C. Road, Rahara Rd, above Wow Fried Chicken, Khardaha, West Bengal 700118",
                  locality: "Sodepur",
                  parentId: 324927,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                    header: "40% off",
                    shortDescriptionList: [
                      {
                        meta: "40% off | Use TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                      },
                    ],
                    descriptionList: [
                      {
                        meta: "40% off up to ₹80 | Use code TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                      },
                    ],
                    subHeader: "",
                    headerType: 0,
                    superFreedel: "",
                  },
                  aggregatedDiscountInfoV2: {
                    header: "40% OFF",
                    shortDescriptionList: [
                      {
                        meta: "Use TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                      },
                    ],
                    descriptionList: [
                      {
                        meta: "40% off up to ₹80 | Use code TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                      },
                    ],
                    subHeader: "",
                    headerType: 0,
                    superFreedel: "",
                  },
                  ribbon: [{ type: "PROMOTED" }],
                  chain: [],
                  feeDetails: {
                    fees: [
                      { name: "distance", fee: 3800, message: "" },
                      { name: "time", fee: 0, message: "" },
                      { name: "special", fee: 0, message: "" },
                    ],
                    totalFees: 3800,
                    message: "",
                    title: "Delivery Charge",
                    amount: "3800",
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
                  adTrackingID:
                    "cid=6442599~p=1~eid=00000187-6ada-4c34-2403-658100c60169",
                  badges: {
                    imageBased: [],
                    textBased: [],
                    textExtendedBadges: [],
                  },
                  lastMileTravelString: "3.7 kms",
                  hasSurge: false,
                  sla: {
                    restaurantId: "540574",
                    deliveryTime: 34,
                    minDeliveryTime: 34,
                    maxDeliveryTime: 34,
                    lastMileTravel: 3.700000047683716,
                    lastMileDistance: 0,
                    serviceability: "SERVICEABLE",
                    rainMode: "NONE",
                    longDistance: "NOT_LONG_DISTANCE",
                    preferentialService: false,
                    iconType: "EMPTY",
                  },
                  promoted: true,
                  avgRating: "4.3",
                  totalRatings: 50,
                  new: false,
                },
                subtype: "basic",
              },
              {
                type: "restaurant",
                data: {
                  type: "F",
                  id: "151030",
                  name: "Wow! Momo",
                  uuid: "2aca773d-94a3-4740-b7f5-c65f2ac9d678",
                  city: "7",
                  area: "Belgharia",
                  totalRatingsString: "10000+ ratings",
                  cloudinaryImageId: "h51kqg7r8jugbuiflklo",
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
                  deliveryTime: 33,
                  minDeliveryTime: 33,
                  maxDeliveryTime: 33,
                  slaString: "33 MINS",
                  lastMileTravel: 5,
                  slugs: {
                    restaurant: "wow-momo-belgharia-belghoria",
                    city: "kolkata",
                  },
                  cityState: "7",
                  address:
                    "100, FEEDER ROAD, BELGHARIA, WARD NO 20, PS & PO BELGHARIA,  KOLKATA 700056",
                  locality: "Belgharia",
                  parentId: 1776,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                    header: "40% off",
                    shortDescriptionList: [
                      {
                        meta: "40% off | Use SPECIALS",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                      },
                    ],
                    descriptionList: [
                      {
                        meta: "40% off up to ₹80 on select items | Use code SPECIALS",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                      },
                    ],
                    subHeader: "",
                    headerType: 0,
                    superFreedel: "",
                  },
                  aggregatedDiscountInfoV2: {
                    header: "40% OFF",
                    shortDescriptionList: [
                      {
                        meta: "Use SPECIALS",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                      },
                    ],
                    descriptionList: [
                      {
                        meta: "40% off up to ₹80 on select items | Use code SPECIALS",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                      },
                    ],
                    subHeader: "",
                    headerType: 0,
                    superFreedel: "",
                  },
                  ribbon: [{ type: "PROMOTED" }],
                  chain: [],
                  feeDetails: {
                    fees: [
                      { name: "distance", fee: 5300, message: "" },
                      { name: "time", fee: 0, message: "" },
                      { name: "special", fee: 0, message: "" },
                    ],
                    totalFees: 5300,
                    message: "",
                    title: "Delivery Charge",
                    amount: "5300",
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
                  adTrackingID:
                    "cid=6398385~p=4~eid=00000187-6ada-4c34-2403-658200c6041b",
                  badges: {
                    imageBased: [],
                    textBased: [],
                    textExtendedBadges: [],
                  },
                  lastMileTravelString: "5 kms",
                  hasSurge: false,
                  sla: {
                    restaurantId: "151030",
                    deliveryTime: 33,
                    minDeliveryTime: 33,
                    maxDeliveryTime: 33,
                    lastMileTravel: 5,
                    lastMileDistance: 0,
                    serviceability: "SERVICEABLE",
                    rainMode: "NONE",
                    longDistance: "NOT_LONG_DISTANCE",
                    preferentialService: false,
                    iconType: "EMPTY",
                  },
                  promoted: true,
                  avgRating: "4.4",
                  totalRatings: 10000,
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
                  totalRatingsString: "10000+ ratings",
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
                  deliveryTime: 17,
                  minDeliveryTime: 17,
                  maxDeliveryTime: 17,
                  slaString: "17 MINS",
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
                  chain: [],
                  feeDetails: {
                    fees: [
                      { name: "distance", fee: 3200, message: "" },
                      { name: "time", fee: 0, message: "" },
                      { name: "special", fee: 0, message: "" },
                    ],
                    totalFees: 3200,
                    message: "",
                    title: "Delivery Charge",
                    amount: "3200",
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
                    deliveryTime: 17,
                    minDeliveryTime: 17,
                    maxDeliveryTime: 17,
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
                  totalRatings: 10000,
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
                  totalRatingsString: "5000+ ratings",
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
                  deliveryTime: 24,
                  minDeliveryTime: 24,
                  maxDeliveryTime: 24,
                  slaString: "24 MINS",
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
                    header: "40% off",
                    shortDescriptionList: [
                      {
                        meta: "40% off | Use SPECIALS",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                      },
                    ],
                    descriptionList: [
                      {
                        meta: "40% off up to ₹80 on select items | Use code SPECIALS",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                      },
                    ],
                    subHeader: "",
                    headerType: 0,
                    superFreedel: "",
                  },
                  aggregatedDiscountInfoV2: {
                    header: "40% OFF",
                    shortDescriptionList: [
                      {
                        meta: "Use SPECIALS",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                      },
                    ],
                    descriptionList: [
                      {
                        meta: "40% off up to ₹80 on select items | Use code SPECIALS",
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
                    fees: [
                      { name: "distance", fee: 3200, message: "" },
                      { name: "time", fee: 0, message: "" },
                      { name: "special", fee: 0, message: "" },
                    ],
                    totalFees: 3200,
                    message: "",
                    title: "Delivery Charge",
                    amount: "3200",
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
                  lastMileTravelString: "0.4 kms",
                  hasSurge: false,
                  sla: {
                    restaurantId: "213114",
                    deliveryTime: 24,
                    minDeliveryTime: 24,
                    maxDeliveryTime: 24,
                    lastMileTravel: 0.4000000059604645,
                    lastMileDistance: 0,
                    serviceability: "SERVICEABLE",
                    rainMode: "NONE",
                    longDistance: "NOT_LONG_DISTANCE",
                    preferentialService: false,
                    iconType: "EMPTY",
                  },
                  promoted: false,
                  avgRating: "4.1",
                  totalRatings: 5000,
                  new: false,
                },
                subtype: "basic",
              },
              {
                type: "restaurant",
                data: {
                  type: "F",
                  id: "180362",
                  name: "Chowman",
                  uuid: "375f9670-be85-42f7-bf77-812174c2df89",
                  city: "7",
                  area: "Sodepur",
                  totalRatingsString: "10000+ ratings",
                  cloudinaryImageId: "mb1zuzrrgzlplqlbt8rk",
                  cuisines: [
                    "Chinese",
                    "Thai",
                    "Seafood",
                    "Beverages",
                    "Desserts",
                  ],
                  tags: [],
                  costForTwo: 40000,
                  costForTwoString: "₹400 FOR TWO",
                  deliveryTime: 21,
                  minDeliveryTime: 21,
                  maxDeliveryTime: 21,
                  slaString: "21 MINS",
                  lastMileTravel: 0.6000000238418579,
                  slugs: {
                    restaurant: "chowman-sodepur-kolkata-sodepur",
                    city: "kolkata",
                  },
                  cityState: "7",
                  address:
                    "60, Vivekanada Colony, Ward 4, Near Dhankol Moore, Sodepur, Kolkata",
                  locality: "Sodepur",
                  parentId: 266,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                    header: "50% off",
                    shortDescriptionList: [
                      {
                        meta: "50% off | Use TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                      },
                    ],
                    descriptionList: [
                      {
                        meta: "50% off up to ₹100 | Use code TRYNEW",
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
                        meta: "Use TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                      },
                    ],
                    descriptionList: [
                      {
                        meta: "50% off up to ₹100 | Use code TRYNEW",
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
                    fees: [
                      { name: "distance", fee: 3200, message: "" },
                      { name: "time", fee: 0, message: "" },
                      { name: "special", fee: 0, message: "" },
                    ],
                    totalFees: 3200,
                    message: "",
                    title: "Delivery Charge",
                    amount: "3200",
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
                    restaurantId: "180362",
                    deliveryTime: 21,
                    minDeliveryTime: 21,
                    maxDeliveryTime: 21,
                    lastMileTravel: 0.6000000238418579,
                    lastMileDistance: 0,
                    serviceability: "SERVICEABLE",
                    rainMode: "NONE",
                    longDistance: "NOT_LONG_DISTANCE",
                    preferentialService: false,
                    iconType: "EMPTY",
                  },
                  promoted: false,
                  avgRating: "4.4",
                  totalRatings: 10000,
                  new: false,
                },
                subtype: "basic",
              },
              {
                type: "restaurant",
                data: {
                  type: "F",
                  id: "296955",
                  name: "TANDOOR BOX",
                  uuid: "10435781-b828-4956-9dad-6de069dce9f8",
                  city: "7",
                  area: "Sodepur",
                  totalRatingsString: "1000+ ratings",
                  cloudinaryImageId: "ad44908b2d32aa3513545e65f4bba913",
                  cuisines: [
                    "North Indian",
                    "Mughlai",
                    "Indian",
                    "Tandoor",
                    "Kebabs",
                  ],
                  tags: [],
                  costForTwo: 30000,
                  costForTwoString: "₹300 FOR TWO",
                  deliveryTime: 24,
                  minDeliveryTime: 24,
                  maxDeliveryTime: 24,
                  slaString: "24 MINS",
                  lastMileTravel: 1,
                  slugs: {
                    restaurant: "tandoor-box-chinar-park-chinar-park",
                    city: "kolkata",
                  },
                  cityState: "7",
                  address:
                    "2/S/1, SAHID COLONY, WARD NO. 13, PANIHATI MUNICIPALITY, North Twenty Four Parganas, West Bengal-700114",
                  locality: "Sodepur",
                  parentId: 6291,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                    header: "50% off",
                    shortDescriptionList: [
                      {
                        meta: "50% off | Use TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                      },
                    ],
                    descriptionList: [
                      {
                        meta: "50% off up to ₹100 | Use code TRYNEW",
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
                        meta: "Use TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                      },
                    ],
                    descriptionList: [
                      {
                        meta: "50% off up to ₹100 | Use code TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                      },
                    ],
                    subHeader: "",
                    headerType: 0,
                    superFreedel: "",
                  },
                  ribbon: [{ type: "PROMOTED" }],
                  chain: [],
                  feeDetails: {
                    fees: [
                      { name: "distance", fee: 3200, message: "" },
                      { name: "time", fee: 0, message: "" },
                      { name: "special", fee: 0, message: "" },
                    ],
                    totalFees: 3200,
                    message: "",
                    title: "Delivery Charge",
                    amount: "3200",
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
                  adTrackingID:
                    "cid=6442325~p=7~eid=00000187-6ada-4c34-2403-658300c6070e",
                  badges: {
                    imageBased: [],
                    textBased: [],
                    textExtendedBadges: [],
                  },
                  lastMileTravelString: "1 kms",
                  hasSurge: false,
                  sla: {
                    restaurantId: "296955",
                    deliveryTime: 24,
                    minDeliveryTime: 24,
                    maxDeliveryTime: 24,
                    lastMileTravel: 1,
                    lastMileDistance: 0,
                    serviceability: "SERVICEABLE",
                    rainMode: "NONE",
                    longDistance: "NOT_LONG_DISTANCE",
                    preferentialService: false,
                    iconType: "EMPTY",
                  },
                  promoted: true,
                  avgRating: "4.3",
                  totalRatings: 1000,
                  new: false,
                },
                subtype: "basic",
              },
              {
                type: "restaurant",
                data: {
                  type: "F",
                  id: "594712",
                  name: "Arsalan",
                  uuid: "50a35bf1-f172-4e45-b086-11fd87ecfc99",
                  city: "7",
                  area: "Sodepur",
                  totalRatingsString: "1000+ ratings",
                  cloudinaryImageId: "mx5glwuv0kidggqiakxi",
                  cuisines: [
                    "Biryani",
                    "Mughlai",
                    "North Indian",
                    "Indian",
                    "Kebabs",
                    "Tandoor",
                    "Awadhi",
                  ],
                  tags: [],
                  costForTwo: 50000,
                  costForTwoString: "₹500 FOR TWO",
                  deliveryTime: 18,
                  minDeliveryTime: 18,
                  maxDeliveryTime: 18,
                  slaString: "18 MINS",
                  lastMileTravel: 0.20000000298023224,
                  slugs: {
                    restaurant: "arsalan---sodepur-sodepur-sodepur",
                    city: "kolkata",
                  },
                  cityState: "7",
                  address:
                    "29, BT ROAD , BARRACKPORE-II , NORTH TWENTY FOUR PARGANAS, WEST BENGAL 700114",
                  locality: "Sodepur",
                  parentId: 1255,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  chain: [],
                  feeDetails: {
                    fees: [
                      { name: "distance", fee: 3200, message: "" },
                      { name: "time", fee: 0, message: "" },
                      { name: "special", fee: 0, message: "" },
                    ],
                    totalFees: 3200,
                    message: "",
                    title: "Delivery Charge",
                    amount: "3200",
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
                    restaurantId: "594712",
                    deliveryTime: 18,
                    minDeliveryTime: 18,
                    maxDeliveryTime: 18,
                    lastMileTravel: 0.20000000298023224,
                    lastMileDistance: 0,
                    serviceability: "SERVICEABLE",
                    rainMode: "NONE",
                    longDistance: "NOT_LONG_DISTANCE",
                    preferentialService: false,
                    iconType: "EMPTY",
                  },
                  promoted: false,
                  avgRating: "4.3",
                  totalRatings: 1000,
                  new: false,
                },
                subtype: "basic",
              },
              {
                type: "restaurant",
                data: {
                  type: "F",
                  id: "377796",
                  name: "Pizza Hut",
                  uuid: "e0743dc6-1f26-4d72-943b-017b95ee2a2d",
                  city: "7",
                  area: "Sodepur",
                  totalRatingsString: "1000+ ratings",
                  cloudinaryImageId: "uwijk5w87spchukyelxo",
                  cuisines: ["Pizzas", "Fast Food"],
                  tags: [],
                  costForTwo: 35000,
                  costForTwoString: "₹350 FOR TWO",
                  deliveryTime: 24,
                  minDeliveryTime: 24,
                  maxDeliveryTime: 24,
                  slaString: "24 MINS",
                  lastMileTravel: 1.7000000476837158,
                  slugs: {
                    restaurant: "pizza-hut-sodepur-sodepur",
                    city: "kolkata",
                  },
                  cityState: "7",
                  address:
                    "PIZZA HUT, E-2, H.B Town, Ground Floor, Sodepur, Kolkata, North Twenty FourParganas, West Bengal- 700114",
                  locality: "Hb Town",
                  parentId: 721,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  chain: [],
                  feeDetails: {
                    fees: [
                      { name: "distance", fee: 3200, message: "" },
                      { name: "time", fee: 0, message: "" },
                      { name: "special", fee: 0, message: "" },
                    ],
                    totalFees: 3200,
                    message: "",
                    title: "Delivery Charge",
                    amount: "3200",
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
                  lastMileTravelString: "1.7 kms",
                  hasSurge: false,
                  sla: {
                    restaurantId: "377796",
                    deliveryTime: 24,
                    minDeliveryTime: 24,
                    maxDeliveryTime: 24,
                    lastMileTravel: 1.7000000476837158,
                    lastMileDistance: 0,
                    serviceability: "SERVICEABLE",
                    rainMode: "NONE",
                    longDistance: "NOT_LONG_DISTANCE",
                    preferentialService: false,
                    iconType: "EMPTY",
                  },
                  promoted: false,
                  avgRating: "4.1",
                  totalRatings: 1000,
                  new: false,
                },
                subtype: "basic",
              },
              {
                type: "restaurant",
                data: {
                  type: "F",
                  id: "98563",
                  name: "Punjabi Food Junction (Station Rd.)",
                  uuid: "e9471947-445b-495d-9de1-1b0c6c569f75",
                  city: "7",
                  area: "Sodepur",
                  totalRatingsString: "1000+ ratings",
                  cloudinaryImageId: "tep1rzvelstx9eimc5hp",
                  cuisines: ["Indian", "Chinese", "Tandoor"],
                  tags: [],
                  costForTwo: 50000,
                  costForTwoString: "₹500 FOR TWO",
                  deliveryTime: 16,
                  minDeliveryTime: 16,
                  maxDeliveryTime: 16,
                  slaString: "16 MINS",
                  lastMileTravel: 0.4000000059604645,
                  slugs: {
                    restaurant: "punjabi-food-junction-sodepur-sanitytestarea",
                    city: "kolkata",
                  },
                  cityState: "7",
                  address: "Sodepore Station Road, Kolkata, Sodepur, Kolkata",
                  locality: "Sodepur",
                  parentId: 162279,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                    header: "50% off",
                    shortDescriptionList: [
                      {
                        meta: "50% off | Use TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                      },
                    ],
                    descriptionList: [
                      {
                        meta: "50% off up to ₹100 | Use code TRYNEW",
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
                        meta: "Use TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                      },
                    ],
                    descriptionList: [
                      {
                        meta: "50% off up to ₹100 | Use code TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                      },
                    ],
                    subHeader: "",
                    headerType: 0,
                    superFreedel: "",
                  },
                  ribbon: [{ type: "PROMOTED" }],
                  chain: [],
                  feeDetails: {
                    fees: [
                      { name: "distance", fee: 3200, message: "" },
                      { name: "time", fee: 0, message: "" },
                      { name: "special", fee: 0, message: "" },
                    ],
                    totalFees: 3200,
                    message: "",
                    title: "Delivery Charge",
                    amount: "3200",
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
                  adTrackingID:
                    "cid=6442066~p=10~eid=00000187-6ada-4c34-2403-658400c60a4c",
                  badges: {
                    imageBased: [],
                    textBased: [],
                    textExtendedBadges: [],
                  },
                  lastMileTravelString: "0.4 kms",
                  hasSurge: false,
                  sla: {
                    restaurantId: "98563",
                    deliveryTime: 16,
                    minDeliveryTime: 16,
                    maxDeliveryTime: 16,
                    lastMileTravel: 0.4000000059604645,
                    lastMileDistance: 0,
                    serviceability: "SERVICEABLE",
                    rainMode: "NONE",
                    longDistance: "NOT_LONG_DISTANCE",
                    preferentialService: false,
                    iconType: "EMPTY",
                  },
                  promoted: true,
                  avgRating: "4.3",
                  totalRatings: 1000,
                  new: false,
                },
                subtype: "basic",
              },
              {
                type: "restaurant",
                data: {
                  type: "F",
                  id: "416808",
                  name: "Oudh 1590",
                  uuid: "e7600999-b9be-4031-b945-dc85398fcdbc",
                  city: "7",
                  area: "Sodepur",
                  totalRatingsString: "5000+ ratings",
                  cloudinaryImageId: "d9scqlqyo64k5ow2ubsl",
                  cuisines: [
                    "Biryani",
                    "Mughlai",
                    "North Indian",
                    "Awadhi",
                    "Kebabs",
                    "Lucknowi",
                  ],
                  tags: [],
                  costForTwo: 100000,
                  costForTwoString: "₹1000 FOR TWO",
                  deliveryTime: 17,
                  minDeliveryTime: 17,
                  maxDeliveryTime: 17,
                  slaString: "17 MINS",
                  lastMileTravel: 0.20000000298023224,
                  slugs: {
                    restaurant: "oudh1590-sodepur-sodepur-sodepur",
                    city: "kolkata",
                  },
                  cityState: "7",
                  address:
                    "H/392A/1, B.T.ROAD, HOLDING NUMBER. 9, WARD NO- 13, PANIHATI MUNICIPALITY, North Twenty Four Parganas, West Bengal-700114",
                  locality: "Panihati Municipality",
                  parentId: 686,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                    header: "FLAT150 off",
                    shortDescriptionList: [
                      {
                        meta: "FLAT150 off | Use FLATDEAL",
                        discountType: "Flat",
                        operationType: "RESTAURANT",
                      },
                    ],
                    descriptionList: [
                      {
                        meta: "FLAT150 off | Use FLATDEAL",
                        discountType: "Flat",
                        operationType: "RESTAURANT",
                      },
                    ],
                    subHeader: "",
                    headerType: 0,
                    superFreedel: "",
                  },
                  aggregatedDiscountInfoV2: {
                    header: "₹150 OFF",
                    shortDescriptionList: [
                      {
                        meta: "Use FLATDEAL",
                        discountType: "Flat",
                        operationType: "RESTAURANT",
                      },
                    ],
                    descriptionList: [
                      {
                        meta: "FLAT150 off | Use FLATDEAL",
                        discountType: "Flat",
                        operationType: "RESTAURANT",
                      },
                    ],
                    subHeader: "",
                    headerType: 0,
                    superFreedel: "",
                  },
                  chain: [],
                  feeDetails: {
                    fees: [
                      { name: "distance", fee: 3200, message: "" },
                      { name: "time", fee: 0, message: "" },
                      { name: "special", fee: 0, message: "" },
                    ],
                    totalFees: 3200,
                    message: "",
                    title: "Delivery Charge",
                    amount: "3200",
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
                    restaurantId: "416808",
                    deliveryTime: 17,
                    minDeliveryTime: 17,
                    maxDeliveryTime: 17,
                    lastMileTravel: 0.20000000298023224,
                    lastMileDistance: 0,
                    serviceability: "SERVICEABLE",
                    rainMode: "NONE",
                    longDistance: "NOT_LONG_DISTANCE",
                    preferentialService: false,
                    iconType: "EMPTY",
                  },
                  promoted: false,
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
                  id: "112469",
                  name: "Saffron Food Cafe",
                  uuid: "2af509ac-c5d6-4e99-8451-315313d97ba3",
                  city: "7",
                  area: "Sodepur",
                  totalRatingsString: "1000+ ratings",
                  cloudinaryImageId: "q3cd1kysjnklajatiur1",
                  cuisines: ["South Indian"],
                  tags: [],
                  costForTwo: 25000,
                  costForTwoString: "₹250 FOR TWO",
                  deliveryTime: 21,
                  minDeliveryTime: 21,
                  maxDeliveryTime: 21,
                  slaString: "21 MINS",
                  lastMileTravel: 0.4000000059604645,
                  slugs: {
                    restaurant: "saffron-food-cafe-sodepur-sodepur",
                    city: "kolkata",
                  },
                  cityState: "7",
                  address:
                    "2, Deshabondhu Nagar, Station Road, Sodepur, Kolkata",
                  locality: "Deshabondhu Nagar",
                  parentId: 174360,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  chain: [],
                  feeDetails: {
                    fees: [
                      { name: "distance", fee: 3200, message: "" },
                      { name: "time", fee: 0, message: "" },
                      { name: "special", fee: 0, message: "" },
                    ],
                    totalFees: 3200,
                    message: "",
                    title: "Delivery Charge",
                    amount: "3200",
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
                  lastMileTravelString: "0.4 kms",
                  hasSurge: false,
                  sla: {
                    restaurantId: "112469",
                    deliveryTime: 21,
                    minDeliveryTime: 21,
                    maxDeliveryTime: 21,
                    lastMileTravel: 0.4000000059604645,
                    lastMileDistance: 0,
                    serviceability: "SERVICEABLE",
                    rainMode: "NONE",
                    longDistance: "NOT_LONG_DISTANCE",
                    preferentialService: false,
                    iconType: "EMPTY",
                  },
                  promoted: false,
                  avgRating: "4.3",
                  totalRatings: 1000,
                  new: false,
                },
                subtype: "basic",
              },
              {
                type: "restaurant",
                data: {
                  type: "F",
                  id: "377195",
                  name: "Mio Amore - The Cake Shop",
                  uuid: "322b3b41-f311-473d-a818-e70ed082c068",
                  city: "7",
                  area: "Barrackpore",
                  totalRatingsString: "1000+ ratings",
                  cloudinaryImageId: "8bf25e6cafe30c7e7c9c8f31f628fe96",
                  cuisines: ["Desserts", "Bakery", "Snacks"],
                  tags: [],
                  costForTwo: 15000,
                  costForTwoString: "₹150 FOR TWO",
                  deliveryTime: 26,
                  minDeliveryTime: 26,
                  maxDeliveryTime: 26,
                  slaString: "26 MINS",
                  lastMileTravel: 7.900000095367432,
                  slugs: {
                    restaurant: "mio-amore-barrackpore-barrackpore",
                    city: "kolkata",
                  },
                  cityState: "7",
                  address: "83/3 BARASAT ROAD,N.C.PUKUR,KOL-122,WARD NO 7",
                  locality: "Ncpukur",
                  parentId: 292958,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  ribbon: [{ type: "PROMOTED" }],
                  chain: [],
                  feeDetails: {
                    fees: [
                      { name: "distance", fee: 6500, message: "" },
                      { name: "time", fee: 0, message: "" },
                      { name: "special", fee: 0, message: "" },
                    ],
                    totalFees: 6500,
                    message: "",
                    title: "Delivery Charge",
                    amount: "6500",
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
                  adTrackingID:
                    "cid=6409605~p=13~eid=00000187-6ada-4c34-2403-658500c60d70",
                  badges: {
                    imageBased: [],
                    textBased: [],
                    textExtendedBadges: [],
                  },
                  lastMileTravelString: "7.9 kms",
                  hasSurge: false,
                  sla: {
                    restaurantId: "377195",
                    deliveryTime: 26,
                    minDeliveryTime: 26,
                    maxDeliveryTime: 26,
                    lastMileTravel: 7.900000095367432,
                    lastMileDistance: 0,
                    serviceability: "SERVICEABLE",
                    rainMode: "NONE",
                    longDistance: "NOT_LONG_DISTANCE",
                    preferentialService: false,
                    iconType: "EMPTY",
                  },
                  promoted: true,
                  avgRating: "4.5",
                  totalRatings: 1000,
                  new: false,
                },
                subtype: "basic",
              },
              {
                type: "restaurant",
                data: {
                  type: "F",
                  id: "508466",
                  name: "China Belly By Wow! Momo",
                  uuid: "2e8158ad-8419-41bf-8ebb-6a48c8a795b4",
                  city: "7",
                  area: "Sodepur",
                  totalRatingsString: "1000+ ratings",
                  cloudinaryImageId: "ejj2oj3b6sn7ljovyhsu",
                  cuisines: [
                    "Chinese",
                    "Tibetan",
                    "Asian",
                    "Fast Food",
                    "Beverages",
                    "Snacks",
                    "Continental",
                    "Desserts",
                  ],
                  tags: [],
                  costForTwo: 30000,
                  costForTwoString: "₹300 FOR TWO",
                  deliveryTime: 26,
                  minDeliveryTime: 26,
                  maxDeliveryTime: 26,
                  slaString: "26 MINS",
                  lastMileTravel: 0.4000000059604645,
                  slugs: {
                    restaurant: "china-belly-sodepur-sodepur",
                    city: "kolkata",
                  },
                  cityState: "7",
                  address:
                    "Raghunath Bhaban,Sodepore Station Road, Ward no13,W.B.,Kolkata,,West Bengal 700010",
                  locality: "Raghunath Bhaban",
                  parentId: 304195,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                    header: "40% off",
                    shortDescriptionList: [
                      {
                        meta: "40% off | Use SPECIALS",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                      },
                    ],
                    descriptionList: [
                      {
                        meta: "40% off up to ₹80 on select items | Use code SPECIALS",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                      },
                    ],
                    subHeader: "",
                    headerType: 0,
                    superFreedel: "",
                  },
                  aggregatedDiscountInfoV2: {
                    header: "40% OFF",
                    shortDescriptionList: [
                      {
                        meta: "Use SPECIALS",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                      },
                    ],
                    descriptionList: [
                      {
                        meta: "40% off up to ₹80 on select items | Use code SPECIALS",
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
                    fees: [
                      { name: "distance", fee: 3200, message: "" },
                      { name: "time", fee: 0, message: "" },
                      { name: "special", fee: 0, message: "" },
                    ],
                    totalFees: 3200,
                    message: "",
                    title: "Delivery Charge",
                    amount: "3200",
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
                  lastMileTravelString: "0.4 kms",
                  hasSurge: false,
                  sla: {
                    restaurantId: "508466",
                    deliveryTime: 26,
                    minDeliveryTime: 26,
                    maxDeliveryTime: 26,
                    lastMileTravel: 0.4000000059604645,
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
                  id: "611868",
                  name: "Punjab Restaurant and Madras Tiffin",
                  uuid: "1dae3db8-3873-4a7c-81cf-529c4ed671c6",
                  city: "7",
                  area: "Sodepur",
                  totalRatingsString: "100+ ratings",
                  cloudinaryImageId: "y5tbgnhiq0lcpjtypjsb",
                  cuisines: ["Indian", "Chinese", "Beverages"],
                  tags: [],
                  costForTwo: 25000,
                  costForTwoString: "₹250 FOR TWO",
                  deliveryTime: 22,
                  minDeliveryTime: 22,
                  maxDeliveryTime: 22,
                  slaString: "22 MINS",
                  lastMileTravel: 0.6000000238418579,
                  slugs: {
                    restaurant:
                      "punjab-restaurant-and-madras-tiffin-sodepur-sodepur",
                    city: "kolkata",
                  },
                  cityState: "7",
                  address:
                    "194, SAHID COLONY, PANIHATI, PANIHATI MUNICIPALITY, North Twenty Four Parganas, West Bengal, 700114",
                  locality: "Panihati Municipality",
                  parentId: 162044,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                    header: "50% off",
                    shortDescriptionList: [
                      {
                        meta: "50% off | Use TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                      },
                    ],
                    descriptionList: [
                      {
                        meta: "50% off up to ₹100 | Use code TRYNEW",
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
                        meta: "Use TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                      },
                    ],
                    descriptionList: [
                      {
                        meta: "50% off up to ₹100 | Use code TRYNEW",
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
                    fees: [
                      { name: "distance", fee: 3200, message: "" },
                      { name: "time", fee: 0, message: "" },
                      { name: "special", fee: 0, message: "" },
                    ],
                    totalFees: 3200,
                    message: "",
                    title: "Delivery Charge",
                    amount: "3200",
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
                    restaurantId: "611868",
                    deliveryTime: 22,
                    minDeliveryTime: 22,
                    maxDeliveryTime: 22,
                    lastMileTravel: 0.6000000238418579,
                    lastMileDistance: 0,
                    serviceability: "SERVICEABLE",
                    rainMode: "NONE",
                    longDistance: "NOT_LONG_DISTANCE",
                    preferentialService: false,
                    iconType: "EMPTY",
                  },
                  promoted: false,
                  avgRating: "4.1",
                  totalRatings: 100,
                  new: false,
                },
                subtype: "basic",
              },
              {
                type: "restaurant",
                data: {
                  type: "F",
                  id: "150076",
                  name: "Fryde Cafe",
                  uuid: "74a0c5f9-042a-4977-acfe-5904cbdf40a2",
                  city: "7",
                  area: "Belghoria",
                  totalRatingsString: "10000+ ratings",
                  cloudinaryImageId: "ec870ce759ffdb06c6c03a25136108b7",
                  cuisines: [
                    "Italian",
                    "Beverages",
                    "Desserts",
                    "Chinese",
                    "Continental",
                  ],
                  tags: [],
                  costForTwo: 25000,
                  costForTwoString: "₹250 FOR TWO",
                  deliveryTime: 33,
                  minDeliveryTime: 33,
                  maxDeliveryTime: 33,
                  slaString: "33 MINS",
                  lastMileTravel: 4.199999809265137,
                  slugs: {
                    restaurant: "fryde-belghoria-belghoria",
                    city: "kolkata",
                  },
                  cityState: "7",
                  address:
                    "16,Harichanran Chatterjee Street, Ratala, Kolkata - 700057",
                  locality: "Belghoria",
                  parentId: 84924,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                    header: "FLAT150 off",
                    shortDescriptionList: [
                      {
                        meta: "FLAT150 off | Use FLATDEAL",
                        discountType: "Flat",
                        operationType: "RESTAURANT",
                      },
                    ],
                    descriptionList: [
                      {
                        meta: "FLAT150 off | Use FLATDEAL",
                        discountType: "Flat",
                        operationType: "RESTAURANT",
                      },
                    ],
                    subHeader: "",
                    headerType: 0,
                    superFreedel: "",
                  },
                  aggregatedDiscountInfoV2: {
                    header: "₹150 OFF",
                    shortDescriptionList: [
                      {
                        meta: "Use FLATDEAL",
                        discountType: "Flat",
                        operationType: "RESTAURANT",
                      },
                    ],
                    descriptionList: [
                      {
                        meta: "FLAT150 off | Use FLATDEAL",
                        discountType: "Flat",
                        operationType: "RESTAURANT",
                      },
                    ],
                    subHeader: "",
                    headerType: 0,
                    superFreedel: "",
                  },
                  ribbon: [{ type: "PROMOTED" }],
                  chain: [],
                  feeDetails: {
                    fees: [
                      { name: "distance", fee: 4400, message: "" },
                      { name: "time", fee: 0, message: "" },
                      { name: "special", fee: 0, message: "" },
                    ],
                    totalFees: 4400,
                    message: "",
                    title: "Delivery Charge",
                    amount: "4400",
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
                  adTrackingID:
                    "cid=6442147~p=16~eid=00000187-6ada-4c34-2403-658600c6101c",
                  badges: {
                    imageBased: [],
                    textBased: [],
                    textExtendedBadges: [],
                  },
                  lastMileTravelString: "4.1 kms",
                  hasSurge: false,
                  sla: {
                    restaurantId: "150076",
                    deliveryTime: 33,
                    minDeliveryTime: 33,
                    maxDeliveryTime: 33,
                    lastMileTravel: 4.199999809265137,
                    lastMileDistance: 0,
                    serviceability: "SERVICEABLE",
                    rainMode: "NONE",
                    longDistance: "NOT_LONG_DISTANCE",
                    preferentialService: false,
                    iconType: "EMPTY",
                  },
                  promoted: true,
                  avgRating: "4.0",
                  totalRatings: 10000,
                  new: false,
                },
                subtype: "basic",
              },
            ],
            totalRestaurants: 257,
          },
          subtype: "personalized",
        },
        parentWidget: false,
      },
    ],
    nextPageFetch: 0,
  },
  tid: "49063c8b-6efd-4e13-8499-334e350a68d0",
  sid: "6f40bffe-2672-4d9b-a29f-2f486588b985",
  deviceId: "d5a93b25-0670-8dc8-4d5a-97bbd89a1bdf",
  csrfToken: "l7QChdkKl447-cLj21dIO1rmWswROyFy06flKUlc",
};
