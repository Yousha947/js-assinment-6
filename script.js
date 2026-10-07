// Employee Role Access System

let employeeRole = prompt("enter your employee role");
switch (employeeRole) {
  case "admin":
    alert("Full system access");
    break;

  case "manager":
    alert("Team management access");
    break;

  case "developer":
    alert("Code access");
    break;

  case "intern":
    alert("Limited access");
    break;

  default:
    alert("Invalid role");
}

// Online Payment Method Selection

let paymentMethod = prompt(
  "Choose payment method (credit / debit / upi / cod)",
);
switch (paymentMethod) {
  case "credit":
    alert("Payment successful using Credit Card");
    break;

  case "debit":
    alert("Payment successful using debit Card");
    break;

  case "upi":
    alert("Payment successful using upi");
    break;

  case "cod":
    alert("Order placed with Cash on Delivery");
    break;

  default:
    alert("Invalid payment method");
}

// Order Status Checker

let statusOrder = prompt(
  "Enter order status (placed / packed / shipped / delivered / cancelled)",
);
switch (statusOrder) {
  case "placed":
    alert("your order is placed");
    break;

  case "packed":
    alert("your order is packed");
    break;

  case "shipped":
    alert("your order is ready to ship");
    break;

  case "delivered":
    alert("your order is delivered");
    break;

  case "cancelled":
    alert("your order is cancelled");
    break;

  default:
    alert("no order");
}

// Office Working Day Checker

let day = prompt("Enter day name (Monday – Sunday)");
switch (day) {
  case "monday":
    alert("working day");
    break;

  case "tuesday":
    alert("working day");
    break;

  case "wednesay":
    alert("working day");
    break;

  case "thursday":
    alert("working day");
    break;

  case "friday":
    alert("half day");
    break;

  case "saturday":
    alert("half day");
    break;

  case "sunday":
    alert("holiday");
    break;
}
