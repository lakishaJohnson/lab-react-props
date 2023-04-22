const Progress = (props) => {
  // console.log(props)
  /* props is an object, W/TWO PROPERTIES on it, MIN & max ASSIGNED IN APP.JS*/
  return (
  <section className="progress">
  <h2>
    Raised <span className="secondary">${props.min}</span> of
    <span className="secondary"> ${props.max}</span>
  </h2>
</section>
  )
};


export default Progress;
