# Product Requirements

Goal: Create a dashboard for Shipt operations staff to monitor and update shopper orders in real time.

## Order Management

- Display a list of all current orders.
- Update order status, for example from `PENDING` to `SHIPPED`.

## Search & Discovery

- Search for specific orders by the customer's name.
- Filter orders by their current status.

## User Context

- Display the logged-in Admin's name and role in the header.
- Restrict the `Delete` action to users with an `ADMIN` role.

## Performance & UX

- Show a loading spinner while data is being fetched.
- Provide immediate UI feedback when an order status is updated.

# System Design

Your app should follow a modular structure to demonstrate separation of concerns.

## Provider Layer

- `UserContext.Provider` and `ApolloProvider` (if using Apollo) wrap the entire app.

## Container Layer

- `Dashboard.js` handles data fetching and filtering logic.

## Presentation Layer

- `Navbar`: consumes `UserContext` to show profile info.
- `OrderTable`: maps through data to render `OrderRow`.
- `StatusBadge`: a pure component that styles itself based on the status string.

# Entity Relationship Diagram

Since you are using `json-graphql-server`, your data structure in `db.js` defines your schema.

| Entity | Field | Type | Description |
| --- | --- | --- | --- |
| Order | `id` | `ID` | Unique identifier |
| Order | `customerName` | `String` | Name of the person who ordered |
| Order | `total` | `Float` | Price of the order |
| Order | `status` | `String` | `PENDING`, `PICKING`, or `SHIPPED` |
| Order | `shopper_id` | `ID` | Foreign key to the Shopper |
| Shopper | `id` | `ID` | Unique identifier |
| Shopper | `name` | `String` | The Shipt Shopper's name |
| Shopper | `rating` | `Float` | Shopper's average rating |
| Admin | `id` | `ID` | The current logged-in employee |
| Admin | `name` | `String` | Employee name |
| Admin | `role` | `String` | `ADMIN` or `VIEWER` |

# Technical Implementation Steps

## Phase 1: The Backend

Create `db.js` with the entities above. Start the server:

```sh
npx json-graphql-server db.js --p 4000
```

## Phase 2: The Frontend Setup

Install necessary dependencies:

```sh
npm install @apollo/client graphql
```

## Phase 3: The "Bread and Butter" Queries

Write your GraphQL queries in a `queries.js` file:

- Query: `allOrders` to populate the table.
- Mutation: `updateOrder(id: $id, status: $status)` for the toggle button.
