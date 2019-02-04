Rails.application.routes.draw do
  root 'main#index'

  get '/components', to: 'components#index'
  get '/components/:component', to: 'components#show'

  # get '*path', to: 'main#index', constraints: ->(request) do
  #   !request.xhr? && request.format.html?
  # end
end
