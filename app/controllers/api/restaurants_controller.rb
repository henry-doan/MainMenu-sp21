class Api::RestaurantsController < ApplicationController
  before_action :set_user, only: [:update, :show, :destroy]

  def index
    render json: current_user.restaurants
  end

  def show
    @restaurant = Restaurant.find(params[:id])
    render json: @restaurant
  end

  def create 
    @restaurant = current_user.restaurants.new(restaurant_params)
      if @restaurant.save
        render json: @restaurant
      else
        render json: {errors: @restaurant.errors}, status: :unprocessable_entity
      end
  end

  def update
   @restaurant = Restaurant.find(params[:id])
    if @restaurant.update(restaurant_params)
    render json: @restaurant
   else
    render json: { errors: @restaurant.errors }, status: :unprocessable_entity
  end
end


  def destroy
    Restaurant.find(params[:id]).destroy
    render json: { message: 'restaurant deleted' }
  end

  private
    def restaurant_params
      params.require(:restaurant).permit(:name, :image, :description)
    end
     def set_restaurant
    @restaurant = Restaurant.find(params[:id])
  end
end
