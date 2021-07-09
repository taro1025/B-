if Rails.env === 'production'
    Rails.application.config.session_store :cookie_store, key: '_beplus', domain: 'example-769847477.ap-northeast-1.elb.amazonaws.com', secure: false
else
    Rails.application.config.session_store :cookie_store, key: '_beplus', secure: false
end
