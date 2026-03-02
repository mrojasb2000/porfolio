import { useState, useEffect } from 'react';

function Profile({username}) {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchProfile() {
            const profile = await fetch(`https://api.github.com/users/${username}`);
            const result = await profile.json();
            if (result) {
                setProfile(result);
                setLoading(false);
            }
        }

        fetchProfile();
    }, [username]);

    return (
        <div>
            <h1>About me</h1>
            {loading ? <span>Loading...</span> : <ul>
                <li>Avatar: <img src={profile.avatar_url} alt="Avatar" style={{width: '50px'}}/></li>
                <li>Html url: <a href={profile.html_url} target="_blank" rel="noopener noreferrer">{profile.html_url}</a></li>
                <li>Repositories: <a href={profile.repos_url} target="_blank" rel="noopener noreferrer">{profile.repos_url}</a></li>
                <li><span>Name</span>: {profile.name}</li>
                <li><span>Company</span>: {profile.company}</li>
                <li><span>Location</span>: {profile.location}</li>
                <li><span>Email</span>: {profile.email}</li>
                <li><span>Bio</span>: {profile.bio}</li>
                </ul>
            }
        </div>
    );
}

export default Profile;