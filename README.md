# url-shortner

Mern Stack based url-shortner api through which you can shortened long url into short url and open links using short urls directly. 
POST /shorten: accepts a JSON object with a property longUrl, creates a new short URL and stores it in the database along with the corresponding long URL.
GET /urls: retrieves all the URLs from the database and returns them in the response.
GET /:urls: retrieves the URL with the corresponding short code, redirects to the long url if the url is found otherwise returns a 404 response with a message 'URL not found'.
You can use this code as a starting point and add more functionality, error handling and security measures to make it production ready.
