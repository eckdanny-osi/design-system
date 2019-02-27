class ComponentsController < ApplicationController

  def show
    @component = params[:component]
  end

  def index
    # Nothing here
  end

end
