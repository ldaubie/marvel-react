export default function() {
    return Promise.resolve({
      json: () =>
        Promise.resolve({ data: 
            { results:
            [
            {
                name:"Batman",
                thumbnail:{
                    path:"Batman", 
                    extension:".jpg",
                }, 
                description: "blabla", 
                comics:{
                    available: 3,
                    items: [
                        {name:"Bat"}, 
                        {name:"Man"}
                    ]
                }
            },
            {
                name:"Superman",
                imageUrl:"Superman", 
                imageExtension:".jpg", 
                description: "blabla", 
                comics:{
                    available: 1,
                    items: [
                        {name:"Super"}, 
                        {name:"Man"}
                    ]
                }
            },
        ]}})
   
    })
  }