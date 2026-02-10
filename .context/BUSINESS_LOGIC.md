# Business Logic & Functional Requirements

## 1. Product Classification
Every product document in Firestore must contain a `type` field:
- `type: "RENTAL"`: Wedding dresses, Gowns, Costumes.
- `type: "SALE"`: Eye contact lenses, solutions, custom small accessories.

## 2. Rental Engine Logic
- **Availability:** Use a sub-collection `bookings` or an array `bookedDateRanges`.
- **Validation:** When a user selects dates, the system must check for overlaps in Firestore before allowing "Add to Cart."
- **Pricing:** - Rentals: Base Price (per 3-day block) + Security Deposit (Refundable).
  - Sales: Standard unit price.

## 3. User Flows
- **Customer:** Browsing -> Date Selection (if Rental) -> Cart -> Firebase Auth -> Checkout.
- **Admin:** Dashboard -> Inventory Management -> Toggle "Availability" manually -> Update "Return Status" for rentals.

## 4. Navigation Priority
- Global Search bar (top).
- Filter by: Theme (Anime, Wedding, Formal), Size, and Availability Date.