class Api::MenusController < ApplicationController
  before_action :set_restaurant
  before_action :set_menu, only: [:show, :update, :destroy]

  def index
    render json: @restaurant.menus.all
  end

  def show
    @menu = Menu.find(params[:id])
    render json: @menu
  end

  def create
    menu = @restaurant.menus.new(menu_params)
    # @menu = @restaurant.menus.new(menu_params)
    if menu.save
      render json: menu
    else
      render json: { errors: menu.errors }, status:
      :unprocessable_entity
    end
  end

  def update 
    # @menu = Menu.find(params[:id])
    @menu = @restaurant.menus.find(params[:id])
    if @menu.update(menu_params)
      render json:@menu
    else
      render json: { errors: @menu.errors }, status:
      :unproccesable_entity
    end
  end

  def destroy
    # Menu.find(params[:id]).destroy
    @restaurant.menus.find(params[:id]).destroy
    # @menu.destroy
    render json: { message: 'menu deleted' }
  end

  private
  def menu_params
    params.require(:menu).permit(:name, :image, :description, :restaurant_id)
  end

  def set_menu
    @menu = @restaurant.menus.find(params[:id])
  end

  def set_restaurant
    @restaurant = Restaurant.find(params[:restaurant_id])
  end
end