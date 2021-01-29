# tech-blog

# URL Link
[Heroku Link](https://afternoon-scrubland-66938.herokuapp.com/)

# Table Of Contents

* [Description](#description)
* [Installation](#installation)
* [User's Guide](#users-guide)
  - [Homepage](#homepage)
  - [Dashboard](#dashboard)
 * [Testing](#testing)

# Description
A blog that allows a user to log in create/delete posts, comment on posts, and view other users' posts.

# Installation
1. Clone the repository.
2. Run `npm install` in the command line to install the dependancies.
3. Run `npm start` in the command line to start the program.

# User's Guide
As mentioned in the [Installation](#installation) instructions, run `npm start` to start the program or navigate to the [URL Link](#url-link).  The user must sign up if they do not possess an existing account.

## Homepage
The homepage shows a list of all posts by all users.  If the user is signed in, they may click on a post from the homepage, where they can then comment on the post.

## Dashboard
The dashboard shows a list of all posts by the user.  The user may select a post to edit or delete it.  The dashboard is only available to signed-in users.

# Testing
Tests are available in `./__tests__` and can be run using `npm run test`. *(Notes: Testing is done through the Jest framework)*
