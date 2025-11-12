namespace my.bookshop;

entity Customers {
  key ID          : Integer;
  name            : String;
  email           : String;
  phoneNumber     : String;
  address         : String;
  joinedAt        : DateTime;
}

entity Orders {
  key ID          : Integer;
  orderDate       : DateTime;
  totalAmount     : Decimal(10,2);
  status          : String;

  // Association to the Customers entity (One-to-Many relationship)
  customer        : Association to Customers; // Foreign key relationship
}
