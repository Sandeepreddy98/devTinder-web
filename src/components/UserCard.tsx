function UserCard({user} : any){
    const {age,firstName,lastName,gender,photos,skills,about} = user
    
    return <div className="card bg-base-300 w-96 shadow-sm">
    <figure className="px-10 pt-10">
      <img
        src={photos[0]}
        alt={firstName + " "+ lastName + " photo"}
        className="rounded-xl max-h-52 max-w-52" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{firstName + " " + lastName}</h2>
      <p>{age && gender && age +"," + gender}</p>
      <p>{about}</p>
      <div className="card-actions flex justify-between gap-10 mt-5">
        <button className="btn btn-primary w-25">Ignore</button>
        <button className="btn btn-secondary w-25">Interested</button>
      </div>
    </div>
  </div>
}

export default UserCard