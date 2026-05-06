import { gql } from "@apollo/client";

export const ALL_ORDERS = gql`
  query AllOrders {
    allOrders {
      id
      customerName
      total
      status
      Shopper {
        id
        name
        rating
      }
    }
  }
`;

export const UPDATE_ORDER_STATUS = gql`
  mutation UpdateOrderStatus($id: ID!, $status: String!) {
    updateOrder(id: $id, status: $status) {
      id
      status
    }
  }
`;
