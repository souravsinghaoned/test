function User({user}){
    return(
        <div>
            <p>{user.id} : {user.name}</p>
            <p>{user.email}</p>
        </div>
    )
}
export default User;