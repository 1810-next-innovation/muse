class ReviewsController < ApplicationController

	def create
		@item = Item.find(params[:item_id]) 
        @review = @item.reviews.build(review_params) 
        @review.save
        redirect_to item_path(@item.id)

	end

	def destroy
        @review = Review.find(params[:review_id])
        # @item = Item.find(params[:item_id])
        if @review.destroy
        redirect_to item_path(params[:item_id])
        end
    end

    private

    def review_params
      params.require(:review).permit(:review_text, :item_id, :reviewer_name)
    end
end
