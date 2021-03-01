# Plant-Store

This is an API documentation of a plant store.


# Requests:

## POST

**/imageUpload**: Used for adding images to the ad.

**/login**: Allows users to log in with username and password.

**/plant**: Allows users to post an ad by providing all the details.

**/register**: Allows users to register their account.

## GET

**/plants**: Allows everyone to see the ads posted on the app.

**/plants/search/location/{location}**: Allows everyone to search an ad by location.

**/plants/{dateOfPosting}**: Allows everyone to search an ad by the date of posting.

## PUT

**/plant**: Allows users to modify their ads.

## DELETE

**/plants**: Allows users to delete their ads.

# Files

## Index.js
API launched through this file.

## Routes/images.js
Route for the upload function to index.js.