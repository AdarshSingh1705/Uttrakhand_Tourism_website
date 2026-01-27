import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import './UserProfile.css';

const UserProfile = () => {
  const { user: authUser, loading } = useAuth();

  // Use user-specific storage key
  const STORAGE_KEY = `userProfileData_${authUser?.id || 'guest'}`;

  // Create default user data based on authenticated user
  const DEFAULT_USER = {
    name: authUser?.name || 'Traveler',
    email: authUser?.email || 'user@example.com',
    bio: 'Passionate traveler exploring the world one destination at a time. Love hiking, photography, and cultural experiences.',
    location: 'New York, USA',
    joinDate: authUser?.createdAt ? new Date(authUser.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) : 'January 2023',
    profilePhoto: authUser?.profilePhoto || '/images/pic-1.png',
    coverPhoto: authUser?.coverPhoto || '/images/pic-2.jpg'
  };

  const DEFAULT_POSTS = [
    {
      id: 1,
      image: '/images/pack-1.JPG',
      title: 'Beautiful Santorini Sunset',
      location: 'Santorini, Greece',
      date: '2024-05-15',
      likes: 24,
      comments: 5,
      description: 'The most breathtaking sunset I\'ve ever witnessed! The colors were absolutely magical.',
      likedBy: [],
      commentedBy: []
    },
    {
      id: 2,
      image: '/images/pack-2.jpg',
      title: 'Mountain Trekking Adventure',
      location: 'Swiss Alps, Switzerland',
      date: '2024-04-22',
      likes: 32,
      comments: 8,
      description: 'Challenging but rewarding hike with incredible panoramic views.',
      likedBy: [],
      commentedBy: []
    },
    {
      id: 3,
      image: '/images/pack-3.jpg',
      title: 'Tokyo City Lights',
      location: 'Tokyo, Japan',
      date: '2024-03-10',
      likes: 45,
      comments: 12,
      description: 'The vibrant energy of Tokyo at night is simply electrifying!',
      likedBy: [],
      commentedBy: []
    }
  ];

  // Initialize from localStorage
  const initializeData = () => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        return JSON.parse(savedData);
      } catch (e) {
        console.error('Error reading saved data:', e);
        return { user: DEFAULT_USER, posts: DEFAULT_POSTS };
      }
    }
    return { user: DEFAULT_USER, posts: DEFAULT_POSTS };
  };

  const { user: initialUser, posts: initialPosts } = initializeData();

  const [user, setUser] = useState(initialUser);
  const [posts, setPosts] = useState(initialPosts);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });
  const [editingPostId, setEditingPostId] = useState(null);
  const [editingPost, setEditingPost] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [currentUser] = useState(authUser?.id || 'guest-user');
  const fileInputRef = useRef(null);

  // Save to localStorage whenever user or posts change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ user, posts }));
  }, [user, posts]);

  const handleEditToggle = () => {
    if (isEditing) {
      // Validate before saving
      if (!editedUser.name || !editedUser.name.trim()) {
        setError('Name cannot be empty');
        return;
      }
      // Save the edited user data
      setUser(editedUser);
      setIsEditing(false);
      setError('');
      setSuccess('Profile updated successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } else {
      // Entering edit mode
      setEditedUser({ ...user });
      setIsEditing(true);
      setError('');
    }
  };

  const handleInputChange = (e) => {
    setEditedUser({
      ...editedUser,
      [e.target.name]: e.target.value
    });
  };

  const handlePhotoUpload = (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file');
      setTimeout(() => setError(''), 3000);
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB');
      setTimeout(() => setError(''), 3000);
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        if (type === 'profile') {
          setEditedUser({ ...editedUser, profilePhoto: event.target.result });
        } else {
          setEditedUser({ ...editedUser, coverPhoto: event.target.result });
        }
        setSuccess(`${type === 'profile' ? 'Profile' : 'Cover'} photo updated!`);
        setTimeout(() => setSuccess(''), 2000);
      } catch (err) {
        setError('Error uploading photo');
        setTimeout(() => setError(''), 3000);
      }
    };
    reader.onerror = () => {
      setError('Error reading file');
      setTimeout(() => setError(''), 3000);
    };
    reader.readAsDataURL(file);
  };

  const handleAddPost = () => {
    const newPost = {
      id: posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1,
      image: '/images/pack-4.jpg',
      title: 'New Adventure',
      location: 'Unknown',
      date: new Date().toISOString().split('T')[0],
      likes: 0,
      comments: 0,
      description: 'Share your latest travel experience...'
    };
    setPosts([newPost, ...posts]);
    setSuccess('New post added! Edit it to customize.');
    setTimeout(() => setSuccess(''), 3000);
  };

  const handleDeletePost = (postId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(p => p.id !== postId));
      setSuccess('Post deleted successfully!');
      setTimeout(() => setSuccess(''), 3000);
    }
  };

  const handleEditPost = (post) => {
    setEditingPostId(post.id);
    setEditingPost({ ...post });
  };

  const handleSavePost = (postId) => {
    if (!editingPost.title.trim() || !editingPost.description.trim()) {
      setError('Title and description cannot be empty');
      return;
    }
    setPosts(posts.map(p => p.id === postId ? editingPost : p));
    setEditingPostId(null);
    setEditingPost(null);
    setSuccess('Post updated successfully!');
    setTimeout(() => setSuccess(''), 3000);
  };

  const handleCancelEdit = () => {
    setEditingPostId(null);
    setEditingPost(null);
  };

  const handleLikePost = (postId) => {
    setPosts(posts.map(p => {
      if (p.id === postId) {
        const likedBy = p.likedBy || [];
        const hasLiked = likedBy.includes(currentUser);
        const newLikedBy = hasLiked
          ? likedBy.filter(userId => userId !== currentUser)
          : [...likedBy, currentUser];
        return {
          ...p,
          likes: newLikedBy.length,
          likedBy: newLikedBy
        };
      }
      return p;
    }));
  };

  const handleCommentPost = (postId) => {
    setPosts(posts.map(p => {
      if (p.id === postId) {
        const commentedBy = p.commentedBy || [];
        const hasCommented = commentedBy.includes(currentUser);
        if (!hasCommented) {
          const newCommentedBy = [...commentedBy, currentUser];
          return {
            ...p,
            comments: newCommentedBy.length,
            commentedBy: newCommentedBy
          };
        }
      }
      return p;
    }));
  };

  const isPostLiked = (post) => {
    const likedBy = post.likedBy || [];
    return likedBy.includes(currentUser);
  };

  const isPostCommented = (post) => {
    const commentedBy = post.commentedBy || [];
    return commentedBy.includes(currentUser);
  };

  // Calculate stats
  const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);
  const totalComments = posts.reduce((sum, post) => sum + post.comments, 0);

  // Loading state
  if (loading) {
    return (
      <div className="user-profile">
        <div style={{ textAlign: 'center', padding: '60px 20px', fontSize: '1.1em', color: '#666' }}>
          Loading your profile...
        </div>
      </div>
    );
  }

  // Not authenticated - this should be handled by ProtectedRoute but just in case
  if (!authUser) {
    return (
      <div className="user-profile">
        <div style={{ textAlign: 'center', padding: '60px 20px', fontSize: '1.1em', color: '#666' }}>
          Please log in to view your profile
        </div>
      </div>
    );
  }

  return (
    <div className="user-profile">
      {/* Messages */}
      {error && <div className="message error-message">{error}</div>}
      {success && <div className="message success-message">{success}</div>}

      {/* Cover Photo Section */}
      <div className="cover-section">
        <div className="cover-photo">
          <img src={editedUser.coverPhoto} alt="Cover" />
          {isEditing && (
            <label className="cover-upload-btn">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handlePhotoUpload(e, 'cover')}
                style={{ display: 'none' }}
              />
              📷 Change Cover
            </label>
          )}
        </div>
      </div>

      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-info">
          <div className="avatar-section">
            <div className="profile-avatar">
              <img src={editedUser.profilePhoto} alt="Profile" />
              {isEditing && (
                <label className="avatar-upload-btn">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handlePhotoUpload(e, 'profile')}
                    style={{ display: 'none' }}
                  />
                  📷
                </label>
              )}
            </div>
          </div>
          
          <div className="user-details">
            {isEditing ? (
              <div className="edit-form">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={editedUser.name}
                    onChange={handleInputChange}
                    className="edit-input"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={editedUser.email}
                    onChange={handleInputChange}
                    className="edit-input"
                  />
                </div>
                <div className="form-group">
                  <label>Bio</label>
                  <textarea
                    name="bio"
                    value={editedUser.bio}
                    onChange={handleInputChange}
                    className="edit-textarea"
                    rows="4"
                  />
                </div>
                <div className="form-group">
                  <label>Location</label>
                  <input
                    type="text"
                    name="location"
                    value={editedUser.location}
                    onChange={handleInputChange}
                    className="edit-input"
                  />
                </div>
              </div>
            ) : (
              <>
                <h1>{user.name}</h1>
                <p className="user-email">📧 {user.email}</p>
                <p className="user-bio">{user.bio}</p>
                <div className="user-stats">
                  <span>📍 {user.location}</span>
                  <span>👤 Member since {user.joinDate}</span>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="action-buttons">
          <button 
            type="button"
            className={`edit-btn ${isEditing ? 'save' : 'edit'}`}
            onClick={handleEditToggle}
          >
            {isEditing ? '💾 Save Changes' : '✏️ Edit Profile'}
          </button>
          {!isEditing && (
            <button type="button" className="add-post-btn" onClick={handleAddPost}>
              ➕ Add New Post
            </button>
          )}
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stat-card">
          <div className="stat-value">{posts.length}</div>
          <div className="stat-label">Total Posts</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{totalLikes}</div>
          <div className="stat-label">Total Likes</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{totalComments}</div>
          <div className="stat-label">Total Comments</div>
        </div>
      </div>

      {/* Posts Section */}
      <div className="posts-section">
        <h2>My Travel Posts ({posts.length})</h2>
        {posts.length === 0 ? (
          <div className="empty-state">
            <p>📝 No posts yet! Start sharing your travel experiences.</p>
            <button className="add-post-btn" onClick={handleAddPost}>
              ➕ Create Your First Post
            </button>
          </div>
        ) : (
          <div className="posts-grid">
            {posts.map(post => (
              <div key={post.id} className="post-card">
                {editingPostId === post.id ? (
                  <div className="post-edit-form">
                    <div className="form-group">
                      <input
                        type="text"
                        value={editingPost.title}
                        onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                        className="edit-input"
                        placeholder="Post title"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        value={editingPost.location}
                        onChange={(e) => setEditingPost({ ...editingPost, location: e.target.value })}
                        className="edit-input"
                        placeholder="Location"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        value={editingPost.description}
                        onChange={(e) => setEditingPost({ ...editingPost, description: e.target.value })}
                        className="edit-textarea"
                        rows="3"
                        placeholder="Post description"
                      />
                    </div>
                    <div className="edit-buttons">
                      <button className="save-btn" onClick={() => handleSavePost(post.id)}>
                        💾 Save
                      </button>
                      <button className="cancel-btn" onClick={handleCancelEdit}>
                        ❌ Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="post-image">
                      <img src={post.image} alt={post.title} />
                      <div className="post-overlay">
                        <button 
                          onClick={() => handleLikePost(post.id)} 
                          className={`overlay-btn ${isPostLiked(post) ? 'liked' : ''}`}
                          title={isPostLiked(post) ? 'Unlike' : 'Like'}
                        >
                          {isPostLiked(post) ? '❤️' : '🤍'} {post.likes}
                        </button>
                        <button 
                          onClick={() => handleCommentPost(post.id)} 
                          className={`overlay-btn ${isPostCommented(post) ? 'commented' : ''}`}
                          title={isPostCommented(post) ? 'Already commented' : 'Add comment'}
                          disabled={isPostCommented(post)}
                        >
                          💬 {post.comments}
                        </button>
                      </div>
                    </div>
                    <div className="post-content">
                      <h3>{post.title}</h3>
                      <p className="post-location">📍 {post.location}</p>
                      <p className="post-description">{post.description}</p>
                      <p className="post-date">{new Date(post.date).toLocaleDateString()}</p>
                      <div className="post-actions">
                        <button className="action-btn edit" onClick={() => handleEditPost(post)}>
                          ✏️ Edit
                        </button>
                        <button className="action-btn delete" onClick={() => handleDeletePost(post.id)}>
                          🗑️ Delete
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;