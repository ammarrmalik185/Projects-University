using System;

namespace Assignment_2 {
    class Part_1 {
        static void Main(string[] args) {

        }
    }

    class Customer {
        private int customerId;
        private string lastName;
        private string firstName;
        private string street;
        private string city;
        private string state;
        private int zipcode;
        private string phoneNo;
        private string email;
        private string password;

        public Customer(int customerId, string lastName, string firstName, string street, string city, string state, int zipcode, string phoneNo, string email, string password) {
            this.customerId = customerId;
            this.lastName = lastName;
            this.firstName = firstName;
            this.street = street;
            this.city = city;
            this.state = state;
            this.zipcode = zipcode;
            this.phoneNo = phoneNo;
            this.email = email;
            this.password = password;
        }

        public Customer() {
        }

        public int CustomerId {
            get => customerId;
            set => customerId = value;
        }

        public string LastName {
            get => lastName;
            set => lastName = value;
        }

        public string FirstName {
            get => firstName;
            set => firstName = value;
        }

        public string Street {
            get => street;
            set => street = value;
        }

        public string City {
            get => city;
            set => city = value;
        }

        public string State {
            get => state;
            set => state = value;
        }

        public int Zipcode {
            get => zipcode;
            set => zipcode = value;
        }

        public string PhoneNo {
            get => phoneNo;
            set => phoneNo = value;
        }

        public string Email {
            get => email;
            set => email = value;
        }

        public string Password {
            get => password;
            set => password = value;
        }
    }

    class RetailCustomer : Customer {
        private string creditCardType;
        private string creditCardNo;

        public RetailCustomer() {
        }

        public RetailCustomer(int customerId, string lastName, string firstName, string street, string city, string state, int zipcode, string phoneNo, string email, string password, string creditCardType, string creditCardNo) : base(customerId, lastName, firstName, street, city, state, zipcode, phoneNo, email, password) {
            this.creditCardType = creditCardType;
            this.creditCardNo = creditCardNo;
        }

        public string CreditCardType {
            get => creditCardType;
            set => creditCardType = value;
        }

        public string CreditCardNo {
            get => creditCardNo;
            set => creditCardNo = value;
        }
    }

    class CorporateCustomer : Customer {
        private string companyName;
        private string frequentFlyerPts;
        private string billingAccountNo;

        public CorporateCustomer() {
        }

        public CorporateCustomer(int customerId, string lastName, string firstName, string street, string city, string state, int zipcode, string phoneNo, string email, string password, string companyName, string frequentFlyerPts, string billingAccountNo) : base(customerId, lastName, firstName, street, city, state, zipcode, phoneNo, email, password) {
            this.companyName = companyName;
            this.frequentFlyerPts = frequentFlyerPts;
            this.billingAccountNo = billingAccountNo;
        }

        public string CompanyName {
            get => companyName;
            set => companyName = value;
        }

        public string FrequentFlyerPts {
            get => frequentFlyerPts;
            set => frequentFlyerPts = value;
        }

        public string BillingAccountNo {
            get => billingAccountNo;
            set => billingAccountNo = value;
        }
    }

    class Reservation {
        private int reservationNo;
        private DateTime date;

        public Reservation() {
        }

        public Reservation(int reservationNo, DateTime date) {
            this.reservationNo = reservationNo;
            this.date = date;
        }
    }

    class Seat {
        private int rowNo;
        private int seatNo;
        private int price;
        private string status;

        public Seat() {
        }

        public Seat(int rowNo, int seatNo, int price, string status) {
            this.rowNo = rowNo;
            this.seatNo = seatNo;
            this.price = price;
            this.status = status;
        }

        public int RowNo {
            get => rowNo;
            set => rowNo = value;
        }

        public int SeatNo {
            get => seatNo;
            set => seatNo = value;
        }

        public int Price {
            get => price;
            set => price = value;
        }

        public string Status {
            get => status;
            set => status = value;
        }
    }

    class Flight {
        private int flightId;
        private DateTime date;
        private string origin;
        private string destination;
        private DateTime departureTime;
        private DateTime arrivalTime;
        private int seatingCapacity;

        public Flight() {
        }

        public Flight(int flightId, DateTime date, string origin, string destination, DateTime departureTime, DateTime arrivalTime, int seatingCapacity) {
            this.flightId = flightId;
            this.date = date;
            this.origin = origin;
            this.destination = destination;
            this.departureTime = departureTime;
            this.arrivalTime = arrivalTime;
            this.seatingCapacity = seatingCapacity;
        }

        public int FlightId {
            get => flightId;
            set => flightId = value;
        }

        public DateTime Date {
            get => date;
            set => date = value;
        }

        public string Origin {
            get => origin;
            set => origin = value;
        }

        public string Destination {
            get => destination;
            set => destination = value;
        }

        public DateTime DepartureTime {
            get => departureTime;
            set => departureTime = value;
        }

        public DateTime ArrivalTime {
            get => arrivalTime;
            set => arrivalTime = value;
        }

        public int SeatingCapacity {
            get => seatingCapacity;
            set => seatingCapacity = value;
        }
    }
    
    

}