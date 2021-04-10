class Api::MenusController < ApplicationController
  before_action :set_restaurant

  def index
    render json: @restaurant.menus
  end

  def show
    @menu = Menu.find(params[:id])
    render json: @menu
  end

  def create
    @menu = Menu.new(menu_params)
    if @menu.save
      render json: @menu
    else
      render json: { errors: @menu.errors }, status:
      :unprocessable_entity
    end
  end

  def update 
    @menu = Menu.find(params[:id])
    if @menu.update(menu_params)
      render json:@menu
    else
      render json: { errors: @menu.errors }, status:
      :unproccesable_entity
    end
  end

  def destroy
    Menu.find(params[:id]).destroy
    @menu.destroy
    render json: { message: 'menu deleted' }
  end

  private
  def menu_params
    params.require(:menu).permit(:name, :image, :description)
  end

  def set_restaurant
    @restaurant = Restaurant.find(params[:restaurant_id])
  end
end