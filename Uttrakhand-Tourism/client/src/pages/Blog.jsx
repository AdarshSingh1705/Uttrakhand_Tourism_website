import React, { useState } from 'react';

const Blog = () => {
  const [categoryFilter, setCategoryFilter] = useState('all');

  const filteredBlogs = categoryFilter === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === categoryFilter);

  return (
    <section style={{ paddingTop: '12rem', minHeight: '100vh' }}>
      <h1 className="heading">
        <span>T</span><span>r</span><span>a</span><span>v</span><span>e</span><span>l</span> <span>B</span><span>l</span><span>o</span><span>g</span>
      </h1>
      <br/>

      {/* Category Filter */}
      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <button onClick={() => setCategoryFilter('all')} className="btn" style={{ margin: '0.5rem' }}>All</button>
        <button onClick={() => setCategoryFilter('tips')} className="btn" style={{ margin: '0.5rem' }}>Travel Tips</button>
        <button onClick={() => setCategoryFilter('guides')} className="btn" style={{ margin: '0.5rem' }}>Guides</button>
        <button onClick={() => setCategoryFilter('stories')} className="btn" style={{ margin: '0.5rem' }}>Stories</button>
      </div>

      {/* Blog Posts */}
      <div style={{ maxWidth: '120rem', margin: '0 auto', padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(35rem, 1fr))', gap: '2rem' }}>
        {filteredBlogs.map((post, index) => (
          <article key={index} style={{ background: '#fff', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 1rem 2rem rgba(0,0,0,0.1)' }}>
            <img src={post.image} alt={post.title} style={{ width: '100%', height: '25rem', objectFit: 'cover' }} />
            <div style={{ padding: '2rem' }}>
              <span style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: 'var(--orange)', color: '#fff', borderRadius: '5rem', fontSize: '1.4rem', marginBottom: '1rem' }}>{post.category}</span>
              <h3 style={{ fontSize: '2.2rem', color: '#333', margin: '1rem 0' }}>{post.title}</h3>
              <p style={{ fontSize: '1.5rem', color: '#666', lineHeight: '1.8', margin: '1rem 0' }}>{post.excerpt}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>
                <span style={{ fontSize: '1.4rem', color: '#999' }}><i className="fas fa-calendar"></i> {post.date}</span>
                <span style={{ fontSize: '1.4rem', color: '#999' }}><i className="fas fa-user"></i> {post.author}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

const blogPosts = [
  { title: '10 Essential Tips for First-Time Visitors to Uttarakhand', excerpt: 'Planning your first trip to Uttarakhand? Here are essential tips to make your journey smooth and memorable...', image: '/images/pack-1.jpg', category: 'tips', date: 'Jan 15, 2024', author: 'Adarsh Singh' },
  { title: 'Complete Guide to Char Dham Yatra', excerpt: 'Everything you need to know about the sacred Char Dham pilgrimage including best routes, accommodation, and travel tips...', image: '/images/gallery/g-5.jpg', category: 'guides', date: 'Jan 10, 2024', author: 'Travel Team' },
  { title: 'Best Trekking Routes in Uttarakhand for Beginners', excerpt: 'Discover the most scenic and beginner-friendly trekking routes in the Himalayas with detailed itineraries...', image: '/images/gallery/g-2.jpg', category: 'guides', date: 'Jan 5, 2024', author: 'Adventure Guide' },
  { title: 'My Spiritual Journey to Kedarnath', excerpt: 'A personal account of the transformative pilgrimage to one of the holiest shrines in India...', image: '/images/pack-1.jpg', category: 'stories', date: 'Dec 28, 2023', author: 'Pilgrim Stories' },
  { title: 'Wildlife Photography Tips for Jim Corbett', excerpt: 'Expert tips on capturing stunning wildlife photographs in India\'s oldest national park...', image: '/Uttarakhand/Jim Corbett/About+Images/Images/jim corbett national park2.jpg', category: 'tips', date: 'Dec 20, 2023', author: 'Photo Expert' },
  { title: 'Budget Travel Guide to Uttarakhand', excerpt: 'Explore Uttarakhand on a budget with our comprehensive guide to affordable accommodation, food, and transport...', image: '/images/pack-3.jpg', category: 'guides', date: 'Dec 15, 2023', author: 'Budget Traveler' },
  { title: 'Skiing in Auli: A Complete Guide', excerpt: 'Everything you need to know about skiing in Auli including best season, equipment rental, and ski schools...', image: '/images/gallery/g-12.jpg', category: 'guides', date: 'Dec 10, 2023', author: 'Adventure Team' },
  { title: 'Monsoon Travel Safety Tips', excerpt: 'Essential safety guidelines for traveling in Uttarakhand during monsoon season...', image: '/images/pack-5.jpg', category: 'tips', date: 'Dec 5, 2023', author: 'Safety Guide' },
  { title: 'Hidden Gems of Uttarakhand', excerpt: 'Discover lesser-known destinations in Uttarakhand that offer tranquility and natural beauty away from crowds...', image: '/images/pack-7.jpg', category: 'stories', date: 'Nov 28, 2023', author: 'Explorer' }
];

export default Blog;
