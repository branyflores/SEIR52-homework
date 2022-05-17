Rails.application.routes.draw do

 

  root :to => 'game#home'

  get '/game/magic8ball/:input' => 'game#magic8ball'
 

end

