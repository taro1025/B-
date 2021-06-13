FROM nginx:1.15.8

RUN rm -f /etc/nginx/conf.d/*
RUN rm -r -f /usr/share/nginx/html #追加
ADD nginx.conf /etc/nginx/conf.d/fitO2.conf

# ビルド完了後にNginxを起動
CMD /usr/sbin/nginx -g 'daemon off;' -c /etc/nginx/nginx.conf
