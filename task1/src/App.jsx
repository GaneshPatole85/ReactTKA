import "./App.css";

//js
function App() {
  let studentname = "rahul";
  let age = 21;
  let productdetails = {
    productName: "wireless mouse",
    quantity: 3,
    price: function getprice() {
      return 499 * this.quantity;
    },
  };
  let studentAttendence = {
    studentName: "anjali",
    isPresent: true,
  };

  let nameformat = {
    firstname: "ganesh",
    lastname: "patole",
    fullname: function fullname() {
      return this.firstname + " " + this.lastname;
    },
  };
  let loan = {
    loanAmount: 500000,
    interestRate: 8,
    tenureYears: 5,
    EMICal: function () {
      let P = this.loanAmount;
      let R = this.interestRate / (12 * 100);
      let N = this.tenureYears * 12;

      let emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);

      return emi.toFixed(2);
    },
  };

  let studentDetailSubject = [
    {
      studentName: "Priya",
      subjectList: ["Math", "Science", "English"],
    },
  ];

  let employee = {
    employeeName: "Suresh",
    basic: 25000,
    hra: 10000,
    totalSal: function () {
      let totalsalary = this.basic + this.hra;
      return totalsalary;
    },
  };

  let finalProductPrice = {
    item: "Smartphone",
    price: 20000,
    discount: 10,
    totalPrice: function () {
      let FinalPrice = this.price - (this.price * this.discount) / 100;
      return FinalPrice;
    },
  };
  let finalPriceCal = {
    orderId: "ORD1234",
    customer: "Meena",
    items: 4,
    itemPrice: 800,
    TotalPrice: function () {
      let totalprice = this.items * this.itemPrice;
      return totalprice;
    },
  };

  let wheatherReport = {
    city: "Mumbai",
    temperatureC: 30,
    TempInF: function () {
      let Tempinf = (this.temperatureC * 9) / 5 + 32;
      return Tempinf;
    },
  };
  return (
    <>
      <h2>p1 greeting message students name</h2>
      <h3>
        hi my self {studentname} and im {age} year old{" "}
      </h3>
      <hr />
      <h2>p2 product details</h2>
      <h3>
        <ul>
          <li>product name : {productdetails.productName} </li>
          <li>quantity:{productdetails.quantity}</li>
          <li>price:{productdetails.price()}</li>
        </ul>
      </h3>
      <hr />
      <h2>p3 conditional attendance status</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>student name</th>
            <th> student present status</th>
          </tr>
        </thead>
        <tr>
          <td>{studentAttendence.studentName}</td>
          <td>{studentAttendence.isPresent ? "present" : "absent"}</td>
        </tr>
      </table>

      <hr />
      <h2>p4</h2>
      <h3>
        hi my first name is {nameformat.firstname} and my last name is{" "}
        {nameformat.lastname} my full name is {nameformat.fullname()}
      </h3>
      <hr />
      <h2>p5</h2>
      <table border={1}>
        <thead>
          <th>loan amount</th>
          <th>loan interest</th>
          <th>year</th>
          <th>EMl</th>
        </thead>
        <tr>
          <td>{loan.loanAmount}</td>
          <td>{loan.interestRate}</td>
          <td>{loan.tenureYears}</td>
          <td>{loan.EMICal()}</td>
        </tr>
      </table>
      <hr />
      <h2>p6</h2>
      <ul>
        {studentDetailSubject.map((std) => {
          return <li>{std.studentName} &nbsp; </li>;
        })}
        {studentDetailSubject.map((std) => {
          return <li>{std.subjectList} &nbsp; </li>;
        })}
      </ul>
      <h2>p7</h2>
      <table border={1}>
        <thead>
          <th>name</th>
          <th>basic pay</th>
          <th>hra</th>
          <th>totalsalary</th>
        </thead>
        <tr>
          <td>{employee.employeeName}</td>
          <td>{employee.basic}</td>
          <td>{employee.hra}</td>
          <td>{employee.totalSal()}</td>
        </tr>
      </table>
      <hr />
      <h2>p8</h2>
      <table border={1}>
        <thead>
          <th>Product Name</th>
          <th>Price</th>
          <th>Discount</th>
          <th>Final Price</th>
        </thead>
        <tr>
          <td>{finalProductPrice.item}</td>
          <td>{finalProductPrice.price}</td>
          <td>{finalProductPrice.discount}</td>
          <td>{finalProductPrice.totalPrice()}</td>
        </tr>
      </table>
     <hr />
      <h2>p9</h2>
      <table border={1}>
        <thead>
          <th>Order Id</th>
          <th>Customer</th>
          <th>items</th>
          <th>Total Price</th>
        </thead>
        <tr>
          <td>{finalPriceCal.orderId}</td>
          <td>{finalPriceCal.customer}</td>
          <td>{finalPriceCal.items}</td>
          <td>{finalPriceCal.TotalPrice()}</td>
        </tr>
      </table>
      <hr />
      <h2>p10</h2>
      <table border={1}>
        <thead>
          <th>City</th>
          <th>Temp IN Celcius</th>
          <th>Temp IN F</th>
        </thead>
        <tr>
          <td>{wheatherReport.city}</td>
          <td>{wheatherReport.temperatureC}</td>
          <td>{wheatherReport.TempInF()}</td>
        </tr>
      </table>
    </>
  );
}

export default App;
