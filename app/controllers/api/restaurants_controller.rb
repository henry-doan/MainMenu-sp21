class Api::RestaurantsController < ApplicationController
  before_action :set_restaurant, only: [:update, :show, :destroy]

  def index
    render json: Restaurant.all
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
   @restaurant = current_user.restaurants.find(params[:id])
   if @restaurant.update(restaurant_params)
    render json: @restaurant
   else
    render json: { errors: @restaurant.errors }, status: :unprocessable_entity
  end
end


  def destroy
    @restaurant = current_user.restaurants.find(params[:id])
    @restaurant.destroy
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
