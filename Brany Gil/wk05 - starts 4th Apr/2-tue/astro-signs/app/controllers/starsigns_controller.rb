class StarsignsController < ApplicationController


    def index

        @starsigns = Starsign.all  
    end

    def show
    
        @starsign = Starsign.find params[:id]

    end

  def new

  end

  def create
    starsign = Starsign.create :name => params[:name], :image => params[:image], :planet => params[:planet]
        redirect_to starsign_path(starsign.id) # GET show: /planets/45
end
   
def edit
        @starsign = Starsign.find params[:id]
    end



end