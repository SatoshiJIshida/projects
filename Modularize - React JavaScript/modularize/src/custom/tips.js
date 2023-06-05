/**
 * Level 1 tips
 */
const tips = {
  level1Tips: {
    tip1: {
      id: "API Gateway",
      text: "This is an API management tool. This is what the restaurant's mobile application is connected to. It accepts all application programming interface (API) calls and aggregates the various \
                   services required to fulfil them and returns the correct result.",
    },
    tip2: {
      id: "Order Management",
      text: "This is a module that manages food order data, which includes accessing billing and payments modules.",
    },
    tip3: {
      id: "Billing",
      text: "This is a module for handling the billing of customers food items.",
    },
    tip4: {
      id: "Restaurant Web Access",
      text: "(The computer screen and restaurant): This is where the restaurant uses their web browser to access their web UI, other modules will manage the data that is here.",
    },
    tip5: {
      id: "Restaurant Management",
      text: "This is a module that manages management data such as accessing and specifying when to send notifications to their customers and couriers.",
    },
    tip6: {
      id: "Payments",
      text: "This is a module dealing with payments from the customer orders.",
    },
    tip7: {
      id: "Restaurant Web UI",
      text: "This is a module for the restaurant's web browser access for using their system, the data here is managed by other modules.",
    },
    tip8: {
      id: "Delivery Management",
      text: "This is a module that manages deliveries of food orders to be sent to the customers that made the orders.",
    },
    tip9: {
      id: "Notification",
      text: "This is a module that the restaurant uses for sending notifications to their customers of their orders and delivery times. It is also used to send notifications to the restaurant's couriers.",
    },
    RestAPI: {
      id: "REST API",
      text: "An API is an application programming interface, this is a set of rules that allow programs to communicate with one another. The API \
            is on a server and clients can communicate with it. REST stands for Representational State Transfer and this is a set of rules that developers \
            follow when they create their API. It allows the client to retrieve a piece of data called a resource, or functionality called a service, when it is \
            linked to a specific URI (uniform resource identifier). In this context, a URI is called a 'request' and the data sent back is called a 'response'.",
    },
    Adapter: {
      id: "Adapter",
      text: "An application programming interface adapter is an adapter that creates a virtual web server on a defined port that when requested via \
                   e.g. a web browser, it will respond with HTML, XML or JSON code.",
    },
  },

  /**
   * Level 1 level1TipOrder array
   */
  level1TipOrder: [
    "tip1",
    "tip2",
    "tip3",
    "tip4",
    "tip5",
    "tip6",
    "tip7",
    "tip8",
    "tip9",
    "RestAPI",
    "Adapter",
  ],

  /**
   * Level 2 tips
   */
  level2Tips: {
    tip1: {
      id: "API Gateway",
      text: "This is an API management tool. This is what the customer's mobile application is connected to. It accepts all application programming interface (API) calls and aggregates the various \
                   services required to fulfil them and returns the correct result.",
    },
    tip2: {
      id: "Passenger Management",
      text: "This is a module that manages passenger data such as accessing the payments module.",
    },
    tip3: {
      id: "Billing",
      text: "This is a module for handling passenger billing based on their trip/s taken.",
    },
    tip4: {
      id: "Passenger Web UI",
      text: "This is a module for the user's web browser access to using Uber, other modules will manage the data that is presented here.",
    },
    tip5: {
      id: "Driver Management",
      text: "This is a module that manages driver data and it includes accessing notifications \
                   and payments modules.",
    },
    tip6: {
      id: "Payments",
      text: "This is a module dealing with payments from the passenger to the driver.",
    },
    tip7: {
      id: "Driver Web UI",
      text: "This is a module for the driver's web browser access to using Uber, the driver uses this and the app to access their admin data.",
    },
    tip8: {
      id: "Trip Management",
      text: "This is a module that manages the data of the trips that the passenger takes and retrieves the billing of the trip.",
    },
    tip9: {
      id: "Notification",
      text: "This is a module that the driver management uses for sending journey notifications to the passenger.",
    },
    RestAPI: {
      id: "REST API",
      text: "An API is an application programming interface, this is a set of rules that allow programs to communicate with one another. The API \
            is on a server and clients can communicate with it. REST stands for Representational State Transfer and this is a set of rules that developers \
            follow when they create their API. It allows the client to retrieve a piece of data called a resource, or functionality called a service, when it is \
            linked to a specific URI (uniform resource identifier). In this context, a URI is called a 'request' and the data sent back is called a 'response'.",
    },
    Adapter: {
      id: "Adapter",
      text: "An application programming interface adapter is an adapter that creates a virtual web server on a defined port that when requested via \
                   e.g. a web browser, it will respond with HTML, XML or JSON code.",
    },
  },

  /**
   * Level 2 level2TipOrder array
   */
  level2TipOrder: [
    "tip1",
    "tip2",
    "tip3",
    "tip4",
    "tip5",
    "tip6",
    "tip7",
    "tip8",
    "tip9",
    "RestAPI",
    "Adapter",
  ],

  /**
   * Level 3 tips
   */
  level3Tips: {
    tip1: {
      id: "API Gateway",
      text: "This is an API management tool. This is what the customer's mobile application is connected to. It accepts all application programming interface (API) calls and aggregates the various \
                   services required to fulfil them and returns the correct result.",
    },
    tip2: {
      id: "Booking Service",
      text: "This is a module for booking seats for a movie at a cinema, which would be linked to payments, notifications and a UI.",
    },
    tip3: {
      id: "Payments",
      text: "This is a module for making payments when booking seats at a cinema and purchasing from their merch store.",
    },
    tip4: {
      id: "Cinema Web UI",
      text: "This is a module to access the cinema site on a web browser, the user can then make their bookings here.",
    },
    tip5: {
      id: "Cinema Catalogue Service",
      text: "This is a module for managing a cinema catalogue service, the user looks at and chooses their film here.",
    },
    tip6: {
      id: "Notifications",
      text: "This is a module that deals with notifications, it is used when a user books a film and/or makes a merch order.",
    },
    tip7: {
      id: "Cinema Grocery Store",
      text: "This is a module for accessing the cinema's online merch store from a web browser.",
    },
    tip8: {
      id: "Grocery Inventory Service",
      text: "This is a module for dealing with inventory of making purchases (the basket at checkout).",
    },
    tip9: {
      id: "Movies",
      text: "This is a module for storing movies used by a catalogue service.",
    },
    RestAPI: {
      id: "REST API",
      text: "An API is an application programming interface, this is a set of rules that allow programs to communicate with one another. The API \
            is on a server and clients can communicate with it. REST stands for Representational State Transfer and this is a set of rules that developers \
            follow when they create their API. It allows the client to retrieve a piece of data called a resource, or functionality called a service, when it \
            is linked to a specific URI (uniform resource identifier). In this context, a URI is called a 'request' and the data sent back is called a 'response'.",
    },
    Adapter: {
      id: "Adapter",
      text: "An application programming interface adapter is an adapter that creates a virtual web server on a defined port that when requested via \
                   e.g. a web browser, it will respond with HTML, XML or JSON code.",
    },
  },

  /**
   * Level 3 level3TipOrder array
   */
  level3TipOrder: [
    "tip1",
    "tip2",
    "tip3",
    "tip4",
    "tip5",
    "tip6",
    "tip7",
    "tip8",
    "tip9",
    "RestAPI",
    "Adapter",
  ],
};

export default tips;
