# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://127.0.0.1:8000', 'http://localhost:8000', 'http://127.0.0.1', 'http://localhost', 'http://example-769847477.ap-northeast-1.elb.amazonaws.com', /\Ahttps:\/\/.*.amazonaws.com\z/
    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      credentials: true
  end
end
