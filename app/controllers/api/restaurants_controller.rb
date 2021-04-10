class Api::RestaurantsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: User.random_restaurant(current_user)
  end

  def show
    @restaurant = Restaurant.find(params[:id])
    render json: @restaurant
  end

  def create 
    @restaurant = Restaurant.new(restaurant_params)
      if restaurant.save
        render json: @restaurant
      else
        render json: {errors: @restaurant.errors}, status: :unprocessable_entity
      end
  end

  def update
    current_user
    current_user.save
  end


  def destroy
    Restaurant.find(params[:id]).destroy
    @restaurant.destroy
    render json: {message: 'restaurant deleted'}
    or
    Restaurant.find(params[:id]).destroy
    render json: {message: 'restaurant deleted'}

  end

  private
    def restaurant_params
      params.require(:restaurant).permit(:name, :image, :description)
    end
end
