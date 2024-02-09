FROM node:latest
WORKDIR /var/www/html/parc
# ENTRYPOINT "/copy.sh"

COPY . .

COPY copy.sh /copy.sh
RUN chmod +x /copy.sh

