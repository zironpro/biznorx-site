# Used on the `deploy` branch, which GitHub Actions fills with the finished site.
# Dokploy builds this in seconds: no Node, no npm — just Nginx serving the files on port 80.
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY site /usr/share/nginx/html
EXPOSE 80
