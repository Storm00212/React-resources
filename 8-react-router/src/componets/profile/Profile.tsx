import './profile.css'
type profiledetailes = {
    name: string;
    avatar: string;
    bio: string
}

const Profile = ({ name, avatar, bio }: profiledetailes) => {
    return (
        <div className="profile-card">
            <img src={avatar} alt={name} className="profile-avatar" />
            <h2 className="profile-name">{name}</h2>
            <p className="profile-bio">{bio}</p>
        </div>
    )
}

export default Profile