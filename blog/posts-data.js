// Shared blog post data — used by both home.html and article.html
// Each post has a stable numeric "id" that never changes even as new posts get added,
// since that id is what shows up in the article URL (?=<id>).
var POSTS = [
  {
    id: 1,
    title: "Welcome to the Vextria Blog",
    author: "VextriaTeam",
    date: "September 1, 2026",
    category: "News",
    image: "https://placehold.co/639x300",
    content: [
      "Placeholder post text goes here. This is where the article preview copy will sit once the real post content is written.",
      "This second paragraph only shows up on the article page — the home page preview cuts off before this point once the real article is long enough.",
      "Once real posts are written, this is where the rest of the story goes: more paragraphs, more detail, anything that doesn't need to fit in the short home page preview."
    ]
  },
  { id: 2, title: "Placeholder Post Title 2", author: "VextriaTeam", date: "August 28, 2026", category: "News", image: "https://placehold.co/639x300", content: ["Placeholder post text goes here. This is where the article preview copy will sit once the real post content is written.", "Full article body content for this post goes here once it's written."] },
  { id: 3, title: "Placeholder Post Title 3", author: "VextriaTeam", date: "August 21, 2026", category: "Announcements", image: "https://placehold.co/639x300", content: ["Placeholder post text goes here. This is where the article preview copy will sit once the real post content is written.", "Full article body content for this post goes here once it's written."] },
  { id: 4, title: "Placeholder Post Title 4", author: "VextriaTeam", date: "August 14, 2026", category: "Developers", image: "https://placehold.co/639x300", content: ["Placeholder post text goes here. This is where the article preview copy will sit once the real post content is written.", "Full article body content for this post goes here once it's written."] },
  { id: 5, title: "Placeholder Post Title 5", author: "VextriaTeam", date: "August 7, 2026", category: "Gaming", image: "https://placehold.co/639x300", content: ["Placeholder post text goes here. This is where the article preview copy will sit once the real post content is written.", "Full article body content for this post goes here once it's written."] },
  { id: 6, title: "Placeholder Post Title 6", author: "VextriaTeam", date: "July 31, 2026", category: "Release Notes", image: "https://placehold.co/639x300", content: ["Placeholder post text goes here. This is where the article preview copy will sit once the real post content is written.", "Full article body content for this post goes here once it's written."] },
  { id: 7, title: "Placeholder Post Title 7", author: "VextriaTeam", date: "July 24, 2026", category: "Education", image: "https://placehold.co/639x300", content: ["Placeholder post text goes here. This is where the article preview copy will sit once the real post content is written.", "Full article body content for this post goes here once it's written."] },
  { id: 8, title: "Placeholder Post Title 8", author: "VextriaTeam", date: "July 17, 2026", category: "Reviews", image: "https://placehold.co/639x300", content: ["Placeholder post text goes here. This is where the article preview copy will sit once the real post content is written.", "Full article body content for this post goes here once it's written."] },
  { id: 9, title: "Placeholder Post Title 9", author: "VextriaTeam", date: "July 10, 2026", category: "Tutorials", image: "https://placehold.co/639x300", content: ["Placeholder post text goes here. This is where the article preview copy will sit once the real post content is written.", "Full article body content for this post goes here once it's written."] },
  { id: 10, title: "Placeholder Post Title 10", author: "VextriaTeam", date: "July 3, 2026", category: "Uncategorized", image: "https://placehold.co/639x300", content: ["Placeholder post text goes here. This is where the article preview copy will sit once the real post content is written.", "Full article body content for this post goes here once it's written."] },
  { id: 11, title: "Placeholder Post Title 11", author: "VextriaTeam", date: "June 26, 2026", category: "Announcements", image: "https://placehold.co/639x300", content: ["Placeholder post text goes here. This is where the article preview copy will sit once the real post content is written.", "Full article body content for this post goes here once it's written."] },
  { id: 12, title: "Placeholder Post Title 12", author: "VextriaTeam", date: "June 19, 2026", category: "Contests", image: "https://placehold.co/639x300", content: ["Placeholder post text goes here. This is where the article preview copy will sit once the real post content is written.", "Full article body content for this post goes here once it's written."] },
  { id: 13, title: "Placeholder Post Title 13", author: "VextriaTeam", date: "June 12, 2026", category: "News", image: "https://placehold.co/639x300", content: ["Placeholder post text goes here. This is where the article preview copy will sit once the real post content is written.", "Full article body content for this post goes here once it's written."] },
  { id: 14, title: "Placeholder Post Title 14", author: "VextriaTeam", date: "June 5, 2026", category: "Gaming", image: "https://placehold.co/639x300", content: ["Placeholder post text goes here. This is where the article preview copy will sit once the real post content is written.", "Full article body content for this post goes here once it's written."] },
  { id: 15, title: "Placeholder Post Title 15", author: "VextriaTeam", date: "May 29, 2026", category: "Developers", image: "https://placehold.co/639x300", content: ["Placeholder post text goes here. This is where the article preview copy will sit once the real post content is written.", "Full article body content for this post goes here once it's written."] },
   { id: 16, title: "OSCAR STINKS SO BAD LOL Post Title 15", author: "VextriaTeam", date: "May 29, 2026", category: "Developers", image: "https://placehold.co/639x300", content: ["Placeholder post text goes here. This is where the article preview copy will sit once the real post content is written.", "Full article body content for this post goes here once it's written."] }
];

// Helper both pages use to look up a post by id
function getPostById(id){
  id = parseInt(id, 10);
  for(var i = 0; i < POSTS.length; i++){
    if(POSTS[i].id === id) return POSTS[i];
  }
  return null;
}
