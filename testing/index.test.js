const pactum = require('pactum');

it('should return 5 reviews', async () => {
  await pactum.spec()
    .get('http://localhost:3000/reviews')
    .withBody({'product_id': 40344})
    .expectStatus(200)
    .expectJson({
      "product": 40344,
      "page": 0,
      "count": 5,
      "results": [
          {
              "rating": 5,
              "date": "1594905366366",
              "summary": "Vitae dolorem qui quos molestiae natus.",
              "body": "Enim soluta minima aperiam. Inventore explicabo adipisci consequuntur sed optio sunt dolorum id excepturi. Velit aut ipsa excepturi eligendi voluptatem est. Quo odit nesciunt pariatur aut consequatur. Laudantium vitae eum.",
              "recommended": true,
              "reported": false,
              "reviewer_name": "Karine.Wilderman",
              "reviewer_email": "Ariel_Cartwright83@hotmail.com",
              "response": "null",
              "helpfulness": 9,
              "photos": [
                  {
                      "id": 109916,
                      "review_id": 232057,
                      "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  }
              ],
              "review_id": 232057
          },
          {
              "rating": 3,
              "date": "1601488083256",
              "summary": "Vitae dolores ad cupiditate sit ea.",
              "body": "Assumenda et perspiciatis dolores aut facere. Magnam sed et perspiciatis voluptatem molestias quia. Laudantium commodi velit est. Sed numquam quis. Quia eveniet vero quasi rerum consequuntur voluptatem similique excepturi. Et voluptas maxime assumenda minima est et.",
              "recommended": true,
              "reported": false,
              "reviewer_name": "Alvis36",
              "reviewer_email": "Liam_Aufderhar@yahoo.com",
              "response": "null",
              "helpfulness": 8,
              "photos": [
                  {
                      "id": 109917,
                      "review_id": 232058,
                      "url": "https://images.unsplash.com/photo-1556812191-381c7e7d96d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2982&q=80"
                  }
              ],
              "review_id": 232058
          },
          {
              "rating": 2,
              "date": "1605733629411",
              "summary": "Explicabo voluptatibus molestiae quibusdam quis corrupti.",
              "body": "Facilis eligendi vitae non quibusdam sed ullam molestiae. Natus ab nobis harum illum voluptatem ut vero libero voluptas. Ducimus et quo est repudiandae similique animi ut. Quo quidem odio deserunt unde sit. Et numquam quis odio itaque voluptas.",
              "recommended": true,
              "reported": false,
              "reviewer_name": "Travon1",
              "reviewer_email": "Stan_Senger89@gmail.com",
              "response": "null",
              "helpfulness": 29,
              "photos": [
                  {
                      "id": 109918,
                      "review_id": 232059,
                      "url": "https://images.unsplash.com/photo-1522032238811-74bc59578599?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                  }
              ],
              "review_id": 232059
          },
          {
              "rating": 4,
              "date": "1616974594076",
              "summary": "Nesciunt vel recusandae.",
              "body": "Praesentium soluta eos aperiam et et et autem perferendis aut. Aut quia ut voluptate non autem nobis. Eum perspiciatis architecto quis.",
              "recommended": true,
              "reported": false,
              "reviewer_name": "Jaida65",
              "reviewer_email": "Cary.Fisher36@hotmail.com",
              "response": "null",
              "helpfulness": 15,
              "photos": [],
              "review_id": 232061
          },
          {
              "rating": 1,
              "date": "1617717916118",
              "summary": "In laudantium quia deserunt.",
              "body": "Tempora accusamus perferendis sed quis voluptas nam mollitia voluptatibus. Tempora assumenda quia eveniet est aut dolor odio. Dolorem eos et et. A consectetur dignissimos.",
              "recommended": false,
              "reported": false,
              "reviewer_name": "Alva80",
              "reviewer_email": "Elisa.Lueilwitz16@hotmail.com",
              "response": "null",
              "helpfulness": 21,
              "photos": [],
              "review_id": 232060
          }
      ]
  });
});