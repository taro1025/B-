if Rails.env === 'production'
    Rails.application.config.session_store :cookie_store, key: '_dhioru', domain: 'フロントエンドのドメイン'
else
    Rails.application.config.session_store :cookie_store, key: '_beplus', secure: false
end
