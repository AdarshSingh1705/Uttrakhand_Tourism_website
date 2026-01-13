let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
};


menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});


// document.querySelector('.dropbtn').addEventListener('click', function() { 
//   document.querySelector('.dropdown-content').classList.toggle('show');
//  });
// // Close the dropdown if the user clicks outside of it
//  window.onclick = function(event) { 
//   if (!event.target.matches('.dropbtn')) {
//      var dropdowns = document.getElementsByClassName("dropdown-content");
//       for (var i = 0; i < dropdowns.length; i++) {
//          var openDropdown = dropdowns[i]; 
//          if (openDropdown.classList.contains('show')) { 
//           openDropdown.classList.remove('show'); 
//         } 
//       } 
//     } 
//   };// Close the dropdown if the user clicks outside of it

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// Login and Signup Forms
const loginContainer = document.querySelector('.login-form-container');
const signupContainer = document.querySelector('#signup-container'); // Updated to target by ID
const formCloseLogin = document.getElementById('form-close');
const formCloseSignup = document.getElementById('form-close-signup');
const showSignup = document.getElementById('show-signup');
const showLogin = document.getElementById('show-login');
const loginMessage = document.getElementById('login-message');
const signupMessage = document.getElementById('signup-message');

// Open login form
document.getElementById('login-btn').addEventListener('click', () => {
    loginContainer.classList.add('active');
    signupContainer?.classList.remove('active');
});

// Close forms
formCloseLogin.addEventListener('click', () => loginContainer.classList.remove('active'));
formCloseSignup.addEventListener('click', function() {
  window.location.href = 'Index.html'; // Redirect to the home page
});

// Switch forms
showSignup.addEventListener('click', (e) => {
    e.preventDefault();
    loginContainer.classList.remove('active');
    signupContainer?.classList.add('active');
});

showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    signupContainer?.classList.remove('active');
    loginContainer.classList.add('active');
});

// Form submission handlers
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    loginMessage.textContent = 'Login successful!';
    loginMessage.style.color = 'green';
});

// document.getElementById('signup-form')?.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const name = document.getElementById('signup-name').value;
//     const email = document.getElementById('signup-email').value;
//     const password = document.getElementById('signup-password').value;
//     const confirmPassword = document.getElementById('confirm-password').value;

//     if (password !== confirmPassword) {
//         signupMessage.style.color = 'red';
//         signupMessage.textContent = 'Passwords do not match';
//         return;
//     }

//     try {
//     const response = await fetch('http://localhost:3003/signup', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ name, email, password })
//         });
        
//         const data = await response.json();

//         if (response.ok) {
//             signupMessage.style.color = 'green';
//             signupMessage.textContent = 'Signup successful!';
//             document.getElementById('signup-form').reset(); // Clear form fields
//         } else {
//             console.error('Signup error response:', data); // Log the error response
//             signupMessage.style.color = 'red';
//             signupMessage.textContent = data.message || 'Error during signup. Please try again.';
//         }
//     } catch (err) {
//         console.error('Signup error:', err);
//         signupMessage.style.color = 'green';
//         signupMessage.textContent = 'Signup seccessfully, Welcome to GlobalFootprint'; //server error, please try again later
//     }
// });

// Load More Destinations
let loadMoreDestinationsBtn = document.querySelector('.destinations .load-more .btn.load-more');
let seeLessDestinationsBtn = document.querySelector('.destinations .load-more .btn.see-less');
let currentItemDestinations = 6;

// Initially hide all destination boxes except the first 'currentItemDestinations'
let destinationBoxes = [...document.querySelectorAll('.destinations .box-container .box')];
destinationBoxes.forEach((box, index) => {
  if (index >= currentItemDestinations) {
    box.style.display = 'none'; // Hide initially
  }
});

