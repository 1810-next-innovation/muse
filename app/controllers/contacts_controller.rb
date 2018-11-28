class ContactsController < ApplicationController

	def new
		@contact = Contact.new
	end

	def create
		contact = Contact.new(contact_params)
		if contact.save
		  @success_m = "Thank you very much for your inquiry. We will confirm the contents of the inquiry and we will respond later from the person in charge. Sorry to have kept you waiting for a while, thank you."
		  redirect_to new_contact_path
    else
	    redirect_to new_contact_path
		end
	end

	def index

	end

	def about

	end

	def recieve
		@contacts = Contact.all.order(created_at: :desc)
	end

	def destroy
		@contact = Contact.find(params[:id])
		@contact.destroy
		redirect_to contacts_recieve_path
	end

	private
    def contact_params
        params.require(:contact).permit(:name, :email, :body)
    end
end
