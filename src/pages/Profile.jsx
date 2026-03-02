import { useState, useEffect } from 'react';
import List from '../components/List';
import Link from '../components/Link';
import './Profile.css';

function Profile({username}) {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(false);

    const items = [
        {
            field: 'html_url',
            value: <Link url={profile.html_url} title={profile.html_url}/>
        },
        {
            field: 'repos_url',
            value: <Link url={profile.repos_url} title={profile.repos_url}/>
        },
        {   field: 'name', value: profile.name },
        {   field: 'company', value: profile.company },
        {   field: 'location', value: profile.location },
        {   field: 'email', value: profile.email },
        {   field: 'bio', value: profile.bio }
    ];

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
            <div>
                <img className="Profile-avatar" src={profile.avatar_url} alt={`${profile.name}'s avatar`} />
                <List items={items} />
            </div>
            }
        </div>
    );
}

export default Profile;