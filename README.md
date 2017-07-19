# DEV Modules

## Dev Favorites Module
Provides a way for users to mark as favorite a node, similar to what flag module does but integrating ReactJS inside the module/feature.
Code got from [Zivtech Getting started with React and D8](https://www.zivtech.com/blog/getting-started-react-drupal-8-and-jsonapi?utm_source=drupal-newsletter&utm_medium=email&utm_campaign=drupal-newsletter-20170713)

### Explanation of the module structure
#### Config/Install
##### Field Favorites
1. **field.storage.user.field_favorites.yml** This file provides the field *field_favorites* storage, defines it on the database, it's of type entity_reference.
2. **field.field.user.user.field_favorites.yml** This file provides the field *field_favorites* at the user module

####  Src/Controller
##### Favorite Controller
This controller provides an interface for getting the Data, it receives the node and responds in JSON format with the user related data like user_uid, node_type and if it's a favorited node.

#### dev_favorites.module
Adds a div with the id favorite in each node in full view mode.
Defines a library called favorite/favorite, the module will require this library.
To let Drupal know where the library is, the file dev_favorite.libraries.yml is created.
This library will define/hold all the JS we need in the module.

#### dev_favorites.libraries.yml
Defines the route of the JS libraries.

#### dev_favorites.routing.yml
Defines the route to get the favorite data


