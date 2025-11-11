// Sample posts data
const posts = [
  {
    title: "Lost ID Card",
    description: "Lost my college ID near the cafeteria. Please contact if found.",
    type: "Lost",
    contact: "rahul@college.edu",
    
  },
  {
    title: "Found Wallet",
    description: "Found a brown leather wallet near library steps.",
    type: "Found",
    contact: "sneha@college.edu",
    
  }
];

// Container to display posts
const container = document.getElementById('postsContainer');

// Function to display posts
function displayPosts() {
  container.innerHTML = "";
  posts.forEach(post => {
    const card = document.createElement('div');
    card.className = 'post-card';
    card.innerHTML = `
      <img src="${post.image}" alt="${post.title}">
      <h4>${post.title}</h4>
      <p>${post.description}</p>
      <div class="post-type">${post.type}</div>
      <p><strong>Contact:</strong> ${post.contact}</p>
    `;
    container.appendChild(card);
  });
}

// Display posts on page load
displayPosts();
