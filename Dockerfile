# FROM node:alpine
# WORKDIR /app
# COPY ./package*.json ./
# RUN npm install
# COPY . .
# RUN npx prisma migrate dev
# RUN npx prisma generate
# CMD ["npm", "run", "start:dev"]



FROM postgis/postgis:13-3.1-alpine

RUN apk update && \
    apk add --no-cache --virtual .build-deps libtool gcc make cmake musl-dev postgresql-server-dev-all git pgxnclient && \
    git clone https://github.com/zachasme/h3-pg.git && \
    cd h3-pg && \
    pgxn install h3 && \
    su-exec postgres createdb smarterrand && \
    su-exec postgres psql -d smarterrand -c "CREATE EXTENSION h3;" \
    make && \
    make install && \
    cd .. && \
    apk del .build-deps && \
    rm -rf h3-pg

# RUN apk add --no-cache postgresql-12 postgresql-client-12 && \
#     pgxn install h3 && \
#     su-exec postgres createdb your_database && \
#     su-exec postgres psql -d your_database -c "CREATE EXTENSION h3;"