// Load more functionality for destinations
loadMoreDestinationsBtn.onclick = () => {
  for (let i = currentItemDestinations; i < currentItemDestinations + 3; i++) {
    if (destinationBoxes[i]) { // Check if the box exists
      destinationBoxes[i].style.display = 'inline-block'; // Show the box
    }
  }

  currentItemDestinations += 3;
  if (currentItemDestinations >= destinationBoxes.length) {
    loadMoreDestinationsBtn.style.display = 'none'; // Hide button if all boxes are shown
    seeLessDestinationsBtn.style.display = 'block'; // Show See Less button
  }
}

// See Less functionality for destinations
seeLessDestinationsBtn.onclick = () => {
  let newCurrentItem = currentItemDestinations - 3;
  if (newCurrentItem < 6) newCurrentItem = 6; // Prevent going below initial count

  // Hide boxes
  for (let i = currentItemDestinations - 1; i >= newCurrentItem; i--) {
    if (destinationBoxes[i]) {
      destinationBoxes[i].style.display = 'none'; // Hide the box
    }
  }

  currentItemDestinations = newCurrentItem; // Update currentItem
  if (currentItemDestinations <= 6) {
    seeLessDestinationsBtn.style.display = 'none'; // Hide See Less button if at initial state
  }

  // Show Load More button if there are more items to show

// Initialize the current item count gallery 
let loadMoreGalleryBtn = document.querySelector('.gallery .load-more .btn.load-more');
let seeLessGalleryBtn = document.querySelector('.gallery .load-more .btn.see-less');
let currentItemGallery = 9;

// Enhanced Load More / See Less functionality
const initLoadMore = (containerSelector, itemSelector, itemsToShow = 6) => {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const loadMoreBtn = container.querySelector('.load-more-btn');
    const seeLessBtn = container.querySelector('.see-less-btn');
    const items = container.querySelectorAll(itemSelector);
    
    let visibleItems = itemsToShow;
    
    // Hide all items initially
    items.forEach((item, index) => {
        if (index >= visibleItems) {
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
            item.style.animation = 'fadeIn 0.5s ease-in-out';
        }
    });

    // Show Load More button if there are more items to show
    if (items.length <= visibleItems && loadMoreBtn) {
        loadMoreBtn.style.display = 'none';
    }

    // Load More functionality
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            visibleItems += itemsToShow;
            
            // Show items with animation
            items.forEach((item, index) => {
                if (index < visibleItems) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease-in-out';
                }
            });

            // Show/Hide buttons based on visible items
            if (visibleItems >= items.length) {
                loadMoreBtn.style.display = 'none';
                if (seeLessBtn) seeLessBtn.style.display = 'inline-block';
            } else {
                if (seeLessBtn) seeLessBtn.style.display = 'inline-block';
            }
            
            // Smooth scroll to newly loaded items
            items[Math.min(visibleItems - 1, items.length - 1)]?.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
        });
    }

    // See Less functionality
    if (seeLessBtn) {
        seeLessBtn.style.display = 'none'; // Hide by default
        
        seeLessBtn.addEventListener('click', () => {
            visibleItems = itemsToShow;
            
            // Hide items
            items.forEach((item, index) => {
                if (index >= visibleItems) {
                    item.style.display = 'none';
                }
            });

            // Show/Hide buttons
            if (loadMoreBtn) loadMoreBtn.style.display = 'inline-block';
            seeLessBtn.style.display = 'none';
            
            // Smooth scroll to top of section
            container.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
};

// Add animation for fadeIn effect
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// Initialize load more functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // For destinations section
    initLoadMore('.destinations .box-container', '.box', 6);
    
    // For gallery section if exists
    initLoadMore('.gallery .box-container', '.box', 9);
});

// Initially hide all gallery boxes except the first 'currentItemGallery'
let galleryBoxes = [...document.querySelectorAll('.gallery .box-container .box')];
galleryBoxes.forEach((box, index) => {
  if (index >= currentItemGallery) {
    box.style.display = 'none'; // Hide initially
  }
});

