module.exports = {
  orders: [
    {
      id: 1,
      customerName: "Jordan Lee",
      total: 64.28,
      status: "PENDING",
      shopper_id: 1,
    },
    {
      id: 2,
      customerName: "Maya Patel",
      total: 118.74,
      status: "PICKING",
      shopper_id: 2,
    },
    {
      id: 3,
      customerName: "Chris Morgan",
      total: 43.19,
      status: "SHIPPED",
      shopper_id: 3,
    },
    {
      id: 4,
      customerName: "Avery Johnson",
      total: 92.05,
      status: "PENDING",
      shopper_id: 2,
    },
    {
      id: 5,
      customerName: "Taylor Smith",
      total: 157.42,
      status: "PICKING",
      shopper_id: 1,
    },
  ],

  shoppers: [
    {
      id: 1,
      name: "Elena Ramirez",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Marcus Brooks",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Nina Chen",
      rating: 4.8,
    },
  ],

  admins: [
    {
      id: 1,
      name: "Sam Wilson",
      role: "ADMIN",
    },
    {
      id: 2,
      name: "Riley Carter",
      role: "VIEWER",
    },
  ],
};
