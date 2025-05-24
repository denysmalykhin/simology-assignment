// User Profile Card JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const followBtn = document.getElementById('followBtn');
    const profileCard = document.getElementById('profileCard');
    const avatarImg = document.querySelector('.avatar-img');
    const avatarFallback = document.getElementById('avatar-fallback');
    
    // State management
    let isFollowing = false;
    let isOwnProfile = false; // This would typically come from props or API
    
    // Initialize the component
    console.log('User Profile Card loaded successfully');
    
    // Avatar fallback handling
    function handleAvatarError() {
        if (avatarImg) {
            avatarImg.style.display = 'none';
        }
        if (avatarFallback) {
            avatarFallback.style.display = 'flex';
        }
        console.log('Avatar image failed to load, showing fallback initials');
    }
    
    // Ensure avatar displays properly
    function initializeAvatar() {
        if (avatarImg) {
            avatarImg.addEventListener('error', handleAvatarError);
            
            // Check if image is already broken
            if (avatarImg.complete && avatarImg.naturalHeight === 0) {
                handleAvatarError();
            }
        }
    }
    
    // Handle follow button toggle
    function toggleFollow() {
        if (isOwnProfile) {
            return; // Don't allow interaction if it's own profile
        }
        
        isFollowing = !isFollowing;
        
        if (isFollowing) {
            followBtn.textContent = 'Following';
            followBtn.classList.add('following');
            followBtn.classList.remove('follow');
        } else {
            followBtn.textContent = 'Follow';
            followBtn.classList.remove('following');
            followBtn.classList.add('follow');
        }
        
        // Add a subtle animation
        followBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            followBtn.style.transform = '';
        }, 150);
    }
    
    // Handle own profile state
    function setOwnProfile(isOwn) {
        isOwnProfile = isOwn;
        
        if (isOwnProfile) {
            followBtn.textContent = 'Own Profile';
            followBtn.classList.add('own-profile');
            followBtn.disabled = true;
            followBtn.style.pointerEvents = 'none';
        } else {
            followBtn.textContent = 'Follow';
            followBtn.classList.remove('own-profile');
            followBtn.disabled = false;
            followBtn.style.pointerEvents = 'auto';
        }
    }
    
    // Initialize avatar
    initializeAvatar();
    
    // Event listeners
    followBtn.addEventListener('click', toggleFollow);
    
    // Example usage of setOwnProfile function
    // setOwnProfile(true); // Uncomment to test own profile state
    
    // Additional hover effects for the card
    profileCard.addEventListener('mouseenter', function() {
        console.log('Profile card hovered');
    });
    
    profileCard.addEventListener('mouseleave', function() {
        console.log('Profile card unhovered');
    });
}); 