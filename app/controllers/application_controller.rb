class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  before_action :configure_devise_permitted_parameters, if: :devise_controller?

  def configure_devise_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: %i[display_name email password password_confirmation])
  end
end
