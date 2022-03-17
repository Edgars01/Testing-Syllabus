# URL Shortener

Write a library that takes a long URL and converts it to a shortened URL similar to https://goo.gl/.

- The library should have a method that accepts the long URL and returns the shortened URL.
  - The library should generate a short URL like https://short.url/abc1234 and store the short URL and the long URL together in an in-memory data store.
- The library should have a method called translate which takes in a long or short URL and returns the shortened URL.
- The library should track the number of times the short URL is visited.
- The library should have a statistics method for the shortened URLs. Calling the method with the long or short URL should show the short URL, the long URL, and the number of times the short URL was accessed.

## Hint

Don’t worry about invalid URLs, focus on functionality. Use only an in-memory data store.

## Bonus

- Throw an error if an invalid URL is provided.
- Detect duplicate URLs and return the existing short URL instead of creating a duplicate.
- Record the date and time each short URL was accessed via the translate method
  - Create a method log which is similar to the statistics method. It should print the short and long URL with the number of times access as well as a complete history of all accesses.
