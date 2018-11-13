class ContactsController < ApplicationController

	def new
		@contact = Contact.new
	end

	def create
		@contact = Contact.new
		redirect_to new_contact_path

	end

	def index

	end

	def about

	end
end
