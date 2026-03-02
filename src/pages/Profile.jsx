import { useState, useEffect } from 'react';
import Link from '../components/Link';
import './Profile.css';

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
        <div className="Profile-container">
            <h1>About me</h1>
            {loading ? <span>Loading...</span> : 
            <>
                <img className="Profile-avatar" src={profile.avatar_url} alt={`${profile.name}'s avatar`} />
                <ul>
                    <li><span>Html url</span>: <Link url={profile.html_url} title={profile.html_url}/></li>
                    <li><span>Repositories</span>: <Link url={profile.repos_url} title={profile.repos_url}/></li>
                    <li><span>Name</span>: {profile.name}</li>
                    <li><span>Company</span>: {profile.company}</li>
                    <li><span>Location</span>: {profile.location}</li>
                    <li><span>Email</span>: {profile.email}</li>
                    <li><span>Bio</span>: {profile.bio}</li>
                </ul>
            </>
            }
        </div>
    );
}

export default Profile;