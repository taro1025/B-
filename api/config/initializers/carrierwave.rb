CarrierWave.configure do |config|
  config.asset_host = "http://127.0.0.1:3000"
  config.storage = :file
  config.cache_storage = :file
end
