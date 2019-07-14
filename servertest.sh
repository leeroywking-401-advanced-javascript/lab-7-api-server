#!/bin/bash

echo "populate the database with posts"

echo "pre-populating the database"
echo '{"name":"scoreboard"}' | http post :8080/api/v1/categories
echo '{"name":"Koala"}' | http post :8080/api/v1/categories
echo '{"name":"Skateboard"}' | http post :8080/api/v1/categories

echo "this will show us what is in the database currently"
http get :8080/api/v1/categories

echo "this will show us a specific item in the database by its 'id' (idx position in db array)"
http get :8080/api/v1/categories/0
echo "should be an object that contains scoreboard"

echo "modify the scoreboard entry in the db"

echo '{"name":"not a scoreboard"}' | http put :8080/api/v1/categories/0

echo "show the current contents"
http :8080/api/v1/categories

echo "delete the 'not a scoreboard' entry"
http delete :8080/api/v1/categories/0

echo "shows final database contents, should not contain scoreboard and should have 2 other items"
http :8080/api/v1/categories