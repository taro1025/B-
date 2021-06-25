FROM ruby:3.0


RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
  && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
  && apt-get update -qq \
  && apt-get install -y nodejs yarn cron
WORKDIR /app
COPY . /app
RUN bundle config --local set path 'vendor/bundle' \
  && bundle install \
  && mkdir -p tmp/sockets \
  && mkdir -p tmp/pids

# wheneverでcrontab書き込み
RUN bundle exec whenever --update-crontab

# cronをフォアグラウンド実行
CMD ["cron", "-f"]
