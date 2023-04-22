const RecentDonations = (props) => {
  // console.log(props)
  /* THIS PROPS IS AN ARRAY OF OBJECTS, THE DONATIONS ARRAY FROM APP.JS */
  let recent = props.donations.map((donation) => {
    return (
      <li>
        <span>
          {donation.name} donated ${donation.amount}
        </span>
        {donation.caption}
      </li>
    );
  });
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>{recent}</ul>
    </section>
  );
};
export default RecentDonations;
