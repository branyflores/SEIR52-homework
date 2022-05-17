Rails.application.routes.draw do

get '/starsigns' => 'starsigns#index'
get '/starsigns/new' => 'starsigns#new', :as => :new_starsign
post '/starsigns' => 'starsigns#create'
get '/starsigns/:id' => 'starsigns#show', :as => :starsign



end 
