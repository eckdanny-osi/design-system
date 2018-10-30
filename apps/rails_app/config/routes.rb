Rails.application.routes.draw do
  root 'main#index'

  get '*path', to: 'main#index', constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
