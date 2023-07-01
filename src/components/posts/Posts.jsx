import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Anay",
      userId: 1,
      profilePic:
        "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmF0bWFufGVufDB8fDB8fHww&w=1000&q=80",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeo-SteSRwHKspsffNjY8vFfVy95lia4qbzvh1PM-k&s",
    },
    {
      id: 2,
      name: "Anay",
      userId: 2,
      profilePic:
        "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmF0bWFufGVufDB8fDB8fHww&w=1000&q=80",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
