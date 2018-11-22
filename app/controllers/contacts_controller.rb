class ContactsController < ApplicationController

	def new
		@contact = Contact.new
	end

	def create
		contact = Contact.new(contact_params)
		contact.save
		redirect_to contacts_recieve_path

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
