var friends = module.exports = {
  collection : {
    version : "1.0",
    href : "/friends",
    
    links : [
      {rel : "feed", href : "/friends/rss"}
    ],
    
    items : [
      {
        href : "/friends/jdoe",
        data : [
          {name : "full-name", value : "J. Doe", prompt : "Full Name"},
          {name : "email", value : "jdoe@example.org", prompt : "Email"}
        ],
        links : [
          {rel : "blog", href : "http://examples.org/blogs/jdoe", prompt : "Blog"},
          {rel : "avatar", href : "http://examples.org/images/jdoe", prompt : "Avatar", render : "image"}
        ]
      },
      
      {
        href : "/friends/msmith",
        data : [
          {name : "full-name", value : "M. Smith", prompt : "Full Name"},
          {name : "email", value : "msmith@example.org", prompt : "Email"}
        ],
        links : [
          {rel : "blog", href : "http://examples.org/blogs/msmith", prompt : "Blog"},
          {rel : "avatar", href : "http://examples.org/images/msmith", prompt : "Avatar", render : "image"}
        ]
      },
      
      {
        href : "/friends/rwilliams",
        data : [
          {name : "full-name", value : "R. Williams", prompt : "Full Name"},
          {name : "email", value : "rwilliams@example.org", prompt : "Email"}
        ],
        links : [
          {rel : "blog", href : "http://examples.org/blogs/rwilliams", prompt : "Blog"},
          {rel : "avatar", href : "http://examples.org/images/rwilliams", prompt : "Avatar", render : "image"}
        ]
      }      
    ],
    
    queries : [
      {rel : "search", href : "/friends/search", prompt : "Search",
        data : [
          {name : "search", value : ""}
        ]
      }
    ],
    
    template : {
      data : [
        {name : "full-name", value : "", prompt : "Full Name"},
        {name : "email", value : "", prompt : "Email"},
        {name : "blog", value : "", prompt : "Blog"},
        {name : "avatar", value : "", prompt : "Avatar"}  
      ]
    }
  } 
}