// Load more functionality for gallery
loadMoreGalleryBtn.onclick = () => {
  for (let i = currentItemGallery; i < currentItemGallery + 3; i++) {
    if (galleryBoxes[i]) { // Check if the box exists
      galleryBoxes[i].style.display = 'inline-block'; // Show the box
    }
  }

  currentItemGallery += 3;
  if (currentItemGallery >= galleryBoxes.length) {
    loadMoreGalleryBtn.style.display = 'none'; // Hide button if all boxes are shown
    seeLessGalleryBtn.style.display = 'block'; // Show See Less button
  }
}

// See Less functionality for gallery
seeLessGalleryBtn.onclick = () => {
  let newCurrentItem = currentItemGallery - 3;
  if (newCurrentItem < 9) newCurrentItem = 9; // Prevent going below initial count

  // Hide boxes
  for (let i = currentItemGallery - 1; i >= newCurrentItem; i--) {
    if (galleryBoxes[i]) {
      galleryBoxes[i].style.display = 'none'; // Hide the box
    }
  }

  currentItemGallery = newCurrentItem; // Update currentItem
  if (currentItemGallery <= 9) {
    seeLessGalleryBtn.style.display = 'none'; // Hide See Less button if at initial state
  }

  // Show Load More button if there are more items to show
  if (currentItemGallery < galleryBoxes.length) {
    loadMoreGalleryBtn.style.display = 'block'; // Show Load More button
  }
}

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('http://localhost:3003/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    alert(result.message);
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to send email');
  }
});

// Show the login form when clicking "Login here" in the signup form
document.getElementById('show-login').addEventListener('click', () => {
    document.getElementById('signup-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'flex';
    document.getElementById('login-form').reset(); // Clear the login form fields
});

// Close the login form
document.getElementById('form-close').addEventListener('click', () => {
    document.getElementById('login-container').style.display = 'none';
});

// Show the signup form when "Register now" is clicked in the login form
document.getElementById('show-signup').addEventListener('click', () => {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('signup-container').style.display = 'flex';
    document.getElementById('signup-form').reset(); // Clear the signup form fields
});

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('login-message');

    try {
        const response = await fetch('http://localhost:3003/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        console.log('Response status:', response.status);
        console.log('Response data:', data);

        if (response.ok) {
            messageElement.style.color = 'green';
            messageElement.textContent = 'Login successful!';

            // Show the user's name in the navbar and display the user info tab
            document.getElementById('user-name').textContent = data.user.name;
            document.getElementById('user-info').style.display = 'inline';

            // Clear form fields
            document.getElementById('login-form').reset();
            document.getElementById('login-container').style.display = 'none';
            document.getElementById('signup-container').style.display = 'none';

            // Hide the login container
            document.getElementById('login-container').style.display = 'none';
        
            // Show the user info tab
            document.getElementById('user-info').style.display = 'inline';
                        
            //  // Redirect to the main page
            //  window.location.href = 'Index.html'; // Change 'main.html' to the actual main page URL

        } else {
            messageElement.style.color = 'red';
            messageElement.textContent = data.message || 'Invalid credentials';
        }
    } catch (err) {
        console.error('Error during login:', err); // Log the error for debugging
        messageElement.style.color = 'red';
        messageElement.textContent = 'Server error, please try again later.';
    }
});

// Handle signup form submission
document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const messageElement = document.getElementById('signup-message');

    if (password !== confirmPassword) {
        messageElement.style.color = 'red';
        messageElement.textContent = 'Passwords do not match';
        return;
    }

    try {
        const response = await fetch('http://localhost:3003/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        });

        const data = await response.json();
        console.log('Signup response:', data);

        if (response.ok) {
            messageElement.style.color = 'green';
            messageElement.textContent = 'Signup successful!';
            // Clear form fields
            document.getElementById('signup-form').reset();
        } else {
            messageElement.style.color = 'red';
            messageElement.textContent = data.message || 'Error during signup';
            // Clear form fields
            document.getElementById('signup-form').reset();
        }
    } catch (err) {
        console.error('Signup error:', err);
        messageElement.style.color = 'red';
        messageElement.textContent = 'Server error, please try again later.';
        // Clear form fields
        document.getElementById('signup-form').reset();
    }
});




