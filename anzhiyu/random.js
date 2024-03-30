var posts=["posts/8ad2c32e.html","posts/d13bbf6d.html","posts/4a17b156.html","posts/c442673f.html","posts/54dba225.html","posts/3ff958bf.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };