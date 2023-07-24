export const navData = [
  {
    id: "nav_home",
    title: "Home",
    url: "/",
    dropdown: false,
  },
  {
    id: "nav_about",
    title: "About Us",
    url: "/about-us",
    dropdown: false,
  },
  {
    id: "nav_blog",
    title: "Blog",
    url: "/blog",
    dropdown: false,
  },
  {
    id: "nav_blog_details",
    title: "Blog Details",
    url: "/blog-details",
    dropdown: false,
  },
  {
    id: "nav_loan",
    title: "Loan",
    url: "/loan",
    dropdown: true,
    dropdownItems: [
      {
        id: "loan_all",
        dropdown_title: "All Loans",
        parentUrl: "/loan",
        url: "/loan",
      },
      {
        id: "loan_car",
        dropdown_title: "Car Loan",
        parentUrl: "/loan",
        url: "/loan/car-loan",
      },
      {
        id: "loan_education",
        dropdown_title: "Education Loan",
        parentUrl: "/loan",
        url: "/loan/education-loan",
      },
      {
        id: "loan_home",
        dropdown_title: "Home Loan",
        parentUrl: "/loan",
        url: "/loan/home-loan",
      },
      {
        id: "loan_personal",
        dropdown_title: "Personal Loan",
        parentUrl: "/loan",
        url: "/loan/personal-loan",
      },
    ],
  },
  {
    id: "nav_card",
    title: "Card",
    url: "/card",
    dropdown: true,
    dropdownItems: [
      {
        id: "card_credit",
        dropdown_title: "Credit Card",
        parentUrl: "/card",
        url: "/card/credit-card",
      },
      {
        id: "card_debit",
        dropdown_title: "Debit Card",
        parentUrl: "/card",
        url: "/card/debit-card",
      },
    ],
  },
  {
    id: "nav_service",
    title: "Service",
    url: "/service",
    dropdown: true,
    dropdownItems: [
      {
        id: "service_checking_service",
        dropdown_title: "Service",
        parentUrl: "/service",
        url: "/service",
      },
      {
        id: "service_checking",
        dropdown_title: "Checking Account",
        parentUrl: "/service",
        url: "/service/checking-account",
      },
    ],
  },
];
