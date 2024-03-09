export default function Friend({friend})
{
    const {name , email} = friend;
    return(
        <div className="box">
            <h3>Name : <span className="text">{name}</span></h3>
            <h3>Email : <span className="text">{email}</span></h3>
        </div>
    )
}