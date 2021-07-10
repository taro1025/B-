require 'carrierwave/storage/abstract'
require 'carrierwave/storage/file'
require 'carrierwave/storage/fog'

CarrierWave.configure do |config|
  if Rails.env.production?
    config.storage = :fog
    config.fog_provider = 'fog/aws'
    config.fog_credentials = {
    provider: 'AWS',
    aws_access_key_id: Rails.application.credentials.aws[:access_key_id],#AWSのaccess_key_id
    aws_secret_access_key: Rails.application.credentials.aws[:secret_access_key],#AWSのsecret_access_key
    region: 'ap-northeast-1' #アジアパシフィック（東京）を表している
  }

  config.fog_directory  = 'b-plus-image-bucket'
  config.asset_host = 'https://s3-ap-northeast-1.amazonaws.com/b-plus-image-bucket'
  else
    config.asset_host = "http://127.0.0.1:3000"
    config.storage = :file
    config.cache_storage = :file
  end

end
