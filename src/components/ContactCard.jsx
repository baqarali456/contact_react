

function ContactCard(
    {
        _id,
        Name,
        Email,
        Phone,
        Message
    }
) {
  return (
    <div className="card" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">Name: {Name}</h5>
    <p className="card-text">Email: {Email}</p>
    <p className="card-text">Phone: {Phone}</p>
    {Message?.trim() && <p className="card-text">Message: {Message}</p>}
    <button  className="btn btn-primary">Delete</button>
  </div>
</div>
  )
}

export default ContactCard