import React from "react";
import TopBar from "./Components/TopBar";
import "./App.css";
import DonationForm from "./Components/DonationForm";
import Progress from "./Components/Progress";
import RecentDonations from "./Components/RecentDonations";

const targetAmount = 1000;
const donations = [
  {
    amount: 250,
    caption: "You really need this. Really.",
    id: 1,
    name: "Jo",
  },
  {
    amount: 30,
    caption: "Here, take a break from work!",
    id: 2,
    name: "Rami",
  },
  {
    amount: 20,
    caption: "LOL! You are too funny. Happy to do this for you. :)",
    id: 3,
    name: "Michelle",
  },
  {
    amount: 5,
    caption: "Have fun!",
    id: 4,
    name: "Malinda",
  },
  {
    amount: 30,
    caption: "Come visit me in Miami!",
    id: 5,
    name: "Sam",
  },
];

let raisedAmount = 0;
donations.map((donation) => {
  raisedAmount += donation.amount
  return raisedAmount
});

function App() {
  return (
    <>
      <TopBar />
      <main className="container">
        <section className="sidebar">
          {/* Recent Donations WITH KEY:VALUE PAIR */}
          <RecentDonations donations={donations} />
          </section>
        <section className="">
          {/* Progress W/KEY:VALUE PAIRS */}
          <Progress max={targetAmount} min={raisedAmount} />
          {/* Donation Form WITH KEY:VALUE PAIR */}
          <DonationForm position={donations.length + 1} />
        </section>
      </main>
    </>
  );
}

export default App;
