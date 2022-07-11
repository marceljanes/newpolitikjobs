import { connectToDatabase } from "../../../middleware/database";


export default async (req, res) => {
  let jobs
  const { db } = await connectToDatabase();
  const page = parseFloat(req.query.page)
  const keyword = req.query.keyword
  const long = parseFloat(req.query.long)
  const lat = parseFloat(req.query.lat)
  const jobsPerPage = parseFloat(3)
    
  if(keyword && !long) {
    jobs = await db
    .collection("jobs")
    .aggregate([        
        {
          '$search': {
            'index': 'only_text',
            'text': {
              'query': keyword,
              'path': {
                'wildcard': '*'
              }
            }
          }
        }, {'$skip': page * jobsPerPage}
        , {'$limit': 10}
      ])
    .toArray();
    
    
  
    
    } else if(keyword && long) {
      
        jobs = await db
        .collection("jobs")
        .aggregate([
          {
            '$search': {
                    index: 'geotext',
                    compound: {
                            must: [{
                                    text: {
                                            query: keyword,
                                            path: ["title", "key_words", "organisation"],
                                            fuzzy: {maxEdits: 2, prefixLength: 3},
                                            score: { "boost": { "value": 3 } }
    
                                    }
                            },{
                                  geoWithin: {
    
                                          circle: {
    
                                                  center: {
                                                          type: "Point",
                                                          coordinates: [long, lat]
    
                                                  },
                                                  radius: 20000
    
    
                                          },
                                          path: 'geometry'
                                                  
                                  }
                          }]
    
                    }
    
              
            }
            
          }]).toArray();
  
 
  } else if(!keyword && long) {
      
    jobs = await db
    .collection("jobs")
    .aggregate([
      {
        '$search': {
                index: 'geotext',
                compound: {
                        must: [{
                                text: {
                                        query: 'Referent',
                                        path: ["title"],
                                        fuzzy: {maxEdits: 2, prefixLength: 3},
                                        score: { "boost": { "value": 3 } }

                                }
                        },{
                              geoWithin: {

                                      circle: {

                                              center: {
                                                      type: "Point",
                                                      coordinates: [long, lat]

                                              },
                                              radius: 20000


                                      },
                                      path: 'geometry'
                                              
                              }
                      }]

                }

          
        }
        
      }]).toArray();


}
    

  
  res.json({jobs})
  
  
 
};