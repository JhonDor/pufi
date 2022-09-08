import React from "react";
const picture = [
  {
    url: "https://images.unsplash.com/photo-1609690302986-4fef1312e882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHVtYnJlbGxhfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1630381260512-e3fe55c11973?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNob3BwaW5nJTIwYmFnfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1592653700973-29a2a09628ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGluZmxhdGFibGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1591552727657-3908ac130466?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGluZmxhdGFibGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1592789705501-f9ae4278a9c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGlsbG93fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1605820182886-cd4f62d08b94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGluZmxhdGFibGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];
const Media = () => {
  return (
    <div>
      <div className="media">
         <span>Instagram</span>
        <p>#ESPUFFI</p>
        <div className="grid-container">
          {picture.map((picture, index) => (
            <article key={index} className="pictures">
              <img className="grid-item" src={picture?.url} />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