// About us section starts

         // Function to create and apply CSS styles
         function applyDynamicStyles() {
          // Create a style element
          const style = document.createElement('style');
          style.type = 'text/css';
      
          // CSS styles as a string
          const css = `
              @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800&display=swap');
      
              * {
                  box-sizing: border-box;
              }
      
              body {
                  margin: 0;
              }
      
              .wk-desk-1 { width: 8.333333%; }
              .wk-desk-2 { width: 16.666667%; }
              .wk-desk-3 { width: 25%; }
              .wk-desk-4 { width: 33.333333%; }
              .wk-desk-5 { width: 41.666667%; }
              .wk-desk-6 { width: 50%; }
              .wk-desk-7 { width: 58.333333%; }
              .wk-desk-8 { width: 66.666667%; }
              .wk-desk-9 { width: 75%; }
              .wk-desk-10 { width: 83.333333%; }
              .wk-desk-11 { width: 91.666667%; }
              .wk-desk-12 { width: 100%; }
      
              @media (max-width: 1024px) {
                  .wk-ipadp-1 { width: 8.333333%; }
                  .wk-ipadp-2 { width: 16.666667%; }
                  .wk-ipadp-3 { width: 25%; }
                  .wk-ipadp-4 { width: 33.333333%; }
                  .wk-ipadp-5 { width: 41.666667%; }
                  .wk-ipadp-6 { width: 50%; }
                  .wk-ipadp-7 { width: 58.333333%; }
                  .wk-ipadp-8 { width: 66.666667%; }
                  .wk-ipadp-9 { width: 75%; }
                  .wk-ipadp-10 { width: 83.333333%; }
                  .wk-ipadp-11 { width: 91.666667%; }
                  .wk-ipadp-12 { width: 100%; }
              }
      
              @media (max-width: 768px) {
                  .wk-tab-1 { width: 8.333333%; }
                  .wk-tab-2 { width: 16.666667%; }
                  .wk-tab-3 { width: 25%; }
                  .wk-tab-4 { width: 33.333333%; }
                  .wk-tab-5 { width: 41.666667%; }
                  .wk-tab-6 { width: 50%; }
                  .wk-tab-7 { width: 58.333333%; }
                  .wk-tab-8 { width: 66.666667%; }
                  .wk-tab-9 { width: 75%; }
                  .wk-tab-10 { width: 83.333333%; }
                  .wk-tab-11 { width: 91.666667%; }
                  .wk-tab-12 { width: 100%; }
              }
      
              @media (max-width: 500px) {
                  .wk-mobile-1 { width: 8.333333%; }
                  .wk-mobile-2 { width: 16.666667%; }
                  .wk-mobile-3 { width: 25%; }
                  .wk-mobile-4 { width: 33.333333%; }
                  .wk-mobile-5 { width: 41.666667%; }
                  .wk-mobile-6 { width: 50%; }
                  .wk-mobile-7 { width: 58.333333%; }
                  .wk-mobile-8 { width: 66.666667%; }
                  .wk-mobile-9 { width: 75%; }
                  .wk-mobile-10 { width: 83.333333%; }
                  .wk-mobile-11 { width: 91.666667%; }
                  .wk-mobile-12 { width: 100%; }
              }
          `;
      
          // Append the CSS to the style element
          style.appendChild(document.createTextNode(css));
      
          // Append the style element to the head of the document
          document.head.appendChild(style);
      }
      
      // Call the function to apply styles
      applyDynamicStyles();
      
      // About us section ends
}