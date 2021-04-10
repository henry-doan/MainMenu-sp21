class Api::ItemsController < ApplicationController
  def index
    render json: Item.all
  end

  def show
    @item = Item.find(params[:id])
    render json: @item
  end

  def create
    @item = Item.new(item_params)
    if @item.save
      render json: @item
    else
      render json: { errors: @item.errors }, status: :unprocessable_entity
    end
  end

  def update
    @item = Item.find(params[:id])
    if @item.update(item_params)
      render json: @item
    else
      render json: { errors: @item.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    Item.find(params[:id]).destroy
    @item.destroy
    render json: { message: 'item deleted' }
  end

  private
  def item_params
    params.require(:item).permit(:name, :description, :price, :image )
  end

  def set_menu
    @menu = Menu.find(params[:menu_id])
  end

end
