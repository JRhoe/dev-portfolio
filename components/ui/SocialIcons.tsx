import { socialMedia } from '@/data';
import React from 'react';

const SocialIcons = () => {
    return (
        <div className='flex items-center md:gap-3 gap-6'>
            {socialMedia.map(profile => (
                <a href={profile.link} target='_blank' key={profile.id}>
                    <div className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                        <img 
                        src={profile.img}    
                        alt={`${profile.id}`}
                        width={20}
                        height={20}/>
                    </div>
                </a>
            ))}
        </div>
    );
}

export default SocialIcons;
